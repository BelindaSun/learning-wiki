/* 下一个词 The Next Word — V2: a film about how AI works, drawn from Belinda's Learning Wiki.
   Deterministic: FILM.render(ctx, t) draws the frame at time t (seconds). */
(function () {
  const W = 1280, H = 720, DUR = 258;
  // Color has a job: ink = the AI's marker, her = Belinda's own words, soft = asides.
  const C = { paper: '#F3EEE4', ink: '#2A2826', her: '#C4552C', soft: '#7A736B' };
  const FI = '"EB Garamond","Noto Serif SC",serif';
  const FH = '"Caveat","Long Cang",cursive';

  // ---------- small math ----------
  function rng(seed) { let a = seed >>> 0; return () => { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function hash(s) { let h = 2166136261; for (const c of s) { h ^= c.codePointAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const ease = x => x < .5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  const P = (t, a, b) => clamp((t - a) / (b - a));
  const E = (t, a, b) => ease(P(t, a, b));
  const env = (t, a, b, c, d) => Math.min(E(t, a, b), 1 - E(t, c, d));

  // ---------- drawing primitives ----------
  function font(ctx, o) { ctx.font = `${o.italic ? 'italic ' : ''}${o.weight || 400} ${o.size || 34}px ${o.font || FI}`; }
  function measure(ctx, text, o = {}) { ctx.save(); font(ctx, o); const w = [...text].reduce((s, c) => s + ctx.measureText(c).width, 0); ctx.restore(); return w; }

  // handwriting-ish reveal: characters arrive one by one, each a little off-true.
  function write(ctx, text, x, y, p, o = {}) {
    if (p <= 0) return;
    ctx.save(); font(ctx, o);
    ctx.fillStyle = o.color || C.ink; ctx.textBaseline = 'alphabetic';
    if (o.alpha != null) ctx.globalAlpha *= o.alpha;
    const ch = [...text], ws = ch.map(c => ctx.measureText(c).width);
    const tw = ws.reduce((a, b) => a + b, 0);
    let cx = o.align === 'left' ? x : o.align === 'right' ? x - tw : x - tw / 2;
    const r = rng(o.seed ?? hash(text)), shown = p * ch.length, jit = o.jit ?? 1;
    for (let i = 0; i < ch.length; i++) {
      const rr = r() - .5, dy = r() - .5, a = clamp(shown - i);
      if (a > 0) {
        ctx.save(); ctx.globalAlpha *= a;
        ctx.translate(cx + ws[i] / 2, y + dy * 1.8 * jit + (1 - a) * 3);
        ctx.rotate(rr * .05 * jit);
        ctx.fillText(ch[i], -ws[i] / 2, 0); ctx.restore();
      }
      cx += ws[i];
    }
    ctx.restore();
  }

  function wline(ctx, pts, p, o = {}) {
    if (p <= 0) return;
    const r = rng(o.seed || 7), wob = o.wob ?? 1.1, d = [];
    for (let k = 0; k < pts.length - 1; k++) {
      const [x1, y1] = pts[k], [x2, y2] = pts[k + 1], L = Math.hypot(x2 - x1, y2 - y1) || 1;
      const n = Math.max(1, Math.ceil(L / 10)), nx = -(y2 - y1) / L, ny = (x2 - x1) / L, ph = r() * 6;
      for (let i = 0; i < n; i++) { const u = i / n, off = (Math.sin(u * 5 + ph) * .7 + (r() - .5) * .5) * wob; d.push([x1 + (x2 - x1) * u + nx * off, y1 + (y2 - y1) * u + ny * off]); }
    }
    d.push(pts[pts.length - 1]);
    ctx.save(); ctx.strokeStyle = o.color || C.ink; ctx.lineWidth = o.w || 2.2; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    if (o.alpha != null) ctx.globalAlpha *= o.alpha;
    const f = p * (d.length - 1), m = Math.floor(f);
    ctx.beginPath(); ctx.moveTo(d[0][0], d[0][1]);
    for (let i = 1; i <= m; i++) ctx.lineTo(d[i][0], d[i][1]);
    if (m < d.length - 1) { const a = d[m], b = d[m + 1], q = f - m; ctx.lineTo(a[0] + (b[0] - a[0]) * q, a[1] + (b[1] - a[1]) * q); }
    ctx.stroke(); ctx.restore();
  }
  function wrect(ctx, x, y, w, h, p, o = {}) { wline(ctx, [[x - 3, y + 1], [x + w, y], [x + w + 1, y + h], [x, y + h + 1], [x + 1, y - 4]], p, o); }
  function wcirc(ctx, cx, cy, rx, ry, p, o = {}) {
    const r = rng(o.seed || 3), ph = r() * 6, a0 = o.a0 ?? -2.4, pts = [], turns = o.turns ?? 1.12;
    for (let i = 0; i <= 90; i++) { const u = i / 90, a = a0 + u * Math.PI * 2 * turns, k = 1 + .04 * Math.sin(u * 7 + ph) + (u - .5) * .07; pts.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]); }
    wline(ctx, pts, p, { ...o, wob: .3 });
  }
  function dot(ctx, x, y, r, color, a = 1) { ctx.save(); ctx.globalAlpha *= a; ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
  // a small drawn face: the 😄 and 😉 that live all through her notes
  function face(ctx, x, y, s, p, color, wink) {
    if (p <= 0) return;
    if (wink) wline(ctx, [[x - s * .5, y - s * .25], [x - s * .15, y - s * .3]], P(p, 0, .3), { color, w: 2.4, wob: .2 });
    else dot(ctx, x - s * .32, y - s * .28, 2.6, color, P(p, 0, .3));
    dot(ctx, x + s * .32, y - s * .28, 2.6, color, P(p, .2, .45));
    const pts = []; for (let i = 0; i <= 20; i++) { const a = .15 * Math.PI + i / 20 * .7 * Math.PI; pts.push([x + Math.cos(a) * s * .55, y - s * .05 + Math.sin(a) * s * .45]); }
    wline(ctx, pts, P(p, .4, 1), { color, w: 2.4, wob: .2 });
  }
  function halo(ctx, x, y, rx, ry, a = .92) {
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(x, y); ctx.scale(rx, ry);
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 1); g.addColorStop(0, C.paper); g.addColorStop(.6, 'rgba(243,238,228,.85)'); g.addColorStop(1, 'rgba(243,238,228,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, 1, 0, Math.PI * 2); ctx.fill(); ctx.restore();
  }
  // ---------- two first-class languages ----------
  // Each language gets its own face: Noto Serif SC / EB Garamond for the marker, Long Cang / Caveat for her hand.
  // Latin faces run small beside CJK at the same px, so English is set ~10% larger to match optically.
  // Same color, same weight, roman (never italic-as-secondary), written in the same stroke.
  // Whichever language the line was first said in comes first.
  const ZI = '"Noto Serif SC","EB Garamond",serif', EI = '"EB Garamond","Noto Serif SC",serif';
  const ZHH = '"Long Cang","Caveat",cursive', EHH = '"Caveat","Long Cang",cursive';
  const oz = o => ({ ...o, font: o.hand ? ZHH : ZI });
  const oe = o => ({ ...o, font: o.hand ? EHH : EI, size: Math.round((o.size || 34) * (o.hand ? 1.12 : 1.1)) });
  const zh = (ctx, s, x, y, p, o = {}) => write(ctx, s, x, y, p, oz(o));
  const en = (ctx, s, x, y, p, o = {}) => write(ctx, s, x, y, p, oe(o));
  const mz = (ctx, s, o = {}) => measure(ctx, s, oz(o)), me = (ctx, s, o = {}) => measure(ctx, s, oe(o));
  function bi(ctx, z, e, x, y, p, o = {}) {
    const g = o.gap ?? Math.round((o.size || 34) * 1.28);
    if (o.enFirst) { en(ctx, e, x, y, p, o); zh(ctx, z, x, y + g, p, o); }
    else { zh(ctx, z, x, y, p, o); en(ctx, e, x, y + g, p, o); }
  }
  const head = (ctx, z, e, a) => bi(ctx, z, e, 90, 80, 1, { size: 19, color: C.soft, align: 'left', alpha: a, gap: 27 });

  // "猫 cat" on one line: both languages, side by side
  function duo(ctx, z, e, x, y, p, o = {}) {
    const wz = mz(ctx, z, o), we = me(ctx, e, o), g = o.sep ?? 10, tw = wz + g + we;
    const x0 = o.align === 'left' ? x : o.align === 'right' ? x - tw : x - tw / 2;
    zh(ctx, z, x0, y, p, { ...o, align: 'left' }); en(ctx, e, x0 + wz + g, y, p, { ...o, align: 'left' });
    return tw;
  }
  // a row of token boxes, centred on x
  function trow(ctx, toks, lang, x, y, o, pad, gap) {
    const mf = lang === 'zh' ? mz : me, ws = toks.map(s => mf(ctx, s.trim(), o) + pad * 2);
    let cx = x - (ws.reduce((a, b) => a + b, 0) + gap * (toks.length - 1)) / 2;
    return toks.map((s, i) => { const r = { x0: cx, w: ws[i], cx: cx + ws[i] / 2, s: s.trim() }; cx += ws[i] + gap; return r; });
  }
  const fz = n => n < 1e4 ? String(Math.floor(n)) : n < 1e8 ? Math.floor(n / 1e4) + ' 万' : n < 1e12 ? Math.floor(n / 1e8) + ' 亿' : Math.floor(n / 1e12) + ' 万亿';
  const fe = n => Math.floor(n).toLocaleString('en-US');

  // ---------- scenes ----------
  const S = [];

  // 0 · a question
  S.push({ s: 0, d: 14, fi: .01, fo: 1.2, ghost: 9, draw(ctx, t) {
    const a = 1 - E(t, 9.4, 10.2);
    ctx.save(); ctx.globalAlpha *= a;
    wrect(ctx, 400, 262, 480, 112, E(t, .3, 1.2), { seed: 1, color: C.soft, w: 1.6 });
    const p = P(t, 1.4, 3.2), qo = { size: 30, color: C.her, align: 'left', jit: 0 };
    zh(ctx, '你是什么？', 432, 306, p, qo); en(ctx, 'What are you?', 432, 352, p, qo);
    if (t < 4.4 && Math.floor(t * 1.7) % 2 === 0) { const cx = 436 + me(ctx, 'What are you?', qo) * p; wline(ctx, [[cx, 328], [cx, 360]], 1, { w: 2, wob: 0, color: C.her }); }
    if (t > 4.1) write(ctx, '↵', 850, 356, 1, { size: 26, color: C.her, alpha: 1 - E(t, 4.6, 5.4), jit: 0, font: EI });
    bi(ctx, '接下来这一秒钟，放慢约 250 倍。', 'The next second, slowed down about 250 times.', 640, 452, P(t, 5.2, 6.8), { size: 26, gap: 36 });
    bi(ctx, '在 AI 回答你之前，里面发生了什么。', 'What happens inside an AI before it answers you.', 640, 548, P(t, 7, 8.4), { size: 20, color: C.soft, gap: 28 });
    ctx.restore();
    zh(ctx, '下一个词', 640, 316, P(t, 10.3, 11.6), { size: 88, weight: 600 });
    en(ctx, 'The Next Word', 640, 398, P(t, 10.3, 11.6), { size: 62 });
    wline(ctx, [[560, 428], [720, 426]], E(t, 11.6, 12.3), { color: C.her, w: 2 });
  } });

  // 1 · tokens, then a space of meaning
  const QE = ['What', ' are', ' you', '?'], QZ = ['你', '是', '什么', '？'], IDE = [3923, 527, 499, 30], IDZ = [57668, 21043, 101, 11571];
  const MAP = [['猫', 'cat', 520, 290], ['狗', 'dog', 590, 330], ['兔', 'rabbit', 530, 375], ['巴黎', 'Paris', 930, 225], ['东京', 'Tokyo', 1020, 262], ['北京', 'Beijing', 950, 305], ['国王', 'king', 700, 462], ['女王', 'queen', 790, 492], ['苹果', 'apple', 1010, 440], ['香蕉', 'banana', 1090, 480]];
  S.push({ s: 14, d: 26, fo: 1.2, ghost: 24, draw(ctx, t) {
    head(ctx, '第一步：切成小块', 'Step 1: cut it into pieces', E(t, .2, 1));
    const a1 = 1 - E(t, 8.8, 9.6);
    if (a1 > 0) {
      ctx.save(); ctx.globalAlpha *= a1;
      const sp = E(t, 1.2, 2.8), o = { size: 34 };
      [[QE, 'en', 232, IDE], [QZ, 'zh', 342, IDZ]].forEach(([toks, lang, y, ids], li) => {
        trow(ctx, toks, lang, 640, y, o, 4 + 8 * sp, 22 * sp).forEach((r, i) => {
          (lang === 'zh' ? zh : en)(ctx, r.s, r.cx, y, P(t, .3, 1), { ...o, seed: 30 + li * 9 + i });
          wrect(ctx, r.x0, y - 36, r.w, 50, E(t, 2.2 + i * .12, 3 + i * .12), { seed: 40 + li * 9 + i, w: 1.6 });
          write(ctx, String(ids[i]), r.cx, y + 44, 1, { size: 18, color: C.soft, font: EI, alpha: E(t, 3.4 + i * .1, 4.2 + i * .1), jit: 0 });
        });
      });
      duo(ctx, '编号仅为示意', 'IDs are illustrative', 640, 424, 1, { size: 14, color: C.soft, alpha: E(t, 4, 4.8) });
      bi(ctx, '模型看不见字，只看见编号。这些小块叫 token。', 'The model cannot see letters, only numbers. These pieces are called tokens.', 640, 504, P(t, 4.6, 6.6), { size: 25, gap: 36 });
      ctx.restore();
    }
    const lt = t - 9.5;
    if (lt > 0) {
      duo(ctx, '猫', 'cat', 110, 332, P(lt, .1, .6), { size: 24, align: 'left' });
      const r = rng(77);
      for (let k = 0; k < 12; k++) { const v = (r() - .5) * 2, y = 252 + k * 14; wline(ctx, [[300, y], [300 + v * 44, y]], E(lt, .4 + k * .06, .8 + k * .06), { w: 5, wob: 0, color: C.ink, seed: 90 + k }); }
      wline(ctx, [[300, 244], [300, 420]], E(lt, .3, .9), { w: 1, color: C.soft, wob: 0 });
      wline(ctx, [[360, 330], [420, 316], [500, 292]], E(lt, 1.4, 2), { w: 1.4, color: C.soft, seed: 7 });
      MAP.forEach(([z, e, x, y], i) => { dot(ctx, x, y, 5, C.ink, E(lt, 1.8 + i * .22, 2 + i * .22)); duo(ctx, z, e, x, y - 14, P(lt, 1.9 + i * .22, 2.4 + i * .22), { size: 17, sep: 6 }); });
      [[545, 330, 90, 70], [965, 262, 110, 70], [745, 478, 90, 40], [1050, 462, 80, 44]].forEach(([x, y, rx, ry], i) => wcirc(ctx, x, y - 10, rx, ry, E(lt, 7.6 + i * .2, 8.4 + i * .2), { color: C.soft, w: 1.3, seed: 60 + i }));
      bi(ctx, '每个 token 再变成一串数字：意义空间里的一个坐标。', 'Each token then becomes a list of numbers: a point in a space of meaning.', 640, 590, P(lt, 1, 3), { size: 24, gap: 34, alpha: 1 - E(lt, 6.8, 7.4) });
      bi(ctx, '意思相近的词，住得很近。', 'Words that mean similar things live close together.', 640, 590, P(lt, 7.6, 9), { size: 24, gap: 34 });
      bi(ctx, '（真实的空间有上千个维度，这里压成了两维。）', '(The real space has thousands of dimensions, squashed here into two.)', 640, 668, 1, { size: 15, color: C.soft, gap: 20, alpha: E(lt, 11, 12) });
    }
  } });

  // 2 · attention
  const AE = ['The', 'animal', "didn't", 'cross', 'the', 'street', 'because', 'it', 'was', 'too', 'tired.'], AZ = ['小猫', '没有', '过', '马路', '，', '因为', '它', '太', '累', '了', '。'];
  const WE = [[0, .04, .04], [1, .55, .1], [3, .05, .05], [5, .12, .58], [6, .08, .08], [10, .16, .18]], WZ = [[0, .56, .1], [2, .05, .05], [3, .12, .58], [5, .08, .08], [8, .16, .18]];
  function arcs(ctx, rs, from, W8, y, k, grow) {
    const f = rs[from];
    W8.forEach(([j, w0, w1], n) => {
      const w = (w0 + (w1 - w0) * k) * grow, r = rs[j]; if (w <= 0) return;
      const h = 22 + Math.abs(r.cx - f.cx) * .17, pts = [];
      for (let i = 0; i <= 24; i++) { const u = i / 24; pts.push([f.cx + (r.cx - f.cx) * u, y - 34 - Math.sin(u * Math.PI) * h]); }
      wline(ctx, pts, 1, { w: 1 + 7 * w, alpha: .2 + .8 * Math.min(1, w * 1.6), wob: .4, seed: 300 + j + n });
    });
  }
  function lrow(ctx, toks, lang, x, y, o, gap) { const mf = lang === 'zh' ? mz : me; let cx = x; return toks.map(s => { const w = mf(ctx, s, o); const r = { x0: cx, w, cx: cx + w / 2, s }; cx += w + gap; return r; }); }
  S.push({ s: 40, d: 24, fo: 1.2, ghost: 21, draw(ctx, t) {
    head(ctx, '第二步：互相看', 'Step 2: every word looks at the others', E(t, .2, 1));
    const o = { size: 30, align: 'left' }, k = E(t, 12, 13.6), grow = E(t, 3, 4.6);
    const re = lrow(ctx, AE, 'en', 120, 272, o, me(ctx, ' ', o)), rz = lrow(ctx, AZ, 'zh', 120, 476, o, 4);
    arcs(ctx, re, 7, WE, 272, k, grow); arcs(ctx, rz, 6, WZ, 476, k, grow);
    re.forEach((r, i) => {
      if (i === 10) { en(ctx, 'tired.', r.x0, 272, P(t, .4, 2), { ...o, alpha: 1 - E(t, 11.2, 12) }); en(ctx, 'wide.', r.x0, 272, 1, { ...o, alpha: E(t, 11.8, 12.6) }); }
      else en(ctx, r.s, r.x0, 272, P(t, .4, 2), { ...o, seed: 500 + i });
    });
    rz.forEach((r, i) => {
      if (i === 8) { zh(ctx, '累', r.x0, 476, P(t, .4, 2), { ...o, alpha: 1 - E(t, 11.2, 12) }); zh(ctx, '宽', r.x0, 476, 1, { ...o, alpha: E(t, 11.8, 12.6) }); }
      else zh(ctx, r.s, r.x0, 476, P(t, .4, 2), { ...o, seed: 600 + i });
    });
    wrect(ctx, re[7].x0 - 6, 240, re[7].w + 12, 44, E(t, 2, 2.8), { w: 1.6, seed: 71 }); wrect(ctx, rz[6].x0 - 6, 444, rz[6].w + 12, 44, E(t, 2, 2.8), { w: 1.6, seed: 72 });
    [[re, 1, 5, 284], [rz, 0, 3, 488]].forEach(([rs, a, b, y], n) => { const j = k < .5 ? a : b, al = grow * (k < .5 ? 1 - E(k, .2, .5) : E(k, .5, .8)); wline(ctx, [[rs[j].x0, y + 4], [rs[j].x0 + rs[j].w, y + 3]], 1, { w: 2.4, alpha: al, seed: 80 + n }); });
    bi(ctx, '读到「它」的时候，模型回头看每一个词，决定该听谁的。', 'At “it”, the model looks back at every word and decides which ones to listen to.', 640, 574, P(t, 5, 7.4), { size: 23, gap: 32, alpha: 1 - E(t, 10.6, 11.2) });
    bi(ctx, '换一个词，注意力就换了方向。这就是 Attention。', 'Change one word and the attention turns. That is attention.', 640, 574, P(t, 13.4, 15.4), { size: 23, gap: 32 });
    bi(ctx, '这样的「看」每一层都要做一遍，一个模型有几十层。', 'This looking happens again in every layer, and a model has dozens of layers.', 640, 664, 1, { size: 17, color: C.soft, gap: 24, alpha: E(t, 17.4, 18.4) });
  } });

  // 3 · parameters
  S.push({ s: 64, d: 16, fo: 1.2, ghost: 14, draw(ctx, t) {
    head(ctx, '这些计算，由什么决定', 'What decides all this', E(t, .2, 1));
    const s = 26 + (4 - 26) * E(t, 1.5, 9), x0 = 140, x1 = 1140, y0 = 150, y1 = 500, cx = 640, cy = 325;
    ctx.save(); ctx.fillStyle = C.ink;
    const ni = Math.ceil((x1 - x0) / 2 / s), nj = Math.ceil((y1 - y0) / 2 / s), q = s * .42, av = E(t, .3, 1.2);
    for (let i = -ni; i <= ni; i++) for (let j = -nj; j <= nj; j++) {
      const v = Math.abs(Math.sin(i * 12.9898 + j * 78.233) * 43758.5453) % 1;
      ctx.globalAlpha = av * (.12 + .6 * v); ctx.fillRect(cx + i * s - q / 2, cy + j * s - q / 2, q, q);
    }
    ctx.restore();
    halo(ctx, 640, 560, 380, 50);
    const n = Math.pow(10, 3 + 8 * E(t, 1.5, 9));
    duo(ctx, '参数：' + (t > 9 ? '上千亿' : fz(n)), 'parameters: ' + (t > 9 ? 'hundreds of billions' : fe(n)), 640, 566, 1, { size: 26, alpha: E(t, 1.2, 2), jit: 0, sep: 24 });
    bi(ctx, '几十亿到上万亿个数字：这就是模型本身。', 'Billions to trillions of numbers: this is the model itself.', 640, 620, P(t, 9.6, 11.4), { size: 23, gap: 32 });
    bi(ctx, '像一份乐谱：自己不会响，要交给程序去演奏。', 'Like a musical score: it cannot play itself. A program has to perform it.', 640, 688, 1, { size: 16, color: C.soft, gap: 20, alpha: E(t, 12, 13) });
  } });

  // 4 · the next word
  const NZ = [['我', .64], ['一个', .13], ['你好', .07], ['作为', .05], ['其他', .11]], NE = [['I', .58], ['A', .15], ['Hello', .08], ['As', .06], ['other', .13]];
  function chart(ctx, items, lang, lx, bx, t, t0, pick) {
    items.forEach(([l, v], i) => {
      const y = 250 + i * 42, last = i === items.length - 1;
      (lang === 'zh' ? zh : en)(ctx, l, lx, y, 1, { size: 22, align: 'right', color: last ? C.soft : C.ink, alpha: E(t, t0 + i * .1, t0 + .5 + i * .1) });
      const L = v / .64 * 250 * E(t, t0 + .3 + i * .12, t0 + 1.6 + i * .12);
      if (L > 0) wline(ctx, [[bx, y - 7], [bx + L, y - 7]], 1, { w: 14, wob: .3, color: last ? C.soft : C.ink, alpha: .75, seed: 400 + i });
      write(ctx, Math.round(v * 100) + '%', bx + L + 12, y, 1, { size: 18, font: EI, color: C.soft, align: 'left', alpha: E(t, t0 + 1.4, t0 + 2), jit: 0 });
      if (pick > 0 && i === pick - 1) dot(ctx, lx - 60 - (lang === 'zh' ? 0 : 0), y - 7, 6, C.ink);
    });
  }
  S.push({ s: 80, d: 22, fo: 1.2, ghost: 19, draw(ctx, t) {
    head(ctx, '第三步：猜下一个词', 'Step 3: guess the next word', E(t, .2, 1));
    duo(ctx, '你是什么？', 'What are you?', 640, 150, 1, { size: 22, color: C.her, alpha: E(t, .3, 1) });
    zh(ctx, '下一个词可能是……', 330, 204, 1, { size: 18, color: C.soft, alpha: E(t, .8, 1.4) });
    en(ctx, 'The next word might be…', 900, 204, 1, { size: 18, color: C.soft, alpha: E(t, .8, 1.4) });
    const q = E(t, 10.4, 12.6), pick = t > 10.4 ? (Math.floor(q * 15) % 5) + 1 : 0;
    chart(ctx, NZ, 'zh', 250, 270, t, 1, pick); chart(ctx, NE, 'en', 810, 830, t, 1.2, pick);
    wcirc(ctx, 236, 243, 28, 22, E(t, 12.6, 13.3), { w: 2.2, seed: 12 }); wcirc(ctx, 800, 243, 24, 22, E(t, 12.8, 13.5), { w: 2.2, seed: 13 });
    duo(ctx, '概率仅为示意', 'probabilities are illustrative', 640, 470, 1, { size: 14, color: C.soft, alpha: E(t, 3, 3.8) });
    bi(ctx, '它不「知道」答案。它算的是：每个词出现在下一个位置的可能性。', 'It doesn’t “know” the answer. It computes how likely each word is to come next.', 640, 530, P(t, 4, 6.4), { size: 23, gap: 32, alpha: 1 - E(t, 10, 10.6) });
    bi(ctx, '然后，从这些可能里挑一个。', 'Then it picks one of them.', 640, 530, P(t, 12.8, 14), { size: 23, gap: 32 });
    bi(ctx, '「温度」决定它有多敢挑不太可能的词：低温更稳，高温更敢冒险。', '“Temperature” sets how willing it is to pick unlikely words: low is steadier, high takes more chances.', 640, 632, 1, { size: 17, color: C.soft, gap: 24, alpha: E(t, 15.6, 16.6) });
  } });

  // 5 · again, and again
  const RZ = ['我', '是', '一个', '语言', '模型', '。'], RE = [' I', ' am', ' a', ' language', ' model', '.'];
  S.push({ s: 102, d: 22, fo: 1.2, ghost: 19, draw(ctx, t) {
    head(ctx, '第四步：再来一遍，再来一遍', 'Step 4: again, and again', E(t, .2, 1));
    const o = { size: 36, align: 'left' }, x = 250;
    [['zh', '你是什么？', RZ, 300], ['en', 'What are you?', RE, 364]].forEach(([lang, q, toks, y]) => {
      const f = lang === 'zh' ? zh : en, mf = lang === 'zh' ? mz : me;
      f(ctx, q, x, y, 1, { ...o, color: C.her }); let cx = x + mf(ctx, q, o) + (lang === 'zh' ? 8 : 0);
      toks.forEach((s, k) => {
        const tk = 1.6 + k * 1.9, w = mf(ctx, s, o);
        f(ctx, s, cx, y, P(t, tk, tk + .4), { ...o, seed: 700 + k });
        if (t > tk) wrect(ctx, cx - 4, y - 34, w + 8, 46, 1, { w: 1.4, color: C.soft, alpha: 1 - E(t, tk + .4, tk + 1.6), seed: 720 + k });
        if (lang === 'en' && t > tk + .3 && t < tk + 1.9) {
          const ex = cx + w / 2, pts = []; for (let i = 0; i <= 24; i++) { const u = i / 24; pts.push([ex + (x + 20 - ex) * u, 392 + Math.sin(u * Math.PI) * 44]); }
          wline(ctx, pts, E(t, tk + .3, tk + 1.1), { w: 1.6, color: C.soft, alpha: 1 - E(t, tk + 1.3, tk + 1.9), seed: 740 + k });
        }
        cx += w + (lang === 'zh' ? 4 : 0);
      });
    });
    bi(ctx, '选中的词接到句子后面，整句话再送回模型，去猜下一个。', 'The chosen word is added to the end, and the whole sentence goes back in to guess the next.', 640, 530, P(t, 2.4, 4.6), { size: 23, gap: 32, alpha: 1 - E(t, 12.4, 13) });
    bi(ctx, '一次只写一个词。它说的每一句话，都是这样一个词一个词接出来的。', 'One word at a time. Every sentence it says is built this way, word by word.', 640, 530, P(t, 13.2, 15.4), { size: 23, gap: 32 });
    bi(ctx, '为了不每次都从头算，它会把算过的中间结果存起来，叫 KV Cache。', 'To avoid redoing everything each time, it saves its earlier work. This is called the KV cache.', 640, 632, 1, { size: 17, color: C.soft, gap: 24, alpha: E(t, 16.8, 17.8) });
  } });

  // 6 · the context window (and this film's own board)
  const TAPE = ['你', '是', '什么', '？', 'What', 'are', 'you', '?', '猫', 'cat', '狗', 'dog', '国王', 'king', '它', 'it', 'tired', '宽', 'wide', '参数', '我', 'I', '是', 'am', '一个', 'a', '语言', 'model', '。', '白板', 'board'];
  S.push({ s: 124, d: 18, fo: 1.2, ghost: 16, draw(ctx, t) {
    head(ctx, '它一次能看见多少', 'How much it can see at once', E(t, .2, 1));
    const L = 300, R = 980, slot = 62, nf = 2 + t * 3.2;
    for (let i = 0; i < Math.floor(nf); i++) {
      const x = R - (nf - i) * slot + slot / 2; if (x > R) continue;
      let dy = 0, a = 1; if (x < L) { const d = L - x; dy = d * d * .004; a = 1 - d / 200; } if (a <= 0) continue;
      const s = TAPE[i % TAPE.length], isz = /[一-鿿？。]/.test(s);
      (isz ? zh : en)(ctx, s, x, 322 + dy, 1, { size: 20, alpha: a * E(t, .2, .8), jit: .4, seed: 900 + i });
      wrect(ctx, x - slot / 2 + 5, 296 + dy, slot - 10, 38, 1, { w: 1, color: C.soft, alpha: a * .8, seed: 950 + i });
    }
    wrect(ctx, L, 278, R - L, 76, E(t, .4, 1.4), { w: 2.6, seed: 97 });
    duo(ctx, '上下文窗口', 'context window', 640, 392, P(t, 1, 1.8), { size: 20 });
    bi(ctx, '它没有记忆。它只有眼前这块白板：上下文窗口。', 'It has no memory. It only has the board in front of it: the context window.', 640, 478, P(t, 2.4, 4.6), { size: 23, gap: 32, alpha: 1 - E(t, 7.6, 8.2) });
    bi(ctx, '白板写满了，最早写上去的东西就会掉下去。', 'When the board is full, the oldest writing falls off.', 640, 478, P(t, 8.4, 10.2), { size: 23, gap: 32 });
    bi(ctx, '比如这部片子的开头，已经不在这块白板上了。', 'Like the start of this film. It is no longer on this board.', 640, 590, P(t, 10.8, 12.4), { size: 20, color: C.soft, gap: 28 });
    bi(ctx, '所以每开一个新窗口，它都从一张白纸开始。', 'That is why every new window starts from a blank page.', 640, 666, 1, { size: 17, color: C.soft, gap: 24, alpha: E(t, 14.2, 15.2) });
  } });

  // 7 · training
  const FILL = [['今天天气很', '好', 'The cat sat on the', 'mat'], ['一加一等于', '二', 'Paris is the capital of', 'France'], ['床前明月', '光', 'Once upon a', 'time'], ['我想喝一杯', '水', 'Thank you very', 'much'], ['他打开了', '门', 'She opened the', 'door'], ['春眠不觉', '晓', 'To be or not to', 'be']];
  S.push({ s: 142, d: 28, fo: 1.2, ghost: 26, draw(ctx, t) {
    head(ctx, '那些参数，是怎么来的', 'Where the parameters came from', E(t, .2, 1));
    const a1 = 1 - E(t, 12, 12.8);
    if (a1 > 0) {
      ctx.save(); ctx.globalAlpha *= a1;
      bi(ctx, '训练：遮住下一个词，让它猜。', 'Training: hide the next word and make it guess.', 120, 170, P(t, .3, 1.8), { size: 22, gap: 30, align: 'left' });
      const o = { size: 30, align: 'left' };
      zh(ctx, '今天天气很', 120, 270, 1, { ...o, alpha: E(t, 1, 1.6) }); en(ctx, 'The cat sat on the', 120, 322, 1, { ...o, alpha: E(t, 1, 1.6) });
      const zx = 128 + mz(ctx, '今天天气很', o), ex = 132 + me(ctx, 'The cat sat on the', o);
      wline(ctx, [[zx, 276], [zx + 80, 276]], E(t, 1.4, 1.8), { w: 1.6 }); wline(ctx, [[ex, 328], [ex + 80, 328]], E(t, 1.4, 1.8), { w: 1.6 });
      zh(ctx, '月亮', zx + 8, 268, P(t, 2, 2.6), { ...o, color: C.soft }); en(ctx, 'moon', ex + 8, 320, P(t, 2, 2.6), { ...o, color: C.soft });
      wline(ctx, [[zx, 258], [zx + 72, 256]], E(t, 3, 3.4), { w: 2.4 }); wline(ctx, [[ex, 310], [ex + 76, 308]], E(t, 3, 3.4), { w: 2.4 });
      zh(ctx, '好', zx + 96, 270, P(t, 3.5, 3.9), o); en(ctx, 'mat', ex + 96, 322, P(t, 3.5, 3.9), o);
      // the parameters, nudged every time it is wrong
      const ep = t > 4 ? Math.floor(t * 6) : 0, sh = t > 4 && t < 12 ? 1 : 0;
      ctx.save(); ctx.fillStyle = C.ink;
      for (let i = 0; i < 26; i++) for (let j = 0; j < 18; j++) {
        const v = Math.abs(Math.sin(i * 12.9898 + j * 78.233) * 43758.5453) % 1, jv = sh * .25 * (Math.abs(Math.sin((i + ep) * 3.1 + j * 7.7 + ep)) % 1 - .5);
        ctx.globalAlpha *= 1; ctx.globalAlpha = a1 * E(t, .6, 1.4) * clamp(.1 + .6 * v + jv, .05, .9); ctx.fillRect(820 + i * 13, 190 + j * 13, 6, 6);
      }
      ctx.restore();
      duo(ctx, '参数', 'parameters', 988, 450, 1, { size: 17, color: C.soft, alpha: a1 * E(t, 1, 1.6) });
      wline(ctx, [[ex + 160, 316], [700, 300], [806, 300]], E(t, 4, 4.6), { w: 1.4, color: C.soft, seed: 3 });
      // then the rest of the internet, fast
      if (t > 6) {
        ctx.save(); ctx.beginPath(); ctx.rect(100, 360, 640, 150); ctx.clip();
        for (let k = 0; k < 40; k++) {
          const y = 520 - ((t - 6) * 90 - k * 26), f = FILL[k % FILL.length]; if (y < 340 || y > 540) continue;
          (k % 2 ? en : zh)(ctx, k % 2 ? f[2] + ' ' + f[3] : f[0] + f[1], 120, y, 1, { size: 17, color: C.soft, align: 'left', jit: .5, seed: 1000 + k });
        }
        ctx.restore();
      }
      const n = Math.pow(10, 1 + 12 * E(t, 6, 11.6));
      duo(ctx, '读过的词：' + (t > 11.6 ? '数万亿' : fz(n)), 'words read: ' + (t > 11.6 ? 'trillions' : fe(n)), 988, 490, 1, { size: 18, alpha: E(t, 6, 6.6), jit: 0 });
      bi(ctx, '猜错了，就把所有参数各调一点点。', 'When it guesses wrong, every parameter is nudged a tiny bit.', 640, 594, P(t, 4.4, 6.2), { size: 23, gap: 32, alpha: 1 - E(t, 8.4, 9) });
      bi(ctx, '没有人写下规则。它只是被纠正了数万亿次。', 'Nobody wrote the rules. It was simply corrected trillions of times.', 640, 594, P(t, 9.2, 11), { size: 23, gap: 32 });
      ctx.restore();
    }
    const lb = t - 13, ab = lb > 0 ? 1 - E(lb, 6.6, 7.4) : 0;
    if (ab > 0) {
      ctx.save(); ctx.globalAlpha *= ab;
      wline(ctx, [[160, 200], [160, 470], [560, 470]], E(lb, .1, .9), { w: 1.8, seed: 5 });
      const pts = []; for (let i = 0; i <= 40; i++) { const u = i / 40, v = 1 / (1 + Math.exp(-(u - .78) * 26)); pts.push([170 + u * 380, 455 - v * 230 - u * 14]); }
      wline(ctx, pts, E(lb, .8, 2.8), { w: 2.6, seed: 6 });
      duo(ctx, '模型规模 →', 'model size →', 360, 504, 1, { size: 16, color: C.soft, alpha: E(lb, .6, 1.2) });
      duo(ctx, '能力', 'ability', 150, 188, 1, { size: 16, color: C.soft, align: 'left', alpha: E(lb, .6, 1.2) });
      const o = { size: 22, align: 'left', gap: 30 };
      bi(ctx, '预测下一个词，逼着它学会了语法、事实，', 'Predicting the next word pushed it to learn grammar, facts,', 630, 226, P(lb, 1.8, 3.2), o);
      bi(ctx, '还有一点推理的影子。', 'and a shadow of reasoning.', 630, 300, P(lb, 3.2, 4), o);
      bi(ctx, '有些能力，模型够大才明显出现。', 'Some abilities appear only once the model is big.', 630, 390, P(lb, 4, 5), o);
      const wl = 'Like water: below 0° it is ice. Past 0°, it is water.', wx = 630 + me(ctx, wl, o) + 14;
      bi(ctx, '像水：0 度以下是冰，过了 0 度，就是水。', wl, 630, 478, P(lb, 5, 6.2), { ...o, color: C.soft });
      wline(ctx, [[wx, 500], [wx + 6, 508], [wx + 20, 488]], E(lb, 6.2, 6.5), { color: C.her, w: 2.2, wob: .2 });
      ctx.restore();
    }
    const lc = t - 20.6;
    if (lc > 0) {
      [[200, 'A', '我不确定，但我可以帮你查。', "I'm not sure, but I can help you look it up."], [680, 'B', '当然！答案就是 42。', 'Of course! The answer is 42.']].forEach(([x, l, z, e], i) => {
        wrect(ctx, x, 190, 400, 150, E(lc, .2 + i * .2, 1 + i * .2), { w: 1.8, seed: 20 + i });
        write(ctx, l, x + 20, 226, 1, { size: 18, color: C.soft, font: EI, align: 'left', alpha: E(lc, .8, 1.2) });
        bi(ctx, z, e, x + 200, 268, P(lc, 1 + i * .3, 2 + i * .3), { size: 19, gap: 28 });
      });
      wline(ctx, [[560, 300], [576, 322], [606, 272]], E(lc, 2.6, 3), { color: C.her, w: 3, wob: .3 });
      bi(ctx, '然后，人来教它怎么好好说话。', 'Then people teach it how to talk well.', 640, 430, P(lc, .3, 1.8), { size: 26, gap: 36 });
      bi(ctx, '人给回答打分，它学着更像被选中的那个。', 'People rate its answers, and it learns to be more like the ones they chose.', 640, 560, P(lc, 3.3, 5.2), { size: 21, gap: 30 });
    }
  } });

  // 8 · hardware
  S.push({ s: 170, d: 18, fo: 1.2, ghost: 16, draw(ctx, t) {
    head(ctx, '这一切发生在哪里', 'Where all this happens', E(t, .2, 1));
    wrect(ctx, 110, 180, 290, 270, E(t, .3, 1.2), { w: 2, seed: 30 });
    ctx.save(); ctx.fillStyle = C.ink;
    for (let i = 0; i < 12; i++) for (let j = 0; j < 11; j++) { const v = Math.abs(Math.sin(i * 12.9898 + j * 78.233) * 43758.5453) % 1; ctx.globalAlpha = E(t, .8, 1.6) * (.15 + .5 * v); ctx.fillRect(134 + i * 21, 200 + j * 22, 12, 12); }
    ctx.restore();
    duo(ctx, '显存', 'memory (HBM)', 255, 486, 1, { size: 18, alpha: E(t, 1, 1.6) });
    wline(ctx, [[402, 302], [630, 302]], E(t, 1, 1.6), { w: 1.8, seed: 31 }); wline(ctx, [[402, 332], [630, 332]], E(t, 1, 1.6), { w: 1.8, seed: 32 });
    for (let k = 0; k < 7; k++) { const x = 410 + ((t * 70 + k * 31) % 214); dot(ctx, x, 317, 4, C.ink, E(t, 1.6, 2.2)); }
    ctx.save();
    for (let i = 0; i < 20; i++) for (let j = 0; j < 10; j++) {
      const on = Math.abs(Math.sin(i * 7.1 + j * 3.7 + Math.floor(t * 5) * 1.3) * 999) % 1 < .14;
      ctx.globalAlpha = E(t, 1.4, 2.2) * (on ? .8 : .22); ctx.fillStyle = C.ink; ctx.fillRect(650 + i * 26, 190 + j * 26, 16, 16);
    }
    ctx.restore();
    duo(ctx, '计算核心', 'compute cores', 907, 486, 1, { size: 18, alpha: E(t, 1.6, 2.2) });
    const o = { size: 23, gap: 32 };
    bi(ctx, 'GPU 有成千上万个计算核心，同时做乘法。', 'A GPU has thousands of cores, all multiplying at once.', 640, 570, P(t, 1.8, 3.6), { ...o, alpha: 1 - E(t, 6.4, 7) });
    bi(ctx, '但每写一个词，参数都要从内存里搬过来一遍。', 'But for every word it writes, the parameters have to be moved in from memory.', 640, 570, P(t, 7.2, 9.2), { ...o, alpha: 1 - E(t, 11.6, 12.2) });
    bi(ctx, '瓶颈常常不在算，而在搬。像厨师在等食材。', 'The bottleneck is often moving, not computing. Like a chef waiting for ingredients.', 640, 570, P(t, 12.4, 14.2), o);
    bi(ctx, 'AI 看起来是软件，但它的规模受物理世界约束。', 'AI looks like software, but its scale is bound by the physical world.', 640, 664, 1, { size: 17, color: C.soft, gap: 24, alpha: E(t, 15, 16) });
  } });

  // 9 · confidently wrong
  const HZ = [['张德明', 'John Miller', .21], ['李文华', 'William Brown', .19], ['王建国', 'Thomas Hill', .17], ['（我不知道）', '(I don’t know)', .06]];
  S.push({ s: 188, d: 16, fo: 1.2, ghost: 14, draw(ctx, t) {
    head(ctx, '所以，它会自信地说错', 'So it can be confidently wrong', E(t, .2, 1));
    duo(ctx, '1847 年，这个小镇的第一任镇长叫什么？', 'Who was this town’s first mayor, in 1847?', 640, 160, 1, { size: 21, color: C.her, alpha: E(t, .3, 1) });
    HZ.forEach(([z, e, v], i) => {
      const y = 224 + i * 38;
      duo(ctx, z, e, 600, y, 1, { size: 19, align: 'right', alpha: E(t, .8 + i * .1, 1.3 + i * .1) });
      const L = v / .21 * 280 * E(t, 1.2 + i * .12, 2.4 + i * .12);
      if (L > 0) wline(ctx, [[620, y - 6], [620 + L, y - 6]], 1, { w: 12, wob: .3, alpha: .75, seed: 410 + i });
      write(ctx, Math.round(v * 100) + '%', 632 + L, y, 1, { size: 17, font: EI, color: C.soft, align: 'left', alpha: E(t, 2.2, 2.8), jit: 0 });
    });
    duo(ctx, '概率仅为示意，其余从略', 'illustrative; the rest omitted', 640, 394, 1, { size: 14, color: C.soft, alpha: E(t, 2.4, 3) });
    bi(ctx, '第一任镇长是张德明。', 'The first mayor was John Miller.', 640, 462, P(t, 4.4, 5.8), { size: 28, gap: 38 });
    wcirc(ctx, 640, 470, 250, 52, E(t, 6.4, 7.4), { color: C.her, w: 2.6, seed: 14 });
    write(ctx, '?', 910, 450, P(t, 7.4, 7.8), { size: 48, font: EHH, color: C.her });
    bi(ctx, '它最擅长的是「说得通」。说得通，不等于是真的。', 'What it does best is sound right. Sounding right is not the same as being right.', 640, 580, P(t, 8, 10.2), { size: 22, gap: 30 });
    bi(ctx, '一步 99% 可靠，连着 100 步，只剩约 37%。所以要有人来复核。', '99% reliable per step, 100 steps in a row: about 37% left. That is why people check.', 640, 666, 1, { size: 17, color: C.soft, gap: 24, alpha: E(t, 11.4, 12.4) });
  } });

  // 10 · an agent
  S.push({ s: 204, d: 18, fo: 1.2, ghost: 16, draw(ctx, t) {
    head(ctx, '给它一双手', 'Give it hands', E(t, .2, 1));
    const cx = 290, cy = 330, R = 92;
    wcirc(ctx, cx, cy, R, R, E(t, .4, 1.6), { seed: 21, turns: 1.02, w: 2 });
    [['想', 'Think', -90], ['做', 'Act', 30], ['看', 'Observe', 150]].forEach(([z, e, deg], i) => {
      const a = deg * Math.PI / 180, lx = cx + Math.cos(a) * (R + 52), ly = cy + Math.sin(a) * (R + 38) - 4, q = P(t, 1 + i * .3, 1.6 + i * .3);
      zh(ctx, z, lx, ly, q, { size: 20 }); en(ctx, e, lx, ly + 24, q, { size: 20 });
    });
    if (t > 1.6) { const a = -Math.PI / 2 + (t - 1.6) * 1.3; dot(ctx, cx + Math.cos(a) * R, cy + Math.sin(a) * R, 6, C.ink); }
    const L = 540, so = { size: 16, color: C.soft, align: 'left' };
    duo(ctx, '模型写出：', 'the model writes:', L, 198, 1, { ...so, alpha: E(t, 1.2, 1.8) });
    bi(ctx, '搜索（“明天上海天气”）', 'search(“Shanghai weather tomorrow”)', L, 232, P(t, 1.6, 3), { size: 21, align: 'left', gap: 28 });
    duo(ctx, '另一个程序去执行，把结果写回白板：', 'another program runs it and writes the result back:', L, 312, 1, { ...so, alpha: E(t, 3.8, 4.4) });
    bi(ctx, '小雨，18°C', 'light rain, 18°C', L, 346, P(t, 4.6, 5.4), { size: 21, align: 'left', gap: 28 });
    duo(ctx, '模型接着说：', 'the model continues:', L, 426, 1, { ...so, alpha: E(t, 6, 6.6) });
    bi(ctx, '明天记得带伞。', 'Bring an umbrella tomorrow.', L, 460, P(t, 6.6, 7.8), { size: 23, align: 'left', gap: 30 });
    wrect(ctx, 90, 150, 1100, 370, E(t, 11.6, 13.2), { w: 1.8, seed: 25 });
    duo(ctx, '外框', 'harness', 1180, 142, 1, { size: 17, align: 'right', alpha: E(t, 13, 13.6) });
    bi(ctx, '会说话的模型 + 工具 + 循环 = Agent。', 'A model that talks + tools + a loop = an agent.', 640, 590, P(t, 8.4, 10.2), { size: 24, gap: 34, alpha: 1 - E(t, 12.8, 13.4) });
    bi(ctx, '模型是引擎。权限、记忆、检查，这一整套外框叫 Harness。', 'The model is the engine. The frame around it (permissions, memory, checks) is the harness.', 640, 590, P(t, 13.6, 15.6), { size: 22, gap: 32 });
  } });

  // 11 · the answer, and the one thing it can't do for you
  const FZ = ['我', '是', '一个', '语言', '模型', '。', '我', '一次', '猜', '一个', '词', '。'], FE = ['I', ' am', ' a', ' language', ' model', '.', ' I', ' guess', ' one', ' word', ' at', ' a', ' time', '.'];
  S.push({ s: 222, d: 26, fo: 1.2, ghost: -1, draw(ctx, t) {
    const a1 = 1 - E(t, 10, 10.8);
    if (a1 > 0) {
      ctx.save(); ctx.globalAlpha *= a1;
      duo(ctx, '你是什么？', 'What are you?', 640, 206, 1, { size: 24, color: C.her });
      const q = P(t, .6, 6), o = { size: 34, align: 'left' };
      [[FZ, zh, mz, 300], [FE, en, me, 352]].forEach(([toks, f, mf, y], li) => {
        const full = toks.join(''), x0 = 640 - mf(ctx, full, o) / 2, n = Math.ceil(q * toks.length);
        f(ctx, toks.slice(0, n).join(''), x0, y, 1, { ...o, seed: 1200 + li });
      });
      bi(ctx, '猜得足够好，看起来就像在思考。', 'Guess well enough, and it starts to look like thinking.', 640, 456, P(t, 6.6, 8.4), { size: 26, gap: 36 });
      ctx.restore();
    }
    const a2 = E(t, 10.8, 11.4) * (1 - E(t, 19.4, 20));
    if (a2 > 0) {
      ctx.save(); ctx.globalAlpha *= a2;
      bi(ctx, '它能帮你想清楚怎么做。但有一件事，它替不了你：', 'It can help you work out how. But there is one thing it cannot do for you:', 640, 170, P(t, 11, 12.6), { size: 21, gap: 30 });
      const ho = { size: 38, hand: 1, color: C.her, gap: 46, enFirst: 1 };
      bi(ctx, '更努力地思考，能改进我们追求目标的方式——', 'Thinking harder can improve how we pursue a goal —', 640, 280, P(t, 12.8, 15.4), ho);
      bi(ctx, '但它无法决定什么才值得在乎。', 'but it cannot decide what ought to matter.', 640, 392, P(t, 15.6, 17.6), ho);
      bi(ctx, '— Belinda', '— Belinda', 1080, 486, 1, { size: 24, hand: 1, color: C.her, align: 'right', alpha: E(t, 17.6, 18.4), gap: 0 });
      ctx.restore();
    }
    if (t > 20) {
      const p = P(t, 20.6, 22), o = { size: 42, color: C.her, jit: 0 };
      zh(ctx, '下一个词，是你的。', 640, 330, p, o); en(ctx, 'The next word is yours.', 640, 392, p, o);
      if (t > 22 && Math.floor(t * 1.7) % 2 === 0) { const x = 640 + me(ctx, 'The next word is yours.', o) / 2 + 10; wline(ctx, [[x, 360], [x, 400]], 1, { w: 2.4, wob: 0, color: C.her }); }
    }
  } });

  // 12 · credits
  S.push({ s: 248, d: 10.01, fi: .8, fo: .01, ghost: -1, draw(ctx, t) {
    halo(ctx, 640, 360, 620, 240, E(t, 0, 1));
    bi(ctx, '一部关于 AI 本身的短片 · 第二版', 'A film about AI itself · version two', 640, 250, 1, { size: 24, alpha: E(t, .3, 1.3), gap: 34 });
    bi(ctx, '内容来自 Belinda 的 Learning Wiki，主干是「从这里开始」第 02 站', "Drawn from Belinda's Learning Wiki; the spine is Start Here, station 02", 640, 350, 1, { size: 18, color: C.soft, alpha: E(t, 1, 2), gap: 26 });
    bi(ctx, '文字与思考：Belinda · 阅读与剪辑：Claude', 'Words & thinking: Belinda · read & cut by Claude', 640, 440, 1, { size: 20, alpha: E(t, 1.8, 2.8), gap: 30 });
  } });

  // ---------- paper, ghosts, the clock ----------
  let paper = null; const ghosts = new Map();
  function mk() { const c = document.createElement('canvas'); c.width = W; c.height = H; return c; }
  function makePaper() {
    const c = mk(), g = c.getContext('2d');
    g.fillStyle = C.paper; g.fillRect(0, 0, W, H);
    const id = g.getImageData(0, 0, W, H), r = rng(1);
    for (let i = 0; i < id.data.length; i += 4) { const n = (r() - .5) * 9; id.data[i] += n; id.data[i + 1] += n; id.data[i + 2] += n; }
    g.putImageData(id, 0, 0);
    const v = g.createRadialGradient(W / 2, H / 2, H * .35, W / 2, H / 2, H * .95); v.addColorStop(0, 'rgba(120,100,80,0)'); v.addColorStop(1, 'rgba(120,100,80,.13)');
    g.fillStyle = v; g.fillRect(0, 0, W, H);
    return c;
  }
  function ghostOf(i) {
    if (!ghosts.has(i)) {
      const sc = S[i], c = mk(), g = c.getContext('2d'), r = rng(500 + i);
      g.translate(W / 2 + (r() - .5) * 26, H / 2 + (r() - .5) * 18); g.rotate((r() - .5) * .02); g.translate(-W / 2, -H / 2);
      sc.draw(g, sc.ghost);
      const c2 = mk(), g2 = c2.getContext('2d'); g2.filter = 'grayscale(1) blur(0.7px)'; g2.drawImage(c, 0, 0); ghosts.set(i, c2);
    }
    return ghosts.get(i);
  }
  // The board is the context window. In scene 6 the oldest writing slides left and falls off, for good.
  function ghostPlace(i, T) {
    if (i > 5) return [0, 1];
    const k = E(T, 131, 139); return [-300 * k, i <= 2 ? 1 - k : 1 - .45 * k];
  }
  function clock(ctx, T) {
    const a = E(T, 6, 7) * (1 - E(T, 246, 248)); if (a <= 0) return;
    const real = clamp((T - 6) / 230) * .94;
    duo(ctx, '真实时间', 'real time', 1192, 42, 1, { size: 13, color: C.soft, align: 'right', alpha: a, jit: 0 });
    write(ctx, real.toFixed(3) + ' s', 1192, 70, 1, { size: 22, font: EI, align: 'right', alpha: a, jit: 0 });
  }

  function render(ctx, T) {
    paper = paper || makePaper();
    ctx.save(); ctx.globalAlpha = 1; ctx.drawImage(paper, 0, 0);
    S.forEach((sc, i) => {
      if (sc.ghost < 0 || T < sc.s + sc.d - sc.fo) return;
      const [dx, ga] = ghostPlace(i, T); if (ga <= 0) return;
      ctx.globalAlpha = .045 * ga * E(T, sc.s + sc.d - .4, sc.s + sc.d + 1.6); ctx.drawImage(ghostOf(i), dx, 0);
    });
    S.forEach(sc => {
      if (T < sc.s || T > sc.s + sc.d) return;
      const lt = T - sc.s, a = env(lt, 0, sc.fi ?? .6, sc.d - sc.fo, sc.d);
      if (a <= 0) return;
      ctx.globalAlpha = a; sc.draw(ctx, lt);
    });
    ctx.globalAlpha = 1; clock(ctx, T);
    if (T > DUR - 1.6) { ctx.globalAlpha = E(T, DUR - 1.6, DUR); ctx.fillStyle = C.paper; ctx.fillRect(0, 0, W, H); }
    ctx.restore();
  }
  window.FILM = { W, H, DUR, render, scenes: S.map(s => ({ s: s.s, d: s.d })) };
})();
