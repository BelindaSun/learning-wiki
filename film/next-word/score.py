import numpy as np, wave
SR=44100; DUR=258; N=SR*DUR
L=np.zeros(N); R=np.zeros(N); rng=np.random.default_rng(7)
NOTE={'C':0,'C#':1,'D':2,'D#':3,'E':4,'F':5,'F#':6,'G':7,'G#':8,'A':9,'A#':10,'B':11}
def hz(n):
    name,o=(n[:-1],int(n[-1])); return 440*2**((NOTE[name]+12*(o+1)-69)/12)
def put(sig,t,pan=0.):
    i=int(t*SR); j=min(N,i+len(sig)); s=sig[:j-i]
    L[i:j]+=s*np.sqrt((1-pan)/2); R[i:j]+=s*np.sqrt((1+pan)/2)
def piano(n,t,v=.2,pan=None,dur=None):
    f=hz(n); d=dur or min(7,3.5*(261/f)**.35+1.5); tt=np.arange(int(d*SR))/SR
    tau=1.4*(261/f)**.4+.3; s=np.zeros_like(tt)
    for k,a in [(1,1),(2,.35),(3,.12),(4,.05),(5,.02)]:
        s+=a*np.sin(2*np.pi*f*k*tt*(1+.0004*k*k))*np.exp(-tt*k**.8/tau)
    s*=np.minimum(1,tt/.006)*np.minimum(1,(d-tt)/.3)
    put(v*s,t,pan if pan is not None else rng.uniform(-.4,.4))
def pad(notes,t0,t1,v=.035):
    d=t1-t0; tt=np.arange(int(d*SR))/SR; s=np.zeros_like(tt)
    for n in notes:
        f=hz(n)
        for det in (-.12,.12): s+=np.sin(2*np.pi*f*(1+det/100)*tt)+.18*np.sin(2*np.pi*2*f*tt)
    e=np.minimum(1,tt/3)*np.minimum(1,(d-tt)/3)
    s*=e*v/len(notes)
    put(s,t0,-.25); put(s*.9,t0+.013,.25)
# ---- V2 score: G major. Every token the model writes is a note. It ends on an open question (D7). ----
for notes,a,b in [(['G2','D3'],0,15),(['E2','B2','G3'],14,41),(['C3','G3','E4'],40,65),(['A2','E3','C4'],64,81),
                  (['G2','D3','B3'],80,103),(['D3','A3','F#4'],102,125),(['E2','B2','G3'],124,143),(['C3','G3','D4'],142,171),
                  (['A2','E3'],170,189),(['C3','F#3','B3'],188,205),(['G2','D3','A3'],204,223),(['C3','G3','E4'],222,234),
                  (['G2','D3','B3'],233,244),(['D3','F#3','A3','C4'],242,258)]:
    pad(notes,a,b)
PENT=['G','A','B','D','E']
def pn(i,base=4): return PENT[i%5]+str(base+i//5)
# 0 · a question, typed; enter; title
for i,t in enumerate([1.5,1.8,2.1,2.5,2.8,3.1]): piano(pn([4,3,2,4,3,1][i],5),t,.06,dur=1.4)
piano('G3',4.2,.14); piano('D4',4.2,.1); piano('B4',5.3,.1)
for i,n in enumerate(['G3','D4','A4','B4','D5']): piano(n,10.3+i*.34,.15)
# 1 · tokens; the map of meaning
for i in range(4): piano(pn(i+5),14+2.2+i*.12,.1); piano(pn(i+5),14+2.3+i*.12,.06)
for i in range(8): piano(pn(i+7),14+3.4+i*.1,.035,dur=1)
for i in range(10): piano(pn(i+3),14+9.5+1.8+i*.22,.08)
piano('E3',14+9.5+7.6,.12); piano('B3',14+9.5+7.8,.08)
# 2 · attention: arcs rise, one word changes, everything turns
piano('C3',43,.12); piano('G3',43.3,.1); piano('E4',44,.1)
piano('C5',51.2,.1); piano('B4',52,.12); piano('G4',52.6,.1); piano('D5',53.4,.12)
# 3 · parameters: zooming out
for i in range(15): piano(pn(i,2),65.5+i*.5,.07+.004*i,dur=3)
piano('A2',73,.14); piano('E3',73,.1); piano('C4',73.2,.08)
# 4 · the next word: bars, the roulette, the pick
for i in range(5): piano(pn(9-i,3),81+.3+i*.12,.07)
for k in range(15):
    q=(k/15)**.55; piano(pn(14-(k%5),4),80+10.4+q*2.2,.05,dur=.8)
piano('G4',92.6,.14); piano('D5',92.6,.1); piano('B5',92.8,.06)
# 5 · again and again: each token a note, with an echo as it goes back in
for k,n in enumerate(['G4','A4','B4','D5','E5','G5']):
    t=102+1.6+k*1.9; piano(n,t,.13); piano(n[:-1]+str(int(n[-1])-1),t+.8,.05)
# 6 · the tape; the oldest falls off; the opening motif, faint, as it leaves
for k in range(int(18*3.2)):
    t=124+k/3.2
    if t<141: piano(pn(k%10,5),t,.022,dur=.9)
for i,t in enumerate([1.5,1.8,2.1,2.5,2.8,3.1]): piano(pn([4,3,2,4,3,1][i],4),124+10.9+t*.6,.035,dur=2)
# 7 · training: a wrong guess, a correction, then trillions of them; a curve that suddenly rises; people choose
piano('F5',144,.07); piano('C3',145,.1); piano('G4',145.5,.12)
r=np.random.default_rng(3)
for t in np.arange(148,154,1/14):
    if r.random()<.25+.7*(t-148)/6: piano(pn(int(r.integers(15)),4),t,.028,dur=.7)
for i in range(8): piano(pn(i,3),155.8+i*(.3 if i<5 else .12),.08)
piano('E6',161.2,.04)
piano('C4',162.8,.1); piano('E4',162.8,.08); piano('G4',163,.08); piano('B4',165.2,.1); piano('D5',165.4,.1)
# 8 · hardware: the steady pulse of moving, not computing
for t in np.arange(171.6,187.5,.43): piano('D3',t,.05,dur=1.2)
for t in np.arange(172,187,1.3): piano(pn(int(r.integers(10)),5),t+r.uniform(0,.3),.025,dur=.8)
# 9 · confidently wrong
for i in range(4): piano(pn(3-i,4),189+i*.12,.07)
piano('G4',192.4,.1); piano('B4',192.9,.1)
piano('F5',194.4,.07); piano('E5',194.45,.07); piano('F#5',195.4,.06,dur=5)
# 10 · an agent: the loop, a tool call, a result, a reply, the harness around it
per=2*np.pi/1.3
for k in range(4):
    for j,n in enumerate(['G4','D5','B4']):
        t=204+1.6+k*per+j*per/3
        if t<221: piano(n,t,.06)
piano('D4',205.6,.1); piano('A4',205.9,.08); piano('E4',208.6,.1); piano('G4',208.9,.08); piano('B4',210.6,.1); piano('D5',210.9,.1)
piano('G2',215.6,.14); piano('D3',215.6,.1)
# 11 · the answer, word by word; her line; the next word is yours
for k in range(12): piano(pn(k+3),222.6+k*.45,.1)
piano('C4',228.6,.1); piano('E4',228.6,.08); piano('G4',228.8,.08)
for n,t in [('B4',234.8),('A4',236),('G4',237),('D5',237.6),('B4',239),('A4',240.2)]: piano(n,t,.11)
piano('D4',242.6,.12); piano('F#4',243.2,.1); piano('C5',244,.1,dur=6)
# credits: the question stays open
piano('D3',249,.1,dur=7); piano('A4',251,.09,dur=7)
# ---- room ----
def reverb(x,sec=3.2,seed=1):
    r=np.random.default_rng(seed); n=int(sec*SR); ir=r.standard_normal(n)*np.exp(-np.arange(n)/SR*3/sec)
    ir=np.convolve(ir,np.ones(8)/8,'same'); ir/=np.sqrt((ir**2).sum())
    M=1<<int(np.ceil(np.log2(len(x)+n))); return np.fft.irfft(np.fft.rfft(x,M)*np.fft.rfft(ir,M),M)[:len(x)]
wl=L*.75+reverb(L,seed=1)*.45; wr=R*.75+reverb(R,seed=2)*.45
# gentle lowpass for warmth
k=np.ones(3)/3; wl=np.convolve(wl,k,'same'); wr=np.convolve(wr,k,'same')
fade=np.ones(N); fade[-3*SR:]=np.linspace(1,0,3*SR)**2
st=np.stack([wl,wr],1)*fade[:,None]; st*=0.7/np.abs(st).max()
with wave.open('score.wav','wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes((st*32767).astype('<i2').tobytes())
print('ok', np.sqrt((st**2).mean()))
