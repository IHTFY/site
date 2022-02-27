import{D as Ue,S as re,i as se,s as le,e as v,c as d,b as s,g as Y,F as pe,G as P,d as c,H as me,I as _e,a as u,J as o,t as X,k as x,w as G,h as ee,m as M,x as J,K,y as Q,q as j,L as qe,M as $e,N as Ve,o as S,B as W,O as Oe,l as ke,P as ze,n as Ge,p as Je,Q as He,C,R as te,z as we,T as ae,f as Ye,U as Ke,v as Se,V as Qe,W as We,X as Xe,Y as et,Z as tt,_ as at,$ as rt}from"../chunks/vendor-4e826582.js";import{d as st,n as lt}from"../chunks/stores-e638db0f.js";const ye=Ue("light");function it(i){let e,t,r;return{c(){e=v("input"),this.h()},l(l){e=d(l,"INPUT",{id:!0,class:!0,type:!0}),this.h()},h(){s(e,"id","toggle"),s(e,"class","toggle svelte-lz1xyi"),s(e,"type","checkbox")},m(l,a){Y(l,e,a),t||(r=pe(e,"change",i[0]),t=!0)},p:P,i:P,o:P,d(l){l&&c(e),t=!1,r()}}}function nt(i){return[()=>ye.update(t=>t==="light"?"dark":"light")]}class Fe extends re{constructor(e){super();se(this,e,nt,it,le,{})}}function ot(i){let e,t;return{c(){e=me("svg"),t=me("path"),this.h()},l(r){e=_e(r,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0,fill:!0,stroke:!0});var l=u(e);t=_e(l,"path",{d:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,stroke:!0}),u(t).forEach(c),l.forEach(c),this.h()},h(){s(t,"d","M4 2l8 5l0 6l-10-12l10 0l-10 12l0-6l8-5"),s(t,"stroke-width","0.7"),s(t,"stroke-linecap","round"),s(t,"stroke-linejoin","round"),s(t,"stroke","currentColor"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"width","40"),s(e,"height","40"),s(e,"viewBox","0 0 14 14"),s(e,"class",i[0]),s(e,"fill","none"),s(e,"stroke","#21326D")},m(r,l){Y(r,e,l),o(e,t)},p(r,[l]){l&1&&s(e,"class",r[0])},i:P,o:P,d(r){r&&c(e)}}}function ct(i,e,t){let{className:r}=e;return i.$$set=l=>{"className"in l&&t(0,r=l.className)},[r]}class ht extends re{constructor(e){super();se(this,e,ct,ot,le,{className:0})}}function Ce(i){let e,t,r,l,a,n,f,b,g,V,I,_,L,E,h,m,B,A,R,Z,$,z,ce,O;return Z=new Fe({}),{c(){e=v("div"),t=v("ul"),r=v("li"),l=v("a"),a=X("Home"),n=x(),f=v("li"),b=v("a"),g=X("Posts"),V=x(),I=v("li"),_=v("a"),L=X("Projects"),E=x(),h=v("li"),m=v("a"),B=X("About"),A=x(),R=v("li"),G(Z.$$.fragment),this.h()},l(k){e=d(k,"DIV",{class:!0,"data-testid":!0});var D=u(e);t=d(D,"UL",{class:!0});var p=u(t);r=d(p,"LI",{class:!0});var T=u(r);l=d(T,"A",{href:!0,class:!0});var y=u(l);a=ee(y,"Home"),y.forEach(c),T.forEach(c),n=M(p),f=d(p,"LI",{class:!0});var q=u(f);b=d(q,"A",{href:!0,class:!0});var H=u(b);g=ee(H,"Posts"),H.forEach(c),q.forEach(c),V=M(p),I=d(p,"LI",{class:!0});var ie=u(I);_=d(ie,"A",{href:!0,class:!0});var fe=u(_);L=ee(fe,"Projects"),fe.forEach(c),ie.forEach(c),E=M(p),h=d(p,"LI",{class:!0});var ne=u(h);m=d(ne,"A",{href:!0,class:!0});var F=u(m);B=ee(F,"About"),F.forEach(c),ne.forEach(c),A=M(p),R=d(p,"LI",{class:!0});var he=u(R);J(Z.$$.fragment,he),he.forEach(c),p.forEach(c),D.forEach(c),this.h()},h(){s(l,"href","/"),s(l,"class","svelte-1xlbyhi"),s(r,"class","navbar__mobile_item svelte-1xlbyhi"),s(b,"href","/post"),s(b,"class","svelte-1xlbyhi"),s(f,"class","navbar__mobile_item svelte-1xlbyhi"),K(f,"active",i[0]==="post"),s(_,"href","/project"),s(_,"class","svelte-1xlbyhi"),s(I,"class","navbar__mobile_item svelte-1xlbyhi"),K(I,"active",i[0]==="project"),s(m,"href","/about"),s(m,"class","svelte-1xlbyhi"),s(h,"class","navbar__mobile_item svelte-1xlbyhi"),K(h,"active",i[0]==="about"),s(R,"class","navbar__mobile_item"),s(t,"class","navbar__mobile_items svelte-1xlbyhi"),s(e,"class","navbar__mobile svelte-1xlbyhi"),s(e,"data-testid","mobile-nav")},m(k,D){Y(k,e,D),o(e,t),o(t,r),o(r,l),o(l,a),o(t,n),o(t,f),o(f,b),o(b,g),o(t,V),o(t,I),o(I,_),o(_,L),o(t,E),o(t,h),o(h,m),o(m,B),o(t,A),o(t,R),Q(Z,R,null),z=!0,ce||(O=[pe(r,"click",i[3]),pe(b,"click",i[3]),pe(_,"click",i[3]),pe(m,"click",i[3])],ce=!0)},p(k,D){D&1&&K(f,"active",k[0]==="post"),D&1&&K(I,"active",k[0]==="project"),D&1&&K(h,"active",k[0]==="about")},i(k){z||(j(Z.$$.fragment,k),qe(()=>{$||($=$e(e,Ve,{duration:200,y:-100},!0)),$.run(1)}),z=!0)},o(k){S(Z.$$.fragment,k),$||($=$e(e,Ve,{duration:200,y:-100},!1)),$.run(0),z=!1},d(k){k&&c(e),W(Z),k&&$&&$.end(),ce=!1,Oe(O)}}}function ut(i){let e,t,r,l,a,n,f,b,g,V,I,_,L,E,h,m,B,A,R,Z,$,z,ce,O,k,D,p,T,y,q,H,ie,fe,ne,F,he,ve,oe,ge,Ee;a=new ht({props:{className:"logo__icon"}}),k=new Fe({});let N=i[1]&&Ce(i);return{c(){e=v("nav"),t=v("div"),r=v("div"),l=v("a"),G(a.$$.fragment),n=x(),f=v("ul"),b=v("li"),g=v("a"),V=X("Home"),I=x(),_=v("li"),L=v("a"),E=X("Posts"),h=x(),m=v("li"),B=v("a"),A=X("Projects"),R=x(),Z=v("li"),$=v("a"),z=X("About"),ce=x(),O=v("li"),G(k.$$.fragment),D=x(),p=v("div"),T=v("input"),y=x(),q=v("span"),H=x(),ie=v("span"),fe=x(),ne=v("span"),he=x(),N&&N.c(),ve=ke(),this.h()},l(w){e=d(w,"NAV",{class:!0});var U=u(e);t=d(U,"DIV",{class:!0});var be=u(t);r=d(be,"DIV",{class:!0});var Ae=u(r);l=d(Ae,"A",{href:!0,"aria-label":!0,class:!0});var xe=u(l);J(a.$$.fragment,xe),xe.forEach(c),Ae.forEach(c),n=M(be),f=d(be,"UL",{class:!0});var ue=u(f);b=d(ue,"LI",{class:!0,"data-testid":!0});var Me=u(b);g=d(Me,"A",{href:!0,class:!0});var Ie=u(g);V=ee(Ie,"Home"),Ie.forEach(c),Me.forEach(c),I=M(ue),_=d(ue,"LI",{class:!0,"data-testid":!0});var Le=u(_);L=d(Le,"A",{href:!0,class:!0});var Be=u(L);E=ee(Be,"Posts"),Be.forEach(c),Le.forEach(c),h=M(ue),m=d(ue,"LI",{class:!0,"data-testid":!0});var Re=u(m);B=d(Re,"A",{href:!0,class:!0});var Ze=u(B);A=ee(Ze,"Projects"),Ze.forEach(c),Re.forEach(c),R=M(ue),Z=d(ue,"LI",{class:!0,"data-testid":!0});var De=u(Z);$=d(De,"A",{href:!0,class:!0});var Ne=u($);z=ee(Ne,"About"),Ne.forEach(c),De.forEach(c),ce=M(ue),O=d(ue,"LI",{class:!0});var Pe=u(O);J(k.$$.fragment,Pe),Pe.forEach(c),ue.forEach(c),D=M(be),p=d(be,"DIV",{class:!0,"data-testid":!0});var de=u(p);T=d(de,"INPUT",{class:!0,type:!0,"aria-label":!0}),y=M(de),q=d(de,"SPAN",{class:!0}),u(q).forEach(c),H=M(de),ie=d(de,"SPAN",{class:!0}),u(ie).forEach(c),fe=M(de),ne=d(de,"SPAN",{class:!0}),u(ne).forEach(c),de.forEach(c),be.forEach(c),U.forEach(c),he=M(w),N&&N.l(w),ve=ke(),this.h()},h(){s(l,"href","/"),s(l,"aria-label","logo"),s(l,"class","svelte-1xlbyhi"),s(r,"class","navbar__title svelte-1xlbyhi"),s(g,"href","/"),s(g,"class","svelte-1xlbyhi"),s(b,"class","navbar__item svelte-1xlbyhi"),s(b,"data-testid","home"),s(L,"href","/post"),s(L,"class","svelte-1xlbyhi"),s(_,"class","navbar__item svelte-1xlbyhi"),s(_,"data-testid","posts"),K(_,"active",i[0]==="post"),s(B,"href","/project"),s(B,"class","svelte-1xlbyhi"),s(m,"class","navbar__item svelte-1xlbyhi"),s(m,"data-testid","projects"),K(m,"active",i[0]==="project"),s($,"href","/about"),s($,"class","svelte-1xlbyhi"),s(Z,"class","navbar__item svelte-1xlbyhi"),s(Z,"data-testid","about"),K(Z,"active",i[0]==="about"),s(O,"class","navbar__item svelte-1xlbyhi"),s(f,"class","navbar__items svelte-1xlbyhi"),s(T,"class","navbar__checkbox svelte-1xlbyhi"),s(T,"type","checkbox"),T.checked=i[2],s(T,"aria-label","toggle menu"),s(q,"class","navbar__hamburger_item--1 svelte-1xlbyhi"),s(ie,"class","navbar__hamburger_item--2 svelte-1xlbyhi"),s(ne,"class","navbar__hamburger_item--3 svelte-1xlbyhi"),s(p,"class","navbar__hamburger svelte-1xlbyhi"),s(p,"data-testid","hamburger-navigation"),s(t,"class","navbar__container svelte-1xlbyhi"),s(e,"class","navbar svelte-1xlbyhi")},m(w,U){Y(w,e,U),o(e,t),o(t,r),o(r,l),Q(a,l,null),o(t,n),o(t,f),o(f,b),o(b,g),o(g,V),o(f,I),o(f,_),o(_,L),o(L,E),o(f,h),o(f,m),o(m,B),o(B,A),o(f,R),o(f,Z),o(Z,$),o($,z),o(f,ce),o(f,O),Q(k,O,null),o(t,D),o(t,p),o(p,T),o(p,y),o(p,q),o(p,H),o(p,ie),o(p,fe),o(p,ne),Y(w,he,U),N&&N.m(w,U),Y(w,ve,U),oe=!0,ge||(Ee=pe(T,"input",ze(i[3])),ge=!0)},p(w,[U]){U&1&&K(_,"active",w[0]==="post"),U&1&&K(m,"active",w[0]==="project"),U&1&&K(Z,"active",w[0]==="about"),(!oe||U&4)&&(T.checked=w[2]),w[1]?N?(N.p(w,U),U&2&&j(N,1)):(N=Ce(w),N.c(),j(N,1),N.m(ve.parentNode,ve)):N&&(Ge(),S(N,1,1,()=>{N=null}),Je())},i(w){oe||(j(a.$$.fragment,w),j(k.$$.fragment,w),qe(()=>{F||(F=$e(p,He,{duration:200},!0)),F.run(1)}),j(N),oe=!0)},o(w){S(a.$$.fragment,w),S(k.$$.fragment,w),F||(F=$e(p,He,{duration:200},!1)),F.run(0),S(N),oe=!1},d(w){w&&c(e),W(a),W(k),w&&F&&F.end(),w&&c(he),N&&N.d(w),w&&c(ve),ge=!1,Ee()}}}function ft(i,e,t){let{segment:r}=e,l=!1,a=!1;const n=()=>{t(2,a=!a),t(1,l=!l),document.body.style.overflow=a?"hidden":"auto"};return i.$$set=f=>{"segment"in f&&t(0,r=f.segment)},[r,l,a,n]}class vt extends re{constructor(e){super();se(this,e,ft,ut,le,{segment:0})}}function dt(i){let e,t='<path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8Zm-83.9 74L128 133.1L52.6 64h150.8Zm-41.4 6L40 181.8V74.2Zm11.8 10.9l12.1 11a8 8 0 0 0 10.8 0l12.1-11l57.9 53.1H52.6Zm46.8-10.9L216 74.2v107.6Z"/>',r=[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 256 256"},i[0]],l={};for(let a=0;a<r.length;a+=1)l=C(l,r[a]);return{c(){e=me("svg"),this.h()},l(a){e=_e(a,"svg",{width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var n=u(e);n.forEach(c),this.h()},h(){te(e,l)},m(a,n){Y(a,e,n),e.innerHTML=t},p(a,[n]){te(e,l=we(r,[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 256 256"},n&1&&a[0]]))},i:P,o:P,d(a){a&&c(e)}}}function mt(i,e,t){return i.$$set=r=>{t(0,e=C(C({},e),ae(r)))},e=ae(e),[e]}class _t extends re{constructor(e){super();se(this,e,mt,dt,le,{})}}function gt(i){let e,t='<path fill="currentColor" d="M216 216a16 16 0 0 1-16-16v-8a32.1 32.1 0 0 0-14.8-27a55.8 55.8 0 0 0 22.8-45v-8a58 58 0 0 0-7.7-28.3a59.9 59.9 0 0 0-5.4-47.7a7.8 7.8 0 0 0-6.9-4a59.7 59.7 0 0 0-48 24h-24a59.7 59.7 0 0 0-48-24a7.8 7.8 0 0 0-6.9 4a59.9 59.9 0 0 0-5.4 47.7A58 58 0 0 0 48 112v8a55.8 55.8 0 0 0 22.8 45A32.1 32.1 0 0 0 56 192v8a16 16 0 0 1-16 16a8 8 0 0 0 0 16a32.1 32.1 0 0 0 32-32v-8a16 16 0 0 1 16-16h12v40a16 16 0 0 1-16 16a8 8 0 0 0 0 16a32.1 32.1 0 0 0 32-32v-40h24v40a32.1 32.1 0 0 0 32 32a8 8 0 0 0 0-16a16 16 0 0 1-16-16v-40h12a16 16 0 0 1 16 16v8a32.1 32.1 0 0 0 32 32a8 8 0 0 0 0-16ZM64 120v-8a42.7 42.7 0 0 1 6.9-22.5a7.9 7.9 0 0 0 1.1-7.7a43.7 43.7 0 0 1 .8-33.5a43.6 43.6 0 0 1 32.3 20a8 8 0 0 0 6.7 3.7h32.4a8 8 0 0 0 6.7-3.7a43.6 43.6 0 0 1 32.3-20a43.7 43.7 0 0 1 .8 33.5a8.2 8.2 0 0 0 1.1 7.7A42.7 42.7 0 0 1 192 112v8a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40Z"/>',r=[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 256 256"},i[0]],l={};for(let a=0;a<r.length;a+=1)l=C(l,r[a]);return{c(){e=me("svg"),this.h()},l(a){e=_e(a,"svg",{width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var n=u(e);n.forEach(c),this.h()},h(){te(e,l)},m(a,n){Y(a,e,n),e.innerHTML=t},p(a,[n]){te(e,l=we(r,[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 256 256"},n&1&&a[0]]))},i:P,o:P,d(a){a&&c(e)}}}function bt(i,e,t){return i.$$set=r=>{t(0,e=C(C({},e),ae(r)))},e=ae(e),[e]}class pt extends re{constructor(e){super();se(this,e,bt,gt,le,{})}}function wt(i){let e,t='<path fill="currentColor" d="M247.4 68.9A8 8 0 0 0 240 64h-30.4a47.8 47.8 0 0 0-75.2-10.1A47.7 47.7 0 0 0 120 88v6.1C79.3 83.5 46 50.7 45.7 50.3a8 8 0 0 0-8.1-1.9a8.1 8.1 0 0 0-5.5 6.2c-8.7 48.2 5.8 80.5 19.5 99.1a108.6 108.6 0 0 0 24.7 24.4c-15.3 17.3-38.9 26.3-39.1 26.4a8 8 0 0 0-3.9 11.9c.8 1.2 3.8 5.1 11.1 8.8c9.1 4.5 21.1 6.8 35.6 6.8c70.5 0 129.5-54.3 135.5-124.2l30.2-30.1a8.4 8.4 0 0 0 1.7-8.8Zm-45.3 29.7a7.8 7.8 0 0 0-2.3 5.2C195.7 166.7 143.1 216 80 216c-10.6 0-18-1.4-23.2-3.1c11.5-6.2 27.5-17 37.9-32.5a8 8 0 0 0 1-6.4a8.1 8.1 0 0 0-4.1-5.1c-.1-.1-14.9-7.8-27.6-25.3c-14.4-19.8-20.5-43.9-18.1-71.7c15.8 13 46 34.2 80.8 40a8.1 8.1 0 0 0 6.5-1.8a8.2 8.2 0 0 0 2.8-6.1V88a32 32 0 0 1 61.3-12.8a8.1 8.1 0 0 0 7.4 4.8h16Z"/>',r=[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 256 256"},i[0]],l={};for(let a=0;a<r.length;a+=1)l=C(l,r[a]);return{c(){e=me("svg"),this.h()},l(a){e=_e(a,"svg",{width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var n=u(e);n.forEach(c),this.h()},h(){te(e,l)},m(a,n){Y(a,e,n),e.innerHTML=t},p(a,[n]){te(e,l=we(r,[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 256 256"},n&1&&a[0]]))},i:P,o:P,d(a){a&&c(e)}}}function $t(i,e,t){return i.$$set=r=>{t(0,e=C(C({},e),ae(r)))},e=ae(e),[e]}class kt extends re{constructor(e){super();se(this,e,$t,wt,le,{})}}function yt(i){let e,t='<path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Zm44-132H84a56 56 0 0 0-56 56v88a56 56 0 0 0 56 56h88a56 56 0 0 0 56-56V84a56 56 0 0 0-56-56Zm40 144a40 40 0 0 1-40 40H84a40 40 0 0 1-40-40V84a40 40 0 0 1 40-40h88a40 40 0 0 1 40 40Zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/>',r=[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 256 256"},i[0]],l={};for(let a=0;a<r.length;a+=1)l=C(l,r[a]);return{c(){e=me("svg"),this.h()},l(a){e=_e(a,"svg",{width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var n=u(e);n.forEach(c),this.h()},h(){te(e,l)},m(a,n){Y(a,e,n),e.innerHTML=t},p(a,[n]){te(e,l=we(r,[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 256 256"},n&1&&a[0]]))},i:P,o:P,d(a){a&&c(e)}}}function Et(i,e,t){return i.$$set=r=>{t(0,e=C(C({},e),ae(r)))},e=ae(e),[e]}class At extends re{constructor(e){super();se(this,e,Et,yt,le,{})}}function xt(i){let e,t='<path fill="currentColor" d="M224 76a48 48 0 0 1-48-48a8 8 0 0 0-8-8h-40a8 8 0 0 0-8 8v128a20 20 0 1 1-28.6-18.1a7.9 7.9 0 0 0 4.6-7.2V89.1a7.8 7.8 0 0 0-2.9-6.2a8 8 0 0 0-6.5-1.7A76 76 0 1 0 176 156v-35.7a103.2 103.2 0 0 0 48 11.7a8 8 0 0 0 8-8V84a8 8 0 0 0-8-8Zm-8 39.6a87.4 87.4 0 0 1-43.3-16.1A8.1 8.1 0 0 0 160 106v50a60 60 0 1 1-80-56.6v26.7a36 36 0 1 0 56 29.9V36h24.5A64.1 64.1 0 0 0 216 91.5Z"/>',r=[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 256 256"},i[0]],l={};for(let a=0;a<r.length;a+=1)l=C(l,r[a]);return{c(){e=me("svg"),this.h()},l(a){e=_e(a,"svg",{width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var n=u(e);n.forEach(c),this.h()},h(){te(e,l)},m(a,n){Y(a,e,n),e.innerHTML=t},p(a,[n]){te(e,l=we(r,[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 256 256"},n&1&&a[0]]))},i:P,o:P,d(a){a&&c(e)}}}function Mt(i,e,t){return i.$$set=r=>{t(0,e=C(C({},e),ae(r)))},e=ae(e),[e]}class It extends re{constructor(e){super();se(this,e,Mt,xt,le,{})}}function Lt(i){let e,t='<path fill="currentColor" d="m164.4 121.3l-48-32a8.3 8.3 0 0 0-8.2-.4A8 8 0 0 0 104 96v64a8 8 0 0 0 4.2 7.1a8.5 8.5 0 0 0 3.8.9a8.4 8.4 0 0 0 4.4-1.3l48-32a8 8 0 0 0 0-13.4ZM120 145.1v-34.2l25.6 17.1Zm114.3-75.3a23.5 23.5 0 0 0-14.5-16.3C185.6 40.3 131 40.4 128 40.4s-57.6-.1-91.8 13.1a23.5 23.5 0 0 0-14.5 16.3C19.1 79.7 16 97.9 16 128s3.1 48.3 5.7 58.2a23.5 23.5 0 0 0 14.5 16.3c32.8 12.7 84.2 13.1 91.1 13.1h1.4c6.9 0 58.3-.4 91.1-13.1a23.5 23.5 0 0 0 14.5-16.3c2.6-9.9 5.7-28.1 5.7-58.2s-3.1-48.3-5.7-58.2Zm-15.5 112.4a7.8 7.8 0 0 1-4.7 5.4c-31.7 12.2-85.5 12-86.1 12h-.1c-.5 0-54.3.2-86-12a7.8 7.8 0 0 1-4.7-5.4c-2.4-9.1-5.2-25.8-5.2-54.2s2.8-45.1 5.2-54.2a7.8 7.8 0 0 1 4.7-5.4c30.5-11.7 81.7-12 85.9-12h.2c.6 0 54.4-.2 86.1 12a7.8 7.8 0 0 1 4.7 5.4c2.4 9.1 5.2 25.8 5.2 54.2s-2.8 45.1-5.2 54.2Z"/>',r=[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 256 256"},i[0]],l={};for(let a=0;a<r.length;a+=1)l=C(l,r[a]);return{c(){e=me("svg"),this.h()},l(a){e=_e(a,"svg",{width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var n=u(e);n.forEach(c),this.h()},h(){te(e,l)},m(a,n){Y(a,e,n),e.innerHTML=t},p(a,[n]){te(e,l=we(r,[{width:"1.2em"},{height:"1.2em"},{preserveAspectRatio:"xMidYMid meet"},{viewBox:"0 0 256 256"},n&1&&a[0]]))},i:P,o:P,d(a){a&&c(e)}}}function Bt(i,e,t){return i.$$set=r=>{t(0,e=C(C({},e),ae(r)))},e=ae(e),[e]}class Rt extends re{constructor(e){super();se(this,e,Bt,Lt,le,{})}}function Zt(i){let e,t,r,l,a,n,f,b,g,V,I,_,L,E,h,m,B,A,R,Z,$,z,ce=new Date().getFullYear()+"",O,k,D,p,T;return l=new Rt({props:{height:"24",width:"24"}}),f=new pt({props:{height:"24",width:"24"}}),V=new At({props:{height:"24",width:"24"}}),L=new kt({props:{height:"24",width:"24"}}),m=new It({props:{height:"24",width:"24"}}),R=new _t({props:{height:"24",width:"24"}}),{c(){e=v("footer"),t=v("div"),r=v("a"),G(l.$$.fragment),a=x(),n=v("a"),G(f.$$.fragment),b=x(),g=v("a"),G(V.$$.fragment),I=x(),_=v("a"),G(L.$$.fragment),E=x(),h=v("a"),G(m.$$.fragment),B=x(),A=v("a"),G(R.$$.fragment),Z=x(),$=v("p"),z=X("Copyright \xA9 "),O=X(ce),k=x(),D=v("a"),p=X("IHTFY"),this.h()},l(y){e=d(y,"FOOTER",{class:!0});var q=u(e);t=d(q,"DIV",{class:!0});var H=u(t);r=d(H,"A",{href:!0,target:!0,rel:!0,"aria-label":!0,class:!0});var ie=u(r);J(l.$$.fragment,ie),ie.forEach(c),a=M(H),n=d(H,"A",{href:!0,target:!0,rel:!0,"aria-label":!0,class:!0});var fe=u(n);J(f.$$.fragment,fe),fe.forEach(c),b=M(H),g=d(H,"A",{href:!0,target:!0,rel:!0,"aria-label":!0,class:!0});var ne=u(g);J(V.$$.fragment,ne),ne.forEach(c),I=M(H),_=d(H,"A",{href:!0,target:!0,rel:!0,"aria-label":!0,class:!0});var F=u(_);J(L.$$.fragment,F),F.forEach(c),E=M(H),h=d(H,"A",{href:!0,target:!0,rel:!0,"aria-label":!0,class:!0});var he=u(h);J(m.$$.fragment,he),he.forEach(c),B=M(H),A=d(H,"A",{href:!0,target:!0,rel:!0,"aria-label":!0,class:!0});var ve=u(A);J(R.$$.fragment,ve),ve.forEach(c),H.forEach(c),Z=M(q),$=d(q,"P",{class:!0});var oe=u($);z=ee(oe,"Copyright \xA9 "),O=ee(oe,ce),k=M(oe),D=d(oe,"A",{class:!0,href:!0});var ge=u(D);p=ee(ge,"IHTFY"),ge.forEach(c),oe.forEach(c),q.forEach(c),this.h()},h(){s(r,"href",i[5]),s(r,"target","_blank"),s(r,"rel","norel noreferrer"),s(r,"aria-label","youtube"),s(r,"class","svelte-10ww2eq"),s(n,"href",i[0]),s(n,"target","_blank"),s(n,"rel","norel noreferrer"),s(n,"aria-label","github"),s(n,"class","svelte-10ww2eq"),s(g,"href",i[2]),s(g,"target","_blank"),s(g,"rel","norel noreferrer"),s(g,"aria-label","instagram"),s(g,"class","svelte-10ww2eq"),s(_,"href",i[1]),s(_,"target","_blank"),s(_,"rel","norel noreferrer"),s(_,"aria-label","twitter"),s(_,"class","svelte-10ww2eq"),s(h,"href",i[3]),s(h,"target","_blank"),s(h,"rel","norel noreferrer"),s(h,"aria-label","tiktok"),s(h,"class","svelte-10ww2eq"),s(A,"href","mailto:"+i[4]),s(A,"target","_blank"),s(A,"rel","norel noreferrer"),s(A,"aria-label","email"),s(A,"class","svelte-10ww2eq"),s(t,"class","icons svelte-10ww2eq"),s(D,"class","hl svelte-10ww2eq"),s(D,"href",i[0]),s($,"class","svelte-10ww2eq"),s(e,"class","svelte-10ww2eq")},m(y,q){Y(y,e,q),o(e,t),o(t,r),Q(l,r,null),o(t,a),o(t,n),Q(f,n,null),o(t,b),o(t,g),Q(V,g,null),o(t,I),o(t,_),Q(L,_,null),o(t,E),o(t,h),Q(m,h,null),o(t,B),o(t,A),Q(R,A,null),o(e,Z),o(e,$),o($,z),o($,O),o($,k),o($,D),o(D,p),T=!0},p:P,i(y){T||(j(l.$$.fragment,y),j(f.$$.fragment,y),j(V.$$.fragment,y),j(L.$$.fragment,y),j(m.$$.fragment,y),j(R.$$.fragment,y),T=!0)},o(y){S(l.$$.fragment,y),S(f.$$.fragment,y),S(V.$$.fragment,y),S(L.$$.fragment,y),S(m.$$.fragment,y),S(R.$$.fragment,y),T=!1},d(y){y&&c(e),W(l),W(f),W(V),W(L),W(m),W(R)}}}function Dt(i){const{github:e,twitter:t,instagram:r,tiktok:l,email:a,youtube:n}=st;return[e,t,r,l,a,n]}class Nt extends re{constructor(e){super();se(this,e,Dt,Zt,le,{})}}function Te(i){let e;return{c(){e=v("div"),this.h()},l(t){e=d(t,"DIV",{class:!0,style:!0}),u(e).forEach(c),this.h()},h(){s(e,"class","loading svelte-1jaa4v2"),Ye(e,"width",i[1]+"%")},m(t,r){Y(t,e,r)},p(t,r){r&2&&Ye(e,"width",t[1]+"%")},d(t){t&&c(e)}}}function Pt(i){let e,t=i[0]&&Te(i);return{c(){t&&t.c(),e=ke()},l(r){t&&t.l(r),e=ke()},m(r,l){t&&t.m(r,l),Y(r,e,l)},p(r,[l]){r[0]?t?t.p(r,l):(t=Te(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:P,o:P,d(r){t&&t.d(r),r&&c(e)}}}function Vt(i,e,t){let r;Ke(i,lt,g=>t(0,r=g));let l,a=0,n=10;const f=()=>{clearInterval(l),t(1,a=0),n=0},b=()=>{l=setInterval(()=>{if(a===95){clearInterval(l);return}t(1,a+=5),n+=500},n)};return Se(()=>b()),Qe(()=>f()),i.$$.update=()=>{i.$$.dirty&1&&(r||f()),i.$$.dirty&1&&r&&b()},[r,a]}class Ht extends re{constructor(e){super();se(this,e,Vt,Pt,le,{})}}const{document:je}=rt;function Yt(i){let e,t,r,l,a,n,f,b,g,V,I,_;l=new vt({props:{segment:i[0]}}),f=new Ht({});const L=i[2].default,E=We(L,i,i[1],null);return I=new Nt({}),{c(){e=v("script"),t=X(`// set dark mode correctly before everythings get rendered
  // thanks https://github.com/pveyes
  try {
    // prettier-ignore
    const { matches: isDarkMode } = window.matchMedia( "(prefers-color-scheme: dark)")

    const theme = localStorage.getItem('theme');
    let preference = theme || (isDarkMode ? 'dark' : 'light');

    // prettier-ignore
    if (preference) document.documentElement.setAttribute("data-theme", preference)
  } catch (err) {
    console.error(err);
  }`),r=x(),G(l.$$.fragment),a=x(),n=v("main"),G(f.$$.fragment),b=x(),g=v("div"),E&&E.c(),V=x(),G(I.$$.fragment),this.h()},l(h){const m=Xe('[data-svelte="svelte-1xtfmqk"]',je.head);e=d(m,"SCRIPT",{});var B=u(e);t=ee(B,`// set dark mode correctly before everythings get rendered
  // thanks https://github.com/pveyes
  try {
    // prettier-ignore
    const { matches: isDarkMode } = window.matchMedia( "(prefers-color-scheme: dark)")

    const theme = localStorage.getItem('theme');
    let preference = theme || (isDarkMode ? 'dark' : 'light');

    // prettier-ignore
    if (preference) document.documentElement.setAttribute("data-theme", preference)
  } catch (err) {
    console.error(err);
  }`),B.forEach(c),m.forEach(c),r=M(h),J(l.$$.fragment,h),a=M(h),n=d(h,"MAIN",{class:!0});var A=u(n);J(f.$$.fragment,A),b=M(A),g=d(A,"DIV",{class:!0});var R=u(g);E&&E.l(R),R.forEach(c),V=M(A),J(I.$$.fragment,A),A.forEach(c),this.h()},h(){s(g,"class","svelte-tfxsok"),s(n,"class","svelte-tfxsok")},m(h,m){o(je.head,e),o(e,t),Y(h,r,m),Q(l,h,m),Y(h,a,m),Y(h,n,m),Q(f,n,null),o(n,b),o(n,g),E&&E.m(g,null),o(n,V),Q(I,n,null),_=!0},p(h,[m]){const B={};m&1&&(B.segment=h[0]),l.$set(B),E&&E.p&&(!_||m&2)&&et(E,L,h,h[1],_?at(L,h[1],m,null):tt(h[1]),null)},i(h){_||(j(l.$$.fragment,h),j(f.$$.fragment,h),j(E,h),j(I.$$.fragment,h),_=!0)},o(h){S(l.$$.fragment,h),S(f.$$.fragment,h),S(E,h),S(I.$$.fragment,h),_=!1},d(h){c(e),h&&c(r),W(l,h),h&&c(a),h&&c(n),W(f),E&&E.d(h),W(I)}}}function Ct(i,e,t){let{$$slots:r={},$$scope:l}=e,{segment:a=""}=e;return Se(()=>{const{matches:n}=window.matchMedia("(prefers-color-scheme: dark)");let f;f=localStorage.getItem("theme")?localStorage.getItem("theme"):n?"dark":"light",ye.set(f),ye.subscribe(b=>{localStorage.setItem("theme",b),document.documentElement.setAttribute("data-theme",b)})}),i.$$set=n=>{"segment"in n&&t(0,a=n.segment),"$$scope"in n&&t(1,l=n.$$scope)},[a,l,r]}class qt extends re{constructor(e){super();se(this,e,Ct,Yt,le,{segment:0})}}export{qt as default};