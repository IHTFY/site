import{S as $t,i as zt,s as Bt,C as ht,w as Lt,x as Mt,y as Kt,z as Ut,A as Rt,q as Gt,o as Qt,B as Ht,T as Dt,e as i,t as a,k as m,c as l,a as r,h as s,d as o,m as y,b as f,g as h,J as t}from"../../../chunks/vendor-4e826582.js";import{P as Xt}from"../../../chunks/project-37c23810.js";import"../../../chunks/stores-6bae2da7.js";import"../../../chunks/github-3537f5e0.js";import"../../../chunks/Progress-83a8291b.js";/* empty css                                      */function Yt(O){let p,v,g,C,d,I,$,oe,z,we,ae,c,Ie,H,be,_e,X,Se,ge,A,ke,Ee,J,xe,Ce,se,B,Ae,ie,b,Je,T,Te,je,j,Pe,qe,le,L,Y,Ne,re,M,Z,Ve,ne,k,Re,P,De,Oe,he,_,$e,q,ze,Be,N,Le,Me,pe,u,Ke,V,Ue,Ge,F,Qe,He,R,Xe,Ye,W,Ze,Fe,ee,We,et,de,K,tt,fe,E,ot,te,at,st,ue,x,it,D,lt,rt,ce,U,nt;return{c(){p=i("p"),v=i("strong"),g=a("Covid Info v2"),C=a(" is a remake of my previous version which you can check "),d=i("a"),I=a("over here"),$=a("."),oe=m(),z=i("p"),we=a("I made the first version a few months ago, around May 2020. It was my first React app that I\u2019ve ever made with a third party API instead of static data. It was made with React, Javascript, and Vanilla CSS."),ae=m(),c=i("p"),Ie=a("Since that time, I\u2019ve learned "),H=i("em"),be=a("a lot"),_e=a(" about Javascript. Turns out there\u2019s this thing called Typescript which is an "),X=i("em"),Se=a("awesome"),ge=a(" thing, it\u2019s Javscript but statically typed/strong typed. I also found out about "),A=i("a"),ke=a("NextJS"),Ee=a(" which is basically "),J=i("a"),xe=a("React"),Ce=a(" + more features like SSR, SSG, and a bunch more cool features."),se=m(),B=i("p"),Ae=a("I decided to remake this app to see how far I\u2019ve learned these technologies. It\u2019s also because my friend want to make a similar app, hence I decided to make this so I can help him along the way."),ie=m(),b=i("p"),Je=a("I chose Typescript because it\u2019s like a godsend for Javascript developers, it\u2019s so pleasant to work with. It provides a better development experience. I also decided to use "),T=i("a"),Te=a("twind"),je=a(" that I found recently. It\u2019s also my first css-in-js library that I\u2019ve ever used. TwindCSS is basically one of css-in-js solution for "),j=i("a"),Pe=a("TailwindCSS"),qe=a(". I chose it because it\u2019s really unique in my opinion, instead of shipping the prebuilt CSS to the end user, it ships the compiler. So, no matter how many styles you have, the end result would be ~10KB. Quoting from its official docs."),le=m(),L=i("blockquote"),Y=i("p"),Ne=a("Another big advantage we see of shipping the interpreter compiler itself (rather than pre-compiled output) is that the effective size of the CSS for your whole app is deterministic and fixed. The weight of the compiler itself along with your theme file is all that users will ever download, no matter how many styles you use."),re=m(),M=i("blockquote"),Z=i("p"),Ve=a("Currently the compiler weighs around 10KB which is smaller than styled-components and the average tailwind output."),ne=m(),k=i("p"),Re=a("I use the API provided by "),P=i("a"),De=a("disease.sh"),Oe=a(". They have quite a lot of endpoints that you can use. More than enough for my needs."),he=m(),_=i("p"),$e=a("Design wise, I took some of it from this "),q=i("a"),ze=a("beautiful dribbble shot"),Be=a(". It\u2019s easy enough to implement since I\u2019m quite good at CSS (at least that\u2019s what I think :p) because I am so used to implement a design every week for "),N=i("a"),Le=a("svelteception"),Me=a(". All goes well, except for the world map section."),pe=m(),u=i("p"),Ke=a("I never made any map related thing, so this is the first time I use a map library like "),V=i("a"),Ue=a("LeafletJS"),Ge=a(". Since I use NextJS which utilize SSR, I can\u2019t just import Leaflet as is because it needs a "),F=i("code"),Qe=a("window"),He=a(" object. At first, I\u2019m using "),R=i("a"),Xe=a("react-leaflet-universal"),Ye=a(` but I\u2019m not sure if that\u2019s the best solution.
The next day, I found out that NextJS can import a module `),W=i("em"),Ze=a("only"),Fe=a(" if the page has been rendered on the client side by using its "),ee=i("code"),We=a("dynamic"),et=a(" module, I was blown away the first time I found it. I no longer need a thin wrapper like react-leaflet-universal."),de=m(),K=i("p"),tt=a("I was going to make a feature where if you click on a country, it would zoom the map but ended up not doing it because I have no idea how to do it, I\u2019ve Google it up and still couldn\u2019t find any solution."),fe=m(),E=i("p"),ot=a("Initially, I want to make it responsive/mobile friendly. Twind has this nice feature where you can group tailwindcss directives. It looks something like this "),te=i("code"),at=a("md:(col(start-1 end-2) row(start-2 end-4))"),st=a(", this saves me a lot of time. After doing that for maybe half and hour, I thought it doesn\u2019t look that good in terms of UI/UX so I threw it away."),ue=m(),x=i("p"),it=a("I use "),D=i("a"),lt=a("Vercel"),rt=a(" to deploy this app. I really love Vercel because they provide so many features yet it\u2019s still free. Deploying NextJS app on Vercel is really easy because NextJS is also made by Vercel so they must have optimised their platform for NextJS app. You can even get analytics if you deploy your NextJS app on Vercel."),ce=m(),U=i("p"),nt=a("Honestly, I am quite proud of this one. I learned a lot along the way, seeing them compared side by side made me happy. I didn\u2019t waste a year doing nothing, I made some progress."),this.h()},l(e){p=l(e,"P",{});var n=r(p);v=l(n,"STRONG",{});var pt=r(v);g=s(pt,"Covid Info v2"),pt.forEach(o),C=s(n," is a remake of my previous version which you can check "),d=l(n,"A",{href:!0,rel:!0});var dt=r(d);I=s(dt,"over here"),dt.forEach(o),$=s(n,"."),n.forEach(o),oe=y(e),z=l(e,"P",{});var ft=r(z);we=s(ft,"I made the first version a few months ago, around May 2020. It was my first React app that I\u2019ve ever made with a third party API instead of static data. It was made with React, Javascript, and Vanilla CSS."),ft.forEach(o),ae=y(e),c=l(e,"P",{});var S=r(c);Ie=s(S,"Since that time, I\u2019ve learned "),H=l(S,"EM",{});var ut=r(H);be=s(ut,"a lot"),ut.forEach(o),_e=s(S," about Javascript. Turns out there\u2019s this thing called Typescript which is an "),X=l(S,"EM",{});var ct=r(X);Se=s(ct,"awesome"),ct.forEach(o),ge=s(S," thing, it\u2019s Javscript but statically typed/strong typed. I also found out about "),A=l(S,"A",{href:!0,rel:!0});var mt=r(A);ke=s(mt,"NextJS"),mt.forEach(o),Ee=s(S," which is basically "),J=l(S,"A",{href:!0,rel:!0});var yt=r(J);xe=s(yt,"React"),yt.forEach(o),Ce=s(S," + more features like SSR, SSG, and a bunch more cool features."),S.forEach(o),se=y(e),B=l(e,"P",{});var vt=r(B);Ae=s(vt,"I decided to remake this app to see how far I\u2019ve learned these technologies. It\u2019s also because my friend want to make a similar app, hence I decided to make this so I can help him along the way."),vt.forEach(o),ie=y(e),b=l(e,"P",{});var G=r(b);Je=s(G,"I chose Typescript because it\u2019s like a godsend for Javascript developers, it\u2019s so pleasant to work with. It provides a better development experience. I also decided to use "),T=l(G,"A",{href:!0,rel:!0});var wt=r(T);Te=s(wt,"twind"),wt.forEach(o),je=s(G," that I found recently. It\u2019s also my first css-in-js library that I\u2019ve ever used. TwindCSS is basically one of css-in-js solution for "),j=l(G,"A",{href:!0,rel:!0});var It=r(j);Pe=s(It,"TailwindCSS"),It.forEach(o),qe=s(G,". I chose it because it\u2019s really unique in my opinion, instead of shipping the prebuilt CSS to the end user, it ships the compiler. So, no matter how many styles you have, the end result would be ~10KB. Quoting from its official docs."),G.forEach(o),le=y(e),L=l(e,"BLOCKQUOTE",{});var bt=r(L);Y=l(bt,"P",{});var _t=r(Y);Ne=s(_t,"Another big advantage we see of shipping the interpreter compiler itself (rather than pre-compiled output) is that the effective size of the CSS for your whole app is deterministic and fixed. The weight of the compiler itself along with your theme file is all that users will ever download, no matter how many styles you use."),_t.forEach(o),bt.forEach(o),re=y(e),M=l(e,"BLOCKQUOTE",{});var St=r(M);Z=l(St,"P",{});var gt=r(Z);Ve=s(gt,"Currently the compiler weighs around 10KB which is smaller than styled-components and the average tailwind output."),gt.forEach(o),St.forEach(o),ne=y(e),k=l(e,"P",{});var me=r(k);Re=s(me,"I use the API provided by "),P=l(me,"A",{href:!0,rel:!0});var kt=r(P);De=s(kt,"disease.sh"),kt.forEach(o),Oe=s(me,". They have quite a lot of endpoints that you can use. More than enough for my needs."),me.forEach(o),he=y(e),_=l(e,"P",{});var Q=r(_);$e=s(Q,"Design wise, I took some of it from this "),q=l(Q,"A",{href:!0,rel:!0});var Et=r(q);ze=s(Et,"beautiful dribbble shot"),Et.forEach(o),Be=s(Q,". It\u2019s easy enough to implement since I\u2019m quite good at CSS (at least that\u2019s what I think :p) because I am so used to implement a design every week for "),N=l(Q,"A",{href:!0,rel:!0});var xt=r(N);Le=s(xt,"svelteception"),xt.forEach(o),Me=s(Q,". All goes well, except for the world map section."),Q.forEach(o),pe=y(e),u=l(e,"P",{});var w=r(u);Ke=s(w,"I never made any map related thing, so this is the first time I use a map library like "),V=l(w,"A",{href:!0,rel:!0});var Ct=r(V);Ue=s(Ct,"LeafletJS"),Ct.forEach(o),Ge=s(w,". Since I use NextJS which utilize SSR, I can\u2019t just import Leaflet as is because it needs a "),F=l(w,"CODE",{});var At=r(F);Qe=s(At,"window"),At.forEach(o),He=s(w," object. At first, I\u2019m using "),R=l(w,"A",{href:!0,rel:!0});var Jt=r(R);Xe=s(Jt,"react-leaflet-universal"),Jt.forEach(o),Ye=s(w,` but I\u2019m not sure if that\u2019s the best solution.
The next day, I found out that NextJS can import a module `),W=l(w,"EM",{});var Tt=r(W);Ze=s(Tt,"only"),Tt.forEach(o),Fe=s(w," if the page has been rendered on the client side by using its "),ee=l(w,"CODE",{});var jt=r(ee);We=s(jt,"dynamic"),jt.forEach(o),et=s(w," module, I was blown away the first time I found it. I no longer need a thin wrapper like react-leaflet-universal."),w.forEach(o),de=y(e),K=l(e,"P",{});var Pt=r(K);tt=s(Pt,"I was going to make a feature where if you click on a country, it would zoom the map but ended up not doing it because I have no idea how to do it, I\u2019ve Google it up and still couldn\u2019t find any solution."),Pt.forEach(o),fe=y(e),E=l(e,"P",{});var ye=r(E);ot=s(ye,"Initially, I want to make it responsive/mobile friendly. Twind has this nice feature where you can group tailwindcss directives. It looks something like this "),te=l(ye,"CODE",{});var qt=r(te);at=s(qt,"md:(col(start-1 end-2) row(start-2 end-4))"),qt.forEach(o),st=s(ye,", this saves me a lot of time. After doing that for maybe half and hour, I thought it doesn\u2019t look that good in terms of UI/UX so I threw it away."),ye.forEach(o),ue=y(e),x=l(e,"P",{});var ve=r(x);it=s(ve,"I use "),D=l(ve,"A",{href:!0,rel:!0});var Nt=r(D);lt=s(Nt,"Vercel"),Nt.forEach(o),rt=s(ve," to deploy this app. I really love Vercel because they provide so many features yet it\u2019s still free. Deploying NextJS app on Vercel is really easy because NextJS is also made by Vercel so they must have optimised their platform for NextJS app. You can even get analytics if you deploy your NextJS app on Vercel."),ve.forEach(o),ce=y(e),U=l(e,"P",{});var Vt=r(U);nt=s(Vt,"Honestly, I am quite proud of this one. I learned a lot along the way, seeing them compared side by side made me happy. I didn\u2019t waste a year doing nothing, I made some progress."),Vt.forEach(o),this.h()},h(){f(d,"href","https://elianiva.my.id/project/covid-info"),f(d,"rel","nofollow"),f(A,"href","https://nextjs.org"),f(A,"rel","nofollow"),f(J,"href","https://reactjs.org"),f(J,"rel","nofollow"),f(T,"href","https://twind.dev"),f(T,"rel","nofollow"),f(j,"href","https://tailwindcss.com"),f(j,"rel","nofollow"),f(P,"href","https://disease.sh/"),f(P,"rel","nofollow"),f(q,"href","https://dribbble.com/shots/10803637-Corona-Virus-Covid-19-Dashboard"),f(q,"rel","nofollow"),f(N,"href","https://elianiva.my.id/project/svelteception"),f(N,"rel","nofollow"),f(V,"href","https://leafletjs.com"),f(V,"rel","nofollow"),f(R,"href","https://github.com/masotime/react-leaflet-universal"),f(R,"rel","nofollow"),f(D,"href","https://vercel.com/"),f(D,"rel","nofollow")},m(e,n){h(e,p,n),t(p,v),t(v,g),t(p,C),t(p,d),t(d,I),t(p,$),h(e,oe,n),h(e,z,n),t(z,we),h(e,ae,n),h(e,c,n),t(c,Ie),t(c,H),t(H,be),t(c,_e),t(c,X),t(X,Se),t(c,ge),t(c,A),t(A,ke),t(c,Ee),t(c,J),t(J,xe),t(c,Ce),h(e,se,n),h(e,B,n),t(B,Ae),h(e,ie,n),h(e,b,n),t(b,Je),t(b,T),t(T,Te),t(b,je),t(b,j),t(j,Pe),t(b,qe),h(e,le,n),h(e,L,n),t(L,Y),t(Y,Ne),h(e,re,n),h(e,M,n),t(M,Z),t(Z,Ve),h(e,ne,n),h(e,k,n),t(k,Re),t(k,P),t(P,De),t(k,Oe),h(e,he,n),h(e,_,n),t(_,$e),t(_,q),t(q,ze),t(_,Be),t(_,N),t(N,Le),t(_,Me),h(e,pe,n),h(e,u,n),t(u,Ke),t(u,V),t(V,Ue),t(u,Ge),t(u,F),t(F,Qe),t(u,He),t(u,R),t(R,Xe),t(u,Ye),t(u,W),t(W,Ze),t(u,Fe),t(u,ee),t(ee,We),t(u,et),h(e,de,n),h(e,K,n),t(K,tt),h(e,fe,n),h(e,E,n),t(E,ot),t(E,te),t(te,at),t(E,st),h(e,ue,n),h(e,x,n),t(x,it),t(x,D),t(D,lt),t(x,rt),h(e,ce,n),h(e,U,n),t(U,nt)},d(e){e&&o(p),e&&o(oe),e&&o(z),e&&o(ae),e&&o(c),e&&o(se),e&&o(B),e&&o(ie),e&&o(b),e&&o(le),e&&o(L),e&&o(re),e&&o(M),e&&o(ne),e&&o(k),e&&o(he),e&&o(_),e&&o(pe),e&&o(u),e&&o(de),e&&o(K),e&&o(fe),e&&o(E),e&&o(ue),e&&o(x),e&&o(ce),e&&o(U)}}}function Zt(O){let p,v;const g=[O[0],Ot];let C={$$slots:{default:[Yt]},$$scope:{ctx:O}};for(let d=0;d<g.length;d+=1)C=ht(C,g[d]);return p=new Xt({props:C}),{c(){Lt(p.$$.fragment)},l(d){Mt(p.$$.fragment,d)},m(d,I){Kt(p,d,I),v=!0},p(d,[I]){const $=I&1?Ut(g,[I&1&&Rt(d[0]),I&0&&Rt(Ot)]):{};I&2&&($.$$scope={dirty:I,ctx:d}),p.$set($)},i(d){v||(Gt(p.$$.fragment,d),v=!0)},o(d){Qt(p.$$.fragment,d),v=!1},d(d){Ht(p,d)}}}const Ot={title:"Covid Info v2",date:"2021-01-07T00:00:00.000Z",desc:"A remake of my previous app that shows the current COVID19 data.",demo:"https://covid-info-v2.vercel.app",source:"https://github.com/elianiva/covid-info-v2",layout:"project",type:"personal",stack:[["Typescript","https://typescriptlang.org"],["Apexcharts","https://apexcharts.com"],["Leaflet","https://leafletjs.com"],["TwindCSS","https://twind.dev"]]};function Ft(O,p,v){return O.$$set=g=>{v(0,p=ht(ht({},p),Dt(g)))},p=Dt(p),[p]}class io extends $t{constructor(p){super();zt(this,p,Ft,Zt,Bt,{})}}export{io as default,Ot as metadata};