import{S as aa,i as pa,s as ta,C as ln,w as oa,x as ea,y as ca,z as la,A as Wn,q as ua,o as ia,B as ra,U as Zn,e as p,t as m,k as u,c as t,a as l,h as f,d as n,m as i,b as c,a1 as d,g as e,F as o,H as ka}from"../../../chunks/vendor-a3554607.js";import{P as ma}from"../../../chunks/post-d557e900.js";import"../../../chunks/stores-5109c37e.js";import"../../../chunks/Progress-da00dd34.js";import"../../../chunks/theme-4e4001f1.js";/* empty css                                      */function fa(H){let r,y,v,g,k,_,j,I,$,Ls,_s,B,Us,ys,b,zs,as,un,Js,ps,rn,vs,M,F,Ys,gs,L,Ds,ws,h,ts,kn,Xs,os,mn,bs,U,Ks,hs,z,G,J,fn,xs,A,Y,Qs,Es,D,Vs,Ps,x,es,dn,Ws,cs,_n,js,q,X,Zs,Is,K,Ns,Ms,w,ls,yn,sn,us,vn,nn,is,gn,Gs,R,Q,an,As,V,pn,qs,E,rs,wn,tn,ks,bn,Rs,C,W,on,Cs,P,ms,hn,en,fs,xn,Os,Z,O,N,En,Ss,S,ss,cn,Ts,T,sa=`<code class="language-java"><span class="token class-name">PImage</span> bg<span class="token punctuation">;</span>
<span class="token class-name">String</span> img<span class="token punctuation">;</span>
<span class="token keyword">float</span> min<span class="token punctuation">;</span>
<span class="token keyword">float</span> max<span class="token punctuation">;</span>
<span class="token keyword">int</span> shape<span class="token punctuation">;</span>
<span class="token keyword">boolean</span> draw<span class="token punctuation">;</span>
<span class="token keyword">float</span> t <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> recording <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> progressive <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
 
<span class="token keyword">void</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1600</span><span class="token punctuation">,</span><span class="token number">900</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// source image resolution</span>
  img <span class="token operator">=</span> <span class="token string">"lake.png"</span><span class="token punctuation">;</span> <span class="token comment">// source image name</span>
  bg <span class="token operator">=</span> <span class="token function">loadImage</span><span class="token punctuation">(</span><span class="token string">"./images/"</span> <span class="token operator">+</span> img<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// source image directory</span>
  <span class="token function">imageMode</span><span class="token punctuation">(</span>CENTER<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">background</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  min <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// minimum shape size</span>
  max <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span> <span class="token comment">// maximum shape size</span>
  shape <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 0 circle, 1 quad</span>
  draw <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// use mouse to color in</span>
  recording <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// output movie frames</span>
  progressive <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// simulated annealing</span>
<span class="token punctuation">&#125;</span>
 
<span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>progressive<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    t <span class="token operator">+=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    max <span class="token operator">=</span> <span class="token number">50000.</span><span class="token operator">/</span>t<span class="token punctuation">;</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token number">50000.</span><span class="token operator">/</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">500</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>shape <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>draw<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// for hand drawing</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> mouseX<span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> mouseY<span class="token punctuation">;</span>
        <span class="token keyword">int</span> dx <span class="token operator">=</span> <span class="token function">abs</span><span class="token punctuation">(</span>x<span class="token operator">-</span>pmouseX<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> dy <span class="token operator">=</span> <span class="token function">abs</span><span class="token punctuation">(</span>y<span class="token operator">-</span>pmouseY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">float</span> speed <span class="token operator">=</span> <span class="token function">sqrt</span><span class="token punctuation">(</span>dx<span class="token operator">*</span>dx<span class="token operator">+</span>dy<span class="token operator">*</span>dy<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">noStroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        color c <span class="token operator">=</span> bg<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fill</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">ellipse</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span><span class="token function">sqrt</span><span class="token punctuation">(</span>speed<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">sqrt</span><span class="token punctuation">(</span>speed<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span>
      <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span>bg<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span><span class="token keyword">int</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span>bg<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        x <span class="token operator">-=</span> x<span class="token operator">%</span>min<span class="token punctuation">;</span>
        y <span class="token operator">-=</span> y<span class="token operator">%</span>min<span class="token punctuation">;</span>
        <span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span>max<span class="token operator">-</span>min<span class="token punctuation">)</span><span class="token operator">+</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">noStroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        color c <span class="token operator">=</span> bg<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fill</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">ellipse</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>r<span class="token punctuation">,</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>shape <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span>bg<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">int</span> y <span class="token operator">=</span><span class="token keyword">int</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span>bg<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">noStroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      color c <span class="token operator">=</span> bg<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">fill</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">quad</span><span class="token punctuation">(</span>x<span class="token operator">-</span><span class="token keyword">int</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span>max<span class="token operator">-</span>min<span class="token punctuation">)</span><span class="token operator">+</span>min<span class="token punctuation">)</span><span class="token punctuation">,</span>y<span class="token operator">-</span><span class="token keyword">int</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span>max<span class="token operator">-</span>min<span class="token punctuation">)</span><span class="token operator">+</span>min<span class="token punctuation">)</span><span class="token punctuation">,</span>x<span class="token operator">+</span><span class="token keyword">int</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span>max<span class="token operator">-</span>min<span class="token punctuation">)</span><span class="token operator">+</span>min<span class="token punctuation">)</span><span class="token punctuation">,</span>y<span class="token operator">-</span><span class="token keyword">int</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span>max<span class="token operator">-</span>min<span class="token punctuation">)</span><span class="token operator">+</span>min<span class="token punctuation">)</span><span class="token punctuation">,</span>x<span class="token operator">+</span><span class="token keyword">int</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span>max<span class="token operator">-</span>min<span class="token punctuation">)</span><span class="token operator">+</span>min<span class="token punctuation">)</span><span class="token punctuation">,</span>y<span class="token operator">+</span><span class="token keyword">int</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span>max<span class="token operator">-</span>min<span class="token punctuation">)</span><span class="token operator">+</span>min<span class="token punctuation">)</span><span class="token punctuation">,</span>x<span class="token operator">-</span><span class="token keyword">int</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span>max<span class="token operator">-</span>min<span class="token punctuation">)</span><span class="token operator">+</span>min<span class="token punctuation">)</span><span class="token punctuation">,</span>y<span class="token operator">+</span><span class="token keyword">int</span><span class="token punctuation">(</span><span class="token function">random</span><span class="token punctuation">(</span>max<span class="token operator">-</span>min<span class="token punctuation">)</span><span class="token operator">+</span>min<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>recording<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token function">saveFrame</span><span class="token punctuation">(</span><span class="token string">"./images/movie/frames####.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output frame</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>
 
<span class="token keyword">void</span> <span class="token function">keyPressed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token char">'r'</span> <span class="token operator">||</span> key <span class="token operator">==</span> <span class="token char">'R'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    recording <span class="token operator">=</span> <span class="token operator">!</span>recording<span class="token punctuation">;</span> <span class="token comment">// flag to save frames for animation</span>
  <span class="token punctuation">&#125;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token char">'p'</span> <span class="token operator">||</span> key <span class="token operator">==</span> <span class="token char">'P'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token function">saveFrame</span><span class="token punctuation">(</span><span class="token string">"./images/Capped-"</span> <span class="token operator">+</span> img<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// output image</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>&#96;&#96;&#96;</code>`;return{c(){r=p("p"),y=m("I made this in June of 2014. I was using processing (a java library) to make mosaic and pointillism style images from existing pictures."),v=u(),g=p("p"),k=p("em"),_=m("You can click the images below to see larger versions."),j=u(),I=p("h3"),$=p("a"),Ls=m("Cloud"),_s=u(),B=p("p"),Us=m("Generated circles are semi-uniformly distributed (small deviations from initial lattice)"),ys=u(),b=p("p"),zs=m(`TODO FORMAT PICTURES
`),as=p("img"),Js=u(),ps=p("img"),vs=u(),M=p("h3"),F=p("a"),Ys=m("Lake"),gs=u(),L=p("p"),Ds=m("Using randomly placed circles of roughly equal diameter"),ws=u(),h=p("p"),ts=p("img"),Xs=u(),os=p("img"),bs=u(),U=p("p"),Ks=m("Video showing shrinking polygons to reduce uncovered spots. I just realized this is the same concept of simulated annealing."),hs=u(),z=p("p"),G=p("a"),J=p("img"),xs=u(),A=p("h3"),Y=p("a"),Qs=m("Fruit"),Es=u(),D=p("p"),Vs=m("Randomly placed quadrilaterals"),Ps=u(),x=p("p"),es=p("img"),Ws=u(),cs=p("img"),js=u(),q=p("h3"),X=p("a"),Zs=m("Jaguar"),Is=u(),K=p("p"),Ns=m("Using small polygons and larger polygons"),Ms=u(),w=p("p"),ls=p("img"),sn=u(),us=p("img"),nn=u(),is=p("img"),Gs=u(),R=p("h3"),Q=p("a"),an=m("Another Jaguar"),As=u(),V=p("p"),pn=m("Random circles"),qs=u(),E=p("p"),rs=p("img"),tn=u(),ks=p("img"),Rs=u(),C=p("h3"),W=p("a"),on=m("White and Pink"),Cs=u(),P=p("p"),ms=p("img"),en=u(),fs=p("img"),Os=u(),Z=p("p"),O=p("a"),N=p("img"),Ss=u(),S=p("h3"),ss=p("a"),cn=m("Source:"),Ts=u(),T=p("pre"),this.h()},l(s){r=t(s,"P",{});var a=l(r);y=f(a,"I made this in June of 2014. I was using processing (a java library) to make mosaic and pointillism style images from existing pictures."),a.forEach(n),v=i(s),g=t(s,"P",{});var Pn=l(g);k=t(Pn,"EM",{});var jn=l(k);_=f(jn,"You can click the images below to see larger versions."),jn.forEach(n),Pn.forEach(n),j=i(s),I=t(s,"H3",{id:!0});var In=l(I);$=t(In,"A",{href:!0});var Mn=l($);Ls=f(Mn,"Cloud"),Mn.forEach(n),In.forEach(n),_s=i(s),B=t(s,"P",{});var Gn=l(B);Us=f(Gn,"Generated circles are semi-uniformly distributed (small deviations from initial lattice)"),Gn.forEach(n),ys=i(s),b=t(s,"P",{});var ds=l(b);zs=f(ds,`TODO FORMAT PICTURES
`),as=t(ds,"IMG",{src:!0}),Js=i(ds),ps=t(ds,"IMG",{src:!0}),ds.forEach(n),vs=i(s),M=t(s,"H3",{id:!0});var An=l(M);F=t(An,"A",{href:!0});var qn=l(F);Ys=f(qn,"Lake"),qn.forEach(n),An.forEach(n),gs=i(s),L=t(s,"P",{});var Rn=l(L);Ds=f(Rn,"Using randomly placed circles of roughly equal diameter"),Rn.forEach(n),ws=i(s),h=t(s,"P",{});var Hs=l(h);ts=t(Hs,"IMG",{src:!0}),Xs=i(Hs),os=t(Hs,"IMG",{src:!0}),Hs.forEach(n),bs=i(s),U=t(s,"P",{});var Cn=l(U);Ks=f(Cn,"Video showing shrinking polygons to reduce uncovered spots. I just realized this is the same concept of simulated annealing."),Cn.forEach(n),hs=i(s),z=t(s,"P",{});var On=l(z);G=t(On,"A",{href:!0,rel:!0});var Sn=l(G);J=t(Sn,"IMG",{src:!0,alt:!0}),Sn.forEach(n),On.forEach(n),xs=i(s),A=t(s,"H3",{id:!0});var Tn=l(A);Y=t(Tn,"A",{href:!0});var Hn=l(Y);Qs=f(Hn,"Fruit"),Hn.forEach(n),Tn.forEach(n),Es=i(s),D=t(s,"P",{});var $n=l(D);Vs=f($n,"Randomly placed quadrilaterals"),$n.forEach(n),Ps=i(s),x=t(s,"P",{});var $s=l(x);es=t($s,"IMG",{src:!0}),Ws=i($s),cs=t($s,"IMG",{src:!0}),$s.forEach(n),js=i(s),q=t(s,"H3",{id:!0});var Bn=l(q);X=t(Bn,"A",{href:!0});var Fn=l(X);Zs=f(Fn,"Jaguar"),Fn.forEach(n),Bn.forEach(n),Is=i(s),K=t(s,"P",{});var Ln=l(K);Ns=f(Ln,"Using small polygons and larger polygons"),Ln.forEach(n),Ms=i(s),w=t(s,"P",{});var ns=l(w);ls=t(ns,"IMG",{src:!0}),sn=i(ns),us=t(ns,"IMG",{src:!0}),nn=i(ns),is=t(ns,"IMG",{src:!0}),ns.forEach(n),Gs=i(s),R=t(s,"H3",{id:!0});var Un=l(R);Q=t(Un,"A",{href:!0});var zn=l(Q);an=f(zn,"Another Jaguar"),zn.forEach(n),Un.forEach(n),As=i(s),V=t(s,"P",{});var Jn=l(V);pn=f(Jn,"Random circles"),Jn.forEach(n),qs=i(s),E=t(s,"P",{});var Bs=l(E);rs=t(Bs,"IMG",{src:!0}),tn=i(Bs),ks=t(Bs,"IMG",{src:!0}),Bs.forEach(n),Rs=i(s),C=t(s,"H3",{id:!0});var Yn=l(C);W=t(Yn,"A",{href:!0});var Dn=l(W);on=f(Dn,"White and Pink"),Dn.forEach(n),Yn.forEach(n),Cs=i(s),P=t(s,"P",{});var Fs=l(P);ms=t(Fs,"IMG",{src:!0}),en=i(Fs),fs=t(Fs,"IMG",{src:!0}),Fs.forEach(n),Os=i(s),Z=t(s,"P",{});var Xn=l(Z);O=t(Xn,"A",{href:!0,rel:!0});var Kn=l(O);N=t(Kn,"IMG",{src:!0,alt:!0}),Kn.forEach(n),Xn.forEach(n),Ss=i(s),S=t(s,"H3",{id:!0});var Qn=l(S);ss=t(Qn,"A",{href:!0});var Vn=l(ss);cn=f(Vn,"Source:"),Vn.forEach(n),Qn.forEach(n),Ts=i(s),T=t(s,"PRE",{class:!0});var na=l(T);na.forEach(n),this.h()},h(){c($,"href","#cloud"),c(I,"id","cloud"),d(as.src,un="/assets/post/point/cloud.png")||c(as,"src",un),d(ps.src,rn="/assets/post/point/capped-cloud.png")||c(ps,"src",rn),c(F,"href","#lake"),c(M,"id","lake"),d(ts.src,kn="/assets/post/point/lake.png")||c(ts,"src",kn),d(os.src,mn="/assets/post/point/capped-lake.png")||c(os,"src",mn),d(J.src,fn="http://i3.ytimg.com/vi/st9v2upmL70/maxresdefault.jpg")||c(J,"src",fn),c(J,"alt","Annealed Mosaic - Breaking Bad"),c(G,"href","https://youtu.be/st9v2upmL70"),c(G,"rel","nofollow"),c(Y,"href","#fruit"),c(A,"id","fruit"),d(es.src,dn="/assets/post/point/banana.jpg")||c(es,"src",dn),d(cs.src,_n="/assets/post/point/capped-banana.jpg")||c(cs,"src",_n),c(X,"href","#jaguar"),c(q,"id","jaguar"),d(ls.src,yn="/assets/post/point/leo.jpg")||c(ls,"src",yn),d(us.src,vn="/assets/post/point/capped-leo1.jpg")||c(us,"src",vn),d(is.src,gn="/assets/post/point/capped-leo2.jpg")||c(is,"src",gn),c(Q,"href","#another-jaguar"),c(R,"id","another-jaguar"),d(rs.src,wn="/assets/post/point/cheetah.png")||c(rs,"src",wn),d(ks.src,bn="/assets/post/point/capped-cheetah.png")||c(ks,"src",bn),c(W,"href","#white-and-pink"),c(C,"id","white-and-pink"),d(ms.src,hn="/assets/post/point/bb.jpg")||c(ms,"src",hn),d(fs.src,xn="/assets/post/point/capped-bb.jpg")||c(fs,"src",xn),d(N.src,En="http://i3.ytimg.com/vi/BCXYKs8LsZQ/maxresdefault.jpg")||c(N,"src",En),c(N,"alt","Annealed Mosaic - Breaking Bad"),c(O,"href","https://youtu.be/BCXYKs8LsZQ"),c(O,"rel","nofollow"),c(ss,"href","#source"),c(S,"id","source"),c(T,"class","language-java")},m(s,a){e(s,r,a),o(r,y),e(s,v,a),e(s,g,a),o(g,k),o(k,_),e(s,j,a),e(s,I,a),o(I,$),o($,Ls),e(s,_s,a),e(s,B,a),o(B,Us),e(s,ys,a),e(s,b,a),o(b,zs),o(b,as),o(b,Js),o(b,ps),e(s,vs,a),e(s,M,a),o(M,F),o(F,Ys),e(s,gs,a),e(s,L,a),o(L,Ds),e(s,ws,a),e(s,h,a),o(h,ts),o(h,Xs),o(h,os),e(s,bs,a),e(s,U,a),o(U,Ks),e(s,hs,a),e(s,z,a),o(z,G),o(G,J),e(s,xs,a),e(s,A,a),o(A,Y),o(Y,Qs),e(s,Es,a),e(s,D,a),o(D,Vs),e(s,Ps,a),e(s,x,a),o(x,es),o(x,Ws),o(x,cs),e(s,js,a),e(s,q,a),o(q,X),o(X,Zs),e(s,Is,a),e(s,K,a),o(K,Ns),e(s,Ms,a),e(s,w,a),o(w,ls),o(w,sn),o(w,us),o(w,nn),o(w,is),e(s,Gs,a),e(s,R,a),o(R,Q),o(Q,an),e(s,As,a),e(s,V,a),o(V,pn),e(s,qs,a),e(s,E,a),o(E,rs),o(E,tn),o(E,ks),e(s,Rs,a),e(s,C,a),o(C,W),o(W,on),e(s,Cs,a),e(s,P,a),o(P,ms),o(P,en),o(P,fs),e(s,Os,a),e(s,Z,a),o(Z,O),o(O,N),e(s,Ss,a),e(s,S,a),o(S,ss),o(ss,cn),e(s,Ts,a),e(s,T,a),T.innerHTML=sa},p:ka,d(s){s&&n(r),s&&n(v),s&&n(g),s&&n(j),s&&n(I),s&&n(_s),s&&n(B),s&&n(ys),s&&n(b),s&&n(vs),s&&n(M),s&&n(gs),s&&n(L),s&&n(ws),s&&n(h),s&&n(bs),s&&n(U),s&&n(hs),s&&n(z),s&&n(xs),s&&n(A),s&&n(Es),s&&n(D),s&&n(Ps),s&&n(x),s&&n(js),s&&n(q),s&&n(Is),s&&n(K),s&&n(Ms),s&&n(w),s&&n(Gs),s&&n(R),s&&n(As),s&&n(V),s&&n(qs),s&&n(E),s&&n(Rs),s&&n(C),s&&n(Cs),s&&n(P),s&&n(Os),s&&n(Z),s&&n(Ss),s&&n(S),s&&n(Ts),s&&n(T)}}}function da(H){let r,y;const v=[H[0],Nn];let g={$$slots:{default:[fa]},$$scope:{ctx:H}};for(let k=0;k<v.length;k+=1)g=ln(g,v[k]);return r=new ma({props:g}),{c(){oa(r.$$.fragment)},l(k){ea(r.$$.fragment,k)},m(k,_){ca(r,k,_),y=!0},p(k,[_]){const j=_&1?la(v,[_&1&&Wn(k[0]),_&0&&Wn(Nn)]):{};_&2&&(j.$$scope={dirty:_,ctx:k}),r.$set(j)},i(k){y||(ua(r.$$.fragment,k),y=!0)},o(k){ia(r.$$.fragment,k),y=!1},d(k){ra(r,k)}}}const Nn={draft:!1,title:"point",date:"2016-01-07",coverImage:"points2000x1500.png",desc:"TODO",tags:["TODO"]};function _a(H,r,y){return H.$$set=v=>{y(0,r=ln(ln({},r),Zn(v)))},r=Zn(r),[r]}class xa extends aa{constructor(r){super();pa(this,r,_a,da,ta,{})}}export{xa as default,Nn as metadata};
