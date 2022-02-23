import{S as ao,i as so,s as no,C as St,w as io,x as uo,y as ro,z as fo,A as Zt,q as co,o as ho,B as po,U as eo,e as s,t as l,k as c,c as n,a as i,h as a,d as t,m as h,b as R,g as u,F as o,H as yo}from"../../../chunks/vendor-f73903c8.js";import{P as wo}from"../../../chunks/post-68c71ca3.js";import"../../../chunks/stores-233b7d65.js";import"../../../chunks/Progress-9db5e1e4.js";/* empty css                                      */function mo(I){let r,m,y,U,f,p,Y,ie,g,Te,ue,j,De,re,A,Ne,fe,C,Le,T,Re,Ie,ce,O,Ye,D,ge,je,he,_,Ae,K,Be,He,z,Me,Fe,pe,P,$e,G,We,qe,ye,B,Ke,we,H,ze,me,N,Ge,J,Je,_e,b,Qe,Q,Ve,Xe,V,Ze,et,be,L,oo=`<code class="language-undefined">@ECHO OFF
SET uid=SOUNDCLOUD_USERNAME
SET dest=PATH_TO_YOUR_MUSIC_FOLDER%uid% soundcloud likesECHO saving in %dest%
SET ytStr=&quot;%dest%%%(uploader)s - %%(title)s (%%(id)s).%%(ext)s&quot;
ECHO %ytStr%
START youtube-dl.exe https://soundcloud.com/%uid%/likes --output %ytStr% -ciw</code>`,Ee,E,tt,X,ot,lt,Z,at,dt,ve,v,st,ee,nt,it,te,ut,rt,ke,w,ft,oe,ct,ht,le,pt,yt,ae,wt,mt,Ce,x,_t,de,bt,Et,Oe,k,vt,se,kt,Ct,ne,Ot,Pt;return{c(){r=s("p"),m=l("SoundCloud is notorious for having songs deleted - often by the original uploader. Most of these songs are not easily found elsewhere on the internet. To download them, you can use a very powerful free tool: "),y=s("a"),U=l("youtube-dl"),f=c(),p=s("p"),Y=l("On Windows, you can just download the exe. If you double-click on the file, it will just have a black window popup and then close; that\u2019s because it\u2019s a command line tool. To use it properly, you can either use the Command Prompt (press the windows key, then type \u201Ccmd\u201D), or my preference, PowerShell (windows key, then type \u201Cpowershell\u201D)."),ie=c(),g=s("p"),Te=l("Now if you drag the exe file onto the terminal and press enter, you\u2019ll see:"),ue=c(),j=s("p"),De=l("Usage: youtube-dl.exe [OPTIONS] URL [URL\u2026]"),re=c(),A=s("p"),Ne=l(`youtube-dl.exe: error: You must provide at least one URL.
Type youtube-dl \u2013help to see a list of all options.`),fe=c(),C=s("p"),Le=l("That\u2019s because you need to give it a URL to download. In our case, we want to use our SoundCloud Likes playlist. Checkout the huge list of "),T=s("a"),Re=l("supported sites"),Ie=l("; basically everything but paid streaming sites like Netflix etc."),ce=c(),O=s("p"),Ye=l("My SoundCloud likes are at "),D=s("a"),ge=l("https://soundcloud.com/IHTFY/likes"),je=l(", so you would just need to change your user ID."),he=c(),_=s("p"),Ae=l("Before you do that, where are the files going to be downloaded to? By default, the terminal opens to "),K=s("code"),Be=l("C:\\Users\\YourName"),He=l(". If you want to download to a different folder, you could make one (or find an existing one) and navigate your terminal to it using the "),z=s("code"),Me=l("cd"),Fe=l(" command which stands for \u201Cchange directory\u201D."),pe=c(),P=s("p"),$e=l("Type "),G=s("code"),We=l("cd"),qe=l(" then add a space and then drag the folder onto the terminal. Press enter, and you\u2019ll see the pwd (present working directory) is now the location of that folder."),ye=c(),B=s("p"),Ke=l("Now, if you were to drag the youtube-dl.exe onto the terminal, add a space, then add the SoundCloud Likes URL, it would start downloading all of your liked songs into that folder."),we=c(),H=s("p"),ze=l("There\u2019s a bit more we can do to automate this. We could make a batch file (.bat) that when double-clicked, automatically downloads all of your likes to the specified folder."),me=c(),N=s("p"),Ge=l("Create a new text file, and name it "),J=s("code"),Je=l("SCBackup.bat"),_e=c(),b=s("p"),Qe=l("Add the following code inside the file, replacing "),Q=s("code"),Ve=l("SOUNDCLOUD_USERNAME"),Xe=l(" and "),V=s("code"),Ze=l("PATH_TO_YOUR_MUSIC_FOLDER"),et=l("."),be=c(),L=s("pre"),Ee=c(),E=s("p"),tt=l("You also need to change the "),X=s("code"),ot=l("youtube-dl.exe"),lt=l(" to the full path of the exe, or you can add "),Z=s("code"),at=l("youtube-dl"),dt=l(" to your Windows Path."),ve=c(),v=s("p"),st=l("Press Windows key, then type \u201Cenvironment\u201D. You should see \u201CEdit environment variables for your account\u201D. Click that, and it will open up a window with 2 tables. In the top one, User variables, click the "),ee=s("code"),nt=l("Path"),it=l(" variable, then click "),te=s("code"),ut=l("Edit..."),rt=l("."),ke=c(),w=s("p"),ft=l("Next, you want to add the folder that contains the "),oe=s("code"),ct=l("youtube-dl.exe"),ht=l(" file. Click "),le=s("code"),pt=l("Browse"),yt=l(", and find that folder, then click "),ae=s("code"),wt=l("OK"),mt=l(" to close each window."),Ce=c(),x=s("p"),_t=l("Now the terminal will be able to find "),de=s("code"),bt=l("youtube-dl.exe"),Et=l(", and you can refer to it without using the full path to the file."),Oe=c(),k=s("p"),vt=l("Now, you can periodically run that file to download your liked songs from SoundCloud. By default, "),se=s("code"),kt=l("youtube-dl"),Ct=l(" will download from newest to oldest, so once you start seeing \u201D\u2026 has already been downloaded\u201D, you can stop the script by closing the window. Note, you\u2019ll want to keep all your songs in that folder so that "),ne=s("code"),Ot=l("youtube-dl"),Pt=l(" can tell when it\u2019s already downloaded a file; there\u2019s no other history built in."),this.h()},l(e){r=n(e,"P",{});var d=i(r);m=a(d,"SoundCloud is notorious for having songs deleted - often by the original uploader. Most of these songs are not easily found elsewhere on the internet. To download them, you can use a very powerful free tool: "),y=n(d,"A",{href:!0,rel:!0});var Ut=i(y);U=a(Ut,"youtube-dl"),Ut.forEach(t),d.forEach(t),f=h(e),p=n(e,"P",{});var Tt=i(p);Y=a(Tt,"On Windows, you can just download the exe. If you double-click on the file, it will just have a black window popup and then close; that\u2019s because it\u2019s a command line tool. To use it properly, you can either use the Command Prompt (press the windows key, then type \u201Ccmd\u201D), or my preference, PowerShell (windows key, then type \u201Cpowershell\u201D)."),Tt.forEach(t),ie=h(e),g=n(e,"P",{});var Dt=i(g);Te=a(Dt,"Now if you drag the exe file onto the terminal and press enter, you\u2019ll see:"),Dt.forEach(t),ue=h(e),j=n(e,"P",{});var Nt=i(j);De=a(Nt,"Usage: youtube-dl.exe [OPTIONS] URL [URL\u2026]"),Nt.forEach(t),re=h(e),A=n(e,"P",{});var Lt=i(A);Ne=a(Lt,`youtube-dl.exe: error: You must provide at least one URL.
Type youtube-dl \u2013help to see a list of all options.`),Lt.forEach(t),fe=h(e),C=n(e,"P",{});var Pe=i(C);Le=a(Pe,"That\u2019s because you need to give it a URL to download. In our case, we want to use our SoundCloud Likes playlist. Checkout the huge list of "),T=n(Pe,"A",{href:!0,rel:!0});var Rt=i(T);Re=a(Rt,"supported sites"),Rt.forEach(t),Ie=a(Pe,"; basically everything but paid streaming sites like Netflix etc."),Pe.forEach(t),ce=h(e),O=n(e,"P",{});var xe=i(O);Ye=a(xe,"My SoundCloud likes are at "),D=n(xe,"A",{href:!0,rel:!0});var It=i(D);ge=a(It,"https://soundcloud.com/IHTFY/likes"),It.forEach(t),je=a(xe,", so you would just need to change your user ID."),xe.forEach(t),he=h(e),_=n(e,"P",{});var M=i(_);Ae=a(M,"Before you do that, where are the files going to be downloaded to? By default, the terminal opens to "),K=n(M,"CODE",{});var Yt=i(K);Be=a(Yt,"C:\\Users\\YourName"),Yt.forEach(t),He=a(M,". If you want to download to a different folder, you could make one (or find an existing one) and navigate your terminal to it using the "),z=n(M,"CODE",{});var gt=i(z);Me=a(gt,"cd"),gt.forEach(t),Fe=a(M," command which stands for \u201Cchange directory\u201D."),M.forEach(t),pe=h(e),P=n(e,"P",{});var Se=i(P);$e=a(Se,"Type "),G=n(Se,"CODE",{});var jt=i(G);We=a(jt,"cd"),jt.forEach(t),qe=a(Se," then add a space and then drag the folder onto the terminal. Press enter, and you\u2019ll see the pwd (present working directory) is now the location of that folder."),Se.forEach(t),ye=h(e),B=n(e,"P",{});var At=i(B);Ke=a(At,"Now, if you were to drag the youtube-dl.exe onto the terminal, add a space, then add the SoundCloud Likes URL, it would start downloading all of your liked songs into that folder."),At.forEach(t),we=h(e),H=n(e,"P",{});var Bt=i(H);ze=a(Bt,"There\u2019s a bit more we can do to automate this. We could make a batch file (.bat) that when double-clicked, automatically downloads all of your likes to the specified folder."),Bt.forEach(t),me=h(e),N=n(e,"P",{});var xt=i(N);Ge=a(xt,"Create a new text file, and name it "),J=n(xt,"CODE",{});var Ht=i(J);Je=a(Ht,"SCBackup.bat"),Ht.forEach(t),xt.forEach(t),_e=h(e),b=n(e,"P",{});var F=i(b);Qe=a(F,"Add the following code inside the file, replacing "),Q=n(F,"CODE",{});var Mt=i(Q);Ve=a(Mt,"SOUNDCLOUD_USERNAME"),Mt.forEach(t),Xe=a(F," and "),V=n(F,"CODE",{});var Ft=i(V);Ze=a(Ft,"PATH_TO_YOUR_MUSIC_FOLDER"),Ft.forEach(t),et=a(F,"."),F.forEach(t),be=h(e),L=n(e,"PRE",{class:!0});var lo=i(L);lo.forEach(t),Ee=h(e),E=n(e,"P",{});var $=i(E);tt=a($,"You also need to change the "),X=n($,"CODE",{});var $t=i(X);ot=a($t,"youtube-dl.exe"),$t.forEach(t),lt=a($," to the full path of the exe, or you can add "),Z=n($,"CODE",{});var Wt=i(Z);at=a(Wt,"youtube-dl"),Wt.forEach(t),dt=a($," to your Windows Path."),$.forEach(t),ve=h(e),v=n(e,"P",{});var W=i(v);st=a(W,"Press Windows key, then type \u201Cenvironment\u201D. You should see \u201CEdit environment variables for your account\u201D. Click that, and it will open up a window with 2 tables. In the top one, User variables, click the "),ee=n(W,"CODE",{});var qt=i(ee);nt=a(qt,"Path"),qt.forEach(t),it=a(W," variable, then click "),te=n(W,"CODE",{});var Kt=i(te);ut=a(Kt,"Edit..."),Kt.forEach(t),rt=a(W,"."),W.forEach(t),ke=h(e),w=n(e,"P",{});var S=i(w);ft=a(S,"Next, you want to add the folder that contains the "),oe=n(S,"CODE",{});var zt=i(oe);ct=a(zt,"youtube-dl.exe"),zt.forEach(t),ht=a(S," file. Click "),le=n(S,"CODE",{});var Gt=i(le);pt=a(Gt,"Browse"),Gt.forEach(t),yt=a(S,", and find that folder, then click "),ae=n(S,"CODE",{});var Jt=i(ae);wt=a(Jt,"OK"),Jt.forEach(t),mt=a(S," to close each window."),S.forEach(t),Ce=h(e),x=n(e,"P",{});var Ue=i(x);_t=a(Ue,"Now the terminal will be able to find "),de=n(Ue,"CODE",{});var Qt=i(de);bt=a(Qt,"youtube-dl.exe"),Qt.forEach(t),Et=a(Ue,", and you can refer to it without using the full path to the file."),Ue.forEach(t),Oe=h(e),k=n(e,"P",{});var q=i(k);vt=a(q,"Now, you can periodically run that file to download your liked songs from SoundCloud. By default, "),se=n(q,"CODE",{});var Vt=i(se);kt=a(Vt,"youtube-dl"),Vt.forEach(t),Ct=a(q," will download from newest to oldest, so once you start seeing \u201D\u2026 has already been downloaded\u201D, you can stop the script by closing the window. Note, you\u2019ll want to keep all your songs in that folder so that "),ne=n(q,"CODE",{});var Xt=i(ne);Ot=a(Xt,"youtube-dl"),Xt.forEach(t),Pt=a(q," can tell when it\u2019s already downloaded a file; there\u2019s no other history built in."),q.forEach(t),this.h()},h(){R(y,"href","https://ytdl-org.github.io/youtube-dl/download.html"),R(y,"rel","nofollow"),R(T,"href","https://ytdl-org.github.io/youtube-dl/supportedsites.html"),R(T,"rel","nofollow"),R(D,"href","https://soundcloud.com/IHTFY/likes"),R(D,"rel","nofollow"),R(L,"class","language-undefined")},m(e,d){u(e,r,d),o(r,m),o(r,y),o(y,U),u(e,f,d),u(e,p,d),o(p,Y),u(e,ie,d),u(e,g,d),o(g,Te),u(e,ue,d),u(e,j,d),o(j,De),u(e,re,d),u(e,A,d),o(A,Ne),u(e,fe,d),u(e,C,d),o(C,Le),o(C,T),o(T,Re),o(C,Ie),u(e,ce,d),u(e,O,d),o(O,Ye),o(O,D),o(D,ge),o(O,je),u(e,he,d),u(e,_,d),o(_,Ae),o(_,K),o(K,Be),o(_,He),o(_,z),o(z,Me),o(_,Fe),u(e,pe,d),u(e,P,d),o(P,$e),o(P,G),o(G,We),o(P,qe),u(e,ye,d),u(e,B,d),o(B,Ke),u(e,we,d),u(e,H,d),o(H,ze),u(e,me,d),u(e,N,d),o(N,Ge),o(N,J),o(J,Je),u(e,_e,d),u(e,b,d),o(b,Qe),o(b,Q),o(Q,Ve),o(b,Xe),o(b,V),o(V,Ze),o(b,et),u(e,be,d),u(e,L,d),L.innerHTML=oo,u(e,Ee,d),u(e,E,d),o(E,tt),o(E,X),o(X,ot),o(E,lt),o(E,Z),o(Z,at),o(E,dt),u(e,ve,d),u(e,v,d),o(v,st),o(v,ee),o(ee,nt),o(v,it),o(v,te),o(te,ut),o(v,rt),u(e,ke,d),u(e,w,d),o(w,ft),o(w,oe),o(oe,ct),o(w,ht),o(w,le),o(le,pt),o(w,yt),o(w,ae),o(ae,wt),o(w,mt),u(e,Ce,d),u(e,x,d),o(x,_t),o(x,de),o(de,bt),o(x,Et),u(e,Oe,d),u(e,k,d),o(k,vt),o(k,se),o(se,kt),o(k,Ct),o(k,ne),o(ne,Ot),o(k,Pt)},p:yo,d(e){e&&t(r),e&&t(f),e&&t(p),e&&t(ie),e&&t(g),e&&t(ue),e&&t(j),e&&t(re),e&&t(A),e&&t(fe),e&&t(C),e&&t(ce),e&&t(O),e&&t(he),e&&t(_),e&&t(pe),e&&t(P),e&&t(ye),e&&t(B),e&&t(we),e&&t(H),e&&t(me),e&&t(N),e&&t(_e),e&&t(b),e&&t(be),e&&t(L),e&&t(Ee),e&&t(E),e&&t(ve),e&&t(v),e&&t(ke),e&&t(w),e&&t(Ce),e&&t(x),e&&t(Oe),e&&t(k)}}}function _o(I){let r,m;const y=[I[0],to];let U={$$slots:{default:[mo]},$$scope:{ctx:I}};for(let f=0;f<y.length;f+=1)U=St(U,y[f]);return r=new wo({props:U}),{c(){io(r.$$.fragment)},l(f){uo(r.$$.fragment,f)},m(f,p){ro(r,f,p),m=!0},p(f,[p]){const Y=p&1?fo(y,[p&1&&Zt(f[0]),p&0&&Zt(to)]):{};p&2&&(Y.$$scope={dirty:p,ctx:f}),r.$set(Y)},i(f){m||(co(r.$$.fragment,f),m=!0)},o(f){ho(r.$$.fragment,f),m=!1},d(f){po(r,f)}}}const to={draft:!1,title:"soundcloud likes",date:"2022-02-03",coverImage:"soundcloud-likes.jpg",desc:"TODO",tags:["todo"]};function bo(I,r,m){return I.$$set=y=>{m(0,r=St(St({},r),eo(y)))},r=eo(r),[r]}class Po extends ao{constructor(r){super();so(this,r,bo,_o,no,{})}}export{Po as default,to as metadata};