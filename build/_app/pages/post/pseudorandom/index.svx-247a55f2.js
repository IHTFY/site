import{S as Pr,i as Cr,s as Sr,C as Oa,w as jr,x as xr,y as Yr,z as $r,A as wr,q as qr,o as Or,B as Br,T as Rr,e as o,t as a,k as s,c as n,a as l,h as r,d as e,m as i,b as Ir,g as k,J as t}from"../../../chunks/vendor-4e826582.js";import{P as Vr}from"../../../chunks/post-f0963b8b.js";import"../../../chunks/stores-6bae2da7.js";import"../../../chunks/Progress-83a8291b.js";/* empty css                                      */function Hr(z){let d,E,_,S,f,m,J,Zt,at,te,ee,rt,ae,re,ot,oe,ne,Bt,p,le,nt,de,se,lt,ie,ce,dt,he,ue,Vt,P,st,y,it,fe,ve,ct,_e,me,ht,pe,Ee,u,T,ut,ye,Te,j,ge,ft,De,Ae,Ue,vt,be,we,g,_t,Re,Ie,x,ke,mt,Pe,Ce,Se,pt,je,xe,D,Et,Ye,$e,Y,qe,yt,Oe,Be,Ve,Tt,He,ze,A,gt,Je,Ne,$,Me,Dt,Le,Fe,Ge,At,Ke,Qe,U,Ut,We,Xe,q,Ze,bt,ta,ea,aa,wt,ra,oa,b,Rt,na,la,O,da,It,sa,ia,ca,kt,ha,ua,w,Pt,fa,va,B,_a,Ct,ma,pa,Ea,St,ya,Ta,R,jt,ga,Da,V,Aa,xt,Ua,ba,wa,Yt,Ra,Ia,I,$t,ka,Pa,H,Ca,qt,Sa,ja,xa,Ot,Ya,Ht,N,$a,zt,M,qa;return{c(){d=o("p"),E=a("I\u2019m still tinkering around with the "),_=o("a"),S=a("calendar maker"),f=a(". I decided to give each event (birthday, holiday, anniversary, etc.) a random id. Rather than just use "),m=o("code"),J=a("Math.random()"),Zt=a(", I decided to try using the browser\u2019s "),at=o("code"),te=a("Crypto"),ee=a(" interface. There\u2019s a nice function that generates a UUID (universally unique identifier): "),rt=o("code"),ae=a("window.crypto.randomUUID()"),re=a(". The result looks something like this: "),ot=o("code"),oe=a("'a1d803ce-822e-4d2d-a68f-16f85a5c1508'"),ne=a(". This is a 128 bit label which means there are 2128 unique values - around 3.4x1038 or roughly a trillion times a trillion times a trillion."),Bt=s(),p=o("p"),le=a("You can also generate random integers using "),nt=o("code"),de=a("getRandomValues"),se=a(", and following the format (replacing "),lt=o("code"),ie=a("ARRAY"),ce=a("): "),dt=o("code"),he=a("crypto.getRandomValues(new ARRAY(1))[0]"),ue=a(". You can use any of the typed integer arrays in JavaScript."),Vt=s(),P=o("table"),st=o("thead"),y=o("tr"),it=o("th"),fe=a("Array"),ve=s(),ct=o("th"),_e=a("Number of Values"),me=s(),ht=o("th"),pe=a("Range"),Ee=s(),u=o("tbody"),T=o("tr"),ut=o("td"),ye=a("Int8Array"),Te=s(),j=o("td"),ge=a("2"),ft=o("sup"),De=a("8"),Ae=a("= 256"),Ue=s(),vt=o("td"),be=a("[-128, 127]"),we=s(),g=o("tr"),_t=o("td"),Re=a("Int16Array"),Ie=s(),x=o("td"),ke=a("2"),mt=o("sup"),Pe=a("16"),Ce=a("= 65,536"),Se=s(),pt=o("td"),je=a("[-32768, 32767]"),xe=s(),D=o("tr"),Et=o("td"),Ye=a("Int32Array"),$e=s(),Y=o("td"),qe=a("2"),yt=o("sup"),Oe=a("32"),Be=a("= 4,294,967,296"),Ve=s(),Tt=o("td"),He=a("[-2147483648, 2147483647]"),ze=s(),A=o("tr"),gt=o("td"),Je=a("Uint8Array"),Ne=s(),$=o("td"),Me=a("2"),Dt=o("sup"),Le=a("8"),Fe=a("= 256"),Ge=s(),At=o("td"),Ke=a("[0, 255]"),Qe=s(),U=o("tr"),Ut=o("td"),We=a("Uint16Array"),Xe=s(),q=o("td"),Ze=a("2"),bt=o("sup"),ta=a("16"),ea=a("= 65,536"),aa=s(),wt=o("td"),ra=a("[0, 65535]"),oa=s(),b=o("tr"),Rt=o("td"),na=a("Uint32Array"),la=s(),O=o("td"),da=a("2"),It=o("sup"),sa=a("32"),ia=a("= 4,294,967,296"),ca=s(),kt=o("td"),ha=a("[0, 4294967295]"),ua=s(),w=o("tr"),Pt=o("td"),fa=a("Uint8ClampedArray"),va=s(),B=o("td"),_a=a("2"),Ct=o("sup"),ma=a("8"),pa=a("= 256"),Ea=s(),St=o("td"),ya=a("[0, 255]"),Ta=s(),R=o("tr"),jt=o("td"),ga=a("BigInt64Array"),Da=s(),V=o("td"),Aa=a("2"),xt=o("sup"),Ua=a("64"),ba=a(" = 18,446,744,073,709,551,615"),wa=s(),Yt=o("td"),Ra=a("[-9223372036854775808, 9223372036854775807]"),Ia=s(),I=o("tr"),$t=o("td"),ka=a("BitUint64Array"),Pa=s(),H=o("td"),Ca=a("2"),qt=o("sup"),Sa=a("64"),ja=a(" = 18,446,744,073,709,551,615"),xa=s(),Ot=o("td"),Ya=a("[0, 18446744073709551615]"),Ht=s(),N=o("p"),$a=a("The only difference between Uint8Array and Uint8ClampedArray is that the if you try assign a number outside of the range [0, 255], the clamped array will round you up to 0 or down to 255. The Uint8Array will take loop over, so 256 becomes 0, and -1 becomes 255, etc. I don\u2019t think this has an effect on the random output code above though."),zt=s(),M=o("p"),qa=a("The \u201CU\u201D in the name stands for \u201Cunsigned\u201D, meaning the numbers are non-negative. The signed versions have are just centered around zero, so there are an equal amount of negative and non-negative outcomes."),this.h()},l(c){d=n(c,"P",{});var h=l(d);E=r(h,"I\u2019m still tinkering around with the "),_=n(h,"A",{href:!0,rel:!0});var Ba=l(_);S=r(Ba,"calendar maker"),Ba.forEach(e),f=r(h,". I decided to give each event (birthday, holiday, anniversary, etc.) a random id. Rather than just use "),m=n(h,"CODE",{});var Va=l(m);J=r(Va,"Math.random()"),Va.forEach(e),Zt=r(h,", I decided to try using the browser\u2019s "),at=n(h,"CODE",{});var Ha=l(at);te=r(Ha,"Crypto"),Ha.forEach(e),ee=r(h," interface. There\u2019s a nice function that generates a UUID (universally unique identifier): "),rt=n(h,"CODE",{});var za=l(rt);ae=r(za,"window.crypto.randomUUID()"),za.forEach(e),re=r(h,". The result looks something like this: "),ot=n(h,"CODE",{});var Ja=l(ot);oe=r(Ja,"'a1d803ce-822e-4d2d-a68f-16f85a5c1508'"),Ja.forEach(e),ne=r(h,". This is a 128 bit label which means there are 2128 unique values - around 3.4x1038 or roughly a trillion times a trillion times a trillion."),h.forEach(e),Bt=i(c),p=n(c,"P",{});var C=l(p);le=r(C,"You can also generate random integers using "),nt=n(C,"CODE",{});var Na=l(nt);de=r(Na,"getRandomValues"),Na.forEach(e),se=r(C,", and following the format (replacing "),lt=n(C,"CODE",{});var Ma=l(lt);ie=r(Ma,"ARRAY"),Ma.forEach(e),ce=r(C,"): "),dt=n(C,"CODE",{});var La=l(dt);he=r(La,"crypto.getRandomValues(new ARRAY(1))[0]"),La.forEach(e),ue=r(C,". You can use any of the typed integer arrays in JavaScript."),C.forEach(e),Vt=i(c),P=n(c,"TABLE",{});var Jt=l(P);st=n(Jt,"THEAD",{});var Fa=l(st);y=n(Fa,"TR",{});var L=l(y);it=n(L,"TH",{});var Ga=l(it);fe=r(Ga,"Array"),Ga.forEach(e),ve=i(L),ct=n(L,"TH",{});var Ka=l(ct);_e=r(Ka,"Number of Values"),Ka.forEach(e),me=i(L),ht=n(L,"TH",{});var Qa=l(ht);pe=r(Qa,"Range"),Qa.forEach(e),L.forEach(e),Fa.forEach(e),Ee=i(Jt),u=n(Jt,"TBODY",{});var v=l(u);T=n(v,"TR",{});var F=l(T);ut=n(F,"TD",{});var Wa=l(ut);ye=r(Wa,"Int8Array"),Wa.forEach(e),Te=i(F),j=n(F,"TD",{});var Nt=l(j);ge=r(Nt,"2"),ft=n(Nt,"SUP",{});var Xa=l(ft);De=r(Xa,"8"),Xa.forEach(e),Ae=r(Nt,"= 256"),Nt.forEach(e),Ue=i(F),vt=n(F,"TD",{});var Za=l(vt);be=r(Za,"[-128, 127]"),Za.forEach(e),F.forEach(e),we=i(v),g=n(v,"TR",{});var G=l(g);_t=n(G,"TD",{});var tr=l(_t);Re=r(tr,"Int16Array"),tr.forEach(e),Ie=i(G),x=n(G,"TD",{});var Mt=l(x);ke=r(Mt,"2"),mt=n(Mt,"SUP",{});var er=l(mt);Pe=r(er,"16"),er.forEach(e),Ce=r(Mt,"= 65,536"),Mt.forEach(e),Se=i(G),pt=n(G,"TD",{});var ar=l(pt);je=r(ar,"[-32768, 32767]"),ar.forEach(e),G.forEach(e),xe=i(v),D=n(v,"TR",{});var K=l(D);Et=n(K,"TD",{});var rr=l(Et);Ye=r(rr,"Int32Array"),rr.forEach(e),$e=i(K),Y=n(K,"TD",{});var Lt=l(Y);qe=r(Lt,"2"),yt=n(Lt,"SUP",{});var or=l(yt);Oe=r(or,"32"),or.forEach(e),Be=r(Lt,"= 4,294,967,296"),Lt.forEach(e),Ve=i(K),Tt=n(K,"TD",{});var nr=l(Tt);He=r(nr,"[-2147483648, 2147483647]"),nr.forEach(e),K.forEach(e),ze=i(v),A=n(v,"TR",{});var Q=l(A);gt=n(Q,"TD",{});var lr=l(gt);Je=r(lr,"Uint8Array"),lr.forEach(e),Ne=i(Q),$=n(Q,"TD",{});var Ft=l($);Me=r(Ft,"2"),Dt=n(Ft,"SUP",{});var dr=l(Dt);Le=r(dr,"8"),dr.forEach(e),Fe=r(Ft,"= 256"),Ft.forEach(e),Ge=i(Q),At=n(Q,"TD",{});var sr=l(At);Ke=r(sr,"[0, 255]"),sr.forEach(e),Q.forEach(e),Qe=i(v),U=n(v,"TR",{});var W=l(U);Ut=n(W,"TD",{});var ir=l(Ut);We=r(ir,"Uint16Array"),ir.forEach(e),Xe=i(W),q=n(W,"TD",{});var Gt=l(q);Ze=r(Gt,"2"),bt=n(Gt,"SUP",{});var cr=l(bt);ta=r(cr,"16"),cr.forEach(e),ea=r(Gt,"= 65,536"),Gt.forEach(e),aa=i(W),wt=n(W,"TD",{});var hr=l(wt);ra=r(hr,"[0, 65535]"),hr.forEach(e),W.forEach(e),oa=i(v),b=n(v,"TR",{});var X=l(b);Rt=n(X,"TD",{});var ur=l(Rt);na=r(ur,"Uint32Array"),ur.forEach(e),la=i(X),O=n(X,"TD",{});var Kt=l(O);da=r(Kt,"2"),It=n(Kt,"SUP",{});var fr=l(It);sa=r(fr,"32"),fr.forEach(e),ia=r(Kt,"= 4,294,967,296"),Kt.forEach(e),ca=i(X),kt=n(X,"TD",{});var vr=l(kt);ha=r(vr,"[0, 4294967295]"),vr.forEach(e),X.forEach(e),ua=i(v),w=n(v,"TR",{});var Z=l(w);Pt=n(Z,"TD",{});var _r=l(Pt);fa=r(_r,"Uint8ClampedArray"),_r.forEach(e),va=i(Z),B=n(Z,"TD",{});var Qt=l(B);_a=r(Qt,"2"),Ct=n(Qt,"SUP",{});var mr=l(Ct);ma=r(mr,"8"),mr.forEach(e),pa=r(Qt,"= 256"),Qt.forEach(e),Ea=i(Z),St=n(Z,"TD",{});var pr=l(St);ya=r(pr,"[0, 255]"),pr.forEach(e),Z.forEach(e),Ta=i(v),R=n(v,"TR",{});var tt=l(R);jt=n(tt,"TD",{});var Er=l(jt);ga=r(Er,"BigInt64Array"),Er.forEach(e),Da=i(tt),V=n(tt,"TD",{});var Wt=l(V);Aa=r(Wt,"2"),xt=n(Wt,"SUP",{});var yr=l(xt);Ua=r(yr,"64"),yr.forEach(e),ba=r(Wt," = 18,446,744,073,709,551,615"),Wt.forEach(e),wa=i(tt),Yt=n(tt,"TD",{});var Tr=l(Yt);Ra=r(Tr,"[-9223372036854775808, 9223372036854775807]"),Tr.forEach(e),tt.forEach(e),Ia=i(v),I=n(v,"TR",{});var et=l(I);$t=n(et,"TD",{});var gr=l($t);ka=r(gr,"BitUint64Array"),gr.forEach(e),Pa=i(et),H=n(et,"TD",{});var Xt=l(H);Ca=r(Xt,"2"),qt=n(Xt,"SUP",{});var Dr=l(qt);Sa=r(Dr,"64"),Dr.forEach(e),ja=r(Xt," = 18,446,744,073,709,551,615"),Xt.forEach(e),xa=i(et),Ot=n(et,"TD",{});var Ar=l(Ot);Ya=r(Ar,"[0, 18446744073709551615]"),Ar.forEach(e),et.forEach(e),v.forEach(e),Jt.forEach(e),Ht=i(c),N=n(c,"P",{});var Ur=l(N);$a=r(Ur,"The only difference between Uint8Array and Uint8ClampedArray is that the if you try assign a number outside of the range [0, 255], the clamped array will round you up to 0 or down to 255. The Uint8Array will take loop over, so 256 becomes 0, and -1 becomes 255, etc. I don\u2019t think this has an effect on the random output code above though."),Ur.forEach(e),zt=i(c),M=n(c,"P",{});var br=l(M);qa=r(br,"The \u201CU\u201D in the name stands for \u201Cunsigned\u201D, meaning the numbers are non-negative. The signed versions have are just centered around zero, so there are an equal amount of negative and non-negative outcomes."),br.forEach(e),this.h()},h(){Ir(_,"href","https://calendar.ihtfy.com/"),Ir(_,"rel","nofollow")},m(c,h){k(c,d,h),t(d,E),t(d,_),t(_,S),t(d,f),t(d,m),t(m,J),t(d,Zt),t(d,at),t(at,te),t(d,ee),t(d,rt),t(rt,ae),t(d,re),t(d,ot),t(ot,oe),t(d,ne),k(c,Bt,h),k(c,p,h),t(p,le),t(p,nt),t(nt,de),t(p,se),t(p,lt),t(lt,ie),t(p,ce),t(p,dt),t(dt,he),t(p,ue),k(c,Vt,h),k(c,P,h),t(P,st),t(st,y),t(y,it),t(it,fe),t(y,ve),t(y,ct),t(ct,_e),t(y,me),t(y,ht),t(ht,pe),t(P,Ee),t(P,u),t(u,T),t(T,ut),t(ut,ye),t(T,Te),t(T,j),t(j,ge),t(j,ft),t(ft,De),t(j,Ae),t(T,Ue),t(T,vt),t(vt,be),t(u,we),t(u,g),t(g,_t),t(_t,Re),t(g,Ie),t(g,x),t(x,ke),t(x,mt),t(mt,Pe),t(x,Ce),t(g,Se),t(g,pt),t(pt,je),t(u,xe),t(u,D),t(D,Et),t(Et,Ye),t(D,$e),t(D,Y),t(Y,qe),t(Y,yt),t(yt,Oe),t(Y,Be),t(D,Ve),t(D,Tt),t(Tt,He),t(u,ze),t(u,A),t(A,gt),t(gt,Je),t(A,Ne),t(A,$),t($,Me),t($,Dt),t(Dt,Le),t($,Fe),t(A,Ge),t(A,At),t(At,Ke),t(u,Qe),t(u,U),t(U,Ut),t(Ut,We),t(U,Xe),t(U,q),t(q,Ze),t(q,bt),t(bt,ta),t(q,ea),t(U,aa),t(U,wt),t(wt,ra),t(u,oa),t(u,b),t(b,Rt),t(Rt,na),t(b,la),t(b,O),t(O,da),t(O,It),t(It,sa),t(O,ia),t(b,ca),t(b,kt),t(kt,ha),t(u,ua),t(u,w),t(w,Pt),t(Pt,fa),t(w,va),t(w,B),t(B,_a),t(B,Ct),t(Ct,ma),t(B,pa),t(w,Ea),t(w,St),t(St,ya),t(u,Ta),t(u,R),t(R,jt),t(jt,ga),t(R,Da),t(R,V),t(V,Aa),t(V,xt),t(xt,Ua),t(V,ba),t(R,wa),t(R,Yt),t(Yt,Ra),t(u,Ia),t(u,I),t(I,$t),t($t,ka),t(I,Pa),t(I,H),t(H,Ca),t(H,qt),t(qt,Sa),t(H,ja),t(I,xa),t(I,Ot),t(Ot,Ya),k(c,Ht,h),k(c,N,h),t(N,$a),k(c,zt,h),k(c,M,h),t(M,qa)},d(c){c&&e(d),c&&e(Bt),c&&e(p),c&&e(Vt),c&&e(P),c&&e(Ht),c&&e(N),c&&e(zt),c&&e(M)}}}function zr(z){let d,E;const _=[z[0],kr];let S={$$slots:{default:[Hr]},$$scope:{ctx:z}};for(let f=0;f<_.length;f+=1)S=Oa(S,_[f]);return d=new Vr({props:S}),{c(){jr(d.$$.fragment)},l(f){xr(d.$$.fragment,f)},m(f,m){Yr(d,f,m),E=!0},p(f,[m]){const J=m&1?$r(_,[m&1&&wr(f[0]),m&0&&wr(kr)]):{};m&2&&(J.$$scope={dirty:m,ctx:f}),d.$set(J)},i(f){E||(qr(d.$$.fragment,f),E=!0)},o(f){Or(d.$$.fragment,f),E=!1},d(f){Br(d,f)}}}const kr={draft:!1,title:"pseudorandom",date:"2022-02-14",coverImage:"pseudorandom.jpg",desc:"Playing around with crypto - No, not currency",tags:["code","math"]};function Jr(z,d,E){return z.$$set=_=>{E(0,d=Oa(Oa({},d),Rr(_)))},d=Rr(d),[d]}class Kr extends Pr{constructor(d){super();Cr(this,d,Jr,zr,Sr,{})}}export{Kr as default,kr as metadata};