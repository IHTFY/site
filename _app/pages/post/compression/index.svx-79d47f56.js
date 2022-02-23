import{S as Yn,i as zn,s as Cn,C as Gs,w as Fn,x as Un,y as $n,z as Wn,A as An,q as Zn,o as qn,B as Jn,U as jn,e,t as a,k as f,c as r,a as s,h as d,d as o,m as b,b as Nn,g as n,F as t}from"../../../chunks/vendor-f73903c8.js";import{P as Gn}from"../../../chunks/post-d86c6f51.js";import"../../../chunks/stores-233b7d65.js";import"../../../chunks/Progress-59f48294.js";/* empty css                                      */function Hn(bt){let c,S,k,$,v,A,F,il,ar,I,ee,nl,fl,re,bl,cl,le,ul,Ol,oe,El,hl,ae,Rl,dr,ct,pl,sr,ut,_l,ir,Ot,Et,W,de,vl,se,yl,ie,Tl,Z,ne,ml,N,wl,Bl,Dl,Ml,Il,xl,kl,nr,fr,ht,Ll,br,Rt,Pl,cr,pt,Al,ur,_t,vt,q,fe,jl,be,Nl,ce,Sl,J,ue,Yl,L,zl,Cl,Fl,Ul,$l,Wl,Zl,ql,Jl,Oe,Gl,Or,yt,Hl,Er,Tt,mt,G,Ee,Kl,he,Ql,Re,Vl,H,pe,Xl,P,gl,to,eo,ro,lo,oo,ao,so,io,_e,no,hr,wt,fo,Rr,Bt,Dt,K,ve,bo,ye,co,Te,uo,Q,me,Oo,M,Eo,ho,Ro,po,_o,vo,yo,To,mo,wo,Bo,we,Do,pr,Mt,Mo,_r,It,xt,V,Be,Io,De,xo,Me,ko,X,Ie,Lo,B,Po,Ao,jo,No,So,Yo,zo,Co,Fo,Uo,$o,Wo,Zo,xe,qo,vr,kt,Jo,yr,Lt,Pt,g,ke,Go,Le,Ho,Pe,Ko,tt,Ae,Qo,T,Vo,Xo,go,ta,ea,ra,la,oa,aa,da,sa,ia,na,fa,ba,je,ca,Tr,At,ua,mr,jt,Nt,et,Ne,Oa,Se,Ea,Ye,ha,rt,ze,Ra,p,pa,_a,va,ya,Ta,ma,wa,Ba,Da,Ma,Ia,xa,ka,La,Pa,Aa,ja,Ce,Na,wr,St,Sa,Br,Yt,zt,lt,Fe,Ya,Ue,za,$e,Ca,ot,We,Fa,_,Ua,$a,Wa,Za,qa,Ja,Ga,Ha,Ka,Qa,Va,Xa,ga,td,ed,rd,ld,Ze,od,Dr,Ct,ad,Mr,Ft,Ut,at,qe,dd,Je,sd,Ge,id,dt,He,nd,E,fd,bd,cd,ud,Od,Ed,hd,Rd,pd,_d,vd,yd,Td,md,wd,Bd,Dd,Md,Id,Ke,xd,Ir,$t,kd,xr,Wt,Zt,st,Qe,Ld,Ve,Pd,Xe,Ad,it,ge,jd,u,Nd,Sd,Yd,zd,Cd,Fd,Ud,$d,Wd,Zd,qd,Jd,Gd,Hd,Kd,Qd,Vd,Xd,gd,ts,es,tr,rs,kr,qt,ls,Lr,Jt,Gt,nt,er,os,rr,as,lr,ds,ft,Pr,O,ss,is,ns,fs,bs,cs,us,Os,Es,hs,Rs,ps,_s,vs,ys,Ts,ms,ws,Bs,Ds,Ms,or,Is,Ar,Ht,xs,jr,Kt,ks,Nr,Qt,Ls,Sr,Vt,Ps,Yr,Xt,As,zr,gt,js,Cr,te,Ns;return{c(){c=e("p"),S=a("I was getting a warning on a coding project that each page was more than 1MB in size. The data is a list of coordinates, stored as a big string. I was able to reduce the size of the data to 20% the original size by rounding to whole numbers. Then I used "),k=e("a"),$=a("this LZ compression library"),v=a(" to reduce it to 5% the orignal size."),A=f(),F=e("p"),il=a("LZ is a lossless compression algorithm, which means you get the exact original input when you decompress. It works by:"),ar=f(),I=e("ol"),ee=e("li"),nl=a("List all the characters used by the data and store it in \u201Cdictionary\u201D"),fl=f(),re=e("li"),bl=a("For the next chunk of data to encode, find the longest \u201Cword\u201D in the dictionary that matches"),cl=f(),le=e("li"),ul=a("Store the dictionary index (the order the word appears) as the next chunk of encoded data"),Ol=f(),oe=e("li"),El=a("Add the original chunk plus the next character as a new dictionary word"),hl=f(),ae=e("li"),Rl=a("Go to Step 2. until all data is encoded"),dr=f(),ct=e("p"),pl=a("If you wanted to compress the string \u201COROMEOROMEO\u201D"),sr=f(),ut=e("p"),_l=a("You would get all the individual characters used and add them to the dictionary:"),ir=f(),Ot=e("table"),Et=e("tbody"),W=e("tr"),de=e("td"),vl=a("Input"),se=e("td"),yl=a("Dictionary"),ie=e("td"),Tl=a("Output"),Z=e("tr"),ne=e("td"),ml=a("OROMEOROMEO"),N=e("td"),wl=a("1. O"),Bl=e("br"),Dl=a("2. R"),Ml=e("br"),Il=a("3. M"),xl=e("br"),kl=a("4. E"),nr=e("td"),fr=f(),ht=e("p"),Ll=a("Initialize the Dictionary"),br=f(),Rt=e("p"),Pl=a("Next, we find the longest word that matches our remaining string, which is just \u201CO\u201D, since there is no word starting with \u201COR\u201D."),cr=f(),pt=e("p"),Al=a("Then, we encode it as the index (1)"),ur=f(),_t=e("table"),vt=e("tbody"),q=e("tr"),fe=e("td"),jl=a("Input"),be=e("td"),Nl=a("Dictionary"),ce=e("td"),Sl=a("Output"),J=e("tr"),ue=e("td"),Yl=a("ROMEOROMEO"),L=e("td"),zl=a("1. O"),Cl=e("br"),Fl=a("2. H"),Ul=e("br"),$l=a("3. R"),Wl=e("br"),Zl=a("4. M"),ql=e("br"),Jl=a("5. E"),Oe=e("td"),Gl=a("1"),Or=f(),yt=e("p"),Hl=a("Next, we add \u201COR\u201D to our dictionary. If we had had that entry in our last step, we could\u2019ve encoded more data and saved more space. We add it now so that we can make use of it in the future."),Er=f(),Tt=e("table"),mt=e("tbody"),G=e("tr"),Ee=e("td"),Kl=a("Input"),he=e("td"),Ql=a("Dictionary"),Re=e("td"),Vl=a("Output"),H=e("tr"),pe=e("td"),Xl=a("ROMEOROMEO"),P=e("td"),gl=a("1. O"),to=e("br"),eo=a("2. R"),ro=e("br"),lo=a("3. M"),oo=e("br"),ao=a("4. E"),so=e("br"),io=a("5. OR"),_e=e("td"),no=a("1"),hr=f(),wt=e("p"),fo=a("Now, we repeat the process. Our next chunk is just \u201CR\u201D, since \u201CRO\u201D isn\u2019t in the dictionary. We store 2 as output, remove the input, and add \u201CRO\u201D to the dictionary"),Rr=f(),Bt=e("table"),Dt=e("tbody"),K=e("tr"),ve=e("td"),bo=a("Input"),ye=e("td"),co=a("Dictionary"),Te=e("td"),uo=a("Output"),Q=e("tr"),me=e("td"),Oo=a("OMEOROMEO"),M=e("td"),Eo=a("1. O"),ho=e("br"),Ro=a("2. R"),po=e("br"),_o=a("3. M"),vo=e("br"),yo=a("4. E"),To=e("br"),mo=a("5. OR"),wo=e("br"),Bo=a("6. RO"),we=e("td"),Do=a("1,2"),pr=f(),Mt=e("p"),Mo=a("Next, we encode \u201CO\u201D, since \u201COM\u201D isn\u2019t in the dictionary."),_r=f(),It=e("table"),xt=e("tbody"),V=e("tr"),Be=e("td"),Io=a("Input"),De=e("td"),xo=a("Dictionary"),Me=e("td"),ko=a("Output"),X=e("tr"),Ie=e("td"),Lo=a("MEOROMEO"),B=e("td"),Po=a("1. O"),Ao=e("br"),jo=a("2. R"),No=e("br"),So=a("3. M"),Yo=e("br"),zo=a("4. E"),Co=e("br"),Fo=a("5. OR"),Uo=e("br"),$o=a("6. RO"),Wo=e("br"),Zo=a("7. OM"),xe=e("td"),qo=a("1,2,1"),vr=f(),kt=e("p"),Jo=a("Next, \u201CM\u201D is encoded since \u201CME\u201D isn\u2019t listed."),yr=f(),Lt=e("table"),Pt=e("tbody"),g=e("tr"),ke=e("td"),Go=a("Input"),Le=e("td"),Ho=a("Dictionary"),Pe=e("td"),Ko=a("Output"),tt=e("tr"),Ae=e("td"),Qo=a("EOROMEO"),T=e("td"),Vo=a("1. O"),Xo=e("br"),go=a("2. R"),ta=e("br"),ea=a("3. M"),ra=e("br"),la=a("4. E"),oa=e("br"),aa=a("5. OR"),da=e("br"),sa=a("6. RO"),ia=e("br"),na=a("7. OM"),fa=e("br"),ba=a("8. ME"),je=e("td"),ca=a("1,2,1,3"),Tr=f(),At=e("p"),ua=a("Next, \u201CE\u201D is encoded as \u201C4\u201D since \u201CEO\u201D isn\u2019t in the dictionary, but we\u2019ll add it."),mr=f(),jt=e("table"),Nt=e("tbody"),et=e("tr"),Ne=e("td"),Oa=a("Input"),Se=e("td"),Ea=a("Dictionary"),Ye=e("td"),ha=a("Output"),rt=e("tr"),ze=e("td"),Ra=a("OROMEO"),p=e("td"),pa=a("1. O"),_a=e("br"),va=a("2. R"),ya=e("br"),Ta=a("3. M"),ma=e("br"),wa=a("4. E"),Ba=e("br"),Da=a("5. OR"),Ma=e("br"),Ia=a("6. RO"),xa=e("br"),ka=a("7. OM"),La=e("br"),Pa=a("8. ME"),Aa=e("br"),ja=a("9. EO"),Ce=e("td"),Na=a("1,2,1,3,4"),wr=f(),St=e("p"),Sa=a("Finally we find a longer match."),Br=f(),Yt=e("table"),zt=e("tbody"),lt=e("tr"),Fe=e("td"),Ya=a("Input"),Ue=e("td"),za=a("Dictionary"),$e=e("td"),Ca=a("Output"),ot=e("tr"),We=e("td"),Fa=a("OROMEO"),_=e("td"),Ua=a("1. O"),$a=e("br"),Wa=a("2. R"),Za=e("br"),qa=a("3. M"),Ja=e("br"),Ga=a("4. E"),Ha=e("br"),Ka=a("5. OR"),Qa=e("br"),Va=a("6. RO"),Xa=e("br"),ga=a("7. OM"),td=e("br"),ed=a("8. ME"),rd=e("br"),ld=a("9. EO"),Ze=e("td"),od=a("1,2,1,3,4"),Dr=f(),Ct=e("p"),ad=a("\u201CO\u201D is in the dictionary, but so is \u201COR\u201D which is longer. Is \u201CORO\u201D in the dictionary? No, so we encode \u201COR\u201D as \u201C5\u201D, and add \u201CORO\u201D to the dictionary."),Mr=f(),Ft=e("table"),Ut=e("tbody"),at=e("tr"),qe=e("td"),dd=a("Input"),Je=e("td"),sd=a("Dictionary"),Ge=e("td"),id=a("Output"),dt=e("tr"),He=e("td"),nd=a("OMEO"),E=e("td"),fd=a("1. O"),bd=e("br"),cd=a("2. R"),ud=e("br"),Od=a("3. M"),Ed=e("br"),hd=a("4. E"),Rd=e("br"),pd=a("5. OR"),_d=e("br"),vd=a("6. RO"),yd=e("br"),Td=a("7. OM"),md=e("br"),wd=a("8. ME"),Bd=e("br"),Dd=a("9. EO"),Md=e("br"),Id=a("10. ORO"),Ke=e("td"),xd=a("1,2,1,3,4,5"),Ir=f(),$t=e("p"),kd=a("Next, we have \u201CO\u201D in the dictionary, but \u201COM\u201D is there too. Is \u201COME\u201D? No, so we encode \u201COM\u201D as \u201C7\u201D and add \u201COME\u201D to the dictionary."),xr=f(),Wt=e("table"),Zt=e("tbody"),st=e("tr"),Qe=e("td"),Ld=a("Input"),Ve=e("td"),Pd=a("Dictionary"),Xe=e("td"),Ad=a("Output"),it=e("tr"),ge=e("td"),jd=a("EO"),u=e("td"),Nd=a("1. O"),Sd=e("br"),Yd=a("2. R"),zd=e("br"),Cd=a("3. M"),Fd=e("br"),Ud=a("4. E"),$d=e("br"),Wd=a("5. OR"),Zd=e("br"),qd=a("6. RO"),Jd=e("br"),Gd=a("7. OM"),Hd=e("br"),Kd=a("8. ME"),Qd=e("br"),Vd=a("9. EO"),Xd=e("br"),gd=a("10. ORO"),ts=e("br"),es=a("11. OME"),tr=e("td"),rs=a("1,2,1,3,4,5,7"),kr=f(),qt=e("p"),ls=a("Finally, \u201CEO\u201D is in the dictionary so we encode it as \u201C9\u201D, and we\u2019re done."),Lr=f(),Jt=e("table"),Gt=e("tbody"),nt=e("tr"),er=e("td"),os=a("Input"),rr=e("td"),as=a("Dictionary"),lr=e("td"),ds=a("Output"),ft=e("tr"),Pr=e("td"),O=e("td"),ss=a("1. O"),is=e("br"),ns=a("2. R"),fs=e("br"),bs=a("3. M"),cs=e("br"),us=a("4. E"),Os=e("br"),Es=a("5. OR"),hs=e("br"),Rs=a("6. RO"),ps=e("br"),_s=a("7. OM"),vs=e("br"),ys=a("8. ME"),Ts=e("br"),ms=a("9. EO"),ws=e("br"),Bs=a("10. ORO"),Ds=e("br"),Ms=a("11. OME"),or=e("td"),Is=a("1,2,1,3,4,5,7,9"),Ar=f(),Ht=e("p"),xs=a("Encode the next chunk"),jr=f(),Kt=e("p"),ks=a("It doesn\u2019t look like we did much, and honestly, we didn\u2019t. This is because we used a very short starting string. But imagine we were compressing all of Romeo and Juliet. We would quickly be able to encode \u201CROMEO\u201D as a single number and use that throughout."),Nr=f(),Qt=e("p"),Ls=a("Since our data is just numbers, we can store that efficiently. Letters are actually stored as numbers; there are different formats for encoding and interpreting them."),Sr=f(),Vt=e("p"),Ps=a("ASCII originally used 7 bits per character, which gives you 27 (128) different numbers. That\u2019s enough to store the uppercase and lowercase letters, the numerals 0-9, the punctuation you have on the top row of a keyboard, and a few other special characters like \u201Ccarriage return\u201D or new line."),Yr=f(),Xt=e("p"),As=a("UTF-8 uses a byte (8 bits or 256 numbers) to store each character. It works for decoding ASCII , but it can also be used to decode Unicode by using up to 4 bytes (32 bits or 4,294,967,296 numbers), although Unicode only specifies 1,112,064 different characters."),zr=f(),gt=e("p"),js=a("UTF-16 uses 16 bits (216 = 65536) to encode. It works with Unicode but not ASCII. These extra numbers can label characters for every language, random symbols, emoji."),Cr=f(),te=e("p"),Ns=a("If we wanted to encode (from letters to numbers) Romeo and Juliet written in another alphabet, Chinese for example, we\u2019d need to store each character using a large number - probably in the thousands. But if we applied LZ encoding, we would only be storing numbers from 0 to something under 10,000 I\u2019d guess."),this.h()},l(l){c=r(l,"P",{});var i=s(c);S=d(i,"I was getting a warning on a coding project that each page was more than 1MB in size. The data is a list of coordinates, stored as a big string. I was able to reduce the size of the data to 20% the original size by rounding to whole numbers. Then I used "),k=r(i,"A",{href:!0,rel:!0});var Hs=s(k);$=d(Hs,"this LZ compression library"),Hs.forEach(o),v=d(i," to reduce it to 5% the orignal size."),i.forEach(o),A=b(l),F=r(l,"P",{});var Ks=s(F);il=d(Ks,"LZ is a lossless compression algorithm, which means you get the exact original input when you decompress. It works by:"),Ks.forEach(o),ar=b(l),I=r(l,"OL",{});var Y=s(I);ee=r(Y,"LI",{});var Qs=s(ee);nl=d(Qs,"List all the characters used by the data and store it in \u201Cdictionary\u201D"),Qs.forEach(o),fl=b(Y),re=r(Y,"LI",{});var Vs=s(re);bl=d(Vs,"For the next chunk of data to encode, find the longest \u201Cword\u201D in the dictionary that matches"),Vs.forEach(o),cl=b(Y),le=r(Y,"LI",{});var Xs=s(le);ul=d(Xs,"Store the dictionary index (the order the word appears) as the next chunk of encoded data"),Xs.forEach(o),Ol=b(Y),oe=r(Y,"LI",{});var gs=s(oe);El=d(gs,"Add the original chunk plus the next character as a new dictionary word"),gs.forEach(o),hl=b(Y),ae=r(Y,"LI",{});var ti=s(ae);Rl=d(ti,"Go to Step 2. until all data is encoded"),ti.forEach(o),Y.forEach(o),dr=b(l),ct=r(l,"P",{});var ei=s(ct);pl=d(ei,"If you wanted to compress the string \u201COROMEOROMEO\u201D"),ei.forEach(o),sr=b(l),ut=r(l,"P",{});var ri=s(ut);_l=d(ri,"You would get all the individual characters used and add them to the dictionary:"),ri.forEach(o),ir=b(l),Ot=r(l,"TABLE",{});var li=s(Ot);Et=r(li,"TBODY",{});var Ss=s(Et);W=r(Ss,"TR",{});var Fr=s(W);de=r(Fr,"TD",{});var oi=s(de);vl=d(oi,"Input"),oi.forEach(o),se=r(Fr,"TD",{});var ai=s(se);yl=d(ai,"Dictionary"),ai.forEach(o),ie=r(Fr,"TD",{});var di=s(ie);Tl=d(di,"Output"),di.forEach(o),Fr.forEach(o),Z=r(Ss,"TR",{});var Ur=s(Z);ne=r(Ur,"TD",{});var si=s(ne);ml=d(si,"OROMEOROMEO"),si.forEach(o),N=r(Ur,"TD",{});var U=s(N);wl=d(U,"1. O"),Bl=r(U,"BR",{}),Dl=d(U,"2. R"),Ml=r(U,"BR",{}),Il=d(U,"3. M"),xl=r(U,"BR",{}),kl=d(U,"4. E"),U.forEach(o),nr=r(Ur,"TD",{}),s(nr).forEach(o),Ur.forEach(o),Ss.forEach(o),li.forEach(o),fr=b(l),ht=r(l,"P",{});var ii=s(ht);Ll=d(ii,"Initialize the Dictionary"),ii.forEach(o),br=b(l),Rt=r(l,"P",{});var ni=s(Rt);Pl=d(ni,"Next, we find the longest word that matches our remaining string, which is just \u201CO\u201D, since there is no word starting with \u201COR\u201D."),ni.forEach(o),cr=b(l),pt=r(l,"P",{});var fi=s(pt);Al=d(fi,"Then, we encode it as the index (1)"),fi.forEach(o),ur=b(l),_t=r(l,"TABLE",{});var bi=s(_t);vt=r(bi,"TBODY",{});var Ys=s(vt);q=r(Ys,"TR",{});var $r=s(q);fe=r($r,"TD",{});var ci=s(fe);jl=d(ci,"Input"),ci.forEach(o),be=r($r,"TD",{});var ui=s(be);Nl=d(ui,"Dictionary"),ui.forEach(o),ce=r($r,"TD",{});var Oi=s(ce);Sl=d(Oi,"Output"),Oi.forEach(o),$r.forEach(o),J=r(Ys,"TR",{});var Wr=s(J);ue=r(Wr,"TD",{});var Ei=s(ue);Yl=d(Ei,"ROMEOROMEO"),Ei.forEach(o),L=r(Wr,"TD",{});var z=s(L);zl=d(z,"1. O"),Cl=r(z,"BR",{}),Fl=d(z,"2. H"),Ul=r(z,"BR",{}),$l=d(z,"3. R"),Wl=r(z,"BR",{}),Zl=d(z,"4. M"),ql=r(z,"BR",{}),Jl=d(z,"5. E"),z.forEach(o),Oe=r(Wr,"TD",{});var hi=s(Oe);Gl=d(hi,"1"),hi.forEach(o),Wr.forEach(o),Ys.forEach(o),bi.forEach(o),Or=b(l),yt=r(l,"P",{});var Ri=s(yt);Hl=d(Ri,"Next, we add \u201COR\u201D to our dictionary. If we had had that entry in our last step, we could\u2019ve encoded more data and saved more space. We add it now so that we can make use of it in the future."),Ri.forEach(o),Er=b(l),Tt=r(l,"TABLE",{});var pi=s(Tt);mt=r(pi,"TBODY",{});var zs=s(mt);G=r(zs,"TR",{});var Zr=s(G);Ee=r(Zr,"TD",{});var _i=s(Ee);Kl=d(_i,"Input"),_i.forEach(o),he=r(Zr,"TD",{});var vi=s(he);Ql=d(vi,"Dictionary"),vi.forEach(o),Re=r(Zr,"TD",{});var yi=s(Re);Vl=d(yi,"Output"),yi.forEach(o),Zr.forEach(o),H=r(zs,"TR",{});var qr=s(H);pe=r(qr,"TD",{});var Ti=s(pe);Xl=d(Ti,"ROMEOROMEO"),Ti.forEach(o),P=r(qr,"TD",{});var C=s(P);gl=d(C,"1. O"),to=r(C,"BR",{}),eo=d(C,"2. R"),ro=r(C,"BR",{}),lo=d(C,"3. M"),oo=r(C,"BR",{}),ao=d(C,"4. E"),so=r(C,"BR",{}),io=d(C,"5. OR"),C.forEach(o),_e=r(qr,"TD",{});var mi=s(_e);no=d(mi,"1"),mi.forEach(o),qr.forEach(o),zs.forEach(o),pi.forEach(o),hr=b(l),wt=r(l,"P",{});var wi=s(wt);fo=d(wi,"Now, we repeat the process. Our next chunk is just \u201CR\u201D, since \u201CRO\u201D isn\u2019t in the dictionary. We store 2 as output, remove the input, and add \u201CRO\u201D to the dictionary"),wi.forEach(o),Rr=b(l),Bt=r(l,"TABLE",{});var Bi=s(Bt);Dt=r(Bi,"TBODY",{});var Cs=s(Dt);K=r(Cs,"TR",{});var Jr=s(K);ve=r(Jr,"TD",{});var Di=s(ve);bo=d(Di,"Input"),Di.forEach(o),ye=r(Jr,"TD",{});var Mi=s(ye);co=d(Mi,"Dictionary"),Mi.forEach(o),Te=r(Jr,"TD",{});var Ii=s(Te);uo=d(Ii,"Output"),Ii.forEach(o),Jr.forEach(o),Q=r(Cs,"TR",{});var Gr=s(Q);me=r(Gr,"TD",{});var xi=s(me);Oo=d(xi,"OMEOROMEO"),xi.forEach(o),M=r(Gr,"TD",{});var j=s(M);Eo=d(j,"1. O"),ho=r(j,"BR",{}),Ro=d(j,"2. R"),po=r(j,"BR",{}),_o=d(j,"3. M"),vo=r(j,"BR",{}),yo=d(j,"4. E"),To=r(j,"BR",{}),mo=d(j,"5. OR"),wo=r(j,"BR",{}),Bo=d(j,"6. RO"),j.forEach(o),we=r(Gr,"TD",{});var ki=s(we);Do=d(ki,"1,2"),ki.forEach(o),Gr.forEach(o),Cs.forEach(o),Bi.forEach(o),pr=b(l),Mt=r(l,"P",{});var Li=s(Mt);Mo=d(Li,"Next, we encode \u201CO\u201D, since \u201COM\u201D isn\u2019t in the dictionary."),Li.forEach(o),_r=b(l),It=r(l,"TABLE",{});var Pi=s(It);xt=r(Pi,"TBODY",{});var Fs=s(xt);V=r(Fs,"TR",{});var Hr=s(V);Be=r(Hr,"TD",{});var Ai=s(Be);Io=d(Ai,"Input"),Ai.forEach(o),De=r(Hr,"TD",{});var ji=s(De);xo=d(ji,"Dictionary"),ji.forEach(o),Me=r(Hr,"TD",{});var Ni=s(Me);ko=d(Ni,"Output"),Ni.forEach(o),Hr.forEach(o),X=r(Fs,"TR",{});var Kr=s(X);Ie=r(Kr,"TD",{});var Si=s(Ie);Lo=d(Si,"MEOROMEO"),Si.forEach(o),B=r(Kr,"TD",{});var x=s(B);Po=d(x,"1. O"),Ao=r(x,"BR",{}),jo=d(x,"2. R"),No=r(x,"BR",{}),So=d(x,"3. M"),Yo=r(x,"BR",{}),zo=d(x,"4. E"),Co=r(x,"BR",{}),Fo=d(x,"5. OR"),Uo=r(x,"BR",{}),$o=d(x,"6. RO"),Wo=r(x,"BR",{}),Zo=d(x,"7. OM"),x.forEach(o),xe=r(Kr,"TD",{});var Yi=s(xe);qo=d(Yi,"1,2,1"),Yi.forEach(o),Kr.forEach(o),Fs.forEach(o),Pi.forEach(o),vr=b(l),kt=r(l,"P",{});var zi=s(kt);Jo=d(zi,"Next, \u201CM\u201D is encoded since \u201CME\u201D isn\u2019t listed."),zi.forEach(o),yr=b(l),Lt=r(l,"TABLE",{});var Ci=s(Lt);Pt=r(Ci,"TBODY",{});var Us=s(Pt);g=r(Us,"TR",{});var Qr=s(g);ke=r(Qr,"TD",{});var Fi=s(ke);Go=d(Fi,"Input"),Fi.forEach(o),Le=r(Qr,"TD",{});var Ui=s(Le);Ho=d(Ui,"Dictionary"),Ui.forEach(o),Pe=r(Qr,"TD",{});var $i=s(Pe);Ko=d($i,"Output"),$i.forEach(o),Qr.forEach(o),tt=r(Us,"TR",{});var Vr=s(tt);Ae=r(Vr,"TD",{});var Wi=s(Ae);Qo=d(Wi,"EOROMEO"),Wi.forEach(o),T=r(Vr,"TD",{});var D=s(T);Vo=d(D,"1. O"),Xo=r(D,"BR",{}),go=d(D,"2. R"),ta=r(D,"BR",{}),ea=d(D,"3. M"),ra=r(D,"BR",{}),la=d(D,"4. E"),oa=r(D,"BR",{}),aa=d(D,"5. OR"),da=r(D,"BR",{}),sa=d(D,"6. RO"),ia=r(D,"BR",{}),na=d(D,"7. OM"),fa=r(D,"BR",{}),ba=d(D,"8. ME"),D.forEach(o),je=r(Vr,"TD",{});var Zi=s(je);ca=d(Zi,"1,2,1,3"),Zi.forEach(o),Vr.forEach(o),Us.forEach(o),Ci.forEach(o),Tr=b(l),At=r(l,"P",{});var qi=s(At);ua=d(qi,"Next, \u201CE\u201D is encoded as \u201C4\u201D since \u201CEO\u201D isn\u2019t in the dictionary, but we\u2019ll add it."),qi.forEach(o),mr=b(l),jt=r(l,"TABLE",{});var Ji=s(jt);Nt=r(Ji,"TBODY",{});var $s=s(Nt);et=r($s,"TR",{});var Xr=s(et);Ne=r(Xr,"TD",{});var Gi=s(Ne);Oa=d(Gi,"Input"),Gi.forEach(o),Se=r(Xr,"TD",{});var Hi=s(Se);Ea=d(Hi,"Dictionary"),Hi.forEach(o),Ye=r(Xr,"TD",{});var Ki=s(Ye);ha=d(Ki,"Output"),Ki.forEach(o),Xr.forEach(o),rt=r($s,"TR",{});var gr=s(rt);ze=r(gr,"TD",{});var Qi=s(ze);Ra=d(Qi,"OROMEO"),Qi.forEach(o),p=r(gr,"TD",{});var m=s(p);pa=d(m,"1. O"),_a=r(m,"BR",{}),va=d(m,"2. R"),ya=r(m,"BR",{}),Ta=d(m,"3. M"),ma=r(m,"BR",{}),wa=d(m,"4. E"),Ba=r(m,"BR",{}),Da=d(m,"5. OR"),Ma=r(m,"BR",{}),Ia=d(m,"6. RO"),xa=r(m,"BR",{}),ka=d(m,"7. OM"),La=r(m,"BR",{}),Pa=d(m,"8. ME"),Aa=r(m,"BR",{}),ja=d(m,"9. EO"),m.forEach(o),Ce=r(gr,"TD",{});var Vi=s(Ce);Na=d(Vi,"1,2,1,3,4"),Vi.forEach(o),gr.forEach(o),$s.forEach(o),Ji.forEach(o),wr=b(l),St=r(l,"P",{});var Xi=s(St);Sa=d(Xi,"Finally we find a longer match."),Xi.forEach(o),Br=b(l),Yt=r(l,"TABLE",{});var gi=s(Yt);zt=r(gi,"TBODY",{});var Ws=s(zt);lt=r(Ws,"TR",{});var tl=s(lt);Fe=r(tl,"TD",{});var tn=s(Fe);Ya=d(tn,"Input"),tn.forEach(o),Ue=r(tl,"TD",{});var en=s(Ue);za=d(en,"Dictionary"),en.forEach(o),$e=r(tl,"TD",{});var rn=s($e);Ca=d(rn,"Output"),rn.forEach(o),tl.forEach(o),ot=r(Ws,"TR",{});var el=s(ot);We=r(el,"TD",{});var ln=s(We);Fa=d(ln,"OROMEO"),ln.forEach(o),_=r(el,"TD",{});var w=s(_);Ua=d(w,"1. O"),$a=r(w,"BR",{}),Wa=d(w,"2. R"),Za=r(w,"BR",{}),qa=d(w,"3. M"),Ja=r(w,"BR",{}),Ga=d(w,"4. E"),Ha=r(w,"BR",{}),Ka=d(w,"5. OR"),Qa=r(w,"BR",{}),Va=d(w,"6. RO"),Xa=r(w,"BR",{}),ga=d(w,"7. OM"),td=r(w,"BR",{}),ed=d(w,"8. ME"),rd=r(w,"BR",{}),ld=d(w,"9. EO"),w.forEach(o),Ze=r(el,"TD",{});var on=s(Ze);od=d(on,"1,2,1,3,4"),on.forEach(o),el.forEach(o),Ws.forEach(o),gi.forEach(o),Dr=b(l),Ct=r(l,"P",{});var an=s(Ct);ad=d(an,"\u201CO\u201D is in the dictionary, but so is \u201COR\u201D which is longer. Is \u201CORO\u201D in the dictionary? No, so we encode \u201COR\u201D as \u201C5\u201D, and add \u201CORO\u201D to the dictionary."),an.forEach(o),Mr=b(l),Ft=r(l,"TABLE",{});var dn=s(Ft);Ut=r(dn,"TBODY",{});var Zs=s(Ut);at=r(Zs,"TR",{});var rl=s(at);qe=r(rl,"TD",{});var sn=s(qe);dd=d(sn,"Input"),sn.forEach(o),Je=r(rl,"TD",{});var nn=s(Je);sd=d(nn,"Dictionary"),nn.forEach(o),Ge=r(rl,"TD",{});var fn=s(Ge);id=d(fn,"Output"),fn.forEach(o),rl.forEach(o),dt=r(Zs,"TR",{});var ll=s(dt);He=r(ll,"TD",{});var bn=s(He);nd=d(bn,"OMEO"),bn.forEach(o),E=r(ll,"TD",{});var y=s(E);fd=d(y,"1. O"),bd=r(y,"BR",{}),cd=d(y,"2. R"),ud=r(y,"BR",{}),Od=d(y,"3. M"),Ed=r(y,"BR",{}),hd=d(y,"4. E"),Rd=r(y,"BR",{}),pd=d(y,"5. OR"),_d=r(y,"BR",{}),vd=d(y,"6. RO"),yd=r(y,"BR",{}),Td=d(y,"7. OM"),md=r(y,"BR",{}),wd=d(y,"8. ME"),Bd=r(y,"BR",{}),Dd=d(y,"9. EO"),Md=r(y,"BR",{}),Id=d(y,"10. ORO"),y.forEach(o),Ke=r(ll,"TD",{});var cn=s(Ke);xd=d(cn,"1,2,1,3,4,5"),cn.forEach(o),ll.forEach(o),Zs.forEach(o),dn.forEach(o),Ir=b(l),$t=r(l,"P",{});var un=s($t);kd=d(un,"Next, we have \u201CO\u201D in the dictionary, but \u201COM\u201D is there too. Is \u201COME\u201D? No, so we encode \u201COM\u201D as \u201C7\u201D and add \u201COME\u201D to the dictionary."),un.forEach(o),xr=b(l),Wt=r(l,"TABLE",{});var On=s(Wt);Zt=r(On,"TBODY",{});var qs=s(Zt);st=r(qs,"TR",{});var ol=s(st);Qe=r(ol,"TD",{});var En=s(Qe);Ld=d(En,"Input"),En.forEach(o),Ve=r(ol,"TD",{});var hn=s(Ve);Pd=d(hn,"Dictionary"),hn.forEach(o),Xe=r(ol,"TD",{});var Rn=s(Xe);Ad=d(Rn,"Output"),Rn.forEach(o),ol.forEach(o),it=r(qs,"TR",{});var al=s(it);ge=r(al,"TD",{});var pn=s(ge);jd=d(pn,"EO"),pn.forEach(o),u=r(al,"TD",{});var h=s(u);Nd=d(h,"1. O"),Sd=r(h,"BR",{}),Yd=d(h,"2. R"),zd=r(h,"BR",{}),Cd=d(h,"3. M"),Fd=r(h,"BR",{}),Ud=d(h,"4. E"),$d=r(h,"BR",{}),Wd=d(h,"5. OR"),Zd=r(h,"BR",{}),qd=d(h,"6. RO"),Jd=r(h,"BR",{}),Gd=d(h,"7. OM"),Hd=r(h,"BR",{}),Kd=d(h,"8. ME"),Qd=r(h,"BR",{}),Vd=d(h,"9. EO"),Xd=r(h,"BR",{}),gd=d(h,"10. ORO"),ts=r(h,"BR",{}),es=d(h,"11. OME"),h.forEach(o),tr=r(al,"TD",{});var _n=s(tr);rs=d(_n,"1,2,1,3,4,5,7"),_n.forEach(o),al.forEach(o),qs.forEach(o),On.forEach(o),kr=b(l),qt=r(l,"P",{});var vn=s(qt);ls=d(vn,"Finally, \u201CEO\u201D is in the dictionary so we encode it as \u201C9\u201D, and we\u2019re done."),vn.forEach(o),Lr=b(l),Jt=r(l,"TABLE",{});var yn=s(Jt);Gt=r(yn,"TBODY",{});var Js=s(Gt);nt=r(Js,"TR",{});var dl=s(nt);er=r(dl,"TD",{});var Tn=s(er);os=d(Tn,"Input"),Tn.forEach(o),rr=r(dl,"TD",{});var mn=s(rr);as=d(mn,"Dictionary"),mn.forEach(o),lr=r(dl,"TD",{});var wn=s(lr);ds=d(wn,"Output"),wn.forEach(o),dl.forEach(o),ft=r(Js,"TR",{});var sl=s(ft);Pr=r(sl,"TD",{}),s(Pr).forEach(o),O=r(sl,"TD",{});var R=s(O);ss=d(R,"1. O"),is=r(R,"BR",{}),ns=d(R,"2. R"),fs=r(R,"BR",{}),bs=d(R,"3. M"),cs=r(R,"BR",{}),us=d(R,"4. E"),Os=r(R,"BR",{}),Es=d(R,"5. OR"),hs=r(R,"BR",{}),Rs=d(R,"6. RO"),ps=r(R,"BR",{}),_s=d(R,"7. OM"),vs=r(R,"BR",{}),ys=d(R,"8. ME"),Ts=r(R,"BR",{}),ms=d(R,"9. EO"),ws=r(R,"BR",{}),Bs=d(R,"10. ORO"),Ds=r(R,"BR",{}),Ms=d(R,"11. OME"),R.forEach(o),or=r(sl,"TD",{});var Bn=s(or);Is=d(Bn,"1,2,1,3,4,5,7,9"),Bn.forEach(o),sl.forEach(o),Js.forEach(o),yn.forEach(o),Ar=b(l),Ht=r(l,"P",{});var Dn=s(Ht);xs=d(Dn,"Encode the next chunk"),Dn.forEach(o),jr=b(l),Kt=r(l,"P",{});var Mn=s(Kt);ks=d(Mn,"It doesn\u2019t look like we did much, and honestly, we didn\u2019t. This is because we used a very short starting string. But imagine we were compressing all of Romeo and Juliet. We would quickly be able to encode \u201CROMEO\u201D as a single number and use that throughout."),Mn.forEach(o),Nr=b(l),Qt=r(l,"P",{});var In=s(Qt);Ls=d(In,"Since our data is just numbers, we can store that efficiently. Letters are actually stored as numbers; there are different formats for encoding and interpreting them."),In.forEach(o),Sr=b(l),Vt=r(l,"P",{});var xn=s(Vt);Ps=d(xn,"ASCII originally used 7 bits per character, which gives you 27 (128) different numbers. That\u2019s enough to store the uppercase and lowercase letters, the numerals 0-9, the punctuation you have on the top row of a keyboard, and a few other special characters like \u201Ccarriage return\u201D or new line."),xn.forEach(o),Yr=b(l),Xt=r(l,"P",{});var kn=s(Xt);As=d(kn,"UTF-8 uses a byte (8 bits or 256 numbers) to store each character. It works for decoding ASCII , but it can also be used to decode Unicode by using up to 4 bytes (32 bits or 4,294,967,296 numbers), although Unicode only specifies 1,112,064 different characters."),kn.forEach(o),zr=b(l),gt=r(l,"P",{});var Ln=s(gt);js=d(Ln,"UTF-16 uses 16 bits (216 = 65536) to encode. It works with Unicode but not ASCII. These extra numbers can label characters for every language, random symbols, emoji."),Ln.forEach(o),Cr=b(l),te=r(l,"P",{});var Pn=s(te);Ns=d(Pn,"If we wanted to encode (from letters to numbers) Romeo and Juliet written in another alphabet, Chinese for example, we\u2019d need to store each character using a large number - probably in the thousands. But if we applied LZ encoding, we would only be storing numbers from 0 to something under 10,000 I\u2019d guess."),Pn.forEach(o),this.h()},h(){Nn(k,"href","https://www.npmjs.com/package/lz-string"),Nn(k,"rel","nofollow")},m(l,i){n(l,c,i),t(c,S),t(c,k),t(k,$),t(c,v),n(l,A,i),n(l,F,i),t(F,il),n(l,ar,i),n(l,I,i),t(I,ee),t(ee,nl),t(I,fl),t(I,re),t(re,bl),t(I,cl),t(I,le),t(le,ul),t(I,Ol),t(I,oe),t(oe,El),t(I,hl),t(I,ae),t(ae,Rl),n(l,dr,i),n(l,ct,i),t(ct,pl),n(l,sr,i),n(l,ut,i),t(ut,_l),n(l,ir,i),n(l,Ot,i),t(Ot,Et),t(Et,W),t(W,de),t(de,vl),t(W,se),t(se,yl),t(W,ie),t(ie,Tl),t(Et,Z),t(Z,ne),t(ne,ml),t(Z,N),t(N,wl),t(N,Bl),t(N,Dl),t(N,Ml),t(N,Il),t(N,xl),t(N,kl),t(Z,nr),n(l,fr,i),n(l,ht,i),t(ht,Ll),n(l,br,i),n(l,Rt,i),t(Rt,Pl),n(l,cr,i),n(l,pt,i),t(pt,Al),n(l,ur,i),n(l,_t,i),t(_t,vt),t(vt,q),t(q,fe),t(fe,jl),t(q,be),t(be,Nl),t(q,ce),t(ce,Sl),t(vt,J),t(J,ue),t(ue,Yl),t(J,L),t(L,zl),t(L,Cl),t(L,Fl),t(L,Ul),t(L,$l),t(L,Wl),t(L,Zl),t(L,ql),t(L,Jl),t(J,Oe),t(Oe,Gl),n(l,Or,i),n(l,yt,i),t(yt,Hl),n(l,Er,i),n(l,Tt,i),t(Tt,mt),t(mt,G),t(G,Ee),t(Ee,Kl),t(G,he),t(he,Ql),t(G,Re),t(Re,Vl),t(mt,H),t(H,pe),t(pe,Xl),t(H,P),t(P,gl),t(P,to),t(P,eo),t(P,ro),t(P,lo),t(P,oo),t(P,ao),t(P,so),t(P,io),t(H,_e),t(_e,no),n(l,hr,i),n(l,wt,i),t(wt,fo),n(l,Rr,i),n(l,Bt,i),t(Bt,Dt),t(Dt,K),t(K,ve),t(ve,bo),t(K,ye),t(ye,co),t(K,Te),t(Te,uo),t(Dt,Q),t(Q,me),t(me,Oo),t(Q,M),t(M,Eo),t(M,ho),t(M,Ro),t(M,po),t(M,_o),t(M,vo),t(M,yo),t(M,To),t(M,mo),t(M,wo),t(M,Bo),t(Q,we),t(we,Do),n(l,pr,i),n(l,Mt,i),t(Mt,Mo),n(l,_r,i),n(l,It,i),t(It,xt),t(xt,V),t(V,Be),t(Be,Io),t(V,De),t(De,xo),t(V,Me),t(Me,ko),t(xt,X),t(X,Ie),t(Ie,Lo),t(X,B),t(B,Po),t(B,Ao),t(B,jo),t(B,No),t(B,So),t(B,Yo),t(B,zo),t(B,Co),t(B,Fo),t(B,Uo),t(B,$o),t(B,Wo),t(B,Zo),t(X,xe),t(xe,qo),n(l,vr,i),n(l,kt,i),t(kt,Jo),n(l,yr,i),n(l,Lt,i),t(Lt,Pt),t(Pt,g),t(g,ke),t(ke,Go),t(g,Le),t(Le,Ho),t(g,Pe),t(Pe,Ko),t(Pt,tt),t(tt,Ae),t(Ae,Qo),t(tt,T),t(T,Vo),t(T,Xo),t(T,go),t(T,ta),t(T,ea),t(T,ra),t(T,la),t(T,oa),t(T,aa),t(T,da),t(T,sa),t(T,ia),t(T,na),t(T,fa),t(T,ba),t(tt,je),t(je,ca),n(l,Tr,i),n(l,At,i),t(At,ua),n(l,mr,i),n(l,jt,i),t(jt,Nt),t(Nt,et),t(et,Ne),t(Ne,Oa),t(et,Se),t(Se,Ea),t(et,Ye),t(Ye,ha),t(Nt,rt),t(rt,ze),t(ze,Ra),t(rt,p),t(p,pa),t(p,_a),t(p,va),t(p,ya),t(p,Ta),t(p,ma),t(p,wa),t(p,Ba),t(p,Da),t(p,Ma),t(p,Ia),t(p,xa),t(p,ka),t(p,La),t(p,Pa),t(p,Aa),t(p,ja),t(rt,Ce),t(Ce,Na),n(l,wr,i),n(l,St,i),t(St,Sa),n(l,Br,i),n(l,Yt,i),t(Yt,zt),t(zt,lt),t(lt,Fe),t(Fe,Ya),t(lt,Ue),t(Ue,za),t(lt,$e),t($e,Ca),t(zt,ot),t(ot,We),t(We,Fa),t(ot,_),t(_,Ua),t(_,$a),t(_,Wa),t(_,Za),t(_,qa),t(_,Ja),t(_,Ga),t(_,Ha),t(_,Ka),t(_,Qa),t(_,Va),t(_,Xa),t(_,ga),t(_,td),t(_,ed),t(_,rd),t(_,ld),t(ot,Ze),t(Ze,od),n(l,Dr,i),n(l,Ct,i),t(Ct,ad),n(l,Mr,i),n(l,Ft,i),t(Ft,Ut),t(Ut,at),t(at,qe),t(qe,dd),t(at,Je),t(Je,sd),t(at,Ge),t(Ge,id),t(Ut,dt),t(dt,He),t(He,nd),t(dt,E),t(E,fd),t(E,bd),t(E,cd),t(E,ud),t(E,Od),t(E,Ed),t(E,hd),t(E,Rd),t(E,pd),t(E,_d),t(E,vd),t(E,yd),t(E,Td),t(E,md),t(E,wd),t(E,Bd),t(E,Dd),t(E,Md),t(E,Id),t(dt,Ke),t(Ke,xd),n(l,Ir,i),n(l,$t,i),t($t,kd),n(l,xr,i),n(l,Wt,i),t(Wt,Zt),t(Zt,st),t(st,Qe),t(Qe,Ld),t(st,Ve),t(Ve,Pd),t(st,Xe),t(Xe,Ad),t(Zt,it),t(it,ge),t(ge,jd),t(it,u),t(u,Nd),t(u,Sd),t(u,Yd),t(u,zd),t(u,Cd),t(u,Fd),t(u,Ud),t(u,$d),t(u,Wd),t(u,Zd),t(u,qd),t(u,Jd),t(u,Gd),t(u,Hd),t(u,Kd),t(u,Qd),t(u,Vd),t(u,Xd),t(u,gd),t(u,ts),t(u,es),t(it,tr),t(tr,rs),n(l,kr,i),n(l,qt,i),t(qt,ls),n(l,Lr,i),n(l,Jt,i),t(Jt,Gt),t(Gt,nt),t(nt,er),t(er,os),t(nt,rr),t(rr,as),t(nt,lr),t(lr,ds),t(Gt,ft),t(ft,Pr),t(ft,O),t(O,ss),t(O,is),t(O,ns),t(O,fs),t(O,bs),t(O,cs),t(O,us),t(O,Os),t(O,Es),t(O,hs),t(O,Rs),t(O,ps),t(O,_s),t(O,vs),t(O,ys),t(O,Ts),t(O,ms),t(O,ws),t(O,Bs),t(O,Ds),t(O,Ms),t(ft,or),t(or,Is),n(l,Ar,i),n(l,Ht,i),t(Ht,xs),n(l,jr,i),n(l,Kt,i),t(Kt,ks),n(l,Nr,i),n(l,Qt,i),t(Qt,Ls),n(l,Sr,i),n(l,Vt,i),t(Vt,Ps),n(l,Yr,i),n(l,Xt,i),t(Xt,As),n(l,zr,i),n(l,gt,i),t(gt,js),n(l,Cr,i),n(l,te,i),t(te,Ns)},d(l){l&&o(c),l&&o(A),l&&o(F),l&&o(ar),l&&o(I),l&&o(dr),l&&o(ct),l&&o(sr),l&&o(ut),l&&o(ir),l&&o(Ot),l&&o(fr),l&&o(ht),l&&o(br),l&&o(Rt),l&&o(cr),l&&o(pt),l&&o(ur),l&&o(_t),l&&o(Or),l&&o(yt),l&&o(Er),l&&o(Tt),l&&o(hr),l&&o(wt),l&&o(Rr),l&&o(Bt),l&&o(pr),l&&o(Mt),l&&o(_r),l&&o(It),l&&o(vr),l&&o(kt),l&&o(yr),l&&o(Lt),l&&o(Tr),l&&o(At),l&&o(mr),l&&o(jt),l&&o(wr),l&&o(St),l&&o(Br),l&&o(Yt),l&&o(Dr),l&&o(Ct),l&&o(Mr),l&&o(Ft),l&&o(Ir),l&&o($t),l&&o(xr),l&&o(Wt),l&&o(kr),l&&o(qt),l&&o(Lr),l&&o(Jt),l&&o(Ar),l&&o(Ht),l&&o(jr),l&&o(Kt),l&&o(Nr),l&&o(Qt),l&&o(Sr),l&&o(Vt),l&&o(Yr),l&&o(Xt),l&&o(zr),l&&o(gt),l&&o(Cr),l&&o(te)}}}function Kn(bt){let c,S;const k=[bt[0],Sn];let $={$$slots:{default:[Hn]},$$scope:{ctx:bt}};for(let v=0;v<k.length;v+=1)$=Gs($,k[v]);return c=new Gn({props:$}),{c(){Fn(c.$$.fragment)},l(v){Un(c.$$.fragment,v)},m(v,A){$n(c,v,A),S=!0},p(v,[A]){const F=A&1?Wn(k,[A&1&&An(v[0]),A&0&&An(Sn)]):{};A&2&&(F.$$scope={dirty:A,ctx:v}),c.$set(F)},i(v){S||(Zn(c.$$.fragment,v),S=!0)},o(v){qn(c.$$.fragment,v),S=!1},d(v){Jn(c,v)}}}const Sn={draft:!1,title:"compression",date:"2022-02-13",coverImage:"compression.jpg",desc:"TODO",tags:["todo"]};function Qn(bt,c,S){return bt.$$set=k=>{S(0,c=Gs(Gs({},c),jn(k)))},c=jn(c),[c]}class r1 extends Yn{constructor(c){super();zn(this,c,Qn,Kn,Cn,{})}}export{r1 as default,Sn as metadata};