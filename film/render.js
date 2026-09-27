const {chromium}=require('/opt/node22/lib/node_modules/playwright');
const fs=require('fs'),path=require('path'),{spawn}=require('child_process');
(async()=>{
 const mode=process.argv[2]; const b=await chromium.launch({args:['--allow-file-access-from-files']});
 const p=await b.newPage({viewport:{width:1280,height:720}});
 p.on('console',m=>console.log('PAGE',m.text())); p.on('pageerror',e=>console.log('ERR',e.message));
 await p.goto('http://localhost:8765/render.html'); await p.evaluate(()=>window.ready);
 if(mode==='stills'){ for(const t of process.argv.slice(3)){const d=await p.evaluate(t=>frame(+t),t); fs.writeFileSync('still_'+t+'.jpg',Buffer.from(d.split(',')[1],'base64'));} }
 else { const fps=24, N=Math.round(212*fps);
  const ff=spawn(process.env.FF,['-y','-f','image2pipe','-framerate',''+fps,'-c:v','mjpeg','-i','-','-c:v','libx264','-pix_fmt','yuv420p','-crf','20','-preset','medium','-tune','animation','video.mp4'],{stdio:['pipe','ignore','inherit']});
  for(let i=0;i<N;i++){const d=await p.evaluate(t=>frame(t,0.95),i/fps); const buf=Buffer.from(d.split(',')[1],'base64'); if(!ff.stdin.write(buf)) await new Promise(r=>ff.stdin.once('drain',r)); if(i%480===0) console.log('frame',i,'/',N);}
  ff.stdin.end(); await new Promise(r=>ff.on('close',r)); }
 await b.close();})();
