import{S as on,i as en,s as cn,C as B,w as ln,x as un,y as kn,z as rn,A as X,q as mn,o as dn,B as fn,U as Z,e,k as x,t as H,c,a as u,d as s,m as v,h as O,a1 as bn,b as i,g as o,F as k,H as wn}from"../../../chunks/vendor-a3554607.js";import{P as yn}from"../../../chunks/post-d557e900.js";import"../../../chunks/stores-5109c37e.js";import"../../../chunks/Progress-da00dd34.js";import"../../../chunks/theme-4e4001f1.js";/* empty css                                      */function hn(E){let a,l,m,d,p,r,b,f,U,R,G,j,w,D,A,N,y,sn=`<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">primesUpTo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> primes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> primes<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> x<span class="token punctuation">)</span> primes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> n <span class="token operator">&lt;=</span> x<span class="token punctuation">;</span> n <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">let</span> elig <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> primes<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> n <span class="token operator">*</span><span class="token operator">*</span> <span class="token number">0.5</span><span class="token punctuation">;</span> p<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> primes<span class="token punctuation">[</span>p<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        elig <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>elig<span class="token punctuation">)</span> primes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">return</span> primes<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> w <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'width'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">300</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> h <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'height'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">300</span><span class="token punctuation">;</span>

canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> w<span class="token punctuation">;</span>
canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> h<span class="token punctuation">;</span>

<span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> imageData <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createImageData</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> primes <span class="token operator">=</span> <span class="token function">primesUpTo</span><span class="token punctuation">(</span>w <span class="token operator">*</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> found <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// Iterate through every pixel</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> imageData<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">/</span> <span class="token number">4</span> <span class="token operator">===</span> primes<span class="token punctuation">[</span>found<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">/</span> <span class="token number">4</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">===</span> primes<span class="token punctuation">[</span>found <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> i <span class="token operator">/</span> <span class="token number">4</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">===</span> primes<span class="token punctuation">[</span>found <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span>
      imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
      imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
    found<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Draw image data to the canvas</span>
ctx<span class="token punctuation">.</span><span class="token function">putImageData</span><span class="token punctuation">(</span>imageData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">'Download?'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  link<span class="token punctuation">.</span>download <span class="token operator">=</span> &#96;prime$<span class="token punctuation">&#123;</span>w<span class="token punctuation">&#125;</span>x$<span class="token punctuation">&#123;</span>h<span class="token punctuation">&#125;</span><span class="token punctuation">.</span>png&#96;<span class="token punctuation">;</span>
  link<span class="token punctuation">.</span>href <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">'image/octet-stream'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  link<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,P,h,W,g,M,L,_,T,$,C,I,an=`<code class="language-python"><span class="token keyword">import</span> pygame<span class="token punctuation">,</span> sys
<span class="token keyword">from</span> pygame<span class="token punctuation">.</span><span class="token builtin">locals</span>
<span class="token keyword">import</span> <span class="token operator">*</span>

pygame<span class="token punctuation">.</span>init<span class="token punctuation">(</span><span class="token punctuation">)</span>

FPS <span class="token operator">=</span> <span class="token number">60</span><span class="token comment"># frames per second setting</span>
fpsClock <span class="token operator">=</span> pygame<span class="token punctuation">.</span>time<span class="token punctuation">.</span>Clock<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Window size</span>
ASPECTRATIO <span class="token operator">=</span> <span class="token number">16</span> <span class="token operator">/</span> <span class="token number">9</span>
WINDOWHEIGHT <span class="token operator">=</span> <span class="token number">720</span>
WINDOWWIDTH <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>WINDOWHEIGHT <span class="token operator">*</span> ASPECTRATIO<span class="token punctuation">)</span>

DISPLAYSURF <span class="token operator">=</span> pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span><span class="token builtin">set</span>_mode<span class="token punctuation">(</span><span class="token punctuation">(</span>WINDOWWIDTH<span class="token punctuation">,</span> WINDOWHEIGHT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment"># Window size</span>
pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span><span class="token builtin">set</span>_caption<span class="token punctuation">(</span><span class="token string">'Number Visualization'</span><span class="token punctuation">)</span><span class="token comment"># Window title</span>

<span class="token keyword">def</span> <span class="token function">primes</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">elif</span> n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
s <span class="token operator">=</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
s <span class="token operator">=</span> <span class="token punctuation">[</span>x
  <span class="token keyword">for</span> x <span class="token keyword">in</span> s
  <span class="token keyword">if</span> x
<span class="token punctuation">]</span>
mroot <span class="token operator">=</span> n <span class="token operator">*</span><span class="token operator">*</span> <span class="token number">0.5</span>
half <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
i <span class="token operator">=</span> <span class="token number">0</span>
m <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">while</span> m <span class="token operator">&lt;=</span> mroot<span class="token punctuation">:</span>
  <span class="token keyword">if</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">:</span>
  j <span class="token operator">=</span> <span class="token punctuation">(</span>m <span class="token operator">*</span> m <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">//</span><span class="token number">2</span>
s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> j <span class="token operator">&lt;</span> half<span class="token punctuation">:</span>
  s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
j <span class="token operator">+=</span> m
i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
m <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">3</span>
<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">[</span>x
  <span class="token keyword">for</span> x <span class="token keyword">in</span> s
  <span class="token keyword">if</span> x
<span class="token punctuation">]</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">#mouse position</span>
mousex <span class="token operator">=</span> <span class="token number">0</span>
mousey <span class="token operator">=</span> <span class="token number">0</span>

RED <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
GREEN <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
BLUE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>
BLACK <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
WHITE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>

pList <span class="token operator">=</span> primes<span class="token punctuation">(</span>WINDOWWIDTH <span class="token operator">*</span> WINDOWHEIGHT <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
pList <span class="token operator">=</span> pList <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

twinColor <span class="token operator">=</span> GREEN
regColor <span class="token operator">=</span> BLUE

<span class="token comment"># main game loop</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
  pixObj <span class="token operator">=</span> pygame<span class="token punctuation">.</span>PixelArray<span class="token punctuation">(</span>DISPLAYSURF<span class="token punctuation">)</span>
i <span class="token operator">=</span> <span class="token number">0</span>
j <span class="token operator">=</span> <span class="token number">0</span>
nextP <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> WINDOWWIDTH <span class="token operator">*</span> WINDOWHEIGHT<span class="token punctuation">)</span><span class="token punctuation">:</span>
  n <span class="token operator">=</span> i <span class="token operator">*</span> WINDOWWIDTH <span class="token operator">+</span> j
<span class="token keyword">if</span> n <span class="token operator">==</span> pList<span class="token punctuation">[</span>nextP<span class="token punctuation">]</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> nextP <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>pList<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pList<span class="token punctuation">[</span>nextP <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> pList<span class="token punctuation">[</span>nextP<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>pList<span class="token punctuation">[</span>nextP<span class="token punctuation">]</span> <span class="token operator">-</span> pList<span class="token punctuation">[</span>nextP <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    pixObj<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> twinColor
<span class="token keyword">else</span> <span class="token punctuation">:</span>
  pixObj<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> regColor
nextP <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token keyword">if</span> i <span class="token operator">&lt;</span> WINDOWHEIGHT<span class="token punctuation">:</span>
  <span class="token keyword">if</span> j <span class="token operator">&lt;</span> WINDOWWIDTH <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>
  j <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token keyword">else</span> <span class="token punctuation">:</span>
  <span class="token keyword">if</span> i <span class="token operator">&lt;</span> WINDOWHEIGHT<span class="token punctuation">:</span>
  i <span class="token operator">+=</span> <span class="token number">1</span>
j <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">if</span> x <span class="token operator">==</span> WINDOWWIDTH <span class="token operator">*</span> WINDOWHEIGHT<span class="token punctuation">:</span>
  pixObj<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> WHITE <span class="token operator">-</span> <span class="token number">1</span>
<span class="token keyword">del</span> pixObj
<span class="token keyword">for</span> event <span class="token keyword">in</span> pygame<span class="token punctuation">.</span>event<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> event<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">==</span> QUIT<span class="token punctuation">:</span>
  pygame<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> event<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">==</span> MOUSEMOTION<span class="token punctuation">:</span>
  mousex<span class="token punctuation">,</span> mousey <span class="token operator">=</span> event<span class="token punctuation">.</span>pos

<span class="token keyword">if</span> event<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">==</span> MOUSEBUTTONDOWN<span class="token punctuation">:</span>
  <span class="token keyword">if</span> event<span class="token punctuation">.</span>button <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> twinColor <span class="token operator">==</span> GREEN<span class="token punctuation">:</span>
  twinColor <span class="token operator">=</span> BLUE
<span class="token keyword">else</span> <span class="token punctuation">:</span>
  <span class="token keyword">if</span> twinColor <span class="token operator">==</span> BLUE<span class="token punctuation">:</span>
  twinColor <span class="token operator">=</span> GREEN
<span class="token keyword">if</span> event<span class="token punctuation">.</span>button <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> regColor <span class="token operator">==</span> GREEN<span class="token punctuation">:</span>
  regColor <span class="token operator">=</span> BLUE
<span class="token keyword">else</span> <span class="token punctuation">:</span>
  <span class="token keyword">if</span> regColor <span class="token operator">==</span> BLUE<span class="token punctuation">:</span>
  regColor <span class="token operator">=</span> GREEN
pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">)</span>
fpsClock<span class="token punctuation">.</span>tick<span class="token punctuation">(</span>FPS<span class="token punctuation">)</span>
pygame<span class="token punctuation">.</span>image<span class="token punctuation">.</span>save<span class="token punctuation">(</span>DISPLAYSURF<span class="token punctuation">,</span> <span class="token string">"primes.png"</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
  main<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`;return{c(){a=e("p"),l=e("img"),d=x(),p=e("p"),r=H("I made this in March of 2014. I was playing around with pygame and was learning how to assign colors to specific pixels. Composite numbers are black, twin primes are green, and other primes are blue. Pixels are enumerated from 0 starting at the top left and read like a book. Note: \u20182\u2019 should be blue, but I never fixed that."),b=x(),f=e("p"),U=H("EDIT: 2019-10-06"),R=e("br"),G=H(`
I created a JavaScript version that uses HTML5 canvas, and the \u20182\u2019 bug is fixed. It prompts you to enter a width and height of the image (defaults to 300x300), and then prompts for download.`),j=x(),w=e("h3"),D=e("a"),A=H("New JS Version"),N=x(),y=e("pre"),P=x(),h=e("h2"),W=e("a"),g=e("a"),M=H("4K Image"),L=x(),_=e("h3"),T=e("a"),$=H("Old Python Version"),C=x(),I=e("pre"),this.h()},l(n){a=c(n,"P",{});var t=u(a);l=c(t,"IMG",{src:!0}),t.forEach(s),d=v(n),p=c(n,"P",{});var F=u(p);r=O(F,"I made this in March of 2014. I was playing around with pygame and was learning how to assign colors to specific pixels. Composite numbers are black, twin primes are green, and other primes are blue. Pixels are enumerated from 0 starting at the top left and read like a book. Note: \u20182\u2019 should be blue, but I never fixed that."),F.forEach(s),b=v(n),f=c(n,"P",{});var S=u(f);U=O(S,"EDIT: 2019-10-06"),R=c(S,"BR",{}),G=O(S,`
I created a JavaScript version that uses HTML5 canvas, and the \u20182\u2019 bug is fixed. It prompts you to enter a width and height of the image (defaults to 300x300), and then prompts for download.`),S.forEach(s),j=v(n),w=c(n,"H3",{id:!0});var V=u(w);D=c(V,"A",{href:!0});var q=u(D);A=O(q,"New JS Version"),q.forEach(s),V.forEach(s),N=v(n),y=c(n,"PRE",{class:!0});var pn=u(y);pn.forEach(s),P=v(n),h=c(n,"H2",{id:!0});var z=u(h);W=c(z,"A",{href:!0});var J=u(W);g=c(J,"A",{href:!0,rel:!0});var K=u(g);M=O(K,"4K Image"),K.forEach(s),J.forEach(s),z.forEach(s),L=v(n),_=c(n,"H3",{id:!0});var Y=u(_);T=c(Y,"A",{href:!0});var Q=u(T);$=O(Q,"Old Python Version"),Q.forEach(s),Y.forEach(s),C=v(n),I=c(n,"PRE",{class:!0});var tn=u(I);tn.forEach(s),this.h()},h(){bn(l.src,m="https://ihtfy.files.wordpress.com/2017/06/primes.png?w=850")||i(l,"src",m),i(D,"href","#new-js-version"),i(w,"id","new-js-version"),i(y,"class","language-javascript"),i(g,"href","https://ihtfy.files.wordpress.com/2015/08/prime4096x2190.png"),i(g,"rel","nofollow"),i(W,"href","#4k-image"),i(h,"id","4k-image"),i(T,"href","#old-python-version"),i(_,"id","old-python-version"),i(I,"class","language-python")},m(n,t){o(n,a,t),k(a,l),o(n,d,t),o(n,p,t),k(p,r),o(n,b,t),o(n,f,t),k(f,U),k(f,R),k(f,G),o(n,j,t),o(n,w,t),k(w,D),k(D,A),o(n,N,t),o(n,y,t),y.innerHTML=sn,o(n,P,t),o(n,h,t),k(h,W),k(W,g),k(g,M),o(n,L,t),o(n,_,t),k(_,T),k(T,$),o(n,C,t),o(n,I,t),I.innerHTML=an},p:wn,d(n){n&&s(a),n&&s(d),n&&s(p),n&&s(b),n&&s(f),n&&s(j),n&&s(w),n&&s(N),n&&s(y),n&&s(P),n&&s(h),n&&s(L),n&&s(_),n&&s(C),n&&s(I)}}}function gn(E){let a,l;const m=[E[0],nn];let d={$$slots:{default:[hn]},$$scope:{ctx:E}};for(let p=0;p<m.length;p+=1)d=B(d,m[p]);return a=new yn({props:d}),{c(){ln(a.$$.fragment)},l(p){un(a.$$.fragment,p)},m(p,r){kn(a,p,r),l=!0},p(p,[r]){const b=r&1?rn(m,[r&1&&X(p[0]),r&0&&X(nn)]):{};r&2&&(b.$$scope={dirty:r,ctx:p}),a.$set(b)},i(p){l||(mn(a.$$.fragment,p),l=!0)},o(p){dn(a.$$.fragment,p),l=!1},d(p){fn(a,p)}}}const nn={draft:!1,title:"prime",date:"2015-08-29",coverImage:"primes2000x1500.png",desc:"TODO",tags:["TODO"]};function _n(E,a,l){return E.$$set=m=>{l(0,a=B(B({},a),Z(m)))},a=Z(a),[a]}class Tn extends on{constructor(a){super();en(this,a,_n,gn,cn,{})}}export{Tn as default,nn as metadata};
