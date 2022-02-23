import{S as me,i as _e,s as de,w as B,x as D,y as H,q as m,o as $,B as O,k as S,e as _,t as V,m as y,c as d,a as j,h as F,d as p,b as h,g as W,F as u,p as se,a2 as oe,n as re}from"../../chunks/vendor-a3554607.js";import{S as je,P as ge}from"../../chunks/Progress-da00dd34.js";import{P as le}from"../../chunks/ProjectCard-60eef65c.js";import"../../chunks/stores-5109c37e.js";import"../../chunks/github-a76e40b1.js";function ne(l,r,f){const e=l.slice();return e[1]=r[f],e}function ce(l,r,f){const e=l.slice();return e[1]=r[f],e}function ae(l){let r,f;return r=new le({props:{title:l[1].title,imgSrc:`/assets/project/${l[1].slug}/cover.webp`,href:`/project/${l[1].slug}`,desc:l[1].desc,demo:l[1].demo,source:l[1].source}}),{c(){B(r.$$.fragment)},l(e){D(r.$$.fragment,e)},m(e,n){H(r,e,n),f=!0},p(e,n){const c={};n&1&&(c.title=e[1].title),n&1&&(c.imgSrc=`/assets/project/${e[1].slug}/cover.webp`),n&1&&(c.href=`/project/${e[1].slug}`),n&1&&(c.desc=e[1].desc),n&1&&(c.demo=e[1].demo),n&1&&(c.source=e[1].source),r.$set(c)},i(e){f||(m(r.$$.fragment,e),f=!0)},o(e){$(r.$$.fragment,e),f=!1},d(e){O(r,e)}}}function ie(l){let r,f;return r=new le({props:{title:l[1].title,imgSrc:`/assets/project/${l[1].slug}/cover.webp`,href:`/project/${l[1].slug}`,desc:l[1].desc,demo:l[1].demo,source:l[1].source}}),{c(){B(r.$$.fragment)},l(e){D(r.$$.fragment,e)},m(e,n){H(r,e,n),f=!0},p(e,n){const c={};n&1&&(c.title=e[1].title),n&1&&(c.imgSrc=`/assets/project/${e[1].slug}/cover.webp`),n&1&&(c.href=`/project/${e[1].slug}`),n&1&&(c.desc=e[1].desc),n&1&&(c.demo=e[1].demo),n&1&&(c.source=e[1].source),r.$set(c)},i(e){f||(m(r.$$.fragment,e),f=!0)},o(e){$(r.$$.fragment,e),f=!1},d(e){O(r,e)}}}function $e(l){let r,f,e,n,c,N,z,T,J,K,v,L,q,k,M,Q,A,R,U,P,C,b,G;r=new je({props:{title:"Projects"}});let w=l[0].filter(fe),a=[];for(let t=0;t<w.length;t+=1)a[t]=ae(ce(l,w,t));const pe=t=>$(a[t],1,1,()=>{a[t]=null});let E=l[0].filter(ue),i=[];for(let t=0;t<E.length;t+=1)i[t]=ie(ne(l,E,t));const he=t=>$(i[t],1,1,()=>{i[t]=null});return b=new ge({}),{c(){B(r.$$.fragment),f=S(),e=_("section"),n=_("a"),c=_("h1"),N=V("Personal Projects"),z=S(),T=_("p"),J=V(`These are some projects that I do on my free time. Almost all of my Github
    projects are here, quite proud on some of them.`),K=S(),v=_("div");for(let t=0;t<a.length;t+=1)a[t].c();L=S(),q=_("a"),k=_("h1"),M=V("School Projects"),Q=S(),A=_("p"),R=V(`These are some projects that I do for school assignments, not exactly proud
    of them since I don't like to make these kind of thing. Guess I'd put them
    here anyway in case anyone needs them for reference or something.`),U=S(),P=_("div");for(let t=0;t<i.length;t+=1)i[t].c();C=S(),B(b.$$.fragment),this.h()},l(t){D(r.$$.fragment,t),f=y(t),e=d(t,"SECTION",{class:!0});var o=j(e);n=d(o,"A",{href:!0});var s=j(n);c=d(s,"H1",{id:!0,class:!0});var g=j(c);N=F(g,"Personal Projects"),g.forEach(p),s.forEach(p),z=y(o),T=d(o,"P",{class:!0});var X=j(T);J=F(X,`These are some projects that I do on my free time. Almost all of my Github
    projects are here, quite proud on some of them.`),X.forEach(p),K=y(o),v=d(o,"DIV",{class:!0});var Y=j(v);for(let I=0;I<a.length;I+=1)a[I].l(Y);Y.forEach(p),L=y(o),q=d(o,"A",{href:!0});var Z=j(q);k=d(Z,"H1",{id:!0,class:!0});var x=j(k);M=F(x,"School Projects"),x.forEach(p),Z.forEach(p),Q=y(o),A=d(o,"P",{class:!0});var ee=j(A);R=F(ee,`These are some projects that I do for school assignments, not exactly proud
    of them since I don't like to make these kind of thing. Guess I'd put them
    here anyway in case anyone needs them for reference or something.`),ee.forEach(p),U=y(o),P=d(o,"DIV",{class:!0});var te=j(P);for(let I=0;I<i.length;I+=1)i[I].l(te);te.forEach(p),o.forEach(p),C=y(t),D(b.$$.fragment,t),this.h()},h(){h(c,"id","personal-projects"),h(c,"class","projects__title svelte-pxcsuj"),h(n,"href","/project#personal-projects"),h(T,"class","projects__desc svelte-pxcsuj"),h(v,"class","projects__cards svelte-pxcsuj"),h(k,"id","school-projects"),h(k,"class","projects__title svelte-pxcsuj"),h(q,"href","/project#school-projects"),h(A,"class","projects__desc svelte-pxcsuj"),h(P,"class","projects__cards svelte-pxcsuj"),h(e,"class","projects svelte-pxcsuj")},m(t,o){H(r,t,o),W(t,f,o),W(t,e,o),u(e,n),u(n,c),u(c,N),u(e,z),u(e,T),u(T,J),u(e,K),u(e,v);for(let s=0;s<a.length;s+=1)a[s].m(v,null);u(e,L),u(e,q),u(q,k),u(k,M),u(e,Q),u(e,A),u(A,R),u(e,U),u(e,P);for(let s=0;s<i.length;s+=1)i[s].m(P,null);W(t,C,o),H(b,t,o),G=!0},p(t,[o]){if(o&1){w=t[0].filter(fe);let s;for(s=0;s<w.length;s+=1){const g=ce(t,w,s);a[s]?(a[s].p(g,o),m(a[s],1)):(a[s]=ae(g),a[s].c(),m(a[s],1),a[s].m(v,null))}for(re(),s=w.length;s<a.length;s+=1)pe(s);se()}if(o&1){E=t[0].filter(ue);let s;for(s=0;s<E.length;s+=1){const g=ne(t,E,s);i[s]?(i[s].p(g,o),m(i[s],1)):(i[s]=ie(g),i[s].c(),m(i[s],1),i[s].m(P,null))}for(re(),s=E.length;s<i.length;s+=1)he(s);se()}},i(t){if(!G){m(r.$$.fragment,t);for(let o=0;o<w.length;o+=1)m(a[o]);for(let o=0;o<E.length;o+=1)m(i[o]);m(b.$$.fragment,t),G=!0}},o(t){$(r.$$.fragment,t),a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)$(a[o]);i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)$(i[o]);$(b.$$.fragment,t),G=!1},d(t){O(r,t),t&&p(f),t&&p(e),oe(a,t),oe(i,t),t&&p(C),O(b,t)}}}const Ie=!0;async function Se({fetch:l}){return{props:{projects:await(await l("/api/project.json")).json()}}}const fe=l=>l.type==="personal",ue=l=>l.type==="assignment";function ve(l,r,f){let{projects:e}=r;return l.$$set=n=>{"projects"in n&&f(0,e=n.projects)},[e]}class ye extends me{constructor(r){super();_e(this,r,ve,$e,de,{projects:0})}}export{ye as default,Se as load,Ie as prerender};
