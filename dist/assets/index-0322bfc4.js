import{i as Ms,a as xo,D as aa,B as Ls}from"./install-6163e576.js";import{_ as yt,i as Ds,e as Ns,g as Ps,m as Is,A as Os,M as gi,c as Bs,n as Fs,u as Lt,a as yr,b as Dn,d as Nn,f as Pn,h as In,j as Pi,k as Zt,P as Us,l as _n,o as Rt,p as To,B as Hs,q as kt,r as Ii,s as zs,S as oa,R as Oi,t as Ze,T as Gs,v as Vs,w as Vr,x as Bi,y as Ke,z as Ae,C as Nr,D as Gn,E as ks,F as sa,G as la,H as Vn,I as Ws,J as Xs,K as qs,L as ua,N as js,O as Zs,Q as Eo,U as Ys,V as Ks,W as $s,X as Qs,Y as Js,Z as el,$ as tl,a0 as rl,a1 as Xr,a2 as fa,a3 as nl,a4 as il,a5 as al,a6 as ol,a7 as sl,a8 as ll,a9 as ul,aa as mt,ab as fl,ac as pn,ad as mn,ae as cl,af as hl,ag as dl,ah as Ao,ai as vl,aj as _l,ak as So,al as bo,am as wo,an as pl,ao as ml,ap as gl,aq as yl}from"./installCanvasRenderer-219d180f.js";import{o as Le,c as De,r as xl,p as Co,a as Ro,b as ie,d as Dt,e as Vt,f as Yt,g as Tl,w as qr,n as cr,h as jr,F as kn,i as Wn,t as Xn,j as El,k as Ie,l as ca,u as Zr}from"./index-420763e9.js";import{i as xr,a as Mo,b as Al,u as Sl,_ as er}from"./resize-5a850696.js";const bl={},wl=e=>(Co("data-v-407cb4fa"),e=e(),Ro(),e),Cl={class:"borderBox3"},Rl=wl(()=>ie("div",{class:"box-footer"},null,-1));function Ml(e,t){return Le(),De("div",Cl,[Rl,xl(e.$slots,"default",{},void 0,!0)])}const Ll=yt(bl,[["render",Ml],["__scopeId","data-v-407cb4fa"]]),Dl={key:0,class:"thead-col thead-idx",style:{flex:"0 0 5rem"}},Nl={key:0,class:"tbody-col tbody-idx",style:{flex:"0 0 5rem"}},Pl={name:"ScrollTable"},Il=Dt({...Pl,props:{data:null,columnFlex:null,header:{default:null},showIdx:{type:Boolean,default:!1},animation:{type:Boolean,default:!0},duration:{default:3e3},headerBg:{default:"#002c8a"},oddRowBg:{default:"#010c32"},evenRowBg:{default:"#03184b"},rowNum:{default:7},rowHeightFixed:{default:0}},setup(e){const t=e,r=Vt(null),n=Vt(null),i=Vt(t.rowHeightFixed),a=Vt(t.data.map((d,h)=>({data:[...d],idx:h+1}))),o=Vt(0);let s=null;function l(){i.value||(i.value=r.value.clientHeight/t.rowNum)}function u(){t.data.length>t.rowNum&&(a.value=[...a.value,...a.value],s=window.setInterval(()=>{o.value++,o.value===t.data.length&&setTimeout(()=>{f(),o.value=0,setTimeout(()=>{c()},100)},500)},t.duration))}function f(){n.value.style.transitionProperty="none"}function c(){n.value.style.transitionProperty="transform"}return Yt(()=>{l(),t.animation&&u()}),Tl(()=>{s&&(clearInterval(s),s=null)}),qr(()=>t.animation,d=>{d?u():s&&(clearInterval(s),s=null)}),qr(()=>t.duration,d=>{d&&t.animation&&(s&&(clearInterval(s),s=null),a.value=t.data.map((h,_)=>({data:[...h],idx:_+1})),u())}),qr(()=>t.rowNum,d=>{d?l():console.error("不能将rowNum设置为0")}),qr(()=>t.data,d=>{d&&d.length>0&&(a.value=d.map((h,_)=>({data:[...h],idx:_+1})),o.value=0,t.animation&&El(()=>{s&&(clearInterval(s),s=null),u()}))}),(d,h)=>(Le(),De("div",{class:"scroll-table",ref_key:"scrollTableRef",ref:r},[e.header&&e.header.length>0?(Le(),De("div",{key:0,class:"thead",style:cr({height:`${i.value}px`,backgroundColor:e.headerBg})},[e.showIdx?(Le(),De("div",Dl," 序号 ")):jr("",!0),(Le(!0),De(kn,null,Wn(e.header,(_,v)=>(Le(),De("div",{key:_,class:"thead-col",style:cr({flex:e.columnFlex[v]||1})},Xn(_),5))),128))],4)):jr("",!0),a.value&&a.value.length>0?(Le(),De("div",{key:1,ref_key:"tbodyRef",ref:n,class:"tbody",style:cr({transform:`translateY(-${i.value*o.value}px)`})},[(Le(!0),De(kn,null,Wn(a.value,(_,v)=>(Le(),De("div",{key:v,class:"tbody-row",style:cr({height:`${i.value}px`,backgroundColor:_.idx&1?e.oddRowBg:e.evenRowBg})},[e.showIdx?(Le(),De("div",Nl,Xn(_.idx),1)):jr("",!0),(Le(!0),De(kn,null,Wn(_.data,(p,m)=>(Le(),De("div",{key:m,class:"tbody-col",style:cr({flex:e.columnFlex[m]||1})},Xn(p),5))),128))],4))),128))],4)):jr("",!0)],512))}});const ha=yt(Il,[["__scopeId","data-v-309e657f"]]);var Fi={isDimensionStacked:Ds,enableDataStack:Ns,getStackedDimension:Ps};function Ol(e,t){var r=t;t instanceof gi||(r=new gi(t));var n=Bs(r);return n.setExtent(e[0],e[1]),Fs(n,r),n}function Bl(e){Is(e,Os)}const Fl={id:"left-bar-chart"},Ul=Dt({__name:"LeftBar",setup(e){return Lt([xr,Dn,Nn,Pn,In,Pi,Zt]),Yt(()=>{var t=document.getElementById("left-bar-chart"),r=yr(t,"dark",{devicePixelRatio:2}),n;n={backgroundColor:"transparent",title:{text:"历年本站发运量"},legend:{top:"12%"},tooltip:{trigger:"item"},xAxis:{type:"category",axisTick:{show:!1}},yAxis:{axisLine:{show:!1},splitLine:{show:!1}},dataset:{source:[["product","转关箱(已审批)","非转关箱"],["Matcha",43.3,85.8],["Milk Tea",83.1,73.4],["Cheese",86.4,65.2],["Walnut",72.4,53.9]]},series:[{type:"bar"},{type:"bar"}]},n&&r.setOption(n)}),(t,r)=>(Le(),De("div",Fl))}});const Hl=yt(Ul,[["__scopeId","data-v-54d6b4e5"]]),zl={id:"left-bar-chart-2"},Gl=Dt({__name:"LeftBar2",setup(e){return Lt([xr,Dn,Nn,In,Pi,Zt]),Yt(()=>{var t=document.getElementById("left-bar-chart-2"),r=yr(t,"dark",{devicePixelRatio:2}),n;n={title:{text:"堆区分布"},backgroundColor:"transparent",grid:{top:"20%",left:"15%",right:"10%",bottom:"10%"},xAxis:{type:"value",splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},yAxis:{type:"category",data:["B箱区","Q箱区"],axisTick:{show:!1},axisLine:{show:!1}},series:[{data:[120,200],type:"bar",showBackground:!0,backgroundStyle:{borderRadius:25},label:{show:!0,position:"right",color:"#4e84a1",fontSize:14,formatter:"{c}"},itemStyle:{borderRadius:25,color:"#3facff"}}]},n&&r.setOption(n)}),(t,r)=>(Le(),De("div",zl))}});const Vl=yt(Gl,[["__scopeId","data-v-3e3e77e4"]]);var ut=Us.CMD;function hr(e,t){return Math.abs(e-t)<1e-5}function yi(e){var t=e.data,r=e.len(),n=[],i,a=0,o=0,s=0,l=0;function u(O,M){i&&i.length>2&&n.push(i),i=[O,M]}function f(O,M,U,F){hr(O,U)&&hr(M,F)||i.push(O,M,U,F,U,F)}function c(O,M,U,F,G,K){var ae=Math.abs(M-O),de=Math.tan(ae/4)*4/3,le=M<O?-1:1,Se=Math.cos(O),xe=Math.sin(O),Me=Math.cos(M),Ue=Math.sin(M),He=Se*G+U,It=xe*K+F,Je=Me*G+U,vt=Ue*K+F,At=G*de*le,Jt=K*de*le;i.push(He-At*xe,It+Jt*Se,Je+At*Ue,vt-Jt*Me,Je,vt)}for(var d,h,_,v,p=0;p<r;){var m=t[p++],x=p===1;switch(x&&(a=t[p],o=t[p+1],s=a,l=o,(m===ut.L||m===ut.C||m===ut.Q)&&(i=[s,l])),m){case ut.M:a=s=t[p++],o=l=t[p++],u(s,l);break;case ut.L:d=t[p++],h=t[p++],f(a,o,d,h),a=d,o=h;break;case ut.C:i.push(t[p++],t[p++],t[p++],t[p++],a=t[p++],o=t[p++]);break;case ut.Q:d=t[p++],h=t[p++],_=t[p++],v=t[p++],i.push(a+2/3*(d-a),o+2/3*(h-o),_+2/3*(d-_),v+2/3*(h-v),_,v),a=_,o=v;break;case ut.A:var g=t[p++],y=t[p++],E=t[p++],T=t[p++],S=t[p++],b=t[p++]+S;p+=1;var w=!t[p++];d=Math.cos(S)*E+g,h=Math.sin(S)*T+y,x?(s=d,l=h,u(s,l)):f(a,o,d,h),a=Math.cos(b)*E+g,o=Math.sin(b)*T+y;for(var L=(w?-1:1)*Math.PI/2,R=S;w?R>b:R<b;R+=L){var D=w?Math.max(R+L,b):Math.min(R+L,b);c(R,D,g,y,E,T)}break;case ut.R:s=a=t[p++],l=o=t[p++],d=s+t[p++],h=l+t[p++],u(d,l),f(d,l,d,h),f(d,h,s,h),f(s,h,s,l),f(s,l,d,l);break;case ut.Z:i&&f(a,o,s,l),a=s,o=l;break}}return i&&i.length>2&&n.push(i),n}function xi(e,t,r,n,i,a,o,s,l,u){if(hr(e,r)&&hr(t,n)&&hr(i,o)&&hr(a,s)){l.push(o,s);return}var f=2/u,c=f*f,d=o-e,h=s-t,_=Math.sqrt(d*d+h*h);d/=_,h/=_;var v=r-e,p=n-t,m=i-o,x=a-s,g=v*v+p*p,y=m*m+x*x;if(g<c&&y<c){l.push(o,s);return}var E=d*v+h*p,T=-d*m-h*x,S=g-E*E,b=y-T*T;if(S<c&&E>=0&&b<c&&T>=0){l.push(o,s);return}var w=[],L=[];_n(e,r,i,o,.5,w),_n(t,n,a,s,.5,L),xi(w[0],L[0],w[1],L[1],w[2],L[2],w[3],L[3],l,u),xi(w[4],L[4],w[5],L[5],w[6],L[6],w[7],L[7],l,u)}function kl(e,t){var r=yi(e),n=[];t=t||1;for(var i=0;i<r.length;i++){var a=r[i],o=[],s=a[0],l=a[1];o.push(s,l);for(var u=2;u<a.length;){var f=a[u++],c=a[u++],d=a[u++],h=a[u++],_=a[u++],v=a[u++];xi(s,l,f,c,d,h,_,v,o,t),s=_,l=v}n.push(o)}return n}function Lo(e,t,r){var n=e[t],i=e[1-t],a=Math.abs(n/i),o=Math.ceil(Math.sqrt(a*r)),s=Math.floor(r/o);s===0&&(s=1,o=r);for(var l=[],u=0;u<o;u++)l.push(s);var f=o*s,c=r-f;if(c>0)for(var u=0;u<c;u++)l[u%o]+=1;return l}function da(e,t,r){for(var n=e.r0,i=e.r,a=e.startAngle,o=e.endAngle,s=Math.abs(o-a),l=s*i,u=i-n,f=l>Math.abs(u),c=Lo([l,u],f?0:1,t),d=(f?s:u)/c.length,h=0;h<c.length;h++)for(var _=(f?u:s)/c[h],v=0;v<c[h];v++){var p={};f?(p.startAngle=a+d*h,p.endAngle=a+d*(h+1),p.r0=n+_*v,p.r=n+_*(v+1)):(p.startAngle=a+_*v,p.endAngle=a+_*(v+1),p.r0=n+d*h,p.r=n+d*(h+1)),p.clockwise=e.clockwise,p.cx=e.cx,p.cy=e.cy,r.push(p)}}function Wl(e,t,r){for(var n=e.width,i=e.height,a=n>i,o=Lo([n,i],a?0:1,t),s=a?"width":"height",l=a?"height":"width",u=a?"x":"y",f=a?"y":"x",c=e[s]/o.length,d=0;d<o.length;d++)for(var h=e[l]/o[d],_=0;_<o[d];_++){var v={};v[u]=d*c,v[f]=_*h,v[s]=c,v[l]=h,v.x+=e.x,v.y+=e.y,r.push(v)}}function va(e,t,r,n){return e*n-r*t}function Xl(e,t,r,n,i,a,o,s){var l=r-e,u=n-t,f=o-i,c=s-a,d=va(f,c,l,u);if(Math.abs(d)<1e-6)return null;var h=e-i,_=t-a,v=va(h,_,f,c)/d;return v<0||v>1?null:new kt(v*l+e,v*u+t)}function ql(e,t,r){var n=new kt;kt.sub(n,r,t),n.normalize();var i=new kt;kt.sub(i,e,t);var a=i.dot(n);return a}function tr(e,t){var r=e[e.length-1];r&&r[0]===t[0]&&r[1]===t[1]||e.push(t)}function jl(e,t,r){for(var n=e.length,i=[],a=0;a<n;a++){var o=e[a],s=e[(a+1)%n],l=Xl(o[0],o[1],s[0],s[1],t.x,t.y,r.x,r.y);l&&i.push({projPt:ql(l,t,r),pt:l,idx:a})}if(i.length<2)return[{points:e},{points:e}];i.sort(function(p,m){return p.projPt-m.projPt});var u=i[0],f=i[i.length-1];if(f.idx<u.idx){var c=u;u=f,f=c}for(var d=[u.pt.x,u.pt.y],h=[f.pt.x,f.pt.y],_=[d],v=[h],a=u.idx+1;a<=f.idx;a++)tr(_,e[a].slice());tr(_,h),tr(_,d);for(var a=f.idx+1;a<=u.idx+n;a++)tr(v,e[a%n].slice());return tr(v,d),tr(v,h),[{points:_},{points:v}]}function _a(e){var t=e.points,r=[],n=[];To(t,r,n);var i=new Hs(r[0],r[1],n[0]-r[0],n[1]-r[1]),a=i.width,o=i.height,s=i.x,l=i.y,u=new kt,f=new kt;return a>o?(u.x=f.x=s+a/2,u.y=l,f.y=l+o):(u.y=f.y=l+o/2,u.x=s,f.x=s+a),jl(t,u,f)}function gn(e,t,r,n){if(r===1)n.push(t);else{var i=Math.floor(r/2),a=e(t);gn(e,a[0],i,n),gn(e,a[1],r-i,n)}return n}function Zl(e,t){for(var r=[],n=0;n<t;n++)r.push(Ii(e));return r}function Yl(e,t){t.setStyle(e.style),t.z=e.z,t.z2=e.z2,t.zlevel=e.zlevel}function Kl(e){for(var t=[],r=0;r<e.length;)t.push([e[r++],e[r++]]);return t}function $l(e,t){var r=[],n=e.shape,i;switch(e.type){case"rect":Wl(n,t,r),i=Oi;break;case"sector":da(n,t,r),i=oa;break;case"circle":da({r0:0,r:n.r,startAngle:0,endAngle:Math.PI*2,cx:n.cx,cy:n.cy},t,r),i=oa;break;default:var a=e.getComputedTransform(),o=a?Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1],a[2]*a[2]+a[3]*a[3])):1,s=Rt(kl(e.getUpdatedPathProxy(),o),function(m){return Kl(m)}),l=s.length;if(l===0)gn(_a,{points:s[0]},t,r);else if(l===t)for(var u=0;u<l;u++)r.push({points:s[u]});else{var f=0,c=Rt(s,function(m){var x=[],g=[];To(m,x,g);var y=(g[1]-x[1])*(g[0]-x[0]);return f+=y,{poly:m,area:y}});c.sort(function(m,x){return x.area-m.area});for(var d=t,u=0;u<l;u++){var h=c[u];if(d<=0)break;var _=u===l-1?d:Math.ceil(h.area/f*t);_<0||(gn(_a,{points:h.poly},_,r),d-=_)}}i=zs;break}if(!i)return Zl(e,t);for(var v=[],u=0;u<r.length;u++){var p=new i;p.setShape(r[u]),Yl(e,p),v.push(p)}return v}function Ql(e,t){var r=e.length,n=t.length;if(r===n)return[e,t];for(var i=[],a=[],o=r<n?e:t,s=Math.min(r,n),l=Math.abs(n-r)/6,u=(s-2)/6,f=Math.ceil(l/u)+1,c=[o[0],o[1]],d=l,h=2;h<s;){var _=o[h-2],v=o[h-1],p=o[h++],m=o[h++],x=o[h++],g=o[h++],y=o[h++],E=o[h++];if(d<=0){c.push(p,m,x,g,y,E);continue}for(var T=Math.min(d,f-1)+1,S=1;S<=T;S++){var b=S/T;_n(_,p,x,y,b,i),_n(v,m,g,E,b,a),_=i[3],v=a[3],c.push(i[1],a[1],i[2],a[2],_,v),p=i[5],m=a[5],x=i[6],g=a[6]}d-=T-1}return o===e?[c,t]:[e,c]}function pa(e,t){for(var r=e.length,n=e[r-2],i=e[r-1],a=[],o=0;o<t.length;)a[o++]=n,a[o++]=i;return a}function Jl(e,t){for(var r,n,i,a=[],o=[],s=0;s<Math.max(e.length,t.length);s++){var l=e[s],u=t[s],f=void 0,c=void 0;l?u?(r=Ql(l,u),f=r[0],c=r[1],n=f,i=c):(c=pa(i||l,l),f=l):(f=pa(n||u,u),c=u),a.push(f),o.push(c)}return[a,o]}function ma(e){for(var t=0,r=0,n=0,i=e.length,a=0,o=i-2;a<i;o=a,a+=2){var s=e[o],l=e[o+1],u=e[a],f=e[a+1],c=s*f-u*l;t+=c,r+=(s+u)*c,n+=(l+f)*c}return t===0?[e[0]||0,e[1]||0]:[r/t/3,n/t/3,t]}function eu(e,t,r,n){for(var i=(e.length-2)/6,a=1/0,o=0,s=e.length,l=s-2,u=0;u<i;u++){for(var f=u*6,c=0,d=0;d<s;d+=2){var h=d===0?f:(f+d-2)%l+2,_=e[h]-r[0],v=e[h+1]-r[1],p=t[d]-n[0],m=t[d+1]-n[1],x=p-_,g=m-v;c+=x*x+g*g}c<a&&(a=c,o=u)}return o}function tu(e){for(var t=[],r=e.length,n=0;n<r;n+=2)t[n]=e[r-n-2],t[n+1]=e[r-n-1];return t}function ru(e,t,r,n){for(var i=[],a,o=0;o<e.length;o++){var s=e[o],l=t[o],u=ma(s),f=ma(l);a==null&&(a=u[2]<0!=f[2]<0);var c=[],d=[],h=0,_=1/0,v=[],p=s.length;a&&(s=tu(s));for(var m=eu(s,l,u,f)*6,x=p-2,g=0;g<x;g+=2){var y=(m+g)%x+2;c[g+2]=s[y]-u[0],c[g+3]=s[y+1]-u[1]}if(c[0]=s[m]-u[0],c[1]=s[m+1]-u[1],r>0)for(var E=n/r,T=-n/2;T<=n/2;T+=E){for(var S=Math.sin(T),b=Math.cos(T),w=0,g=0;g<s.length;g+=2){var L=c[g],R=c[g+1],D=l[g]-f[0],O=l[g+1]-f[1],M=D*b-O*S,U=D*S+O*b;v[g]=M,v[g+1]=U;var F=M-L,G=U-R;w+=F*F+G*G}if(w<_){_=w,h=T;for(var K=0;K<v.length;K++)d[K]=v[K]}}else for(var ae=0;ae<p;ae+=2)d[ae]=l[ae]-f[0],d[ae+1]=l[ae+1]-f[1];i.push({from:c,to:d,fromCp:u,toCp:f,rotation:-h})}return i}function yn(e){return e.__isCombineMorphing}var Do="__mOriginal_";function xn(e,t,r){var n=Do+t,i=e[n]||e[t];e[n]||(e[n]=e[t]);var a=r.replace,o=r.after,s=r.before;e[t]=function(){var l=arguments,u;return s&&s.apply(this,l),a?u=a.apply(this,l):u=i.apply(this,l),o&&o.apply(this,l),u}}function Pr(e,t){var r=Do+t;e[r]&&(e[t]=e[r],e[r]=null)}function ga(e,t){for(var r=0;r<e.length;r++)for(var n=e[r],i=0;i<n.length;){var a=n[i],o=n[i+1];n[i++]=t[0]*a+t[2]*o+t[4],n[i++]=t[1]*a+t[3]*o+t[5]}}function No(e,t){var r=e.getUpdatedPathProxy(),n=t.getUpdatedPathProxy(),i=Jl(yi(r),yi(n)),a=i[0],o=i[1],s=e.getComputedTransform(),l=t.getComputedTransform();function u(){this.transform=null}s&&ga(a,s),l&&ga(o,l),xn(t,"updateTransform",{replace:u}),t.transform=null;var f=ru(a,o,10,Math.PI),c=[];xn(t,"buildPath",{replace:function(d){for(var h=t.__morphT,_=1-h,v=[],p=0;p<f.length;p++){var m=f[p],x=m.from,g=m.to,y=m.rotation*h,E=m.fromCp,T=m.toCp,S=Math.sin(y),b=Math.cos(y);Vs(v,E,T,h);for(var w=0;w<x.length;w+=2){var L=x[w],R=x[w+1],D=g[w],O=g[w+1],M=L*_+D*h,U=R*_+O*h;c[w]=M*b-U*S+v[0],c[w+1]=M*S+U*b+v[1]}var F=c[0],G=c[1];d.moveTo(F,G);for(var w=2;w<x.length;){var D=c[w++],O=c[w++],K=c[w++],ae=c[w++],de=c[w++],le=c[w++];F===D&&G===O&&K===de&&ae===le?d.lineTo(de,le):d.bezierCurveTo(D,O,K,ae,de,le),F=de,G=le}}}})}function Ui(e,t,r){if(!e||!t)return t;var n=r.done,i=r.during;No(e,t),t.__morphT=0;function a(){Pr(t,"buildPath"),Pr(t,"updateTransform"),t.__morphT=-1,t.createPathProxy(),t.dirtyShape()}return t.animateTo({__morphT:1},Ze({during:function(o){t.dirtyShape(),i&&i(o)},done:function(){a(),n&&n()}},r)),t}function nu(e,t,r,n,i,a){var o=16;e=i===r?0:Math.round(32767*(e-r)/(i-r)),t=a===n?0:Math.round(32767*(t-n)/(a-n));for(var s=0,l,u=(1<<o)/2;u>0;u/=2){var f=0,c=0;(e&u)>0&&(f=1),(t&u)>0&&(c=1),s+=u*u*(3*f^c),c===0&&(f===1&&(e=u-1-e,t=u-1-t),l=e,e=t,t=l)}return s}function Tn(e){var t=1/0,r=1/0,n=-1/0,i=-1/0,a=Rt(e,function(s){var l=s.getBoundingRect(),u=s.getComputedTransform(),f=l.x+l.width/2+(u?u[4]:0),c=l.y+l.height/2+(u?u[5]:0);return t=Math.min(f,t),r=Math.min(c,r),n=Math.max(f,n),i=Math.max(c,i),[f,c]}),o=Rt(a,function(s,l){return{cp:s,z:nu(s[0],s[1],t,r,n,i),path:e[l]}});return o.sort(function(s,l){return s.z-l.z}).map(function(s){return s.path})}function Po(e){return $l(e.path,e.count)}function Ti(){return{fromIndividuals:[],toIndividuals:[],count:0}}function iu(e,t,r){var n=[];function i(E){for(var T=0;T<E.length;T++){var S=E[T];yn(S)?i(S.childrenRef()):S instanceof Vr&&n.push(S)}}i(e);var a=n.length;if(!a)return Ti();var o=r.dividePath||Po,s=o({path:t,count:a});if(s.length!==a)return console.error("Invalid morphing: unmatched splitted path"),Ti();n=Tn(n),s=Tn(s);for(var l=r.done,u=r.during,f=r.individualDelay,c=new Gs,d=0;d<a;d++){var h=n[d],_=s[d];_.parent=t,_.copyTransform(c),f||No(h,_)}t.__isCombineMorphing=!0,t.childrenRef=function(){return s};function v(E){for(var T=0;T<s.length;T++)s[T].addSelfToZr(E)}xn(t,"addSelfToZr",{after:function(E){v(E)}}),xn(t,"removeSelfFromZr",{after:function(E){for(var T=0;T<s.length;T++)s[T].removeSelfFromZr(E)}});function p(){t.__isCombineMorphing=!1,t.__morphT=-1,t.childrenRef=null,Pr(t,"addSelfToZr"),Pr(t,"removeSelfFromZr")}var m=s.length;if(f)for(var x=m,g=function(){x--,x===0&&(p(),l&&l())},d=0;d<m;d++){var y=f?Ze({delay:(r.delay||0)+f(d,m,n[d],s[d]),done:g},r):r;Ui(n[d],s[d],y)}else t.__morphT=0,t.animateTo({__morphT:1},Ze({during:function(E){for(var T=0;T<m;T++){var S=s[T];S.__morphT=t.__morphT,S.dirtyShape()}u&&u(E)},done:function(){p();for(var E=0;E<e.length;E++)Pr(e[E],"updateTransform");l&&l()}},r));return t.__zr&&v(t.__zr),{fromIndividuals:n,toIndividuals:s,count:m}}function au(e,t,r){var n=t.length,i=[],a=r.dividePath||Po;function o(h){for(var _=0;_<h.length;_++){var v=h[_];yn(v)?o(v.childrenRef()):v instanceof Vr&&i.push(v)}}if(yn(e)){o(e.childrenRef());var s=i.length;if(s<n)for(var l=0,u=s;u<n;u++)i.push(Ii(i[l++%s]));i.length=n}else{i=a({path:e,count:n});for(var f=e.getComputedTransform(),u=0;u<i.length;u++)i[u].setLocalTransform(f);if(i.length!==n)return console.error("Invalid morphing: unmatched splitted path"),Ti()}i=Tn(i),t=Tn(t);for(var c=r.individualDelay,u=0;u<n;u++){var d=c?Ze({delay:(r.delay||0)+c(u,n,i[u],t[u])},r):r;Ui(i[u],t[u],d)}return{fromIndividuals:i,toIndividuals:t,count:t.length}}function ya(e){return Ke(e[0])}function xa(e,t){for(var r=[],n=e.length,i=0;i<n;i++)r.push({one:e[i],many:[]});for(var i=0;i<t.length;i++){var a=t[i].length,o=void 0;for(o=0;o<a;o++)r[o%n].many.push(t[i][o])}for(var s=0,i=n-1;i>=0;i--)if(!r[i].many.length){var l=r[s].many;if(l.length<=1)if(s)s=0;else return r;var a=l.length,u=Math.ceil(a/2);r[i].many=l.slice(u,a),r[s].many=l.slice(0,u),s++}return r}var ou={clone:function(e){for(var t=[],r=1-Math.pow(1-e.path.style.opacity,1/e.count),n=0;n<e.count;n++){var i=Ii(e.path);i.setStyle("opacity",r),t.push(i)}return t},split:null};function qn(e,t,r,n,i,a){if(!e.length||!t.length)return;var o=Bi("update",n,i);if(!(o&&o.duration>0))return;var s=n.getModel("universalTransition").get("delay"),l=Object.assign({setToFinal:!0},o),u,f;ya(e)&&(u=e,f=t),ya(t)&&(u=t,f=e);function c(m,x,g,y,E){var T=m.many,S=m.one;if(T.length===1&&!E){var b=x?T[0]:S,w=x?S:T[0];if(yn(b))c({many:[b],one:w},!0,g,y,!0);else{var L=s?Ze({delay:s(g,y)},l):l;Ui(b,w,L),a(b,w,b,w,L)}}else for(var R=Ze({dividePath:ou[r],individualDelay:s&&function(G,K,ae,de){return s(G+g,y)}},l),D=x?iu(T,S,R):au(S,T,R),O=D.fromIndividuals,M=D.toIndividuals,U=O.length,F=0;F<U;F++){var L=s?Ze({delay:s(F,U)},l):l;a(O[F],M[F],x?T[F]:m.one,x?m.one:T[F],L)}}for(var d=u?u===e:e.length>t.length,h=u?xa(f,u):xa(d?t:e,[d?e:t]),_=0,v=0;v<h.length;v++)_+=h[v].many.length;for(var p=0,v=0;v<h.length;v++)c(h[v],d,p,_),p+=h[v].many.length}function Gt(e){if(!e)return[];if(Ke(e)){for(var t=[],r=0;r<e.length;r++)t.push(Gt(e[r]));return t}var n=[];return e.traverse(function(i){i instanceof Vr&&!i.disableMorphing&&!i.invisible&&!i.ignore&&n.push(i)}),n}var Io=1e4,su=ks();function lu(e){for(var t=e.dimensions,r=0;r<t.length;r++){var n=e.getDimensionInfo(t[r]);if(n&&n.otherDims.itemGroupId===0)return t[r]}}function Ta(e){var t=[];return Ae(e,function(r){var n=r.data;if(!(n.count()>Io))for(var i=n.getIndices(),a=lu(n),o=0;o<i.length;o++)t.push({dataGroupId:r.dataGroupId,data:n,dim:r.dim||a,divide:r.divide,dataIndex:o})}),t}function jn(e,t,r){e.traverse(function(n){n instanceof Vr&&Ws(n,{style:{opacity:0}},t,{dataIndex:r,isFrom:!0})})}function Zn(e){if(e.parent){var t=e.getComputedTransform();e.setLocalTransform(t),e.parent.remove(e)}}function rr(e){e.stopAnimation(),e.isGroup&&e.traverse(function(t){t.stopAnimation()})}function uu(e,t,r){var n=Bi("update",r,t);n&&e.traverse(function(i){if(i instanceof Xs){var a=qs(i);a&&i.animateFrom({style:a},n)}})}function fu(e,t){var r=e.length;if(r!==t.length)return!1;for(var n=0;n<r;n++){var i=e[n],a=t[n];if(i.data.getId(i.dataIndex)!==a.data.getId(a.dataIndex))return!1}return!0}function Oo(e,t,r){var n=Ta(e),i=Ta(t);function a(m,x,g,y,E){(g||m)&&x.animateFrom({style:g&&g!==m?ua(ua({},g.style),m.style):m.style},E)}function o(m){for(var x=0;x<m.length;x++)if(m[x].dim)return m[x].dim}var s=o(n),l=o(i),u=!1;function f(m,x){return function(g){var y=g.data,E=g.dataIndex;if(x)return y.getId(E);var T=g.dataGroupId,S=m?s||l:l||s,b=S&&y.getDimensionInfo(S),w=b&&b.ordinalMeta;if(b){var L=y.get(b.name,E);return w&&w.categories[L]||L+""}var R=y.getRawDataItem(E);return R&&R.groupId?R.groupId+"":T||y.getId(E)}}var c=fu(n,i),d={};if(!c)for(var h=0;h<i.length;h++){var _=i[h],v=_.data.getItemGraphicEl(_.dataIndex);v&&(d[v.id]=!0)}function p(m,x){var g=n[x],y=i[m],E=y.data.hostModel,T=g.data.getItemGraphicEl(g.dataIndex),S=y.data.getItemGraphicEl(y.dataIndex);if(T===S){S&&uu(S,y.dataIndex,E);return}T&&d[T.id]||S&&(rr(S),T?(rr(T),Zn(T),u=!0,qn(Gt(T),Gt(S),y.divide,E,m,a)):jn(S,E,m))}new sa(n,i,f(!0,c),f(!1,c),null,"multiple").update(p).updateManyToOne(function(m,x){var g=i[m],y=g.data,E=y.hostModel,T=y.getItemGraphicEl(g.dataIndex),S=la(Rt(x,function(b){return n[b].data.getItemGraphicEl(n[b].dataIndex)}),function(b){return b&&b!==T&&!d[b.id]});T&&(rr(T),S.length?(Ae(S,function(b){rr(b),Zn(b)}),u=!0,qn(Gt(S),Gt(T),g.divide,E,m,a)):jn(T,E,g.dataIndex))}).updateOneToMany(function(m,x){var g=n[x],y=g.data.getItemGraphicEl(g.dataIndex);if(!(y&&d[y.id])){var E=la(Rt(m,function(S){return i[S].data.getItemGraphicEl(i[S].dataIndex)}),function(S){return S&&S!==y}),T=i[m[0]].data.hostModel;E.length&&(Ae(E,function(S){return rr(S)}),y?(rr(y),Zn(y),u=!0,qn(Gt(y),Gt(E),g.divide,T,m[0],a)):Ae(E,function(S){return jn(S,T,m[0])}))}}).updateManyToMany(function(m,x){new sa(x,m,function(g){return n[g].data.getId(n[g].dataIndex)},function(g){return i[g].data.getId(i[g].dataIndex)}).update(function(g,y){p(m[g],x[y])}).execute()}).execute(),u&&Ae(t,function(m){var x=m.data,g=x.hostModel,y=g&&r.getViewOfSeriesModel(g),E=Bi("update",g,0);y&&g.isAnimationEnabled()&&E&&E.duration>0&&y.group.traverse(function(T){T instanceof Vr&&!T.animators.length&&T.animateFrom({style:{opacity:0}},E)})})}function Ea(e){var t=e.getModel("universalTransition").get("seriesKey");return t||e.id}function Aa(e){return Ke(e)?e.sort().join(","):e}function wt(e){if(e.hostModel)return e.hostModel.getModel("universalTransition").get("divideShape")}function cu(e,t){var r=Vn(),n=Vn(),i=Vn();return Ae(e.oldSeries,function(a,o){var s=e.oldDataGroupIds[o],l=e.oldData[o],u=Ea(a),f=Aa(u);n.set(f,{dataGroupId:s,data:l}),Ke(u)&&Ae(u,function(c){i.set(c,{key:f,dataGroupId:s,data:l})})}),Ae(t.updatedSeries,function(a){if(a.isUniversalTransitionEnabled()&&a.isAnimationEnabled()){var o=a.get("dataGroupId"),s=a.getData(),l=Ea(a),u=Aa(l),f=n.get(u);if(f)r.set(u,{oldSeries:[{dataGroupId:f.dataGroupId,divide:wt(f.data),data:f.data}],newSeries:[{dataGroupId:o,divide:wt(s),data:s}]});else if(Ke(l)){var c=[];Ae(l,function(_){var v=n.get(_);v.data&&c.push({dataGroupId:v.dataGroupId,divide:wt(v.data),data:v.data})}),c.length&&r.set(u,{oldSeries:c,newSeries:[{dataGroupId:o,data:s,divide:wt(s)}]})}else{var d=i.get(l);if(d){var h=r.get(d.key);h||(h={oldSeries:[{dataGroupId:d.dataGroupId,data:d.data,divide:wt(d.data)}],newSeries:[]},r.set(d.key,h)),h.newSeries.push({dataGroupId:o,data:s,divide:wt(s)})}}}}),r}function Sa(e,t){for(var r=0;r<e.length;r++){var n=t.seriesIndex!=null&&t.seriesIndex===e[r].seriesIndex||t.seriesId!=null&&t.seriesId===e[r].id;if(n)return r}}function hu(e,t,r,n){var i=[],a=[];Ae(Nr(e.from),function(o){var s=Sa(t.oldSeries,o);s>=0&&i.push({dataGroupId:t.oldDataGroupIds[s],data:t.oldData[s],divide:wt(t.oldData[s]),dim:o.dimension})}),Ae(Nr(e.to),function(o){var s=Sa(r.updatedSeries,o);if(s>=0){var l=r.updatedSeries[s].getData();a.push({dataGroupId:t.oldDataGroupIds[s],data:l,divide:wt(l),dim:o.dimension})}}),i.length>0&&a.length>0&&Oo(i,a,n)}function du(e){e.registerUpdateLifecycle("series:beforeupdate",function(t,r,n){Ae(Nr(n.seriesTransition),function(i){Ae(Nr(i.to),function(a){for(var o=n.updatedSeries,s=0;s<o.length;s++)(a.seriesIndex!=null&&a.seriesIndex===o[s].seriesIndex||a.seriesId!=null&&a.seriesId===o[s].id)&&(o[s][Gn]=!0)})})}),e.registerUpdateLifecycle("series:transition",function(t,r,n){var i=su(r);if(i.oldSeries&&n.updatedSeries&&n.optionChanged){var a=n.seriesTransition;if(a)Ae(Nr(a),function(h){hu(h,i,n,r)});else{var o=cu(i,n);Ae(o.keys(),function(h){var _=o.get(h);Oo(_.oldSeries,_.newSeries,r)})}Ae(n.updatedSeries,function(h){h[Gn]&&(h[Gn]=!1)})}for(var s=t.getSeries(),l=i.oldSeries=[],u=i.oldDataGroupIds=[],f=i.oldData=[],c=0;c<s.length;c++){var d=s[c].getData();d.count()<Io&&(l.push(s[c]),u.push(s[c].get("dataGroupId")),f.push(d))}})}const vu={id:"middle-line-chart"},_u=Dt({__name:"Line",setup(e){return Lt([xr,Pn,Nn,Mo,Al,Zt,du]),Yt(()=>{var t=document.getElementById("middle-line-chart"),r=yr(t,"dark",{devicePixelRatio:2}),n;n={backgroundColor:"transparent",title:{text:"近日进提箱动态"},tooltip:{trigger:"axis"},legend:{top:"12%",data:["单位1","单位2","单位3","单位4","单位5"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["10号","11号","12号","13号","14号","15号","16号"]},yAxis:{type:"value"},series:[{name:"单位1",type:"line",stack:"Total",data:[120,132,101,134,90,230,210]},{name:"单位2",type:"line",stack:"Total",data:[220,182,191,234,290,330,310]},{name:"单位3",type:"line",stack:"Total",data:[150,232,201,154,190,330,410]},{name:"单位4",type:"line",stack:"Total",data:[320,332,301,334,390,330,320]},{name:"单位5",type:"line",stack:"Total",data:[820,932,901,934,1290,1330,1320]}]},n&&r.setOption(n)}),(t,r)=>(Le(),De("div",vu))}});const pu=yt(_u,[["__scopeId","data-v-be6776aa"]]),mu={id:"right-pie-chart"},gu=Dt({__name:"RightPie",setup(e){return Lt([xr,Pn,Mo,Ms,Zt,xo]),Yt(()=>{var t=document.getElementById("right-pie-chart"),r=yr(t,"dark",{devicePixelRatio:2}),n;n={backgroundColor:"transparent",title:{text:"各家船公司业务占比",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left",top:"middle"},series:[{name:"Access From",type:"pie",radius:"50%",center:["50%","50%"],data:[{value:1048,name:"公司1"},{value:735,name:"公司2"},{value:580,name:"公司3"},{value:484,name:"公司4"},{value:300,name:"公司5"}],label:{show:!1}}]},n&&r.setOption(n)}),(t,r)=>(Le(),De("div",mu))}});const yu=yt(gu,[["__scopeId","data-v-5eeae32b"]]),xu={id:"right-bar-chart"},Tu=Dt({__name:"RightBottomBar",setup(e){return Lt([xr,Dn,Nn,In,Pi,Zt]),Yt(()=>{var t=document.getElementById("right-bar-chart"),r=yr(t,"dark",{devicePixelRatio:2}),n;n={backgroundColor:"transparent",title:{text:"当月分货代出口重箱数量"},grid:{bottom:"3%"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value",splitLine:{show:!1}},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]},n&&r.setOption(n)}),(t,r)=>(Le(),De("div",xu))}});const Eu=yt(Tu,[["__scopeId","data-v-8b71119f"]]);Lt([Zt,Dn]);Lt(xo);function ba(e,t,r){typeof t=="object"&&(r=t,t=null);var n=this,i;if(!(e instanceof Function)){i=[];for(var a in e)e.hasOwnProperty(a)&&i.push(a)}var o=function(l){if(n.apply(this,arguments),e instanceof Function?wa(this,e.call(this,l)):Au(this,e,i),this.constructor===o)for(var u=o.__initializers__,f=0;f<u.length;f++)u[f].apply(this,arguments)};o.__super__=n,n.__initializers__?o.__initializers__=n.__initializers__.slice():o.__initializers__=[],t&&o.__initializers__.push(t);var s=function(){};return s.prototype=n.prototype,o.prototype=new s,o.prototype.constructor=o,wa(o.prototype,r),o.extend=n.extend,o.derive=n.extend,o}function wa(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}function Au(e,t,r){for(var n=0;n<r.length;n++){var i=r[n];e[i]=t[i]}}const Su={extend:ba,derive:ba};function bu(e,t){this.action=e,this.context=t}var wu={trigger:function(e){if(this.hasOwnProperty("__handlers__")&&this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],r=t.length,n=-1,i=arguments;switch(i.length){case 1:for(;++n<r;)t[n].action.call(t[n].context);return;case 2:for(;++n<r;)t[n].action.call(t[n].context,i[1]);return;case 3:for(;++n<r;)t[n].action.call(t[n].context,i[1],i[2]);return;case 4:for(;++n<r;)t[n].action.call(t[n].context,i[1],i[2],i[3]);return;case 5:for(;++n<r;)t[n].action.call(t[n].context,i[1],i[2],i[3],i[4]);return;default:for(;++n<r;)t[n].action.apply(t[n].context,Array.prototype.slice.call(i,1));return}}},on:function(e,t,r){if(!(!e||!t)){var n=this.__handlers__||(this.__handlers__={});if(!n[e])n[e]=[];else if(this.has(e,t))return;var i=new bu(t,r||this);return n[e].push(i),this}},once:function(e,t,r){if(!e||!t)return;var n=this;function i(){n.off(e,i),t.apply(this,arguments)}return this.on(e,i,r)},before:function(e,t,r){if(!(!e||!t))return e="before"+e,this.on(e,t,r)},after:function(e,t,r){if(!(!e||!t))return e="after"+e,this.on(e,t,r)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var r=this.__handlers__||(this.__handlers__={});if(!t){r[e]=[];return}if(r[e]){for(var n=r[e],i=[],a=0;a<n.length;a++)t&&n[a].action!==t&&i.push(n[a]);r[e]=i}return this},has:function(e,t){var r=this.__handlers__;if(!r||!r[e])return!1;for(var n=r[e],i=0;i<n.length;i++)if(n[i].action===t)return!0}};const Hi=wu;var Cu=0,Ru=Array.prototype,Mu=Ru.forEach,Mr={genGUID:function(){return++Cu},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var r=e.split("/"),n=t.split("/"),i=r[0];i==="."||i==="..";)i===".."&&n.pop(),r.shift(),i=r[0];return n.join("/")+"/"+r.join("/")},extend:function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},defaults:function(e,t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e},extendWithPropList:function(e,t,r){if(t)for(var n=0;n<r.length;n++){var i=r[n];e[i]=t[i]}return e},defaultsWithPropList:function(e,t,r){if(t)for(var n=0;n<r.length;n++){var i=r[n];e[i]==null&&(e[i]=t[i])}return e},each:function(e,t,r){if(e&&t)if(e.forEach&&e.forEach===Mu)e.forEach(t,r);else if(e.length===+e.length)for(var n=0,i=e.length;n<i;n++)t.call(r,e[n],n,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(r,e[a],a,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(Mr.isObject(e)){if(Mr.isArray(e))return e.slice();if(Mr.isArrayLike(e)){for(var t=new e.constructor(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}else return Mr.extend({},e)}else return e}};const Be=Mr;var On=function(){this.__uid__=Be.genGUID()};On.__initializers__=[function(e){Be.extend(this,e)}];Be.extend(On,Su);Be.extend(On.prototype,Hi);const Qe=On;var Ca=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],Ra=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function Lu(e){for(var t={},r={},n=0;n<Ca.length;n++){var i=Ca[n];o(i)}for(var n=0;n<Ra.length;n++){var a=Ra[n];r[a]=e.getParameter(e[a])}this.getExtension=function(s){return s in t||o(s),t[s]},this.getParameter=function(s){return r[s]};function o(s){if(e.getExtension){var l=e.getExtension(s);l||(l=e.getExtension("MOZ_"+s)),l||(l=e.getExtension("WEBKIT_"+s)),t[s]=l}}}const C={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444};function Du(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(r){if(r.lengthComputable){var n=r.loaded/r.total;e.onprogress(n,r.loaded,r.total)}else e.onprogress(null)}),t.onload=function(r){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}const Nu={get:Du};var Yn,qe={};qe.supportWebGL=function(){if(Yn==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{Yn=!1}return Yn};qe.Int8Array=typeof Int8Array>"u"?Array:Int8Array;qe.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array;qe.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array;qe.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array;qe.Int16Array=typeof Int16Array>"u"?Array:Int16Array;qe.Float32Array=typeof Float32Array>"u"?Array:Float32Array;qe.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var Wt={};typeof window<"u"?Wt=window:typeof global<"u"&&(Wt=global);qe.requestAnimationFrame=Wt.requestAnimationFrame||Wt.msRequestAnimationFrame||Wt.mozRequestAnimationFrame||Wt.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};qe.createCanvas=function(){return document.createElement("canvas")};qe.createImage=function(){return new Wt.Image};qe.request={get:Nu.get};qe.addEventListener=function(e,t,r,n){e.addEventListener(t,r,n)};qe.removeEventListener=function(e,t,r){e.removeEventListener(t,r)};const we=qe;var Pe=function(){this.head=null,this.tail=null,this._length=0};Pe.prototype.insert=function(e){var t=new Pe.Entry(e);return this.insertEntry(t),t};Pe.prototype.insertAt=function(e,t){if(!(e<0)){for(var r=this.head,n=0;r&&n!=e;)r=r.next,n++;if(r){var i=new Pe.Entry(t),a=r.prev;a?(a.next=i,i.prev=a):this.head=i,i.next=r,r.prev=i}else this.insert(t)}};Pe.prototype.insertBeforeEntry=function(e,t){var r=new Pe.Entry(e),n=t.prev;n?(n.next=r,r.prev=n):this.head=r,r.next=t,t.prev=r,this._length++};Pe.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};Pe.prototype.remove=function(e){var t=e.prev,r=e.next;t?t.next=r:this.head=r,r?r.prev=t:this.tail=t,e.next=e.prev=null,this._length--};Pe.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;if(t)return this.remove(t),t.value}};Pe.prototype.getHead=function(){if(this.head)return this.head.value};Pe.prototype.getTail=function(){if(this.tail)return this.tail.value};Pe.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;return t.value}};Pe.prototype.indexOf=function(e){for(var t=this.head,r=0;t;){if(t.value===e)return r;t=t.next,r++}};Pe.prototype.length=function(){return this._length};Pe.prototype.isEmpty=function(){return this._length===0};Pe.prototype.forEach=function(e,t){for(var r=this.head,n=0,i=typeof t<"u";r;)i?e.call(t,r.value,n):e(r.value,n),r=r.next,n++};Pe.prototype.clear=function(){this.tail=this.head=null,this._length=0};Pe.Entry=function(e){this.value=e,this.next=null,this.prev=null};const Pu=Pe;var Tr=function(e){this._list=new Pu,this._map={},this._maxSize=e||10};Tr.prototype.setMaxSize=function(e){this._maxSize=e};Tr.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var r=this._list.length();if(r>=this._maxSize&&r>0){var n=this._list.head;this._list.remove(n),delete this._map[n.key]}var i=this._list.insert(t);i.key=e,this._map[e]=i}};Tr.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};Tr.prototype.remove=function(e){var t=this._map[e];typeof t<"u"&&(delete this._map[e],this._list.remove(t))};Tr.prototype.clear=function(){this._list.clear(),this._map={}};const Bo=Tr;var pe={},Ma={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function st(e){return e=Math.round(e),e<0?0:e>255?255:e}function Iu(e){return e=Math.round(e),e<0?0:e>360?360:e}function Br(e){return e<0?0:e>1?1:e}function Kn(e){return e.length&&e.charAt(e.length-1)==="%"?st(parseFloat(e)/100*255):st(parseInt(e,10))}function _r(e){return e.length&&e.charAt(e.length-1)==="%"?Br(parseFloat(e)/100):Br(parseFloat(e))}function $n(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function Ct(e,t,r){return e+(t-e)*r}function ot(e,t,r,n,i){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e}function Ei(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var Fo=new Bo(20),Yr=null;function nr(e,t){Yr&&Ei(Yr,t),Yr=Fo.put(e,Yr||t.slice())}pe.parse=function(e,t){if(e){t=t||[];var r=Fo.get(e);if(r)return Ei(t,r);e=e+"";var n=e.replace(/ /g,"").toLowerCase();if(n in Ma)return Ei(t,Ma[n]),nr(e,t),t;if(n.charAt(0)==="#"){if(n.length===4){var i=parseInt(n.substr(1),16);if(!(i>=0&&i<=4095)){ot(t,0,0,0,1);return}return ot(t,(i&3840)>>4|(i&3840)>>8,i&240|(i&240)>>4,i&15|(i&15)<<4,1),nr(e,t),t}else if(n.length===7){var i=parseInt(n.substr(1),16);if(!(i>=0&&i<=16777215)){ot(t,0,0,0,1);return}return ot(t,(i&16711680)>>16,(i&65280)>>8,i&255,1),nr(e,t),t}return}var a=n.indexOf("("),o=n.indexOf(")");if(a!==-1&&o+1===n.length){var s=n.substr(0,a),l=n.substr(a+1,o-(a+1)).split(","),u=1;switch(s){case"rgba":if(l.length!==4){ot(t,0,0,0,1);return}u=_r(l.pop());case"rgb":if(l.length!==3){ot(t,0,0,0,1);return}return ot(t,Kn(l[0]),Kn(l[1]),Kn(l[2]),u),nr(e,t),t;case"hsla":if(l.length!==4){ot(t,0,0,0,1);return}return l[3]=_r(l[3]),Ai(l,t),nr(e,t),t;case"hsl":if(l.length!==3){ot(t,0,0,0,1);return}return Ai(l,t),nr(e,t),t;default:return}}ot(t,0,0,0,1)}};pe.parseToFloat=function(e,t){if(t=pe.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function Ai(e,t){var r=(parseFloat(e[0])%360+360)%360/360,n=_r(e[1]),i=_r(e[2]),a=i<=.5?i*(n+1):i+n-i*n,o=i*2-a;return t=t||[],ot(t,st($n(o,a,r+1/3)*255),st($n(o,a,r)*255),st($n(o,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function Ou(e){if(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255,i=Math.min(t,r,n),a=Math.max(t,r,n),o=a-i,s=(a+i)/2,l,u;if(o===0)l=0,u=0;else{s<.5?u=o/(a+i):u=o/(2-a-i);var f=((a-t)/6+o/2)/o,c=((a-r)/6+o/2)/o,d=((a-n)/6+o/2)/o;t===a?l=d-c:r===a?l=1/3+f-d:n===a&&(l=2/3+c-f),l<0&&(l+=1),l>1&&(l-=1)}var h=[l*360,u,s];return e[3]!=null&&h.push(e[3]),h}}pe.lift=function(e,t){var r=pe.parse(e);if(r){for(var n=0;n<3;n++)t<0?r[n]=r[n]*(1-t)|0:r[n]=(255-r[n])*t+r[n]|0;return pe.stringify(r,r.length===4?"rgba":"rgb")}};pe.toHex=function(e){var t=pe.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};pe.fastLerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){r=r||[];var n=e*(t.length-1),i=Math.floor(n),a=Math.ceil(n),o=t[i],s=t[a],l=n-i;return r[0]=st(Ct(o[0],s[0],l)),r[1]=st(Ct(o[1],s[1],l)),r[2]=st(Ct(o[2],s[2],l)),r[3]=Br(Ct(o[3],s[3],l)),r}};pe.fastMapToColor=pe.fastLerp;pe.lerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var n=e*(t.length-1),i=Math.floor(n),a=Math.ceil(n),o=pe.parse(t[i]),s=pe.parse(t[a]),l=n-i,u=pe.stringify([st(Ct(o[0],s[0],l)),st(Ct(o[1],s[1],l)),st(Ct(o[2],s[2],l)),Br(Ct(o[3],s[3],l))],"rgba");return r?{color:u,leftIndex:i,rightIndex:a,value:n}:u}};pe.mapToColor=pe.lerp;pe.modifyHSL=function(e,t,r,n){if(e=pe.parse(e),e)return e=Ou(e),t!=null&&(e[0]=Iu(t)),r!=null&&(e[1]=_r(r)),n!=null&&(e[2]=_r(n)),pe.stringify(Ai(e),"rgba")};pe.modifyAlpha=function(e,t){if(e=pe.parse(e),e&&t!=null)return e[3]=Br(t),pe.stringify(e,"rgba")};pe.stringify=function(e,t){if(!(!e||!e.length)){var r=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(r+=","+e[3]),t+"("+r+")"}};const Bu=pe;var Fu=Bu.parseToFloat,Qn={};function La(e){var t=Object.keys(e);t.sort();for(var r=[],n=0;n<t.length;n++){var i=t[n],a=e[i];a===null?r.push(i):r.push(i+" "+a.toString())}return r.join(`
`)}function Uu(e,t,r){r.sort();for(var n=[],i=0;i<r.length;i++){var a=r[i];n.push(a)}var o=La(e)+`
`+La(t)+`
`+n.join(`
`);if(Qn[o])return Qn[o];var s=Be.genGUID();return Qn[o]=s,s}var Hu=Qe.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var r=this.uniforms[e];r&&(typeof t=="string"&&(t=Fu(t)||t),r.value=t,this.autoUpdateTextureStatus&&r.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var r=e[t];this.setUniform(t,r)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var r in e){var n=e[r];this.setUniform(r,n)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var r=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var n=this.uniforms;this._enabledUniforms=Object.keys(n),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(u){var f=this.uniforms[u].type;return f==="t"||f==="tv"},this);var i=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=Be.clone(e.vertexDefines),this.fragmentDefines=Be.clone(e.fragmentDefines),t){for(var o in r)n[o]&&(n[o].value=r[o].value);Be.defaults(this.vertexDefines,i),Be.defaults(this.fragmentDefines,a)}var s={};for(var l in e.textures)s[l]={shaderType:e.textures[l].shaderType,type:e.textures[l].type,enabled:t&&this._textureStatus[l]?this._textureStatus[l].enabled:!1};this._textureStatus=s,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=Be.clone(this.vertexDefines),e.fragmentDefines=Be.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,r){var n=this.vertexDefines,i=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(r=t,t=e,e="both"),r=r??null,(e==="vertex"||e==="both")&&n[t]!==r&&(n[t]=r,this._programKey=""),(e==="fragment"||e==="both")&&i[t]!==r&&(i[t]=r,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var n=r.enabled;n||(r.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var n=!r.enabled;n||(r.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var r in t)t[r].enabled&&e.push(r);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=Uu(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}});const xt=Hu;var sn=1e-6,Fe=Array,dr=Math.random,Z={};Z.create=function(){var e=new Fe(2);return e[0]=0,e[1]=0,e};Z.clone=function(e){var t=new Fe(2);return t[0]=e[0],t[1]=e[1],t};Z.fromValues=function(e,t){var r=new Fe(2);return r[0]=e,r[1]=t,r};Z.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};Z.set=function(e,t,r){return e[0]=t,e[1]=r,e};Z.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e};Z.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e};Z.sub=Z.subtract;Z.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e};Z.mul=Z.multiply;Z.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e};Z.div=Z.divide;Z.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e};Z.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e};Z.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e};Z.scaleAndAdd=function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e};Z.distance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1];return Math.sqrt(r*r+n*n)};Z.dist=Z.distance;Z.squaredDistance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1];return r*r+n*n};Z.sqrDist=Z.squaredDistance;Z.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)};Z.len=Z.length;Z.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r};Z.sqrLen=Z.squaredLength;Z.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};Z.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};Z.normalize=function(e,t){var r=t[0],n=t[1],i=r*r+n*n;return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i),e};Z.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};Z.cross=function(e,t,r){var n=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=n,e};Z.lerp=function(e,t,r,n){var i=t[0],a=t[1];return e[0]=i+n*(r[0]-i),e[1]=a+n*(r[1]-a),e};Z.random=function(e,t){t=t||1;var r=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e};Z.transformMat2=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[2]*i,e[1]=r[1]*n+r[3]*i,e};Z.transformMat2d=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[2]*i+r[4],e[1]=r[1]*n+r[3]*i+r[5],e};Z.transformMat3=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[3]*i+r[6],e[1]=r[1]*n+r[4]*i+r[7],e};Z.transformMat4=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[4]*i+r[12],e[1]=r[1]*n+r[5]*i+r[13],e};Z.forEach=function(){var e=Z.create();return function(t,r,n,i,a,o){var s,l;for(r||(r=2),n||(n=0),i?l=Math.min(i*r+n,t.length):l=t.length,s=n;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}}();const H=Z;var $=function(e,t){e=e||0,t=t||0,this.array=H.fromValues(e,t),this._dirty=!0};$.prototype={constructor:$,add:function(e){return H.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new $(this.x,this.y)},copy:function(e){return H.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return H.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return H.dist(this.array,e.array)},distance:function(e){return H.distance(this.array,e.array)},div:function(e){return H.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return H.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return H.dot(this.array,e.array)},len:function(){return H.len(this.array)},length:function(){return H.length(this.array)},lerp:function(e,t,r){return H.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return H.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return H.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return H.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return H.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return H.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return H.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return H.random(this.array,e),this._dirty=!0,this},scale:function(e){return H.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return H.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return H.sqrDist(this.array,e.array)},squaredDistance:function(e){return H.squaredDistance(this.array,e.array)},sqrLen:function(){return H.sqrLen(this.array)},squaredLength:function(){return H.squaredLength(this.array)},sub:function(e){return H.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return H.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return H.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return H.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return H.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return H.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var Da=$.prototype;Object.defineProperty(Da,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(Da,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}$.add=function(e,t,r){return H.add(e.array,t.array,r.array),e._dirty=!0,e};$.set=function(e,t,r){return H.set(e.array,t,r),e._dirty=!0,e};$.copy=function(e,t){return H.copy(e.array,t.array),e._dirty=!0,e};$.cross=function(e,t,r){return H.cross(e.array,t.array,r.array),e._dirty=!0,e};$.dist=function(e,t){return H.distance(e.array,t.array)};$.distance=$.dist;$.div=function(e,t,r){return H.divide(e.array,t.array,r.array),e._dirty=!0,e};$.divide=$.div;$.dot=function(e,t){return H.dot(e.array,t.array)};$.len=function(e){return H.length(e.array)};$.lerp=function(e,t,r,n){return H.lerp(e.array,t.array,r.array,n),e._dirty=!0,e};$.min=function(e,t,r){return H.min(e.array,t.array,r.array),e._dirty=!0,e};$.max=function(e,t,r){return H.max(e.array,t.array,r.array),e._dirty=!0,e};$.mul=function(e,t,r){return H.multiply(e.array,t.array,r.array),e._dirty=!0,e};$.multiply=$.mul;$.negate=function(e,t){return H.negate(e.array,t.array),e._dirty=!0,e};$.normalize=function(e,t){return H.normalize(e.array,t.array),e._dirty=!0,e};$.random=function(e,t){return H.random(e.array,t),e._dirty=!0,e};$.scale=function(e,t,r){return H.scale(e.array,t.array,r),e._dirty=!0,e};$.scaleAndAdd=function(e,t,r,n){return H.scaleAndAdd(e.array,t.array,r.array,n),e._dirty=!0,e};$.sqrDist=function(e,t){return H.sqrDist(e.array,t.array)};$.squaredDistance=$.sqrDist;$.sqrLen=function(e){return H.sqrLen(e.array)};$.squaredLength=$.sqrLen;$.sub=function(e,t,r){return H.subtract(e.array,t.array,r.array),e._dirty=!0,e};$.subtract=$.sub;$.transformMat2=function(e,t,r){return H.transformMat2(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat2d=function(e,t,r){return H.transformMat2d(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat3=function(e,t,r){return H.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat4=function(e,t,r){return H.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};const et=$;var Na=1,Pa=2,Jn=3,Ia={};function zu(e){for(var t=e.split(`
`),r=0,n=t.length;r<n;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function Oa(e,t,r){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),zu(r)].join(`
`)}var Ba=new we.Float32Array(16),Gu=Qe.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,r){t&&(e.gl.activeTexture(e.gl.TEXTURE0+r),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var r=this._textureSlot;return this.useTextureSlot(e,t,r),this._textureSlot++,r},setUniform:function(e,t,r,n){var i=this._locations,a=i[r];if(a==null)return!1;switch(t){case"m4":if(!(n instanceof Float32Array)){for(var o=0;o<n.length;o++)Ba[o]=n[o];n=Ba}e.uniformMatrix4fv(a,!1,n);break;case"2i":e.uniform2i(a,n[0],n[1]);break;case"2f":e.uniform2f(a,n[0],n[1]);break;case"3i":e.uniform3i(a,n[0],n[1],n[2]);break;case"3f":e.uniform3f(a,n[0],n[1],n[2]);break;case"4i":e.uniform4i(a,n[0],n[1],n[2],n[3]);break;case"4f":e.uniform4f(a,n[0],n[1],n[2],n[3]);break;case"1i":e.uniform1i(a,n);break;case"1f":e.uniform1f(a,n);break;case"1fv":e.uniform1fv(a,n);break;case"1iv":e.uniform1iv(a,n);break;case"2iv":e.uniform2iv(a,n);break;case"2fv":e.uniform2fv(a,n);break;case"3iv":e.uniform3iv(a,n);break;case"3fv":e.uniform3fv(a,n);break;case"4iv":e.uniform4iv(a,n);break;case"4fv":e.uniform4fv(a,n);break;case"m2":case"m2v":e.uniformMatrix2fv(a,!1,n);break;case"m3":case"m3v":e.uniformMatrix3fv(a,!1,n);break;case"m4v":if(Array.isArray(n)&&Array.isArray(n[0])){for(var s=new we.Float32Array(n.length*16),l=0,o=0;o<n.length;o++)for(var u=n[o],f=0;f<16;f++)s[l++]=u[f];e.uniformMatrix4fv(a,!1,s)}else e.uniformMatrix4fv(a,!1,n);break}return!0},setUniformOfSemantic:function(e,t,r){var n=this.uniformSemantics[t];return n?this.setUniform(e,n.type,n.symbol,r):!1},enableAttributes:function(e,t,r){var n=e.gl,i=this._program,a=this._locations,o;r?o=r.__enabledAttributeList:o=Ia[e.__uid__],o||(r?o=r.__enabledAttributeList=[]:o=Ia[e.__uid__]=[]);for(var s=[],l=0;l<t.length;l++){var u=t[l];if(!this.attributes[u]){s[l]=-1;continue}var f=a[u];if(f==null){if(f=n.getAttribLocation(i,u),f===-1){s[l]=-1;continue}a[u]=f}s[l]=f,o[f]?o[f]=Pa:o[f]=Na}for(var l=0;l<o.length;l++)switch(o[l]){case Na:n.enableVertexAttribArray(l),o[l]=Jn;break;case Pa:o[l]=Jn;break;case Jn:n.disableVertexAttribArray(l),o[l]=0;break}return s},getAttribLocation:function(e,t){var r=this._locations,n=r[t];return n==null&&(n=e.getAttribLocation(this._program,t),r[t]=n),n},buildProgram:function(e,t,r,n){var i=e.createShader(e.VERTEX_SHADER),a=e.createProgram();e.shaderSource(i,r),e.compileShader(i);var o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,n),e.compileShader(o);var s=Oa(e,i,r);if(s||(s=Oa(e,o,n),s))return s;if(e.attachShader(a,i),e.attachShader(a,o),t.attributeSemantics.POSITION)e.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);e.bindAttribLocation(a,0,l[0])}if(e.linkProgram(a),e.deleteShader(i),e.deleteShader(o),this._program=a,this.vertexCode=r,this.fragmentCode=n,!e.getProgramParameter(a,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(a);for(var u=0;u<t.uniforms.length;u++){var f=t.uniforms[u];this._locations[f]=e.getUniformLocation(a,f)}}});const Vu=Gu;var ku=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Fa(e,t,r){function n(o,s,l,u){var f="";isNaN(s)&&(s in t?s=t[s]:s=i[s]),isNaN(l)&&(l in t?l=t[l]:l=i[l]);for(var c=parseInt(s);c<parseInt(l);c++)f+="{"+u.replace(/float\s*\(\s*_idx_\s*\)/g,c.toFixed(1)).replace(/_idx_/g,c)+"}";return f}var i={};for(var a in r)i[a+"_COUNT"]=r[a];return e.replace(ku,n)}function ei(e,t,r){var n=[];if(t)for(var i in t){var a=t[i];a>0&&n.push("#define "+i.toUpperCase()+"_COUNT "+a)}if(r)for(var o=0;o<r.length;o++){var s=r[o];n.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in e){var l=e[s];l===null?n.push("#define "+s):n.push("#define "+s+" "+l.toString())}return n.join(`
`)}function Wu(e){for(var t=[],r=0;r<e.length;r++)t.push("#extension GL_"+e[r]+" : enable");return t.join(`
`)}function Xu(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function Uo(e){this._renderer=e,this._cache={}}Uo.prototype.getProgram=function(e,t,r){var n=this._cache,i=e.isSkinnedMesh&&e.isSkinnedMesh(),a=e.isInstancedMesh&&e.isInstancedMesh(),o="s"+t.shader.shaderID+"m"+t.getProgramKey();r&&(o+="se"+r.getProgramKey(e.lightGroup)),i&&(o+=",sk"+e.joints.length),a&&(o+=",is");var y=n[o];if(y)return y;var s=r?r.getLightsNumbers(e.lightGroup):{},l=this._renderer,u=l.gl,f=t.getEnabledTextures(),c="";if(i){var d={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>l.getMaxJointNumber()&&(d.USE_SKIN_MATRICES_TEXTURE=null),c+=`
`+ei(d)+`
`}a&&(c+=`
#define INSTANCING
`);var h=c+ei(t.vertexDefines,s,f),_=c+ei(t.fragmentDefines,s,f),v=h+`
`+t.shader.vertex,p=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(T){return l.getGLExtension(T)!=null});p.indexOf("EXT_shader_texture_lod")>=0&&(_+=`
#define SUPPORT_TEXTURE_LOD`),p.indexOf("OES_standard_derivatives")>=0&&(_+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var m=Wu(p)+`
`+Xu(t.precision)+`
`+_+`
`+t.shader.fragment,x=Fa(v,t.vertexDefines,s),g=Fa(m,t.fragmentDefines,s),y=new Vu;y.uniformSemantics=t.shader.uniformSemantics,y.attributes=t.shader.attributes;var E=y.buildProgram(u,t.shader,x,g);return y.__error=E,n[o]=y,y};var Ua=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,qu=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,Ha=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,ju={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function _t(e){for(var t=[],r=0;r<e;r++)t[r]=0;return t}var za={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return _t(2)},vec3:function(){return _t(3)},vec4:function(){return _t(4)},ivec2:function(){return _t(2)},ivec3:function(){return _t(3)},ivec4:function(){return _t(4)},mat2:function(){return _t(4)},mat3:function(){return _t(9)},mat4:function(){return _t(16)},array:function(){return[]}},Si=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],Ho=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],zo=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],Zu={vec4:4,vec3:3,vec2:2,float:1},ti={},Go={};function Yu(e,t){var r="vertex:"+e+"fragment:"+t;if(ti[r])return ti[r];var n=Be.genGUID();return ti[r]=n,Go[n]={vertex:e,fragment:t},n}function Ga(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function ir(){console.error("Wrong uniform/attributes syntax")}function Va(e,t){for(var r=/[,=\(\):]/,n=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),i=[],a=0;a<n.length;a++)n[a].match(r)?i.push(n[a].charAt(0),n[a].slice(1)):i.push(n[a]);n=i;var o=0,s=1,l=2,u=3,f=4,c=5,d=o,h={},_=null,v;p(n[0]);function p(g){g||ir();var y=g.match(/\[(.*?)\]/);v=g.replace(/\[(.*?)\]/,""),h[v]={},y&&(h[v].isArray=!0,h[v].arraySize=y[1])}for(var a=1;a<n.length;a++){var m=n[a];if(m){if(m==="="){if(d!==o&&d!==u){ir();break}d=s;continue}else if(m===":"){d=f;continue}else if(m===","){if(d===l){if(!(_ instanceof Array)){ir();break}_.push(+n[++a])}else d=c;continue}else if(m===")"){h[v].value=new we.Float32Array(_),_=null,d=c;continue}else if(m==="("){if(d!==l){ir();break}if(!(_ instanceof Array)){ir();break}_.push(+n[++a]);continue}else if(m.indexOf("vec")>=0){if(d!==s&&d!==f){ir();break}d=l,_=[];continue}else if(d===s){e==="bool"?h[v].value=m==="true":h[v].value=parseFloat(m),_=null;continue}else if(d===f){var x=m;Si.indexOf(x)>=0||Ho.indexOf(x)>=0||zo.indexOf(x)>=0?h[v].semantic=x:x==="ignore"||x==="unconfigurable"?h[v].ignore=!0:e==="bool"?h[v].value=x==="true":h[v].value=parseFloat(x);continue}p(m),d=o}}return h}function I(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=Ga(e),t=Ga(t),this._shaderID=Yu(e,t),this._vertexCode=I.parseImport(e),this._fragmentCode=I.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}I.prototype={constructor:I,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var r=this.uniformTemplates[t];e[t]={type:r.type,value:r.value()}}return e},_parseImport:function(){this._vertexCode=I.parseImport(this.vertex),this._fragmentCode=I.parseImport(this.fragment)},_addSemanticUniform:function(e,t,r){if(Si.indexOf(r)>=0)this.attributeSemantics[r]={symbol:e,type:t};else if(zo.indexOf(r)>=0){var n=!1,i=r;r.match(/TRANSPOSE$/)&&(n=!0,i=r.slice(0,-9)),this.matrixSemantics[r]={symbol:e,type:t,isTranspose:n,semanticNoTranspose:i}}else Ho.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:e,type:t})},_addMaterialUniform:function(e,t,r,n,i,a){a[e]={type:r,value:i?za.array:n||za[t],semantic:null}},_parseUniforms:function(){var e={},t=this,r="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(Ua,i),r="fragment",this._fragmentCode=this._fragmentCode.replace(Ua,i),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function n(a){return a!=null?function(){return a}:null}function i(a,o,s){var l=Va(o,s),u=[];for(var f in l){var c=l[f],d=c.semantic,h=f,_=ju[o],v=n(l[f].value);l[f].isArray&&(h+="["+l[f].arraySize+"]",_+="v"),u.push(h),t._uniformList.push(f),c.ignore||((o==="sampler2D"||o==="samplerCube")&&(t.textures[f]={shaderType:r,type:o}),d?t._addSemanticUniform(f,_,d):t._addMaterialUniform(f,o,_,v,l[f].isArray,e))}return u.length>0?"uniform "+o+" "+u.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(qu,r);function r(n,i,a){var o=Va(i,a),s=Zu[i]||1,l=[];for(var u in o){var f=o[u].semantic;if(e[u]={type:"float",size:s,semantic:f||null},f){if(Si.indexOf(f)<0)throw new Error('Unkown semantic "'+f+'"');t.attributeSemantics[f]={symbol:u,type:i}}l.push(u)}return"attribute "+i+" "+l.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(Ha,r),t="fragment",this._fragmentCode=this._fragmentCode.replace(Ha,r);function r(n,i,a){var o=t==="vertex"?e.vertexDefines:e.fragmentDefines;return o[i]||(a==="false"?o[i]=!1:a==="true"?o[i]=!0:o[i]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var e=Go[this._shaderID],t=new I(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(I.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(I.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(I.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(I.prototype,"uniforms",{get:function(){return this._uniformList}}));var Ku=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;I.parseImport=function(e){return e=e.replace(Ku,function(i,r,n){var i=I.source(n);return i?I.parseImport(i):(console.error('Shader chunk "'+n+'" not existed in library'),"")}),e};var $u=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;I.import=function(e){e.replace($u,function(t,r,n,a){var a=a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(a){for(var o=n.split("."),s=I.codes,l=0,u;l<o.length-1;)u=o[l++],s[u]||(s[u]={}),s=s[u];u=o[l],s[u]=a}return a})};I.codes={};I.source=function(e){for(var t=e.split("."),r=I.codes,n=0;r&&n<t.length;){var i=t[n++];r=r[i]}return typeof r!="string"?(console.error('Shader "'+e+'" not existed in library'),""):r};const Vo=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`;var ue={};ue.create=function(){var e=new Fe(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ue.clone=function(e){var t=new Fe(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};ue.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};ue.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ue.transpose=function(e,t){if(e===t){var r=t[1],n=t[2],i=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=i,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};ue.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8],c=t[9],d=t[10],h=t[11],_=t[12],v=t[13],p=t[14],m=t[15],x=r*s-n*o,g=r*l-i*o,y=r*u-a*o,E=n*l-i*s,T=n*u-a*s,S=i*u-a*l,b=f*v-c*_,w=f*p-d*_,L=f*m-h*_,R=c*p-d*v,D=c*m-h*v,O=d*m-h*p,M=x*O-g*D+y*R+E*L-T*w+S*b;return M?(M=1/M,e[0]=(s*O-l*D+u*R)*M,e[1]=(i*D-n*O-a*R)*M,e[2]=(v*S-p*T+m*E)*M,e[3]=(d*T-c*S-h*E)*M,e[4]=(l*L-o*O-u*w)*M,e[5]=(r*O-i*L+a*w)*M,e[6]=(p*y-_*S-m*g)*M,e[7]=(f*S-d*y+h*g)*M,e[8]=(o*D-s*L+u*b)*M,e[9]=(n*L-r*D-a*b)*M,e[10]=(_*T-v*y+m*x)*M,e[11]=(c*y-f*T-h*x)*M,e[12]=(s*w-o*R-l*b)*M,e[13]=(r*R-n*w+i*b)*M,e[14]=(v*g-_*E-p*x)*M,e[15]=(f*E-c*g+d*x)*M,e):null};ue.adjoint=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8],c=t[9],d=t[10],h=t[11],_=t[12],v=t[13],p=t[14],m=t[15];return e[0]=s*(d*m-h*p)-c*(l*m-u*p)+v*(l*h-u*d),e[1]=-(n*(d*m-h*p)-c*(i*m-a*p)+v*(i*h-a*d)),e[2]=n*(l*m-u*p)-s*(i*m-a*p)+v*(i*u-a*l),e[3]=-(n*(l*h-u*d)-s*(i*h-a*d)+c*(i*u-a*l)),e[4]=-(o*(d*m-h*p)-f*(l*m-u*p)+_*(l*h-u*d)),e[5]=r*(d*m-h*p)-f*(i*m-a*p)+_*(i*h-a*d),e[6]=-(r*(l*m-u*p)-o*(i*m-a*p)+_*(i*u-a*l)),e[7]=r*(l*h-u*d)-o*(i*h-a*d)+f*(i*u-a*l),e[8]=o*(c*m-h*v)-f*(s*m-u*v)+_*(s*h-u*c),e[9]=-(r*(c*m-h*v)-f*(n*m-a*v)+_*(n*h-a*c)),e[10]=r*(s*m-u*v)-o*(n*m-a*v)+_*(n*u-a*s),e[11]=-(r*(s*h-u*c)-o*(n*h-a*c)+f*(n*u-a*s)),e[12]=-(o*(c*p-d*v)-f*(s*p-l*v)+_*(s*d-l*c)),e[13]=r*(c*p-d*v)-f*(n*p-i*v)+_*(n*d-i*c),e[14]=-(r*(s*p-l*v)-o*(n*p-i*v)+_*(n*l-i*s)),e[15]=r*(s*d-l*c)-o*(n*d-i*c)+f*(n*l-i*s),e};ue.determinant=function(e){var t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8],f=e[9],c=e[10],d=e[11],h=e[12],_=e[13],v=e[14],p=e[15],m=t*o-r*a,x=t*s-n*a,g=t*l-i*a,y=r*s-n*o,E=r*l-i*o,T=n*l-i*s,S=u*_-f*h,b=u*v-c*h,w=u*p-d*h,L=f*v-c*_,R=f*p-d*_,D=c*p-d*v;return m*D-x*R+g*L+y*w-E*b+T*S};ue.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],f=t[7],c=t[8],d=t[9],h=t[10],_=t[11],v=t[12],p=t[13],m=t[14],x=t[15],g=r[0],y=r[1],E=r[2],T=r[3];return e[0]=g*n+y*s+E*c+T*v,e[1]=g*i+y*l+E*d+T*p,e[2]=g*a+y*u+E*h+T*m,e[3]=g*o+y*f+E*_+T*x,g=r[4],y=r[5],E=r[6],T=r[7],e[4]=g*n+y*s+E*c+T*v,e[5]=g*i+y*l+E*d+T*p,e[6]=g*a+y*u+E*h+T*m,e[7]=g*o+y*f+E*_+T*x,g=r[8],y=r[9],E=r[10],T=r[11],e[8]=g*n+y*s+E*c+T*v,e[9]=g*i+y*l+E*d+T*p,e[10]=g*a+y*u+E*h+T*m,e[11]=g*o+y*f+E*_+T*x,g=r[12],y=r[13],E=r[14],T=r[15],e[12]=g*n+y*s+E*c+T*v,e[13]=g*i+y*l+E*d+T*p,e[14]=g*a+y*u+E*h+T*m,e[15]=g*o+y*f+E*_+T*x,e};ue.multiplyAffine=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[4],s=t[5],l=t[6],u=t[8],f=t[9],c=t[10],d=t[12],h=t[13],_=t[14],v=r[0],p=r[1],m=r[2];return e[0]=v*n+p*o+m*u,e[1]=v*i+p*s+m*f,e[2]=v*a+p*l+m*c,v=r[4],p=r[5],m=r[6],e[4]=v*n+p*o+m*u,e[5]=v*i+p*s+m*f,e[6]=v*a+p*l+m*c,v=r[8],p=r[9],m=r[10],e[8]=v*n+p*o+m*u,e[9]=v*i+p*s+m*f,e[10]=v*a+p*l+m*c,v=r[12],p=r[13],m=r[14],e[12]=v*n+p*o+m*u+d,e[13]=v*i+p*s+m*f+h,e[14]=v*a+p*l+m*c+_,e};ue.mul=ue.multiply;ue.mulAffine=ue.multiplyAffine;ue.translate=function(e,t,r){var n=r[0],i=r[1],a=r[2],o,s,l,u,f,c,d,h,_,v,p,m;return t===e?(e[12]=t[0]*n+t[4]*i+t[8]*a+t[12],e[13]=t[1]*n+t[5]*i+t[9]*a+t[13],e[14]=t[2]*n+t[6]*i+t[10]*a+t[14],e[15]=t[3]*n+t[7]*i+t[11]*a+t[15]):(o=t[0],s=t[1],l=t[2],u=t[3],f=t[4],c=t[5],d=t[6],h=t[7],_=t[8],v=t[9],p=t[10],m=t[11],e[0]=o,e[1]=s,e[2]=l,e[3]=u,e[4]=f,e[5]=c,e[6]=d,e[7]=h,e[8]=_,e[9]=v,e[10]=p,e[11]=m,e[12]=o*n+f*i+_*a+t[12],e[13]=s*n+c*i+v*a+t[13],e[14]=l*n+d*i+p*a+t[14],e[15]=u*n+h*i+m*a+t[15]),e};ue.scale=function(e,t,r){var n=r[0],i=r[1],a=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};ue.rotate=function(e,t,r,n){var i=n[0],a=n[1],o=n[2],s=Math.sqrt(i*i+a*a+o*o),l,u,f,c,d,h,_,v,p,m,x,g,y,E,T,S,b,w,L,R,D,O,M,U;return Math.abs(s)<sn?null:(s=1/s,i*=s,a*=s,o*=s,l=Math.sin(r),u=Math.cos(r),f=1-u,c=t[0],d=t[1],h=t[2],_=t[3],v=t[4],p=t[5],m=t[6],x=t[7],g=t[8],y=t[9],E=t[10],T=t[11],S=i*i*f+u,b=a*i*f+o*l,w=o*i*f-a*l,L=i*a*f-o*l,R=a*a*f+u,D=o*a*f+i*l,O=i*o*f+a*l,M=a*o*f-i*l,U=o*o*f+u,e[0]=c*S+v*b+g*w,e[1]=d*S+p*b+y*w,e[2]=h*S+m*b+E*w,e[3]=_*S+x*b+T*w,e[4]=c*L+v*R+g*D,e[5]=d*L+p*R+y*D,e[6]=h*L+m*R+E*D,e[7]=_*L+x*R+T*D,e[8]=c*O+v*M+g*U,e[9]=d*O+p*M+y*U,e[10]=h*O+m*M+E*U,e[11]=_*O+x*M+T*U,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};ue.rotateX=function(e,t,r){var n=Math.sin(r),i=Math.cos(r),a=t[4],o=t[5],s=t[6],l=t[7],u=t[8],f=t[9],c=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+u*n,e[5]=o*i+f*n,e[6]=s*i+c*n,e[7]=l*i+d*n,e[8]=u*i-a*n,e[9]=f*i-o*n,e[10]=c*i-s*n,e[11]=d*i-l*n,e};ue.rotateY=function(e,t,r){var n=Math.sin(r),i=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[8],f=t[9],c=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-u*n,e[1]=o*i-f*n,e[2]=s*i-c*n,e[3]=l*i-d*n,e[8]=a*n+u*i,e[9]=o*n+f*i,e[10]=s*n+c*i,e[11]=l*n+d*i,e};ue.rotateZ=function(e,t,r){var n=Math.sin(r),i=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[4],f=t[5],c=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+u*n,e[1]=o*i+f*n,e[2]=s*i+c*n,e[3]=l*i+d*n,e[4]=u*i-a*n,e[5]=f*i-o*n,e[6]=c*i-s*n,e[7]=d*i-l*n,e};ue.fromRotationTranslation=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=n+n,l=i+i,u=a+a,f=n*s,c=n*l,d=n*u,h=i*l,_=i*u,v=a*u,p=o*s,m=o*l,x=o*u;return e[0]=1-(h+v),e[1]=c+x,e[2]=d-m,e[3]=0,e[4]=c-x,e[5]=1-(f+v),e[6]=_+p,e[7]=0,e[8]=d+m,e[9]=_-p,e[10]=1-(f+h),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e};ue.fromQuat=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r+r,s=n+n,l=i+i,u=r*o,f=n*o,c=n*s,d=i*o,h=i*s,_=i*l,v=a*o,p=a*s,m=a*l;return e[0]=1-c-_,e[1]=f+m,e[2]=d-p,e[3]=0,e[4]=f-m,e[5]=1-u-_,e[6]=h+v,e[7]=0,e[8]=d+p,e[9]=h-v,e[10]=1-u-c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ue.frustum=function(e,t,r,n,i,a,o){var s=1/(r-t),l=1/(i-n),u=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(i+n)*l,e[10]=(o+a)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*u,e[15]=0,e};ue.perspective=function(e,t,r,n,i){var a=1/Math.tan(t/2),o=1/(n-i);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(i+n)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*i*n*o,e[15]=0,e};ue.ortho=function(e,t,r,n,i,a,o){var s=1/(t-r),l=1/(n-i),u=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+r)*s,e[13]=(i+n)*l,e[14]=(o+a)*u,e[15]=1,e};ue.lookAt=function(e,t,r,n){var i,a,o,s,l,u,f,c,d,h,_=t[0],v=t[1],p=t[2],m=n[0],x=n[1],g=n[2],y=r[0],E=r[1],T=r[2];return Math.abs(_-y)<sn&&Math.abs(v-E)<sn&&Math.abs(p-T)<sn?ue.identity(e):(f=_-y,c=v-E,d=p-T,h=1/Math.sqrt(f*f+c*c+d*d),f*=h,c*=h,d*=h,i=x*d-g*c,a=g*f-m*d,o=m*c-x*f,h=Math.sqrt(i*i+a*a+o*o),h?(h=1/h,i*=h,a*=h,o*=h):(i=0,a=0,o=0),s=c*o-d*a,l=d*i-f*o,u=f*a-c*i,h=Math.sqrt(s*s+l*l+u*u),h?(h=1/h,s*=h,l*=h,u*=h):(s=0,l=0,u=0),e[0]=i,e[1]=s,e[2]=f,e[3]=0,e[4]=a,e[5]=l,e[6]=c,e[7]=0,e[8]=o,e[9]=u,e[10]=d,e[11]=0,e[12]=-(i*_+a*v+o*p),e[13]=-(s*_+l*v+u*p),e[14]=-(f*_+c*v+d*p),e[15]=1,e)};ue.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};const N=ue;var W={};W.create=function(){var e=new Fe(3);return e[0]=0,e[1]=0,e[2]=0,e};W.clone=function(e){var t=new Fe(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};W.fromValues=function(e,t,r){var n=new Fe(3);return n[0]=e,n[1]=t,n[2]=r,n};W.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};W.set=function(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e};W.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e};W.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e};W.sub=W.subtract;W.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e};W.mul=W.multiply;W.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e};W.div=W.divide;W.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e};W.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e};W.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e};W.scaleAndAdd=function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e};W.distance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(r*r+n*n+i*i)};W.dist=W.distance;W.squaredDistance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2];return r*r+n*n+i*i};W.sqrDist=W.squaredDistance;W.length=function(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)};W.len=W.length;W.squaredLength=function(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n};W.sqrLen=W.squaredLength;W.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};W.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};W.normalize=function(e,t){var r=t[0],n=t[1],i=t[2],a=r*r+n*n+i*i;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e};W.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};W.cross=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=r[0],s=r[1],l=r[2];return e[0]=i*l-a*s,e[1]=a*o-n*l,e[2]=n*s-i*o,e};W.lerp=function(e,t,r,n){var i=t[0],a=t[1],o=t[2];return e[0]=i+n*(r[0]-i),e[1]=a+n*(r[1]-a),e[2]=o+n*(r[2]-o),e};W.random=function(e,t){t=t||1;var r=dr()*2*Math.PI,n=dr()*2-1,i=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*i,e[1]=Math.sin(r)*i,e[2]=n*t,e};W.transformMat4=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=r[3]*n+r[7]*i+r[11]*a+r[15];return o=o||1,e[0]=(r[0]*n+r[4]*i+r[8]*a+r[12])/o,e[1]=(r[1]*n+r[5]*i+r[9]*a+r[13])/o,e[2]=(r[2]*n+r[6]*i+r[10]*a+r[14])/o,e};W.transformMat3=function(e,t,r){var n=t[0],i=t[1],a=t[2];return e[0]=n*r[0]+i*r[3]+a*r[6],e[1]=n*r[1]+i*r[4]+a*r[7],e[2]=n*r[2]+i*r[5]+a*r[8],e};W.transformQuat=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],f=u*n+s*a-l*i,c=u*i+l*n-o*a,d=u*a+o*i-s*n,h=-o*n-s*i-l*a;return e[0]=f*u+h*-o+c*-l-d*-s,e[1]=c*u+h*-s+d*-o-f*-l,e[2]=d*u+h*-l+f*-s-c*-o,e};W.rotateX=function(e,t,r,n){var i=[],a=[];return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],a[0]=i[0],a[1]=i[1]*Math.cos(n)-i[2]*Math.sin(n),a[2]=i[1]*Math.sin(n)+i[2]*Math.cos(n),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};W.rotateY=function(e,t,r,n){var i=[],a=[];return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],a[0]=i[2]*Math.sin(n)+i[0]*Math.cos(n),a[1]=i[1],a[2]=i[2]*Math.cos(n)-i[0]*Math.sin(n),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};W.rotateZ=function(e,t,r,n){var i=[],a=[];return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],a[0]=i[0]*Math.cos(n)-i[1]*Math.sin(n),a[1]=i[0]*Math.sin(n)+i[1]*Math.cos(n),a[2]=i[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};W.forEach=function(){var e=W.create();return function(t,r,n,i,a,o){var s,l;for(r||(r=3),n||(n=0),i?l=Math.min(i*r+n,t.length):l=t.length,s=n;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}();W.angle=function(e,t){var r=W.fromValues(e[0],e[1],e[2]),n=W.fromValues(t[0],t[1],t[2]);W.normalize(r,r),W.normalize(n,n);var i=W.dot(r,n);return i>1?0:Math.acos(i)};const A=W;I.import(Vo);var _e=N.create,ka={};function Wa(e){return e.material}function Qu(e,t,r){return t.uniforms[r].value}function Ju(e,t,r,n){return r!==n}function ef(e){return!0}function Xa(){}var qa={float:C.FLOAT,byte:C.BYTE,ubyte:C.UNSIGNED_BYTE,short:C.SHORT,ushort:C.UNSIGNED_SHORT};function tf(e,t,r){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=r,this.vao=null}function rf(e){var t,r;this.bind=function(n){t||(t=we.createCanvas(),t.width=t.height=1,t.getContext("2d"));var i=n.gl,a=!r;a&&(r=i.createTexture()),i.bindTexture(i.TEXTURE_2D,r),a&&i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,t)},this.unbind=function(n){n.gl.bindTexture(n.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var Mt=Qe.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=we.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new Lu(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new Uo(this),this._placeholderTexture=new rf},{resize:function(e,t){var r=this.canvas,n=this.devicePixelRatio;e!=null?(r.style&&(r.style.width=e+"px",r.style.height=t+"px"),r.width=e*n,r.height=t*n,this._width=e,this._height=t):(this._width=r.width/n,this._height=r.height/n),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,r,n,i){if(typeof e=="object"){var a=e;e=a.x,t=a.y,r=a.width,n=a.height,i=a.devicePixelRatio}i=i||this.devicePixelRatio,this.gl.viewport(e*i,t*i,r*i,n*i),this.viewport={x:e,y:t,width:r,height:n,devicePixelRatio:i}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,r,n){var i=this.gl,a=this.clearColor;if(this.clearBit){i.colorMask(!0,!0,!0,!0),i.depthMask(!0);var o=this.viewport,s=!1,l=o.devicePixelRatio;(o.width!==this._width||o.height!==this._height||l&&l!==this.devicePixelRatio||o.x||o.y)&&(s=!0,i.enable(i.SCISSOR_TEST),i.scissor(o.x*l,o.y*l,o.width*l,o.height*l)),i.clearColor(a[0],a[1],a[2],a[3]),i.clear(this.clearBit),s&&i.disable(i.SCISSOR_TEST)}if(r||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var u=e.updateRenderList(t,!0);this._sceneRendering=e;var f=u.opaque,c=u.transparent,d=e.material;e.trigger("beforerender",this,e,t,u),n?(this.renderPreZ(f,e,t),i.depthFunc(i.LEQUAL)):i.depthFunc(i.LESS);for(var h=_e(),_=A.create(),v=0;v<c.length;v++){var p=c[v];N.multiplyAffine(h,t.viewMatrix.array,p.worldTransform.array),A.transformMat4(_,p.position.array,h),p.__depth=_[2]}this.renderPass(f,t,{getMaterial:function(m){return d||m.material},sortCompare:this.opaqueSortCompare}),this.renderPass(c,t,{getMaterial:function(m){return d||m.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,u),this._sceneRendering=null},getProgram:function(e,t,r){return t=t||e.material,this._programMgr.getProgram(e,t,r)},validateProgram:function(e){if(e.__error){var t=e.__error;if(ka[e.__uid__])return;if(ka[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,r){var n=r&&r.getMaterial||Wa;t=t||null;for(var i=0;i<e.length;i++){var a=e[i],o=n.call(this,a);if(i>0){var s=e[i-1],l=s.joints?s.joints.length:0,u=a.joints?a.joints.length:0;if(u===l&&a.material===s.material&&a.lightGroup===s.lightGroup){a.__program=s.__program;continue}}var f=this._programMgr.getProgram(a,o,t);this.validateProgram(f),a.__program=f}},renderPass:function(e,t,r){this.trigger("beforerenderpass",this,e,t,r),r=r||{},r.getMaterial=r.getMaterial||Wa,r.getUniform=r.getUniform||Qu,r.isMaterialChanged=r.isMaterialChanged||Ju,r.beforeRender=r.beforeRender||Xa,r.afterRender=r.afterRender||Xa;var n=r.ifRender||ef;this.updatePrograms(e,this._sceneRendering,r),r.sortCompare&&e.sort(r.sortCompare);var i=this.viewport,a=i.devicePixelRatio,o=[i.x*a,i.y*a,i.width*a,i.height*a],s=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*s,this._height*s],u=[o[2],o[3]],f=Date.now();t?(N.copy(ve.VIEW,t.viewMatrix.array),N.copy(ve.PROJECTION,t.projectionMatrix.array),N.copy(ve.VIEWINVERSE,t.worldTransform.array)):(N.identity(ve.VIEW),N.identity(ve.PROJECTION),N.identity(ve.VIEWINVERSE)),N.multiply(ve.VIEWPROJECTION,ve.PROJECTION,ve.VIEW),N.invert(ve.PROJECTIONINVERSE,ve.PROJECTION),N.invert(ve.VIEWPROJECTIONINVERSE,ve.VIEWPROJECTION);for(var c=this.gl,d=this._sceneRendering,h,_,v,p,m,x,g,y,E,T,S,b,w=null,L=0;L<e.length;L++){var R=e[L],D=R.worldTransform!=null,O;if(n(R)){D&&(O=R.isSkinnedMesh&&R.isSkinnedMesh()?R.offsetMatrix?R.offsetMatrix.array:ve.IDENTITY:R.worldTransform.array);var M=R.geometry,U=r.getMaterial.call(this,R),F=R.__program,G=U.shader,K=M.__uid__+"-"+F.__uid__,ae=K!==T;T=K,ae&&w&&w.bindVertexArrayOES(null),D&&(N.copy(ve.WORLD,O),N.multiply(ve.WORLDVIEWPROJECTION,ve.VIEWPROJECTION,O),N.multiplyAffine(ve.WORLDVIEW,ve.VIEW,O),(G.matrixSemantics.WORLDINVERSE||G.matrixSemantics.WORLDINVERSETRANSPOSE)&&N.invert(ve.WORLDINVERSE,O),(G.matrixSemantics.WORLDVIEWINVERSE||G.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&N.invert(ve.WORLDVIEWINVERSE,ve.WORLDVIEW),(G.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||G.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&N.invert(ve.WORLDVIEWPROJECTIONINVERSE,ve.WORLDVIEWPROJECTION)),R.beforeRender&&R.beforeRender(this),r.beforeRender.call(this,R,U,h);var de=F!==_;de?(F.bind(this),F.setUniformOfSemantic(c,"VIEWPORT",o),F.setUniformOfSemantic(c,"WINDOW_SIZE",l),t&&(F.setUniformOfSemantic(c,"NEAR",t.near),F.setUniformOfSemantic(c,"FAR",t.far)),F.setUniformOfSemantic(c,"DEVICEPIXELRATIO",a),F.setUniformOfSemantic(c,"TIME",f),F.setUniformOfSemantic(c,"VIEWPORT_SIZE",u),d&&d.setLightUniforms(F,R.lightGroup,this)):F=_,(de||r.isMaterialChanged(R,v,U,h))&&(U.depthTest!==p&&(U.depthTest?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST),p=U.depthTest),U.depthMask!==m&&(c.depthMask(U.depthMask),m=U.depthMask),U.transparent!==E&&(U.transparent?c.enable(c.BLEND):c.disable(c.BLEND),E=U.transparent),U.transparent&&(U.blend?U.blend(c):(c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA))),b=this._bindMaterial(R,U,F,v||null,h||null,_||null,r.getUniform),h=U);var le=G.matrixSemanticKeys;if(D)for(var Se=0;Se<le.length;Se++){var xe=le[Se],Me=G.matrixSemantics[xe],Ue=ve[xe];if(Me.isTranspose){var He=ve[Me.semanticNoTranspose];N.transpose(Ue,He)}F.setUniform(c,Me.type,Me.symbol,Ue)}R.cullFace!==g&&(g=R.cullFace,c.cullFace(g)),R.frontFace!==y&&(y=R.frontFace,c.frontFace(y)),R.culling!==x&&(x=R.culling,x?c.enable(c.CULL_FACE):c.disable(c.CULL_FACE)),this._updateSkeleton(R,F,b),ae&&(S=this._bindVAO(w,G,M,F)),this._renderObject(R,S,F),r.afterRender(this,R),R.afterRender&&R.afterRender(this),_=F,v=R}}this.trigger("afterrenderpass",this,e,t,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,r){var n=this.gl,i=e.skeleton;if(i)if(i.update(),e.joints.length>this.getMaxJointNumber()){var a=i.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,a,r),t.setUniform(n,"1i","skinMatricesTexture",r),t.setUniform(n,"1f","skinMatricesTextureSize",a.width)}else{var o=i.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(n,"SKIN_MATRIX",o)}},_renderObject:function(e,t,r){var n=this.gl,i=e.geometry,a=e.mode;a==null&&(a=4);var o=null,s=e.isInstancedMesh&&e.isInstancedMesh();if(s&&(o=this.getGLExtension("ANGLE_instanced_arrays"),!o)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var l;if(s&&(l=this._bindInstancedAttributes(e,r,o)),t.indicesBuffer){var u=this.getGLExtension("OES_element_index_uint"),f=u&&i.indices instanceof Uint32Array,c=f?n.UNSIGNED_INT:n.UNSIGNED_SHORT;s?o.drawElementsInstancedANGLE(a,t.indicesBuffer.count,c,0,e.getInstanceCount()):n.drawElements(a,t.indicesBuffer.count,c,0)}else s?o.drawArraysInstancedANGLE(a,0,i.vertexCount,e.getInstanceCount()):n.drawArrays(a,0,i.vertexCount);if(s)for(var d=0;d<l.length;d++)n.disableVertexAttribArray(l[d])},_bindInstancedAttributes:function(e,t,r){for(var n=this.gl,i=e.getInstancedAttributesBuffers(this),a=[],o=0;o<i.length;o++){var s=i[o],l=t.getAttribLocation(n,s.symbol);if(!(l<0)){var u=qa[s.type]||n.FLOAT;n.enableVertexAttribArray(l),n.bindBuffer(n.ARRAY_BUFFER,s.buffer),n.vertexAttribPointer(l,s.size,u,!1,0,0),r.vertexAttribDivisorANGLE(l,s.divisor),a.push(l)}}return a},_bindMaterial:function(e,t,r,n,i,a,o){for(var s=this.gl,l=a===r,u=r.currentTextureSlot(),f=t.getEnabledUniforms(),c=t.getTextureUniforms(),d=this._placeholderTexture,h=0;h<c.length;h++){var _=c[h],v=o(e,t,_),p=t.uniforms[_].type;if(p==="t"&&v)v.__slot=-1;else if(p==="tv")for(var m=0;m<v.length;m++)v[m]&&(v[m].__slot=-1)}d.__slot=-1;for(var h=0;h<f.length;h++){var _=f[h],x=t.uniforms[_],v=o(e,t,_),p=x.type,g=p==="t";if(g&&(!v||!v.isRenderable())&&(v=d),i&&l){var y=o(n,i,_);if(g&&(!y||!y.isRenderable())&&(y=d),y===v){if(g)r.takeCurrentTextureSlot(this,null);else if(p==="tv"&&v)for(var m=0;m<v.length;m++)r.takeCurrentTextureSlot(this,null);continue}}if(v!=null)if(g)if(v.__slot<0){var E=r.currentTextureSlot(),T=r.setUniform(s,"1i",_,E);T&&(r.takeCurrentTextureSlot(this,v),v.__slot=E)}else r.setUniform(s,"1i",_,v.__slot);else if(Array.isArray(v)){if(v.length===0)continue;if(p==="tv"){if(!r.hasUniform(_))continue;for(var S=[],m=0;m<v.length;m++){var b=v[m];if(b.__slot<0){var E=r.currentTextureSlot();S.push(E),r.takeCurrentTextureSlot(this,b),b.__slot=E}else S.push(b.__slot)}r.setUniform(s,"1iv",_,S)}else r.setUniform(s,x.type,_,v)}else r.setUniform(s,x.type,_,v)}var w=r.currentTextureSlot();return r.resetTextureSlot(u),w},_bindVAO:function(e,t,r,n){var i=!r.dynamic,a=this.gl,o=this.__uid__+"-"+n.__uid__,s=r.__vaoCache[o];if(!s){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var u=l[0],f=u.attributeBuffers,y=u.indicesBuffer,g=[],c=[],d=0;d<f.length;d++){var h=f[d],_=h.name,v=h.semantic,p;if(v){var m=t.attributeSemantics[v];p=m&&m.symbol}else p=_;p&&n.attributes[p]&&(g.push(h),c.push(p))}s=new tf(g,c,y),i&&(r.__vaoCache[o]=s)}var x=!0;e&&i&&(s.vao==null?s.vao=e.createVertexArrayOES():x=!1,e.bindVertexArrayOES(s.vao));var g=s.availableAttributes,y=s.indicesBuffer;if(x){for(var E=n.enableAttributes(this,s.availableAttributeSymbols,e&&i&&s),d=0;d<g.length;d++){var T=E[d];if(T!==-1){var h=g[d],S=h.buffer,b=h.size,w=qa[h.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,S),a.vertexAttribPointer(T,b,w,!1,0,0)}}r.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,y.buffer)}return s},renderPreZ:function(e,t,r){var n=this.gl,i=this._prezMaterial||new xt({shader:new I(I.source("clay.prez.vertex"),I.source("clay.prez.fragment"))});this._prezMaterial=i,n.colorMask(!1,!1,!1,!1),n.depthMask(!0),this.renderPass(e,r,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,o){var s=a.material,l=o.material;return s.get("diffuseMap")!==l.get("diffuseMap")||(s.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(a,o,s){if(s==="alphaMap")return a.material.get("diffuseMap");if(s==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var l=a.material.get("alphaCutoff");return l||0}return 0}else return s==="uvRepeat"?a.material.get("uvRepeat"):s==="uvOffset"?a.material.get("uvOffset"):o.get(s)},getMaterial:function(){return i},sort:this.opaqueSortCompare}),n.colorMask(!0,!0,!0,!0),n.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,r){e.getParent()&&e.getParent().remove(e);var n={};e.traverse(function(i){var a=i.material;if(i.geometry&&t&&i.geometry.dispose(this),r&&a&&!n[a.__uid__]){for(var o=a.getTextureUniforms(),s=0;s<o.length;s++){var l=o[s],u=a.uniforms[l].value,f=a.uniforms[l].type;if(u){if(f==="t")u.dispose&&u.dispose(this);else if(f==="tv")for(var c=0;c<u.length;c++)u[c]&&u[c].dispose&&u[c].dispose(this)}}n[a.__uid__]=!0}i.dispose&&i.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,r){r||(r=new et),t=this._height-t;var n=this.viewport,i=r.array;return i[0]=(e-n.x)/n.width,i[0]=i[0]*2-1,i[1]=(t-n.y)/n.height,i[1]=i[1]*2-1,r}});Mt.opaqueSortCompare=Mt.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};Mt.transparentSortCompare=Mt.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var ve={IDENTITY:_e(),WORLD:_e(),VIEW:_e(),PROJECTION:_e(),WORLDVIEW:_e(),VIEWPROJECTION:_e(),WORLDVIEWPROJECTION:_e(),WORLDINVERSE:_e(),VIEWINVERSE:_e(),PROJECTIONINVERSE:_e(),WORLDVIEWINVERSE:_e(),VIEWPROJECTIONINVERSE:_e(),WORLDVIEWPROJECTIONINVERSE:_e(),WORLDTRANSPOSE:_e(),VIEWTRANSPOSE:_e(),PROJECTIONTRANSPOSE:_e(),WORLDVIEWTRANSPOSE:_e(),VIEWPROJECTIONTRANSPOSE:_e(),WORLDVIEWPROJECTIONTRANSPOSE:_e(),WORLDINVERSETRANSPOSE:_e(),VIEWINVERSETRANSPOSE:_e(),PROJECTIONINVERSETRANSPOSE:_e(),WORLDVIEWINVERSETRANSPOSE:_e(),VIEWPROJECTIONINVERSETRANSPOSE:_e(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:_e()};Mt.COLOR_BUFFER_BIT=C.COLOR_BUFFER_BIT;Mt.DEPTH_BUFFER_BIT=C.DEPTH_BUFFER_BIT;Mt.STENCIL_BUFFER_BIT=C.STENCIL_BUFFER_BIT;const Ir=Mt;var k=function(e,t,r){e=e||0,t=t||0,r=r||0,this.array=A.fromValues(e,t,r),this._dirty=!0};k.prototype={constructor:k,add:function(e){return A.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new k(this.x,this.y,this.z)},copy:function(e){return A.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return A.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return A.dist(this.array,e.array)},distance:function(e){return A.distance(this.array,e.array)},div:function(e){return A.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return A.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return A.dot(this.array,e.array)},len:function(){return A.len(this.array)},length:function(){return A.length(this.array)},lerp:function(e,t,r){return A.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return A.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return A.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return A.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return A.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return A.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return A.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return A.random(this.array,e),this._dirty=!0,this},scale:function(e){return A.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return A.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return A.sqrDist(this.array,e.array)},squaredDistance:function(e){return A.squaredDistance(this.array,e.array)},sqrLen:function(){return A.sqrLen(this.array)},squaredLength:function(){return A.squaredLength(this.array)},sub:function(e){return A.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return A.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return A.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return A.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return A.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var r=-1/t[2];t[0]=e[0]*t[0]*r,t[1]=e[5]*t[1]*r,t[2]=(e[10]*t[2]+e[14])*r}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){k.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){k.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Kr=Object.defineProperty;if(Kr){var ri=k.prototype;Kr(ri,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Kr(ri,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Kr(ri,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}k.add=function(e,t,r){return A.add(e.array,t.array,r.array),e._dirty=!0,e};k.set=function(e,t,r,n){A.set(e.array,t,r,n),e._dirty=!0};k.copy=function(e,t){return A.copy(e.array,t.array),e._dirty=!0,e};k.cross=function(e,t,r){return A.cross(e.array,t.array,r.array),e._dirty=!0,e};k.dist=function(e,t){return A.distance(e.array,t.array)};k.distance=k.dist;k.div=function(e,t,r){return A.divide(e.array,t.array,r.array),e._dirty=!0,e};k.divide=k.div;k.dot=function(e,t){return A.dot(e.array,t.array)};k.len=function(e){return A.length(e.array)};k.lerp=function(e,t,r,n){return A.lerp(e.array,t.array,r.array,n),e._dirty=!0,e};k.min=function(e,t,r){return A.min(e.array,t.array,r.array),e._dirty=!0,e};k.max=function(e,t,r){return A.max(e.array,t.array,r.array),e._dirty=!0,e};k.mul=function(e,t,r){return A.multiply(e.array,t.array,r.array),e._dirty=!0,e};k.multiply=k.mul;k.negate=function(e,t){return A.negate(e.array,t.array),e._dirty=!0,e};k.normalize=function(e,t){return A.normalize(e.array,t.array),e._dirty=!0,e};k.random=function(e,t){return A.random(e.array,t),e._dirty=!0,e};k.scale=function(e,t,r){return A.scale(e.array,t.array,r),e._dirty=!0,e};k.scaleAndAdd=function(e,t,r,n){return A.scaleAndAdd(e.array,t.array,r.array,n),e._dirty=!0,e};k.sqrDist=function(e,t){return A.sqrDist(e.array,t.array)};k.squaredDistance=k.sqrDist;k.sqrLen=function(e){return A.sqrLen(e.array)};k.squaredLength=k.sqrLen;k.sub=function(e,t,r){return A.subtract(e.array,t.array,r.array),e._dirty=!0,e};k.subtract=k.sub;k.transformMat3=function(e,t,r){return A.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};k.transformMat4=function(e,t,r){return A.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};k.transformQuat=function(e,t,r){return A.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};function nt(e,t,r){return e<t?t:e>r?r:e}var se=Math.atan2,it=Math.asin,ar=Math.abs;k.eulerFromQuat=function(e,t,d){e._dirty=!0,t=t.array;var n=e.array,i=t[0],a=t[1],o=t[2],s=t[3],l=i*i,u=a*a,f=o*o,c=s*s,d=(d||"XYZ").toUpperCase();switch(d){case"XYZ":n[0]=se(2*(i*s-a*o),c-l-u+f),n[1]=it(nt(2*(i*o+a*s),-1,1)),n[2]=se(2*(o*s-i*a),c+l-u-f);break;case"YXZ":n[0]=it(nt(2*(i*s-a*o),-1,1)),n[1]=se(2*(i*o+a*s),c-l-u+f),n[2]=se(2*(i*a+o*s),c-l+u-f);break;case"ZXY":n[0]=it(nt(2*(i*s+a*o),-1,1)),n[1]=se(2*(a*s-o*i),c-l-u+f),n[2]=se(2*(o*s-i*a),c-l+u-f);break;case"ZYX":n[0]=se(2*(i*s+o*a),c-l-u+f),n[1]=it(nt(2*(a*s-i*o),-1,1)),n[2]=se(2*(i*a+o*s),c+l-u-f);break;case"YZX":n[0]=se(2*(i*s-o*a),c-l+u-f),n[1]=se(2*(a*s-i*o),c+l-u-f),n[2]=it(nt(2*(i*a+o*s),-1,1));break;case"XZY":n[0]=se(2*(i*s+a*o),c-l+u-f),n[1]=se(2*(i*o+a*s),c+l-u-f),n[2]=it(nt(2*(o*s-i*a),-1,1));break;default:console.warn("Unkown order: "+d)}return e};k.eulerFromMat3=function(e,t,_){var n=t.array,i=n[0],a=n[3],o=n[6],s=n[1],l=n[4],u=n[7],f=n[2],c=n[5],d=n[8],h=e.array,_=(_||"XYZ").toUpperCase();switch(_){case"XYZ":h[1]=it(nt(o,-1,1)),ar(o)<.99999?(h[0]=se(-u,d),h[2]=se(-a,i)):(h[0]=se(c,l),h[2]=0);break;case"YXZ":h[0]=it(-nt(u,-1,1)),ar(u)<.99999?(h[1]=se(o,d),h[2]=se(s,l)):(h[1]=se(-f,i),h[2]=0);break;case"ZXY":h[0]=it(nt(c,-1,1)),ar(c)<.99999?(h[1]=se(-f,d),h[2]=se(-a,l)):(h[1]=0,h[2]=se(s,i));break;case"ZYX":h[1]=it(-nt(f,-1,1)),ar(f)<.99999?(h[0]=se(c,d),h[2]=se(s,i)):(h[0]=0,h[2]=se(-a,l));break;case"YZX":h[2]=it(nt(s,-1,1)),ar(s)<.99999?(h[0]=se(-u,l),h[1]=se(-f,i)):(h[0]=0,h[1]=se(o,d));break;case"XZY":h[2]=it(-nt(a,-1,1)),ar(a)<.99999?(h[0]=se(c,l),h[1]=se(o,i)):(h[0]=se(-u,d),h[1]=0);break;default:console.warn("Unkown order: "+_)}return e._dirty=!0,e};Object.defineProperties(k,{POSITIVE_X:{get:function(){return new k(1,0,0)}},NEGATIVE_X:{get:function(){return new k(-1,0,0)}},POSITIVE_Y:{get:function(){return new k(0,1,0)}},NEGATIVE_Y:{get:function(){return new k(0,-1,0)}},POSITIVE_Z:{get:function(){return new k(0,0,1)}},NEGATIVE_Z:{get:function(){return new k(0,0,-1)}},UP:{get:function(){return new k(0,1,0)}},ZERO:{get:function(){return new k}}});const P=k;var ni=1e-5,ln=function(e,t){this.origin=e||new P,this.direction=t||new P};ln.prototype={constructor:ln,intersectPlane:function(e,t){var r=e.normal.array,n=e.distance,i=this.origin.array,a=this.direction.array,o=A.dot(r,a);if(o===0)return null;t||(t=new P);var s=(A.dot(r,i)-n)/o;return A.scaleAndAdd(t.array,i,a,-s),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=A.dot(e.normal.array,this.direction.array);A.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=A.create();return function(t){A.sub(e,t,this.origin.array);var r=A.dot(e,this.direction.array);if(r<0)return A.distance(this.origin.array,t);var n=A.lenSquared(e);return Math.sqrt(n-r*r)}}(),intersectSphere:function(){var e=A.create();return function(t,r,n){var i=this.origin.array,a=this.direction.array;t=t.array,A.sub(e,t,i);var o=A.dot(e,a),s=A.squaredLength(e),l=s-o*o,u=r*r;if(!(l>u)){var f=Math.sqrt(u-l),c=o-f,d=o+f;return n||(n=new P),c<0?d<0?null:(A.scaleAndAdd(n.array,i,a,d),n):(A.scaleAndAdd(n.array,i,a,c),n)}}}(),intersectBoundingBox:function(e,t){var r=this.direction.array,n=this.origin.array,i=e.min.array,a=e.max.array,o=1/r[0],s=1/r[1],l=1/r[2],u,f,c,d,h,_;if(o>=0?(u=(i[0]-n[0])*o,f=(a[0]-n[0])*o):(f=(i[0]-n[0])*o,u=(a[0]-n[0])*o),s>=0?(c=(i[1]-n[1])*s,d=(a[1]-n[1])*s):(d=(i[1]-n[1])*s,c=(a[1]-n[1])*s),u>d||c>f||((c>u||u!==u)&&(u=c),(d<f||f!==f)&&(f=d),l>=0?(h=(i[2]-n[2])*l,_=(a[2]-n[2])*l):(_=(i[2]-n[2])*l,h=(a[2]-n[2])*l),u>_||h>f)||((h>u||u!==u)&&(u=h),(_<f||f!==f)&&(f=_),f<0))return null;var v=u>=0?u:f;return t||(t=new P),A.scaleAndAdd(t.array,n,r,v),t},intersectTriangle:function(){var e=A.create(),t=A.create(),r=A.create(),n=A.create();return function(i,a,o,s,l,u){var f=this.direction.array,c=this.origin.array;i=i.array,a=a.array,o=o.array,A.sub(e,a,i),A.sub(t,o,i),A.cross(n,t,f);var d=A.dot(e,n);if(s){if(d>-ni)return null}else if(d>-ni&&d<ni)return null;A.sub(r,c,i);var h=A.dot(n,r)/d;if(h<0||h>1)return null;A.cross(n,e,r);var _=A.dot(f,n)/d;if(_<0||_>1||h+_>1)return null;A.cross(n,e,t);var v=-A.dot(r,n)/d;return v<0?null:(l||(l=new P),u&&P.set(u,1-h-_,h,_),A.scaleAndAdd(l.array,c,f,v),l)}}(),applyTransform:function(e){P.add(this.direction,this.direction,this.origin),P.transformMat4(this.origin,this.origin,e),P.transformMat4(this.direction,this.direction,e),P.sub(this.direction,this.direction,this.origin),P.normalize(this.direction,this.direction)},copy:function(e){P.copy(this.origin,e.origin),P.copy(this.direction,e.direction)},clone:function(){var e=new ln;return e.copy(this),e}};const En=ln;var Y={};Y.create=function(){var e=new Fe(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};Y.clone=function(e){var t=new Fe(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};Y.fromValues=function(e,t,r,n){var i=new Fe(4);return i[0]=e,i[1]=t,i[2]=r,i[3]=n,i};Y.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};Y.set=function(e,t,r,n,i){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e};Y.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e};Y.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e};Y.sub=Y.subtract;Y.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e};Y.mul=Y.multiply;Y.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e};Y.div=Y.divide;Y.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e};Y.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e};Y.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e};Y.scaleAndAdd=function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e};Y.distance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+n*n+i*i+a*a)};Y.dist=Y.distance;Y.squaredDistance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2],a=t[3]-e[3];return r*r+n*n+i*i+a*a};Y.sqrDist=Y.squaredDistance;Y.length=function(e){var t=e[0],r=e[1],n=e[2],i=e[3];return Math.sqrt(t*t+r*r+n*n+i*i)};Y.len=Y.length;Y.squaredLength=function(e){var t=e[0],r=e[1],n=e[2],i=e[3];return t*t+r*r+n*n+i*i};Y.sqrLen=Y.squaredLength;Y.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};Y.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};Y.normalize=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r*r+n*n+i*i+a*a;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e};Y.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};Y.lerp=function(e,t,r,n){var i=t[0],a=t[1],o=t[2],s=t[3];return e[0]=i+n*(r[0]-i),e[1]=a+n*(r[1]-a),e[2]=o+n*(r[2]-o),e[3]=s+n*(r[3]-s),e};Y.random=function(e,t){return t=t||1,e[0]=dr(),e[1]=dr(),e[2]=dr(),e[3]=dr(),Y.normalize(e,e),Y.scale(e,e,t),e};Y.transformMat4=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3];return e[0]=r[0]*n+r[4]*i+r[8]*a+r[12]*o,e[1]=r[1]*n+r[5]*i+r[9]*a+r[13]*o,e[2]=r[2]*n+r[6]*i+r[10]*a+r[14]*o,e[3]=r[3]*n+r[7]*i+r[11]*a+r[15]*o,e};Y.transformQuat=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],f=u*n+s*a-l*i,c=u*i+l*n-o*a,d=u*a+o*i-s*n,h=-o*n-s*i-l*a;return e[0]=f*u+h*-o+c*-l-d*-s,e[1]=c*u+h*-s+d*-o-f*-l,e[2]=d*u+h*-l+f*-s-c*-o,e};Y.forEach=function(){var e=Y.create();return function(t,r,n,i,a,o){var s,l;for(r||(r=4),n||(n=0),i?l=Math.min(i*r+n,t.length):l=t.length,s=n;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}();const B=Y;var Re={};Re.create=function(){var e=new Fe(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Re.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};Re.clone=function(e){var t=new Fe(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};Re.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Re.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Re.transpose=function(e,t){if(e===t){var r=t[1],n=t[2],i=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=n,e[7]=i}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};Re.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8],c=f*o-s*u,d=-f*a+s*l,h=u*a-o*l,_=r*c+n*d+i*h;return _?(_=1/_,e[0]=c*_,e[1]=(-f*n+i*u)*_,e[2]=(s*n-i*o)*_,e[3]=d*_,e[4]=(f*r-i*l)*_,e[5]=(-s*r+i*a)*_,e[6]=h*_,e[7]=(-u*r+n*l)*_,e[8]=(o*r-n*a)*_,e):null};Re.adjoint=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8];return e[0]=o*f-s*u,e[1]=i*u-n*f,e[2]=n*s-i*o,e[3]=s*l-a*f,e[4]=r*f-i*l,e[5]=i*a-r*s,e[6]=a*u-o*l,e[7]=n*l-r*u,e[8]=r*o-n*a,e};Re.determinant=function(e){var t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8];return t*(u*a-o*l)+r*(-u*i+o*s)+n*(l*i-a*s)};Re.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],f=t[7],c=t[8],d=r[0],h=r[1],_=r[2],v=r[3],p=r[4],m=r[5],x=r[6],g=r[7],y=r[8];return e[0]=d*n+h*o+_*u,e[1]=d*i+h*s+_*f,e[2]=d*a+h*l+_*c,e[3]=v*n+p*o+m*u,e[4]=v*i+p*s+m*f,e[5]=v*a+p*l+m*c,e[6]=x*n+g*o+y*u,e[7]=x*i+g*s+y*f,e[8]=x*a+g*l+y*c,e};Re.mul=Re.multiply;Re.translate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],f=t[7],c=t[8],d=r[0],h=r[1];return e[0]=n,e[1]=i,e[2]=a,e[3]=o,e[4]=s,e[5]=l,e[6]=d*n+h*o+u,e[7]=d*i+h*s+f,e[8]=d*a+h*l+c,e};Re.rotate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],f=t[7],c=t[8],d=Math.sin(r),h=Math.cos(r);return e[0]=h*n+d*o,e[1]=h*i+d*s,e[2]=h*a+d*l,e[3]=h*o-d*n,e[4]=h*s-d*i,e[5]=h*l-d*a,e[6]=u,e[7]=f,e[8]=c,e};Re.scale=function(e,t,r){var n=r[0],i=r[1];return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Re.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};Re.fromQuat=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r+r,s=n+n,l=i+i,u=r*o,f=n*o,c=n*s,d=i*o,h=i*s,_=i*l,v=a*o,p=a*s,m=a*l;return e[0]=1-c-_,e[3]=f-m,e[6]=d+p,e[1]=f+m,e[4]=1-u-_,e[7]=h-v,e[2]=d-p,e[5]=h+v,e[8]=1-u-c,e};Re.normalFromMat4=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8],c=t[9],d=t[10],h=t[11],_=t[12],v=t[13],p=t[14],m=t[15],x=r*s-n*o,g=r*l-i*o,y=r*u-a*o,E=n*l-i*s,T=n*u-a*s,S=i*u-a*l,b=f*v-c*_,w=f*p-d*_,L=f*m-h*_,R=c*p-d*v,D=c*m-h*v,O=d*m-h*p,M=x*O-g*D+y*R+E*L-T*w+S*b;return M?(M=1/M,e[0]=(s*O-l*D+u*R)*M,e[1]=(l*L-o*O-u*w)*M,e[2]=(o*D-s*L+u*b)*M,e[3]=(i*D-n*O-a*R)*M,e[4]=(r*O-i*L+a*w)*M,e[5]=(n*L-r*D-a*b)*M,e[6]=(v*S-p*T+m*E)*M,e[7]=(p*y-_*S-m*g)*M,e[8]=(_*T-v*y+m*x)*M,e):null};Re.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};const J=Re;var re={};re.create=function(){var e=new Fe(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};re.rotationTo=function(){var e=A.create(),t=A.fromValues(1,0,0),r=A.fromValues(0,1,0);return function(n,i,a){var o=A.dot(i,a);return o<-.999999?(A.cross(e,t,i),A.length(e)<1e-6&&A.cross(e,r,i),A.normalize(e,e),re.setAxisAngle(n,e,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(A.cross(e,i,a),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=1+o,re.normalize(n,n))}}();re.setAxes=function(){var e=J.create();return function(t,r,n,i){return e[0]=n[0],e[3]=n[1],e[6]=n[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],re.normalize(t,re.fromMat3(t,e))}}();re.clone=B.clone;re.fromValues=B.fromValues;re.copy=B.copy;re.set=B.set;re.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};re.setAxisAngle=function(e,t,r){r=r*.5;var n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e};re.add=B.add;re.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],f=r[3];return e[0]=n*f+o*s+i*u-a*l,e[1]=i*f+o*l+a*s-n*u,e[2]=a*f+o*u+n*l-i*s,e[3]=o*f-n*s-i*l-a*u,e};re.mul=re.multiply;re.scale=B.scale;re.rotateX=function(e,t,r){r*=.5;var n=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l+o*s,e[1]=i*l+a*s,e[2]=a*l-i*s,e[3]=o*l-n*s,e};re.rotateY=function(e,t,r){r*=.5;var n=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l-a*s,e[1]=i*l+o*s,e[2]=a*l+n*s,e[3]=o*l-i*s,e};re.rotateZ=function(e,t,r){r*=.5;var n=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l+i*s,e[1]=i*l-n*s,e[2]=a*l+o*s,e[3]=o*l-a*s,e};re.calculateW=function(e,t){var r=t[0],n=t[1],i=t[2];return e[0]=r,e[1]=n,e[2]=i,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-i*i)),e};re.dot=B.dot;re.lerp=B.lerp;re.slerp=function(e,t,r,n){var i=t[0],a=t[1],o=t[2],s=t[3],l=r[0],u=r[1],f=r[2],c=r[3],d,h,_,v,p;return h=i*l+a*u+o*f+s*c,h<0&&(h=-h,l=-l,u=-u,f=-f,c=-c),1-h>1e-6?(d=Math.acos(h),_=Math.sin(d),v=Math.sin((1-n)*d)/_,p=Math.sin(n*d)/_):(v=1-n,p=n),e[0]=v*i+p*l,e[1]=v*a+p*u,e[2]=v*o+p*f,e[3]=v*s+p*c,e};re.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r*r+n*n+i*i+a*a,s=o?1/o:0;return e[0]=-r*s,e[1]=-n*s,e[2]=-i*s,e[3]=a*s,e};re.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};re.length=B.length;re.len=re.length;re.squaredLength=B.squaredLength;re.sqrLen=re.squaredLength;re.normalize=B.normalize;re.fromMat3=function(e,t){var r=t[0]+t[4]+t[8],n;if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var a=(i+1)%3,o=(i+2)%3;n=Math.sqrt(t[i*3+i]-t[a*3+a]-t[o*3+o]+1),e[i]=.5*n,n=.5/n,e[3]=(t[a*3+o]-t[o*3+a])*n,e[a]=(t[a*3+i]+t[i*3+a])*n,e[o]=(t[o*3+i]+t[i*3+o])*n}return e};const q=re;var he=function(){this._axisX=new P,this._axisY=new P,this._axisZ=new P,this.array=N.create(),this._dirty=!0};he.prototype={constructor:he,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return N.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new he().copy(this)},copy:function(e){return N.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return N.determinant(this.array)},fromQuat:function(e){return N.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return N.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return he.fromMat2d(this,e),this},frustum:function(e,t,r,n,i,a){return N.frustum(this.array,e,t,r,n,i,a),this._dirty=!0,this},identity:function(){return N.identity(this.array),this._dirty=!0,this},invert:function(){return N.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,r){return N.lookAt(this.array,e.array,t.array,r.array),this._dirty=!0,this},mul:function(e){return N.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return N.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return N.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return N.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,r,n,i,a){return N.ortho(this.array,e,t,r,n,i,a),this._dirty=!0,this},perspective:function(e,t,r,n){return N.perspective(this.array,e,t,r,n),this._dirty=!0,this},rotate:function(e,t){return N.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return N.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return N.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return N.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return N.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return N.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return N.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=A.create(),t=A.create(),r=A.create(),n=J.create();return function(i,a,o){var s=this.array;A.set(e,s[0],s[1],s[2]),A.set(t,s[4],s[5],s[6]),A.set(r,s[8],s[9],s[10]);var l=A.length(e),u=A.length(t),f=A.length(r),c=this.determinant();c<0&&(l=-l),i&&i.set(l,u,f),o.set(s[12],s[13],s[14]),J.fromMat4(n,s),n[0]/=l,n[1]/=l,n[2]/=l,n[3]/=u,n[4]/=u,n[5]/=u,n[6]/=f,n[7]/=f,n[8]/=f,q.fromMat3(a.array,n),q.normalize(a.array,a.array),a._dirty=!0,o._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var $r=Object.defineProperty;if($r){var ii=he.prototype;$r(ii,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),$r(ii,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),$r(ii,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}he.adjoint=function(e,t){return N.adjoint(e.array,t.array),e._dirty=!0,e};he.copy=function(e,t){return N.copy(e.array,t.array),e._dirty=!0,e};he.determinant=function(e){return N.determinant(e.array)};he.identity=function(e){return N.identity(e.array),e._dirty=!0,e};he.ortho=function(e,t,r,n,i,a,o){return N.ortho(e.array,t,r,n,i,a,o),e._dirty=!0,e};he.perspective=function(e,t,r,n,i){return N.perspective(e.array,t,r,n,i),e._dirty=!0,e};he.lookAt=function(e,t,r,n){return N.lookAt(e.array,t.array,r.array,n.array),e._dirty=!0,e};he.invert=function(e,t){return N.invert(e.array,t.array),e._dirty=!0,e};he.mul=function(e,t,r){return N.mul(e.array,t.array,r.array),e._dirty=!0,e};he.multiply=he.mul;he.fromQuat=function(e,t){return N.fromQuat(e.array,t.array),e._dirty=!0,e};he.fromRotationTranslation=function(e,t,r){return N.fromRotationTranslation(e.array,t.array,r.array),e._dirty=!0,e};he.fromMat2d=function(n,r){n._dirty=!0;var r=r.array,n=n.array;return n[0]=r[0],n[4]=r[2],n[12]=r[4],n[1]=r[1],n[5]=r[3],n[13]=r[5],n};he.rotate=function(e,t,r,n){return N.rotate(e.array,t.array,r,n.array),e._dirty=!0,e};he.rotateX=function(e,t,r){return N.rotateX(e.array,t.array,r),e._dirty=!0,e};he.rotateY=function(e,t,r){return N.rotateY(e.array,t.array,r),e._dirty=!0,e};he.rotateZ=function(e,t,r){return N.rotateZ(e.array,t.array,r),e._dirty=!0,e};he.scale=function(e,t,r){return N.scale(e.array,t.array,r.array),e._dirty=!0,e};he.transpose=function(e,t){return N.transpose(e.array,t.array),e._dirty=!0,e};he.translate=function(e,t,r){return N.translate(e.array,t.array,r.array),e._dirty=!0,e};const z=he;var oe=function(e,t,r,n){e=e||0,t=t||0,r=r||0,n=n===void 0?1:n,this.array=q.fromValues(e,t,r,n),this._dirty=!0};oe.prototype={constructor:oe,add:function(e){return q.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return q.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,r,n){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=n,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new oe(this.x,this.y,this.z,this.w)},conjugate:function(){return q.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return q.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return q.dot(this.array,e.array)},fromMat3:function(e){return q.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=J.create();return function(t){return J.fromMat4(e,t.array),J.transpose(e,e),q.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return q.identity(this.array),this._dirty=!0,this},invert:function(){return q.invert(this.array,this.array),this._dirty=!0,this},len:function(){return q.len(this.array)},length:function(){return q.length(this.array)},lerp:function(e,t,r){return q.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},mul:function(e){return q.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return q.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return q.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return q.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return q.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return q.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return q.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return q.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return q.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,r){return q.setAxes(this.array,e.array,t.array,r.array),this._dirty=!0,this},setAxisAngle:function(e,t){return q.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,r){return q.slerp(this.array,e.array,t.array,r),this._dirty=!0,this},sqrLen:function(){return q.sqrLen(this.array)},squaredLength:function(){return q.squaredLength(this.array)},fromEuler:function(e,t){return oe.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Ar=Object.defineProperty;if(Ar){var Qr=oe.prototype;Ar(Qr,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Ar(Qr,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Ar(Qr,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Ar(Qr,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}oe.add=function(e,t,r){return q.add(e.array,t.array,r.array),e._dirty=!0,e};oe.set=function(e,t,r,n,i){q.set(e.array,t,r,n,i),e._dirty=!0};oe.copy=function(e,t){return q.copy(e.array,t.array),e._dirty=!0,e};oe.calculateW=function(e,t){return q.calculateW(e.array,t.array),e._dirty=!0,e};oe.conjugate=function(e,t){return q.conjugate(e.array,t.array),e._dirty=!0,e};oe.identity=function(e){return q.identity(e.array),e._dirty=!0,e};oe.invert=function(e,t){return q.invert(e.array,t.array),e._dirty=!0,e};oe.dot=function(e,t){return q.dot(e.array,t.array)};oe.len=function(e){return q.length(e.array)};oe.lerp=function(e,t,r,n){return q.lerp(e.array,t.array,r.array,n),e._dirty=!0,e};oe.slerp=function(e,t,r,n){return q.slerp(e.array,t.array,r.array,n),e._dirty=!0,e};oe.mul=function(e,t,r){return q.multiply(e.array,t.array,r.array),e._dirty=!0,e};oe.multiply=oe.mul;oe.rotateX=function(e,t,r){return q.rotateX(e.array,t.array,r),e._dirty=!0,e};oe.rotateY=function(e,t,r){return q.rotateY(e.array,t.array,r),e._dirty=!0,e};oe.rotateZ=function(e,t,r){return q.rotateZ(e.array,t.array,r),e._dirty=!0,e};oe.setAxisAngle=function(e,t,r){return q.setAxisAngle(e.array,t.array,r),e._dirty=!0,e};oe.normalize=function(e,t){return q.normalize(e.array,t.array),e._dirty=!0,e};oe.sqrLen=function(e){return q.sqrLen(e.array)};oe.squaredLength=oe.sqrLen;oe.fromMat3=function(e,t){return q.fromMat3(e.array,t.array),e._dirty=!0,e};oe.setAxes=function(e,t,r,n){return q.setAxes(e.array,t.array,r.array,n.array),e._dirty=!0,e};oe.rotationTo=function(e,t,r){return q.rotationTo(e.array,t.array,r.array),e._dirty=!0,e};oe.fromEuler=function(e,t,f){e._dirty=!0,t=t.array;var n=e.array,i=Math.cos(t[0]/2),a=Math.cos(t[1]/2),o=Math.cos(t[2]/2),s=Math.sin(t[0]/2),l=Math.sin(t[1]/2),u=Math.sin(t[2]/2),f=(f||"XYZ").toUpperCase();switch(f){case"XYZ":n[0]=s*a*o+i*l*u,n[1]=i*l*o-s*a*u,n[2]=i*a*u+s*l*o,n[3]=i*a*o-s*l*u;break;case"YXZ":n[0]=s*a*o+i*l*u,n[1]=i*l*o-s*a*u,n[2]=i*a*u-s*l*o,n[3]=i*a*o+s*l*u;break;case"ZXY":n[0]=s*a*o-i*l*u,n[1]=i*l*o+s*a*u,n[2]=i*a*u+s*l*o,n[3]=i*a*o-s*l*u;break;case"ZYX":n[0]=s*a*o-i*l*u,n[1]=i*l*o+s*a*u,n[2]=i*a*u-s*l*o,n[3]=i*a*o+s*l*u;break;case"YZX":n[0]=s*a*o+i*l*u,n[1]=i*l*o+s*a*u,n[2]=i*a*u-s*l*o,n[3]=i*a*o-s*l*u;break;case"XZY":n[0]=s*a*o-i*l*u,n[1]=i*l*o-s*a*u,n[2]=i*a*u+s*l*o,n[3]=i*a*o+s*l*u;break}};const ko=oe;var St=A.set,Jr=A.copy,un=function(e,t){this.min=e||new P(1/0,1/0,1/0),this.max=t||new P(-1/0,-1/0,-1/0),this.vertices=null};un.prototype={constructor:un,updateFromVertices:function(e){if(e.length>0){var t=this.min,r=this.max,n=t.array,i=r.array;Jr(n,e[0]),Jr(i,e[0]);for(var a=1;a<e.length;a++){var o=e[a];o[0]<n[0]&&(n[0]=o[0]),o[1]<n[1]&&(n[1]=o[1]),o[2]<n[2]&&(n[2]=o[2]),o[0]>i[0]&&(i[0]=o[0]),o[1]>i[1]&&(i[1]=o[1]),o[2]>i[2]&&(i[2]=o[2])}t._dirty=!0,r._dirty=!0}},union:function(e){var t=this.min,r=this.max;return A.min(t.array,t.array,e.min.array),A.max(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersection:function(e){var t=this.min,r=this.max;return A.max(t.array,t.array,e.min.array),A.min(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,r=this.max.array,n=e.min.array,i=e.max.array;return!(t[0]>i[0]||t[1]>i[1]||t[2]>i[2]||r[0]<n[0]||r[1]<n[1]||r[2]<n[2])},containBoundingBox:function(e){var t=this.min.array,r=this.max.array,n=e.min.array,i=e.max.array;return t[0]<=n[0]&&t[1]<=n[1]&&t[2]<=n[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},containPoint:function(e){var t=this.min.array,r=this.max.array,n=e.array;return t[0]<=n[0]&&t[1]<=n[1]&&t[2]<=n[2]&&r[0]>=n[0]&&r[1]>=n[1]&&r[2]>=n[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=A.create(),t=A.create(),r=A.create(),n=A.create(),i=A.create(),a=A.create();return function(o,s){var l=o.min.array,u=o.max.array,f=s.array;return e[0]=f[0]*l[0],e[1]=f[1]*l[0],e[2]=f[2]*l[0],t[0]=f[0]*u[0],t[1]=f[1]*u[0],t[2]=f[2]*u[0],r[0]=f[4]*l[1],r[1]=f[5]*l[1],r[2]=f[6]*l[1],n[0]=f[4]*u[1],n[1]=f[5]*u[1],n[2]=f[6]*u[1],i[0]=f[8]*l[2],i[1]=f[9]*l[2],i[2]=f[10]*l[2],a[0]=f[8]*u[2],a[1]=f[9]*u[2],a[2]=f[10]*u[2],l=this.min.array,u=this.max.array,l[0]=Math.min(e[0],t[0])+Math.min(r[0],n[0])+Math.min(i[0],a[0])+f[12],l[1]=Math.min(e[1],t[1])+Math.min(r[1],n[1])+Math.min(i[1],a[1])+f[13],l[2]=Math.min(e[2],t[2])+Math.min(r[2],n[2])+Math.min(i[2],a[2])+f[14],u[0]=Math.max(e[0],t[0])+Math.max(r[0],n[0])+Math.max(i[0],a[0])+f[12],u[1]=Math.max(e[1],t[1])+Math.max(r[1],n[1])+Math.max(i[1],a[1])+f[13],u[2]=Math.max(e[2],t[2])+Math.max(r[2],n[2])+Math.max(i[2],a[2])+f[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,r=this.max.array,n=e.array,i=t[0],a=t[1],o=t[2],s=r[0],l=r[1],u=t[2],f=r[0],c=r[1],d=r[2];if(n[15]===1)t[0]=n[0]*i+n[12],t[1]=n[5]*a+n[13],r[2]=n[10]*o+n[14],r[0]=n[0]*f+n[12],r[1]=n[5]*c+n[13],t[2]=n[10]*d+n[14];else{var h=-1/o;t[0]=n[0]*i*h,t[1]=n[5]*a*h,r[2]=(n[10]*o+n[14])*h,h=-1/u,r[0]=n[0]*s*h,r[1]=n[5]*l*h,h=-1/d,t[2]=(n[10]*d+n[14])*h}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=A.fromValues(0,0,0);this.vertices=e}var r=this.min.array,n=this.max.array;return St(e[0],r[0],r[1],r[2]),St(e[1],r[0],n[1],r[2]),St(e[2],n[0],r[1],r[2]),St(e[3],n[0],n[1],r[2]),St(e[4],r[0],r[1],n[2]),St(e[5],r[0],n[1],n[2]),St(e[6],n[0],r[1],n[2]),St(e[7],n[0],n[1],n[2]),this},copy:function(e){var t=this.min,r=this.max;return Jr(t.array,e.min.array),Jr(r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},clone:function(){var e=new un;return e.copy(this),e}};const ke=un;var nf=0,af=Qe.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+nf++),this.position||(this.position=new P),this.rotation||(this.rotation=new ko),this.scale||(this.scale=new P(1,1,1)),this.worldTransform=new z,this.localTransform=new z,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var r=t._nodeRepository;delete r[this.name],r[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var r=this._scene;r&&r!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,r=t.indexOf(e);r<0||(t.splice(r,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,r=0;r<t.length;r++)if(t[r].name===e)return t[r]},getDescendantByName:function(e){for(var t=this._children,r=0;r<t.length;r++){var n=t[r];if(n.name===e)return n;var i=n.getDescendantByName(e);if(i)return i}},queryNode:function(e){if(e){for(var t=e.split("/"),r=this,n=0;n<t.length;n++){var i=t[n];if(i){for(var a=!1,o=r._children,s=0;s<o.length;s++){var l=o[s];if(l.name===i){r=l,a=!0;break}}if(!a)return}}return r}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,r=this.name;t._parent&&(r=t.name+"/"+r,t._parent!=e);)t=t._parent;return!t._parent&&e?null:r},traverse:function(e,t){e.call(t,this);for(var r=this._children,n=0,i=r.length;n<i;n++)r[n].traverse(e,t)},eachChild:function(e,t){for(var r=this._children,n=0,i=r.length;n<i;n++){var a=r[n];e.call(t,a,n)}},setLocalTransform:function(e){N.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){N.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=N.create();return function(t){var r=this.localTransform,n=this.worldTransform;this._parent?(N.invert(e,this._parent.worldTransform.array),N.multiply(r.array,e,n.array)):N.copy(r.array,n.array);var i=t?null:this.scale;r.decomposeMatrix(i,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var n=this.localTransform.array;N.fromRotationTranslation(n,t.array,e.array),N.scale(n,n,r.array),t._dirty=!1,r._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?N.multiplyAffine(t,this._parent.worldTransform.array,e):N.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,r=0,n=t.length;r<n;r++)t[r].update(e)},getBoundingBox:function(){function e(i){return!i.invisible&&i.geometry}var t=new ke,r=new z,n=new z;return function(i,a){return a=a||new ke,this._parent?z.invert(n,this._parent.worldTransform):z.identity(n),this.traverse(function(o){o.geometry&&o.geometry.boundingBox&&(t.copy(o.geometry.boundingBox),z.multiply(r,n,o.worldTransform),t.applyTransform(r),a.union(t))},this,e),a}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var r=e.array;return r[0]=t[12],r[1]=t[13],r[2]=t[14],e}else return new P(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var r=0;r<t.length;r++)e.add(t[r].clone());return e},rotateAround:function(){var e=new P,t=new z;return function(r,n,i){e.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(i,n),t.fromRotationTranslation(this.rotation,e),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new z;return function(t,r){e.lookAt(this.position,t,r||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()});const ht=af;var tt=ht.extend({material:null,geometry:null,mode:C.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:C.BACK,frontFace:C.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=ht.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=ht.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var r=0;r<e.length;r++){var n=e[r];t[n]!==this[n]&&(t[n]=this[n])}return t}}()});tt.POINTS=C.POINTS;tt.LINES=C.LINES;tt.LINE_LOOP=C.LINE_LOOP;tt.LINE_STRIP=C.LINE_STRIP;tt.TRIANGLES=C.TRIANGLES;tt.TRIANGLE_STRIP=C.TRIANGLE_STRIP;tt.TRIANGLE_FAN=C.TRIANGLE_FAN;tt.BACK=C.BACK;tt.FRONT=C.FRONT;tt.FRONT_AND_BACK=C.FRONT_AND_BACK;tt.CW=C.CW;tt.CCW=C.CCW;const bi=tt;var zi=Qe.extend({scene:null,camera:null,renderer:null},function(){this._ray=new En,this._ndc=new et},{pick:function(e,t,r){var n=this.pickAll(e,t,[],r);return n[0]||null},pickAll:function(e,t,r,n){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,n||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(e,t,r){e instanceof bi&&e.isRenderable()&&(!e.ignorePicking||r)&&(e.mode===C.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var n=0;n<e._children.length;n++)this._intersectNode(e._children[n],t,r)},_intersectRenderable:function(){var e=new P,t=new P,r=new P,n=new En,i=new z;return function(a,o){var s=a.isSkinnedMesh();n.copy(this._ray),z.invert(i,a.worldTransform),s||n.applyTransform(i);var l=a.geometry,u=s?a.skeleton.boundingBox:l.boundingBox;if(!(u&&!n.intersectBoundingBox(u))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,o);return}else if(l.pickByRay){l.pickByRay(n,a,o);return}var f=a.cullFace===C.BACK&&a.frontFace===C.CCW||a.cullFace===C.FRONT&&a.frontFace===C.CW,c,d=l.indices,h=l.attributes.position,_=l.attributes.weight,v=l.attributes.joint,p,m=[];if(!(!h||!h.value||!d)){if(s){p=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var x=0;x<a.joints.length;x++){m[x]=m[x]||[];for(var g=0;g<16;g++)m[x][g]=p[x*16+g]}var y=[],E=[],T=[],S=[],b=[],w=l.attributes.skinnedPosition;(!w||!w.value)&&(l.createAttribute("skinnedPosition","f",3),w=l.attributes.skinnedPosition,w.init(l.vertexCount));for(var x=0;x<l.vertexCount;x++){h.get(x,y),_.get(x,E),v.get(x,T),E[3]=1-E[0]-E[1]-E[2],A.set(S,0,0,0);for(var g=0;g<4;g++)T[g]>=0&&E[g]>1e-4&&(A.transformMat4(b,y,m[T[g]]),A.scaleAndAdd(S,S,b,E[g]));w.set(x,S)}}for(var x=0;x<d.length;x+=3){var L=d[x],R=d[x+1],D=d[x+2],O=s?l.attributes.skinnedPosition:h;if(O.get(L,e.array),O.get(R,t.array),O.get(D,r.array),f?c=n.intersectTriangle(e,t,r,a.culling):c=n.intersectTriangle(e,r,t,a.culling),c){var M=new P;s?P.copy(M,c):P.transformMat4(M,c,a.worldTransform),o.push(new zi.Intersection(c,M,a,[L,R,D],x/3,P.dist(M,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});zi.Intersection=function(e,t,r,n,i,a){this.point=e,this.pointWorld=t,this.target=r,this.triangle=n,this.triangleIndex=i,this.distance=a};const of=zi;var Sr="__dt__",An=function(){this._contextId=0,this._caches=[],this._context={}};An.prototype={use:function(e,t){var r=this._caches;r[e]||(r[e]={},t&&(r[e]=t())),this._contextId=e,this._context=r[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=Sr+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=Sr+e,r=this._caches,n=0;n<r.length;n++)r[n]&&(r[n][t]=!0)},fresh:function(e){e=e||"";var t=Sr+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=Sr+e,r=this._caches,n=0;n<r.length;n++)r[n]&&(r[n][t]=!1)},isDirty:function(e){e=e||"";var t=Sr+e,r=this._context;return!r.hasOwnProperty(t)||r[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var r=Object.keys(this._caches);r.forEach(function(n){e&&e.call(t,n)})},miss:function(e){return!this._context.hasOwnProperty(e)}};An.prototype.constructor=An;const Gi=An;var ee=Qe.extend({width:512,height:512,type:C.UNSIGNED_BYTE,format:C.RGBA,wrapS:C.REPEAT,wrapT:C.REPEAT,minFilter:C.LINEAR_MIPMAP_LINEAR,magFilter:C.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new Gi},{getWebGLTexture:function(e){var t=e.gl,r=this._cache;return r.use(e.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):r.isDirty()&&(this.update(e),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===C.DEPTH_COMPONENT&&(this.useMipmap=!1);var r=e.getGLExtension("EXT_sRGB");this.format===ee.SRGB&&!r&&(this.format=ee.RGB),this.format===ee.SRGB_ALPHA&&!r&&(this.format=ee.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?C.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?C.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===C.NEAREST_MIPMAP_NEAREST||e===C.NEAREST_MIPMAP_LINEAR?C.NEAREST:e===C.LINEAR_MIPMAP_LINEAR||e===C.LINEAR_MIPMAP_NEAREST?C.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("webgl_texture");r&&e.gl.deleteTexture(r),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(ee.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(ee.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});ee.BYTE=C.BYTE;ee.UNSIGNED_BYTE=C.UNSIGNED_BYTE;ee.SHORT=C.SHORT;ee.UNSIGNED_SHORT=C.UNSIGNED_SHORT;ee.INT=C.INT;ee.UNSIGNED_INT=C.UNSIGNED_INT;ee.FLOAT=C.FLOAT;ee.HALF_FLOAT=36193;ee.UNSIGNED_INT_24_8_WEBGL=34042;ee.DEPTH_COMPONENT=C.DEPTH_COMPONENT;ee.DEPTH_STENCIL=C.DEPTH_STENCIL;ee.ALPHA=C.ALPHA;ee.RGB=C.RGB;ee.RGBA=C.RGBA;ee.LUMINANCE=C.LUMINANCE;ee.LUMINANCE_ALPHA=C.LUMINANCE_ALPHA;ee.SRGB=35904;ee.SRGB_ALPHA=35906;ee.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;ee.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;ee.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;ee.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;ee.NEAREST=C.NEAREST;ee.LINEAR=C.LINEAR;ee.NEAREST_MIPMAP_NEAREST=C.NEAREST_MIPMAP_NEAREST;ee.LINEAR_MIPMAP_NEAREST=C.LINEAR_MIPMAP_NEAREST;ee.NEAREST_MIPMAP_LINEAR=C.NEAREST_MIPMAP_LINEAR;ee.LINEAR_MIPMAP_LINEAR=C.LINEAR_MIPMAP_LINEAR;ee.REPEAT=C.REPEAT;ee.CLAMP_TO_EDGE=C.CLAMP_TO_EDGE;ee.MIRRORED_REPEAT=C.MIRRORED_REPEAT;const j=ee;var rt=bi.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=bi.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});rt.POINTS=C.POINTS;rt.LINES=C.LINES;rt.LINE_LOOP=C.LINE_LOOP;rt.LINE_STRIP=C.LINE_STRIP;rt.TRIANGLES=C.TRIANGLES;rt.TRIANGLE_STRIP=C.TRIANGLE_STRIP;rt.TRIANGLE_FAN=C.TRIANGLE_FAN;rt.BACK=C.BACK;rt.FRONT=C.FRONT;rt.FRONT_AND_BACK=C.FRONT_AND_BACK;rt.CW=C.CW;rt.CCW=C.CCW;const Vi=rt;var Bn={};Bn.isPowerOfTwo=function(e){return(e&e-1)===0};Bn.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};Bn.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};const Wo=Bn;var ja=Wo.isPowerOfTwo;function Za(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function sf(e,t){var r=Za(e.width),n=Za(e.height);t=t||document.createElement("canvas"),t.width=r,t.height=n;var i=t.getContext("2d");return i.drawImage(e.image,0,0,r,n),t}var ki=j.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,n=this.type,i=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===j.REPEAT||this.wrapT===j.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,i?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,i?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,i?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,i?this.minFilter:this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193){var o=e.getGLExtension("OES_texture_half_float");o||(n=C.FLOAT)}if(this.mipmaps.length)for(var s=this.width,l=this.height,u=0;u<this.mipmaps.length;u++){var f=this.mipmaps[u];this._updateTextureData(t,f,u,s,l,r,n,!1),s/=2,l/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,n,i),this.useMipmap&&(!this.NPOT||i)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,r,n,i,a,o,s){if(t.image){var l=t.image;s&&(this._potCanvas=sf(this,this._potCanvas),l=this._potCanvas),e.texImage2D(e.TEXTURE_2D,r,a,a,o,l)}else a<=j.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=j.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,r,a,n,i,0,t.pixels):e.texImage2D(e.TEXTURE_2D,r,a,n,i,0,a,o,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return ja(this.width)&&ja(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var r=we.createImage();t&&(r.crossOrigin=t);var n=this;return r.onload=function(){n.dirty(),n.trigger("success",n)},r.onerror=function(){n.trigger("error",n)},r.src=e,this.image=r,this}});Object.defineProperty(ki.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(ki.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});const ne=ki;function Xo(e){return{byte:we.Int8Array,ubyte:we.Uint8Array,short:we.Int16Array,ushort:we.Uint16Array}[e]||we.Float32Array}function ai(e){return"attr_"+e}function pr(e,t,r,n){switch(this.name=e,this.type=t,this.size=r,this.semantic=n||"",this.value=null,r){case 1:this.get=function(i){return this.value[i]},this.set=function(i,a){this.value[i]=a},this.copy=function(i,a){this.value[i]=this.value[i]};break;case 2:this.get=function(i,a){var o=this.value;return a[0]=o[i*2],a[1]=o[i*2+1],a},this.set=function(i,a){var o=this.value;o[i*2]=a[0],o[i*2+1]=a[1]},this.copy=function(i,a){var o=this.value;a*=2,i*=2,o[i]=o[a],o[i+1]=o[a+1]};break;case 3:this.get=function(i,a){var o=i*3,s=this.value;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a},this.set=function(i,a){var o=i*3,s=this.value;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2]},this.copy=function(i,a){var o=this.value;a*=3,i*=3,o[i]=o[a],o[i+1]=o[a+1],o[i+2]=o[a+2]};break;case 4:this.get=function(i,a){var o=this.value,s=i*4;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a[3]=o[s+3],a},this.set=function(i,a){var o=this.value,s=i*4;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2],o[s+3]=a[3]},this.copy=function(i,a){var o=this.value;a*=4,i*=4,o[i]=o[a],o[i+1]=o[a+1],o[i+2]=o[a+2],o[i+3]=o[a+3]}}}pr.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=Xo(this.type);this.value=new t(e*this.size)}};pr.prototype.fromArray=function(e){var t=Xo(this.type),r;if(e[0]&&e[0].length){var n=0,i=this.size;r=new t(e.length*i);for(var a=0;a<e.length;a++)for(var o=0;o<i;o++)r[n++]=e[a][o]}else r=new t(e);this.value=r};pr.prototype.clone=function(e){var t=new pr(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function qo(e,t,r,n,i){this.name=e,this.type=t,this.buffer=r,this.size=n,this.semantic=i,this.symbol="",this.needsRemove=!1}function jo(e){this.buffer=e,this.count=0}var gt=Qe.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new Gi,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(ai(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var r=this.indices;return t[0]=r[e*3],t[1]=r[e*3+1],t[2]=r[e*3+2],t}},setTriangleIndices:function(e,t){var r=this.indices;r[e*3]=t[0],r[e*3+1]=t[1],r[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,r=this.vertexCount>65535?we.Uint32Array:we.Uint16Array;if(e[0]&&e[0].length){var n=0,i=3;t=new r(e.length*i);for(var a=0;a<e.length;a++)for(var o=0;o<i;o++)t[n++]=e[a][o]}else t=new r(e);this.indices=t},createAttribute:function(e,t,r,n){var i=new pr(e,t,r,n);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=i,this._attributeList.push(e),i},removeAttribute:function(e){var t=this._attributeList,r=t.indexOf(e);return r>=0?(t.splice(r,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var r=[],n=this.vertexCount,i=0;i<t.length;i++){var a=t[i],o=this.attributes[a];o.value&&o.value.length===n*o.size&&r.push(a)}return this._enabledAttributes=r,r},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var r=t.isDirty("attributes"),n=t.isDirty("indices");if(r||n){this._updateBuffer(e.gl,r,n);for(var i=this.getEnabledAttributes(),a=0;a<i.length;a++)t.fresh(ai(i[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,r){var n=this._cache,i=n.get("chunks"),a=!1;i||(i=[],i[0]={attributeBuffers:[],indicesBuffer:null},n.put("chunks",i),a=!0);var o=i[0],s=o.attributeBuffers,l=o.indicesBuffer;if(t||a){var u=this.getEnabledAttributes(),f={};if(!a)for(var c=0;c<s.length;c++)f[s[c].name]=s[c];for(var d=0;d<u.length;d++){var h=u[d],_=this.attributes[h],v;a||(v=f[h]);var p;v?p=v.buffer:p=e.createBuffer(),n.isDirty(ai(h))&&(e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,_.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),s[d]=new qo(h,_.type,p,_.size,_.semantic)}for(var c=d;c<s.length;c++)e.deleteBuffer(s[c].buffer);s.length=d}this.isUseIndices()&&(r||a)&&(l||(l=new jo(e.createBuffer()),o.indicesBuffer=l),l.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var n=0;n<r.length;n++){for(var i=r[n],a=0;a<i.attributeBuffers.length;a++){var o=i.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}i.indicesBuffer&&e.gl.deleteBuffer(i.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(gt.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(gt.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));gt.STATIC_DRAW=C.STATIC_DRAW;gt.DYNAMIC_DRAW=C.DYNAMIC_DRAW;gt.STREAM_DRAW=C.STREAM_DRAW;gt.AttributeBuffer=qo;gt.IndicesBuffer=jo;gt.Attribute=pr;const Kt=gt;var Ve=A.create,or=A.add,Ot=A.set,ft=Kt.Attribute,$t=Kt.extend(function(){return{attributes:{position:new ft("position","float",3,"POSITION"),texcoord0:new ft("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new ft("texcoord1","float",2,"TEXCOORD_1"),normal:new ft("normal","float",3,"NORMAL"),tangent:new ft("tangent","float",4,"TANGENT"),color:new ft("color","float",4,"COLOR"),weight:new ft("weight","float",3,"WEIGHT"),joint:new ft("joint","float",4,"JOINT"),barycentric:new ft("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new ke);var t=this.attributes.position.value;if(t&&t.length){var r=e.min,n=e.max,i=r.array,a=n.array;A.set(i,t[0],t[1],t[2]),A.set(a,t[0],t[1],t[2]);for(var o=3;o<t.length;){var s=t[o++],l=t[o++],u=t[o++];s<i[0]&&(i[0]=s),l<i[1]&&(i[1]=l),u<i[2]&&(i[2]=u),s>a[0]&&(a[0]=s),l>a[1]&&(a[1]=l),u>a[2]&&(a[2]=u)}r._dirty=!0,n._dirty=!0}},generateVertexNormals:function(){if(this.vertexCount){var e=this.indices,t=this.attributes,r=t.position.value,n=t.normal.value;if(!n||n.length!==r.length)n=t.normal.value=new we.Float32Array(r.length);else for(var i=0;i<n.length;i++)n[i]=0;for(var a=Ve(),o=Ve(),s=Ve(),l=Ve(),u=Ve(),f=Ve(),c=e?e.length:this.vertexCount,d,h,_,v=0;v<c;){e?(d=e[v++],h=e[v++],_=e[v++]):(d=v++,h=v++,_=v++),Ot(a,r[d*3],r[d*3+1],r[d*3+2]),Ot(o,r[h*3],r[h*3+1],r[h*3+2]),Ot(s,r[_*3],r[_*3+1],r[_*3+2]),A.sub(l,a,o),A.sub(u,o,s),A.cross(f,l,u);for(var i=0;i<3;i++)n[d*3+i]=n[d*3+i]+f[i],n[h*3+i]=n[h*3+i]+f[i],n[_*3+i]=n[_*3+i]+f[i]}for(var i=0;i<n.length;)Ot(f,n[i],n[i+1],n[i+2]),A.normalize(f,f),n[i++]=f[0],n[i++]=f[1],n[i++]=f[2];this.dirty()}},generateFaceNormals:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,r=t.position.value,n=t.normal.value,i=Ve(),a=Ve(),o=Ve(),s=Ve(),l=Ve(),u=Ve();n||(n=t.normal.value=new Float32Array(r.length));for(var f=e?e.length:this.vertexCount,c,d,h,_=0;_<f;){e?(c=e[_++],d=e[_++],h=e[_++]):(c=_++,d=_++,h=_++),Ot(i,r[c*3],r[c*3+1],r[c*3+2]),Ot(a,r[d*3],r[d*3+1],r[d*3+2]),Ot(o,r[h*3],r[h*3+1],r[h*3+2]),A.sub(s,i,a),A.sub(l,a,o),A.cross(u,s,l),A.normalize(u,u);for(var v=0;v<3;v++)n[c*3+v]=u[v],n[d*3+v]=u[v],n[h*3+v]=u[v]}this.dirty()}},generateTangents:function(){if(this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var r=t.texcoord0.value,n=t.position.value,i=t.tangent.value,a=t.normal.value;if(!r){console.warn("Geometry without texcoords can't generate tangents.");return}for(var o=[],s=[],l=0;l<e;l++)o[l]=[0,0,0],s[l]=[0,0,0];for(var u=[0,0,0],f=[0,0,0],c=this.indices,d=c?c.length:this.vertexCount,h,_,v,l=0;l<d;){c?(h=c[l++],_=c[l++],v=c[l++]):(h=l++,_=l++,v=l++);var p=r[h*2],m=r[_*2],x=r[v*2],g=r[h*2+1],y=r[_*2+1],E=r[v*2+1],T=n[h*3],S=n[_*3],b=n[v*3],w=n[h*3+1],L=n[_*3+1],R=n[v*3+1],D=n[h*3+2],O=n[_*3+2],M=n[v*3+2],U=S-T,F=b-T,G=L-w,K=R-w,ae=O-D,de=M-D,le=m-p,Se=x-p,xe=y-g,Me=E-g,Ue=1/(le*Me-xe*Se);u[0]=(Me*U-xe*F)*Ue,u[1]=(Me*G-xe*K)*Ue,u[2]=(Me*ae-xe*de)*Ue,f[0]=(le*F-Se*U)*Ue,f[1]=(le*K-Se*G)*Ue,f[2]=(le*de-Se*ae)*Ue,or(o[h],o[h],u),or(o[_],o[_],u),or(o[v],o[v],u),or(s[h],s[h],f),or(s[_],s[_],f),or(s[v],s[v],f)}for(var He=Ve(),It=Ve(),Je=Ve(),l=0;l<e;l++){Je[0]=a[l*3],Je[1]=a[l*3+1],Je[2]=a[l*3+2];var vt=o[l];A.scale(He,Je,A.dot(Je,vt)),A.sub(He,vt,He),A.normalize(He,He),A.cross(It,Je,vt),i[l*4]=He[0],i[l*4+1]=He[1],i[l*4+2]=He[2],i[l*4+3]=A.dot(It,s[l])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new we.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,r=this.getEnabledAttributes(),n={},i=0;i<r.length;i++){var a=r[i];n[a]=e[a].value,e[a].init(this.indices.length)}for(var o=0,s=0;s<t.length;s++){for(var l=t[s],i=0;i<r.length;i++)for(var a=r[i],u=e[a].value,f=e[a].size,c=0;c<f;c++)u[o*f+c]=n[a][l*f+c];t[s]=o,o++}this.dirty()}},generateBarycentric:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,r=this.indices;if(!(t&&t.length===r.length*3)){t=e.barycentric.value=new Float32Array(r.length*3);for(var n=0;n<(r?r.length:this.vertexCount/3);)for(var i=0;i<3;i++){var a=r?r[n++]:n*3+i;t[a*3+i]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,r=t.position.value,n=t.normal.value,i=t.tangent.value;e=e.array;var a=N.create();N.invert(a,e),N.transpose(a,a);var o=A.transformMat4,s=A.forEach;s(r,3,0,null,o,e),n&&s(n,3,0,null,o,a),i&&s(i,4,0,null,o,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var n=0;n<r.length;n++){for(var i=r[n],a=0;a<i.attributeBuffers.length;a++){var o=i.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}i.indicesBuffer&&e.gl.deleteBuffer(i.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});$t.STATIC_DRAW=Kt.STATIC_DRAW;$t.DYNAMIC_DRAW=Kt.DYNAMIC_DRAW;$t.STREAM_DRAW=Kt.STREAM_DRAW;$t.AttributeBuffer=Kt.AttributeBuffer;$t.IndicesBuffer=Kt.IndicesBuffer;$t.Attribute=ft;const ce=$t,lf=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`;var at="uniform vec3 ",br="uniform float ",sr="@export clay.header.",lr="@end",Oe=":unconfigurable;";const uf=[sr+"directional_light",at+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+Oe,at+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+Oe,lr,sr+"ambient_light",at+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+Oe,lr,sr+"ambient_sh_light",at+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+Oe,at+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+Oe,lf,lr,sr+"ambient_cubemap_light",at+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Oe,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Oe,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Oe,lr,sr+"point_light",at+"pointLightPosition[POINT_LIGHT_COUNT]"+Oe,br+"pointLightRange[POINT_LIGHT_COUNT]"+Oe,at+"pointLightColor[POINT_LIGHT_COUNT]"+Oe,lr,sr+"spot_light",at+"spotLightPosition[SPOT_LIGHT_COUNT]"+Oe,at+"spotLightDirection[SPOT_LIGHT_COUNT]"+Oe,br+"spotLightRange[SPOT_LIGHT_COUNT]"+Oe,br+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+Oe,br+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+Oe,br+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+Oe,at+"spotLightColor[SPOT_LIGHT_COUNT]"+Oe,lr].join(`
`);I.import(uf);var ff=ht.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=ht.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}});const lt=ff;var fn=function(e,t){this.normal=e||new P(0,1,0),this.distance=t||0};fn.prototype={constructor:fn,distanceToPoint:function(e){return A.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new P);var r=this.distanceToPoint(e);return A.scaleAndAdd(t.array,e.array,this.normal.array,-r),t._dirty=!0,t},normalize:function(){var e=1/A.len(this.normal.array);A.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,r=this.normal.array,n=A.dot(t[0].array,r)>this.distance,i=1;i<8;i++)if(A.dot(t[i].array,r)>this.distance!=n)return!0},intersectLine:function(){var e=A.create();return function(t,r,n){var i=this.distanceToPoint(t),a=this.distanceToPoint(r);if(i>0&&a>0||i<0&&a<0)return null;var o=this.normal.array,s=this.distance,l=t.array;A.sub(e,r.array,t.array),A.normalize(e,e);var u=A.dot(o,e);if(u===0)return null;n||(n=new P);var f=(A.dot(o,l)-s)/u;return A.scaleAndAdd(n.array,l,e,-f),n._dirty=!0,n}}(),applyTransform:function(){var e=N.create(),t=B.create(),r=B.create();return r[3]=1,function(n){n=n.array,A.scale(r,this.normal.array,this.distance),B.transformMat4(r,r,n),this.distance=A.dot(r,this.normal.array),N.invert(e,n),N.transpose(e,e),t[3]=0,A.copy(t,this.normal.array),B.transformMat4(t,t,e),A.copy(this.normal.array,t)}}(),copy:function(e){A.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new fn;return e.copy(this),e}};const Zo=fn;var Ee=A.set,Ya=A.copy,Ka=A.transformMat4,oi=Math.min,si=Math.max,Yo=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new Zo);this.boundingBox=new ke,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=A.fromValues(0,0,0)};Yo.prototype={setFromProjection:function(e){var t=this.planes,r=e.array,n=r[0],i=r[1],a=r[2],o=r[3],s=r[4],l=r[5],u=r[6],f=r[7],c=r[8],d=r[9],h=r[10],_=r[11],v=r[12],p=r[13],m=r[14],x=r[15];Ee(t[0].normal.array,o-n,f-s,_-c),t[0].distance=-(x-v),t[0].normalize(),Ee(t[1].normal.array,o+n,f+s,_+c),t[1].distance=-(x+v),t[1].normalize(),Ee(t[2].normal.array,o+i,f+l,_+d),t[2].distance=-(x+p),t[2].normalize(),Ee(t[3].normal.array,o-i,f-l,_-d),t[3].distance=-(x-p),t[3].normalize(),Ee(t[4].normal.array,o-a,f-u,_-h),t[4].distance=-(x-m),t[4].normalize(),Ee(t[5].normal.array,o+a,f+u,_+h),t[5].distance=-(x+m),t[5].normalize();var g=this.boundingBox,y=this.vertices;if(x===0){var E=l/n,T=-m/(h-1),S=-m/(h+1),b=-S/l,w=-T/l;g.min.set(-b*E,-b,S),g.max.set(b*E,b,T),Ee(y[0],-b*E,-b,S),Ee(y[1],-b*E,b,S),Ee(y[2],b*E,-b,S),Ee(y[3],b*E,b,S),Ee(y[4],-w*E,-w,T),Ee(y[5],-w*E,w,T),Ee(y[6],w*E,-w,T),Ee(y[7],w*E,w,T)}else{var L=(-1-v)/n,R=(1-v)/n,D=(1-p)/l,O=(-1-p)/l,M=(-1-m)/h,U=(1-m)/h;g.min.set(Math.min(L,R),Math.min(O,D),Math.min(U,M)),g.max.set(Math.max(R,L),Math.max(D,O),Math.max(M,U));var F=g.min.array,G=g.max.array;Ee(y[0],F[0],F[1],F[2]),Ee(y[1],F[0],G[1],F[2]),Ee(y[2],G[0],F[1],F[2]),Ee(y[3],G[0],G[1],F[2]),Ee(y[4],F[0],F[1],G[2]),Ee(y[5],F[0],G[1],G[2]),Ee(y[6],G[0],F[1],G[2]),Ee(y[7],G[0],G[1],G[2])}},getTransformedBoundingBox:function(){var e=A.create();return function(t,r){var n=this.vertices,i=r.array,a=t.min,o=t.max,s=a.array,l=o.array,u=n[0];Ka(e,u,i),Ya(s,e),Ya(l,e);for(var f=1;f<8;f++)u=n[f],Ka(e,u,i),s[0]=oi(e[0],s[0]),s[1]=oi(e[1],s[1]),s[2]=oi(e[2],s[2]),l[0]=si(e[0],l[0]),l[1]=si(e[1],l[1]),l[2]=si(e[2],l[2]);return a._dirty=!0,o._dirty=!0,t}}()};const Wi=Yo;var cf=ht.extend(function(){return{projectionMatrix:new z,invProjectionMatrix:new z,viewMatrix:new z,frustum:new Wi}},function(){this.update(!0)},{update:function(e){ht.prototype.update.call(this,e),z.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),z.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){z.copy(this.viewMatrix,e),z.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){z.copy(this.projectionMatrix,e),z.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=B.create();return function(t,r){var n=r!==void 0?r:new En,i=t.array[0],a=t.array[1];return B.set(e,i,a,-1,1),B.transformMat4(e,e,this.invProjectionMatrix.array),B.transformMat4(e,e,this.worldTransform.array),A.scale(n.origin.array,e,1/e[3]),B.set(e,i,a,1,1),B.transformMat4(e,e,this.invProjectionMatrix.array),B.transformMat4(e,e,this.worldTransform.array),A.scale(e,e,1/e[3]),A.sub(n.direction.array,e,n.origin.array),A.normalize(n.direction.array,n.direction.array),n.direction._dirty=!0,n.origin._dirty=!0,n}}()});const mr=cf;var hf=N.create(),$a=N.create(),li={};function df(e){var t=[],r=Object.keys(e);r.sort();for(var n=0;n<r.length;n++){var i=r[n];t.push(i+" "+e[i])}var a=t.join(`
`);if(li[a])return li[a];var o=Be.genGUID();return li[a]=o,o}function Fn(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}Fn.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};Fn.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};Fn.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var vf=ht.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new ke,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new Bo(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof mr?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof lt&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof mr?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof lt&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},r=0;r<e.length;r++){var n=e[r];if(!n.invisible){var i=n.group;t[i]||(t[i]={}),t[i][n.type]=t[i][n.type]||0,t[i][n.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=df(t[a]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),r={};function n(i,a){r[i.__uid__]=a;for(var o=0;o<i._children.length;o++){var s=i._children[o],l=a._children[o];n(s,l)}}return n(e,t),t.traverse(function(i){i.skeleton&&(i.skeleton=i.skeleton.clone(r)),i.material&&(i.material=i.material.clone())}),t},updateRenderList:function(e,t){var r=e.__uid__,n=this._renderLists.get(r);n||(n=new Fn,this._renderLists.put(r,n)),n.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var i=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,i,n,t),n.endCount(),n},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,r,n,i){if(!e.invisible)for(var a=0;a<e._children.length;a++){var o=e._children[a];if(o.isRenderable()){var s=o.isSkinnedMesh()?hf:o.worldTransform.array,l=o.geometry;N.multiplyAffine($a,t.viewMatrix.array,s),(i&&!l.boundingBox||!this.isFrustumCulled(o,t,$a))&&n.add(o,o.material.transparent||r)}o._children.length>0&&this._doUpdateRenderList(o,t,r,n,i)}},isFrustumCulled:function(){var e=new ke,t=new z;return function(r,n,i){var a=r.boundingBox;if(a||(r.skeleton&&r.skeleton.boundingBox?a=r.skeleton.boundingBox:a=r.geometry.boundingBox),!a)return!1;if(t.array=i,e.transformFrom(a,t),r.castShadow&&this.viewBoundingBoxLastFrame.union(e),r.frustumCulling){if(!e.intersectBoundingBox(n.frustum.boundingBox))return!0;t.array=n.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var o=e.min.array,s=e.max.array;if(s[0]<-1||o[0]>1||s[1]<-1||o[1]>1||s[2]<-1||o[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(_f);var t=this._lightUniforms;for(var r in t)for(var n in t[r])t[r][n].value.length=0;for(var i=0;i<e.length;i++){var a=e[i];if(!a.invisible){var r=a.group;for(var n in a.uniformTemplates){var o=a.uniformTemplates[n],s=o.value(a);if(s!=null){t[r]||(t[r]={}),t[r][n]||(t[r][n]={type:"",value:[]});var l=t[r][n];switch(l.type=o.type+"v",o.type){case"1i":case"1f":case"t":l.value.push(s);break;case"2f":case"3f":case"4f":for(var u=0;u<s.length;u++)l.value.push(s[u]);break;default:console.error("Unkown light uniform type "+o.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,r=this._lightNumber;for(var n in r[e])if(!t[e]||r[e][n]!==t[e][n])return!0;for(var n in t[e])if(!r[e]||r[e][n]!==t[e][n])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,r,n){for(var i in t){var a=t[i];if(a.type==="tv"){if(!r.hasUniform(i))continue;for(var o=[],s=0;s<a.value.length;s++){var l=a.value[s],u=r.takeCurrentTextureSlot(n,l);o.push(u)}r.setUniform(n.gl,"1iv",i,o)}else r.setUniform(n.gl,a.type,i,a.value)}}return function(t,r,n){e(this._lightUniforms[r],t,n),e(this.shadowUniforms,t,n)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function _f(e,t){if(t.castShadow&&!e.castShadow)return!0}const Nt=vf;var en=Wo.isPowerOfTwo,pf=["px","nx","py","ny","pz","nz"],Xi=j.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,n=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var i=e.getGLExtension("EXT_texture_filter_anisotropic");if(i&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193){var a=e.getGLExtension("OES_texture_half_float");a||(n=C.FLOAT)}if(this.mipmaps.length)for(var o=this.width,s=this.height,l=0;l<this.mipmaps.length;l++){var u=this.mipmaps[l];this._updateTextureData(t,u,l,o,s,r,n),o/=2,s/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,n),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,r,n,i,a,o){for(var s=0;s<6;s++){var l=pf[s],u=t.image&&t.image[l];u?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,a,o,u):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,n,i,0,a,o,t.pixels&&t.pixels[l])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?en(this.image.px.width)&&en(this.image.px.height):en(this.width)&&en(this.height)},isRenderable:function(){return this.image.px?ur(this.image.px)&&ur(this.image.nx)&&ur(this.image.py)&&ur(this.image.ny)&&ur(this.image.pz)&&ur(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var r=0,n=this;return Be.each(e,function(i,a){var o=we.createImage();t&&(o.crossOrigin=t),o.onload=function(){r--,r===0&&(n.dirty(),n.trigger("success",n))},o.onerror=function(){r--},r++,o.src=i,n.image[a]=o}),this}});Object.defineProperty(Xi.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(Xi.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function ur(e){return e.width>0&&e.height>0}const Fr=Xi;var mf=mr.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=mr.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}});const Ne=mf;var tn="framebuffer",pt="renderbuffer",Qa=pt+"_width",Ja=pt+"_height",ui=pt+"_attached",fi="depthtexture_attached",Bt=C.FRAMEBUFFER,wr=C.RENDERBUFFER,Lr=C.DEPTH_ATTACHMENT,Ko=C.COLOR_ATTACHMENT0,kr=Qe.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new Gi,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer(Bt,this._getFrameBufferGL(e)),this._boundRenderer=e;var r=this._cache;r.put("viewport",e.viewport);var n=!1,i,a;for(var o in this._textures){n=!0;var s=this._textures[o];s&&(i=s.texture.width,a=s.texture.height,this._doAttach(e,s.texture,o,s.target))}this._width=i,this._height=a,!n&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,i,a,1);var l=r.get("attached_textures");if(l){for(var o in l)if(!this._textures[o]){var u=l[o];this._doDetach(t,o,u)}}if(!r.get(fi)&&this.depthBuffer){r.miss(pt)&&r.put(pt,t.createRenderbuffer());var f=r.get(pt);(i!==r.get(Qa)||a!==r.get(Ja))&&(t.bindRenderbuffer(wr,f),t.renderbufferStorage(wr,t.DEPTH_COMPONENT16,i,a),r.put(Qa,i),r.put(Ja,a),t.bindRenderbuffer(wr,null)),r.get(ui)||(t.framebufferRenderbuffer(Bt,Lr,wr,f),r.put(ui,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer(Bt,null),this._boundRenderer=null,this._cache.use(e.__uid__);var r=this._cache.get("viewport");r&&e.setViewport(r),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var r in this._textures){var n=this._textures[r];if(n){var i=n.texture;if(!i.NPOT&&i.useMipmap&&i.minFilter===j.LINEAR_MIPMAP_LINEAR){var a=i.textureType==="textureCube"?C.TEXTURE_CUBE_MAP:C.TEXTURE_2D;t.bindTexture(a,i.getWebGLTexture(e)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus(Bt)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(tn)&&t.put(tn,e.gl.createFramebuffer()),t.get(tn)},attach:function(e,t,r){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||Ko,r=r||C.TEXTURE_2D;var n=this._boundRenderer,i=n&&n.gl,a;if(i){var o=this._cache;o.use(n.__uid__),a=o.get("attached_textures")}var s=this._textures[t];if(!(s&&s.target===r&&s.texture===e&&a&&a[t]!=null)){var l=!0;n&&(l=this._doAttach(n,e,t,r),this.viewport||n.setViewport(0,0,e.width,e.height,1)),l&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=r)}},_doAttach:function(e,t,r,n){var i=e.gl,a=t.getWebGLTexture(e),o=this._cache.get("attached_textures");if(o&&o[r]){var s=o[r];if(s.texture===t&&s.target===n)return}r=+r;var l=!0;if(r===Lr||r===C.DEPTH_STENCIL_ATTACHMENT){var u=e.getGLExtension("WEBGL_depth_texture");if(u||(console.error("Depth texture is not supported by the browser"),l=!1),t.format!==C.DEPTH_COMPONENT&&t.format!==C.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l){var f=this._cache.get(pt);f&&(i.framebufferRenderbuffer(Bt,Lr,wr,null),i.deleteRenderbuffer(f),this._cache.put(pt,!1)),this._cache.put(ui,!1),this._cache.put(fi,!0)}}return i.framebufferTexture2D(Bt,r,n,a,0),o||(o={},this._cache.put("attached_textures",o)),o[r]=o[r]||{},o[r].texture=t,o[r].target=n,l},_doDetach:function(e,t,r){e.framebufferTexture2D(Bt,t,r,null,0);var n=this._cache.get("attached_textures");n&&n[t]&&(n[t]=null),(t===Lr||t===C.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(fi,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var r=this._cache;r.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,r=this._cache;r.use(e.__uid__);var n=r.get(pt);n&&t.deleteRenderbuffer(n);var i=r.get(tn);i&&t.deleteFramebuffer(i),r.deleteContext(e.__uid__),this._textures={}}});kr.DEPTH_ATTACHMENT=Lr;kr.COLOR_ATTACHMENT0=Ko;kr.STENCIL_ATTACHMENT=C.STENCIL_ATTACHMENT;kr.DEPTH_STENCIL_ATTACHMENT=C.DEPTH_STENCIL_ATTACHMENT;const ze=kr;var gf=["px","nx","py","ny","pz","nz"],yf=Qe.extend(function(){var e={position:new P,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new Ne({fov:90}),nx:new Ne({fov:90}),py:new Ne({fov:90}),ny:new Ne({fov:90}),pz:new Ne({fov:90}),nz:new Ne({fov:90})};return t.px.lookAt(P.POSITIVE_X,P.NEGATIVE_Y),t.nx.lookAt(P.NEGATIVE_X,P.NEGATIVE_Y),t.py.lookAt(P.POSITIVE_Y,P.POSITIVE_Z),t.ny.lookAt(P.NEGATIVE_Y,P.NEGATIVE_Z),t.pz.lookAt(P.POSITIVE_Z,P.NEGATIVE_Y),t.nz.lookAt(P.NEGATIVE_Z,P.NEGATIVE_Y),e._frameBuffer=new ze,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,r){var n=e.gl;r||t.update();for(var i=this.texture.width,a=2*Math.atan(i/(i-.5))/Math.PI*180,o=0;o<6;o++){var s=gf[o],l=this._cameras[s];if(P.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=a,this.shadowMapPass){l.update();var u=t.getBoundingBox();u.applyTransform(l.viewMatrix),t.viewBoundingBoxLastFrame.copy(u),this.shadowMapPass.render(e,t,l,!0)}this._frameBuffer.attach(this.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+o),this._frameBuffer.bind(e),e.render(t,l,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}});const qi=yf;var xf=ce.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,r=this.attributes,n=[],i=[],a=[],o=[],s=0;s<=e;s++)for(var l=s/e,u=0;u<=t;u++){var f=u/t;if(n.push([2*f-1,2*l-1,0]),i&&i.push([f,l]),a&&a.push([0,0,1]),u<t&&s<e){var c=u+s*(t+1);o.push([c,c+1,c+t+1]),o.push([c+t+1,c+1,c+t+2])}}r.position.fromArray(n),r.texcoord0.fromArray(i),r.normal.fromArray(a),this.initIndicesFromArray(o),this.boundingBox=new ke,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}});const ji=xf;var ge=new z,Tf=ce.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:fr("px",this.depthSegments,this.heightSegments),nx:fr("nx",this.depthSegments,this.heightSegments),py:fr("py",this.widthSegments,this.depthSegments),ny:fr("ny",this.widthSegments,this.depthSegments),pz:fr("pz",this.widthSegments,this.heightSegments),nz:fr("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],r=0,n=0;for(var i in e)r+=e[i].vertexCount,n+=e[i].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(r);this.indices=new we.Uint16Array(n);var o=0,s=0;for(var i in e){for(var l=e[i],a=0;a<t.length;a++)for(var u=t[a],f=l.attributes[u].value,c=l.attributes[u].size,d=u==="normal",h=0;h<f.length;h++){var _=f[h];this.inside&&d&&(_=-_),this.attributes[u].value[h+c*s]=_}for(var v=l.indices.length,h=0;h<l.indices.length;h++)this.indices[h+o]=s+l.indices[this.inside?v-h-1:h];o+=l.indices.length,s+=l.vertexCount}this.boundingBox=new ke,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function fr(e,t,r){ge.identity();var n=new ji({widthSegments:t,heightSegments:r});switch(e){case"px":z.translate(ge,ge,P.POSITIVE_X),z.rotateY(ge,ge,Math.PI/2);break;case"nx":z.translate(ge,ge,P.NEGATIVE_X),z.rotateY(ge,ge,-Math.PI/2);break;case"py":z.translate(ge,ge,P.POSITIVE_Y),z.rotateX(ge,ge,-Math.PI/2);break;case"ny":z.translate(ge,ge,P.NEGATIVE_Y),z.rotateX(ge,ge,Math.PI/2);break;case"pz":z.translate(ge,ge,P.POSITIVE_Z);break;case"nz":z.translate(ge,ge,P.NEGATIVE_Z),z.rotateY(ge,ge,Math.PI);break}return n.applyTransform(ge),n}const $o=Tf,Ef=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;I.import(Ef);var Af=Vi.extend(function(){var e=new I({vertex:I.source("clay.skybox.vertex"),fragment:I.source("clay.skybox.fragment")}),t=new xt({shader:e,depthMask:!1});return{scene:null,geometry:new $o,material:t,environmentMap:null,culling:!1,_dummyCamera:new Ne}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=j.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,r){this.renderSkybox(e,r)},renderSkybox:function(e,t){var r=this._dummyCamera;r.aspect=e.getViewportAspect(),r.fov=t.fov||50,r.updateProjectionMatrix(),z.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(t.worldTransform),r.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],r)}});const Ur=Af;var Sf=542327876,bf=131072,wf=512,Cf=4;function Zi(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var Rf=31,Mf=Zi("DXT1"),Lf=Zi("DXT3"),Df=Zi("DXT5"),Nf=0,Pf=1,If=2,Of=3,Bf=4,Ff=7,Uf=20,Hf=21,zf=28,Gf={parse:function(e,t){var r=new Int32Array(e,0,Rf);if(r[Nf]!==Sf||!r(Uf)&Cf)return null;var n=r(Hf),i=r[Bf],a=r[Of],o=r[zf]&wf,s=r[If]&bf,l,u;switch(n){case Mf:l=8,u=j.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Lf:l=16,u=j.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Df:l=16,u=j.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var f=r[Pf]+4,c=o?6:1,d=1;s&&(d=Math.max(1,r[Ff]));for(var h=[],_=0;_<c;_++){var v=i,p=a;h[_]=new ne({width:v,height:p,format:u});for(var m=[],x=0;x<d;x++){var g=Math.max(4,v)/4*Math.max(4,p)/4*l,y=new Uint8Array(e,f,g);f+=g,v*=.5,p*=.5,m[x]=y}h[_].pixels=m[0],s&&(h[_].mipmaps=m)}if(t)t.width=h[0].width,t.height=h[0].height,t.format=h[0].format,t.pixels=h[0].pixels,t.mipmaps=h[0].mipmaps;else return h[0]}};const Vf=Gf;var cn=String.fromCharCode,kf=8,Wf=32767;function Xf(e,t,r,n){if(e[3]>0){var i=Math.pow(2,e[3]-128-8+n);t[r+0]=e[0]*i,t[r+1]=e[1]*i,t[r+2]=e[2]*i}else t[r+0]=0,t[r+1]=0,t[r+2]=0;return t[r+3]=1,t}function qf(e,t,r){for(var n="",i=t;i<r;i++)n+=cn(e[i]);return n}function jf(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function eo(e,t,r,n){for(var i=0,a=0,o=n;o>0;)if(e[a][0]=t[r++],e[a][1]=t[r++],e[a][2]=t[r++],e[a][3]=t[r++],e[a][0]===1&&e[a][1]===1&&e[a][2]===1){for(var s=e[a][3]<<i>>>0;s>0;s--)jf(e[a-1],e[a]),a++,o--;i+=8}else a++,o--,i=0;return r}function Zf(e,t,r,n){if(n<kf|n>Wf)return eo(e,t,r,n);var i=t[r++];if(i!=2)return eo(e,t,r-1,n);if(e[0][1]=t[r++],e[0][2]=t[r++],i=t[r++],(e[0][2]<<8>>>0|i)>>>0!==n)return null;for(var i=0;i<4;i++)for(var a=0;a<n;){var o=t[r++];if(o>128){o=(o&127)>>>0;for(var s=t[r++];o--;)e[a++][i]=s}else for(;o--;)e[a++][i]=t[r++]}return r}var Yf={parseRGBE:function(e,t,r){r==null&&(r=0);var n=new Uint8Array(e),i=n.length;if(qf(n,0,2)==="#?"){for(var a=2;a<i&&!(cn(n[a])===`
`&&cn(n[a+1])===`
`);a++);if(!(a>=i)){a+=2;for(var o="";a<i;a++){var s=cn(n[a]);if(s===`
`)break;o+=s}var l=o.split(" "),u=parseInt(l[1]),f=parseInt(l[3]);if(!(!f||!u)){for(var c=a+1,d=[],h=0;h<f;h++){d[h]=[];for(var _=0;_<4;_++)d[h][_]=0}for(var v=new Float32Array(f*u*4),p=0,m=0;m<u;m++){var c=Zf(d,n,c,f);if(!c)return null;for(var h=0;h<f;h++)Xf(d[h],v,p,r),p+=4}return t||(t=new ne),t.width=f,t.height=u,t.pixels=v,t.type=j.FLOAT,t}}}},parseRGBEFromPNG:function(e){}};const Kf=Yf;var hn={loadTexture:function(e,t,r,n){var i;if(typeof t=="function"?(r=t,n=r,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return i=new ne({width:0,height:0,sRGB:!1}),hn._fetchTexture(e,function(a){Kf.parseRGBE(a,i,t.exposure),i.dirty(),r&&r(i)},n),i;e.match(/.dds$/)||t.fileType==="dds"?(i=new ne({width:0,height:0}),hn._fetchTexture(e,function(a){Vf.parse(a,i),i.dirty(),r&&r(i)},n)):(i=new ne,i.load(e),i.success(r),i.error(n))}else typeof e=="object"&&typeof e.px<"u"&&(i=new Fr,i.load(e),i.success(r),i.error(n));return i},loadPanorama:function(e,t,r,n,i,a){var o=this;typeof n=="function"?(i=n,a=i,n={}):n=n||{},hn.loadTexture(t,n,function(s){s.flipY=n.flipY||!1,o.panoramaToCubeMap(e,s,r,n),s.dispose(e),i&&i(r)},a)},panoramaToCubeMap:function(e,t,r,n){var i=new qi,a=new Ur({scene:new Nt});return a.setEnvironmentMap(t),n=n||{},n.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),r.sRGB=t.sRGB,i.texture=r,i.render(e,a.scene),i.texture=null,i.dispose(e),r},heightToNormal:function(e,t){var r=document.createElement("canvas"),n=r.width=e.width,i=r.height=e.height,a=r.getContext("2d");a.drawImage(e,0,0,n,i),t=t||!1;for(var o=a.getImageData(0,0,n,i),s=a.createImageData(n,i),l=0;l<o.data.length;l+=4){if(t){var u=o.data[l],f=o.data[l+1],c=o.data[l+2],d=Math.abs(u-f)+Math.abs(f-c);if(d>20)return console.warn("Given image is not a height map"),e}var h,_,v,p;l%(n*4)===0?(h=o.data[l],v=o.data[l+4]):l%(n*4)===(n-1)*4?(h=o.data[l-4],v=o.data[l]):(h=o.data[l-4],v=o.data[l+4]),l<n*4?(_=o.data[l],p=o.data[l+n*4]):l>n*(i-1)*4?(_=o.data[l-n*4],p=o.data[l]):(_=o.data[l-n*4],p=o.data[l+n*4]),s.data[l]=h-v+127,s.data[l+1]=_-p+127,s.data[l+2]=255,s.data[l+3]=255}return a.putImageData(s,0,0),r},isHeightImage:function(e,t,r){if(!e||!e.width||!e.height)return!1;var n=document.createElement("canvas"),i=n.getContext("2d"),a=t||32;r=r||20,n.width=n.height=a,i.drawImage(e,0,0,a,a);for(var o=i.getImageData(0,0,a,a),s=0;s<o.data.length;s+=4){var l=o.data[s],u=o.data[s+1],f=o.data[s+2],c=Math.abs(l-u)+Math.abs(u-f);if(c>r)return!1}return!0},_fetchTexture:function(e,t,r){we.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:r})},createChessboard:function(e,t,r,n){e=e||512,t=t||64,r=r||"black",n=n||"white";var i=Math.ceil(e/t),a=document.createElement("canvas");a.width=e,a.height=e;var o=a.getContext("2d");o.fillStyle=n,o.fillRect(0,0,e,e),o.fillStyle=r;for(var s=0;s<i;s++)for(var l=0;l<i;l++){var u=l%2?s%2:s%2-1;u&&o.fillRect(s*t,l*t,t,t)}var f=new ne({image:a,anisotropic:8});return f},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var n=new ne({image:t});return n}};const qt=hn;var wi=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function Ci(e){return"_on"+e}var Ri=function(e){var t=this;this._texture=new ne({anisotropic:32,flipY:!1,surface:this,dispose:function(r){t.dispose(),ne.prototype.dispose.call(this,r)}}),wi.forEach(function(r){this[Ci(r)]=function(n){n.triangle&&this._meshes.forEach(function(i){this.dispatchEvent(r,i,n.triangle,n.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};Ri.prototype={constructor:Ri,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var r=this,n=e.getZr(),i=n.__oldRefreshImmediately||n.refreshImmediately;n.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},n.__oldRefreshImmediately=i}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new P,t=new P,r=new P,n=new et,i=new et,a=new et,o=new et,s=new P;return function(l,u,f,c){var d=u.geometry,h=d.attributes.position,_=d.attributes.texcoord0,v=P.dot,p=P.cross;h.get(f[0],e.array),h.get(f[1],t.array),h.get(f[2],r.array),_.get(f[0],n.array),_.get(f[1],i.array),_.get(f[2],a.array),p(s,t,r);var m=v(e,s),x=v(c,s)/m;p(s,r,e);var g=v(c,s)/m;p(s,e,t);var y=v(c,s)/m;et.scale(o,n,x),et.scaleAndAdd(o,o,i,g),et.scaleAndAdd(o,o,a,y);var E=o.x*this._chart.getWidth(),T=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:E,zrY:T})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(wi.forEach(function(t){e.on(t,this[Ci(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),wi.forEach(function(r){e.off(r,this[Ci(r)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};const $f=Ri;var Qf=mr.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=mr.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}});const Hr=Qf,Jf=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;I.import(Jf);var ec=new ji,to=new Vi({geometry:ec,frustumCulling:!1}),tc=new Hr,rc=Qe.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new I(I.source("clay.compositor.vertex"),this.fragment),t=new xt({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||C.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var r in this.outputs){var n=this.outputs[r];n&&t.attach(n,r)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var r=e.gl;if(t){this.bind(e,t);var n=e.getGLExtension("EXT_draw_buffers");if(n&&this.outputs){var i=[];for(var a in this.outputs)a=+a,a>=r.COLOR_ATTACHMENT0&&a<=r.COLOR_ATTACHMENT0+8&&i.push(a);n.drawBuffersEXT(i)}}this.trigger("beforerender",this,e);var o=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){o=o|r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var s=this.clearColor;Array.isArray(s)&&r.clearColor(s[0],s[1],s[2],s[3])}r.clear(o),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){to.material=this.material,e.renderPass([to],tc)},dispose:function(e){}});const We=rc,nc=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,ic=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`;var jt={},ci=["px","nx","py","ny","pz","nz"];jt.prefilterEnvironmentMap=function(e,t,r,n,i){(!i||!n)&&(n=jt.generateNormalDistribution(),i=jt.integrateBRDF(e,n)),r=r||{};var a=r.width||64,o=r.height||64,s=r.type||t.type,l=new Fr({width:a,height:o,type:s,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var u=Math.min(a,o),f=Math.log(u)/Math.log(2)+1,c=new xt({shader:new I({vertex:I.source("clay.skybox.vertex"),fragment:ic})});c.set("normalDistribution",n),r.encodeRGBM&&c.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&c.define("fragment","RGBM_DECODE");var d=new Nt,h;if(t.textureType==="texture2D"){var _=new Fr({width:a,height:o,type:s===j.FLOAT?j.HALF_FLOAT:s});qt.panoramaToCubeMap(e,t,_,{encodeRGBM:r.decodeRGBM}),t=_}h=new Ur({scene:d,material:c}),h.material.set("environmentMap",t);var v=new qi({texture:l});r.encodeRGBM&&(s=l.type=j.UNSIGNED_BYTE);for(var p=new ne({width:a,height:o,type:s}),m=new ze({depthBuffer:!1}),x=we[s===j.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],g=0;g<f;g++){l.mipmaps[g]={pixels:{}},h.material.set("roughness",g/(f-1));for(var y=p.width,E=2*Math.atan(y/(y-.5))/Math.PI*180,T=0;T<ci.length;T++){var S=new x(p.width*p.height*4);m.attach(p),m.bind(e);var b=v.getCamera(ci[T]);b.fov=E,e.render(d,b),e.gl.readPixels(0,0,p.width,p.height,j.RGBA,s,S),m.unbind(e),l.mipmaps[g].pixels[ci[T]]=S}p.width/=2,p.height/=2,p.dirty()}return m.dispose(e),p.dispose(e),h.dispose(e),n.dispose(e),{environmentMap:l,brdfLookup:i,normalDistribution:n,maxMipmapLevel:f}};jt.integrateBRDF=function(e,t){t=t||jt.generateNormalDistribution();var r=new ze({depthBuffer:!1}),n=new We({fragment:nc}),i=new ne({width:512,height:256,type:j.HALF_FLOAT,wrapS:j.CLAMP_TO_EDGE,wrapT:j.CLAMP_TO_EDGE,minFilter:j.NEAREST,magFilter:j.NEAREST,useMipmap:!1});return n.setUniform("normalDistribution",t),n.setUniform("viewportSize",[512,256]),n.attachOutput(i),n.render(e,r),r.dispose(e),i};jt.generateNormalDistribution=function(r,n){for(var r=r||256,n=n||1024,i=new ne({width:r,height:n,type:j.FLOAT,minFilter:j.NEAREST,magFilter:j.NEAREST,wrapS:j.CLAMP_TO_EDGE,wrapT:j.CLAMP_TO_EDGE,useMipmap:!1}),a=new Float32Array(n*r*4),o=[],s=0;s<r;s++){for(var l=s/r,u=l*l,f=0;f<n;f++){var c=(f<<16|f>>>16)>>>0;c=((c&1431655765)<<1|(c&2863311530)>>>1)>>>0,c=((c&858993459)<<2|(c&3435973836)>>>2)>>>0,c=((c&252645135)<<4|(c&4042322160)>>>4)>>>0,c=(((c&16711935)<<8|(c&4278255360)>>>8)>>>0)/4294967296;var d=Math.sqrt((1-c)/(1+(u*u-1)*c));o[f]=d}for(var f=0;f<n;f++){var h=(f*r+s)*4,d=o[f],_=Math.sqrt(1-d*d),v=f/n,p=2*Math.PI*v;a[h]=_*Math.cos(p),a[h+1]=d,a[h+2]=_*Math.sin(p),a[h+3]=1}}return i.pixels=a,i};const dn=jt;var ac=lt.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=dn.generateNormalDistribution(),this._brdfLookup=dn.integrateBRDF(e,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var n=dn.prefilterEnvironmentMap(e,r,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=n.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}});const oc=ac;var sc=lt.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new we.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,r=0;r<e.coefficients.length;r++)t[r]=e.coefficients[r];return t}}}});const lc=sc;var Qo={},Xt=["px","nx","py","ny","pz","nz"];function uc(e,t){var r=e[0],n=e[1],i=e[2];return t===0?1:t===1?r:t===2?n:t===3?i:t===4?r*i:t===5?n*i:t===6?r*n:t===7?3*i*i-1:r*r-n*n}var fc={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function cc(e,t,r,n){for(var i=new we.Float32Array(27),a=A.create(),o=A.create(),s=A.create(),l=0;l<9;l++){for(var u=A.create(),f=0;f<Xt.length;f++){for(var c=t[Xt[f]],d=A.create(),h=0,_=0,v=fc[Xt[f]],p=0;p<n;p++)for(var m=0;m<r;m++){a[0]=m/(r-1)*2-1,a[1]=p/(n-1)*2-1,a[2]=-1,A.normalize(a,a),s[0]=a[v[0]]*v[3],s[1]=a[v[1]]*v[4],s[2]=a[v[2]]*v[5],o[0]=c[_++]/255,o[1]=c[_++]/255,o[2]=c[_++]/255;var x=c[_++]/255*8.12;o[0]*=x,o[1]*=x,o[2]*=x,A.scaleAndAdd(d,d,o,uc(s,l)*-a[2]),h+=-a[2]}A.scaleAndAdd(u,u,d,1/h)}i[l*3]=u[0]/6,i[l*3+1]=u[1]/6,i[l*3+2]=u[2]/6}return i}Qo.projectEnvironmentMap=function(e,t,r){r=r||{},r.lod=r.lod||0;var n,i=new Nt,a=64;t.textureType==="texture2D"?n=new Ur({scene:i,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,n=new Ur({scene:i,environmentMap:t}));var o=Math.ceil(a/Math.pow(2,r.lod)),s=Math.ceil(a/Math.pow(2,r.lod)),l=new ne({width:o,height:s}),u=new ze;n.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&n.material.define("fragment","RGBM_DECODE"),n.material.set("lod",r.lod);for(var f=new qi({texture:l}),c={},d=0;d<Xt.length;d++){c[Xt[d]]=new Uint8Array(o*s*4);var h=f.getCamera(Xt[d]);h.fov=90,u.attach(l),u.bind(e),e.render(i,h),e.gl.readPixels(0,0,o,s,j.RGBA,j.UNSIGNED_BYTE,c[Xt[d]]),u.unbind(e)}return n.dispose(e),u.dispose(e),l.dispose(e),cc(e,c,o,s)};const hc=Qo;var dc={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return Ke(t.dataIndex)?Rt(t.dataIndex,function(r){return e.indexOfRawIndex(r)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return Ke(t.name)?Rt(t.name,function(r){return e.indexOfName(r)}):e.indexOfName(t.name)}};const je=dc;var vc=ce.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,r=this.attributes.position,n=this.attributes.texcoord0,i=this.attributes.normal,a=(t+1)*(e+1);r.init(a),n.init(a),i.init(a);var o=a>65535?Uint32Array:Uint16Array,s=this.indices=new o(t*e*6),l,u,f,c,d,h,_,g=this.radius,v=this.phiStart,p=this.phiLength,m=this.thetaStart,x=this.thetaLength,g=this.radius,y=[],E=[],T=0,S=1/g;for(_=0;_<=e;_++)for(h=0;h<=t;h++)c=h/t,d=_/e,l=-g*Math.cos(v+c*p)*Math.sin(m+d*x),u=g*Math.cos(m+d*x),f=g*Math.sin(v+c*p)*Math.sin(m+d*x),y[0]=l,y[1]=u,y[2]=f,E[0]=c,E[1]=d,r.set(T,y),n.set(T,E),y[0]*=S,y[1]*=S,y[2]*=S,i.set(T,y),T++;var b,w,L,R,D=t+1,O=0;for(_=0;_<e;_++)for(h=0;h<t;h++)w=_*D+h,b=_*D+h+1,R=(_+1)*D+h+1,L=(_+1)*D+h,s[O++]=b,s[O++]=w,s[O++]=R,s[O++]=w,s[O++]=L,s[O++]=R;this.boundingBox=new ke,this.boundingBox.max.set(g,g,g),this.boundingBox.min.set(-g,-g,-g)}});const _c=vc;var pc=lt.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}}});const mc=pc;var gc=lt.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new P,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=lt.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}});const yc=gc;var xc=lt.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=lt.prototype.clone.call(this);return e.range=this.range,e}});const Tc=xc;var Ec=lt.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new P,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=lt.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}});const Ac=Ec;var te=function(e,t,r,n){e=e||0,t=t||0,r=r||0,n=n||0,this.array=B.fromValues(e,t,r,n),this._dirty=!0};te.prototype={constructor:te,add:function(e){return B.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r,n){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=n,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new te(this.x,this.y,this.z,this.w)},copy:function(e){return B.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return B.dist(this.array,e.array)},distance:function(e){return B.distance(this.array,e.array)},div:function(e){return B.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return B.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return B.dot(this.array,e.array)},len:function(){return B.len(this.array)},length:function(){return B.length(this.array)},lerp:function(e,t,r){return B.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return B.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return B.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return B.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return B.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return B.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return B.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return B.random(this.array,e),this._dirty=!0,this},scale:function(e){return B.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return B.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return B.sqrDist(this.array,e.array)},squaredDistance:function(e){return B.squaredDistance(this.array,e.array)},sqrLen:function(){return B.sqrLen(this.array)},squaredLength:function(){return B.squaredLength(this.array)},sub:function(e){return B.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return B.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return B.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return B.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Cr=Object.defineProperty;if(Cr){var rn=te.prototype;Cr(rn,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Cr(rn,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Cr(rn,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Cr(rn,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}te.add=function(e,t,r){return B.add(e.array,t.array,r.array),e._dirty=!0,e};te.set=function(e,t,r,n,i){B.set(e.array,t,r,n,i),e._dirty=!0};te.copy=function(e,t){return B.copy(e.array,t.array),e._dirty=!0,e};te.dist=function(e,t){return B.distance(e.array,t.array)};te.distance=te.dist;te.div=function(e,t,r){return B.divide(e.array,t.array,r.array),e._dirty=!0,e};te.divide=te.div;te.dot=function(e,t){return B.dot(e.array,t.array)};te.len=function(e){return B.length(e.array)};te.lerp=function(e,t,r,n){return B.lerp(e.array,t.array,r.array,n),e._dirty=!0,e};te.min=function(e,t,r){return B.min(e.array,t.array,r.array),e._dirty=!0,e};te.max=function(e,t,r){return B.max(e.array,t.array,r.array),e._dirty=!0,e};te.mul=function(e,t,r){return B.multiply(e.array,t.array,r.array),e._dirty=!0,e};te.multiply=te.mul;te.negate=function(e,t){return B.negate(e.array,t.array),e._dirty=!0,e};te.normalize=function(e,t){return B.normalize(e.array,t.array),e._dirty=!0,e};te.random=function(e,t){return B.random(e.array,t),e._dirty=!0,e};te.scale=function(e,t,r){return B.scale(e.array,t.array,r),e._dirty=!0,e};te.scaleAndAdd=function(e,t,r,n){return B.scaleAndAdd(e.array,t.array,r.array,n),e._dirty=!0,e};te.sqrDist=function(e,t){return B.sqrDist(e.array,t.array)};te.squaredDistance=te.sqrDist;te.sqrLen=function(e){return B.sqrLen(e.array)};te.squaredLength=te.sqrLen;te.sub=function(e,t,r){return B.subtract(e.array,t.array,r.array),e._dirty=!0,e};te.subtract=te.sub;te.transformMat4=function(e,t,r){return B.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};te.transformQuat=function(e,t,r){return B.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};const Sc=te;var Ge={};Ge.create=function(){var e=new Fe(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};Ge.clone=function(e){var t=new Fe(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};Ge.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};Ge.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};Ge.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};Ge.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r*a-i*n;return o?(o=1/o,e[0]=a*o,e[1]=-n*o,e[2]=-i*o,e[3]=r*o,e):null};Ge.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e};Ge.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};Ge.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],f=r[3];return e[0]=n*s+a*l,e[1]=i*s+o*l,e[2]=n*u+a*f,e[3]=i*u+o*f,e};Ge.mul=Ge.multiply;Ge.rotate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l+a*s,e[1]=i*l+o*s,e[2]=n*-s+a*l,e[3]=i*-s+o*l,e};Ge.scale=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=r[0],l=r[1];return e[0]=n*s,e[1]=i*s,e[2]=a*l,e[3]=o*l,e};Ge.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};Ge.LDU=function(e,t,r,n){return e[2]=n[2]/n[0],r[0]=n[0],r[1]=n[1],r[3]=n[3]-e[2]*r[1],[e,t,r]};const Te=Ge;var Xe=function(){this.array=Te.create(),this._dirty=!0};Xe.prototype={constructor:Xe,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new Xe().copy(this)},copy:function(e){return Te.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return Te.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return Te.determinant(this.array)},identity:function(){return Te.identity(this.array),this._dirty=!0,this},invert:function(){return Te.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Te.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Te.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Te.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Te.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Te.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Te.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return Te.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Xe.adjoint=function(e,t){return Te.adjoint(e.array,t.array),e._dirty=!0,e};Xe.copy=function(e,t){return Te.copy(e.array,t.array),e._dirty=!0,e};Xe.determinant=function(e){return Te.determinant(e.array)};Xe.identity=function(e){return Te.identity(e.array),e._dirty=!0,e};Xe.invert=function(e,t){return Te.invert(e.array,t.array),e._dirty=!0,e};Xe.mul=function(e,t,r){return Te.mul(e.array,t.array,r.array),e._dirty=!0,e};Xe.multiply=Xe.mul;Xe.rotate=function(e,t,r){return Te.rotate(e.array,t.array,r),e._dirty=!0,e};Xe.scale=function(e,t,r){return Te.scale(e.array,t.array,r.array),e._dirty=!0,e};Xe.transpose=function(e,t){return Te.transpose(e.array,t.array),e._dirty=!0,e};const bc=Xe;var $e={};$e.create=function(){var e=new Fe(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};$e.clone=function(e){var t=new Fe(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};$e.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};$e.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};$e.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=r*a-n*i;return l?(l=1/l,e[0]=a*l,e[1]=-n*l,e[2]=-i*l,e[3]=r*l,e[4]=(i*s-a*o)*l,e[5]=(n*o-r*s)*l,e):null};$e.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};$e.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],f=r[1],c=r[2],d=r[3],h=r[4],_=r[5];return e[0]=n*u+a*f,e[1]=i*u+o*f,e[2]=n*c+a*d,e[3]=i*c+o*d,e[4]=n*h+a*_+s,e[5]=i*h+o*_+l,e};$e.mul=$e.multiply;$e.rotate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=Math.sin(r),f=Math.cos(r);return e[0]=n*f+a*u,e[1]=i*f+o*u,e[2]=n*-u+a*f,e[3]=i*-u+o*f,e[4]=s,e[5]=l,e};$e.scale=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],f=r[1];return e[0]=n*u,e[1]=i*u,e[2]=a*f,e[3]=o*f,e[4]=s,e[5]=l,e};$e.translate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],f=r[1];return e[0]=n,e[1]=i,e[2]=a,e[3]=o,e[4]=n*u+a*f+s,e[5]=i*u+o*f+l,e};$e.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};const be=$e;var Ye=function(){this.array=be.create(),this._dirty=!0};Ye.prototype={constructor:Ye,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new Ye().copy(this)},copy:function(e){return be.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return be.determinant(this.array)},identity:function(){return be.identity(this.array),this._dirty=!0,this},invert:function(){return be.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return be.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return be.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return be.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return be.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return be.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return be.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return be.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ye.copy=function(e,t){return be.copy(e.array,t.array),e._dirty=!0,e};Ye.determinant=function(e){return be.determinant(e.array)};Ye.identity=function(e){return be.identity(e.array),e._dirty=!0,e};Ye.invert=function(e,t){return be.invert(e.array,t.array),e._dirty=!0,e};Ye.mul=function(e,t,r){return be.mul(e.array,t.array,r.array),e._dirty=!0,e};Ye.multiply=Ye.mul;Ye.rotate=function(e,t,r){return be.rotate(e.array,t.array,r),e._dirty=!0,e};Ye.scale=function(e,t,r){return be.scale(e.array,t.array,r.array),e._dirty=!0,e};Ye.translate=function(e,t,r){return be.translate(e.array,t.array,r.array),e._dirty=!0,e};const wc=Ye;var Ce=function(){this.array=J.create(),this._dirty=!0};Ce.prototype={constructor:Ce,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return J.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new Ce().copy(this)},copy:function(e){return J.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return J.determinant(this.array)},fromMat2d:function(e){return J.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return J.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return J.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return J.identity(this.array),this._dirty=!0,this},invert:function(){return J.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return J.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return J.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return J.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return J.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return J.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return J.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return J.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return J.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return J.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ce.adjoint=function(e,t){return J.adjoint(e.array,t.array),e._dirty=!0,e};Ce.copy=function(e,t){return J.copy(e.array,t.array),e._dirty=!0,e};Ce.determinant=function(e){return J.determinant(e.array)};Ce.identity=function(e){return J.identity(e.array),e._dirty=!0,e};Ce.invert=function(e,t){return J.invert(e.array,t.array),e};Ce.mul=function(e,t,r){return J.mul(e.array,t.array,r.array),e._dirty=!0,e};Ce.multiply=Ce.mul;Ce.fromMat2d=function(e,t){return J.fromMat2d(e.array,t.array),e._dirty=!0,e};Ce.fromMat4=function(e,t){return J.fromMat4(e.array,t.array),e._dirty=!0,e};Ce.fromQuat=function(e,t){return J.fromQuat(e.array,t.array),e._dirty=!0,e};Ce.normalFromMat4=function(e,t){return J.normalFromMat4(e.array,t.array),e._dirty=!0,e};Ce.rotate=function(e,t,r){return J.rotate(e.array,t.array,r),e._dirty=!0,e};Ce.scale=function(e,t,r){return J.scale(e.array,t.array,r.array),e._dirty=!0,e};Ce.transpose=function(e,t){return J.transpose(e.array,t.array),e._dirty=!0,e};Ce.translate=function(e,t,r){return J.translate(e.array,t.array,r.array),e._dirty=!0,e};const Cc=Ce;var Rc={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var r=this,n;if(e){for(var i=e.split("."),a=r,o=0,s=i.length;o<s;o++)a&&(a=a[i[o]]);a&&(n=a)}else n=r;if(n==null)throw new Error("Target "+e+" not exists");var l=this._animators,u=new js(n,t),f=this;return u.during(function(){f.__zr&&f.__zr.refresh()}).done(function(){var c=l.indexOf(u);c>=0&&l.splice(c,1)}),l.push(u),this.__zr&&this.__zr.animation.addAnimator(u),u},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,r=t.length,n=0;n<r;n++)t[n].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}};const Mc=Rc,Lc=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,Dc=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,Nc=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,Pc=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Ic=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Oc=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,Bc=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(ht.prototype,Mc);I.import(Lc);I.import(Vo);I.import(Dc);I.import(Nc);I.import(Pc);I.import(Ic);I.import(Oc);I.import(Bc);function Fc(e){return!e||e==="none"}function Jo(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function Uc(e){return e.getZr&&e.setOption}var Hc=Nt.prototype.addToScene,zc=Nt.prototype.removeFromScene;Nt.prototype.addToScene=function(e){if(Hc.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(r){r.__zr=t,r.addAnimatorsToZr&&r.addAnimatorsToZr(t)})}};Nt.prototype.removeFromScene=function(e){zc.call(this,e),e.traverse(function(t){var r=t.__zr;t.__zr=null,r&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(r)})};xt.prototype.setTextureImage=function(e,t,r,n){if(this.shader){var i=r.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),Fc(t)||(o=X.loadTexture(t,r,n,function(s){a.enableTexture(e),i&&i.refresh()}),a.set(e,o)),o}};var X={};X.Renderer=Ir;X.Node=ht;X.Mesh=Vi;X.Shader=I;X.Material=xt;X.Texture=j;X.Texture2D=ne;X.Geometry=ce;X.SphereGeometry=_c;X.PlaneGeometry=ji;X.CubeGeometry=$o;X.AmbientLight=mc;X.DirectionalLight=yc;X.PointLight=Tc;X.SpotLight=Ac;X.PerspectiveCamera=Ne;X.OrthographicCamera=Hr;X.Vector2=et;X.Vector3=P;X.Vector4=Sc;X.Quaternion=ko;X.Matrix2=bc;X.Matrix2d=wc;X.Matrix3=Cc;X.Matrix4=z;X.Plane=Zo;X.Ray=En;X.BoundingBox=ke;X.Frustum=Wi;var nn=null;function Gc(){return nn!==null||(nn=qt.createBlank("rgba(255,255,255,0)").image),nn}function ro(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function no(e){if((e.wrapS===j.REPEAT||e.wrapT===j.REPEAT)&&e.image){var t=ro(e.width),r=ro(e.height);if(t!==e.width||r!==e.height){var n=document.createElement("canvas");n.width=t,n.height=r;var i=n.getContext("2d");i.drawImage(e.image,0,0,t,r),e.image=n}}}X.loadTexture=function(e,t,r,n){typeof r=="function"&&(n=r,r={}),r=r||{};for(var i=Object.keys(r).sort(),a="",o=0;o<i.length;o++)a+=i[o]+"_"+r[i[o]]+"_";var s=t.__textureCache=t.__textureCache||new Zs(20);if(Uc(e)){var l=e.__textureid__,u=s.get(a+l);if(u)u.texture.surface.setECharts(e),n&&n(u.texture);else{var f=new $f(e);f.onupdate=function(){t.getZr().refresh()},u={texture:f.getTexture()};for(var o=0;o<i.length;o++)u.texture[i[o]]=r[i[o]];l=e.__textureid__||"__ecgl_ec__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),n&&n(u.texture)}return u.texture}else if(Jo(e)){var l=e.__textureid__,u=s.get(a+l);if(!u){u={texture:new X.Texture2D({image:e})};for(var o=0;o<i.length;o++)u.texture[i[o]]=r[i[o]];l=e.__textureid__||"__ecgl_image__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),no(u.texture),n&&n(u.texture)}return u.texture}else{var u=s.get(a+e);if(u)u.callbacks?u.callbacks.push(n):n&&n(u.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){u={callbacks:[n]};var c=qt.loadTexture(e,{exposure:r.exposure,fileType:"hdr"},function(){c.dirty(),u.callbacks.forEach(function(_){_&&_(c)}),u.callbacks=null});u.texture=c,s.put(a+e,u)}else{for(var c=new X.Texture2D({image:new Image}),o=0;o<i.length;o++)c[i[o]]=r[i[o]];u={texture:c,callbacks:[n]};var d=c.image;d.onload=function(){c.image=d,no(c),c.dirty(),u.callbacks.forEach(function(v){v&&v(c)}),u.callbacks=null},d.crossOrigin="Anonymous",d.src=e,c.image=Gc(),s.put(a+e,u)}return u.texture}};X.createAmbientCubemap=function(e,t,r,n){e=e||{};var i=e.texture,a=je.firstNotNull(e.exposure,1),o=new oc({intensity:je.firstNotNull(e.specularIntensity,1)}),s=new lc({intensity:je.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=X.loadTexture(i,r,{exposure:a},function(){o.cubemap.flipY=!1,o.prefilter(t,32),s.coefficients=hc.projectEnvironmentMap(t,o.cubemap,{lod:1}),n&&n()}),{specular:o,diffuse:s}};X.createBlankTexture=qt.createBlank;X.isImage=Jo;X.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};X.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=Eo(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};X.directionFromAlphaBeta=function(e,t){var r=e/180*Math.PI+Math.PI/2,n=-t/180*Math.PI+Math.PI/2,i=[],a=Math.sin(r);return i[0]=a*Math.cos(n),i[1]=-Math.cos(r),i[2]=a*Math.sin(n),i};X.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};X.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];X.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=I.source(e+".vertex"),r=I.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),r||console.error("Fragment shader of '%s' not exits",e);var n=new I(t,r);return n.name=e,n};X.createMaterial=function(e,t){t instanceof Array||(t=[t]);var r=X.createShader(e),n=new xt({shader:r});return t.forEach(function(i){typeof i=="string"&&n.define(i)}),n};X.setMaterialFromModel=function(e,t,r,n){t.autoUpdateTextureStatus=!1;var i=r.getModel(e+"Material"),a=i.get("detailTexture"),o=je.firstNotNull(i.get("textureTiling"),1),s=je.firstNotNull(i.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?X.Texture.REPEAT:X.Texture.CLAMP_TO_EDGE,u={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var f=i.get("roughness"),c=i.get("metalness");c!=null?isNaN(c)&&(t.setTextureImage("metalnessMap",c,n,u),c=je.firstNotNull(i.get("metalnessAdjust"),.5)):c=0,f!=null?isNaN(f)&&(t.setTextureImage("roughnessMap",f,n,u),f=je.firstNotNull(i.get("roughnessAdjust"),.5)):f=.5;var d=i.get("normalTexture");t.setTextureImage("detailMap",a,n,u),t.setTextureImage("normalMap",d,n,u),t.set({roughness:f,metalness:c,detailUvRepeat:o,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",a,n,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",a,n,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="hatching"){var h=i.get("hatchingTextures")||[];h.length<6;for(var _=0;_<6;_++)t.setTextureImage("hatch"+(_+1),h[_],n,{anisotropic:8,wrapS:X.Texture.REPEAT,wrapT:X.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}};X.updateVertexAnimation=function(e,t,r,n){var i=n.get("animation"),a=n.get("animationDurationUpdate"),o=n.get("animationEasingUpdate"),s=r.shadowDepthMaterial;if(i&&t&&a>0&&t.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)r.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),s&&s.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};const V=X;var fe=function(e,t){this.id=e,this.zr=t;try{this.renderer=new Ir({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(n){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(n);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new of({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new Oi({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};fe.prototype.setUnpainted=function(){};fe.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var r=this.zr;e.scene.traverse(function(n){n.__zr=r,n.addAnimatorsToZr&&n.addAnimatorsToZr(r)})}};function es(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}fe.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(es,this),e.layer=null,this._viewsToDispose.push(e))}};fe.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(es,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};fe.prototype.resize=function(e,t){var r=this.renderer;r.resize(e,t)};fe.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};fe.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};fe.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};fe.prototype.needsRefresh=function(){this.zr.refresh()};fe.prototype.refresh=function(e){this._backgroundColor=e?V.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};fe.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};fe.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};fe.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var Vc=1;fe.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var r=!1,n=0;n<this.views.length;n++)r=this.views[n].needsAccumulate()||r;if(!r)return;function i(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var o=!0,s=0;s<t.views.length;s++)o=t.views[s].isAccumulateFinished()&&r;o||(t._doRender(!0),e?i(a):Ks(function(){i(a)}))}}this._accumulatingId=Vc++,e?i(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){i(t._accumulatingId)},50)};fe.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(Sn(this._textureList),Sn(this._geometriesList));for(var r=0;r<this.views.length;r++)kc(this.views[r].scene,e,t);this._textureList&&(bn(this.renderer,this._textureList),bn(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function Sn(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function bn(e,t){for(var r=0;r<t.length;r++)t[r].__used__||t[r].dispose(e)}function an(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function kc(e,t,r){var n,i;e.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==n)for(var u=l.getTextureUniforms(),f=0;f<u.length;f++){var c=u[f],d=l.uniforms[c].value;if(d){if(d instanceof j)an(d,t);else if(d instanceof Array)for(var h=0;h<d.length;h++)d[h]instanceof j&&an(d[h],t)}}s!==i&&an(s,r),n=l,i=s}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&an(e.lights[a].cubemap,t)}fe.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(Sn(this._textureList),Sn(this._geometriesList),bn(this.renderer,this._textureList),bn(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};fe.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};fe.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),r=t&&t.target,n=this._hovered;this._hovered=t,n&&r!==n.target&&(n.relatedTarget=r,this._dispatchEvent("mouseout",e,n),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!n||r!==n.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};fe.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};fe.prototype.onclick=fe.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(t*t+r*r)>20)){e=e.event;var n=this.pickObject(e.offsetX,e.offsetY);n&&(this._dispatchEvent(e.type,e,n),this._dispatchDataEvent(e.type,e,n));var i=this._clickToSetFocusPoint(e);if(i){var a=i.view.setDOFFocusOnPoint(i.distance);a&&this.zr.refresh()}}}};fe.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,r=t.viewport,n=this.views.length-1;n>=0;n--){var i=this.views[n];if(i.hasDOF()&&i.containPoint(e.offsetX,e.offsetY)){this._picking.scene=i.scene,this._picking.camera=i.camera,t.viewport=i.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=i,a}}t.viewport=r};fe.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};fe.prototype.pickObject=function(e,t){for(var r=[],n=this.renderer,i=n.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,n.viewport=o.viewport,this._picking.pickAll(e,t,r))}return n.viewport=i,r.sort(function(s,l){return s.distance-l.distance}),r[0]};fe.prototype._dispatchEvent=function(e,t,r){r||(r={});var n=r.target;for(r.cancelBubble=!1,r.event=t,r.type=e,r.offsetX=t.offsetX,r.offsetY=t.offsetY;n&&(n.trigger(e,r),n=n.getParent(),!r.cancelBubble););this._dispatchToView(e,r)};fe.prototype._dispatchDataEvent=function(e,t,r){var n=r&&r.target,i=n&&n.dataIndex,a=n&&n.seriesIndex,o=n&&n.eventData,s=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var u={target:l};const f=Ys(l);e==="mousemove"&&(i!=null?i!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(f.dataIndex=this._lastDataIndex,f.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(f.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0),this._lastEventData=o,this._lastDataIndex=i,this._lastSeriesIndex=a),f.eventData=o,f.dataIndex=i,f.seriesIndex=a,(o!=null||parseInt(i,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(u,e,t),s&&this.zr.handler.dispatchToElement(u,"mouseover",t))};fe.prototype._dispatchToView=function(e,t){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(t.offsetX,t.offsetY)&&this.views[r].trigger(e,t)};Object.assign(fe.prototype,Hi);const ts=fe;var Wc=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function Dr(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var r=e[t].normal,n=e[t].emphasis;r&&(e[t]=r),n&&(e.emphasis=e.emphasis||{},e.emphasis[t]=n)}}function Xc(e){Dr(e,"itemStyle"),Dr(e,"lineStyle"),Dr(e,"areaStyle"),Dr(e,"label")}function on(e){e&&(e instanceof Array||(e=[e]),Ae(e,function(t){if(t.axisLabel){var r=t.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function qc(e){Ae(e.series,function(t){$s(Wc,t.type)>=0&&(Xc(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),on(e.xAxis3D),on(e.yAxis3D),on(e.zAxis3D),on(e.grid3D),Dr(e.geo3D)}function rs(e){this._layers={},this._zr=e}rs.prototype.update=function(e,t){var r=this,n=t.getZr();if(!n.getWidth()||!n.getHeight()){console.warn("Dom has no width or height");return}function i(s){n.setSleepAfterStill(0);var l;s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var u=r._layers,f=u[l];if(!f){if(f=u[l]=new ts("gl-"+l,n),n.painter.isSingleCanvas()){f.virtual=!0;var c=new tl({z:1e4,style:{image:f.renderer.canvas},silent:!0});f.__hostImage=c,n.add(c)}n.painter.insertLayer(l,f)}return f.__hostImage&&f.__hostImage.setStyle({width:f.renderer.getWidth(),height:f.renderer.getHeight()}),f}function a(s,l){s&&s.traverse(function(u){u.isRenderable&&u.isRenderable()&&(u.ignorePicking=u.$ignorePicking!=null?u.$ignorePicking:l)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(s,l){if(s!=="series"){var u=t.getViewOfComponentModel(l),f=l.coordinateSystem;if(u.__ecgl__){var c;if(f){if(!f.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}c=f.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}c=f.viewGL}var c=f.viewGL,d=i(l);d.addView(c),u.afterRender&&u.afterRender(l,e,t,d),a(u.groupGL,l.get("silent"))}}}),e.eachSeries(function(s){var l=t.getViewOfSeriesModel(s),u=s.coordinateSystem;if(l.__ecgl__){if(u&&!u.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var f=u&&u.viewGL||l.viewGL,c=i(s);c.addView(f),l.afterRender&&l.afterRender(s,e,t,c),a(l.groupGL,s.get("silent"))}})};Qs(function(e){var t=e.getZr(),r=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(n){n instanceof ts&&n.dispose()}),r.call(this)},t.painter.getRenderedCanvas=function(n){if(n=n||{},this._singleCanvas)return this._layers[0].dom;var i=document.createElement("canvas"),a=n.pixelRatio||this.dpr;i.width=this.getWidth()*a,i.height=this.getHeight()*a;var o=i.getContext("2d");o.dpr=a,o.clearRect(0,0,i.width,i.height),n.backgroundColor&&(o.fillStyle=n.backgroundColor,o.fillRect(0,0,i.width,i.height));var s=this.storage.getDisplayList(!0),l={},u,f=this;function c(v,p){var m=f._zlevelList;v==null&&(v=-1/0);for(var x,g=0;g<m.length;g++){var y=m[g],E=f._layers[y];if(!E.__builtin__&&y>v&&y<p){x=E;break}}x&&x.renderToCanvas&&(o.save(),x.renderToCanvas(o),o.restore())}for(var d={ctx:o},h=0;h<s.length;h++){var _=s[h];_.zlevel!==u&&(c(u,_.zlevel),u=_.zlevel),this._doPaintEl(_,d,!0,null,l)}return c(u,1/0),i}});Js(function(e,t){var r=t.getZr(),n=r.__egl=r.__egl||new rs(r);n.update(e,t)});el(qc);const Pt={vec2:H,vec3:A,vec4:B,mat2:Te,mat2d:be,mat3:J,mat4:N,quat:q};var jc=Pt.vec3,Zc=Fi.isDimensionStacked;function Yc(e){var t=e[0],r=e[1];return!(t>0&&r>0||t<0&&r<0)}function Kc(e,t){var r=e.getData(),n=e.get("barSize");if(n==null){var i=t.size,a,o,s=t.getAxis("x"),l=t.getAxis("y");s.type==="category"?a=s.getBandWidth()*.7:a=Math.round(i[0]/Math.sqrt(r.count()))*.6,l.type==="category"?o=l.getBandWidth()*.7:o=Math.round(i[1]/Math.sqrt(r.count()))*.6,n=[a,o]}else Ke(n)||(n=[n,n]);var u=t.getAxis("z").scale.getExtent(),f=Yc(u),c=["x","y","z"].map(function(_){return e.coordDimToDataDim(_)[0]}),d=Zc(r,c[2]),h=d?r.getCalculationInfo("stackResultDimension"):c[2];r.each(c,function(_,v,p,m){var x=r.get(h,m),g=d?x-p:f?0:u[0],y=t.dataToPoint([_,v,g]),E=t.dataToPoint([_,v,x]),T=jc.dist(y,E),S=[0,E[1]<y[1]?-1:1,0];Math.abs(T)===0&&(T=.1);var b=[n[0],T,n[1]];r.setItemLayout(m,[y,S,b])}),r.setLayout("orient",[1,0,0])}function Yi(e,t,r){for(var n=e.getDataExtent(t),i=e.getDataExtent(r),a=n[1]-n[0]||n[0],o=i[1]-i[0]||i[0],s=50,l=new Uint8Array(s*s),u=0;u<e.count();u++){var f=e.get(t,u),c=e.get(r,u),d=Math.floor((f-n[0])/a*(s-1)),h=Math.floor((c-i[0])/o*(s-1)),_=h*s+d;l[_]=l[_]||1}for(var v=0,u=0;u<l.length;u++)l[u]&&v++;return v/l.length}var io=Pt.vec3,$c=Fi.isDimensionStacked;function Qc(e,t){var r=e.getData(),n=e.get("minHeight")||0,i=e.get("barSize"),a=["lng","lat","alt"].map(function(u){return e.coordDimToDataDim(u)[0]});if(i==null){var o=t.radius*Math.PI,s=Yi(r,a[0],a[1]);i=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else Ke(i)||(i=[i,i]);var l=Ki(r,a);r.each(a,function(u,f,c,d){var h=r.get(l.dimension,d),_=l.isStacked?h-c:t.altitudeAxis.scale.getExtent()[0],v=Math.max(t.altitudeAxis.dataToCoord(c),n),p=t.dataToPoint([u,f,_]),m=t.dataToPoint([u,f,h]),x=io.sub([],m,p);io.normalize(x,x);var g=[i[0],v,i[1]];r.setItemLayout(d,[p,x,g])}),r.setLayout("orient",P.UP.array)}function Jc(e,t){var r=e.getData(),n=e.get("barSize"),i=e.get("minHeight")||0,a=["lng","lat","alt"].map(function(f){return e.coordDimToDataDim(f)[0]});if(n==null){var o=Math.min(t.size[0],t.size[2]),s=Yi(r,a[0],a[1]);n=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else Ke(n)||(n=[n,n]);var l=[0,1,0],u=Ki(r,a);r.each(a,function(f,c,d,h){var _=r.get(u.dimension,h),v=u.isStacked?_-d:t.altitudeAxis.scale.getExtent()[0],p=Math.max(t.altitudeAxis.dataToCoord(d),i),m=t.dataToPoint([f,c,v]),x=[n[0],p,n[1]];r.setItemLayout(h,[m,l,x])}),r.setLayout("orient",[1,0,0])}function eh(e,t){var r=e.getData(),n=e.coordDimToDataDim("lng")[0],i=e.coordDimToDataDim("lat")[0],a=e.coordDimToDataDim("alt")[0],o=e.get("barSize"),s=e.get("minHeight")||0;if(o==null){var l=r.getDataExtent(n),u=r.getDataExtent(i),f=t.dataToPoint([l[0],u[0]]),c=t.dataToPoint([l[1],u[1]]),d=Math.min(Math.abs(f[0]-c[0]),Math.abs(f[1]-c[1]))||1,h=Yi(r,n,i);o=[d/Math.sqrt(r.count()/h),d/Math.sqrt(r.count()/h)]}else Ke(o)||(o=[o,o]),o[0]/=t.getScale()/16,o[1]/=t.getScale()/16;var _=[0,0,1],v=[n,i,a],p=Ki(r,v);r.each(v,function(m,x,g,y){var E=r.get(p.dimension,y),T=p.isStacked?E-g:0,S=t.dataToPoint([m,x,T]),b=t.dataToPoint([m,x,E]),w=Math.max(b[2]-S[2],s),L=[o[0],w,o[1]];r.setItemLayout(y,[S,_,L])}),r.setLayout("orient",[1,0,0])}function Ki(e,t){var r=$c(e,t[2]);return{dimension:r?e.getCalculationInfo("stackResultDimension"):t[2],isStacked:r}}function th(e){e.registerLayout(function(t,r){t.eachSeriesByType("bar3D",function(n){var i=n.coordinateSystem,a=i&&i.type;a==="globe"?Qc(n,i):a==="cartesian3D"?Kc(n,i):a==="geo3D"?Jc(n,i):(a==="mapbox3D"||a==="maptalks3D")&&eh(n,i)})})}const rh={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}};var $i={};$i.getFormattedLabel=function(e,t,r,n,i){r=r||"normal";var a=e.getData(n),o=a.getItemModel(t),s=e.getDataParams(t,n);i!=null&&s.value instanceof Array&&(s.value=s.value[i]);var l=o.get(r==="normal"?["label","formatter"]:["emphasis","label","formatter"]);l==null&&(l=o.get(["label","formatter"]));var u;return typeof l=="function"?(s.status=r,u=l(s)):typeof l=="string"&&(u=rl(l,s)),u};$i.normalizeToArray=function(e){return e instanceof Array?e:e==null?[]:[e]};const ns=$i;function Or(e,t){const r=e.getItemVisual(t,"style");if(r){const n=e.getVisual("drawType");return r[n]}}function vn(e,t){const r=e.getItemVisual(t,"style");return r&&r.opacity}function nh(e,t){var r=[];return Ae(e.dimensions,function(n){var i=e.getDimensionInfo(n),a=i.otherDims,o=a[t];o!=null&&o!==!1&&(r[o]=i.name)}),r}function ih(e,t,r){function n(c){var d=[],h=nh(i,"tooltip");h.length?Ae(h,function(v){_(i.get(v,t),v)}):Ae(c,_);function _(v,p){var m=i.getDimensionInfo(p);if(!(!m||m.otherDims.tooltip===!1)){var x=m.type,g="- "+(m.tooltipName||m.name)+": "+(x==="ordinal"?v+"":x==="time"?r?"":al("yyyy/MM/dd hh:mm:ss",v):fa(v));g&&d.push(Xr(g))}}return"<br/>"+d.join("<br/>")}var i=e.getData(),a=e.getRawValue(t),o=Ke(a)?n(a):Xr(fa(a)),s=i.getName(t),l=Or(i,t);nl(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var u=il(l),f=e.name;return f==="\0-"&&(f=""),f=f?Xr(f)+(r?": ":"<br/>"):"",r?u+f+o:f+u+(s?Xr(s)+": "+o:o)}function ah(e,t,r){r=r||e.getSource();var n=t||ol(e.get("coordinateSystem"))||["x","y","z"],i=sl(r,{dimensionsDefine:r.dimensionsDefine||e.get("dimensions"),encodeDefine:r.encodeDefine||e.get("encode"),coordDimensions:n.map(function(s){var l=e.getReferringComponents(s+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:s}})});e.get("coordinateSystem")==="cartesian3D"&&i.forEach(function(s){if(n.indexOf(s.coordDim)>=0){var l=e.getReferringComponents(s.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(s.ordinalMeta=l.getOrdinalMeta())}});var a=Fi.enableDataStack(e,i,{byIndex:!0,stackedCoordDimension:"z"}),o=new ll(i,e);return o.setCalculationInfo(a),o.initData(r),o}var is=ul.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(e,t){return ah(this)},getFormattedLabel:function(e,t,r,n){var i=ns.getFormattedLabel(this,e,t,r,n);return i==null&&(i=this.getData().get("z",e)),i},formatTooltip:function(e){return ih(this,e)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});mt(is.prototype,rh);const oh=is,Un={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var r in t)e||!t[r].value?t[r].value=[]:t[r].value=Array.prototype.slice.call(t[r].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}};function hi(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function as(e,t,r,n,i){var a=r,o=e[t];hi(e,t,n);for(var s=r;s<n;s++)i(e[s],o)<0&&(hi(e,s,a),a++);return hi(e,n,a),a}function wn(e,t,r,n){if(r<n){var i=Math.floor((r+n)/2),a=as(e,i,r,n,t);wn(e,t,r,a-1),wn(e,t,a+1,n)}}function Cn(){this._parts=[]}Cn.prototype.step=function(e,t,r){var n=e.length;if(r===0){this._parts=[],this._sorted=!1;var i=Math.floor(n/2);this._parts.push({pivot:i,left:0,right:n-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var o=0;o<a.length;o++)a[o].pivot=as(e,a[o].pivot,a[o].left,a[o].right,t);for(var s=[],o=0;o<a.length;o++){var l=a[o].left,u=a[o].pivot-1;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u});var l=a[o].pivot+1,u=a[o].right;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u})}a=this._parts=s}else for(var o=0;o<Math.floor(a.length/10);o++){var f=a.length-1-this._currentSortPartIdx;if(wn(e,t,a[f].left,a[f].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}};Cn.sort=wn;var vr=Pt.vec3,ao=vr.create(),oo=vr.create(),so=vr.create();const sh={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var r=this.indices;if(t===0){var n=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new r.constructor(r.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var i=0,a,o=0;o<r.length;){n.get(r[o++],ao),n.get(r[o++],oo),n.get(r[o++],so);var s=vr.sqrDist(ao,e),l=vr.sqrDist(oo,e),u=vr.sqrDist(so,e),f=Math.min(s,l);f=Math.min(f,u),o===3?(a=f,f=0):f=f-a,this._triangleZList[i++]=f}}for(var c=this._sortedTriangleIndices,o=0;o<c.length;o++)c[o]=o;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var o=0;o<3;o++)this._progressiveQuickSort(t*3+o);for(var d=this._indicesTmp,h=this._triangleZListTmp,_=this._triangleZList,o=0;o<this.triangleCount;o++){var v=c[o]*3,p=o*3;d[p++]=r[v++],d[p++]=r[v++],d[p]=r[v],h[o]=_[c[o]]}var m=this._indicesTmp;this._indicesTmp=this.indices,this.indices=m;var m=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=m,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;function n(i,a){return t[a]-t[i]}e?Array.prototype.sort.call(r,n):Cn.sort(r,n,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;this._quickSort=this._quickSort||new Cn,this._quickSort.step(r,function(n,i){return t[i]-t[n]},e)}};var ye=Pt.vec3,lh=Pt.mat3,Qi=ce.extend(function(){return{attributes:{position:new ce.Attribute("position","float",3,"POSITION"),normal:new ce.Attribute("normal","float",3,"NORMAL"),color:new ce.Attribute("color","float",4,"COLOR"),prevPosition:new ce.Attribute("prevPosition","float",3),prevNormal:new ce.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(e){var t=this.enableNormal,r=this.getBarVertexCount()*e,n=this.getBarTriangleCount()*e;this.vertexCount!==r&&(this.attributes.position.init(r),t?this.attributes.normal.init(r):this.attributes.normal.value=null,this.attributes.color.init(r)),this.triangleCount!==n&&(this.indices=r>65535?new Uint32Array(n*3):new Uint16Array(n*3),this._dataIndices=new Uint32Array(r))},getBarVertexCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarVertexCount(e):this.enableNormal?24:8},getBarTriangleCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarTriangleCount(e):12},_getBevelBarVertexCount:function(e){return(e+1)*4*(e+1)*2},_getBevelBarTriangleCount:function(e){var t=e*4+3,r=e*2+1;return(t+1)*r*2+4},setColor:function(e,t){for(var r=this.getBarVertexCount(),n=r*e,i=r*(e+1),a=n;a<i;a++)this.attributes.color.set(a,t);this.dirtyAttribute("color")},getDataIndexOfVertex:function(e){return this._dataIndices?this._dataIndices[e]:null},addBar:function(){for(var e=ye.create,t=ye.scaleAndAdd,r=e(),n=e(),i=e(),a=e(),o=e(),s=e(),l=e(),u=[],f=[],c=0;c<8;c++)u[c]=e();for(var d=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],h=[0,1,2,0,2,3],_=[],c=0;c<d.length;c++)for(var v=d[c],p=0;p<2;p++){for(var m=[],x=0;x<3;x++)m.push(v[h[p*3+x]]);_.push(m)}return function(g,y,E,T,S,b){var w=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(g,y,E,T,this.bevelSize,this.bevelSegments,S);else{ye.copy(i,y),ye.normalize(i,i),ye.cross(a,E,i),ye.normalize(a,a),ye.cross(n,i,a),ye.normalize(a,a),ye.negate(o,n),ye.negate(s,i),ye.negate(l,a),t(u[0],g,n,T[0]/2),t(u[0],u[0],a,T[2]/2),t(u[1],g,n,T[0]/2),t(u[1],u[1],l,T[2]/2),t(u[2],g,o,T[0]/2),t(u[2],u[2],l,T[2]/2),t(u[3],g,o,T[0]/2),t(u[3],u[3],a,T[2]/2),t(r,g,i,T[1]),t(u[4],r,n,T[0]/2),t(u[4],u[4],a,T[2]/2),t(u[5],r,n,T[0]/2),t(u[5],u[5],l,T[2]/2),t(u[6],r,o,T[0]/2),t(u[6],u[6],l,T[2]/2),t(u[7],r,o,T[0]/2),t(u[7],u[7],a,T[2]/2);var L=this.attributes;if(this.enableNormal){f[0]=n,f[1]=o,f[2]=i,f[3]=s,f[4]=a,f[5]=l;for(var R=this._vertexOffset,D=0;D<d.length;D++){for(var O=this._triangleOffset*3,M=0;M<6;M++)this.indices[O++]=R+h[M];R+=4,this._triangleOffset+=2}for(var D=0;D<d.length;D++)for(var U=f[D],M=0;M<4;M++){var F=d[D][M];L.position.set(this._vertexOffset,u[F]),L.normal.set(this._vertexOffset,U),L.color.set(this._vertexOffset++,S)}}else{for(var D=0;D<_.length;D++){for(var O=this._triangleOffset*3,M=0;M<3;M++)this.indices[O+M]=_[D][M]+this._vertexOffset;this._triangleOffset++}for(var D=0;D<u.length;D++)L.position.set(this._vertexOffset,u[D]),L.color.set(this._vertexOffset++,S)}}for(var G=this._vertexOffset,D=w;D<G;D++)this._dataIndices[D]=b}}(),_addBevelBar:function(){var e=ye.create(),t=ye.create(),r=ye.create(),n=lh.create(),i=[],a=[1,-1,-1,1],o=[1,1,-1,-1],s=[2,0];return function(l,u,f,c,d,h,_){ye.copy(t,u),ye.normalize(t,t),ye.cross(r,f,t),ye.normalize(r,r),ye.cross(e,t,r),ye.normalize(r,r),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=t[0],n[4]=t[1],n[5]=t[2],n[6]=r[0],n[7]=r[1],n[8]=r[2],d=Math.min(c[0],c[2])/2*d;for(var v=0;v<3;v++)i[v]=Math.max(c[v]-d*2,0);for(var p=(c[0]-i[0])/2,m=(c[1]-i[1])/2,x=(c[2]-i[2])/2,g=[],y=[],E=this._vertexOffset,T=[],v=0;v<2;v++){T[v]=T[v]=[];for(var S=0;S<=h;S++)for(var b=0;b<4;b++){(S===0&&v===0||v===1&&S===h)&&T[v].push(E);for(var w=0;w<=h;w++){var L=w/h*Math.PI/2+Math.PI/2*b,R=S/h*Math.PI/2+Math.PI/2*v;y[0]=p*Math.cos(L)*Math.sin(R),y[1]=m*Math.cos(R),y[2]=x*Math.sin(L)*Math.sin(R),g[0]=y[0]+a[b]*i[0]/2,g[1]=y[1]+m+s[v]*i[1]/2,g[2]=y[2]+o[b]*i[2]/2,Math.abs(p-m)<1e-6&&Math.abs(m-x)<1e-6||(y[0]/=p*p,y[1]/=m*m,y[2]/=x*x),ye.normalize(y,y),ye.transformMat3(g,g,n),ye.transformMat3(y,y,n),ye.add(g,g,l),this.attributes.position.set(E,g),this.enableNormal&&this.attributes.normal.set(E,y),this.attributes.color.set(E,_),E++}}}for(var D=h*4+3,O=h*2+1,M=D+1,b=0;b<O;b++)for(var v=0;v<=D;v++){var U=b*M+v+this._vertexOffset,F=b*M+(v+1)%M+this._vertexOffset,G=(b+1)*M+(v+1)%M+this._vertexOffset,K=(b+1)*M+v+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[G,U,F]),this.setTriangleIndices(this._triangleOffset++,[G,K,U])}this.setTriangleIndices(this._triangleOffset++,[T[0][0],T[0][2],T[0][1]]),this.setTriangleIndices(this._triangleOffset++,[T[0][0],T[0][3],T[0][2]]),this.setTriangleIndices(this._triangleOffset++,[T[1][0],T[1][1],T[1][2]]),this.setTriangleIndices(this._triangleOffset++,[T[1][0],T[1][2],T[1][3]]),this._vertexOffset=E}}()});Ze(Qi.prototype,Un);Ze(Qi.prototype,sh);const uh=Qi;function Rn(e,t,r,n,i,a,o){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=n,this.height=i,this.offsetX=t,this.offsetY=r,this.dpr=o,this.gap=a}Rn.prototype={constructor:Rn,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,r){var n=e.getBoundingRect();t==null&&(t=n.width),r==null&&(r=n.height),t*=this.dpr,r*=this.dpr,this._fitElement(e,t,r);var i=this._x,a=this._y,o=this.width*this.dpr,s=this.height*this.dpr,l=this.gap;if(i+t+l>o&&(i=this._x=0,a+=this._rowHeight+l,this._y=a,this._rowHeight=0),this._x+=t+l,this._rowHeight=Math.max(this._rowHeight,r),a+r+l>s)return null;e.x+=this.offsetX*this.dpr+i,e.y+=this.offsetY*this.dpr+a,this._zr.add(e);var u=[this.offsetX/this.width,this.offsetY/this.height],f=[[i/o+u[0],a/s+u[1]],[(i+t)/o+u[0],(a+r)/s+u[1]]];return f},_fitElement:function(e,t,r){var n=e.getBoundingRect(),i=t/n.width,a=r/n.height;e.x=-n.x*i,e.y=-n.y*a,e.scaleX=i,e.scaleY=a,e.update()}};function Mn(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new ne({image:t,flipY:!1});var r=this;this._zr=fl(t);var n=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){n.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new Rn(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}Mn.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,r=t.length,n=r*this._nodeWidth%e,i=Math.floor(r*this._nodeWidth/e)*this._nodeHeight;if(!(i>=e)){var a=(n+this._nodeWidth)*this._dpr,o=(i+this._nodeHeight)*this._dpr;try{this._zr.resize({width:a,height:o})}catch{this._canvas.width=a,this._canvas.height=o}var s=new Rn(this._zr,n,i,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(s),s}},add:function(e,t,r){if(this._coords[e.id])return this._coords[e.id];var n=this._getCurrentNode().add(e,t,r);if(!n){var i=this._expand();if(!i)return;n=i.add(e,t,r)}return this._coords[e.id]=n,n},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};var lo=[0,1,2,0,2,3],os=ce.extend(function(){return{attributes:{position:new ce.Attribute("position","float",3,"POSITION"),texcoord:new ce.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new ce.Attribute("offset","float",2),color:new ce.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,r=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==r&&(this.indices=t>65535?new Uint32Array(r*3):new Uint16Array(r*3))},setSpriteAlign:function(e,t,r,n,i){r==null&&(r="left"),n==null&&(n="top");var a,o,s,l;switch(i=i||0,r){case"left":a=i,s=t[0]+i;break;case"center":case"middle":a=-t[0]/2,s=t[0]/2;break;case"right":a=-t[0]-i,s=-i;break}switch(n){case"bottom":o=i,l=t[1]+i;break;case"middle":o=-t[1]/2,l=t[1]/2;break;case"top":o=-t[1]-i,l=-i;break}var u=e*4,f=this.attributes.offset;f.set(u,[a,l]),f.set(u+1,[s,l]),f.set(u+2,[s,o]),f.set(u+3,[a,o])},addSprite:function(e,t,r,n,i,a){var o=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,r,n,i,a);for(var s=0;s<lo.length;s++)this.indices[this._faceOffset*3+s]=lo[s]+o;return this._faceOffset+=2,this._vertexOffset+=4,o/4},setSprite:function(e,t,r,n,i,a,o){for(var s=e*4,l=this.attributes,u=0;u<4;u++)l.position.set(s+u,t);var f=l.texcoord;f.set(s,[n[0][0],n[0][1]]),f.set(s+1,[n[1][0],n[0][1]]),f.set(s+2,[n[1][0],n[1][1]]),f.set(s+3,[n[0][0],n[1][1]]),this.setSpriteAlign(e,r,i,a,o)}});Ze(os.prototype,Un);const fh=os,ch=`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`;V.Shader.import(ch);const Ji=V.Mesh.extend(function(){var e=new fh({dynamic:!0}),t=new V.Material({shader:V.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}});var ss=1,ls=2;function Qt(e,t,r){this._labelsMesh=new Ji,this._labelTextureSurface=new Mn({width:512,height:512,devicePixelRatio:r.getDevicePixelRatio(),onupdate:function(){r.getZr().refresh()}}),this._api=r,this._labelsMesh.material.set("textureAtlas",this._labelTextureSurface.getTexture())}Qt.prototype.getLabelPosition=function(e,t,r){return[0,0,0]};Qt.prototype.getLabelDistance=function(e,t,r){return 0};Qt.prototype.getMesh=function(){return this._labelsMesh};Qt.prototype.updateData=function(e,t,r){t==null&&(t=0),r==null&&(r=e.count()),(!this._labelsVisibilitiesBits||this._labelsVisibilitiesBits.length!==r-t)&&(this._labelsVisibilitiesBits=new Uint8Array(r-t));for(var n=["label","show"],i=["emphasis","label","show"],a=t;a<r;a++){var o=e.getItemModel(a),s=o.get(n),l=o.get(i);l==null&&(l=s);var u=(s?ss:0)|(l?ls:0);this._labelsVisibilitiesBits[a-t]=u}this._start=t,this._end=r,this._data=e};Qt.prototype.updateLabels=function(e){if(this._data){e=e||[];for(var t=e.length>0,r={},n=0;n<e.length;n++)r[e[n]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var i=["label"],a=["emphasis","label"],o=this._data.hostModel,s=this._data,l=o.getModel(i),u=o.getModel(a,l),f={left:"right",right:"left",top:"center",bottom:"center"},c={left:"middle",right:"middle",top:"bottom",bottom:"top"},d=this._start;d<this._end;d++){var h=!1;t&&r[d]&&(h=!0);var _=this._labelsVisibilitiesBits[d-this._start]&(h?ls:ss);if(_){var v=s.getItemModel(d),p=v.getModel(h?a:i,h?u:l),m=p.get("distance")||0,x=p.get("position"),g=this._api.getDevicePixelRatio(),y=o.getFormattedLabel(d,h?"emphasis":"normal");if(y==null||y==="")return;var E=new pn({style:mn(p,{text:y,fill:p.get("color")||Or(s,d)||"#000",align:"left",verticalAlign:"top",opacity:je.firstNotNull(p.get("opacity"),vn(s,d),1)})}),T=E.getBoundingRect(),S=1.2;T.height*=S;var b=this._labelTextureSurface.add(E),w=f[x]||"center",L=c[x]||"bottom";this._labelsMesh.geometry.addSprite(this.getLabelPosition(d,x,m),[T.width*g,T.height*g],b,w,L,this.getLabelDistance(d,x,m)*g)}}this._labelsMesh.material.set("uvScale",this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}};Qt.prototype.dispose=function(){this._labelTextureSurface.dispose()};var hh=Pt.vec3;const dh=cl.extend({type:"bar3D",__ecgl__:!0,init:function(e,t){this.groupGL=new V.Node,this._api=t,this._labelsBuilder=new Qt(256,256,t);var r=this;this._labelsBuilder.getLabelPosition=function(n,i,a){if(r._data){var o=r._data.getItemLayout(n),s=o[0],l=o[1],u=o[2][1];return hh.scaleAndAdd([],s,l,a+u)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(e,t,r){var n=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=n,this._barMesh||(this._barMesh=new V.Mesh({geometry:new uh,shadowDepthMaterial:new V.Material({shader:new V.Shader(V.Shader.source("ecgl.sm.depth.vertex"),V.Shader.source("ecgl.sm.depth.fragment"))}),culling:e.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var i=e.coordinateSystem;if(this._doRender(e,r),i&&i.viewGL){i.viewGL.add(this.groupGL);var a=i.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[a]("fragment","SRGB_DECODE")}this._data=e.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(e)},_updateAnimation:function(e){V.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,e)},_doRender:function(e,t){var r=e.getData(),n=e.get("shading"),i=n!=="color",a=this,o=this._barMesh,s="ecgl."+n;(!o.material||o.material.shader.name!==s)&&(o.material=V.createMaterial(s,["VERTEX_COLOR"])),V.setMaterialFromModel(n,o.material,e,t),o.geometry.enableNormal=i,o.geometry.resetOffset();var l=e.get("bevelSize"),u=e.get("bevelSmoothness");o.geometry.bevelSegments=u,o.geometry.bevelSize=l;var f=[],c=new Float32Array(r.count()*4),d=0,p=0,h=!1;r.each(function(x){if(r.hasValue(x)){var g=Or(r,x),y=vn(r,x);y==null&&(y=1),V.parseColor(g,f),f[3]*=y,c[d++]=f[0],c[d++]=f[1],c[d++]=f[2],c[d++]=f[3],f[3]>0&&(p++,f[3]<.99&&(h=!0))}}),o.geometry.setBarCount(p);var _=r.getLayout("orient"),v=this._barIndexOfData=new Int32Array(r.count()),p=0;r.each(function(x){if(!r.hasValue(x)){v[x]=-1;return}var g=r.getItemLayout(x),y=g[0],E=g[1],T=g[2],S=x*4;f[0]=c[S++],f[1]=c[S++],f[2]=c[S++],f[3]=c[S++],f[3]>0&&(a._barMesh.geometry.addBar(y,E,_,T,f,x),v[x]=p++)}),o.geometry.dirty(),o.geometry.updateBoundingBox();var m=o.material;m.transparent=h,m.depthMask=!h,o.geometry.sortTriangles=h,this._initHandler(e,t)},_initHandler:function(e,t){var r=e.getData(),n=this._barMesh,i=e.coordinateSystem.type==="cartesian3D";n.seriesIndex=e.seriesIndex;var a=-1;n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(o){var s=n.geometry.getDataIndexOfVertex(o.triangle[0]);s!==a&&(this._downplay(a),this._highlight(s),this._labelsBuilder.updateLabels([s]),i&&t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",s),r.get("y",s),r.get("z",s,!0)]})),a=s,n.dataIndex=s},this),n.on("mouseout",function(o){this._downplay(a),this._labelsBuilder.updateLabels(),a=-1,n.dataIndex=-1,i&&t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var n=t.getItemModel(e),i=n.getModel("emphasis.itemStyle"),a=i.get("color"),o=i.get("opacity");if(a==null){var s=Or(t,e);a=hl(s,-.4)}o==null&&(o=vn(t,e));var l=V.parseColor(a);l[3]*=o,this._barMesh.geometry.setColor(r,l),this._api.getZr().refresh()}}},_downplay:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var n=Or(t,e),i=vn(t,e),a=V.parseColor(n);a[3]*=i,this._barMesh.geometry.setColor(r,a),this._api.getZr().refresh()}}},highlight:function(e,t,r,n){this._toggleStatus("highlight",e,t,r,n)},downplay:function(e,t,r,n){this._toggleStatus("downplay",e,t,r,n)},_toggleStatus:function(e,t,r,n,i){var a=t.getData(),o=je.queryDataIndex(a,i),s=this;o!=null?Ae(ns.normalizeToArray(o),function(l){e==="highlight"?this._highlight(l):this._downplay(l)},this):a.each(function(l){e==="highlight"?s._highlight(l):s._downplay(l)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function vh(e){e.registerChartView(dh),e.registerSeriesModel(oh),th(e),e.registerProcessor(function(t,r){t.eachSeriesByType("bar3d",function(n){var i=n.getData();i.filterSelf(function(a){return i.hasValue(a)})})})}var di=Pt.vec3,uo=[[0,0],[1,1]],us=ce.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new ce.Attribute("position","float",3,"POSITION"),positionPrev:new ce.Attribute("positionPrev","float",3),positionNext:new ce.Attribute("positionNext","float",3),prevPositionPrev:new ce.Attribute("prevPositionPrev","float",3),prevPosition:new ce.Attribute("prevPosition","float",3),prevPositionNext:new ce.Attribute("prevPositionNext","float",3),offset:new ce.Attribute("offset","float",1),color:new ce.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,n){var i=di.dist(e,t)+di.dist(r,t)+di.dist(n,r),a=1/(i+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,n){var i=this._getCubicCurveApproxStep(e,t,r,n),a=Math.ceil(1/i);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,n){var i=this._getCubicCurveApproxStep(e,t,r,n),a=Math.ceil(1/i);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(uo)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(uo)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,r,n,i,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=e[2],u=t[0],f=t[1],c=t[2],d=r[0],h=r[1],_=r[2],v=n[0],p=n[1],m=n[2],x=this._getCubicCurveApproxStep(e,t,r,n),g=x*x,y=g*x,E=3*x,T=3*g,S=6*g,b=6*y,w=o-u*2+d,L=s-f*2+h,R=l-c*2+_,D=(u-d)*3-o+v,O=(f-h)*3-s+p,M=(c-_)*3-l+m,U=o,F=s,G=l,K=(u-o)*E+w*T+D*y,ae=(f-s)*E+L*T+O*y,de=(c-l)*E+R*T+M*y,le=w*S+D*b,Se=L*S+O*b,xe=R*S+M*b,Me=D*b,Ue=O*b,He=M*b,It=0,Je=0,vt=Math.ceil(1/x),At=new Float32Array((vt+1)*3),At=[],Jt=0,Je=0;Je<vt+1;Je++)At[Jt++]=U,At[Jt++]=F,At[Jt++]=G,U+=K,F+=ae,G+=de,K+=le,ae+=Se,de+=xe,le+=Me,Se+=Ue,xe+=He,It+=x,It>1&&(U=K>0?Math.min(U,v):Math.max(U,v),F=ae>0?Math.min(F,p):Math.max(F,p),G=de>0?Math.min(G,m):Math.max(G,m));return this.addPolyline(At,i,a)},addLine:function(e,t,r,n){return this.addPolyline([e,t],r,n)},addPolyline:function(e,t,r,n,i){if(e.length){var a=typeof e[0]!="number";if(i==null&&(i=a?e.length:e.length/3),!(i<2)){n==null&&(n=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",o=a?typeof t[0]!="number":t.length/4===i,s=this.attributes.position,l=this.attributes.positionPrev,u=this.attributes.positionNext,f=this.attributes.color,c=this.attributes.offset,d=this.indices,h=this._vertexOffset,_,v;r=Math.max(r,.01);for(var p=n;p<i;p++){if(a)_=e[p],o?v=t[p]:v=t;else{var m=p*3;if(_=_||[],_[0]=e[m],_[1]=e[m+1],_[2]=e[m+2],o){var x=p*4;v=v||[],v[0]=t[x],v[1]=t[x+1],v[2]=t[x+2],v[3]=t[x+3]}else v=t}if(this.useNativeLine?p>1&&(s.copy(h,h-1),f.copy(h,h-1),h++):(p<i-1&&(l.set(h+2,_),l.set(h+3,_)),p>0&&(u.set(h-2,_),u.set(h-1,_)),s.set(h,_),s.set(h+1,_),f.set(h,v),f.set(h+1,v),c.set(h,r/2),c.set(h+1,-r/2),h+=2),this.useNativeLine)f.set(h,v),s.set(h,_),h++;else if(p>0){var g=this._triangleOffset*3,d=this.indices;d[g]=h-4,d[g+1]=h-3,d[g+2]=h-2,d[g+3]=h-3,d[g+4]=h-1,d[g+5]=h-2,this._triangleOffset+=2}}if(!this.useNativeLine){var y=this._vertexOffset,E=this._vertexOffset+i*2;l.copy(y,y+2),l.copy(y+1,y+3),u.copy(E-1,E-3),u.copy(E-2,E-4)}return this._vertexOffset=h,this._vertexOffset}}},setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],n=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,i=r;i<n;i++)this.attributes.color.set(i,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});Ze(us.prototype,Un);const ea=us,_h=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`,ph={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},mh={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},gh={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}};var Mi=function(){this._pool={},this._allocatedTextures=[]};Mi.prototype={constructor:Mi,get:function(e){var t=fo(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];if(!r.length){var n=new ne(e);return this._allocatedTextures.push(n),n}return r.pop()},put:function(e){var t=fo(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];r.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var fs={width:512,height:512,type:C.UNSIGNED_BYTE,format:C.RGBA,wrapS:C.CLAMP_TO_EDGE,wrapT:C.CLAMP_TO_EDGE,minFilter:C.LINEAR_MIPMAP_LINEAR,magFilter:C.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},vi=Object.keys(fs);function fo(e){Be.defaultsWithPropList(e,fs,vi),yh(e);for(var t="",r=0;r<vi.length;r++){var n=vi[r],i=e[n].toString();t+=i}return t}function yh(e){var t=xh(e.width,e.height);e.format===C.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==C.NEAREST_MIPMAP_NEAREST||e.minFilter==C.NEAREST_MIPMAP_LINEAR?e.minFilter=C.NEAREST:(e.minFilter==C.LINEAR_MIPMAP_LINEAR||e.minFilter==C.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=C.LINEAR)),t||(e.wrapS=C.CLAMP_TO_EDGE,e.wrapT=C.CLAMP_TO_EDGE)}function xh(e,t){return(e&e-1)===0&&(t&t-1)===0}const cs=Mi,Th=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`;var bt=["px","nx","py","ny","pz","nz"];I.import(Th);function _i(e,t,r){if(r==="alphaMap")return e.material.get("diffuseMap");if(r==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var n=e.material.get("alphaCutoff");return n||0}return 0}else return r==="uvRepeat"?e.material.get("uvRepeat"):r==="uvOffset"?e.material.get("uvOffset"):t.get(r)}function co(e,t){var r=e.material,n=t.material;return r.get("diffuseMap")!==n.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(n.get("alphaCutoff")||0)}var ct=Qe.extend(function(){return{softShadow:ct.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new ze,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new cs}},function(){this._gaussianPassH=new We({fragment:I.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new We({fragment:I.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new We({fragment:I.source("clay.sm.debug_depth")})},{render:function(e,t,r,n){r||(r=t.getMainCamera()),this.trigger("beforerender",this,e,t,r),this._renderShadowPass(e,t,r,n),this.trigger("afterrender",this,e,t,r)},renderDebug:function(e,t){e.saveClear();var r=e.viewport,n=0,i=0,a=t||r.width/4,o=a;this.softShadow===ct.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var s in this._textures){var l=this._textures[s];e.setViewport(n,i,a*l.width/l.height,o),this._outputDepthPass.setUniform("depthMap",l),this._outputDepthPass.render(e),n+=a*l.width/l.height}e.setViewport(r),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===ct.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?t.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var r=this;t.traverse(function(a){a.isRenderable()&&r._updateReceivers(e,a)});for(var n=0;n<t.lights.length;n++){var i=t.lights[n];i.castShadow&&!i.invisible&&this._lightsCastShadow.push(i)}},_renderShadowPass:function(e,t,r,n){for(var i in this._shadowMapNumber)this._shadowMapNumber[i]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=e.gl;if(n||t.update(),r&&r.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var o=[],s=[],l=[],u=[],f=[],c=[],d,h=0;h<this._lightsCastShadow.length;h++){var _=this._lightsCastShadow[h];if(_.type==="DIRECTIONAL_LIGHT"){if(d){console.warn("Only one direectional light supported with shadow cascade");continue}if(_.shadowCascade>4){console.warn("Support at most 4 cascade");continue}_.shadowCascade>1&&(d=_),this.renderDirectionalLightShadow(e,t,r,_,f,u,l)}else _.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,_,s,o):_.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,_,c);this._shadowMapNumber[_.type]++}for(var v in this._shadowMapNumber)for(var p=this._shadowMapNumber[v],m=v+"_SHADOWMAP_COUNT",h=0;h<this._receivers.length;h++){var x=this._receivers[h],g=x.material;g.fragmentDefines[m]!==p&&(p>0?g.define("fragment",m,p):g.isDefined("fragment",m)&&g.undefine("fragment",m))}for(var h=0;h<this._receivers.length;h++){var x=this._receivers[h],g=x.material;d?g.define("fragment","SHADOW_CASCADE",d.shadowCascade):g.undefine("fragment","SHADOW_CASCADE")}var y=t.shadowUniforms;function E(L){return L.height}if(l.length>0){var T=l.map(E);if(y.directionalLightShadowMaps={value:l,type:"tv"},y.directionalLightMatrices={value:u,type:"m4v"},y.directionalLightShadowMapSizes={value:T,type:"1fv"},d){var S=f.slice(),b=f.slice();S.pop(),b.shift(),S.reverse(),b.reverse(),u.reverse(),y.shadowCascadeClipsNear={value:S,type:"1fv"},y.shadowCascadeClipsFar={value:b,type:"1fv"}}}if(o.length>0){var w=o.map(E),y=t.shadowUniforms;y.spotLightShadowMaps={value:o,type:"tv"},y.spotLightMatrices={value:s,type:"m4v"},y.spotLightShadowMapSizes={value:w,type:"1fv"}}c.length>0&&(y.pointLightShadowMaps={value:c,type:"tv"})},renderDirectionalLightShadow:function(){var e=new Wi,t=new z,r=new ke,n=new z,i=new z,a=new z,o=new z;return function(s,l,u,f,c,d,h){var _=this._getDepthMaterial(f),v={getMaterial:function(xe){return xe.shadowDepthMaterial||_},isMaterialChanged:co,getUniform:_i,ifRender:function(xe){return xe.castShadow},sortCompare:Ir.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var p=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(p).applyTransform(u.viewMatrix)}var m=Math.min(-l.viewBoundingBoxLastFrame.min.z,u.far),x=Math.max(-l.viewBoundingBoxLastFrame.max.z,u.near),g=this._getDirectionalLightCamera(f,l,u),y=a.array;o.copy(g.projectionMatrix),N.invert(i.array,g.worldTransform.array),N.multiply(i.array,i.array,u.worldTransform.array),N.multiply(y,o.array,i.array);for(var E=[],T=u instanceof Ne,S=(u.near+u.far)/(u.near-u.far),b=2*u.near*u.far/(u.near-u.far),w=0;w<=f.shadowCascade;w++){var L=x*Math.pow(m/x,w/f.shadowCascade),R=x+(m-x)*w/f.shadowCascade,D=L*f.cascadeSplitLogFactor+R*(1-f.cascadeSplitLogFactor);E.push(D),c.push(-(-D*S+b)/-D)}var O=this._getTexture(f,f.shadowCascade);h.push(O);var M=s.viewport,U=s.gl;this._frameBuffer.attach(O),this._frameBuffer.bind(s),U.clear(U.COLOR_BUFFER_BIT|U.DEPTH_BUFFER_BIT);for(var w=0;w<f.shadowCascade;w++){var F=E[w],G=E[w+1];T?N.perspective(t.array,u.fov/180*Math.PI,u.aspect,F,G):N.ortho(t.array,u.left,u.right,u.bottom,u.top,F,G),e.setFromProjection(t),e.getTransformedBoundingBox(r,i),r.applyProjection(o);var K=r.min.array,ae=r.max.array;K[0]=Math.max(K[0],-1),K[1]=Math.max(K[1],-1),ae[0]=Math.min(ae[0],1),ae[1]=Math.min(ae[1],1),n.ortho(K[0],ae[0],K[1],ae[1],1,-1),g.projectionMatrix.multiplyLeft(n);var de=f.shadowResolution||512;s.setViewport((f.shadowCascade-w-1)*de,0,de,de,1);var le=l.updateRenderList(g);s.renderPass(le.opaque,g,v),this.softShadow===ct.VSM&&this._gaussianFilter(s,O,O.width);var Se=new z;Se.copy(g.viewMatrix).multiplyLeft(g.projectionMatrix),d.push(Se.array),g.projectionMatrix.copy(o)}this._frameBuffer.unbind(s),s.setViewport(M)}}(),renderSpotLightShadow:function(e,t,r,n,i){var a=this._getTexture(r),o=this._getSpotLightCamera(r),s=e.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(e),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),u={getMaterial:function(d){return d.shadowDepthMaterial||l},isMaterialChanged:co,getUniform:_i,ifRender:function(d){return d.castShadow},sortCompare:Ir.opaqueSortCompare},f=t.updateRenderList(o);e.renderPass(f.opaque,o,u),this._frameBuffer.unbind(e),this.softShadow===ct.VSM&&this._gaussianFilter(e,a,a.width);var c=new z;c.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix),i.push(a),n.push(c.array)},renderPointLightShadow:function(e,t,r,n){var i=this._getTexture(r),a=e.gl;n.push(i);var o=this._getDepthMaterial(r),s={getMaterial:function(x){return x.shadowDepthMaterial||o},getUniform:_i,sortCompare:Ir.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},u=new ke,f=r.getWorldPosition().array,c=new ke,d=r.range;c.min.setArray(f),c.max.setArray(f);var h=new P(d,d,d);c.max.add(h),c.min.sub(h);var _={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(x){if(x.isRenderable()&&x.castShadow){var g=x.geometry;if(!g.boundingBox){for(var y=0;y<bt.length;y++)l[bt[y]].push(x);return}if(u.transformFrom(g.boundingBox,x.worldTransform),!u.intersectBoundingBox(c))return;u.updateVertices();for(var y=0;y<bt.length;y++)_[bt[y]]=!1;for(var y=0;y<8;y++){var E=u.vertices[y],T=E[0]-f[0],S=E[1]-f[1],b=E[2]-f[2],w=Math.abs(T),L=Math.abs(S),R=Math.abs(b);w>L?w>R?_[T>0?"px":"nx"]=!0:_[b>0?"pz":"nz"]=!0:L>R?_[S>0?"py":"ny"]=!0:_[b>0?"pz":"nz"]=!0}for(var y=0;y<bt.length;y++)_[bt[y]]&&l[bt[y]].push(x)}});for(var v=0;v<6;v++){var p=bt[v],m=this._getPointLightCamera(r,p);this._frameBuffer.attach(i,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+v),this._frameBuffer.bind(e),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),e.renderPass(l[p],m,s)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],r=e.type==="POINT_LIGHT";if(!t){var n=r?"clay.sm.distance.":"clay.sm.depth.";t=new xt({precision:this.precision,shader:new I(I.source(n+"vertex"),I.source(n+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===ct.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),r&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,r){var n={width:r,height:r,type:j.FLOAT},i=this._texturePool.get(n);this._frameBuffer.attach(i),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",i),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(i)},_getTexture:function(e,t){var r=e.__uid__,n=this._textures[r],i=e.shadowResolution||512;return t=t||1,n||(e.type==="POINT_LIGHT"?n=new Fr:n=new ne,n.width=i*t,n.height=i,this.softShadow===ct.VSM?(n.type=j.FLOAT,n.anisotropic=4):(n.minFilter=C.NEAREST,n.magFilter=C.NEAREST,n.useMipmap=!1),this._textures[r]=n),n},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new Ne,nx:new Ne,py:new Ne,ny:new Ne,pz:new Ne,nz:new Ne});var r=this._lightCameras.point[t];switch(r.far=e.range,r.fov=90,r.position.set(0,0,0),t){case"px":r.lookAt(P.POSITIVE_X,P.NEGATIVE_Y);break;case"nx":r.lookAt(P.NEGATIVE_X,P.NEGATIVE_Y);break;case"py":r.lookAt(P.POSITIVE_Y,P.POSITIVE_Z);break;case"ny":r.lookAt(P.NEGATIVE_Y,P.NEGATIVE_Z);break;case"pz":r.lookAt(P.POSITIVE_Z,P.NEGATIVE_Y);break;case"nz":r.lookAt(P.NEGATIVE_Z,P.NEGATIVE_Y);break}return e.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var e=new z,t=new ke,r=new ke;return function(n,i,a){this._lightCameras.directional||(this._lightCameras.directional=new Hr);var o=this._lightCameras.directional;t.copy(i.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),o.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),o.rotation.copy(n.rotation),o.scale.copy(n.scale),o.updateWorldTransform(),z.invert(e,o.worldTransform),z.multiply(e,e,a.worldTransform),r.copy(t).applyTransform(e);var s=r.min.array,l=r.max.array;return o.position.set((s[0]+l[0])/2,(s[1]+l[1])/2,l[2]).transformMat4(o.worldTransform),o.near=0,o.far=-s[2]+l[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=s[0],o.right=l[0],o.top=l[1],o.bottom=s[1],o.update(!0),o}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new Ne);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),N.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var r in this._textures)this._textures[r].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var n=0;n<this._receivers.length;n++){var i=this._receivers[n];if(i.material){var a=i.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});ct.VSM=1;ct.PCF=2;const Eh=ct;var Ah=Qe.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var r=this.outputs[e],n=r.parameters,i=r._parametersCopy;if(i||(i=r._parametersCopy={}),n)for(var a in n)a!=="width"&&a!=="height"&&(i[a]=n[a]);var o,s;return n.width instanceof Function?o=n.width.call(this,t):o=n.width,n.height instanceof Function?s=n.height.call(this,t):s=n.height,(i.width!==o||i.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),i.width=o,i.height=s,i},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var r=this.outputs[t];if(r)return this._rendered?r.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,r){this.inputLinks[e]={node:t,pin:r},t.outputLinks[r]||(t.outputLinks[r]=[]),t.outputLinks[r].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var r=this.inputLinks[t];r.node.updateReference(r.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}});const zr=Ah;var Sh=Qe.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(t.inputs){for(var r in t.inputs)if(t.inputs[r]){if(t.pass&&!t.pass.material.isUniformEnabled(r)){console.warn("Pin "+t.name+"."+r+" not used.");continue}var n=t.inputs[r],i=this.findPin(n);i?t.link(r,i.node,i.pin):console.warn(typeof n=="string"?"Node "+n+" not exist":"Pin of "+n.node+"."+n.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof zr)&&(e={node:e}),typeof e.node=="string")for(var r=0;r<this.nodes.length;r++){var n=this.nodes[r];n.name===e.node&&(t=n)}else t=e.node;if(t){var i=e.pin;if(i||t.outputs&&(i=Object.keys(t.outputs)[0]),t.outputs[i])return{node:t,pin:i}}}});const ho=Sh;var bh=ho.extend(function(){return{_outputs:[],_texturePool:new cs,_frameBuffer:new ze({depthBuffer:!1})}},{addNode:function(e){ho.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(var r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(var r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(var r=0;r<this._outputs.length;r++)this._outputs[r].render(e,t);for(var r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}});const wh=bh;var Ch=zr.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new ze},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var r;if(!this.outputs)r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var n=this.frameBuffer;for(var i in this.outputs){var a=this.updateParameter(i,e),o=this.outputs[i],s=this._compositor.allocateTexture(a);this._outputTextures[i]=s;var l=o.attachment||t.COLOR_ATTACHMENT0;typeof l=="string"&&(l=t[l]),n.attach(s,l)}n.bind(e);var u=e.getGLExtension("EXT_draw_buffers");if(u){var f=[];for(var l in this.outputs)l=parseInt(l),l>=t.COLOR_ATTACHMENT0&&l<=t.COLOR_ATTACHMENT0+8&&f.push(l);u.drawBuffersEXT(f)}e.saveClear(),e.clearBit=C.DEPTH_BUFFER_BIT|C.COLOR_BUFFER_BIT,r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),n.unbind(e)}this.trigger("afterrender",r),this._rendering=!1,this._rendered=!0}});const Rh=Ch;var Mh=zr.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}});const Lh=Mh;var Dh=zr.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new We({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var r=e.gl;for(var n in this.inputLinks){var i=this.inputLinks[n],a=i.node.getOutput(e,i.pin);this.pass.setUniform(n,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var o={};for(var s in this.outputs){var l=this.updateParameter(s,e);isNaN(l.width)&&this.updateParameter(s,e);var u=this.outputs[s],f=this._compositor.allocateTexture(l);this._outputTextures[s]=f;var c=u.attachment||r.COLOR_ATTACHMENT0;typeof c=="string"&&(c=r[c]),o[c]=f}this._compositor.getFrameBuffer().bind(e);for(var c in o)this._compositor.getFrameBuffer().attach(o[c],c);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var n in this.inputLinks){var i=this.inputLinks[n];i.node.removeReference(i.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var r=this.outputs[e],n=r.parameters,i=r._parametersCopy;if(i||(i=r._parametersCopy={}),n)for(var a in n)a!=="width"&&a!=="height"&&(i[a]=n[a]);var o,s;return typeof n.width=="function"?o=n.width.call(this,t):o=n.width,typeof n.height=="function"?s=n.height.call(this,t):s=n.height,o=Math.ceil(o),s=Math.ceil(s),(i.width!==o||i.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),i.width=o,i.height=s,i},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){zr.prototype.clear.call(this),this.pass.material.disableTexturesAll()}});const Nh=Dh,Ph=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,hs=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,Ih=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,ds=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,Oh=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,vs=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,_s=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,ps=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,ms=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,gs=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Bh=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,ys=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,xs=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function Fh(e){e.import(Ph),e.import(hs),e.import(Ih),e.import(ds),e.import(Oh),e.import(vs),e.import(_s),e.import(ps),e.import(ms),e.import(gs),e.import(Bh),e.import(ys),e.import(xs)}Fh(I);var Uh=/^#source\((.*?)\)/;function Hh(e,t){var r=new wh;t=t||{};var n={textures:{},parameters:{}},i=function(s,l){for(var u=0;u<e.nodes.length;u++){var f=e.nodes[u],c=zh(f,n,t);c&&r.addNode(c)}};for(var a in e.parameters){var o=e.parameters[a];n.parameters[a]=ta(o)}return kh(e,n,t,function(s){n.textures=s,i()}),r}function zh(e,t,r){var n=e.type||"filter",i,a,o;if(n==="filter"){var s=e.shader.trim(),l=Uh.exec(s);if(l?i=I.source(l[1].trim()):s.charAt(0)==="#"&&(i=t.shaders[s.substr(1)]),i||(i=s),!i)return}if(e.inputs){a={};for(var u in e.inputs)typeof e.inputs[u]=="string"?a[u]=e.inputs[u]:a[u]={node:e.inputs[u].node,pin:e.inputs[u].pin}}if(e.outputs){o={};for(var u in e.outputs){var f=e.outputs[u];o[u]={},f.attachment!=null&&(o[u].attachment=f.attachment),f.keepLastFrame!=null&&(o[u].keepLastFrame=f.keepLastFrame),f.outputLastFrame!=null&&(o[u].outputLastFrame=f.outputLastFrame),f.parameters&&(o[u].parameters=ta(f.parameters))}}var c;if(n==="scene"?c=new Rh({name:e.name,scene:r.scene,camera:r.camera,outputs:o}):n==="texture"?c=new Lh({name:e.name,outputs:o}):c=new Nh({name:e.name,shader:i,inputs:a,outputs:o}),c){if(e.parameters)for(var u in e.parameters){var d=e.parameters[u];typeof d=="string"?(d=d.trim(),d.charAt(0)==="#"?d=t.textures[d.substr(1)]:c.on("beforerender",Wh(u,Ts(d)))):typeof d=="function"&&c.on("beforerender",d),c.setParameter(u,d)}if(e.defines&&c.pass)for(var u in e.defines){var d=e.defines[u];c.pass.material.define("fragment",u,d)}}return c}function Gh(e,t){return e}function Vh(e,t){return t}function ta(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(n){var i=e[n];i!=null&&(typeof i=="string"&&(i=j[i]),t[n]=i)});var r=e.scale||1;return["width","height"].forEach(function(n){if(e[n]!=null){var i=e[n];typeof i=="string"?(i=i.trim(),t[n]=Xh(n,Ts(i),r)):t[n]=i}}),t.width||(t.width=Gh),t.height||(t.height=Vh),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function kh(e,t,r,n){if(!e.textures){n({});return}var i={},a=0,o=!1,s=r.textureRootPath;Be.each(e.textures,function(l,u){var f,c=l.path,d=ta(l.parameters);if(Array.isArray(c)&&c.length===6)s&&(c=c.map(function(h){return Be.relative2absolute(h,s)})),f=new Fr(d);else if(typeof c=="string")s&&(c=Be.relative2absolute(c,s)),f=new ne(d);else return;f.load(c),a++,f.once("success",function(){i[u]=f,a--,a===0&&(n(i),o=!0)})}),a===0&&!o&&n(i)}function Wh(e,t){return function(r){var n=r.getDevicePixelRatio(),i=r.getWidth(),a=r.getHeight(),o=t(i,a,n);this.setParameter(e,o)}}function Xh(e,t,r){return r=r||1,function(n){var i=n.getDevicePixelRatio(),a=n.getWidth()*r,o=n.getHeight()*r;return t(a,o,i)}}function Ts(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var r=new Function("width","height","dpr","return "+t[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function gr(e,t){for(var r=0,n=1/t,i=e;i>0;)r=r+n*(i%t),i=Math.floor(i/t),n=n/t;return r}const qh=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;I.import(qh);function Es(e){for(var t=new Uint8Array(e*e*4),r=0,n=new P,i=0;i<e;i++)for(var a=0;a<e;a++)n.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(n.x*.5+.5)*255,t[r++]=(n.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function vo(e){return new ne({pixels:Es(e),wrapS:j.REPEAT,wrapT:j.REPEAT,width:e,height:e})}function jh(e,t,r){var n=new Float32Array(e*3);t=t||0;for(var i=0;i<e;i++){var a=gr(i+t,2)*(r?1:2)*Math.PI,o=gr(i+t,3)*Math.PI,s=Math.random(),l=Math.cos(a)*Math.sin(o)*s,u=Math.cos(o)*s,f=Math.sin(a)*Math.sin(o)*s;n[i*3]=l,n[i*3+1]=u,n[i*3+2]=f}return n}function Tt(e){e=e||{},this._ssaoPass=new We({fragment:I.source("ecgl.ssao.estimate")}),this._blurPass=new We({fragment:I.source("ecgl.ssao.blur")}),this._framebuffer=new ze({depthBuffer:!1}),this._ssaoTexture=new ne,this._blurTexture=new ne,this._blurTexture2=new ne,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}Tt.prototype.setDepthTexture=function(e){this._depthTex=e};Tt.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};Tt.prototype.update=function(e,t,r){var n=e.getWidth(),i=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new z;z.transpose(s,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,u=this._blurTexture,f=this._blurTexture2;l.width=n/2,l.height=i/2,u.width=n,u.height=i,f.width=n,f.height=i,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform("textureSize",[n/2,i/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(u),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(e),this._framebuffer.attach(f),o.setUniform("textureSize",[n,i]),o.setUniform("direction",1),o.setUniform("ssaoTexture",u),o.render(e),this._framebuffer.unbind(e);var c=e.clearColor;e.gl.clearColor(c[0],c[1],c[2],c[3])};Tt.prototype.getTargetTexture=function(){return this._blurTexture2};Tt.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};Tt.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=jh(e,t*e,!!this._normalTex)};Tt.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=Es(e),t.width=t.height=e,t.dirty()):(t=vo(e),this._ssaoPass.setUniform("noiseTex",vo(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};Tt.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};const Zh=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;I.import(Zh);function Et(e){e=e||{},this._ssrPass=new We({fragment:I.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new We({fragment:I.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new We({fragment:I.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new We({fragment:I.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new ne({type:j.HALF_FLOAT}),this._texture2=new ne({type:j.HALF_FLOAT}),this._texture3=new ne({type:j.HALF_FLOAT}),this._prevTexture=new ne({type:j.HALF_FLOAT}),this._currentTexture=new ne({type:j.HALF_FLOAT}),this._frameBuffer=new ze({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}Et.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")};Et.prototype.update=function(e,t,r,n){var i=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=i/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=l.width=i,s.height=l.height=a;var u=this._frameBuffer,f=this._ssrPass,c=this._blurPass1,d=this._blurPass2,h=this._blendPass,_=new z,v=new z;z.transpose(_,t.worldTransform),z.transpose(v,t.viewMatrix),f.setUniform("sourceTexture",r),f.setUniform("projection",t.projectionMatrix.array),f.setUniform("projectionInv",t.invProjectionMatrix.array),f.setUniform("toViewSpace",_.array),f.setUniform("toWorldSpace",v.array),f.setUniform("nearZ",t.near);var p=n/this._totalSamples*this._samplePerFrame;if(f.setUniform("jitterOffset",p),f.setUniform("sampleOffset",n*this._samplePerFrame),c.setUniform("textureSize",[o.width,o.height]),d.setUniform("textureSize",[i,a]),d.setUniform("sourceTexture",r),c.setUniform("projection",t.projectionMatrix.array),d.setUniform("projection",t.projectionMatrix.array),u.attach(o),u.bind(e),f.render(e),this._physicallyCorrect&&(u.attach(this._currentTexture),h.setUniform("texture1",this._prevTexture),h.setUniform("texture2",o),h.material.set({weight1:n>=1?.95:0,weight2:n>=1?.05:1}),h.render(e)),u.attach(s),c.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),c.render(e),u.attach(l),d.setUniform("texture",s),d.render(e),u.unbind(e),this._physicallyCorrect){var m=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=m}};Et.prototype.getTargetTexture=function(){return this._texture3};Et.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};Et.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=dn.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};Et.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};Et.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};Et.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};const _o=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],Yh=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;I.import(Yh);function pi(e,t,r,n,i){var a=e.gl;t.setUniform(a,"1i",r,i),a.activeTexture(a.TEXTURE0+i),n.isRenderable()?n.bind(e):n.unbind(e)}function Kh(e,t,r,n,i){var a,o,s,l,u=e.gl;return function(f,c,d){if(!(l&&l.material===f.material)){var h=f.material,_=f.__program,v=h.get("roughness");v==null&&(v=1);var p=h.get("normalMap")||t,m=h.get("roughnessMap"),x=h.get("bumpMap"),g=h.get("uvRepeat"),y=h.get("uvOffset"),E=h.get("detailUvRepeat"),T=h.get("detailUvOffset"),S=!!x&&h.isTextureEnabled("bumpMap"),b=!!m&&h.isTextureEnabled("roughnessMap"),w=h.isDefined("fragment","DOUBLE_SIDED");x=x||r,m=m||n,d!==c?(c.set("normalMap",p),c.set("bumpMap",x),c.set("roughnessMap",m),c.set("useBumpMap",S),c.set("useRoughnessMap",b),c.set("doubleSide",w),g!=null&&c.set("uvRepeat",g),y!=null&&c.set("uvOffset",y),E!=null&&c.set("detailUvRepeat",E),T!=null&&c.set("detailUvOffset",T),c.set("roughness",v)):(_.setUniform(u,"1f","roughness",v),a!==p&&pi(e,_,"normalMap",p,0),o!==x&&x&&pi(e,_,"bumpMap",x,1),s!==m&&m&&pi(e,_,"roughnessMap",m,2),g!=null&&_.setUniform(u,"2f","uvRepeat",g),y!=null&&_.setUniform(u,"2f","uvOffset",y),E!=null&&_.setUniform(u,"2f","detailUvRepeat",E),T!=null&&_.setUniform(u,"2f","detailUvOffset",T),_.setUniform(u,"1i","useBumpMap",+S),_.setUniform(u,"1i","useRoughnessMap",+b),_.setUniform(u,"1i","doubleSide",+w)),a=p,o=x,s=m,l=f}}}function Er(e){this._depthTex=new ne({format:j.DEPTH_COMPONENT,type:j.UNSIGNED_INT}),this._normalTex=new ne({type:j.HALF_FLOAT}),this._framebuffer=new ze,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,ze.DEPTH_ATTACHMENT),this._normalMaterial=new xt({shader:new I(I.source("ecgl.normal.vertex"),I.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=qt.createBlank("#000"),this._defaultBumpMap=qt.createBlank("#000"),this._defaultRoughessMap=qt.createBlank("#000"),this._debugPass=new We({fragment:I.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}Er.prototype.getDepthTexture=function(){return this._depthTex};Er.prototype.getNormalTexture=function(){return this._normalTex};Er.prototype.update=function(e,t,r){var n=e.getWidth(),i=e.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=n,a.height=i,o.width=n,o.height=i;var l=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,r,{getMaterial:function(){return s},ifRender:function(u){return u.renderNormal},beforeRender:Kh(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};Er.prototype.renderDebug=function(e){this._debugPass.render(e)};Er.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function Wr(e){e=e||{},this._edgePass=new We({fragment:I.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new ne({type:j.HALF_FLOAT}),this._frameBuffer=new ze,this._frameBuffer.attach(this._targetTexture)}Wr.prototype.update=function(e,t,r,n){var i=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=i,o.height=a;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[i,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),s.unbind(e)};Wr.prototype.getTargetTexture=function(){return this._targetTexture};Wr.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};Wr.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};const $h={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},Qh=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,Jh=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;I.import(hs);I.import(ds);I.import(vs);I.import(_s);I.import(ps);I.import(ms);I.import(gs);I.import(ys);I.import(xs);I.import(Qh);I.import(Jh);function As(e,t){return{color:{parameters:{width:e,height:t}}}}var ra=["composite","FXAA"];function Q(){this._width,this._height,this._dpr,this._sourceTexture=new ne({type:j.HALF_FLOAT}),this._depthTexture=new ne({format:j.DEPTH_COMPONENT,type:j.UNSIGNED_INT}),this._framebuffer=new ze,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,ze.DEPTH_ATTACHMENT),this._normalPass=new Er,this._compositor=Hh($h);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(n){return this._compositor.getNodeByName(n)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=ra.map(function(n){return this._compositor.getNodeByName(n)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new Tt(r),this._ssrPass=new Et(r),this._edgePass=new Wr(r)}Q.prototype.resize=function(n,i,r){r=r||1;var n=n*r,i=i*r,a=this._sourceTexture,o=this._depthTexture;a.width=n,a.height=i,o.width=n,o.height=i;var s={getWidth:function(){return n},getHeight:function(){return i},getDevicePixelRatio:function(){return r}};function l(u,f){if(typeof u[f]=="function"){var c=u[f].__original||u[f];u[f]=function(d){return c.call(this,s)},u[f].__original=c}}this._compositor.nodes.forEach(function(u){for(var f in u.outputs){var c=u.outputs[f].parameters;c&&(l(c,"width"),l(c,"height"))}for(var d in u.parameters)l(u.parameters,d)}),this._width=n,this._height=i,this._dpr=r};Q.prototype.getWidth=function(){return this._width};Q.prototype.getHeight=function(){return this._height};Q.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};Q.prototype._getPrevNode=function(e){for(var t=ra.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r};Q.prototype._getNextNode=function(e){for(var t=ra.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r};Q.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(e.inputs.texture=t.name,r?(e.outputs=As(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};Q.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(r?(t.outputs=As(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};Q.prototype.updateNormal=function(e,t,r,n){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)};Q.prototype.updateSSAO=function(e,t,r,n){this._ssaoPass.update(e,r,n)};Q.prototype.enableSSAO=function(){this._enableSSAO=!0};Q.prototype.disableSSAO=function(){this._enableSSAO=!1};Q.prototype.enableSSR=function(){this._enableSSR=!0};Q.prototype.disableSSR=function(){this._enableSSR=!1};Q.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};Q.prototype.getSourceFrameBuffer=function(){return this._framebuffer};Q.prototype.getSourceTexture=function(){return this._sourceTexture};Q.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};Q.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};Q.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};Q.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};Q.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};Q.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};Q.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};Q.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};Q.prototype.enableEdge=function(){this._enableEdge=!0};Q.prototype.disableEdge=function(){this._enableEdge=!1};Q.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};Q.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};Q.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var n={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=n;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",n);this._dofBlurKernel=new Float32Array(n*2);break}};Q.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,n={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",n);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};Q.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};Q.prototype.setEdgeColor=function(e){var t=V.parseColor(e);this._edgePass.setParameter("edgeColor",t)};Q.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};Q.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:V.Texture.NEAREST,magFilter:V.Texture.NEAREST,flipY:!1})};Q.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};Q.prototype.isSSREnabled=function(){return this._enableSSR};Q.prototype.composite=function(e,t,r,n,i){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,r,a,i),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,a,i),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,u=Math.floor(_o.length/2/l),f=i%u,c=0;c<l*2;c++)s[c]=_o[c+f*l*2];for(var c=0;c<this._dofBlurNodes.length;c++)this._dofBlurNodes[c].setParameter("percent",i/30),this._dofBlurNodes[c].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,n)};Q.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function Li(e){for(var t=[],r=0;r<30;r++)t.push([gr(r,2),gr(r,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new ne,this._sourceFb=new ze,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new ne,this._outputTex=new ne;var n=this._blendPass=new We({fragment:I.source("clay.compositor.blend")});n.material.disableTexturesAll(),n.material.enableTexture(["texture1","texture2"]),this._blendFb=new ze({depthBuffer:!1}),this._outputPass=new We({fragment:I.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(i){i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD),i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA)}}Li.prototype={constructor:Li,jitterProjection:function(e,t){var r=e.viewport,n=r.devicePixelRatio||e.getDevicePixelRatio(),i=r.width*n,a=r.height*n,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new z;s.array[12]=(o[0]*2-1)/i,s.array[13]=(o[1]*2-1)/a,z.mul(t.projectionMatrix,s,t.projectionMatrix),z.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,r){var n=this._blendPass;this._frame===0?(n.setUniform("weight1",0),n.setUniform("weight2",1)):(n.setUniform("weight1",.9),n.setUniform("weight2",.1)),n.setUniform("texture1",this._prevFrameTex),n.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),n.render(e),this._blendFb.unbind(e),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var i=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=i,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function me(e){e=e||"perspective",this.layer=null,this.scene=new Nt,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new Q,this._temporalSS=new Li,this._shadowMapPass=new Eh;for(var t=[],r=0,n=0;n<30;n++){for(var i=[],a=0;a<6;a++)i.push(gr(r,2)*4-2),i.push(gr(r,3)*4-2),r++;t.push(i)}this._pcfKernels=t,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}me.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof Ne||(this.camera=new Ne,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof Hr||(this.camera=new Hr,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};me.prototype.setViewport=function(e,t,r,n,i){this.camera instanceof Ne&&(this.camera.aspect=r/n),i=i||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=r,this.viewport.height=n,this.viewport.devicePixelRatio=i,this._compositor.resize(r*i,n*i),this._temporalSS.resize(r*i,n*i)};me.prototype.containPoint=function(e,t){var r=this.viewport,n=this.layer.renderer.getHeight();return t=n-t,e>=r.x&&t>=r.y&&e<=r.x+r.width&&t<=r.y+r.height};var po=new et;me.prototype.castRay=function(e,t,r){var n=this.layer.renderer,i=n.viewport;return n.viewport=this.viewport,n.screenToNDC(e,t,po),this.camera.castRay(po,r),n.viewport=i,r};me.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var r=e.transparent[t],n=r.geometry;n.needsSortVerticesProgressively&&n.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),n.needsSortTrianglesProgressively&&n.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};me.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};me.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};me.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};me.prototype.hasDOF=function(){return this._enableDOF};me.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};me.prototype._doRender=function(e,t,r){var n=this.scene,i=this.camera;r=r||0,this._updateTransparent(e,n,i,r),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,n,i,!0)),this._updateShadowPCFKernel(r);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,i),this._compositor.updateNormal(e,n,i,this._temporalSS.getFrame())),this._updateSSAO(e,n,i,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(n,i,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,n,i,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,n,i,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(n,i,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(n,i,!0,!0)};me.prototype._updateTransparent=function(e,t,r,n){for(var i=new P,a=new z,o=r.getWorldPosition(),s=t.getRenderList(r).transparent,l=0;l<s.length;l++){var u=s[l],f=u.geometry;z.invert(a,u.worldTransform),P.transformMat4(i,o,a),f.needsSortTriangles&&f.needsSortTriangles()&&f.doSortTriangles(i,n),f.needsSortVertices&&f.needsSortVertices()&&f.doSortVertices(i,n)}};me.prototype._updateSSAO=function(e,t,r){var n=this._enableSSAO&&this._enablePostEffect;n&&this._compositor.updateSSAO(e,t,r,this._temporalSS.getFrame());for(var i=t.getRenderList(r),a=0;a<i.opaque.length;a++){var o=i.opaque[a];o.renderNormal&&o.material[n?"enableTexture":"disableTexture"]("ssaoMap"),n&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}};me.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),n=r.opaque,i=0;i<n.length;i++)n[i].receiveShadow&&(n[i].material.set("pcfKernel",t),n[i].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};me.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};me.prototype.setPostEffect=function(e,t){var r=this._compositor;this._enablePostEffect=e.get("enable");var n=e.getModel("bloom"),i=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),u=e.getModel("colorCorrection");n.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),s.get("enable")?r.enableSSR():r.disableSSR(),u.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),i.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(n.get("intensity")),r.setEdgeColor(i.get("color")),r.setColorLookupTexture(u.get("lookupTexture"),t),r.setExposure(u.get("exposure")),["radius","quality","intensity"].forEach(function(f){r.setSSAOParameter(f,o.get(f))}),["quality","maxRoughness","physical"].forEach(function(f){r.setSSRParameter(f,s.get(f))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(f){r.setDOFParameter(f,a.get(f))}),["brightness","contrast","saturation"].forEach(function(f){r.setColorCorrection(f,u.get(f))})};me.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};me.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};me.prototype.isLinearSpace=function(){return this._enablePostEffect};me.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),r=0;r<t.length;r++)e.add(t[r]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};me.prototype.add=function(e){this.rootNode.add(e)};me.prototype.remove=function(e){this.rootNode.remove(e)};me.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(me.prototype,Hi);var Rr=je.firstNotNull,mo={left:0,middle:1,right:2};function go(e){return e instanceof Array||(e=[e,e]),e}var Ss=Qe.extend(function(){return{zr:null,viewGL:null,_center:new P,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new et,_panVelocity:new et,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var r=t.baseDistance||0,n=t.baseOrthoSize||1,i=e.get("projection");i!=="perspective"&&i!=="orthographic"&&i!=="isometric"&&(i="perspective"),this._projection=i,this.viewGL.setProjection(i);var a=e.get("distance")+r,o=e.get("orthographicSize")+n;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(d){this[d[0]]=Rr(e.get(d[0]),d[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=n,this.maxOrthographicSize+=n;var s=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(d){l[d]=Rr(e.get(d),s&&s.get(d))});var u=Rr(t.alpha,e.get("alpha"))||0,f=Rr(t.beta,e.get("beta"))||0,c=Rr(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:u,beta:f,center:c,distance:a,orthographicSize:o,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(u),this.setBeta(f),this.setCenter(c),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,r=this,n={},i={};return e.distance!=null&&(n.distance=this.getDistance(),i.distance=e.distance),e.orthographicSize!=null&&(n.orthographicSize=this.getOrthographicSize(),i.orthographicSize=e.orthographicSize),e.alpha!=null&&(n.alpha=this.getAlpha(),i.alpha=e.alpha),e.beta!=null&&(n.beta=this.getBeta(),i.beta=e.beta),e.center!=null&&(n.center=this.getCenter(),i.center=e.center),this._addAnimator(t.animation.animate(n).when(e.duration||1e3,i).during(function(){n.alpha!=null&&r.setAlpha(n.alpha),n.beta!=null&&r.setBeta(n.beta),n.distance!=null&&r.setDistance(n.distance),n.center!=null&&r.setCenter(n.center),n.orthographicSize!=null&&r.setOrthographicSize(n.orthographicSize),r._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),r=this._orthoSize,n=r/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-n/2,t.right=n/2,t.top=r/2,t.bottom=-r/2},_updatePan:function(e){var t=this._panVelocity,r=this._distance,n=this.getCamera(),i=n.worldTransform.y,a=n.worldTransform.x;this._center.scaleAndAdd(a,-t.x*r/200).scaleAndAdd(i,-t.y*r/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new P,r=this._theta+Math.PI/2,n=this._phi+Math.PI/2,i=Math.sin(r);t.x=i*Math.cos(n),t.y=-Math.cos(r),t.z=i*Math.sin(n),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var r=e.len();r=r*t,r<1e-4&&(r=0),e.normalize().scale(r)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),r=Math.atan2(e.x,e.z);this._theta=t,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,r=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===mo[this.rotateMouseButton]?this._mode="rotate":e.event.button===mo[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=go(this.panSensitivity),r=go(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var r=e.offsetX,n=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,n))){var i;this._projection==="perspective"?i=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):i=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*i*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var r=t.indexOf(e);r>=0&&t.splice(r,1)}),e}});Object.defineProperty(Ss.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});const ed=Ss;function Di(){}Di.prototype={constructor:Di,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new V.DirectionalLight({shadowBias:.005}),this.ambientLight=new V.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,r=this.ambientLight,n=e.getModel("light"),i=n.getModel("main"),a=n.getModel("ambient");t.intensity=i.get("intensity"),r.intensity=a.get("intensity"),t.color=V.parseColor(i.get("color")).slice(0,3),r.color=V.parseColor(a.get("color")).slice(0,3);var o=i.get("alpha")||0,s=i.get("beta")||0;t.position.setArray(V.directionFromAlphaBeta(o,s)),t.lookAt(V.Vector3.ZERO),t.castShadow=i.get("shadow"),t.shadowResolution=V.getShadowResolution(i.get("shadowQuality"))},updateAmbientCubemap:function(e,t,r){var n=t.getModel("light.ambientCubemap"),i=n.get("texture");if(i){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[i];if(!a){var o=this;a=this._cubemapLightsCache[i]=V.createAmbientCubemap(n.option,e,r,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,r){var n=t.get("environment"),i=this;function a(){return i._skybox=i._skybox||new Ur,i._skybox}var o=a();if(n&&n!=="none")if(n==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(s),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof n=="object"&&n.colorStops||typeof n=="string"&&Eo(n)){this._isSkyboxFromAmbientCubemap=!1;var l=new V.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(l);var u=l.image=document.createElement("canvas");u.width=u.height=16;var f=u.getContext("2d"),c=new Oi({shape:{x:0,y:0,width:16,height:16},style:{fill:n}});dl(f,c),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=V.loadTexture(n,r,{anisotropic:8,flipY:!1});o.setEnvironmentMap(l),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var d=t.coordinateSystem;if(this._skybox)if(d&&d.viewGL&&n!=="auto"&&!(n.match&&n.match(/.hdr$/))){var h=d.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[h]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var Hn=Ao.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});mt(Hn.prototype,ph);mt(Hn.prototype,mh);mt(Hn.prototype,gh);const td=Hn;var Ft=Pt.vec3,bs=ce.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new ce.Attribute("position","float",3,"POSITION"),normal:new ce.Attribute("normal","float",3,"NORMAL"),color:new ce.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,r=this.getQuadVertexCount()*e,n=this.getQuadTriangleCount()*e;this.vertexCount!==r&&(t.position.init(r),t.normal.init(r),t.color.init(r)),this.triangleCount!==n&&(this.indices=r>65535?new Uint32Array(n*3):new Uint16Array(n*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=Ft.create(),t=Ft.create(),r=Ft.create(),n=[0,3,1,3,2,1];return function(i,a){var o=this.attributes.position,s=this.attributes.normal,l=this.attributes.color;Ft.sub(e,i[1],i[0]),Ft.sub(t,i[2],i[1]),Ft.cross(r,e,t),Ft.normalize(r,r);for(var u=0;u<4;u++)o.set(this._vertexOffset+u,i[u]),l.set(this._vertexOffset+u,a),s.set(this._vertexOffset+u,r);for(var f=this._faceOffset*3,u=0;u<6;u++)this.indices[f+u]=n[u]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});Ze(bs.prototype,Un);const rd=bs;var Ni=je.firstNotNull,nd={x:0,y:2,z:1};function id(e,t,r,n){var i=[0,0,0],a=n<0?r.getExtentMin():r.getExtentMax();i[nd[r.dim]]=a,e.position.setArray(i),e.rotation.identity(),t.distance=-Math.abs(a),t.normal.set(0,0,0),r.dim==="x"?(e.rotation.rotateY(n*Math.PI/2),t.normal.x=-n):r.dim==="z"?(e.rotation.rotateX(-n*Math.PI/2),t.normal.y=-n):(n>0&&e.rotation.rotateY(Math.PI),t.normal.z=-n)}function zn(e,t,r){this.rootNode=new V.Node;var n=new V.Mesh({geometry:new ea({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),i=new V.Mesh({geometry:new rd,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(i),this.rootNode.add(n),this.faceInfo=e,this.plane=new V.Plane,this.linesMesh=n,this.quadsMesh=i}zn.prototype.update=function(e,t,r){var n=e.coordinateSystem,i=[n.getAxis(this.faceInfo[0]),n.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,o=this.quadsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(a,i,e,r),this._udpateSplitAreas(o,i,e,r),a.convertToTypedArray(),o.convertToTypedArray();var s=n.getAxis(this.faceInfo[2]);id(this.rootNode,this.plane,s,this.faceInfo[3])};zn.prototype._updateSplitLines=function(e,t,r,n){var i=n.getDevicePixelRatio();t.forEach(function(a,o){var s=a.model,l=t[1-o].getExtent();if(!a.scale.isBlank()){var u=s.getModel("splitLine",r.getModel("splitLine"));if(u.get("show")){var f=u.getModel("lineStyle"),c=f.get("color"),d=Ni(f.get("opacity"),1),h=Ni(f.get("width"),1);c=Ke(c)?c:[c];for(var _=a.getTicksCoords({tickModel:u}),v=0,p=0;p<_.length;p++){var m=_[p].coord,x=V.parseColor(c[v%c.length]);x[3]*=d;var g=[0,0,0],y=[0,0,0];g[o]=y[o]=m,g[1-o]=l[0],y[1-o]=l[1],e.addLine(g,y,x,h*i),v++}}}})};zn.prototype._udpateSplitAreas=function(e,t,r,n){t.forEach(function(i,a){var o=i.model,s=t[1-a].getExtent();if(!i.scale.isBlank()){var l=o.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var u=l.getModel("areaStyle"),f=u.get("color"),c=Ni(u.get("opacity"),1);f=Ke(f)?f:[f];for(var d=i.getTicksCoords({tickModel:l,clamp:!0}),h=0,_=[0,0,0],v=[0,0,0],p=0;p<d.length;p++){var m=d[p].coord,x=[0,0,0],g=[0,0,0];if(x[a]=g[a]=m,x[1-a]=s[0],g[1-a]=s[1],p===0){_=x,v=g;continue}var y=V.parseColor(f[h%f.length]);y[3]*=c,e.addQuad([_,x,g,v],y),_=x,v=g,h++}}}})};var Ut=je.firstNotNull,Ht={x:0,y:2,z:1};function na(e,t){var r=new V.Mesh({geometry:new ea({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),n=new Ji;n.material.depthMask=!1;var i=new V.Node;i.add(r),i.add(n),this.rootNode=i,this.dim=e,this.linesMesh=r,this.labelsMesh=n,this.axisLineCoords=null,this.labelElements=[]}var mi={x:"y",y:"x",z:"y"};na.prototype.update=function(e,t,r){var n=e.coordinateSystem,i=n.getAxis(this.dim),a=this.linesMesh.geometry,o=this.labelsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0);var s=i.model,l=i.getExtent(),R=r.getDevicePixelRatio(),u=s.getModel("axisLine",e.getModel("axisLine")),f=s.getModel("axisTick",e.getModel("axisTick")),c=s.getModel("axisLabel",e.getModel("axisLabel")),d=u.get("lineStyle.color");if(u.get("show")){var h=u.getModel("lineStyle"),_=[0,0,0],v=[0,0,0],p=Ht[i.dim];_[p]=l[0],v[p]=l[1],this.axisLineCoords=[_,v];var m=V.parseColor(d),x=Ut(h.get("width"),1),g=Ut(h.get("opacity"),1);m[3]*=g,a.addLine(_,v,m,x*R)}if(f.get("show")){var y=f.getModel("lineStyle"),E=V.parseColor(Ut(y.get("color"),d)),x=Ut(y.get("width"),1);E[3]*=Ut(y.get("opacity"),1);for(var T=i.getTicksCoords(),S=f.get("length"),b=0;b<T.length;b++){var w=T[b].coord,_=[0,0,0],v=[0,0,0],p=Ht[i.dim],L=Ht[mi[i.dim]];_[p]=v[p]=w,v[L]=S,a.addLine(_,v,E,x*R)}}this.labelElements=[];var R=r.getDevicePixelRatio();if(c.get("show"))for(var T=i.getTicksCoords(),D=s.get("data"),O=c.get("margin"),M=i.getViewLabels(),b=0;b<M.length;b++){var U=M[b].tickValue,F=M[b].formattedLabel,G=M[b].rawLabel,w=i.dataToCoord(U),K=[0,0,0],p=Ht[i.dim],L=Ht[mi[i.dim]];K[p]=K[p]=w,K[L]=O;var ae=c;D&&D[U]&&D[U].textStyle&&(ae=new gi(D[U].textStyle,c,s.ecModel));var de=Ut(ae.get("color"),d),le=new pn({style:mn(ae,{text:F,fill:typeof de=="function"?de(i.type==="category"?G:i.type==="value"?U+"":U,b):de,verticalAlign:"top",align:"left"})}),Se=t.add(le),xe=le.getBoundingRect();o.addSprite(K,[xe.width*R,xe.height*R],Se),this.labelElements.push(le)}if(s.get("name")){var Me=s.getModel("nameTextStyle"),K=[0,0,0],p=Ht[i.dim],L=Ht[mi[i.dim]],Ue=Ut(Me.get("color"),d),He=Me.get("borderColor"),x=Me.get("borderWidth");K[p]=K[p]=(l[0]+l[1])/2,K[L]=s.get("nameGap");var le=new pn({style:mn(Me,{text:s.get("name"),fill:Ue,stroke:He,lineWidth:x})}),Se=t.add(le),xe=le.getBoundingRect();o.addSprite(K,[xe.width*R,xe.height*R],Se),le.__idx=this.labelElements.length,this.nameLabelElement=le}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),a.convertToTypedArray(),o.convertToTypedArray()};na.prototype.setSpriteAlign=function(e,t,r){for(var n=r.getDevicePixelRatio(),i=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var o=this.labelElements[a],s=o.getBoundingRect();i.setSpriteAlign(a,[s.width*n,s.height*n],e,t)}var l=this.nameLabelElement;if(l){var s=l.getBoundingRect();i.setSpriteAlign(l.__idx,[s.width*n,s.height*n],e,t),i.dirty()}this.textAlign=e,this.textVerticalAlign=t};var yo=je.firstNotNull;V.Shader.import(_h);var zt={x:0,y:2,z:1};const ad=vl.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var r=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],n=["x","y","z"],i=new V.Material({shader:V.createShader("ecgl.color"),depthMask:!1,transparent:!0}),a=new V.Material({shader:V.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});i.define("fragment","DOUBLE_SIDED"),i.define("both","VERTEX_COLOR"),this.groupGL=new V.Node,this._control=new ed({zr:t.getZr()}),this._control.init(),this._faces=r.map(function(s){var l=new zn(s,a,i);return this.groupGL.add(l.rootNode),l},this),this._axes=n.map(function(s){var l=new na(s,a);return this.groupGL.add(l.rootNode),l},this);var o=t.getDevicePixelRatio();this._axisLabelSurface=new Mn({width:256,height:256,devicePixelRatio:o}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new V.Mesh({geometry:new ea({useNativeLine:!1}),material:a,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new Mn({width:128,height:128,devicePixelRatio:o}),this._axisPointerLabelsMesh=new Ji({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new V.Node,this._sceneHelper=new Di,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,r){this._model=e,this._api=r;var n=e.coordinateSystem;n.viewGL.add(this._lightRoot),e.get("show")?n.viewGL.add(this.groupGL):n.viewGL.remove(this.groupGL);var i=this._control;i.setViewGL(n.viewGL);var a=e.getModel("viewControl");i.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),i.off("update"),e.get("show")&&(this._faces.forEach(function(o){o.update(e,t,r)},this),this._axes.forEach(function(o){o.update(e,this._axisLabelSurface,r)},this)),i.on("update",this._onCameraChange.bind(this,e,r),this),this._sceneHelper.setScene(n.viewGL.scene),this._sceneHelper.updateLight(e),n.viewGL.setPostEffect(e.getModel("postEffect"),r),n.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,r,n){var i=n.renderer;this._sceneHelper.updateAmbientCubemap(i,e,r),this._sceneHelper.updateSkybox(i,e,r)},showAxisPointer:function(e,t,r,n){this._doShowAxisPointer(),this._updateAxisPointer(n.value)},hideAxisPointer:function(e,t,r,n){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,r=t.viewGL;e.get("show")&&e.get("axisPointer.show")?r.on("mousemove",this._updateAxisPointerOnMousePosition,this):r.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,r=t.coordinateSystem,n=r.viewGL,i=n.castRay(e.offsetX,e.offsetY,new V.Ray),a,o=0;o<this._faces.length;o++){var s=this._faces[o];if(!s.rootNode.invisible){s.plane.normal.dot(n.camera.worldTransform.z)<0&&s.plane.normal.negate();var l=i.intersectPlane(s.plane);if(l){var u=r.getAxis(s.faceInfo[0]),f=r.getAxis(s.faceInfo[1]),c=zt[s.faceInfo[0]],d=zt[s.faceInfo[1]];u.contain(l.array[c])&&f.contain(l.array[d])&&(a=l)}}}if(a){var h=r.pointToData(a.array,[],!0);this._updateAxisPointer(h),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var r=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:r.getAlpha(),beta:r.getBeta(),distance:r.getDistance(),center:r.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new V.Vector3;e.update();for(var r=0;r<this._faces.length/2;r++){for(var n=[],i=0;i<2;i++){var a=this._faces[r*2+i];a.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),n[i]=t.z}var o=n[0]>n[1]?0:1,s=this._faces[r*2+o],l=this._faces[r*2+1-o];s.rootNode.invisible=!0,l.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),r=e.getAxis("y"),n=e.getAxis("z"),i=n.getExtentMax(),a=n.getExtentMin(),o=t.getExtentMin(),s=t.getExtentMax(),l=r.getExtentMax(),u=r.getExtentMin(),f=this._axes[0].rootNode,c=this._axes[1].rootNode,d=this._axes[2].rootNode,h=this._faces,_=h[4].rootNode.invisible?u:l,v=h[2].rootNode.invisible?i:a,p=h[0].rootNode.invisible?o:s,m=h[2].rootNode.invisible?i:a,x=h[0].rootNode.invisible?s:o,g=h[4].rootNode.invisible?u:l;f.rotation.identity(),c.rotation.identity(),d.rotation.identity(),h[4].rootNode.invisible&&(this._axes[0].flipped=!0,f.rotation.rotateX(Math.PI)),h[0].rootNode.invisible&&(this._axes[1].flipped=!0,c.rotation.rotateZ(Math.PI)),h[4].rootNode.invisible&&(this._axes[2].flipped=!0,d.rotation.rotateY(Math.PI)),f.position.set(0,v,_),c.position.set(p,m,0),d.position.set(x,0,g),f.update(),c.update(),d.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new V.Vector4,new V.Vector4],r=new V.Vector4;this.groupGL.getWorldPosition(r),r.w=1,r.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),r.x/=r.w,r.y/=r.w,this._axes.forEach(function(n){var i=n.axisLineCoords;n.labelsMesh.geometry;for(var a=0;a<t.length;a++)t[a].setArray(i[a]),t[a].w=1,t[a].transformMat4(n.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[a].x/=t[a].w,t[a].y/=t[a].w;var o=t[1].x-t[0].x,s=t[1].y-t[0].y,l=(t[1].x+t[0].x)/2,u=(t[1].y+t[0].y)/2,f,c;Math.abs(s/o)<.5?(f="center",c=u>r.y?"bottom":"top"):(c="middle",f=l>r.x?"left":"right"),n.setSpriteAlign(f,c,this._api)},this)},_doShowAxisPointer:function(){this._axisPointerLineMesh.invisible&&(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,r=t.dataToPoint(e),n=this._axisPointerLineMesh,i=n.geometry,a=this._model.getModel("axisPointer"),o=this._api.getDevicePixelRatio();i.convertToDynamicArray(!0);function s(b){return je.firstNotNull(b.model.get("axisPointer.show"),a.get("show"))}function l(b){var w=b.model.getModel("axisPointer",a),L=w.getModel("lineStyle"),R=V.parseColor(L.get("color")),D=yo(L.get("width"),1),O=yo(L.get("opacity"),1);return R[3]*=O,{color:R,lineWidth:D}}for(var u=0;u<this._faces.length;u++){var f=this._faces[u];if(!f.rootNode.invisible){for(var c=f.faceInfo,d=c[3]<0?t.getAxis(c[2]).getExtentMin():t.getAxis(c[2]).getExtentMax(),h=zt[c[2]],_=0;_<2;_++){var v=c[_],p=c[1-_],m=t.getAxis(v),x=t.getAxis(p);if(s(m)){var g=[0,0,0],y=[0,0,0],E=zt[v],T=zt[p];g[E]=y[E]=r[E],g[h]=y[h]=d,g[T]=x.getExtentMin(),y[T]=x.getExtentMax();var S=l(m);i.addLine(g,y,S.color,S.lineWidth*o)}}if(s(t.getAxis(c[2]))){var g=r.slice(),y=r.slice();y[h]=d;var S=l(t.getAxis(c[2]));i.addLine(g,y,S.color,S.lineWidth*o)}}}i.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,r=this._axisPointerLabelsMesh,n=this._axisPointerLabelsSurface,i=t.coordinateSystem,a=t.getModel("axisPointer");r.geometry.convertToDynamicArray(!0),n.clear();var o={x:"y",y:"x",z:"y"};this._axes.forEach(function(s,l){var u=i.getAxis(s.dim),f=u.model,c=f.getModel("axisPointer",a),d=c.getModel("label"),h=c.get("lineStyle.color");if(!(!d.get("show")||!c.get("show"))){var _=e[l],v=d.get("formatter"),p=u.scale.getLabel({value:_});if(v!=null)p=v(p,e);else if(u.scale.type==="interval"||u.scale.type==="log"){var m=_l(u.scale.getTicks()[0]);p=_.toFixed(m+2)}var x=d.get("color"),g=new pn({style:mn(d,{text:p,fill:x||h,align:"left",verticalAlign:"top"})}),y=n.add(g),E=g.getBoundingRect(),T=this._api.getDevicePixelRatio(),S=s.rootNode.position.toArray(),b=zt[o[s.dim]];S[b]+=(s.flipped?-1:1)*d.get("margin"),S[zt[s.dim]]=u.dataToCoord(e[l]),r.geometry.addSprite(S,[E.width*T,E.height*T],y,s.textAlign,s.textVerticalAlign)}},this),n.getZr().refreshImmediately(),r.material.set("uvScale",n.getCoordsScale()),r.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function Gr(e){So.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}Gr.prototype={constructor:Gr,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],r),t[2]=this.getAxis("y").dataToCoord(e[1],r),t[1]=this.getAxis("z").dataToCoord(e[2],r),t},pointToData:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],r),t[1]=this.getAxis("y").coordToData(e[2],r),t[2]=this.getAxis("z").coordToData(e[1],r),t}};bo(Gr,So);function Ln(e,t,r){wo.call(this,e,t,r)}Ln.prototype={constructor:Ln,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}};bo(Ln,wo);function od(e,t){var r=e.getBoxLayoutParams(),n=pl(r,{width:t.getWidth(),height:t.getHeight()});n.y=t.getHeight()-n.y-n.height,this.viewGL.setViewport(n.x,n.y,n.width,n.height,t.getDevicePixelRatio());var i=e.get("boxWidth"),a=e.get("boxHeight"),o=e.get("boxDepth");this.getAxis("x").setExtent(-i/2,i/2),this.getAxis("y").setExtent(o/2,-o/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[i,a,o]}function sd(e,t){var r={};function n(i,a){r[i]=r[i]||[1/0,-1/0],r[i][0]=Math.min(a[0],r[i][0]),r[i][1]=Math.max(a[1],r[i][1])}e.eachSeries(function(i){if(i.coordinateSystem===this){var a=i.getData();["x","y","z"].forEach(function(o){a.mapDimensionsAll(o,!0).forEach(function(s){n(o,a.getDataExtent(s,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(i){e.eachComponent(i,function(a){var o=i.charAt(0),s=a.getReferringComponents("grid3D").models[0],l=s.coordinateSystem;if(l===this){var u=l.getAxis(o);if(!u){var f=Ol(r[o]||[1/0,-1/0],a);u=new Ln(o,f),u.type=a.get("type");var c=u.type==="category";u.onBand=c&&a.get("boundaryGap"),u.inverse=a.get("inverse"),a.axis=u,u.model=a,u.getLabelModel=function(){return a.getModel("axisLabel",s.getModel("axisLabel"))},u.getTickModel=function(){return a.getModel("axisTick",s.getModel("axisTick"))},l.addAxis(u)}}},this)},this),this.resize(this.model,t)}var ld={dimensions:Gr.prototype.dimensions,create:function(e,t){var r=[];e.eachComponent("grid3D",function(a){a.__viewGL=a.__viewGL||new me;var o=new Gr;o.model=a,o.viewGL=a.__viewGL,a.coordinateSystem=o,r.push(o),o.resize=od,o.update=sd});var n=["xAxis3D","yAxis3D","zAxis3D"];function i(a,o){return n.map(function(s){var l=a.getReferringComponents(s).models[0];return l==null&&(l=o.getComponent(s)),l})}return e.eachSeries(function(a){if(a.get("coordinateSystem")==="cartesian3D"){var o=a.getReferringComponents("grid3D").models[0];if(o==null){var s=i(a,e),o=s[0].getCoordSysModel();s.forEach(function(f){f.getCoordSysModel()})}var l=o.coordinateSystem;a.coordinateSystem=l}}),r}};const ud=ld;var ws=Ao.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});Bl(ws);const fd=ws;var Cs={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},cd=mt({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},Cs),ia=mt({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},Cs),hd=Ze({scale:!0,min:"dataMin",max:"dataMax"},ia),Rs=Ze({logBase:10},ia);Rs.scale=!0;const dd={categoryAxis3D:cd,valueAxis3D:ia,timeAxis3D:hd,logAxis3D:Rs};var vd=["value","category","time","log"];function _d(e,t,r,n,i){vd.forEach(function(a){var o=r.extend({type:t+"Axis3D."+a,__ordinalMeta:null,mergeDefaultAndTheme:function(s,l){var u=l.getTheme();mt(s,u.get(a+"Axis3D")),mt(s,this.getDefaultOption()),s.type=n(t,s)},optionUpdated:function(){var s=this.option;s.type==="category"&&(this.__ordinalMeta=ml.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:mt(gl(dd[a+"Axis3D"]),i||{},!0)});e.registerComponentModel(o)}),e.registerSubTypeDefaulter(t+"Axis3D",yl(n,t))}function pd(e,t){return t.type||(t.data?"category":"value")}function md(e){e.registerComponentModel(td),e.registerComponentView(ad),e.registerCoordinateSystem("grid3D",ud),["x","y","z"].forEach(function(t){_d(e,t,fd,pd,{name:t.toUpperCase()});const r=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(r)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"grid3D",query:t},function(n){n.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,r){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,r){})}const gd={id:"right-top-bar-chart"},yd=Dt({__name:"RightTopBar3D",setup(e){return Lt([xr,Pn,In,md,vh,Zt]),Yt(()=>{var t=document.getElementById("right-top-bar-chart"),r=yr(t,"dark",{devicePixelRatio:2}),n,i=["12a","1a","2a","3a","4a","5a","6a","7a","8a","9a","10a","11a","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p"],a=["Saturday"],o=[[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];n={backgroundColor:"transparent",title:{text:"预约情况显示"},tooltip:{},visualMap:{max:20,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]}},xAxis3D:{type:"category",data:i,name:"",axisLabel:{textStyle:{color:"#fff"}}},yAxis3D:{type:"category",data:a,show:!1,name:"",axisLabel:{show:!1},axisLine:{show:!0},axisTick:{show:!1},splitLine:{show:!1}},zAxis3D:{type:"value",name:""},grid3D:{boxWidth:200,boxDepth:10,viewControl:{alpha:0,beta:0},light:{main:{intensity:1.2,shadow:!0},ambient:{intensity:.3}}},series:[{type:"bar3D",data:o.slice(0,24).map(function(s){return{value:[s[1],s[0],s[2]]}}),label:{fontSize:16,borderWidth:1},emphasis:{label:{fontSize:20,color:"#900"},itemStyle:{color:"#900"}}}]},n&&r.setOption(n)}),(t,r)=>(Le(),De("div",gd))}});const xd=yt(yd,[["__scopeId","data-v-974894ed"]]),dt=e=>(Co("data-v-245e60a5"),e=e(),Ro(),e),Td=dt(()=>ie("div",{class:"header"},"义乌铁路西站场区作业情况展示",-1)),Ed={class:"container"},Ad={class:"container-content"},Sd={class:"left-part"},bd=dt(()=>ie("div",{class:"box-title"},"堆区在场箱数量",-1)),wd={class:"box-item-wrap"},Cd={class:"box-item"},Rd={class:"box-item-value"},Md=dt(()=>ie("div",{class:"box-item-title"},"总数量",-1)),Ld={class:"box-item"},Dd={class:"box-item-value"},Nd=dt(()=>ie("div",{class:"box-item-title"},"空箱量",-1)),Pd={class:"box-item"},Id={class:"box-item-value"},Od=dt(()=>ie("div",{class:"box-item-title"},"重箱量",-1)),Bd={class:"box-item"},Fd={class:"box-item-value"},Ud=dt(()=>ie("div",{class:"box-item-title"},"含转关箱",-1)),Hd={class:"left-bar-chart-2"},zd={class:"left-bar-chart"},Gd={class:"middle-part"},Vd={class:"bar"},kd=dt(()=>ie("div",{class:"bar-title"},"本年度",-1)),Wd={class:"barbox-value"},Xd={class:"barbox-item"},qd={class:"barbox-item"},jd=dt(()=>ie("div",{class:"barbox-title"},[ie("div",{class:"barbox-item"},"进口箱量"),ie("div",{class:"barbox-item"},"出口箱量")],-1)),Zd=dt(()=>ie("div",{class:"table-title"},"当前场站作业情况",-1)),Yd={class:"right-part"},Kd={class:"right-header"},$d=dt(()=>ie("div",{class:"table-title"},"近期船期待发运量",-1)),Qd={name:"YiWu"},Jd=Dt({...Qd,setup(e){const{containerRef:t,screenWidth:r,screenHeight:n}=Sl(),i=Vt(new Array(10).fill(1).map(()=>["TRAYW 001SI/001NW","50","50","45"])),a=Vt(new Array(10).fill(1).map(()=>["MAERSK LINS/001W","2023-01-01 10:00:00","2023-01-01 10:00:00","50","2023-01-01 10:00:00","BLCT2","150"]));return(o,s)=>(Le(),De("div",{class:"YiWu-view",style:cr({width:Zr(r)+"px",height:Zr(n)+"px"}),ref_key:"containerRef",ref:t},[Td,ie("div",Ed,[Ie(Zr(Ls),null,{default:ca(()=>[ie("div",Ad,[ie("div",Sd,[Ie(Zr(Ll),{class:"box"},{default:ca(()=>[bd,ie("div",wd,[ie("div",Cd,[ie("div",Rd,[Ie(er,{"end-val":890})]),Md]),ie("div",Ld,[ie("div",Dd,[Ie(er,{"end-val":450})]),Nd]),ie("div",Pd,[ie("div",Id,[Ie(er,{"end-val":440})]),Od]),ie("div",Bd,[ie("div",Fd,[Ie(er,{"end-val":330})]),Ud])])]),_:1}),ie("div",Hd,[Ie(Vl),Ie(aa,{position:"top"})]),ie("div",zd,[Ie(Hl),Ie(aa,{position:"top"})])]),ie("div",Gd,[ie("div",Vd,[kd,ie("div",Wd,[ie("div",Xd,[Ie(er,{"end-val":15e3})]),ie("div",qd,[Ie(er,{"end-val":5e4,duration:3.5},null,8,["duration"])])]),jd]),Zd,Ie(ha,{style:{flex:"1"},"column-flex":[2,1,1,1],header:["车名车次","计划卸量","计划装量","已放行待装"],data:i.value,showIdx:!0},null,8,["data"]),Ie(pu)]),ie("div",Yd,[ie("div",Kd,[Ie(yu),Ie(xd)]),$d,Ie(ha,{style:{height:"30%"},"column-flex":[2,3,3,1,3,1,1],header:["船名航次","截关期/开船期","本航次集装箱数量（已发运数量）","铁路发运预计日期","靠泊时间","靠泊码头","待发箱量"],data:a.value,"row-num":6},null,8,["data"]),Ie(Eu)])])]),_:1})])],4))}});const iv=yt(Jd,[["__scopeId","data-v-245e60a5"]]);export{iv as default};
