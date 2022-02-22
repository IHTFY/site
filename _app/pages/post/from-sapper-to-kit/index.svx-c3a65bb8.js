import{S as Qo,i as el,s as tl,C as sn,w as sl,x as al,y as nl,z as ol,A as Jo,q as ll,o as rl,B as pl,U as No,e as a,t as l,k as u,c as n,a as o,h as r,d as t,m as f,b as c,a1 as il,g as i,F as s,H as cl}from"../../../chunks/vendor-a3554607.js";import{P as ul}from"../../../chunks/post-1875198a.js";import"../../../chunks/stores-5109c37e.js";import"../../../chunks/Progress-912bc64e.js";import"../../../chunks/theme-4e4001f1.js";/* empty css                                      */function fl(le){let h,y,P,A,d,_,T,re,hs,ks,M,Xe,pe,vs,ms,k,Ue,We,ie,ys,_s,Ye,ze,ce,Es,ws,Be,Ze,ue,Ss,bs,Qe,et,fe,Is,gs,tt,st,de,Ps,As,O,at,he,Ts,xs,D,nt,ke,Ls,js,ot,ve,Ks,Cs,lt,rt,me,Hs,Ms,pt,it,ye,Os,Ds,ct,ut,_e,$s,At,$,Ee,qs,Tt,E,Rs,ft,Fs,Js,we,Ns,Vs,dt,Gs,Xs,xt,x,Us,q,Ws,Ys,Lt,R,Se,zs,jt,F,be,Bs,Kt,Ie,Zs,Ct,J,ge,Qs,Ht,b,ea,N,ta,sa,ht,aa,na,Mt,V,Go=`<code class="language-undefined">npx svelte-add mdsvex
npx svelte-add postcss</code>`,Ot,G,Pe,oa,Dt,w,la,kt,ra,pa,X,ia,ca,vt,ua,fa,$t,U,Xo=`<code class="language-javascript"><span class="token comment">// you'd do this</span>
<span class="token keyword">import</span> asdf <span class="token keyword">from</span> <span class="token string">"$lib/asdf-module"</span>

<span class="token comment">// instead of this nonsense</span>
<span class="token keyword">import</span> asdf <span class="token keyword">from</span> <span class="token string">"../../../asdf-module"</span></code>`,qt,W,Ae,da,Rt,Te,ha,Ft,L,ka,mt,va,ma,Jt,j,ya,yt,_a,Ea,Nt,Y,xe,wa,Vt,I,Sa,_t,ba,Ia,z,ga,Pa,Gt,B,Le,Aa,Xt,g,Ta,Et,xa,La,Z,ja,Ka,Ut,Q,je,Ca,Wt,ee,Uo=`<code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getResources <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"../../utils/fetch-all.js"</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> limit<span class="token punctuation">,</span> title <span class="token punctuation">&#125;</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>query

  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">getResources</span><span class="token punctuation">(</span><span class="token string">"post"</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>limit<span class="token punctuation">)</span> result <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>title<span class="token punctuation">)</span> result <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>title <span class="token operator">===</span> title<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">,</span> <span class="token string">"application/json"</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">&#125;</span>

  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`,Yt,te,Ke,Ha,zt,se,Wo=`<code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getResources <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"$lib/utils/fetch-data"</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">&#123;</span> RequestHandler <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"@sveltejs/kit"</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> get<span class="token operator">:</span> <span class="token function-variable function">RequestHandler</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span> query<span class="token operator">:</span> q <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">getResources</span><span class="token punctuation">(</span><span class="token string">"post"</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> limit <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"limit"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> title <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"title"</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>limit<span class="token punctuation">)</span> result <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>title<span class="token punctuation">)</span> result <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=></span> item<span class="token punctuation">.</span>title <span class="token operator">===</span> title<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      status<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      headers<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      body<span class="token operator">:</span> result<span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
    status<span class="token operator">:</span> <span class="token number">404</span><span class="token punctuation">,</span>
    body<span class="token operator">:</span> <span class="token string">"Not Found"</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Bt,K,Ma,wt,Oa,Da,Zt,ae,Ce,$a,Qt,v,qa,St,Ra,Fa,bt,Ja,Na,It,Va,Ga,gt,Xa,Ua,Pt,Wa,Ya,es,ne,He,za,ts,Me,Ba,ss,Oe,Za,as,De,$e,an,ns,oe,qe,Qa,os,Re,en,ls,Fe,tn;return{c(){h=a("h1"),y=a("a"),P=l("Table Of Contents"),A=u(),d=a("ul"),_=a("li"),T=a("p"),re=a("a"),hs=l("Introduction"),ks=u(),M=a("li"),Xe=a("p"),pe=a("a"),vs=l("Process"),ms=u(),k=a("ul"),Ue=a("li"),We=a("p"),ie=a("a"),ys=l("Migration Strategy"),_s=u(),Ye=a("li"),ze=a("p"),ce=a("a"),Es=l("Initial Setup"),ws=u(),Be=a("li"),Ze=a("p"),ue=a("a"),Ss=l("File Structure"),bs=u(),Qe=a("li"),et=a("p"),fe=a("a"),Is=l("From JS to TS"),gs=u(),tt=a("li"),st=a("p"),de=a("a"),Ps=l("SVGs"),As=u(),O=a("li"),at=a("p"),he=a("a"),Ts=l("Server Routes"),xs=u(),D=a("ul"),nt=a("li"),ke=a("a"),Ls=l("Sapper"),js=u(),ot=a("li"),ve=a("a"),Ks=l("Sveltekit"),Cs=u(),lt=a("li"),rt=a("p"),me=a("a"),Hs=l("Loading Progress"),Ms=u(),pt=a("li"),it=a("p"),ye=a("a"),Os=l("Error Pages"),Ds=u(),ct=a("li"),ut=a("p"),_e=a("a"),$s=l("Closing Notes"),At=u(),$=a("h1"),Ee=a("a"),qs=l("Introduction"),Tt=u(),E=a("p"),Rs=l("Svelte-Kit has been hyping me up this last couple of months. You "),ft=a("em"),Fs=l("might"),Js=l(" want to read my "),we=a("a"),Ns=l("previous post"),Vs=l(" where I write about my very first experience of trying Svelte-Kit. I think it\u2019s "),dt=a("em"),Gs=l("good enough"),Xs=l(" for me to migrate my website using Sapper to Svelte-Kit."),xt=u(),x=a("p"),Us=l("When I migrate my site it wasn\u2019t in public beta, but the repo is public on Github. Then a few days later, the Svelte team "),q=a("a"),Ws=l("opened a public beta"),Ys=l(" for Svelte-Kit. Anyway, here\u2019s my entire process, more or less ;)"),Lt=u(),R=a("h1"),Se=a("a"),zs=l("Process"),jt=u(),F=a("h2"),be=a("a"),Bs=l("Migration Strategy"),Kt=u(),Ie=a("p"),Zs=l("I didn\u2019t fully follow the migration guide, I started from a clean Svelte-Kit template and move my file one by one from the old website to the new one. The reason why is because I want to refactor my website instead of just migrate it, and it felt easier to do it this way."),Ct=u(),J=a("h2"),ge=a("a"),Qs=l("Initial Setup"),Ht=u(),b=a("p"),ea=l("I found this tool called "),N=a("a"),ta=l("svelte-adders"),sa=l(" which makes my life "),ht=a("em"),aa=l("so much"),na=l(" easier. I can add MDSveX and PostCSS in no time using this. Simply run this command and you\u2019re good to go."),Mt=u(),V=a("pre"),Ot=u(),G=a("h2"),Pe=a("a"),oa=l("File Structure"),Dt=u(),w=a("p"),la=l("Svelte-Kit has this alias called "),kt=a("code"),ra=l("$lib"),pa=l(" and "),X=a("a"),ia=l("many others"),ca=l(". It made my file structure cleaner and nicer to work with. It prevents me from doing this "),vt=a("code"),ua=l("../../../../"),fa=l(" nonsense. I know that I can create my own alias, but it\u2019s nice to have it out of the box."),$t=u(),U=a("pre"),qt=u(),W=a("h2"),Ae=a("a"),da=l("From JS to TS"),Rt=u(),Te=a("p"),ha=l("I\u2019ve been wanting to move from Javascript to Typescript for quite a while. When I make my website, svelte language server or ESLint didn\u2019t have support for Typescript, yet. They both support it now and I think it\u2019s a perfect time to move to Typescript."),Ft=u(),L=a("p"),ka=l("As expected, I got "),mt=a("em"),va=l("a lot"),ma=l(" of type errors, but they\u2019re easily fixable. It felt really good to finally use Typescript for my own website."),Jt=u(),j=a("p"),ya=l("One minor issue though, it seems like MDSveX layouts don\u2019t have support for Typescript, at least "),yt=a("em"),_a=l("yet"),Ea=l(". So I didn\u2019t use Typescript for those."),Nt=u(),Y=a("h2"),xe=a("a"),wa=l("SVGs"),Vt=u(),I=a("p"),Sa=l("I decided to convert "),_t=a("em"),ba=l("all"),Ia=l(" of my SVG assets into Svelte components manually because Vite hasn\u2019t support inline-svg, "),z=a("a"),ga=l("yet"),Pa=l(". It was painful to do, but oh well, I can\u2019t complain \u30C4"),Gt=u(),B=a("h2"),Le=a("a"),Aa=l("Server Routes"),Xt=u(),g=a("p"),Ta=l("It is called as "),Et=a("code"),xa=l("endpoints"),La=l(" according to "),Z=a("a"),ja=l("the docs"),Ka=l(". It looks a bit different from the one in Sapper, but it\u2019s pretty straightforward to migrate."),Ut=u(),Q=a("h3"),je=a("a"),Ca=l("Sapper"),Wt=u(),ee=a("pre"),Yt=u(),te=a("h3"),Ke=a("a"),Ha=l("Sveltekit"),zt=u(),se=a("pre"),Bt=u(),K=a("p"),Ma=l("The main difference here is, you\u2019d need to call a specific function ("),wt=a("code"),Oa=l("res.end"),Da=l(") to return a response in Sapper, while in Svelte-Kit, you simply return an object and that counts as the response."),Zt=u(),ae=a("h2"),Ce=a("a"),$a=l("Loading Progress"),Qt=u(),v=a("p"),qa=l("I had a loading progress bar in my old website which utilises the "),St=a("code"),Ra=l("preloading"),Fa=l(" store from "),bt=a("code"),Ja=l("@svelte/app"),Na=l(" stores. In Svelte-Kit, I use "),It=a("code"),Va=l("$navigating"),Ga=l(" store, it also provides "),gt=a("code"),Xa=l("from"),Ua=l(" and "),Pt=a("code"),Wa=l("to"),Ya=l(" property which I think could be useful."),es=u(),ne=a("h2"),He=a("a"),za=l("Error Pages"),ts=u(),Me=a("p"),Ba=l("I had an issue with Svelte-Kit error page where it doesn\u2019t want to load the CSS. It was a blocker for a few days, but thankfully it has been solved."),ss=u(),Oe=a("p"),Za=l("Svelte-Kit also has a new error popup which I believe comes from Vite. It looks similar to NextJS\u2019s error popup if you\u2019ve used NextJS before."),as=u(),De=a("p"),$e=a("img"),ns=u(),oe=a("h1"),qe=a("a"),Qa=l("Closing Notes"),os=u(),Re=a("p"),en=l("Overall, I think it\u2019s pretty easy to do a migration from Sapper to Svelte-Kit. There are some things that I still want to do like using Shiki for code block highlighting since MDSveX now supports custom async highlighter. The Svelte team did a great job making the migration experience as seamless as possible, and I\u2019m grateful for that!"),ls=u(),Fe=a("p"),tn=l("Anyway, thanks for reading my post and have a wonderful day! :)"),this.h()},l(e){h=n(e,"H1",{id:!0});var p=o(h);y=n(p,"A",{href:!0});var nn=o(y);P=r(nn,"Table Of Contents"),nn.forEach(t),p.forEach(t),A=f(e),d=n(e,"UL",{});var Je=o(d);_=n(Je,"LI",{});var on=o(_);T=n(on,"P",{});var ln=o(T);re=n(ln,"A",{href:!0});var rn=o(re);hs=r(rn,"Introduction"),rn.forEach(t),ln.forEach(t),on.forEach(t),ks=f(Je),M=n(Je,"LI",{});var rs=o(M);Xe=n(rs,"P",{});var pn=o(Xe);pe=n(pn,"A",{href:!0});var cn=o(pe);vs=r(cn,"Process"),cn.forEach(t),pn.forEach(t),ms=f(rs),k=n(rs,"UL",{});var m=o(k);Ue=n(m,"LI",{});var un=o(Ue);We=n(un,"P",{});var fn=o(We);ie=n(fn,"A",{href:!0});var dn=o(ie);ys=r(dn,"Migration Strategy"),dn.forEach(t),fn.forEach(t),un.forEach(t),_s=f(m),Ye=n(m,"LI",{});var hn=o(Ye);ze=n(hn,"P",{});var kn=o(ze);ce=n(kn,"A",{href:!0});var vn=o(ce);Es=r(vn,"Initial Setup"),vn.forEach(t),kn.forEach(t),hn.forEach(t),ws=f(m),Be=n(m,"LI",{});var mn=o(Be);Ze=n(mn,"P",{});var yn=o(Ze);ue=n(yn,"A",{href:!0});var _n=o(ue);Ss=r(_n,"File Structure"),_n.forEach(t),yn.forEach(t),mn.forEach(t),bs=f(m),Qe=n(m,"LI",{});var En=o(Qe);et=n(En,"P",{});var wn=o(et);fe=n(wn,"A",{href:!0});var Sn=o(fe);Is=r(Sn,"From JS to TS"),Sn.forEach(t),wn.forEach(t),En.forEach(t),gs=f(m),tt=n(m,"LI",{});var bn=o(tt);st=n(bn,"P",{});var In=o(st);de=n(In,"A",{href:!0});var gn=o(de);Ps=r(gn,"SVGs"),gn.forEach(t),In.forEach(t),bn.forEach(t),As=f(m),O=n(m,"LI",{});var ps=o(O);at=n(ps,"P",{});var Pn=o(at);he=n(Pn,"A",{href:!0});var An=o(he);Ts=r(An,"Server Routes"),An.forEach(t),Pn.forEach(t),xs=f(ps),D=n(ps,"UL",{});var is=o(D);nt=n(is,"LI",{});var Tn=o(nt);ke=n(Tn,"A",{href:!0});var xn=o(ke);Ls=r(xn,"Sapper"),xn.forEach(t),Tn.forEach(t),js=f(is),ot=n(is,"LI",{});var Ln=o(ot);ve=n(Ln,"A",{href:!0});var jn=o(ve);Ks=r(jn,"Sveltekit"),jn.forEach(t),Ln.forEach(t),is.forEach(t),ps.forEach(t),Cs=f(m),lt=n(m,"LI",{});var Kn=o(lt);rt=n(Kn,"P",{});var Cn=o(rt);me=n(Cn,"A",{href:!0});var Hn=o(me);Hs=r(Hn,"Loading Progress"),Hn.forEach(t),Cn.forEach(t),Kn.forEach(t),Ms=f(m),pt=n(m,"LI",{});var Mn=o(pt);it=n(Mn,"P",{});var On=o(it);ye=n(On,"A",{href:!0});var Dn=o(ye);Os=r(Dn,"Error Pages"),Dn.forEach(t),On.forEach(t),Mn.forEach(t),m.forEach(t),rs.forEach(t),Ds=f(Je),ct=n(Je,"LI",{});var $n=o(ct);ut=n($n,"P",{});var qn=o(ut);_e=n(qn,"A",{href:!0});var Rn=o(_e);$s=r(Rn,"Closing Notes"),Rn.forEach(t),qn.forEach(t),$n.forEach(t),Je.forEach(t),At=f(e),$=n(e,"H1",{id:!0});var Fn=o($);Ee=n(Fn,"A",{href:!0});var Jn=o(Ee);qs=r(Jn,"Introduction"),Jn.forEach(t),Fn.forEach(t),Tt=f(e),E=n(e,"P",{});var C=o(E);Rs=r(C,"Svelte-Kit has been hyping me up this last couple of months. You "),ft=n(C,"EM",{});var Nn=o(ft);Fs=r(Nn,"might"),Nn.forEach(t),Js=r(C," want to read my "),we=n(C,"A",{href:!0});var Vn=o(we);Ns=r(Vn,"previous post"),Vn.forEach(t),Vs=r(C," where I write about my very first experience of trying Svelte-Kit. I think it\u2019s "),dt=n(C,"EM",{});var Gn=o(dt);Gs=r(Gn,"good enough"),Gn.forEach(t),Xs=r(C," for me to migrate my website using Sapper to Svelte-Kit."),C.forEach(t),xt=f(e),x=n(e,"P",{});var cs=o(x);Us=r(cs,"When I migrate my site it wasn\u2019t in public beta, but the repo is public on Github. Then a few days later, the Svelte team "),q=n(cs,"A",{href:!0,rel:!0});var Xn=o(q);Ws=r(Xn,"opened a public beta"),Xn.forEach(t),Ys=r(cs," for Svelte-Kit. Anyway, here\u2019s my entire process, more or less ;)"),cs.forEach(t),Lt=f(e),R=n(e,"H1",{id:!0});var Un=o(R);Se=n(Un,"A",{href:!0});var Wn=o(Se);zs=r(Wn,"Process"),Wn.forEach(t),Un.forEach(t),jt=f(e),F=n(e,"H2",{id:!0});var Yn=o(F);be=n(Yn,"A",{href:!0});var zn=o(be);Bs=r(zn,"Migration Strategy"),zn.forEach(t),Yn.forEach(t),Kt=f(e),Ie=n(e,"P",{});var Bn=o(Ie);Zs=r(Bn,"I didn\u2019t fully follow the migration guide, I started from a clean Svelte-Kit template and move my file one by one from the old website to the new one. The reason why is because I want to refactor my website instead of just migrate it, and it felt easier to do it this way."),Bn.forEach(t),Ct=f(e),J=n(e,"H2",{id:!0});var Zn=o(J);ge=n(Zn,"A",{href:!0});var Qn=o(ge);Qs=r(Qn,"Initial Setup"),Qn.forEach(t),Zn.forEach(t),Ht=f(e),b=n(e,"P",{});var Ne=o(b);ea=r(Ne,"I found this tool called "),N=n(Ne,"A",{href:!0,rel:!0});var eo=o(N);ta=r(eo,"svelte-adders"),eo.forEach(t),sa=r(Ne," which makes my life "),ht=n(Ne,"EM",{});var to=o(ht);aa=r(to,"so much"),to.forEach(t),na=r(Ne," easier. I can add MDSveX and PostCSS in no time using this. Simply run this command and you\u2019re good to go."),Ne.forEach(t),Mt=f(e),V=n(e,"PRE",{class:!0});var Yo=o(V);Yo.forEach(t),Ot=f(e),G=n(e,"H2",{id:!0});var so=o(G);Pe=n(so,"A",{href:!0});var ao=o(Pe);oa=r(ao,"File Structure"),ao.forEach(t),so.forEach(t),Dt=f(e),w=n(e,"P",{});var H=o(w);la=r(H,"Svelte-Kit has this alias called "),kt=n(H,"CODE",{});var no=o(kt);ra=r(no,"$lib"),no.forEach(t),pa=r(H," and "),X=n(H,"A",{href:!0,rel:!0});var oo=o(X);ia=r(oo,"many others"),oo.forEach(t),ca=r(H,". It made my file structure cleaner and nicer to work with. It prevents me from doing this "),vt=n(H,"CODE",{});var lo=o(vt);ua=r(lo,"../../../../"),lo.forEach(t),fa=r(H," nonsense. I know that I can create my own alias, but it\u2019s nice to have it out of the box."),H.forEach(t),$t=f(e),U=n(e,"PRE",{class:!0});var zo=o(U);zo.forEach(t),qt=f(e),W=n(e,"H2",{id:!0});var ro=o(W);Ae=n(ro,"A",{href:!0});var po=o(Ae);da=r(po,"From JS to TS"),po.forEach(t),ro.forEach(t),Rt=f(e),Te=n(e,"P",{});var io=o(Te);ha=r(io,"I\u2019ve been wanting to move from Javascript to Typescript for quite a while. When I make my website, svelte language server or ESLint didn\u2019t have support for Typescript, yet. They both support it now and I think it\u2019s a perfect time to move to Typescript."),io.forEach(t),Ft=f(e),L=n(e,"P",{});var us=o(L);ka=r(us,"As expected, I got "),mt=n(us,"EM",{});var co=o(mt);va=r(co,"a lot"),co.forEach(t),ma=r(us," of type errors, but they\u2019re easily fixable. It felt really good to finally use Typescript for my own website."),us.forEach(t),Jt=f(e),j=n(e,"P",{});var fs=o(j);ya=r(fs,"One minor issue though, it seems like MDSveX layouts don\u2019t have support for Typescript, at least "),yt=n(fs,"EM",{});var uo=o(yt);_a=r(uo,"yet"),uo.forEach(t),Ea=r(fs,". So I didn\u2019t use Typescript for those."),fs.forEach(t),Nt=f(e),Y=n(e,"H2",{id:!0});var fo=o(Y);xe=n(fo,"A",{href:!0});var ho=o(xe);wa=r(ho,"SVGs"),ho.forEach(t),fo.forEach(t),Vt=f(e),I=n(e,"P",{});var Ve=o(I);Sa=r(Ve,"I decided to convert "),_t=n(Ve,"EM",{});var ko=o(_t);ba=r(ko,"all"),ko.forEach(t),Ia=r(Ve," of my SVG assets into Svelte components manually because Vite hasn\u2019t support inline-svg, "),z=n(Ve,"A",{href:!0,rel:!0});var vo=o(z);ga=r(vo,"yet"),vo.forEach(t),Pa=r(Ve,". It was painful to do, but oh well, I can\u2019t complain \u30C4"),Ve.forEach(t),Gt=f(e),B=n(e,"H2",{id:!0});var mo=o(B);Le=n(mo,"A",{href:!0});var yo=o(Le);Aa=r(yo,"Server Routes"),yo.forEach(t),mo.forEach(t),Xt=f(e),g=n(e,"P",{});var Ge=o(g);Ta=r(Ge,"It is called as "),Et=n(Ge,"CODE",{});var _o=o(Et);xa=r(_o,"endpoints"),_o.forEach(t),La=r(Ge," according to "),Z=n(Ge,"A",{href:!0,rel:!0});var Eo=o(Z);ja=r(Eo,"the docs"),Eo.forEach(t),Ka=r(Ge,". It looks a bit different from the one in Sapper, but it\u2019s pretty straightforward to migrate."),Ge.forEach(t),Ut=f(e),Q=n(e,"H3",{id:!0});var wo=o(Q);je=n(wo,"A",{href:!0});var So=o(je);Ca=r(So,"Sapper"),So.forEach(t),wo.forEach(t),Wt=f(e),ee=n(e,"PRE",{class:!0});var Bo=o(ee);Bo.forEach(t),Yt=f(e),te=n(e,"H3",{id:!0});var bo=o(te);Ke=n(bo,"A",{href:!0});var Io=o(Ke);Ha=r(Io,"Sveltekit"),Io.forEach(t),bo.forEach(t),zt=f(e),se=n(e,"PRE",{class:!0});var Zo=o(se);Zo.forEach(t),Bt=f(e),K=n(e,"P",{});var ds=o(K);Ma=r(ds,"The main difference here is, you\u2019d need to call a specific function ("),wt=n(ds,"CODE",{});var go=o(wt);Oa=r(go,"res.end"),go.forEach(t),Da=r(ds,") to return a response in Sapper, while in Svelte-Kit, you simply return an object and that counts as the response."),ds.forEach(t),Zt=f(e),ae=n(e,"H2",{id:!0});var Po=o(ae);Ce=n(Po,"A",{href:!0});var Ao=o(Ce);$a=r(Ao,"Loading Progress"),Ao.forEach(t),Po.forEach(t),Qt=f(e),v=n(e,"P",{});var S=o(v);qa=r(S,"I had a loading progress bar in my old website which utilises the "),St=n(S,"CODE",{});var To=o(St);Ra=r(To,"preloading"),To.forEach(t),Fa=r(S," store from "),bt=n(S,"CODE",{});var xo=o(bt);Ja=r(xo,"@svelte/app"),xo.forEach(t),Na=r(S," stores. In Svelte-Kit, I use "),It=n(S,"CODE",{});var Lo=o(It);Va=r(Lo,"$navigating"),Lo.forEach(t),Ga=r(S," store, it also provides "),gt=n(S,"CODE",{});var jo=o(gt);Xa=r(jo,"from"),jo.forEach(t),Ua=r(S," and "),Pt=n(S,"CODE",{});var Ko=o(Pt);Wa=r(Ko,"to"),Ko.forEach(t),Ya=r(S," property which I think could be useful."),S.forEach(t),es=f(e),ne=n(e,"H2",{id:!0});var Co=o(ne);He=n(Co,"A",{href:!0});var Ho=o(He);za=r(Ho,"Error Pages"),Ho.forEach(t),Co.forEach(t),ts=f(e),Me=n(e,"P",{});var Mo=o(Me);Ba=r(Mo,"I had an issue with Svelte-Kit error page where it doesn\u2019t want to load the CSS. It was a blocker for a few days, but thankfully it has been solved."),Mo.forEach(t),ss=f(e),Oe=n(e,"P",{});var Oo=o(Oe);Za=r(Oo,"Svelte-Kit also has a new error popup which I believe comes from Vite. It looks similar to NextJS\u2019s error popup if you\u2019ve used NextJS before."),Oo.forEach(t),as=f(e),De=n(e,"P",{});var Do=o(De);$e=n(Do,"IMG",{src:!0,alt:!0}),Do.forEach(t),ns=f(e),oe=n(e,"H1",{id:!0});var $o=o(oe);qe=n($o,"A",{href:!0});var qo=o(qe);Qa=r(qo,"Closing Notes"),qo.forEach(t),$o.forEach(t),os=f(e),Re=n(e,"P",{});var Ro=o(Re);en=r(Ro,"Overall, I think it\u2019s pretty easy to do a migration from Sapper to Svelte-Kit. There are some things that I still want to do like using Shiki for code block highlighting since MDSveX now supports custom async highlighter. The Svelte team did a great job making the migration experience as seamless as possible, and I\u2019m grateful for that!"),Ro.forEach(t),ls=f(e),Fe=n(e,"P",{});var Fo=o(Fe);tn=r(Fo,"Anyway, thanks for reading my post and have a wonderful day! :)"),Fo.forEach(t),this.h()},h(){c(y,"href","#table-of-contents"),c(h,"id","table-of-contents"),c(re,"href","#introduction"),c(pe,"href","#process"),c(ie,"href","#migration-strategy"),c(ce,"href","#initial-setup"),c(ue,"href","#file-structure"),c(fe,"href","#from-js-to-ts"),c(de,"href","#svgs"),c(he,"href","#server-routes"),c(ke,"href","#sapper"),c(ve,"href","#sveltekit"),c(me,"href","#loading-progress"),c(ye,"href","#error-pages"),c(_e,"href","#closing-notes"),c(Ee,"href","#introduction"),c($,"id","introduction"),c(we,"href","/post/trying-out-sveltekit#introduction"),c(q,"href","https://svelte.dev/blog/sveltekit-beta"),c(q,"rel","nofollow"),c(Se,"href","#process"),c(R,"id","process"),c(be,"href","#migration-strategy"),c(F,"id","migration-strategy"),c(ge,"href","#initial-setup"),c(J,"id","initial-setup"),c(N,"href","https://github.com/svelte-add/svelte-adders"),c(N,"rel","nofollow"),c(V,"class","language-undefined"),c(Pe,"href","#file-structure"),c(G,"id","file-structure"),c(X,"href","https://kit.svelte.dev/docs#modules"),c(X,"rel","nofollow"),c(U,"class","language-javascript"),c(Ae,"href","#from-js-to-ts"),c(W,"id","from-js-to-ts"),c(xe,"href","#svgs"),c(Y,"id","svgs"),c(z,"href","https://github.com/vitejs/vite/issues/1204"),c(z,"rel","nofollow"),c(Le,"href","#server-routes"),c(B,"id","server-routes"),c(Z,"href","https://kit.svelte.dev/docs#routing-endpoints"),c(Z,"rel","nofollow"),c(je,"href","#sapper"),c(Q,"id","sapper"),c(ee,"class","language-javascript"),c(Ke,"href","#sveltekit"),c(te,"id","sveltekit"),c(se,"class","language-typescript"),c(Ce,"href","#loading-progress"),c(ae,"id","loading-progress"),c(He,"href","#error-pages"),c(ne,"id","error-pages"),il($e.src,an="/assets/post/from-sapper-to-kit/error.png")||c($e,"src",an),c($e,"alt","error"),c(qe,"href","#closing-notes"),c(oe,"id","closing-notes")},m(e,p){i(e,h,p),s(h,y),s(y,P),i(e,A,p),i(e,d,p),s(d,_),s(_,T),s(T,re),s(re,hs),s(d,ks),s(d,M),s(M,Xe),s(Xe,pe),s(pe,vs),s(M,ms),s(M,k),s(k,Ue),s(Ue,We),s(We,ie),s(ie,ys),s(k,_s),s(k,Ye),s(Ye,ze),s(ze,ce),s(ce,Es),s(k,ws),s(k,Be),s(Be,Ze),s(Ze,ue),s(ue,Ss),s(k,bs),s(k,Qe),s(Qe,et),s(et,fe),s(fe,Is),s(k,gs),s(k,tt),s(tt,st),s(st,de),s(de,Ps),s(k,As),s(k,O),s(O,at),s(at,he),s(he,Ts),s(O,xs),s(O,D),s(D,nt),s(nt,ke),s(ke,Ls),s(D,js),s(D,ot),s(ot,ve),s(ve,Ks),s(k,Cs),s(k,lt),s(lt,rt),s(rt,me),s(me,Hs),s(k,Ms),s(k,pt),s(pt,it),s(it,ye),s(ye,Os),s(d,Ds),s(d,ct),s(ct,ut),s(ut,_e),s(_e,$s),i(e,At,p),i(e,$,p),s($,Ee),s(Ee,qs),i(e,Tt,p),i(e,E,p),s(E,Rs),s(E,ft),s(ft,Fs),s(E,Js),s(E,we),s(we,Ns),s(E,Vs),s(E,dt),s(dt,Gs),s(E,Xs),i(e,xt,p),i(e,x,p),s(x,Us),s(x,q),s(q,Ws),s(x,Ys),i(e,Lt,p),i(e,R,p),s(R,Se),s(Se,zs),i(e,jt,p),i(e,F,p),s(F,be),s(be,Bs),i(e,Kt,p),i(e,Ie,p),s(Ie,Zs),i(e,Ct,p),i(e,J,p),s(J,ge),s(ge,Qs),i(e,Ht,p),i(e,b,p),s(b,ea),s(b,N),s(N,ta),s(b,sa),s(b,ht),s(ht,aa),s(b,na),i(e,Mt,p),i(e,V,p),V.innerHTML=Go,i(e,Ot,p),i(e,G,p),s(G,Pe),s(Pe,oa),i(e,Dt,p),i(e,w,p),s(w,la),s(w,kt),s(kt,ra),s(w,pa),s(w,X),s(X,ia),s(w,ca),s(w,vt),s(vt,ua),s(w,fa),i(e,$t,p),i(e,U,p),U.innerHTML=Xo,i(e,qt,p),i(e,W,p),s(W,Ae),s(Ae,da),i(e,Rt,p),i(e,Te,p),s(Te,ha),i(e,Ft,p),i(e,L,p),s(L,ka),s(L,mt),s(mt,va),s(L,ma),i(e,Jt,p),i(e,j,p),s(j,ya),s(j,yt),s(yt,_a),s(j,Ea),i(e,Nt,p),i(e,Y,p),s(Y,xe),s(xe,wa),i(e,Vt,p),i(e,I,p),s(I,Sa),s(I,_t),s(_t,ba),s(I,Ia),s(I,z),s(z,ga),s(I,Pa),i(e,Gt,p),i(e,B,p),s(B,Le),s(Le,Aa),i(e,Xt,p),i(e,g,p),s(g,Ta),s(g,Et),s(Et,xa),s(g,La),s(g,Z),s(Z,ja),s(g,Ka),i(e,Ut,p),i(e,Q,p),s(Q,je),s(je,Ca),i(e,Wt,p),i(e,ee,p),ee.innerHTML=Uo,i(e,Yt,p),i(e,te,p),s(te,Ke),s(Ke,Ha),i(e,zt,p),i(e,se,p),se.innerHTML=Wo,i(e,Bt,p),i(e,K,p),s(K,Ma),s(K,wt),s(wt,Oa),s(K,Da),i(e,Zt,p),i(e,ae,p),s(ae,Ce),s(Ce,$a),i(e,Qt,p),i(e,v,p),s(v,qa),s(v,St),s(St,Ra),s(v,Fa),s(v,bt),s(bt,Ja),s(v,Na),s(v,It),s(It,Va),s(v,Ga),s(v,gt),s(gt,Xa),s(v,Ua),s(v,Pt),s(Pt,Wa),s(v,Ya),i(e,es,p),i(e,ne,p),s(ne,He),s(He,za),i(e,ts,p),i(e,Me,p),s(Me,Ba),i(e,ss,p),i(e,Oe,p),s(Oe,Za),i(e,as,p),i(e,De,p),s(De,$e),i(e,ns,p),i(e,oe,p),s(oe,qe),s(qe,Qa),i(e,os,p),i(e,Re,p),s(Re,en),i(e,ls,p),i(e,Fe,p),s(Fe,tn)},p:cl,d(e){e&&t(h),e&&t(A),e&&t(d),e&&t(At),e&&t($),e&&t(Tt),e&&t(E),e&&t(xt),e&&t(x),e&&t(Lt),e&&t(R),e&&t(jt),e&&t(F),e&&t(Kt),e&&t(Ie),e&&t(Ct),e&&t(J),e&&t(Ht),e&&t(b),e&&t(Mt),e&&t(V),e&&t(Ot),e&&t(G),e&&t(Dt),e&&t(w),e&&t($t),e&&t(U),e&&t(qt),e&&t(W),e&&t(Rt),e&&t(Te),e&&t(Ft),e&&t(L),e&&t(Jt),e&&t(j),e&&t(Nt),e&&t(Y),e&&t(Vt),e&&t(I),e&&t(Gt),e&&t(B),e&&t(Xt),e&&t(g),e&&t(Ut),e&&t(Q),e&&t(Wt),e&&t(ee),e&&t(Yt),e&&t(te),e&&t(zt),e&&t(se),e&&t(Bt),e&&t(K),e&&t(Zt),e&&t(ae),e&&t(Qt),e&&t(v),e&&t(es),e&&t(ne),e&&t(ts),e&&t(Me),e&&t(ss),e&&t(Oe),e&&t(as),e&&t(De),e&&t(ns),e&&t(oe),e&&t(os),e&&t(Re),e&&t(ls),e&&t(Fe)}}}function dl(le){let h,y;const P=[le[0],Vo];let A={$$slots:{default:[fl]},$$scope:{ctx:le}};for(let d=0;d<P.length;d+=1)A=sn(A,P[d]);return h=new ul({props:A}),{c(){sl(h.$$.fragment)},l(d){al(h.$$.fragment,d)},m(d,_){nl(h,d,_),y=!0},p(d,[_]){const T=_&1?ol(P,[_&1&&Jo(d[0]),_&0&&Jo(Vo)]):{};_&2&&(T.$$scope={dirty:_,ctx:d}),h.$set(T)},i(d){y||(ll(h.$$.fragment,d),y=!0)},o(d){rl(h.$$.fragment,d),y=!1},d(d){pl(h,d)}}}const Vo={draft:!1,title:"Migrating from Sapper to SvelteKit",date:"2021-04-14T00:00:00.000Z",desc:"A post about my experience migrating my blog to SvelteKit.",tags:["svelte","website"]};function hl(le,h,y){return le.$$set=P=>{y(0,h=sn(sn({},h),No(P)))},h=No(h),[h]}class wl extends Qo{constructor(h){super();el(this,h,hl,dl,tl,{})}}export{wl as default,Vo as metadata};
