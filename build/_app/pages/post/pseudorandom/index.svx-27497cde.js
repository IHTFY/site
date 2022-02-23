import{S as er,i as ar,s as rr,C as la,w as or,x as nr,y as dr,z as sr,A as Wa,q as lr,o as ir,B as cr,U as Xa,e as o,t as a,k as Qt,c as n,a as d,h as r,d as e,m as Wt,b as Za,g as p,F as t}from"../../../chunks/vendor-f73903c8.js";import{P as hr}from"../../../chunks/post-68c71ca3.js";import"../../../chunks/stores-233b7d65.js";import"../../../chunks/Progress-9db5e1e4.js";/* empty css                                      */function ur(B){let s,m,u,y,c,f,V,Xt,M,Zt,te,F,ee,ae,G,re,oe,wt,v,ne,L,de,se,H,le,ie,K,ce,he,It,z,h,T,Q,W,ue,X,fe,Z,ve,g,tt,_e,D,me,et,pe,Ee,at,ye,A,rt,Te,U,ge,ot,De,Ae,nt,Ue,b,dt,be,R,Re,st,we,Ie,lt,ke,w,it,Pe,I,Ce,ct,Se,je,ht,xe,k,ut,Oe,P,Ye,ft,$e,qe,vt,Be,C,_t,Ve,S,ze,mt,Ne,Je,pt,Me,j,Et,Fe,x,Ge,yt,Le,He,Tt,Ke,O,gt,Qe,Y,We,Dt,Xe,Ze,At,ta,$,Ut,ea,q,aa,bt,ra,oa,Rt,na,kt,N,da,Pt,J,sa;return{c(){s=o("p"),m=a("I\u2019m still tinkering around with the "),u=o("a"),y=a("calendar maker"),c=a(". I decided to give each event (birthday, holiday, anniversary, etc.) a random id. Rather than just use "),f=o("code"),V=a("Math.random()"),Xt=a(", I decided to try using the browser\u2019s "),M=o("code"),Zt=a("Crypto"),te=a(" interface. There\u2019s a nice function that generates a UUID (universally unique identifier): "),F=o("code"),ee=a("window.crypto.randomUUID()"),ae=a(". The result looks something like this: "),G=o("code"),re=a("'a1d803ce-822e-4d2d-a68f-16f85a5c1508'"),oe=a(". This is a 128 bit label which means there are 2128 unique values - around 3.4x1038 or roughly a trillion times a trillion times a trillion."),wt=Qt(),v=o("p"),ne=a("You can also generate random integers using "),L=o("code"),de=a("getRandomValues"),se=a(", and following the format (replacing "),H=o("code"),le=a("ARRAY"),ie=a("): "),K=o("code"),ce=a("crypto.getRandomValues(new ARRAY(1))[0]"),he=a(". You can use any of the typed integer arrays in JavaScript."),It=Qt(),z=o("table"),h=o("tbody"),T=o("tr"),Q=o("td"),W=o("strong"),ue=a("Array"),X=o("td"),fe=a("Number of Values"),Z=o("td"),ve=a("Range"),g=o("tr"),tt=o("td"),_e=a("Int8Array"),D=o("td"),me=a("2"),et=o("sup"),pe=a("8"),Ee=a("= 256"),at=o("td"),ye=a("[-128, 127]"),A=o("tr"),rt=o("td"),Te=a("Int16Array"),U=o("td"),ge=a("2"),ot=o("sup"),De=a("16"),Ae=a("= 65,536"),nt=o("td"),Ue=a("[-32768, 32767]"),b=o("tr"),dt=o("td"),be=a("Int32Array"),R=o("td"),Re=a("2"),st=o("sup"),we=a("32"),Ie=a("= 4,294,967,296"),lt=o("td"),ke=a("[-2147483648, 2147483647]"),w=o("tr"),it=o("td"),Pe=a("Uint8Array"),I=o("td"),Ce=a("2"),ct=o("sup"),Se=a("8"),je=a("= 256"),ht=o("td"),xe=a("[0, 255]"),k=o("tr"),ut=o("td"),Oe=a("Uint16Array"),P=o("td"),Ye=a("2"),ft=o("sup"),$e=a("16"),qe=a("= 65,536"),vt=o("td"),Be=a("[0, 65535]"),C=o("tr"),_t=o("td"),Ve=a("Uint32Array"),S=o("td"),ze=a("2"),mt=o("sup"),Ne=a("32"),Je=a("= 4,294,967,296"),pt=o("td"),Me=a("[0, 4294967295]"),j=o("tr"),Et=o("td"),Fe=a("Uint8ClampedArray"),x=o("td"),Ge=a("2"),yt=o("sup"),Le=a("8"),He=a("= 256"),Tt=o("td"),Ke=a("[0, 255]"),O=o("tr"),gt=o("td"),Qe=a("BigInt64Array"),Y=o("td"),We=a("2"),Dt=o("sup"),Xe=a("64"),Ze=a(" = 18,446,744,073,709,551,615"),At=o("td"),ta=a("[-9223372036854775808, 9223372036854775807]"),$=o("tr"),Ut=o("td"),ea=a("BitUint64Array"),q=o("td"),aa=a("2"),bt=o("sup"),ra=a("64"),oa=a(" = 18,446,744,073,709,551,615"),Rt=o("td"),na=a("[0, 18446744073709551615]"),kt=Qt(),N=o("p"),da=a("The only difference between Uint8Array and Uint8ClampedArray is that the if you try assign a number outside of the range [0, 255], the clamped array will round you up to 0 or down to 255. The Uint8Array will take loop over, so 256 becomes 0, and -1 becomes 255, etc. I don\u2019t think this has an effect on the random output code above though."),Pt=Qt(),J=o("p"),sa=a("The \u201CU\u201D in the name stands for \u201Cunsigned\u201D, meaning the numbers are non-negative. The signed versions have are just centered around zero, so there are an equal amount of negative and non-negative outcomes."),this.h()},l(l){s=n(l,"P",{});var i=d(s);m=r(i,"I\u2019m still tinkering around with the "),u=n(i,"A",{href:!0,rel:!0});var ia=d(u);y=r(ia,"calendar maker"),ia.forEach(e),c=r(i,". I decided to give each event (birthday, holiday, anniversary, etc.) a random id. Rather than just use "),f=n(i,"CODE",{});var ca=d(f);V=r(ca,"Math.random()"),ca.forEach(e),Xt=r(i,", I decided to try using the browser\u2019s "),M=n(i,"CODE",{});var ha=d(M);Zt=r(ha,"Crypto"),ha.forEach(e),te=r(i," interface. There\u2019s a nice function that generates a UUID (universally unique identifier): "),F=n(i,"CODE",{});var ua=d(F);ee=r(ua,"window.crypto.randomUUID()"),ua.forEach(e),ae=r(i,". The result looks something like this: "),G=n(i,"CODE",{});var fa=d(G);re=r(fa,"'a1d803ce-822e-4d2d-a68f-16f85a5c1508'"),fa.forEach(e),oe=r(i,". This is a 128 bit label which means there are 2128 unique values - around 3.4x1038 or roughly a trillion times a trillion times a trillion."),i.forEach(e),wt=Wt(l),v=n(l,"P",{});var E=d(v);ne=r(E,"You can also generate random integers using "),L=n(E,"CODE",{});var va=d(L);de=r(va,"getRandomValues"),va.forEach(e),se=r(E,", and following the format (replacing "),H=n(E,"CODE",{});var _a=d(H);le=r(_a,"ARRAY"),_a.forEach(e),ie=r(E,"): "),K=n(E,"CODE",{});var ma=d(K);ce=r(ma,"crypto.getRandomValues(new ARRAY(1))[0]"),ma.forEach(e),he=r(E,". You can use any of the typed integer arrays in JavaScript."),E.forEach(e),It=Wt(l),z=n(l,"TABLE",{});var pa=d(z);h=n(pa,"TBODY",{});var _=d(h);T=n(_,"TR",{});var Ct=d(T);Q=n(Ct,"TD",{});var Ea=d(Q);W=n(Ea,"STRONG",{});var ya=d(W);ue=r(ya,"Array"),ya.forEach(e),Ea.forEach(e),X=n(Ct,"TD",{});var Ta=d(X);fe=r(Ta,"Number of Values"),Ta.forEach(e),Z=n(Ct,"TD",{});var ga=d(Z);ve=r(ga,"Range"),ga.forEach(e),Ct.forEach(e),g=n(_,"TR",{});var St=d(g);tt=n(St,"TD",{});var Da=d(tt);_e=r(Da,"Int8Array"),Da.forEach(e),D=n(St,"TD",{});var jt=d(D);me=r(jt,"2"),et=n(jt,"SUP",{});var Aa=d(et);pe=r(Aa,"8"),Aa.forEach(e),Ee=r(jt,"= 256"),jt.forEach(e),at=n(St,"TD",{});var Ua=d(at);ye=r(Ua,"[-128, 127]"),Ua.forEach(e),St.forEach(e),A=n(_,"TR",{});var xt=d(A);rt=n(xt,"TD",{});var ba=d(rt);Te=r(ba,"Int16Array"),ba.forEach(e),U=n(xt,"TD",{});var Ot=d(U);ge=r(Ot,"2"),ot=n(Ot,"SUP",{});var Ra=d(ot);De=r(Ra,"16"),Ra.forEach(e),Ae=r(Ot,"= 65,536"),Ot.forEach(e),nt=n(xt,"TD",{});var wa=d(nt);Ue=r(wa,"[-32768, 32767]"),wa.forEach(e),xt.forEach(e),b=n(_,"TR",{});var Yt=d(b);dt=n(Yt,"TD",{});var Ia=d(dt);be=r(Ia,"Int32Array"),Ia.forEach(e),R=n(Yt,"TD",{});var $t=d(R);Re=r($t,"2"),st=n($t,"SUP",{});var ka=d(st);we=r(ka,"32"),ka.forEach(e),Ie=r($t,"= 4,294,967,296"),$t.forEach(e),lt=n(Yt,"TD",{});var Pa=d(lt);ke=r(Pa,"[-2147483648, 2147483647]"),Pa.forEach(e),Yt.forEach(e),w=n(_,"TR",{});var qt=d(w);it=n(qt,"TD",{});var Ca=d(it);Pe=r(Ca,"Uint8Array"),Ca.forEach(e),I=n(qt,"TD",{});var Bt=d(I);Ce=r(Bt,"2"),ct=n(Bt,"SUP",{});var Sa=d(ct);Se=r(Sa,"8"),Sa.forEach(e),je=r(Bt,"= 256"),Bt.forEach(e),ht=n(qt,"TD",{});var ja=d(ht);xe=r(ja,"[0, 255]"),ja.forEach(e),qt.forEach(e),k=n(_,"TR",{});var Vt=d(k);ut=n(Vt,"TD",{});var xa=d(ut);Oe=r(xa,"Uint16Array"),xa.forEach(e),P=n(Vt,"TD",{});var zt=d(P);Ye=r(zt,"2"),ft=n(zt,"SUP",{});var Oa=d(ft);$e=r(Oa,"16"),Oa.forEach(e),qe=r(zt,"= 65,536"),zt.forEach(e),vt=n(Vt,"TD",{});var Ya=d(vt);Be=r(Ya,"[0, 65535]"),Ya.forEach(e),Vt.forEach(e),C=n(_,"TR",{});var Nt=d(C);_t=n(Nt,"TD",{});var $a=d(_t);Ve=r($a,"Uint32Array"),$a.forEach(e),S=n(Nt,"TD",{});var Jt=d(S);ze=r(Jt,"2"),mt=n(Jt,"SUP",{});var qa=d(mt);Ne=r(qa,"32"),qa.forEach(e),Je=r(Jt,"= 4,294,967,296"),Jt.forEach(e),pt=n(Nt,"TD",{});var Ba=d(pt);Me=r(Ba,"[0, 4294967295]"),Ba.forEach(e),Nt.forEach(e),j=n(_,"TR",{});var Mt=d(j);Et=n(Mt,"TD",{});var Va=d(Et);Fe=r(Va,"Uint8ClampedArray"),Va.forEach(e),x=n(Mt,"TD",{});var Ft=d(x);Ge=r(Ft,"2"),yt=n(Ft,"SUP",{});var za=d(yt);Le=r(za,"8"),za.forEach(e),He=r(Ft,"= 256"),Ft.forEach(e),Tt=n(Mt,"TD",{});var Na=d(Tt);Ke=r(Na,"[0, 255]"),Na.forEach(e),Mt.forEach(e),O=n(_,"TR",{});var Gt=d(O);gt=n(Gt,"TD",{});var Ja=d(gt);Qe=r(Ja,"BigInt64Array"),Ja.forEach(e),Y=n(Gt,"TD",{});var Lt=d(Y);We=r(Lt,"2"),Dt=n(Lt,"SUP",{});var Ma=d(Dt);Xe=r(Ma,"64"),Ma.forEach(e),Ze=r(Lt," = 18,446,744,073,709,551,615"),Lt.forEach(e),At=n(Gt,"TD",{});var Fa=d(At);ta=r(Fa,"[-9223372036854775808, 9223372036854775807]"),Fa.forEach(e),Gt.forEach(e),$=n(_,"TR",{});var Ht=d($);Ut=n(Ht,"TD",{});var Ga=d(Ut);ea=r(Ga,"BitUint64Array"),Ga.forEach(e),q=n(Ht,"TD",{});var Kt=d(q);aa=r(Kt,"2"),bt=n(Kt,"SUP",{});var La=d(bt);ra=r(La,"64"),La.forEach(e),oa=r(Kt," = 18,446,744,073,709,551,615"),Kt.forEach(e),Rt=n(Ht,"TD",{});var Ha=d(Rt);na=r(Ha,"[0, 18446744073709551615]"),Ha.forEach(e),Ht.forEach(e),_.forEach(e),pa.forEach(e),kt=Wt(l),N=n(l,"P",{});var Ka=d(N);da=r(Ka,"The only difference between Uint8Array and Uint8ClampedArray is that the if you try assign a number outside of the range [0, 255], the clamped array will round you up to 0 or down to 255. The Uint8Array will take loop over, so 256 becomes 0, and -1 becomes 255, etc. I don\u2019t think this has an effect on the random output code above though."),Ka.forEach(e),Pt=Wt(l),J=n(l,"P",{});var Qa=d(J);sa=r(Qa,"The \u201CU\u201D in the name stands for \u201Cunsigned\u201D, meaning the numbers are non-negative. The signed versions have are just centered around zero, so there are an equal amount of negative and non-negative outcomes."),Qa.forEach(e),this.h()},h(){Za(u,"href","https://calendar.ihtfy.com/"),Za(u,"rel","nofollow")},m(l,i){p(l,s,i),t(s,m),t(s,u),t(u,y),t(s,c),t(s,f),t(f,V),t(s,Xt),t(s,M),t(M,Zt),t(s,te),t(s,F),t(F,ee),t(s,ae),t(s,G),t(G,re),t(s,oe),p(l,wt,i),p(l,v,i),t(v,ne),t(v,L),t(L,de),t(v,se),t(v,H),t(H,le),t(v,ie),t(v,K),t(K,ce),t(v,he),p(l,It,i),p(l,z,i),t(z,h),t(h,T),t(T,Q),t(Q,W),t(W,ue),t(T,X),t(X,fe),t(T,Z),t(Z,ve),t(h,g),t(g,tt),t(tt,_e),t(g,D),t(D,me),t(D,et),t(et,pe),t(D,Ee),t(g,at),t(at,ye),t(h,A),t(A,rt),t(rt,Te),t(A,U),t(U,ge),t(U,ot),t(ot,De),t(U,Ae),t(A,nt),t(nt,Ue),t(h,b),t(b,dt),t(dt,be),t(b,R),t(R,Re),t(R,st),t(st,we),t(R,Ie),t(b,lt),t(lt,ke),t(h,w),t(w,it),t(it,Pe),t(w,I),t(I,Ce),t(I,ct),t(ct,Se),t(I,je),t(w,ht),t(ht,xe),t(h,k),t(k,ut),t(ut,Oe),t(k,P),t(P,Ye),t(P,ft),t(ft,$e),t(P,qe),t(k,vt),t(vt,Be),t(h,C),t(C,_t),t(_t,Ve),t(C,S),t(S,ze),t(S,mt),t(mt,Ne),t(S,Je),t(C,pt),t(pt,Me),t(h,j),t(j,Et),t(Et,Fe),t(j,x),t(x,Ge),t(x,yt),t(yt,Le),t(x,He),t(j,Tt),t(Tt,Ke),t(h,O),t(O,gt),t(gt,Qe),t(O,Y),t(Y,We),t(Y,Dt),t(Dt,Xe),t(Y,Ze),t(O,At),t(At,ta),t(h,$),t($,Ut),t(Ut,ea),t($,q),t(q,aa),t(q,bt),t(bt,ra),t(q,oa),t($,Rt),t(Rt,na),p(l,kt,i),p(l,N,i),t(N,da),p(l,Pt,i),p(l,J,i),t(J,sa)},d(l){l&&e(s),l&&e(wt),l&&e(v),l&&e(It),l&&e(z),l&&e(kt),l&&e(N),l&&e(Pt),l&&e(J)}}}function fr(B){let s,m;const u=[B[0],tr];let y={$$slots:{default:[ur]},$$scope:{ctx:B}};for(let c=0;c<u.length;c+=1)y=la(y,u[c]);return s=new hr({props:y}),{c(){or(s.$$.fragment)},l(c){nr(s.$$.fragment,c)},m(c,f){dr(s,c,f),m=!0},p(c,[f]){const V=f&1?sr(u,[f&1&&Wa(c[0]),f&0&&Wa(tr)]):{};f&2&&(V.$$scope={dirty:f,ctx:c}),s.$set(V)},i(c){m||(lr(s.$$.fragment,c),m=!0)},o(c){ir(s.$$.fragment,c),m=!1},d(c){cr(s,c)}}}const tr={draft:!1,title:"pseudorandom",date:"2022-02-14",coverImage:"pseudorandom.jpg",desc:"TODO",tags:["todo"]};function vr(B,s,m){return B.$$set=u=>{m(0,s=la(la({},s),Xa(u)))},s=Xa(s),[s]}class Tr extends er{constructor(s){super();ar(this,s,vr,fr,rr,{})}}export{Tr as default,tr as metadata};
