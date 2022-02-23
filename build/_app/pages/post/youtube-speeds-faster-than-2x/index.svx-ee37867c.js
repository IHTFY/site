import{S as Wn,i as zn,s as Kn,C as pn,w as Qn,x as Vn,y as Xn,z as Zn,A as Cn,q as sa,o as na,B as aa,U as Ln,e as p,t as l,k as u,c as e,a as c,h as i,d as n,m as k,a1 as ts,b as m,g as t,F as o,H as ta}from"../../../chunks/vendor-a3554607.js";import{P as pa}from"../../../chunks/post-d557e900.js";import"../../../chunks/stores-5109c37e.js";import"../../../chunks/Progress-da00dd34.js";import"../../../chunks/theme-4e4001f1.js";/* empty css                                      */function ea(R){let r,v,y,h,f,d,_,K,en,ps,S,Hs,es,H,Q,on,os,B,Bs,cs,b,As,V,Cs,Ls,ls,A,Ds,us,T,C,Us,is,w,$s,P,Fs,Ys,ks,E,Os,X,qs,Gs,rs,L,Z,cn,fs,D,Js,ms,x,Ws,ss,zs,Ks,ds,I,Un=`<code class="language-javascript"><span class="token literal-property property">javascript</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"video"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> videos <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"video"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> currentSpeed <span class="token operator">=</span> videos<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>playbackRate<span class="token punctuation">;</span>
    <span class="token keyword">const</span> input <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">"How fast?&#92;n0x\u27F716.0x"</span><span class="token punctuation">,</span> currentSpeed<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> input <span class="token operator">===</span> <span class="token string">'number'</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> input <span class="token operator">!==</span> currentSpeed<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      videos<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> v<span class="token punctuation">.</span>playbackRate <span class="token operator">=</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Can't find a video."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,vs,U,ns,ln,ys,$,Qs,hs,F,Vs,_s,Y,as,un,bs,j,O,Xs,ws,q,Zs,Es,G,sn,xs,J,nn,Ts,g,$n=`<code class="language-javascript"><span class="token literal-property property">javascript</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"video"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> videos <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"video"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> currentSpeed <span class="token operator">=</span> videos<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>playbackRate<span class="token punctuation">;</span>
    videos<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> v<span class="token punctuation">.</span>playbackRate <span class="token operator">=</span> currentSpeed <span class="token operator">==</span> <span class="token number">16</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Can't find a video."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,Ps,W,an,Is,N,Fn=`<code class="language-javascript"><span class="token literal-property property">javascript</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"video"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> videos <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"video"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> currentSpeed <span class="token operator">=</span> videos<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>playbackRate<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">m</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">log2</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> l <span class="token operator">=</span> <span class="token string">"0    \u215B    \xBC    \xBD    1    2    4    8    16"</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token parameter">i</span> <span class="token operator">=></span> l<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">m</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"\u035F"</span> <span class="token operator">+</span> l<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token function">m</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> input <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token function">a</span><span class="token punctuation">(</span>currentSpeed<span class="token punctuation">)</span><span class="token punctuation">,</span> currentSpeed<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> input <span class="token operator">===</span> <span class="token string">'number'</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> input <span class="token operator">!==</span> currentSpeed<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      videos<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=></span>v<span class="token punctuation">.</span>playbackRate <span class="token operator">=</span> input<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Can't find a video."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,js,z,tn,gs,M,Yn=`<code class="language-javascript"><span class="token literal-property property">javascript</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> v <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"video"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  v<span class="token punctuation">.</span>currentTime <span class="token operator">=</span> v<span class="token punctuation">.</span>duration<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){r=p("p"),v=l("I remember speeding up books on tape to chipmunk speeds so I could get through them faster. Today, my podcast app does this without the pitch distortion, and it can even trim out the silent parts."),y=u(),h=p("p"),f=l("YouTube recently added a slider to select a custom speed between 0.25x and 2x at 0.05x increments."),d=u(),_=p("p"),K=p("img"),ps=u(),S=p("p"),Hs=l("Custom playback speed slider"),es=u(),H=p("p"),Q=p("img"),os=u(),B=p("p"),Bs=l("Preset playback speeds"),cs=u(),b=p("p"),As=l("But you can do more. It\u2019s possible to choose any speed between 0x and 16x by changing the value of the video\u2019s "),V=p("code"),Cs=l("playbackRate"),Ls=l(" property."),ls=u(),A=p("p"),Ds=l("I wrote a little JavaScript code that will let you type in whatever speed you want. It works for lots of other sites too, like Netflix, Twitter, and Facebook."),us=u(),T=p("h2"),C=p("a"),Us=l("Making a Bookmarklet"),is=u(),w=p("p"),$s=l("UPDATE: I\u2019ve made "),P=p("a"),Fs=l("a page"),Ys=l(" that lists some of the bookmarklets I\u2019ve made. The custom video speed is the 1st one."),ks=u(),E=p("p"),Os=l("First, make a new bookmark. In chrome, you can use "),X=p("code"),qs=l("ctrl + d"),Gs=l(". You can do it on any page, but before you click \u201CDone\u201D, click on \u201CMore\u2026\u201C."),rs=u(),L=p("p"),Z=p("img"),fs=u(),D=p("p"),Js=l("I like the Name to be short so I use this: \u23E9"),ms=u(),x=p("p"),Ws=l("Then paste the following code into the URL. To copy it, double click anywhere in the code, then use "),ss=p("code"),zs=l("ctrl + c"),Ks=l("."),ds=u(),I=p("pre"),vs=u(),U=p("p"),ns=p("img"),ys=u(),$=p("p"),Qs=l("The Name and URL fields"),hs=u(),F=p("p"),Vs=l("When you\u2019re watching a YouTube video, you can click the bookmarklet you just made, and it will let you type in the speed."),_s=u(),Y=p("p"),as=p("img"),bs=u(),j=p("h2"),O=p("a"),Xs=l("Skipping Ads"),ws=u(),q=p("p"),Zs=l("Here\u2019s another version of the code that just toggles the speed between 1x and 16x. If an ad is playing (even an unskippable one), you can play it at 16x to get through it quickly."),Es=u(),G=p("p"),sn=l("I use this as the Name: \u23ED\uFE0F"),xs=u(),J=p("p"),nn=l("And here\u2019s the code for the URL:"),Ts=u(),g=p("pre"),Ps=u(),W=p("p"),an=l("Here\u2019s another one that has a little meter to show the current speed."),Is=u(),N=p("pre"),js=u(),z=p("p"),tn=l("Here\u2019s one that just sets the playhead to the end of the video."),gs=u(),M=p("pre"),this.h()},l(s){r=e(s,"P",{});var a=c(r);v=i(a,"I remember speeding up books on tape to chipmunk speeds so I could get through them faster. Today, my podcast app does this without the pitch distortion, and it can even trim out the silent parts."),a.forEach(n),y=k(s),h=e(s,"P",{});var kn=c(h);f=i(kn,"YouTube recently added a slider to select a custom speed between 0.25x and 2x at 0.05x increments."),kn.forEach(n),d=k(s),_=e(s,"P",{});var rn=c(_);K=e(rn,"IMG",{src:!0}),rn.forEach(n),ps=k(s),S=e(s,"P",{});var fn=c(S);Hs=i(fn,"Custom playback speed slider"),fn.forEach(n),es=k(s),H=e(s,"P",{});var mn=c(H);Q=e(mn,"IMG",{src:!0}),mn.forEach(n),os=k(s),B=e(s,"P",{});var dn=c(B);Bs=i(dn,"Preset playback speeds"),dn.forEach(n),cs=k(s),b=e(s,"P",{});var Ns=c(b);As=i(Ns,"But you can do more. It\u2019s possible to choose any speed between 0x and 16x by changing the value of the video\u2019s "),V=e(Ns,"CODE",{});var vn=c(V);Cs=i(vn,"playbackRate"),vn.forEach(n),Ls=i(Ns," property."),Ns.forEach(n),ls=k(s),A=e(s,"P",{});var yn=c(A);Ds=i(yn,"I wrote a little JavaScript code that will let you type in whatever speed you want. It works for lots of other sites too, like Netflix, Twitter, and Facebook."),yn.forEach(n),us=k(s),T=e(s,"H2",{id:!0});var hn=c(T);C=e(hn,"A",{href:!0});var _n=c(C);Us=i(_n,"Making a Bookmarklet"),_n.forEach(n),hn.forEach(n),is=k(s),w=e(s,"P",{});var Ms=c(w);$s=i(Ms,"UPDATE: I\u2019ve made "),P=e(Ms,"A",{href:!0,rel:!0});var bn=c(P);Fs=i(bn,"a page"),bn.forEach(n),Ys=i(Ms," that lists some of the bookmarklets I\u2019ve made. The custom video speed is the 1st one."),Ms.forEach(n),ks=k(s),E=e(s,"P",{});var Rs=c(E);Os=i(Rs,"First, make a new bookmark. In chrome, you can use "),X=e(Rs,"CODE",{});var wn=c(X);qs=i(wn,"ctrl + d"),wn.forEach(n),Gs=i(Rs,". You can do it on any page, but before you click \u201CDone\u201D, click on \u201CMore\u2026\u201C."),Rs.forEach(n),rs=k(s),L=e(s,"P",{});var En=c(L);Z=e(En,"IMG",{src:!0}),En.forEach(n),fs=k(s),D=e(s,"P",{});var xn=c(D);Js=i(xn,"I like the Name to be short so I use this: \u23E9"),xn.forEach(n),ms=k(s),x=e(s,"P",{});var Ss=c(x);Ws=i(Ss,"Then paste the following code into the URL. To copy it, double click anywhere in the code, then use "),ss=e(Ss,"CODE",{});var Tn=c(ss);zs=i(Tn,"ctrl + c"),Tn.forEach(n),Ks=i(Ss,"."),Ss.forEach(n),ds=k(s),I=e(s,"PRE",{class:!0});var On=c(I);On.forEach(n),vs=k(s),U=e(s,"P",{});var Pn=c(U);ns=e(Pn,"IMG",{src:!0}),Pn.forEach(n),ys=k(s),$=e(s,"P",{});var In=c($);Qs=i(In,"The Name and URL fields"),In.forEach(n),hs=k(s),F=e(s,"P",{});var jn=c(F);Vs=i(jn,"When you\u2019re watching a YouTube video, you can click the bookmarklet you just made, and it will let you type in the speed."),jn.forEach(n),_s=k(s),Y=e(s,"P",{});var gn=c(Y);as=e(gn,"IMG",{src:!0}),gn.forEach(n),bs=k(s),j=e(s,"H2",{id:!0});var Nn=c(j);O=e(Nn,"A",{href:!0});var Mn=c(O);Xs=i(Mn,"Skipping Ads"),Mn.forEach(n),Nn.forEach(n),ws=k(s),q=e(s,"P",{});var Rn=c(q);Zs=i(Rn,"Here\u2019s another version of the code that just toggles the speed between 1x and 16x. If an ad is playing (even an unskippable one), you can play it at 16x to get through it quickly."),Rn.forEach(n),Es=k(s),G=e(s,"P",{});var Sn=c(G);sn=i(Sn,"I use this as the Name: \u23ED\uFE0F"),Sn.forEach(n),xs=k(s),J=e(s,"P",{});var Hn=c(J);nn=i(Hn,"And here\u2019s the code for the URL:"),Hn.forEach(n),Ts=k(s),g=e(s,"PRE",{class:!0});var qn=c(g);qn.forEach(n),Ps=k(s),W=e(s,"P",{});var Bn=c(W);an=i(Bn,"Here\u2019s another one that has a little meter to show the current speed."),Bn.forEach(n),Is=k(s),N=e(s,"PRE",{class:!0});var Gn=c(N);Gn.forEach(n),js=k(s),z=e(s,"P",{});var An=c(z);tn=i(An,"Here\u2019s one that just sets the playhead to the end of the video."),An.forEach(n),gs=k(s),M=e(s,"PRE",{class:!0});var Jn=c(M);Jn.forEach(n),this.h()},h(){ts(K.src,en="/assets/post/youtube-speeds-faster-than-2x/slider-1.png")||m(K,"src",en),ts(Q.src,on="/assets/post/youtube-speeds-faster-than-2x/speed-settings-copy-1.png")||m(Q,"src",on),m(C,"href","#making-a-bookmarklet"),m(T,"id","making-a-bookmarklet"),m(P,"href","https://ihtfy.github.io/JavaScript-Bookmarklets/"),m(P,"rel","nofollow"),ts(Z.src,cn="/assets/post/youtube-speeds-faster-than-2x/bookmark-2.png")||m(Z,"src",cn),m(I,"class","language-javascript"),ts(ns.src,ln="/assets/post/youtube-speeds-faster-than-2x/save-1.png")||m(ns,"src",ln),ts(as.src,un="/assets/post/youtube-speeds-faster-than-2x/use-1.png")||m(as,"src",un),m(O,"href","#skipping-ads"),m(j,"id","skipping-ads"),m(g,"class","language-javascript"),m(N,"class","language-javascript"),m(M,"class","language-javascript")},m(s,a){t(s,r,a),o(r,v),t(s,y,a),t(s,h,a),o(h,f),t(s,d,a),t(s,_,a),o(_,K),t(s,ps,a),t(s,S,a),o(S,Hs),t(s,es,a),t(s,H,a),o(H,Q),t(s,os,a),t(s,B,a),o(B,Bs),t(s,cs,a),t(s,b,a),o(b,As),o(b,V),o(V,Cs),o(b,Ls),t(s,ls,a),t(s,A,a),o(A,Ds),t(s,us,a),t(s,T,a),o(T,C),o(C,Us),t(s,is,a),t(s,w,a),o(w,$s),o(w,P),o(P,Fs),o(w,Ys),t(s,ks,a),t(s,E,a),o(E,Os),o(E,X),o(X,qs),o(E,Gs),t(s,rs,a),t(s,L,a),o(L,Z),t(s,fs,a),t(s,D,a),o(D,Js),t(s,ms,a),t(s,x,a),o(x,Ws),o(x,ss),o(ss,zs),o(x,Ks),t(s,ds,a),t(s,I,a),I.innerHTML=Un,t(s,vs,a),t(s,U,a),o(U,ns),t(s,ys,a),t(s,$,a),o($,Qs),t(s,hs,a),t(s,F,a),o(F,Vs),t(s,_s,a),t(s,Y,a),o(Y,as),t(s,bs,a),t(s,j,a),o(j,O),o(O,Xs),t(s,ws,a),t(s,q,a),o(q,Zs),t(s,Es,a),t(s,G,a),o(G,sn),t(s,xs,a),t(s,J,a),o(J,nn),t(s,Ts,a),t(s,g,a),g.innerHTML=$n,t(s,Ps,a),t(s,W,a),o(W,an),t(s,Is,a),t(s,N,a),N.innerHTML=Fn,t(s,js,a),t(s,z,a),o(z,tn),t(s,gs,a),t(s,M,a),M.innerHTML=Yn},p:ta,d(s){s&&n(r),s&&n(y),s&&n(h),s&&n(d),s&&n(_),s&&n(ps),s&&n(S),s&&n(es),s&&n(H),s&&n(os),s&&n(B),s&&n(cs),s&&n(b),s&&n(ls),s&&n(A),s&&n(us),s&&n(T),s&&n(is),s&&n(w),s&&n(ks),s&&n(E),s&&n(rs),s&&n(L),s&&n(fs),s&&n(D),s&&n(ms),s&&n(x),s&&n(ds),s&&n(I),s&&n(vs),s&&n(U),s&&n(ys),s&&n($),s&&n(hs),s&&n(F),s&&n(_s),s&&n(Y),s&&n(bs),s&&n(j),s&&n(ws),s&&n(q),s&&n(Es),s&&n(G),s&&n(xs),s&&n(J),s&&n(Ts),s&&n(g),s&&n(Ps),s&&n(W),s&&n(Is),s&&n(N),s&&n(js),s&&n(z),s&&n(gs),s&&n(M)}}}function oa(R){let r,v;const y=[R[0],Dn];let h={$$slots:{default:[ea]},$$scope:{ctx:R}};for(let f=0;f<y.length;f+=1)h=pn(h,y[f]);return r=new pa({props:h}),{c(){Qn(r.$$.fragment)},l(f){Vn(r.$$.fragment,f)},m(f,d){Xn(r,f,d),v=!0},p(f,[d]){const _=d&1?Zn(y,[d&1&&Cn(f[0]),d&0&&Cn(Dn)]):{};d&2&&(_.$$scope={dirty:d,ctx:f}),r.$set(_)},i(f){v||(sa(r.$$.fragment,f),v=!0)},o(f){na(r.$$.fragment,f),v=!1},d(f){aa(r,f)}}}const Dn={draft:!1,title:"YouTube Speeds Faster Than 2x",date:"2019-06-08",coverImage:"use-1.png",desc:"TODO",tags:["TODO"]};function ca(R,r,v){return R.$$set=y=>{v(0,r=pn(pn({},r),Ln(y)))},r=Ln(r),[r]}class ma extends Wn{constructor(r){super();zn(this,r,ca,oa,Kn,{})}}export{ma as default,Dn as metadata};