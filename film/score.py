import numpy as np, wave
SR=44100; DUR=212; N=SR*DUR
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
# ---- harmony bed (D major; nothing loud) ----
for notes,a,b in [(['D3','A3'],0,21),(['B2','F#3','D4'],19,40),(['G2','D3','B3'],38,62),(['D3','A3','F#4'],60,66),
                  (['G2','D3','B3'],71,80),(['B2','F#3','D4'],78,94),(['D3','A3','E4'],92,114),(['A2','D3','E3'],112,131),
                  (['D3','A3','F#3'],129,139),(['G2','D3','B3'],137,150),(['D3','A3','F#4'],148,174),
                  (['D3','A3','E4','F#4'],172,202),(['D3','A3'],200,212)]:
    pad(notes,a,b)
# 0 blank page: a few notes as the words arrive
for n,t in [('A4',2.2),('F#4',4.4),('D4',6.6),('E4',8.8)]: piano(n,t,.16)
# 1 title
for i,n in enumerate(['D3','A3','E4','F#4','C#5']): piano(n,11.4+i*.38,.18)
# 2 the stack rises
for i,n in enumerate(['D3','F#3','A3','D4','E4','F#4','A4']): piano(n,19+1+i*1.3,.17)
for n,t in [('B4',29.3),('A4',30.7),('F#4',33.8),('D5',35.2)]: piano(n,t,.12)
# 3 the loop: a note at each node, lap after lap
T0=38+2; per=2*np.pi/1.4
for k in range(6):
    for j,n in enumerate(['A4','D5','F#4']):
        t=T0+k*per+j*per/3
        if t<38+9.3: piano(n,t,.11)
# the cursor hesitates
for t in [52.6,53.3,53.9,54.6,55.1]: piano('E5',t,.07)
piano('D2',55.1,.2); piano('A2',56.4,.12)
# 4 caught: quiet, then her question, then laughter
piano('F#4',60.6,.12); piano('D4',63.8,.12)
for n,t in [('F#5',66.4),('A5',66.62),('E5',67.9),('C#5',68.2)]: piano(n,t,.12)
for i,n in enumerate(['D5','F#5','A5','D6']): piano(n,71.4+i*.11,.1)
piano('G3',73.2,.15); piano('B3',73.2,.1); piano('D4',74.6,.12)
# 5 multiply: ticks that thin out
sc=['A5','F#5','E5','D5','B4','A4','F#4','E4','D4','B3','A3','F#3','E3','D3','B2','A2','F#2','E2','D2','B1']
for i in range(20): piano(sc[i],78+1.6+i*5*.055,.09*.99**(i*5),dur=2.5)
piano('B2',78+7.6,.2); piano('F#3',78+7.6,.1)
# 6 the crowd: scattered, then self-organizing into a pulse
pent=['D','E','F#','A','B']
for t in np.arange(94,101,1/9):
    if rng.random()<.35+.5*(t-94)/7: piano(pent[rng.integers(5)]+str(rng.integers(4,7)),t+rng.uniform(0,.1),.035,dur=1.5)
arp=['D5','A4','F#5','A4','B4','A4','E5','A4']
for i,t in enumerate(np.arange(101,109.5,.25)):
    piano(arp[i%8],t,.05*min(1,(t-100.5)/2)*(1 if t<106 else max(0,(109.5-t)/3.5)),dur=1.2)
piano('F#3',105,.15,pan=-.8)
# 7 the door: the slider glides
for i,n in enumerate(['A3','D4','E4','A4','D5']): piano(n,112+2+i*.4,.1)
piano('A2',116.6,.12); piano('E4',119.8,.1); piano('C#5',121,.1); piano('D5',122.9,.12); piano('F#4',123,.08)
# 8 her words: a slow melody underneath
for n,t in [('F#4',129.5),('E4',131.1),('D4',132.8),('A4',134),('G4',135.6),('F#4',137.2),('B4',138.5),('A4',140),('D4',141.3)]: piano(n,t,.12)
piano('B3',140.4,.12); piano('D4',143,.12); piano('A3',144,.08)
# 9 sixty days: one note per change of mind, climbing
scale=['D3','E3','F#3','A3','B3','D4','E4','F#4','A4','B4','D5','E5','F#5']
for i in range(23):
    n=scale[min(len(scale)-1,int(i*len(scale)/23))]; piano(n,148+2.6+i*.62,.1)
piano('D3',148+17.6,.15); piano('A3',148+17.6,.1)
# 10 finale
for n,t in [('F#4',172.5),('E4',175.1),('D4',177)]: piano(n,t,.11)
for i,n in enumerate(['D2','A2','D3','A3','E4','F#4','A4','C#5','E5']): piano(n,182.2+i*.3,.12,dur=7)
piano('A4',184.6,.14); piano('F#4',186.6,.14); piano('D4',188,.12)
for i,n in enumerate(['G3','B3','D4','F#4']): piano(n,191.6+i*.2,.1)
piano('A4',196.4,.13); piano('D5',196.9,.13)
# credits: rest on D ... and leave the 9th hanging. still becoming.
piano('D3',200.5,.12); piano('A3',202,.1); piano('D4',204.6,.12,dur=7); piano('E5',204.8,.1,dur=7)
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
