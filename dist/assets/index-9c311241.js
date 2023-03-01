import{_ as bt,i as rn,e as Yl,g as Kl,m as $l,A as Ql,M as Fn,c as Jl,n as eu,a as tu,R as ir,b as st,C as ti,r as Cs,Z as gt,d as nr,w as Za,f as Jt,h as Un,j as pa,k as Hn,l as ru,o as nu,u as nn,s as iu,p as ma,q as _a,t as au,v as Rs,x as Dr,y as ga,z as Ds,B as qi,D as Ya,E as ou,G as Ir,F as su,H as Ls,I as ze,J as he,K as mt,L as lu,N as Yr,O as ot,P as ji,Q as Ms,S as Gn,T as ya,U as Ge,V as xa,W as uu,X as Ka,Y as Kr,$ as cu,a0 as $r,a1 as fu,a2 as Yt,a3 as hu,a4 as du,a5 as vu,a6 as pu,a7 as mu,a8 as Ps,a9 as ft,aa as _u,ab as Ns,ac as Ar,ad as Is,ae as $a,af as ar,ag as Qa,ah as Ja,ai as eo,aj as to,ak as Rn,al as ro,am as gu,an as yu,ao as xu,ap as Tu,aq as no,ar as Eu,as as Su,at as Au,au as bu,av as wu,aw as Cu,ax as Or,ay as ri,az as ni,aA as ii,aB as ai,aC as Ta,aD as or,aE as zn,aF as Os,aG as Ru,aH as Kt,aI as Ea,aJ as Du,aK as io,aL as Lu,aM as Mu,aN as Sa,aO as Qr,aP as hi,aQ as Pu,aR as ao,aS as Nu,aT as Iu,aU as Ou,aV as Bs,aW as Bu,aX as Fu,aY as Uu,aZ as Hu,a_ as Gu,a$ as zu,b0 as Vu,b1 as dn,b2 as oo,b3 as ku,b4 as Wu,b5 as Xu,b6 as qu,b7 as ju,b8 as Zu,b9 as Yu,ba as Ku,bb as $u,bc as Fs,bd as Us,be as Hs,bf as Qu,bg as Ju,bh as so,bi as ec}from"./index-a9ce5f68.js";import{o as Le,c as Me,r as Zi,p as Gs,a as zs,b as se,d as wt,e as tt,f as Ct,g as Aa,w as br,n as Sr,h as vn,F as di,i as vi,t as pi,j as tc,k as Be,l as lo,u as pn}from"./index-e3b96f97.js";const rc={},nc=e=>(Gs("data-v-407cb4fa"),e=e(),zs(),e),ic={class:"borderBox3"},ac=nc(()=>se("div",{class:"box-footer"},null,-1));function oc(e,t){return Le(),Me("div",ic,[ac,Zi(e.$slots,"default",{},void 0,!0)])}const sc=bt(rc,[["render",oc],["__scopeId","data-v-407cb4fa"]]),lc={key:0,class:"thead-col thead-idx",style:{flex:"0 0 5rem"}},uc={key:0,class:"tbody-col tbody-idx",style:{flex:"0 0 5rem"}},cc={name:"ScrollTable"},fc=wt({...cc,props:{data:null,columnFlex:null,header:{default:null},showIdx:{type:Boolean,default:!1},animation:{type:Boolean,default:!0},duration:{default:3e3},headerBg:{default:"#002c8a"},oddRowBg:{default:"#010c32"},evenRowBg:{default:"#03184b"},rowNum:{default:7},rowHeightFixed:{default:0}},setup(e){const t=e,r=tt(null),n=tt(null),i=tt(t.rowHeightFixed),a=tt(t.data.map((d,h)=>({data:[...d],idx:h+1}))),o=tt(0);let s=null;function l(){i.value||(i.value=r.value.clientHeight/t.rowNum)}function u(){t.data.length>t.rowNum&&(a.value=[...a.value,...a.value],s=window.setInterval(()=>{o.value++,o.value===t.data.length&&setTimeout(()=>{c(),o.value=0,setTimeout(()=>{f()},100)},500)},t.duration))}function c(){n.value.style.transitionProperty="none"}function f(){n.value.style.transitionProperty="transform"}return Ct(()=>{l(),t.animation&&u()}),Aa(()=>{s&&(clearInterval(s),s=null)}),br(()=>t.animation,d=>{d?u():s&&(clearInterval(s),s=null)}),br(()=>t.duration,d=>{d&&t.animation&&(s&&(clearInterval(s),s=null),a.value=t.data.map((h,p)=>({data:[...h],idx:p+1})),u())}),br(()=>t.rowNum,d=>{d?l():console.error("不能将rowNum设置为0")}),br(()=>t.data,d=>{d&&d.length>0&&(a.value=d.map((h,p)=>({data:[...h],idx:p+1})),o.value=0,t.animation&&tc(()=>{s&&(clearInterval(s),s=null),u()}))}),(d,h)=>(Le(),Me("div",{class:"scroll-table",ref_key:"scrollTableRef",ref:r},[e.header&&e.header.length>0?(Le(),Me("div",{key:0,class:"thead",style:Sr({height:`${i.value}px`,backgroundColor:e.headerBg})},[e.showIdx?(Le(),Me("div",lc," 序号 ")):vn("",!0),(Le(!0),Me(di,null,vi(e.header,(p,v)=>(Le(),Me("div",{key:p,class:"thead-col",style:Sr({flex:e.columnFlex[v]||1})},pi(p),5))),128))],4)):vn("",!0),a.value&&a.value.length>0?(Le(),Me("div",{key:1,ref_key:"tbodyRef",ref:n,class:"tbody",style:Sr({transform:`translateY(-${i.value*o.value}px)`})},[(Le(!0),Me(di,null,vi(a.value,(p,v)=>(Le(),Me("div",{key:v,class:"tbody-row",style:Sr({height:`${i.value}px`,backgroundColor:p.idx&1?e.oddRowBg:e.evenRowBg})},[e.showIdx?(Le(),Me("div",uc,pi(p.idx),1)):vn("",!0),(Le(!0),Me(di,null,vi(p.data,(m,_)=>(Le(),Me("div",{key:_,class:"tbody-col",style:Sr({flex:e.columnFlex[_]||1})},pi(m),5))),128))],4))),128))],4)):vn("",!0)],512))}});const uo=bt(fc,[["__scopeId","data-v-d2dd7ccd"]]);var Yi=globalThis&&globalThis.__assign||function(){return(Yi=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},hc=function(){function e(t,r,n){var i=this;this.endVal=r,this.options=n,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(a){i.startTime||(i.startTime=a);var o=a-i.startTime;i.remaining=i.duration-o,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(o,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(o,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(o/i.duration);var s=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=s?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),o<i.duration?i.rAF=requestAnimationFrame(i.count):i.finalEndVal!==null?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(a){var o,s,l,u,c=a<0?"-":"";o=Math.abs(a).toFixed(i.options.decimalPlaces);var f=(o+="").split(".");if(s=f[0],l=f.length>1?i.options.decimal+f[1]:"",i.options.useGrouping){u="";for(var d=3,h=0,p=0,v=s.length;p<v;++p)i.options.useIndianSeparators&&p===4&&(d=2,h=1),p!==0&&h%d==0&&(u=i.options.separator+u),h++,u=s[v-p-1]+u;s=u}return i.options.numerals&&i.options.numerals.length&&(s=s.replace(/[0-9]/g,function(m){return i.options.numerals[+m]}),l=l.replace(/[0-9]/g,function(m){return i.options.numerals[+m]})),c+i.options.prefix+s+l+i.options.suffix},this.easeOutExpo=function(a,o,s,l){return s*(1-Math.pow(2,-10*a/l))*1024/1023+o},this.options=Yi(Yi({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(r),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof t=="string"?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(a){return a()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(t){if(t&&window&&!t.once){var r=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),i=n.top+window.pageYOffset,a=n.top+n.height+window.pageYOffset;a<r&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||i>r)&&!t.paused&&t.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var r=t-this.startVal;if(Math.abs(r)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(t){var r=this.formattingFn(t);this.el&&(this.el.tagName==="INPUT"?this.el.value=r:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=r:this.el.innerHTML=r)},e.prototype.ensureNumber=function(t){return typeof t=="number"&&!isNaN(t)},e.prototype.validateValue=function(t){var r=Number(t);return this.ensureNumber(r)?r:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}();const dc={class:"countup-wrap"},vc={name:"CountUp"},fr=wt({...vc,props:{endVal:null,startVal:{default:0},duration:{default:2.5},decimalPlaces:{default:0},autoplay:{type:Boolean,default:!0},loop:{type:[Boolean,Number,String],default:!1},delay:{default:0},options:{default:void 0}},emits:["init","finished"],setup(e,{expose:t,emit:r}){const n=e;let i=tt(),a=tt();const o=()=>{if(!i.value)return;const p=Number(n.startVal),v=Number(n.endVal),m=Number(n.duration);if(a.value=new hc(i.value,v,{startVal:p,duration:m,decimalPlaces:n.decimalPlaces,...n.options}),a.value.error){console.error(a.value.error);return}r("init",a.value)},s=p=>{var v;(v=a.value)==null||v.start(p)};br(()=>n.endVal,p=>{var v;n.autoplay&&((v=a.value)==null||v.update(p))});const l=tt(!1);let u=0;const c=()=>{u++,s(()=>{typeof n.loop=="boolean"&&n.loop||n.loop>u?d(()=>{var v;(v=a.value)==null||v.reset(),c()},n.delay):l.value=!0})};let f;const d=(p,v=1)=>{let m;function _(y){m||(m=y),y-m<v*1e3?f=requestAnimationFrame(_):p()}f=requestAnimationFrame(_)};return br(l,p=>{p&&r("finished")}),Ct(()=>{o(),n.autoplay&&c()}),Aa(()=>{var p;cancelAnimationFrame(f),(p=a.value)==null||p.reset()}),t({init:o,restart:()=>{o(),s()}}),(p,v)=>(Le(),Me("div",dc,[Zi(p.$slots,"prefix"),se("span",{ref_key:"elRef",ref:i},null,512),Zi(p.$slots,"suffix")]))}});var ba={isDimensionStacked:rn,enableDataStack:Yl,getStackedDimension:Kl};function pc(e,t){var r=t;t instanceof Fn||(r=new Fn(t));var n=Jl(r);return n.setExtent(e[0],e[1]),eu(n,r),n}function mc(e){$l(e,Ql)}function _c(e,t){var r=tu(t.get("padding")),n=t.getItemStyle(["color","opacity"]);return n.fill=t.get("backgroundColor"),e=new ir({shape:{x:e.x-r[3],y:e.y-r[0],width:e.width+r[1]+r[3],height:e.height+r[0]+r[2],r:t.get("borderRadius")},style:n,silent:!0,z2:-1}),e}var gc=function(e){st(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r.layoutMode={type:"box",ignoreSize:!0},r}return t.type="title",t.defaultOption={z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:0,top:0,backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bold",color:"#464646"},subtextStyle:{fontSize:12,color:"#6E7079"}},t}(ti),yc=function(e){st(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r}return t.prototype.render=function(r,n,i){if(this.group.removeAll(),!!r.get("show")){var a=this.group,o=r.getModel("textStyle"),s=r.getModel("subtextStyle"),l=r.get("textAlign"),u=Cs(r.get("textBaseline"),r.get("textVerticalAlign")),c=new gt({style:nr(o,{text:r.get("text"),fill:o.getTextColor()},{disableBox:!0}),z2:10}),f=c.getBoundingRect(),d=r.get("subtext"),h=new gt({style:nr(s,{text:d,fill:s.getTextColor(),y:f.height+r.get("itemGap"),verticalAlign:"top"},{disableBox:!0}),z2:10}),p=r.get("link"),v=r.get("sublink"),m=r.get("triggerEvent",!0);c.silent=!p&&!m,h.silent=!v&&!m,p&&c.on("click",function(){Za(p,"_"+r.get("target"))}),v&&h.on("click",function(){Za(v,"_"+r.get("subtarget"))}),Jt(c).eventData=Jt(h).eventData=m?{componentType:"title",componentIndex:r.componentIndex}:null,a.add(c),d&&a.add(h);var _=a.getBoundingRect(),y=r.getBoxLayoutParams();y.width=_.width,y.height=_.height;var g=Un(y,{width:i.getWidth(),height:i.getHeight()},r.get("padding"));l||(l=r.get("left")||r.get("right"),l==="middle"&&(l="center"),l==="right"?g.x+=g.width:l==="center"&&(g.x+=g.width/2)),u||(u=r.get("top")||r.get("bottom"),u==="center"&&(u="middle"),u==="bottom"?g.y+=g.height:u==="middle"&&(g.y+=g.height/2),u=u||"top"),a.x=g.x,a.y=g.y,a.markRedraw();var x={align:l,verticalAlign:u};c.setStyle(x),h.setStyle(x),_=a.getBoundingRect();var E=g.margin,T=r.getItemStyle(["color","opacity"]);T.fill=r.get("backgroundColor");var S=new ir({shape:{x:_.x-E[3],y:_.y-E[0],width:_.width+E[1]+E[3],height:_.height+E[0]+E[2],r:r.get("borderRadius")},style:T,subPixelOptimize:!0,silent:!0});a.add(S)}},t.type="title",t}(pa);function Br(e){e.registerComponentModel(gc),e.registerComponentView(yc)}var xc=function(e){st(t,e);function t(r,n,i,a){var o=e.call(this)||this;return o.updateData(r,n,i,a),o}return t.prototype._createSymbol=function(r,n,i,a,o){this.removeAll();var s=Hn(r,-1,-1,2,2,null,o);s.attr({z2:100,culling:!0,scaleX:a[0]/2,scaleY:a[1]/2}),s.drift=Tc,this._symbolType=r,this.add(s)},t.prototype.stopSymbolAnimation=function(r){this.childAt(0).stopAnimation(null,r)},t.prototype.getSymbolType=function(){return this._symbolType},t.prototype.getSymbolPath=function(){return this.childAt(0)},t.prototype.highlight=function(){ru(this.childAt(0))},t.prototype.downplay=function(){nu(this.childAt(0))},t.prototype.setZ=function(r,n){var i=this.childAt(0);i.zlevel=r,i.z=n},t.prototype.setDraggable=function(r,n){var i=this.childAt(0);i.draggable=r,i.cursor=!n&&r?"move":i.cursor},t.prototype.updateData=function(r,n,i,a){this.silent=!1;var o=r.getItemVisual(n,"symbol")||"circle",s=r.hostModel,l=t.getSymbolSize(r,n),u=o!==this._symbolType,c=a&&a.disableAnimation;if(u){var f=r.getItemVisual(n,"symbolKeepAspect");this._createSymbol(o,r,n,l,f)}else{var d=this.childAt(0);d.silent=!1;var h={scaleX:l[0]/2,scaleY:l[1]/2};c?d.attr(h):nn(d,h,s,n),iu(d)}if(this._updateCommon(r,n,l,i,a),u){var d=this.childAt(0);if(!c){var h={scaleX:this._sizeX,scaleY:this._sizeY,style:{opacity:d.style.opacity}};d.scaleX=d.scaleY=0,d.style.opacity=0,ma(d,h,s,n)}}c&&this.childAt(0).stopAnimation("leave")},t.prototype._updateCommon=function(r,n,i,a,o){var s=this.childAt(0),l=r.hostModel,u,c,f,d,h,p,v,m,_;if(a&&(u=a.emphasisItemStyle,c=a.blurItemStyle,f=a.selectItemStyle,d=a.focus,h=a.blurScope,v=a.labelStatesModels,m=a.hoverScale,_=a.cursorStyle,p=a.emphasisDisabled),!a||r.hasItemOption){var y=a&&a.itemModel?a.itemModel:r.getItemModel(n),g=y.getModel("emphasis");u=g.getModel("itemStyle").getItemStyle(),f=y.getModel(["select","itemStyle"]).getItemStyle(),c=y.getModel(["blur","itemStyle"]).getItemStyle(),d=g.get("focus"),h=g.get("blurScope"),p=g.get("disabled"),v=_a(y),m=g.getShallow("scale"),_=y.getShallow("cursor")}var x=r.getItemVisual(n,"symbolRotate");s.attr("rotation",(x||0)*Math.PI/180||0);var E=au(r.getItemVisual(n,"symbolOffset"),i);E&&(s.x=E[0],s.y=E[1]),_&&s.attr("cursor",_);var T=r.getItemVisual(n,"style"),S=T.fill;if(s instanceof Rs){var A=s.style;s.useStyle(Dr({image:A.image,x:A.x,y:A.y,width:A.width,height:A.height},T))}else s.__isEmptyBrush?s.useStyle(Dr({},T)):s.useStyle(T),s.style.decal=null,s.setColor(S,o&&o.symbolInnerColor),s.style.strokeNoScale=!0;var w=r.getItemVisual(n,"liftZ"),D=this._z2;w!=null?D==null&&(this._z2=s.z2,s.z2+=w):D!=null&&(s.z2=D,this._z2=null);var R=o&&o.useNameLabel;ga(s,v,{labelFetcher:l,labelDataIndex:n,defaultText:C,inheritColor:S,defaultOpacity:T.opacity});function C(I){return R?r.getName(I):Ds(r,I)}this._sizeX=i[0]/2,this._sizeY=i[1]/2;var P=s.ensureState("emphasis");P.style=u,s.ensureState("select").style=f,s.ensureState("blur").style=c;var L=m==null||m===!0?Math.max(1.1,3/this._sizeY):isFinite(m)&&m>0?+m:1;P.scaleX=this._sizeX*L,P.scaleY=this._sizeY*L,this.setSymbolScale(1),qi(this,d,h,p)},t.prototype.setSymbolScale=function(r){this.scaleX=this.scaleY=r},t.prototype.fadeOut=function(r,n,i){var a=this.childAt(0),o=Jt(this).dataIndex,s=i&&i.animation;if(this.silent=a.silent=!0,i&&i.fadeLabel){var l=a.getTextContent();l&&Ya(l,{style:{opacity:0}},n,{dataIndex:o,removeOpt:s,cb:function(){a.removeTextContent()}})}else a.removeTextContent();Ya(a,{style:{opacity:0},scaleX:0,scaleY:0},n,{dataIndex:o,cb:r,removeOpt:s})},t.getSymbolSize=function(r,n){return ou(r.getItemVisual(n,"symbolSize"))},t}(Ir);function Tc(e,t){this.parent.drift(e,t)}const wa=xc;function mi(e,t,r,n){return t&&!isNaN(t[0])&&!isNaN(t[1])&&!(n.isIgnore&&n.isIgnore(r))&&!(n.clipShape&&!n.clipShape.contain(t[0],t[1]))&&e.getItemVisual(r,"symbol")!=="none"}function co(e){return e!=null&&!Ls(e)&&(e={isIgnore:e}),e||{}}function fo(e){var t=e.hostModel,r=t.getModel("emphasis");return{emphasisItemStyle:r.getModel("itemStyle").getItemStyle(),blurItemStyle:t.getModel(["blur","itemStyle"]).getItemStyle(),selectItemStyle:t.getModel(["select","itemStyle"]).getItemStyle(),focus:r.get("focus"),blurScope:r.get("blurScope"),emphasisDisabled:r.get("disabled"),hoverScale:r.get("scale"),labelStatesModels:_a(t),cursorStyle:t.get("cursor")}}var Ec=function(){function e(t){this.group=new Ir,this._SymbolCtor=t||wa}return e.prototype.updateData=function(t,r){this._progressiveEls=null,r=co(r);var n=this.group,i=t.hostModel,a=this._data,o=this._SymbolCtor,s=r.disableAnimation,l=fo(t),u={disableAnimation:s},c=r.getSymbolPoint||function(f){return t.getItemLayout(f)};a||n.removeAll(),t.diff(a).add(function(f){var d=c(f);if(mi(t,d,f,r)){var h=new o(t,f,l,u);h.setPosition(d),t.setItemGraphicEl(f,h),n.add(h)}}).update(function(f,d){var h=a.getItemGraphicEl(d),p=c(f);if(!mi(t,p,f,r)){n.remove(h);return}var v=t.getItemVisual(f,"symbol")||"circle",m=h&&h.getSymbolType&&h.getSymbolType();if(!h||m&&m!==v)n.remove(h),h=new o(t,f,l,u),h.setPosition(p);else{h.updateData(t,f,l,u);var _={x:p[0],y:p[1]};s?h.attr(_):nn(h,_,i)}n.add(h),t.setItemGraphicEl(f,h)}).remove(function(f){var d=a.getItemGraphicEl(f);d&&d.fadeOut(function(){n.remove(d)},i)}).execute(),this._getSymbolPoint=c,this._data=t},e.prototype.updateLayout=function(){var t=this,r=this._data;r&&r.eachItemGraphicEl(function(n,i){var a=t._getSymbolPoint(i);n.setPosition(a),n.markRedraw()})},e.prototype.incrementalPrepareUpdate=function(t){this._seriesScope=fo(t),this._data=null,this.group.removeAll()},e.prototype.incrementalUpdate=function(t,r,n){this._progressiveEls=[],n=co(n);function i(l){l.isGroup||(l.incremental=!0,l.ensureState("emphasis").hoverLayer=!0)}for(var a=t.start;a<t.end;a++){var o=r.getItemLayout(a);if(mi(r,o,a,n)){var s=new this._SymbolCtor(r,a,this._seriesScope);s.traverse(i),s.setPosition(o),this.group.add(s),r.setItemGraphicEl(a,s),this._progressiveEls.push(s)}}},e.prototype.eachRendered=function(t){su(this._progressiveEls||this.group,t)},e.prototype.remove=function(t){var r=this.group,n=this._data;n&&t?n.eachItemGraphicEl(function(i){i.fadeOut(function(){r.remove(i)},n.hostModel)}):r.removeAll()},e}();const Sc=Ec;var Ac=function(e,t){if(t==="all")return{type:"all",title:e.getLocaleModel().get(["legend","selector","all"])};if(t==="inverse")return{type:"inverse",title:e.getLocaleModel().get(["legend","selector","inverse"])}},bc=function(e){st(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r.layoutMode={type:"box",ignoreSize:!0},r}return t.prototype.init=function(r,n,i){this.mergeDefaultAndTheme(r,i),r.selected=r.selected||{},this._updateSelector(r)},t.prototype.mergeOption=function(r,n){e.prototype.mergeOption.call(this,r,n),this._updateSelector(r)},t.prototype._updateSelector=function(r){var n=r.selector,i=this.ecModel;n===!0&&(n=r.selector=["all","inverse"]),ze(n)&&he(n,function(a,o){Gn(a)&&(a={type:a}),n[o]=mt(a,Ac(i,a.type))})},t.prototype.optionUpdated=function(){this._updateData(this.ecModel);var r=this._data;if(r[0]&&this.get("selectedMode")==="single"){for(var n=!1,i=0;i<r.length;i++){var a=r[i].get("name");if(this.isSelected(a)){this.select(a),n=!0;break}}!n&&this.select(r[0].get("name"))}},t.prototype._updateData=function(r){var n=[],i=[];r.eachRawSeries(function(l){var u=l.name;i.push(u);var c;if(l.legendVisualProvider){var f=l.legendVisualProvider,d=f.getAllNames();r.isSeriesFiltered(l)||(i=i.concat(d)),d.length?n=n.concat(d):c=!0}else c=!0;c&&lu(l)&&n.push(l.name)}),this._availableNames=i;var a=this.get("data")||n,o=Yr(),s=ot(a,function(l){return(Gn(l)||ya(l))&&(l={name:l}),o.get(l.name)?null:(o.set(l.name,!0),new Fn(l,this,this.ecModel))},this);this._data=ji(s,function(l){return!!l})},t.prototype.getData=function(){return this._data},t.prototype.select=function(r){var n=this.option.selected,i=this.get("selectedMode");if(i==="single"){var a=this._data;he(a,function(o){n[o.get("name")]=!1})}n[r]=!0},t.prototype.unSelect=function(r){this.get("selectedMode")!=="single"&&(this.option.selected[r]=!1)},t.prototype.toggleSelected=function(r){var n=this.option.selected;n.hasOwnProperty(r)||(n[r]=!0),this[n[r]?"unSelect":"select"](r)},t.prototype.allSelect=function(){var r=this._data,n=this.option.selected;he(r,function(i){n[i.get("name",!0)]=!0})},t.prototype.inverseSelect=function(){var r=this._data,n=this.option.selected;he(r,function(i){var a=i.get("name",!0);n.hasOwnProperty(a)||(n[a]=!0),n[a]=!n[a]})},t.prototype.isSelected=function(r){var n=this.option.selected;return!(n.hasOwnProperty(r)&&!n[r])&&Ms(this._availableNames,r)>=0},t.prototype.getOrient=function(){return this.get("orient")==="vertical"?{index:1,name:"vertical"}:{index:0,name:"horizontal"}},t.type="legend.plain",t.dependencies=["series"],t.defaultOption={z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,symbolRotate:"inherit",symbolKeepAspect:!0,inactiveColor:"#ccc",inactiveBorderColor:"#ccc",inactiveBorderWidth:"auto",itemStyle:{color:"inherit",opacity:"inherit",borderColor:"inherit",borderWidth:"auto",borderCap:"inherit",borderJoin:"inherit",borderDashOffset:"inherit",borderMiterLimit:"inherit"},lineStyle:{width:"auto",color:"inherit",inactiveColor:"#ccc",inactiveWidth:2,opacity:"inherit",type:"inherit",cap:"inherit",join:"inherit",dashOffset:"inherit",miterLimit:"inherit"},textStyle:{color:"#333"},selectedMode:!0,selector:!1,selectorLabel:{show:!0,borderRadius:10,padding:[3,5,3,5],fontSize:12,fontFamily:"sans-serif",color:"#666",borderWidth:1,borderColor:"#666"},emphasis:{selectorLabel:{show:!0,color:"#eee",backgroundColor:"#666"}},selectorPosition:"auto",selectorItemGap:7,selectorButtonGap:10,tooltip:{show:!1}},t}(ti);const Ki=bc;var hr=Yt,$i=he,mn=Ir,wc=function(e){st(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r.newlineDisabled=!1,r}return t.prototype.init=function(){this.group.add(this._contentGroup=new mn),this.group.add(this._selectorGroup=new mn),this._isFirstRender=!0},t.prototype.getContentGroup=function(){return this._contentGroup},t.prototype.getSelectorGroup=function(){return this._selectorGroup},t.prototype.render=function(r,n,i){var a=this._isFirstRender;if(this._isFirstRender=!1,this.resetInner(),!!r.get("show",!0)){var o=r.get("align"),s=r.get("orient");(!o||o==="auto")&&(o=r.get("left")==="right"&&s==="vertical"?"right":"left");var l=r.get("selector",!0),u=r.get("selectorPosition",!0);l&&(!u||u==="auto")&&(u=s==="horizontal"?"end":"start"),this.renderInner(o,r,n,i,l,s,u);var c=r.getBoxLayoutParams(),f={width:i.getWidth(),height:i.getHeight()},d=r.get("padding"),h=Un(c,f,d),p=this.layoutInner(r,o,h,a,l,u),v=Un(Ge({width:p.width,height:p.height},c),f,d);this.group.x=v.x-p.x,this.group.y=v.y-p.y,this.group.markRedraw(),this.group.add(this._backgroundEl=_c(p,r))}},t.prototype.resetInner=function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl),this.getSelectorGroup().removeAll()},t.prototype.renderInner=function(r,n,i,a,o,s,l){var u=this.getContentGroup(),c=Yr(),f=n.get("selectedMode"),d=[];i.eachRawSeries(function(h){!h.get("legendHoverLink")&&d.push(h.id)}),$i(n.getData(),function(h,p){var v=h.get("name");if(!this.newlineDisabled&&(v===""||v===`
`)){var m=new mn;m.newline=!0,u.add(m);return}var _=i.getSeriesByName(v)[0];if(!c.get(v))if(_){var y=_.getData(),g=y.getVisual("legendLineStyle")||{},x=y.getVisual("legendIcon"),E=y.getVisual("style"),T=this._createItem(_,v,p,h,n,r,g,E,x,f,a);T.on("click",hr(ho,v,null,a,d)).on("mouseover",hr(Qi,_.name,null,a,d)).on("mouseout",hr(Ji,_.name,null,a,d)),c.set(v,!0)}else i.eachRawSeries(function(S){if(!c.get(v)&&S.legendVisualProvider){var A=S.legendVisualProvider;if(!A.containName(v))return;var w=A.indexOfName(v),D=A.getItemVisual(w,"style"),R=A.getItemVisual(w,"legendIcon"),C=xa(D.fill);C&&C[3]===0&&(C[3]=.2,D=Dr(Dr({},D),{fill:uu(C,"rgba")}));var P=this._createItem(S,v,p,h,n,r,{},D,R,f,a);P.on("click",hr(ho,null,v,a,d)).on("mouseover",hr(Qi,null,v,a,d)).on("mouseout",hr(Ji,null,v,a,d)),c.set(v,!0)}},this)},this),o&&this._createSelector(o,n,a,s,l)},t.prototype._createSelector=function(r,n,i,a,o){var s=this.getSelectorGroup();$i(r,function(u){var c=u.type,f=new gt({style:{x:0,y:0,align:"center",verticalAlign:"middle"},onclick:function(){i.dispatchAction({type:c==="all"?"legendAllSelect":"legendInverseSelect"})}});s.add(f);var d=n.getModel("selectorLabel"),h=n.getModel(["emphasis","selectorLabel"]);ga(f,{normal:d,emphasis:h},{defaultText:u.title}),Ka(f)})},t.prototype._createItem=function(r,n,i,a,o,s,l,u,c,f,d){var h=r.visualDrawType,p=o.get("itemWidth"),v=o.get("itemHeight"),m=o.isSelected(n),_=a.get("symbolRotate"),y=a.get("symbolKeepAspect"),g=a.get("icon");c=g||c||"roundRect";var x=Cc(c,a,l,u,h,m,d),E=new mn,T=a.getModel("textStyle");if(Kr(r.getLegendIcon)&&(!g||g==="inherit"))E.add(r.getLegendIcon({itemWidth:p,itemHeight:v,icon:c,iconRotate:_,itemStyle:x.itemStyle,lineStyle:x.lineStyle,symbolKeepAspect:y}));else{var S=g==="inherit"&&r.getData().getVisual("symbol")?_==="inherit"?r.getData().getVisual("symbolRotate"):_:0;E.add(Rc({itemWidth:p,itemHeight:v,icon:c,iconRotate:S,itemStyle:x.itemStyle,lineStyle:x.lineStyle,symbolKeepAspect:y}))}var A=s==="left"?p+5:-5,w=s,D=o.get("formatter"),R=n;Gn(D)&&D?R=D.replace("{name}",n??""):Kr(D)&&(R=D(n));var C=a.get("inactiveColor");E.add(new gt({style:nr(T,{text:R,x:A,y:v/2,fill:m?T.getTextColor():C,align:w,verticalAlign:"middle"})}));var P=new ir({shape:E.getBoundingRect(),invisible:!0}),L=a.getModel("tooltip");return L.get("show")&&cu({el:P,componentModel:o,itemName:n,itemTooltipOption:L.option}),E.add(P),E.eachChild(function(I){I.silent=!0}),P.silent=!f,this.getContentGroup().add(E),Ka(E),E.__legendDataIndex=i,E},t.prototype.layoutInner=function(r,n,i,a,o,s){var l=this.getContentGroup(),u=this.getSelectorGroup();$r(r.get("orient"),l,r.get("itemGap"),i.width,i.height);var c=l.getBoundingRect(),f=[-c.x,-c.y];if(u.markRedraw(),l.markRedraw(),o){$r("horizontal",u,r.get("selectorItemGap",!0));var d=u.getBoundingRect(),h=[-d.x,-d.y],p=r.get("selectorButtonGap",!0),v=r.getOrient().index,m=v===0?"width":"height",_=v===0?"height":"width",y=v===0?"y":"x";s==="end"?h[v]+=c[m]+p:f[v]+=d[m]+p,h[1-v]+=c[_]/2-d[_]/2,u.x=h[0],u.y=h[1],l.x=f[0],l.y=f[1];var g={x:0,y:0};return g[m]=c[m]+p+d[m],g[_]=Math.max(c[_],d[_]),g[y]=Math.min(0,d[y]+h[1-v]),g}else return l.x=f[0],l.y=f[1],this.group.getBoundingRect()},t.prototype.remove=function(){this.getContentGroup().removeAll(),this._isFirstRender=!0},t.type="legend.plain",t}(pa);function Cc(e,t,r,n,i,a,o){function s(m,_){m.lineWidth==="auto"&&(m.lineWidth=_.lineWidth>0?2:0),$i(m,function(y,g){m[g]==="inherit"&&(m[g]=_[g])})}var l=t.getModel("itemStyle"),u=l.getItemStyle(),c=e.lastIndexOf("empty",0)===0?"fill":"stroke",f=l.getShallow("decal");u.decal=!f||f==="inherit"?n.decal:fu(f,o),u.fill==="inherit"&&(u.fill=n[i]),u.stroke==="inherit"&&(u.stroke=n[c]),u.opacity==="inherit"&&(u.opacity=(i==="fill"?n:r).opacity),s(u,n);var d=t.getModel("lineStyle"),h=d.getLineStyle();if(s(h,r),u.fill==="auto"&&(u.fill=n.fill),u.stroke==="auto"&&(u.stroke=n.fill),h.stroke==="auto"&&(h.stroke=n.fill),!a){var p=t.get("inactiveBorderWidth"),v=u[c];u.lineWidth=p==="auto"?n.lineWidth>0&&v?2:0:u.lineWidth,u.fill=t.get("inactiveColor"),u.stroke=t.get("inactiveBorderColor"),h.stroke=d.get("inactiveColor"),h.lineWidth=d.get("inactiveWidth")}return{itemStyle:u,lineStyle:h}}function Rc(e){var t=e.icon||"roundRect",r=Hn(t,0,0,e.itemWidth,e.itemHeight,e.itemStyle.fill,e.symbolKeepAspect);return r.setStyle(e.itemStyle),r.rotation=(e.iconRotate||0)*Math.PI/180,r.setOrigin([e.itemWidth/2,e.itemHeight/2]),t.indexOf("empty")>-1&&(r.style.stroke=r.style.fill,r.style.fill="#fff",r.style.lineWidth=2),r}function ho(e,t,r,n){Ji(e,t,r,n),r.dispatchAction({type:"legendToggleSelect",name:e??t}),Qi(e,t,r,n)}function Vs(e){for(var t=e.getZr().storage.getDisplayList(),r,n=0,i=t.length;n<i&&!(r=t[n].states.emphasis);)n++;return r&&r.hoverLayer}function Qi(e,t,r,n){Vs(r)||r.dispatchAction({type:"highlight",seriesName:e,name:t,excludeSeriesId:n})}function Ji(e,t,r,n){Vs(r)||r.dispatchAction({type:"downplay",seriesName:e,name:t,excludeSeriesId:n})}const ks=wc;function Dc(e){var t=e.findComponents({mainType:"legend"});t&&t.length&&e.filterSeries(function(r){for(var n=0;n<t.length;n++)if(!t[n].isSelected(r.name))return!1;return!0})}function Hr(e,t,r){var n={},i=e==="toggleSelected",a;return r.eachComponent("legend",function(o){i&&a!=null?o[a?"select":"unSelect"](t.name):e==="allSelect"||e==="inverseSelect"?o[e]():(o[e](t.name),a=o.isSelected(t.name));var s=o.getData();he(s,function(l){var u=l.get("name");if(!(u===`
`||u==="")){var c=o.isSelected(u);n.hasOwnProperty(u)?n[u]=n[u]&&c:n[u]=c}})}),e==="allSelect"||e==="inverseSelect"?{selected:n}:{name:t.name,selected:n}}function Lc(e){e.registerAction("legendToggleSelect","legendselectchanged",Yt(Hr,"toggleSelected")),e.registerAction("legendAllSelect","legendselectall",Yt(Hr,"allSelect")),e.registerAction("legendInverseSelect","legendinverseselect",Yt(Hr,"inverseSelect")),e.registerAction("legendSelect","legendselected",Yt(Hr,"select")),e.registerAction("legendUnSelect","legendunselected",Yt(Hr,"unSelect"))}function Ws(e){e.registerComponentModel(Ki),e.registerComponentView(ks),e.registerProcessor(e.PRIORITY.PROCESSOR.SERIES_FILTER,Dc),e.registerSubTypeDefaulter("legend",function(){return"plain"}),Lc(e)}var Mc=function(e){st(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r}return t.prototype.setScrollDataIndex=function(r){this.option.scrollDataIndex=r},t.prototype.init=function(r,n,i){var a=hu(r);e.prototype.init.call(this,r,n,i),vo(this,r,a)},t.prototype.mergeOption=function(r,n){e.prototype.mergeOption.call(this,r,n),vo(this,this.option,r)},t.type="legend.scroll",t.defaultOption=du(Ki.defaultOption,{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:"end",pageFormatter:"{current}/{total}",pageIcons:{horizontal:["M0,0L12,-10L12,10z","M0,0L-12,-10L-12,10z"],vertical:["M0,0L20,0L10,-20z","M0,0L20,0L10,20z"]},pageIconColor:"#2f4554",pageIconInactiveColor:"#aaa",pageIconSize:15,pageTextStyle:{color:"#333"},animationDurationUpdate:800}),t}(Ki);function vo(e,t,r){var n=e.getOrient(),i=[1,1];i[n.index]=0,vu(t,r,{type:"box",ignoreSize:!!i})}const Pc=Mc;var po=Ir,_i=["width","height"],gi=["x","y"],Nc=function(e){st(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r.newlineDisabled=!0,r._currentIndex=0,r}return t.prototype.init=function(){e.prototype.init.call(this),this.group.add(this._containerGroup=new po),this._containerGroup.add(this.getContentGroup()),this.group.add(this._controllerGroup=new po)},t.prototype.resetInner=function(){e.prototype.resetInner.call(this),this._controllerGroup.removeAll(),this._containerGroup.removeClipPath(),this._containerGroup.__rectSize=null},t.prototype.renderInner=function(r,n,i,a,o,s,l){var u=this;e.prototype.renderInner.call(this,r,n,i,a,o,s,l);var c=this._controllerGroup,f=n.get("pageIconSize",!0),d=ze(f)?f:[f,f];p("pagePrev",0);var h=n.getModel("pageTextStyle");c.add(new gt({name:"pageText",style:{text:"xx/xx",fill:h.getTextColor(),font:h.getFont(),verticalAlign:"middle",align:"center"},silent:!0})),p("pageNext",1);function p(v,m){var _=v+"DataIndex",y=pu(n.get("pageIcons",!0)[n.getOrient().name][m],{onclick:mu(u._pageGo,u,_,n,a)},{x:-d[0]/2,y:-d[1]/2,width:d[0],height:d[1]});y.name=v,c.add(y)}},t.prototype.layoutInner=function(r,n,i,a,o,s){var l=this.getSelectorGroup(),u=r.getOrient().index,c=_i[u],f=gi[u],d=_i[1-u],h=gi[1-u];o&&$r("horizontal",l,r.get("selectorItemGap",!0));var p=r.get("selectorButtonGap",!0),v=l.getBoundingRect(),m=[-v.x,-v.y],_=Ps(i);o&&(_[c]=i[c]-v[c]-p);var y=this._layoutContentAndController(r,a,_,u,c,d,h,f);if(o){if(s==="end")m[u]+=y[c]+p;else{var g=v[c]+p;m[u]-=g,y[f]-=g}y[c]+=v[c]+p,m[1-u]+=y[h]+y[d]/2-v[d]/2,y[d]=Math.max(y[d],v[d]),y[h]=Math.min(y[h],v[h]+m[1-u]),l.x=m[0],l.y=m[1],l.markRedraw()}return y},t.prototype._layoutContentAndController=function(r,n,i,a,o,s,l,u){var c=this.getContentGroup(),f=this._containerGroup,d=this._controllerGroup;$r(r.get("orient"),c,r.get("itemGap"),a?i.width:null,a?null:i.height),$r("horizontal",d,r.get("pageButtonItemGap",!0));var h=c.getBoundingRect(),p=d.getBoundingRect(),v=this._showController=h[o]>i[o],m=[-h.x,-h.y];n||(m[a]=c[u]);var _=[0,0],y=[-p.x,-p.y],g=Cs(r.get("pageButtonGap",!0),r.get("itemGap",!0));if(v){var x=r.get("pageButtonPosition",!0);x==="end"?y[a]+=i[o]-p[o]:_[a]+=p[o]+g}y[1-a]+=h[s]/2-p[s]/2,c.setPosition(m),f.setPosition(_),d.setPosition(y);var E={x:0,y:0};if(E[o]=v?i[o]:h[o],E[s]=Math.max(h[s],p[s]),E[l]=Math.min(0,p[l]+y[1-a]),f.__rectSize=i[o],v){var T={x:0,y:0};T[o]=Math.max(i[o]-p[o]-g,0),T[s]=E[s],f.setClipPath(new ir({shape:T})),f.__rectSize=T[o]}else d.eachChild(function(A){A.attr({invisible:!0,silent:!0})});var S=this._getPageInfo(r);return S.pageIndex!=null&&nn(c,{x:S.contentPosition[0],y:S.contentPosition[1]},v?r:null),this._updatePageInfoView(r,S),E},t.prototype._pageGo=function(r,n,i){var a=this._getPageInfo(n)[r];a!=null&&i.dispatchAction({type:"legendScroll",scrollDataIndex:a,legendId:n.id})},t.prototype._updatePageInfoView=function(r,n){var i=this._controllerGroup;he(["pagePrev","pageNext"],function(c){var f=c+"DataIndex",d=n[f]!=null,h=i.childOfName(c);h&&(h.setStyle("fill",d?r.get("pageIconColor",!0):r.get("pageIconInactiveColor",!0)),h.cursor=d?"pointer":"default")});var a=i.childOfName("pageText"),o=r.get("pageFormatter"),s=n.pageIndex,l=s!=null?s+1:0,u=n.pageCount;a&&o&&a.setStyle("text",Gn(o)?o.replace("{current}",l==null?"":l+"").replace("{total}",u==null?"":u+""):o({current:l,total:u}))},t.prototype._getPageInfo=function(r){var n=r.get("scrollDataIndex",!0),i=this.getContentGroup(),a=this._containerGroup.__rectSize,o=r.getOrient().index,s=_i[o],l=gi[o],u=this._findTargetItemIndex(n),c=i.children(),f=c[u],d=c.length,h=d?1:0,p={contentPosition:[i.x,i.y],pageCount:h,pageIndex:h-1,pagePrevDataIndex:null,pageNextDataIndex:null};if(!f)return p;var v=x(f);p.contentPosition[o]=-v.s;for(var m=u+1,_=v,y=v,g=null;m<=d;++m)g=x(c[m]),(!g&&y.e>_.s+a||g&&!E(g,_.s))&&(y.i>_.i?_=y:_=g,_&&(p.pageNextDataIndex==null&&(p.pageNextDataIndex=_.i),++p.pageCount)),y=g;for(var m=u-1,_=v,y=v,g=null;m>=-1;--m)g=x(c[m]),(!g||!E(y,g.s))&&_.i<y.i&&(y=_,p.pagePrevDataIndex==null&&(p.pagePrevDataIndex=_.i),++p.pageCount,++p.pageIndex),_=g;return p;function x(T){if(T){var S=T.getBoundingRect(),A=S[l]+T[l];return{s:A,e:A+S[s],i:T.__legendDataIndex}}}function E(T,S){return T.e>=S&&T.s<=S+a}},t.prototype._findTargetItemIndex=function(r){if(!this._showController)return 0;var n,i=this.getContentGroup(),a;return i.eachChild(function(o,s){var l=o.__legendDataIndex;a==null&&l!=null&&(a=s),l===r&&(n=s)}),n??a},t.type="legend.scroll",t}(ks);const Ic=Nc;function Oc(e){e.registerAction("legendScroll","legendscroll",function(t,r){var n=t.scrollDataIndex;n!=null&&r.eachComponent({mainType:"legend",subType:"scroll",query:t},function(i){i.setScrollDataIndex(n)})})}function Bc(e){ft(Ws),e.registerComponentModel(Pc),e.registerComponentView(Ic),Oc(e)}function Xs(e){ft(Ws),ft(Bc)}var Fc=function(e){st(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r.hasSymbolVisual=!0,r}return t.prototype.getInitialData=function(r){return _u(null,this,{useEncodeDefaulter:!0})},t.prototype.getLegendIcon=function(r){var n=new Ir,i=Hn("line",0,r.itemHeight/2,r.itemWidth,0,r.lineStyle.stroke,!1);n.add(i),i.setStyle(r.lineStyle);var a=this.getData().getVisual("symbol"),o=this.getData().getVisual("symbolRotate"),s=a==="none"?"circle":a,l=r.itemHeight*.8,u=Hn(s,(r.itemWidth-l)/2,(r.itemHeight-l)/2,l,l,r.itemStyle.fill);n.add(u),u.setStyle(r.itemStyle);var c=r.iconRotate==="inherit"?o:r.iconRotate||0;return u.rotation=c*Math.PI/180,u.setOrigin([r.itemWidth/2,r.itemHeight/2]),s.indexOf("empty")>-1&&(u.style.stroke=u.style.fill,u.style.fill="#fff",u.style.lineWidth=2),n},t.type="series.line",t.dependencies=["grid","polar"],t.defaultOption={z:3,coordinateSystem:"cartesian2d",legendHoverLink:!0,clip:!0,label:{position:"top"},endLabel:{show:!1,valueAnimation:!0,distance:8},lineStyle:{width:2,type:"solid"},emphasis:{scale:!0},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0,universalTransition:{divideShape:"clone"},triggerLineEvent:!1},t}(Ns);const Uc=Fc;function qs(e,t,r){var n=e.getBaseAxis(),i=e.getOtherAxis(n),a=Hc(i,r),o=n.dim,s=i.dim,l=t.mapDimension(s),u=t.mapDimension(o),c=s==="x"||s==="radius"?1:0,f=ot(e.dimensions,function(p){return t.mapDimension(p)}),d=!1,h=t.getCalculationInfo("stackResultDimension");return rn(t,f[0])&&(d=!0,f[0]=h),rn(t,f[1])&&(d=!0,f[1]=h),{dataDimsForPoint:f,valueStart:a,valueAxisDim:s,baseAxisDim:o,stacked:!!d,valueDim:l,baseDim:u,baseDataOffset:c,stackedOverDimension:t.getCalculationInfo("stackedOverDimension")}}function Hc(e,t){var r=0,n=e.scale.getExtent();return t==="start"?r=n[0]:t==="end"?r=n[1]:ya(t)&&!isNaN(t)?r=t:n[0]>0?r=n[0]:n[1]<0&&(r=n[1]),r}function js(e,t,r,n){var i=NaN;e.stacked&&(i=r.get(r.getCalculationInfo("stackedOverDimension"),n)),isNaN(i)&&(i=e.valueStart);var a=e.baseDataOffset,o=[];return o[a]=r.get(e.baseDim,n),o[1-a]=i,t.dataToPoint(o)}function Gc(e,t){var r=[];return t.diff(e).add(function(n){r.push({cmd:"+",idx:n})}).update(function(n,i){r.push({cmd:"=",idx:i,idx1:n})}).remove(function(n){r.push({cmd:"-",idx:n})}).execute(),r}function zc(e,t,r,n,i,a,o,s){for(var l=Gc(e,t),u=[],c=[],f=[],d=[],h=[],p=[],v=[],m=qs(i,t,o),_=e.getLayout("points")||[],y=t.getLayout("points")||[],g=0;g<l.length;g++){var x=l[g],E=!0,T=void 0,S=void 0;switch(x.cmd){case"=":T=x.idx*2,S=x.idx1*2;var A=_[T],w=_[T+1],D=y[S],R=y[S+1];(isNaN(A)||isNaN(w))&&(A=D,w=R),u.push(A,w),c.push(D,R),f.push(r[T],r[T+1]),d.push(n[S],n[S+1]),v.push(t.getRawIndex(x.idx1));break;case"+":var C=x.idx,P=m.dataDimsForPoint,L=i.dataToPoint([t.get(P[0],C),t.get(P[1],C)]);S=C*2,u.push(L[0],L[1]),c.push(y[S],y[S+1]);var I=js(m,i,t,C);f.push(I[0],I[1]),d.push(n[S],n[S+1]),v.push(t.getRawIndex(C));break;case"-":E=!1}E&&(h.push(x),p.push(p.length))}p.sort(function(Ce,ue){return v[Ce]-v[ue]});for(var O=u.length,H=Ar(O),G=Ar(O),q=Ar(O),ae=Ar(O),te=[],g=0;g<p.length;g++){var _e=p[g],oe=g*2,fe=_e*2;H[oe]=u[fe],H[oe+1]=u[fe+1],G[oe]=c[fe],G[oe+1]=c[fe+1],q[oe]=f[fe],q[oe+1]=f[fe+1],ae[oe]=d[fe],ae[oe+1]=d[fe+1],te[g]=h[_e]}return{current:H,next:G,stackedOnCurrent:q,stackedOnNext:ae,status:te}}var Pt=Math.min,Nt=Math.max;function er(e,t){return isNaN(e)||isNaN(t)}function ea(e,t,r,n,i,a,o,s,l){for(var u,c,f,d,h,p,v=r,m=0;m<n;m++){var _=t[v*2],y=t[v*2+1];if(v>=i||v<0)break;if(er(_,y)){if(l){v+=a;continue}break}if(v===r)e[a>0?"moveTo":"lineTo"](_,y),f=_,d=y;else{var g=_-u,x=y-c;if(g*g+x*x<.5){v+=a;continue}if(o>0){for(var E=v+a,T=t[E*2],S=t[E*2+1];T===_&&S===y&&m<n;)m++,E+=a,v+=a,T=t[E*2],S=t[E*2+1],_=t[v*2],y=t[v*2+1],g=_-u,x=y-c;var A=m+1;if(l)for(;er(T,S)&&A<n;)A++,E+=a,T=t[E*2],S=t[E*2+1];var w=.5,D=0,R=0,C=void 0,P=void 0;if(A>=n||er(T,S))h=_,p=y;else{D=T-u,R=S-c;var L=_-u,I=T-_,O=y-c,H=S-y,G=void 0,q=void 0;if(s==="x"){G=Math.abs(L),q=Math.abs(I);var ae=D>0?1:-1;h=_-ae*G*o,p=y,C=_+ae*q*o,P=y}else if(s==="y"){G=Math.abs(O),q=Math.abs(H);var te=R>0?1:-1;h=_,p=y-te*G*o,C=_,P=y+te*q*o}else G=Math.sqrt(L*L+O*O),q=Math.sqrt(I*I+H*H),w=q/(q+G),h=_-D*o*(1-w),p=y-R*o*(1-w),C=_+D*o*w,P=y+R*o*w,C=Pt(C,Nt(T,_)),P=Pt(P,Nt(S,y)),C=Nt(C,Pt(T,_)),P=Nt(P,Pt(S,y)),D=C-_,R=P-y,h=_-D*G/q,p=y-R*G/q,h=Pt(h,Nt(u,_)),p=Pt(p,Nt(c,y)),h=Nt(h,Pt(u,_)),p=Nt(p,Pt(c,y)),D=_-h,R=y-p,C=_+D*q/G,P=y+R*q/G}e.bezierCurveTo(f,d,h,p,_,y),f=C,d=P}else e.lineTo(_,y)}u=_,c=y,v+=a}return m}var Zs=function(){function e(){this.smooth=0,this.smoothConstraint=!0}return e}(),Vc=function(e){st(t,e);function t(r){var n=e.call(this,r)||this;return n.type="ec-polyline",n}return t.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},t.prototype.getDefaultShape=function(){return new Zs},t.prototype.buildPath=function(r,n){var i=n.points,a=0,o=i.length/2;if(n.connectNulls){for(;o>0&&er(i[o*2-2],i[o*2-1]);o--);for(;a<o&&er(i[a*2],i[a*2+1]);a++);}for(;a<o;)a+=ea(r,i,a,o,o,1,n.smooth,n.smoothMonotone,n.connectNulls)+1},t.prototype.getPointOn=function(r,n){this.path||(this.createPathProxy(),this.buildPath(this.path,this.shape));for(var i=this.path,a=i.data,o=Is.CMD,s,l,u=n==="x",c=[],f=0;f<a.length;){var d=a[f++],h=void 0,p=void 0,v=void 0,m=void 0,_=void 0,y=void 0,g=void 0;switch(d){case o.M:s=a[f++],l=a[f++];break;case o.L:if(h=a[f++],p=a[f++],g=u?(r-s)/(h-s):(r-l)/(p-l),g<=1&&g>=0){var x=u?(p-l)*g+l:(h-s)*g+s;return u?[r,x]:[x,r]}s=h,l=p;break;case o.C:h=a[f++],p=a[f++],v=a[f++],m=a[f++],_=a[f++],y=a[f++];var E=u?$a(s,h,v,_,r,c):$a(l,p,m,y,r,c);if(E>0)for(var T=0;T<E;T++){var S=c[T];if(S<=1&&S>=0){var x=u?Qa(l,p,m,y,S):Qa(s,h,v,_,S);return u?[r,x]:[x,r]}}s=_,l=y;break}}},t}(ar),kc=function(e){st(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t}(Zs),Wc=function(e){st(t,e);function t(r){var n=e.call(this,r)||this;return n.type="ec-polygon",n}return t.prototype.getDefaultShape=function(){return new kc},t.prototype.buildPath=function(r,n){var i=n.points,a=n.stackedOnPoints,o=0,s=i.length/2,l=n.smoothMonotone;if(n.connectNulls){for(;s>0&&er(i[s*2-2],i[s*2-1]);s--);for(;o<s&&er(i[o*2],i[o*2+1]);o++);}for(;o<s;){var u=ea(r,i,o,s,s,1,n.smooth,l,n.connectNulls);ea(r,a,o+u-1,u,s,-1,n.stackedOnSmooth,l,n.connectNulls),o+=u+1,r.closePath()}},t}(ar);function mo(e,t){if(e.length===t.length){for(var r=0;r<e.length;r++)if(e[r]!==t[r])return;return!0}}function _o(e){for(var t=1/0,r=1/0,n=-1/0,i=-1/0,a=0;a<e.length;){var o=e[a++],s=e[a++];isNaN(o)||(t=Math.min(o,t),n=Math.max(o,n)),isNaN(s)||(r=Math.min(s,r),i=Math.max(s,i))}return[[t,r],[n,i]]}function go(e,t){var r=_o(e),n=r[0],i=r[1],a=_o(t),o=a[0],s=a[1];return Math.max(Math.abs(n[0]-o[0]),Math.abs(n[1]-o[1]),Math.abs(i[0]-s[0]),Math.abs(i[1]-s[1]))}function yo(e){return ya(e)?e:e?.5:0}function Xc(e,t,r){if(!r.valueDim)return[];for(var n=t.count(),i=Ar(n*2),a=0;a<n;a++){var o=js(r,e,t,a);i[a*2]=o[0],i[a*2+1]=o[1]}return i}function It(e,t,r,n){var i=t.getBaseAxis(),a=i.dim==="x"||i.dim==="radius"?0:1,o=[],s=0,l=[],u=[],c=[],f=[];if(n){for(s=0;s<e.length;s+=2)!isNaN(e[s])&&!isNaN(e[s+1])&&f.push(e[s],e[s+1]);e=f}for(s=0;s<e.length-2;s+=2)switch(c[0]=e[s+2],c[1]=e[s+3],u[0]=e[s],u[1]=e[s+1],o.push(u[0],u[1]),r){case"end":l[a]=c[a],l[1-a]=u[1-a],o.push(l[0],l[1]);break;case"middle":var d=(u[a]+c[a])/2,h=[];l[a]=h[a]=d,l[1-a]=u[1-a],h[1-a]=c[1-a],o.push(l[0],l[1]),o.push(h[0],h[1]);break;default:l[a]=u[a],l[1-a]=c[1-a],o.push(l[0],l[1])}return o.push(e[s++],e[s++]),o}function qc(e,t){var r=[],n=e.length,i,a;function o(c,f,d){var h=c.coord,p=(d-h)/(f.coord-h),v=bu(p,[c.color,f.color]);return{coord:d,color:v}}for(var s=0;s<n;s++){var l=e[s],u=l.coord;if(u<0)i=l;else if(u>t){a?r.push(o(a,l,t)):i&&r.push(o(i,l,0),o(i,l,t));break}else i&&(r.push(o(i,l,0)),i=null),r.push(l),a=l}return r}function jc(e,t,r){var n=e.getVisual("visualMeta");if(!(!n||!n.length||!e.count())&&t.type==="cartesian2d"){for(var i,a,o=n.length-1;o>=0;o--){var s=e.getDimensionInfo(n[o].dimension);if(i=s&&s.coordDim,i==="x"||i==="y"){a=n[o];break}}if(a){var l=t.getAxis(i),u=ot(a.stops,function(g){return{coord:l.toGlobalCoord(l.dataToCoord(g.value)),color:g.color}}),c=u.length,f=a.outerColors.slice();c&&u[0].coord>u[c-1].coord&&(u.reverse(),f.reverse());var d=qc(u,i==="x"?r.getWidth():r.getHeight()),h=d.length;if(!h&&c)return u[0].coord<0?f[1]?f[1]:u[c-1].color:f[0]?f[0]:u[0].color;var p=10,v=d[0].coord-p,m=d[h-1].coord+p,_=m-v;if(_<.001)return"transparent";he(d,function(g){g.offset=(g.coord-v)/_}),d.push({offset:h?d[h-1].offset:.5,color:f[1]||"transparent"}),d.unshift({offset:h?d[0].offset:.5,color:f[0]||"transparent"});var y=new Tu(0,0,0,0,d,!0);return y[i]=v,y[i+"2"]=m,y}}}function Zc(e,t,r){var n=e.get("showAllSymbol"),i=n==="auto";if(!(n&&!i)){var a=r.getAxesByScale("ordinal")[0];if(a&&!(i&&Yc(a,t))){var o=t.mapDimension(a.dim),s={};return he(a.getViewLabels(),function(l){var u=a.scale.getRawOrdinalNumber(l.tickValue);s[u]=1}),function(l){return!s.hasOwnProperty(t.get(o,l))}}}}function Yc(e,t){var r=e.getExtent(),n=Math.abs(r[1]-r[0])/e.scale.count();isNaN(n)&&(n=0);for(var i=t.count(),a=Math.max(1,Math.round(i/5)),o=0;o<i;o+=a)if(wa.getSymbolSize(t,o)[e.isHorizontal()?1:0]*1.5>n)return!1;return!0}function Kc(e,t){return isNaN(e)||isNaN(t)}function $c(e){for(var t=e.length/2;t>0&&Kc(e[t*2-2],e[t*2-1]);t--);return t-1}function xo(e,t){return[e[t*2],e[t*2+1]]}function Qc(e,t,r){for(var n=e.length/2,i=r==="x"?0:1,a,o,s=0,l=-1,u=0;u<n;u++)if(o=e[u*2+i],!(isNaN(o)||isNaN(e[u*2+1-i]))){if(u===0){a=o;continue}if(a<=t&&o>=t||a>=t&&o<=t){l=u;break}s=u,a=o}return{range:[s,l],t:(t-a)/(o-a)}}function Ys(e){if(e.get(["endLabel","show"]))return!0;for(var t=0;t<no.length;t++)if(e.get([no[t],"endLabel","show"]))return!0;return!1}function yi(e,t,r,n){if(Eu(t,"cartesian2d")){var i=n.getModel("endLabel"),a=i.get("valueAnimation"),o=n.getData(),s={lastFrameIndex:0},l=Ys(n)?function(h,p){e._endLabelOnDuring(h,p,o,s,a,i,t)}:null,u=t.getBaseAxis().isHorizontal(),c=Su(t,r,n,function(){var h=e._endLabel;h&&r&&s.originalX!=null&&h.attr({x:s.originalX,y:s.originalY})},l);if(!n.get("clip",!0)){var f=c.shape,d=Math.max(f.width,f.height);u?(f.y-=d,f.height+=d*2):(f.x-=d,f.width+=d*2)}return l&&l(1,c),c}else return Au(t,r,n)}function Jc(e,t){var r=t.getBaseAxis(),n=r.isHorizontal(),i=r.inverse,a=n?i?"right":"left":"center",o=n?"middle":i?"top":"bottom";return{normal:{align:e.get("align")||a,verticalAlign:e.get("verticalAlign")||o}}}var ef=function(e){st(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.init=function(){var r=new Ir,n=new Sc;this.group.add(n.group),this._symbolDraw=n,this._lineGroup=r},t.prototype.render=function(r,n,i){var a=this,o=r.coordinateSystem,s=this.group,l=r.getData(),u=r.getModel("lineStyle"),c=r.getModel("areaStyle"),f=l.getLayout("points")||[],d=o.type==="polar",h=this._coordSys,p=this._symbolDraw,v=this._polyline,m=this._polygon,_=this._lineGroup,y=r.get("animation"),g=!c.isEmpty(),x=c.get("origin"),E=qs(o,l,x),T=g&&Xc(o,l,E),S=r.get("showSymbol"),A=r.get("connectNulls"),w=S&&!d&&Zc(r,l,o),D=this._data;D&&D.eachItemGraphicEl(function(ue,xt){ue.__temp&&(s.remove(ue),D.setItemGraphicEl(xt,null))}),S||p.remove(),s.add(_);var R=d?!1:r.get("step"),C;o&&o.getArea&&r.get("clip",!0)&&(C=o.getArea(),C.width!=null?(C.x-=.1,C.y-=.1,C.width+=.2,C.height+=.2):C.r0&&(C.r0-=.5,C.r+=.5)),this._clipShapeForSymbol=C;var P=jc(l,o,i)||l.getVisual("style")[l.getVisual("drawType")];if(!(v&&h.type===o.type&&R===this._step))S&&p.updateData(l,{isIgnore:w,clipShape:C,disableAnimation:!0,getSymbolPoint:function(ue){return[f[ue*2],f[ue*2+1]]}}),y&&this._initSymbolLabelAnimation(l,o,C),R&&(f=It(f,o,R,A),T&&(T=It(T,o,R,A))),v=this._newPolyline(f),g?m=this._newPolygon(f,T):m&&(_.remove(m),m=this._polygon=null),d||this._initOrUpdateEndLabel(r,o,Ja(P)),_.setClipPath(yi(this,o,!0,r));else{g&&!m?m=this._newPolygon(f,T):m&&!g&&(_.remove(m),m=this._polygon=null),d||this._initOrUpdateEndLabel(r,o,Ja(P));var L=_.getClipPath();if(L){var I=yi(this,o,!1,r);ma(L,{shape:I.shape},r)}else _.setClipPath(yi(this,o,!0,r));S&&p.updateData(l,{isIgnore:w,clipShape:C,disableAnimation:!0,getSymbolPoint:function(ue){return[f[ue*2],f[ue*2+1]]}}),(!mo(this._stackedOnPoints,T)||!mo(this._points,f))&&(y?this._doUpdateAnimation(l,T,o,i,R,x,A):(R&&(f=It(f,o,R,A),T&&(T=It(T,o,R,A))),v.setShape({points:f}),m&&m.setShape({points:f,stackedOnPoints:T})))}var O=r.getModel("emphasis"),H=O.get("focus"),G=O.get("blurScope"),q=O.get("disabled");if(v.useStyle(Ge(u.getLineStyle(),{fill:"none",stroke:P,lineJoin:"bevel"})),eo(v,r,"lineStyle"),v.style.lineWidth>0&&r.get(["emphasis","lineStyle","width"])==="bolder"){var ae=v.getState("emphasis").style;ae.lineWidth=+v.style.lineWidth+1}Jt(v).seriesIndex=r.seriesIndex,qi(v,H,G,q);var te=yo(r.get("smooth")),_e=r.get("smoothMonotone");if(v.setShape({smooth:te,smoothMonotone:_e,connectNulls:A}),m){var oe=l.getCalculationInfo("stackedOnSeries"),fe=0;m.useStyle(Ge(c.getAreaStyle(),{fill:P,opacity:.7,lineJoin:"bevel",decal:l.getVisual("style").decal})),oe&&(fe=yo(oe.get("smooth"))),m.setShape({smooth:te,stackedOnSmooth:fe,smoothMonotone:_e,connectNulls:A}),eo(m,r,"areaStyle"),Jt(m).seriesIndex=r.seriesIndex,qi(m,H,G,q)}var Ce=function(ue){a._changePolyState(ue)};l.eachItemGraphicEl(function(ue){ue&&(ue.onHoverStateChange=Ce)}),this._polyline.onHoverStateChange=Ce,this._data=l,this._coordSys=o,this._stackedOnPoints=T,this._points=f,this._step=R,this._valueOrigin=x,r.get("triggerLineEvent")&&(this.packEventData(r,v),m&&this.packEventData(r,m))},t.prototype.packEventData=function(r,n){Jt(n).eventData={componentType:"series",componentSubType:"line",componentIndex:r.componentIndex,seriesIndex:r.seriesIndex,seriesName:r.name,seriesType:"line"}},t.prototype.highlight=function(r,n,i,a){var o=r.getData(),s=to(o,a);if(this._changePolyState("emphasis"),!(s instanceof Array)&&s!=null&&s>=0){var l=o.getLayout("points"),u=o.getItemGraphicEl(s);if(!u){var c=l[s*2],f=l[s*2+1];if(isNaN(c)||isNaN(f)||this._clipShapeForSymbol&&!this._clipShapeForSymbol.contain(c,f))return;var d=r.get("zlevel")||0,h=r.get("z")||0;u=new wa(o,s),u.x=c,u.y=f,u.setZ(d,h);var p=u.getSymbolPath().getTextContent();p&&(p.zlevel=d,p.z=h,p.z2=this._polyline.z2+1),u.__temp=!0,o.setItemGraphicEl(s,u),u.stopSymbolAnimation(!0),this.group.add(u)}u.highlight()}else Rn.prototype.highlight.call(this,r,n,i,a)},t.prototype.downplay=function(r,n,i,a){var o=r.getData(),s=to(o,a);if(this._changePolyState("normal"),s!=null&&s>=0){var l=o.getItemGraphicEl(s);l&&(l.__temp?(o.setItemGraphicEl(s,null),this.group.remove(l)):l.downplay())}else Rn.prototype.downplay.call(this,r,n,i,a)},t.prototype._changePolyState=function(r){var n=this._polygon;ro(this._polyline,r),n&&ro(n,r)},t.prototype._newPolyline=function(r){var n=this._polyline;return n&&this._lineGroup.remove(n),n=new Vc({shape:{points:r},segmentIgnoreThreshold:2,z2:10}),this._lineGroup.add(n),this._polyline=n,n},t.prototype._newPolygon=function(r,n){var i=this._polygon;return i&&this._lineGroup.remove(i),i=new Wc({shape:{points:r,stackedOnPoints:n},segmentIgnoreThreshold:2}),this._lineGroup.add(i),this._polygon=i,i},t.prototype._initSymbolLabelAnimation=function(r,n,i){var a,o,s=n.getBaseAxis(),l=s.inverse;n.type==="cartesian2d"?(a=s.isHorizontal(),o=!1):n.type==="polar"&&(a=s.dim==="angle",o=!0);var u=r.hostModel,c=u.get("animationDuration");Kr(c)&&(c=c(null));var f=u.get("animationDelay")||0,d=Kr(f)?f(null):f;r.eachItemGraphicEl(function(h,p){var v=h;if(v){var m=[h.x,h.y],_=void 0,y=void 0,g=void 0;if(i)if(o){var x=i,E=n.pointToCoord(m);a?(_=x.startAngle,y=x.endAngle,g=-E[1]/180*Math.PI):(_=x.r0,y=x.r,g=E[0])}else{var T=i;a?(_=T.x,y=T.x+T.width,g=h.x):(_=T.y+T.height,y=T.y,g=h.y)}var S=y===_?0:(g-_)/(y-_);l&&(S=1-S);var A=Kr(f)?f(p):c*S+d,w=v.getSymbolPath(),D=w.getTextContent();v.attr({scaleX:0,scaleY:0}),v.animateTo({scaleX:1,scaleY:1},{duration:200,setToFinal:!0,delay:A}),D&&D.animateFrom({style:{opacity:0}},{duration:300,delay:A}),w.disableLabelAnimation=!0}})},t.prototype._initOrUpdateEndLabel=function(r,n,i){var a=r.getModel("endLabel");if(Ys(r)){var o=r.getData(),s=this._polyline,l=o.getLayout("points");if(!l){s.removeTextContent(),this._endLabel=null;return}var u=this._endLabel;u||(u=this._endLabel=new gt({z2:200}),u.ignoreClip=!0,s.setTextContent(this._endLabel),s.disableLabelAnimation=!0);var c=$c(l);c>=0&&(ga(s,_a(r,"endLabel"),{inheritColor:i,labelFetcher:r,labelDataIndex:c,defaultText:function(f,d,h){return h!=null?gu(o,h):Ds(o,f)},enableTextSetter:!0},Jc(a,n)),s.textConfig.position=null)}else this._endLabel&&(this._polyline.removeTextContent(),this._endLabel=null)},t.prototype._endLabelOnDuring=function(r,n,i,a,o,s,l){var u=this._endLabel,c=this._polyline;if(u){r<1&&a.originalX==null&&(a.originalX=u.x,a.originalY=u.y);var f=i.getLayout("points"),d=i.hostModel,h=d.get("connectNulls"),p=s.get("precision"),v=s.get("distance")||0,m=l.getBaseAxis(),_=m.isHorizontal(),y=m.inverse,g=n.shape,x=y?_?g.x:g.y+g.height:_?g.x+g.width:g.y,E=(_?v:0)*(y?-1:1),T=(_?0:-v)*(y?-1:1),S=_?"x":"y",A=Qc(f,x,S),w=A.range,D=w[1]-w[0],R=void 0;if(D>=1){if(D>1&&!h){var C=xo(f,w[0]);u.attr({x:C[0]+E,y:C[1]+T}),o&&(R=d.getRawValue(w[0]))}else{var C=c.getPointOn(x,S);C&&u.attr({x:C[0]+E,y:C[1]+T});var P=d.getRawValue(w[0]),L=d.getRawValue(w[1]);o&&(R=yu(i,p,P,L,A.t))}a.lastFrameIndex=w[0]}else{var I=r===1||a.lastFrameIndex>0?w[0]:0,C=xo(f,I);o&&(R=d.getRawValue(I)),u.attr({x:C[0]+E,y:C[1]+T})}o&&xu(u).setLabelText(R)}},t.prototype._doUpdateAnimation=function(r,n,i,a,o,s,l){var u=this._polyline,c=this._polygon,f=r.hostModel,d=zc(this._data,r,this._stackedOnPoints,n,this._coordSys,i,this._valueOrigin),h=d.current,p=d.stackedOnCurrent,v=d.next,m=d.stackedOnNext;if(o&&(h=It(d.current,i,o,l),p=It(d.stackedOnCurrent,i,o,l),v=It(d.next,i,o,l),m=It(d.stackedOnNext,i,o,l)),go(h,v)>3e3||c&&go(p,m)>3e3){u.stopAnimation(),u.setShape({points:v}),c&&(c.stopAnimation(),c.setShape({points:v,stackedOnPoints:m}));return}u.shape.__points=d.current,u.shape.points=h;var _={shape:{points:v}};d.current!==h&&(_.shape.__points=d.next),u.stopAnimation(),nn(u,_,f),c&&(c.setShape({points:h,stackedOnPoints:p}),c.stopAnimation(),nn(c,{shape:{stackedOnPoints:m}},f),u.shape.points!==c.shape.points&&(c.shape.points=u.shape.points));for(var y=[],g=d.status,x=0;x<g.length;x++){var E=g[x].cmd;if(E==="="){var T=r.getItemGraphicEl(g[x].idx1);T&&y.push({el:T,ptIdx:x})}}u.animators&&u.animators.length&&u.animators[0].during(function(){c&&c.dirtyShape();for(var S=u.shape.__points,A=0;A<y.length;A++){var w=y[A].el,D=y[A].ptIdx*2;w.x=S[D],w.y=S[D+1],w.markRedraw()}})},t.prototype.remove=function(r){var n=this.group,i=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),i&&i.eachItemGraphicEl(function(a,o){a.__temp&&(n.remove(a),i.setItemGraphicEl(o,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._endLabel=this._data=null},t.type="line",t}(Rn);const tf=ef;function rf(e,t){return{seriesType:e,plan:wu(),reset:function(r){var n=r.getData(),i=r.coordinateSystem,a=r.pipelineContext,o=t||a.large;if(i){var s=ot(i.dimensions,function(h){return n.mapDimension(h)}).slice(0,2),l=s.length,u=n.getCalculationInfo("stackResultDimension");rn(n,s[0])&&(s[0]=u),rn(n,s[1])&&(s[1]=u);var c=n.getStore(),f=n.getDimensionIndex(s[0]),d=n.getDimensionIndex(s[1]);return l&&{progress:function(h,p){for(var v=h.end-h.start,m=o&&Ar(v*l),_=[],y=[],g=h.start,x=0;g<h.end;g++){var E=void 0;if(l===1){var T=c.get(f,g);E=i.dataToPoint(T,null,y)}else _[0]=c.get(f,g),_[1]=c.get(d,g),E=i.dataToPoint(_,null,y);o?(m[x++]=E[0],m[x++]=E[1]):p.setItemLayout(g,E.slice())}o&&p.setLayout("points",m)}}}}}}function nf(e){e.registerChartView(tf),e.registerSeriesModel(Uc),e.registerLayout(rf("line",!0)),e.registerVisual({seriesType:"line",reset:function(t){var r=t.getData(),n=t.getModel("lineStyle").getLineStyle();n&&!n.stroke&&(n.stroke=r.getVisual("style").fill),r.setVisual("legendLineStyle",n)}}),e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC,Cu("line"))}const af={id:"left-bar-chart"},of=wt({__name:"LeftBar",setup(e){return ft([Br,ri,ni,ii,ai,Ta,or]),Ct(()=>{var t=document.getElementById("left-bar-chart"),r=Or(t,"dark",{devicePixelRatio:2}),n;n={backgroundColor:"transparent",title:{text:"历年本站发运量"},legend:{top:"12%"},tooltip:{trigger:"item"},xAxis:{type:"category",axisTick:{show:!1}},yAxis:{axisLine:{show:!1},splitLine:{show:!1}},dataset:{source:[["product","转关箱(已审批)","非转关箱"],["Matcha",43.3,85.8],["Milk Tea",83.1,73.4],["Cheese",86.4,65.2],["Walnut",72.4,53.9]]},series:[{type:"bar"},{type:"bar"}]},n&&r.setOption(n)}),(t,r)=>(Le(),Me("div",af))}});const sf=bt(of,[["__scopeId","data-v-f1a5cb34"]]),lf={id:"left-bar-chart-2"},uf=wt({__name:"LeftBar2",setup(e){return ft([Br,ri,ni,ai,Ta,or]),Ct(()=>{var t=document.getElementById("left-bar-chart-2"),r=Or(t,"dark",{devicePixelRatio:2}),n;n={title:{text:"堆区分布"},backgroundColor:"transparent",grid:{top:"20%",left:"15%",right:"10%",bottom:"10%"},xAxis:{type:"value",splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},yAxis:{type:"category",data:["B箱区","Q箱区"],axisTick:{show:!1},axisLine:{show:!1}},series:[{data:[120,200],type:"bar",showBackground:!0,backgroundStyle:{borderRadius:25},label:{show:!0,position:"right",color:"#4e84a1",fontSize:14,formatter:"{c}"},itemStyle:{borderRadius:25,color:"#3facff"}}]},n&&r.setOption(n)}),(t,r)=>(Le(),Me("div",lf))}});const cf=bt(uf,[["__scopeId","data-v-38d301dc"]]);var dt=Is.CMD;function wr(e,t){return Math.abs(e-t)<1e-5}function ta(e){var t=e.data,r=e.len(),n=[],i,a=0,o=0,s=0,l=0;function u(P,L){i&&i.length>2&&n.push(i),i=[P,L]}function c(P,L,I,O){wr(P,I)&&wr(L,O)||i.push(P,L,I,O,I,O)}function f(P,L,I,O,H,G){var q=Math.abs(L-P),ae=Math.tan(q/4)*4/3,te=L<P?-1:1,_e=Math.cos(P),oe=Math.sin(P),fe=Math.cos(L),Ce=Math.sin(L),ue=_e*H+I,xt=oe*G+O,Je=fe*H+I,Tt=Ce*G+O,Mt=H*ae*te,cr=G*ae*te;i.push(ue-Mt*oe,xt+cr*_e,Je+Mt*Ce,Tt-cr*fe,Je,Tt)}for(var d,h,p,v,m=0;m<r;){var _=t[m++],y=m===1;switch(y&&(a=t[m],o=t[m+1],s=a,l=o,(_===dt.L||_===dt.C||_===dt.Q)&&(i=[s,l])),_){case dt.M:a=s=t[m++],o=l=t[m++],u(s,l);break;case dt.L:d=t[m++],h=t[m++],c(a,o,d,h),a=d,o=h;break;case dt.C:i.push(t[m++],t[m++],t[m++],t[m++],a=t[m++],o=t[m++]);break;case dt.Q:d=t[m++],h=t[m++],p=t[m++],v=t[m++],i.push(a+2/3*(d-a),o+2/3*(h-o),p+2/3*(d-p),v+2/3*(h-v),p,v),a=p,o=v;break;case dt.A:var g=t[m++],x=t[m++],E=t[m++],T=t[m++],S=t[m++],A=t[m++]+S;m+=1;var w=!t[m++];d=Math.cos(S)*E+g,h=Math.sin(S)*T+x,y?(s=d,l=h,u(s,l)):c(a,o,d,h),a=Math.cos(A)*E+g,o=Math.sin(A)*T+x;for(var D=(w?-1:1)*Math.PI/2,R=S;w?R>A:R<A;R+=D){var C=w?Math.max(R+D,A):Math.min(R+D,A);f(R,C,g,x,E,T)}break;case dt.R:s=a=t[m++],l=o=t[m++],d=s+t[m++],h=l+t[m++],u(d,l),c(d,l,d,h),c(d,h,s,h),c(s,h,s,l),c(s,l,d,l);break;case dt.Z:i&&c(a,o,s,l),a=s,o=l;break}}return i&&i.length>2&&n.push(i),n}function ra(e,t,r,n,i,a,o,s,l,u){if(wr(e,r)&&wr(t,n)&&wr(i,o)&&wr(a,s)){l.push(o,s);return}var c=2/u,f=c*c,d=o-e,h=s-t,p=Math.sqrt(d*d+h*h);d/=p,h/=p;var v=r-e,m=n-t,_=i-o,y=a-s,g=v*v+m*m,x=_*_+y*y;if(g<f&&x<f){l.push(o,s);return}var E=d*v+h*m,T=-d*_-h*y,S=g-E*E,A=x-T*T;if(S<f&&E>=0&&A<f&&T>=0){l.push(o,s);return}var w=[],D=[];zn(e,r,i,o,.5,w),zn(t,n,a,s,.5,D),ra(w[0],D[0],w[1],D[1],w[2],D[2],w[3],D[3],l,u),ra(w[4],D[4],w[5],D[5],w[6],D[6],w[7],D[7],l,u)}function ff(e,t){var r=ta(e),n=[];t=t||1;for(var i=0;i<r.length;i++){var a=r[i],o=[],s=a[0],l=a[1];o.push(s,l);for(var u=2;u<a.length;){var c=a[u++],f=a[u++],d=a[u++],h=a[u++],p=a[u++],v=a[u++];ra(s,l,c,f,d,h,p,v,o,t),s=p,l=v}n.push(o)}return n}function Ks(e,t,r){var n=e[t],i=e[1-t],a=Math.abs(n/i),o=Math.ceil(Math.sqrt(a*r)),s=Math.floor(r/o);s===0&&(s=1,o=r);for(var l=[],u=0;u<o;u++)l.push(s);var c=o*s,f=r-c;if(f>0)for(var u=0;u<f;u++)l[u%o]+=1;return l}function To(e,t,r){for(var n=e.r0,i=e.r,a=e.startAngle,o=e.endAngle,s=Math.abs(o-a),l=s*i,u=i-n,c=l>Math.abs(u),f=Ks([l,u],c?0:1,t),d=(c?s:u)/f.length,h=0;h<f.length;h++)for(var p=(c?u:s)/f[h],v=0;v<f[h];v++){var m={};c?(m.startAngle=a+d*h,m.endAngle=a+d*(h+1),m.r0=n+p*v,m.r=n+p*(v+1)):(m.startAngle=a+p*v,m.endAngle=a+p*(v+1),m.r0=n+d*h,m.r=n+d*(h+1)),m.clockwise=e.clockwise,m.cx=e.cx,m.cy=e.cy,r.push(m)}}function hf(e,t,r){for(var n=e.width,i=e.height,a=n>i,o=Ks([n,i],a?0:1,t),s=a?"width":"height",l=a?"height":"width",u=a?"x":"y",c=a?"y":"x",f=e[s]/o.length,d=0;d<o.length;d++)for(var h=e[l]/o[d],p=0;p<o[d];p++){var v={};v[u]=d*f,v[c]=p*h,v[s]=f,v[l]=h,v.x+=e.x,v.y+=e.y,r.push(v)}}function Eo(e,t,r,n){return e*n-r*t}function df(e,t,r,n,i,a,o,s){var l=r-e,u=n-t,c=o-i,f=s-a,d=Eo(c,f,l,u);if(Math.abs(d)<1e-6)return null;var h=e-i,p=t-a,v=Eo(h,p,c,f)/d;return v<0||v>1?null:new Kt(v*l+e,v*u+t)}function vf(e,t,r){var n=new Kt;Kt.sub(n,r,t),n.normalize();var i=new Kt;Kt.sub(i,e,t);var a=i.dot(n);return a}function dr(e,t){var r=e[e.length-1];r&&r[0]===t[0]&&r[1]===t[1]||e.push(t)}function pf(e,t,r){for(var n=e.length,i=[],a=0;a<n;a++){var o=e[a],s=e[(a+1)%n],l=df(o[0],o[1],s[0],s[1],t.x,t.y,r.x,r.y);l&&i.push({projPt:vf(l,t,r),pt:l,idx:a})}if(i.length<2)return[{points:e},{points:e}];i.sort(function(m,_){return m.projPt-_.projPt});var u=i[0],c=i[i.length-1];if(c.idx<u.idx){var f=u;u=c,c=f}for(var d=[u.pt.x,u.pt.y],h=[c.pt.x,c.pt.y],p=[d],v=[h],a=u.idx+1;a<=c.idx;a++)dr(p,e[a].slice());dr(p,h),dr(p,d);for(var a=c.idx+1;a<=u.idx+n;a++)dr(v,e[a%n].slice());return dr(v,d),dr(v,h),[{points:p},{points:v}]}function So(e){var t=e.points,r=[],n=[];Os(t,r,n);var i=new Ru(r[0],r[1],n[0]-r[0],n[1]-r[1]),a=i.width,o=i.height,s=i.x,l=i.y,u=new Kt,c=new Kt;return a>o?(u.x=c.x=s+a/2,u.y=l,c.y=l+o):(u.y=c.y=l+o/2,u.x=s,c.x=s+a),pf(t,u,c)}function Vn(e,t,r,n){if(r===1)n.push(t);else{var i=Math.floor(r/2),a=e(t);Vn(e,a[0],i,n),Vn(e,a[1],r-i,n)}return n}function mf(e,t){for(var r=[],n=0;n<t;n++)r.push(Ea(e));return r}function _f(e,t){t.setStyle(e.style),t.z=e.z,t.z2=e.z2,t.zlevel=e.zlevel}function gf(e){for(var t=[],r=0;r<e.length;)t.push([e[r++],e[r++]]);return t}function yf(e,t){var r=[],n=e.shape,i;switch(e.type){case"rect":hf(n,t,r),i=ir;break;case"sector":To(n,t,r),i=io;break;case"circle":To({r0:0,r:n.r,startAngle:0,endAngle:Math.PI*2,cx:n.cx,cy:n.cy},t,r),i=io;break;default:var a=e.getComputedTransform(),o=a?Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1],a[2]*a[2]+a[3]*a[3])):1,s=ot(ff(e.getUpdatedPathProxy(),o),function(_){return gf(_)}),l=s.length;if(l===0)Vn(So,{points:s[0]},t,r);else if(l===t)for(var u=0;u<l;u++)r.push({points:s[u]});else{var c=0,f=ot(s,function(_){var y=[],g=[];Os(_,y,g);var x=(g[1]-y[1])*(g[0]-y[0]);return c+=x,{poly:_,area:x}});f.sort(function(_,y){return y.area-_.area});for(var d=t,u=0;u<l;u++){var h=f[u];if(d<=0)break;var p=u===l-1?d:Math.ceil(h.area/c*t);p<0||(Vn(So,{points:h.poly},p,r),d-=p)}}i=Du;break}if(!i)return mf(e,t);for(var v=[],u=0;u<r.length;u++){var m=new i;m.setShape(r[u]),_f(e,m),v.push(m)}return v}function xf(e,t){var r=e.length,n=t.length;if(r===n)return[e,t];for(var i=[],a=[],o=r<n?e:t,s=Math.min(r,n),l=Math.abs(n-r)/6,u=(s-2)/6,c=Math.ceil(l/u)+1,f=[o[0],o[1]],d=l,h=2;h<s;){var p=o[h-2],v=o[h-1],m=o[h++],_=o[h++],y=o[h++],g=o[h++],x=o[h++],E=o[h++];if(d<=0){f.push(m,_,y,g,x,E);continue}for(var T=Math.min(d,c-1)+1,S=1;S<=T;S++){var A=S/T;zn(p,m,y,x,A,i),zn(v,_,g,E,A,a),p=i[3],v=a[3],f.push(i[1],a[1],i[2],a[2],p,v),m=i[5],_=a[5],y=i[6],g=a[6]}d-=T-1}return o===e?[f,t]:[e,f]}function Ao(e,t){for(var r=e.length,n=e[r-2],i=e[r-1],a=[],o=0;o<t.length;)a[o++]=n,a[o++]=i;return a}function Tf(e,t){for(var r,n,i,a=[],o=[],s=0;s<Math.max(e.length,t.length);s++){var l=e[s],u=t[s],c=void 0,f=void 0;l?u?(r=xf(l,u),c=r[0],f=r[1],n=c,i=f):(f=Ao(i||l,l),c=l):(c=Ao(n||u,u),f=u),a.push(c),o.push(f)}return[a,o]}function bo(e){for(var t=0,r=0,n=0,i=e.length,a=0,o=i-2;a<i;o=a,a+=2){var s=e[o],l=e[o+1],u=e[a],c=e[a+1],f=s*c-u*l;t+=f,r+=(s+u)*f,n+=(l+c)*f}return t===0?[e[0]||0,e[1]||0]:[r/t/3,n/t/3,t]}function Ef(e,t,r,n){for(var i=(e.length-2)/6,a=1/0,o=0,s=e.length,l=s-2,u=0;u<i;u++){for(var c=u*6,f=0,d=0;d<s;d+=2){var h=d===0?c:(c+d-2)%l+2,p=e[h]-r[0],v=e[h+1]-r[1],m=t[d]-n[0],_=t[d+1]-n[1],y=m-p,g=_-v;f+=y*y+g*g}f<a&&(a=f,o=u)}return o}function Sf(e){for(var t=[],r=e.length,n=0;n<r;n+=2)t[n]=e[r-n-2],t[n+1]=e[r-n-1];return t}function Af(e,t,r,n){for(var i=[],a,o=0;o<e.length;o++){var s=e[o],l=t[o],u=bo(s),c=bo(l);a==null&&(a=u[2]<0!=c[2]<0);var f=[],d=[],h=0,p=1/0,v=[],m=s.length;a&&(s=Sf(s));for(var _=Ef(s,l,u,c)*6,y=m-2,g=0;g<y;g+=2){var x=(_+g)%y+2;f[g+2]=s[x]-u[0],f[g+3]=s[x+1]-u[1]}if(f[0]=s[_]-u[0],f[1]=s[_+1]-u[1],r>0)for(var E=n/r,T=-n/2;T<=n/2;T+=E){for(var S=Math.sin(T),A=Math.cos(T),w=0,g=0;g<s.length;g+=2){var D=f[g],R=f[g+1],C=l[g]-c[0],P=l[g+1]-c[1],L=C*A-P*S,I=C*S+P*A;v[g]=L,v[g+1]=I;var O=L-D,H=I-R;w+=O*O+H*H}if(w<p){p=w,h=T;for(var G=0;G<v.length;G++)d[G]=v[G]}}else for(var q=0;q<m;q+=2)d[q]=l[q]-c[0],d[q+1]=l[q+1]-c[1];i.push({from:f,to:d,fromCp:u,toCp:c,rotation:-h})}return i}function kn(e){return e.__isCombineMorphing}var $s="__mOriginal_";function Wn(e,t,r){var n=$s+t,i=e[n]||e[t];e[n]||(e[n]=e[t]);var a=r.replace,o=r.after,s=r.before;e[t]=function(){var l=arguments,u;return s&&s.apply(this,l),a?u=a.apply(this,l):u=i.apply(this,l),o&&o.apply(this,l),u}}function Jr(e,t){var r=$s+t;e[r]&&(e[t]=e[r],e[r]=null)}function wo(e,t){for(var r=0;r<e.length;r++)for(var n=e[r],i=0;i<n.length;){var a=n[i],o=n[i+1];n[i++]=t[0]*a+t[2]*o+t[4],n[i++]=t[1]*a+t[3]*o+t[5]}}function Qs(e,t){var r=e.getUpdatedPathProxy(),n=t.getUpdatedPathProxy(),i=Tf(ta(r),ta(n)),a=i[0],o=i[1],s=e.getComputedTransform(),l=t.getComputedTransform();function u(){this.transform=null}s&&wo(a,s),l&&wo(o,l),Wn(t,"updateTransform",{replace:u}),t.transform=null;var c=Af(a,o,10,Math.PI),f=[];Wn(t,"buildPath",{replace:function(d){for(var h=t.__morphT,p=1-h,v=[],m=0;m<c.length;m++){var _=c[m],y=_.from,g=_.to,x=_.rotation*h,E=_.fromCp,T=_.toCp,S=Math.sin(x),A=Math.cos(x);Mu(v,E,T,h);for(var w=0;w<y.length;w+=2){var D=y[w],R=y[w+1],C=g[w],P=g[w+1],L=D*p+C*h,I=R*p+P*h;f[w]=L*A-I*S+v[0],f[w+1]=L*S+I*A+v[1]}var O=f[0],H=f[1];d.moveTo(O,H);for(var w=2;w<y.length;){var C=f[w++],P=f[w++],G=f[w++],q=f[w++],ae=f[w++],te=f[w++];O===C&&H===P&&G===ae&&q===te?d.lineTo(ae,te):d.bezierCurveTo(C,P,G,q,ae,te),O=ae,H=te}}}})}function Ca(e,t,r){if(!e||!t)return t;var n=r.done,i=r.during;Qs(e,t),t.__morphT=0;function a(){Jr(t,"buildPath"),Jr(t,"updateTransform"),t.__morphT=-1,t.createPathProxy(),t.dirtyShape()}return t.animateTo({__morphT:1},Ge({during:function(o){t.dirtyShape(),i&&i(o)},done:function(){a(),n&&n()}},r)),t}function bf(e,t,r,n,i,a){var o=16;e=i===r?0:Math.round(32767*(e-r)/(i-r)),t=a===n?0:Math.round(32767*(t-n)/(a-n));for(var s=0,l,u=(1<<o)/2;u>0;u/=2){var c=0,f=0;(e&u)>0&&(c=1),(t&u)>0&&(f=1),s+=u*u*(3*c^f),f===0&&(c===1&&(e=u-1-e,t=u-1-t),l=e,e=t,t=l)}return s}function Xn(e){var t=1/0,r=1/0,n=-1/0,i=-1/0,a=ot(e,function(s){var l=s.getBoundingRect(),u=s.getComputedTransform(),c=l.x+l.width/2+(u?u[4]:0),f=l.y+l.height/2+(u?u[5]:0);return t=Math.min(c,t),r=Math.min(f,r),n=Math.max(c,n),i=Math.max(f,i),[c,f]}),o=ot(a,function(s,l){return{cp:s,z:bf(s[0],s[1],t,r,n,i),path:e[l]}});return o.sort(function(s,l){return s.z-l.z}).map(function(s){return s.path})}function Js(e){return yf(e.path,e.count)}function na(){return{fromIndividuals:[],toIndividuals:[],count:0}}function wf(e,t,r){var n=[];function i(E){for(var T=0;T<E.length;T++){var S=E[T];kn(S)?i(S.childrenRef()):S instanceof ar&&n.push(S)}}i(e);var a=n.length;if(!a)return na();var o=r.dividePath||Js,s=o({path:t,count:a});if(s.length!==a)return console.error("Invalid morphing: unmatched splitted path"),na();n=Xn(n),s=Xn(s);for(var l=r.done,u=r.during,c=r.individualDelay,f=new Lu,d=0;d<a;d++){var h=n[d],p=s[d];p.parent=t,p.copyTransform(f),c||Qs(h,p)}t.__isCombineMorphing=!0,t.childrenRef=function(){return s};function v(E){for(var T=0;T<s.length;T++)s[T].addSelfToZr(E)}Wn(t,"addSelfToZr",{after:function(E){v(E)}}),Wn(t,"removeSelfFromZr",{after:function(E){for(var T=0;T<s.length;T++)s[T].removeSelfFromZr(E)}});function m(){t.__isCombineMorphing=!1,t.__morphT=-1,t.childrenRef=null,Jr(t,"addSelfToZr"),Jr(t,"removeSelfFromZr")}var _=s.length;if(c)for(var y=_,g=function(){y--,y===0&&(m(),l&&l())},d=0;d<_;d++){var x=c?Ge({delay:(r.delay||0)+c(d,_,n[d],s[d]),done:g},r):r;Ca(n[d],s[d],x)}else t.__morphT=0,t.animateTo({__morphT:1},Ge({during:function(E){for(var T=0;T<_;T++){var S=s[T];S.__morphT=t.__morphT,S.dirtyShape()}u&&u(E)},done:function(){m();for(var E=0;E<e.length;E++)Jr(e[E],"updateTransform");l&&l()}},r));return t.__zr&&v(t.__zr),{fromIndividuals:n,toIndividuals:s,count:_}}function Cf(e,t,r){var n=t.length,i=[],a=r.dividePath||Js;function o(h){for(var p=0;p<h.length;p++){var v=h[p];kn(v)?o(v.childrenRef()):v instanceof ar&&i.push(v)}}if(kn(e)){o(e.childrenRef());var s=i.length;if(s<n)for(var l=0,u=s;u<n;u++)i.push(Ea(i[l++%s]));i.length=n}else{i=a({path:e,count:n});for(var c=e.getComputedTransform(),u=0;u<i.length;u++)i[u].setLocalTransform(c);if(i.length!==n)return console.error("Invalid morphing: unmatched splitted path"),na()}i=Xn(i),t=Xn(t);for(var f=r.individualDelay,u=0;u<n;u++){var d=f?Ge({delay:(r.delay||0)+f(u,n,i[u],t[u])},r):r;Ca(i[u],t[u],d)}return{fromIndividuals:i,toIndividuals:t,count:t.length}}function Co(e){return ze(e[0])}function Ro(e,t){for(var r=[],n=e.length,i=0;i<n;i++)r.push({one:e[i],many:[]});for(var i=0;i<t.length;i++){var a=t[i].length,o=void 0;for(o=0;o<a;o++)r[o%n].many.push(t[i][o])}for(var s=0,i=n-1;i>=0;i--)if(!r[i].many.length){var l=r[s].many;if(l.length<=1)if(s)s=0;else return r;var a=l.length,u=Math.ceil(a/2);r[i].many=l.slice(u,a),r[s].many=l.slice(0,u),s++}return r}var Rf={clone:function(e){for(var t=[],r=1-Math.pow(1-e.path.style.opacity,1/e.count),n=0;n<e.count;n++){var i=Ea(e.path);i.setStyle("opacity",r),t.push(i)}return t},split:null};function xi(e,t,r,n,i,a){if(!e.length||!t.length)return;var o=Sa("update",n,i);if(!(o&&o.duration>0))return;var s=n.getModel("universalTransition").get("delay"),l=Object.assign({setToFinal:!0},o),u,c;Co(e)&&(u=e,c=t),Co(t)&&(u=t,c=e);function f(_,y,g,x,E){var T=_.many,S=_.one;if(T.length===1&&!E){var A=y?T[0]:S,w=y?S:T[0];if(kn(A))f({many:[A],one:w},!0,g,x,!0);else{var D=s?Ge({delay:s(g,x)},l):l;Ca(A,w,D),a(A,w,A,w,D)}}else for(var R=Ge({dividePath:Rf[r],individualDelay:s&&function(H,G,q,ae){return s(H+g,x)}},l),C=y?wf(T,S,R):Cf(S,T,R),P=C.fromIndividuals,L=C.toIndividuals,I=P.length,O=0;O<I;O++){var D=s?Ge({delay:s(O,I)},l):l;a(P[O],L[O],y?T[O]:_.one,y?_.one:T[O],D)}}for(var d=u?u===e:e.length>t.length,h=u?Ro(c,u):Ro(d?t:e,[d?e:t]),p=0,v=0;v<h.length;v++)p+=h[v].many.length;for(var m=0,v=0;v<h.length;v++)f(h[v],d,m,p),m+=h[v].many.length}function Zt(e){if(!e)return[];if(ze(e)){for(var t=[],r=0;r<e.length;r++)t.push(Zt(e[r]));return t}var n=[];return e.traverse(function(i){i instanceof ar&&!i.disableMorphing&&!i.invisible&&!i.ignore&&n.push(i)}),n}var el=1e4,Df=Pu();function Lf(e){for(var t=e.dimensions,r=0;r<t.length;r++){var n=e.getDimensionInfo(t[r]);if(n&&n.otherDims.itemGroupId===0)return t[r]}}function Do(e){var t=[];return he(e,function(r){var n=r.data;if(!(n.count()>el))for(var i=n.getIndices(),a=Lf(n),o=0;o<i.length;o++)t.push({dataGroupId:r.dataGroupId,data:n,dim:r.dim||a,divide:r.divide,dataIndex:o})}),t}function Ti(e,t,r){e.traverse(function(n){n instanceof ar&&ma(n,{style:{opacity:0}},t,{dataIndex:r,isFrom:!0})})}function Ei(e){if(e.parent){var t=e.getComputedTransform();e.setLocalTransform(t),e.parent.remove(e)}}function vr(e){e.stopAnimation(),e.isGroup&&e.traverse(function(t){t.stopAnimation()})}function Mf(e,t,r){var n=Sa("update",r,t);n&&e.traverse(function(i){if(i instanceof Nu){var a=Iu(i);a&&i.animateFrom({style:a},n)}})}function Pf(e,t){var r=e.length;if(r!==t.length)return!1;for(var n=0;n<r;n++){var i=e[n],a=t[n];if(i.data.getId(i.dataIndex)!==a.data.getId(a.dataIndex))return!1}return!0}function tl(e,t,r){var n=Do(e),i=Do(t);function a(_,y,g,x,E){(g||_)&&y.animateFrom({style:g&&g!==_?Dr(Dr({},g.style),_.style):_.style},E)}function o(_){for(var y=0;y<_.length;y++)if(_[y].dim)return _[y].dim}var s=o(n),l=o(i),u=!1;function c(_,y){return function(g){var x=g.data,E=g.dataIndex;if(y)return x.getId(E);var T=g.dataGroupId,S=_?s||l:l||s,A=S&&x.getDimensionInfo(S),w=A&&A.ordinalMeta;if(A){var D=x.get(A.name,E);return w&&w.categories[D]||D+""}var R=x.getRawDataItem(E);return R&&R.groupId?R.groupId+"":T||x.getId(E)}}var f=Pf(n,i),d={};if(!f)for(var h=0;h<i.length;h++){var p=i[h],v=p.data.getItemGraphicEl(p.dataIndex);v&&(d[v.id]=!0)}function m(_,y){var g=n[y],x=i[_],E=x.data.hostModel,T=g.data.getItemGraphicEl(g.dataIndex),S=x.data.getItemGraphicEl(x.dataIndex);if(T===S){S&&Mf(S,x.dataIndex,E);return}T&&d[T.id]||S&&(vr(S),T?(vr(T),Ei(T),u=!0,xi(Zt(T),Zt(S),x.divide,E,_,a)):Ti(S,E,_))}new ao(n,i,c(!0,f),c(!1,f),null,"multiple").update(m).updateManyToOne(function(_,y){var g=i[_],x=g.data,E=x.hostModel,T=x.getItemGraphicEl(g.dataIndex),S=ji(ot(y,function(A){return n[A].data.getItemGraphicEl(n[A].dataIndex)}),function(A){return A&&A!==T&&!d[A.id]});T&&(vr(T),S.length?(he(S,function(A){vr(A),Ei(A)}),u=!0,xi(Zt(S),Zt(T),g.divide,E,_,a)):Ti(T,E,g.dataIndex))}).updateOneToMany(function(_,y){var g=n[y],x=g.data.getItemGraphicEl(g.dataIndex);if(!(x&&d[x.id])){var E=ji(ot(_,function(S){return i[S].data.getItemGraphicEl(i[S].dataIndex)}),function(S){return S&&S!==x}),T=i[_[0]].data.hostModel;E.length&&(he(E,function(S){return vr(S)}),x?(vr(x),Ei(x),u=!0,xi(Zt(x),Zt(E),g.divide,T,_[0],a)):he(E,function(S){return Ti(S,T,_[0])}))}}).updateManyToMany(function(_,y){new ao(y,_,function(g){return n[g].data.getId(n[g].dataIndex)},function(g){return i[g].data.getId(i[g].dataIndex)}).update(function(g,x){m(_[g],y[x])}).execute()}).execute(),u&&he(t,function(_){var y=_.data,g=y.hostModel,x=g&&r.getViewOfSeriesModel(g),E=Sa("update",g,0);x&&g.isAnimationEnabled()&&E&&E.duration>0&&x.group.traverse(function(T){T instanceof ar&&!T.animators.length&&T.animateFrom({style:{opacity:0}},E)})})}function Lo(e){var t=e.getModel("universalTransition").get("seriesKey");return t||e.id}function Mo(e){return ze(e)?e.sort().join(","):e}function Ft(e){if(e.hostModel)return e.hostModel.getModel("universalTransition").get("divideShape")}function Nf(e,t){var r=Yr(),n=Yr(),i=Yr();return he(e.oldSeries,function(a,o){var s=e.oldDataGroupIds[o],l=e.oldData[o],u=Lo(a),c=Mo(u);n.set(c,{dataGroupId:s,data:l}),ze(u)&&he(u,function(f){i.set(f,{key:c,dataGroupId:s,data:l})})}),he(t.updatedSeries,function(a){if(a.isUniversalTransitionEnabled()&&a.isAnimationEnabled()){var o=a.get("dataGroupId"),s=a.getData(),l=Lo(a),u=Mo(l),c=n.get(u);if(c)r.set(u,{oldSeries:[{dataGroupId:c.dataGroupId,divide:Ft(c.data),data:c.data}],newSeries:[{dataGroupId:o,divide:Ft(s),data:s}]});else if(ze(l)){var f=[];he(l,function(p){var v=n.get(p);v.data&&f.push({dataGroupId:v.dataGroupId,divide:Ft(v.data),data:v.data})}),f.length&&r.set(u,{oldSeries:f,newSeries:[{dataGroupId:o,data:s,divide:Ft(s)}]})}else{var d=i.get(l);if(d){var h=r.get(d.key);h||(h={oldSeries:[{dataGroupId:d.dataGroupId,data:d.data,divide:Ft(d.data)}],newSeries:[]},r.set(d.key,h)),h.newSeries.push({dataGroupId:o,data:s,divide:Ft(s)})}}}}),r}function Po(e,t){for(var r=0;r<e.length;r++){var n=t.seriesIndex!=null&&t.seriesIndex===e[r].seriesIndex||t.seriesId!=null&&t.seriesId===e[r].id;if(n)return r}}function If(e,t,r,n){var i=[],a=[];he(Qr(e.from),function(o){var s=Po(t.oldSeries,o);s>=0&&i.push({dataGroupId:t.oldDataGroupIds[s],data:t.oldData[s],divide:Ft(t.oldData[s]),dim:o.dimension})}),he(Qr(e.to),function(o){var s=Po(r.updatedSeries,o);if(s>=0){var l=r.updatedSeries[s].getData();a.push({dataGroupId:t.oldDataGroupIds[s],data:l,divide:Ft(l),dim:o.dimension})}}),i.length>0&&a.length>0&&tl(i,a,n)}function Of(e){e.registerUpdateLifecycle("series:beforeupdate",function(t,r,n){he(Qr(n.seriesTransition),function(i){he(Qr(i.to),function(a){for(var o=n.updatedSeries,s=0;s<o.length;s++)(a.seriesIndex!=null&&a.seriesIndex===o[s].seriesIndex||a.seriesId!=null&&a.seriesId===o[s].id)&&(o[s][hi]=!0)})})}),e.registerUpdateLifecycle("series:transition",function(t,r,n){var i=Df(r);if(i.oldSeries&&n.updatedSeries&&n.optionChanged){var a=n.seriesTransition;if(a)he(Qr(a),function(h){If(h,i,n,r)});else{var o=Nf(i,n);he(o.keys(),function(h){var p=o.get(h);tl(p.oldSeries,p.newSeries,r)})}he(n.updatedSeries,function(h){h[hi]&&(h[hi]=!1)})}for(var s=t.getSeries(),l=i.oldSeries=[],u=i.oldDataGroupIds=[],c=i.oldData=[],f=0;f<s.length;f++){var d=s[f].getData();d.count()<el&&(l.push(s[f]),u.push(s[f].get("dataGroupId")),c.push(d))}})}const Bf={id:"middle-line-chart"},Ff=wt({__name:"Line",setup(e){return ft([Br,ii,ni,Xs,nf,or,Of]),Ct(()=>{var t=document.getElementById("middle-line-chart"),r=Or(t,"dark",{devicePixelRatio:2}),n;n={backgroundColor:"transparent",title:{text:"近日进提箱动态"},tooltip:{trigger:"axis"},legend:{top:"12%",data:["单位1","单位2","单位3","单位4","单位5"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["10号","11号","12号","13号","14号","15号","16号"]},yAxis:{type:"value"},series:[{name:"单位1",type:"line",stack:"Total",data:[120,132,101,134,90,230,210]},{name:"单位2",type:"line",stack:"Total",data:[220,182,191,234,290,330,310]},{name:"单位3",type:"line",stack:"Total",data:[150,232,201,154,190,330,410]},{name:"单位4",type:"line",stack:"Total",data:[320,332,301,334,390,330,320]},{name:"单位5",type:"line",stack:"Total",data:[820,932,901,934,1290,1330,1320]}]},n&&r.setOption(n)}),(t,r)=>(Le(),Me("div",Bf))}});const Uf=bt(Ff,[["__scopeId","data-v-8f3994be"]]),Hf={id:"right-pie-chart"},Gf=wt({__name:"RightPie",setup(e){return ft([Br,ii,Xs,Ou,or,Bs]),Ct(()=>{var t=document.getElementById("right-pie-chart"),r=Or(t,"dark",{devicePixelRatio:2}),n;n={backgroundColor:"transparent",title:{text:"各家船公司业务占比",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left",top:"middle"},series:[{name:"Access From",type:"pie",radius:"50%",center:["50%","50%"],data:[{value:1048,name:"公司1"},{value:735,name:"公司2"},{value:580,name:"公司3"},{value:484,name:"公司4"},{value:300,name:"公司5"}],label:{show:!1}}]},n&&r.setOption(n)}),(t,r)=>(Le(),Me("div",Hf))}});const zf=bt(Gf,[["__scopeId","data-v-6a61113e"]]),Vf={id:"right-bar-chart"},kf=wt({__name:"RightBottomBar",setup(e){return ft([Br,ri,ni,ai,Ta,or]),Ct(()=>{var t=document.getElementById("right-bar-chart"),r=Or(t,"dark",{devicePixelRatio:2}),n;n={backgroundColor:"transparent",title:{text:"当月分货代出口重箱数量"},grid:{bottom:"3%"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value",splitLine:{show:!1}},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]},n&&r.setOption(n)}),(t,r)=>(Le(),Me("div",Vf))}});const Wf=bt(kf,[["__scopeId","data-v-51d3846e"]]);ft([or,ri]);ft(Bs);function No(e,t,r){typeof t=="object"&&(r=t,t=null);var n=this,i;if(!(e instanceof Function)){i=[];for(var a in e)e.hasOwnProperty(a)&&i.push(a)}var o=function(l){if(n.apply(this,arguments),e instanceof Function?Io(this,e.call(this,l)):Xf(this,e,i),this.constructor===o)for(var u=o.__initializers__,c=0;c<u.length;c++)u[c].apply(this,arguments)};o.__super__=n,n.__initializers__?o.__initializers__=n.__initializers__.slice():o.__initializers__=[],t&&o.__initializers__.push(t);var s=function(){};return s.prototype=n.prototype,o.prototype=new s,o.prototype.constructor=o,Io(o.prototype,r),o.extend=n.extend,o.derive=n.extend,o}function Io(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}function Xf(e,t,r){for(var n=0;n<r.length;n++){var i=r[n];e[i]=t[i]}}const qf={extend:No,derive:No};function jf(e,t){this.action=e,this.context=t}var Zf={trigger:function(e){if(this.hasOwnProperty("__handlers__")&&this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],r=t.length,n=-1,i=arguments;switch(i.length){case 1:for(;++n<r;)t[n].action.call(t[n].context);return;case 2:for(;++n<r;)t[n].action.call(t[n].context,i[1]);return;case 3:for(;++n<r;)t[n].action.call(t[n].context,i[1],i[2]);return;case 4:for(;++n<r;)t[n].action.call(t[n].context,i[1],i[2],i[3]);return;case 5:for(;++n<r;)t[n].action.call(t[n].context,i[1],i[2],i[3],i[4]);return;default:for(;++n<r;)t[n].action.apply(t[n].context,Array.prototype.slice.call(i,1));return}}},on:function(e,t,r){if(!(!e||!t)){var n=this.__handlers__||(this.__handlers__={});if(!n[e])n[e]=[];else if(this.has(e,t))return;var i=new jf(t,r||this);return n[e].push(i),this}},once:function(e,t,r){if(!e||!t)return;var n=this;function i(){n.off(e,i),t.apply(this,arguments)}return this.on(e,i,r)},before:function(e,t,r){if(!(!e||!t))return e="before"+e,this.on(e,t,r)},after:function(e,t,r){if(!(!e||!t))return e="after"+e,this.on(e,t,r)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var r=this.__handlers__||(this.__handlers__={});if(!t){r[e]=[];return}if(r[e]){for(var n=r[e],i=[],a=0;a<n.length;a++)t&&n[a].action!==t&&i.push(n[a]);r[e]=i}return this},has:function(e,t){var r=this.__handlers__;if(!r||!r[e])return!1;for(var n=r[e],i=0;i<n.length;i++)if(n[i].action===t)return!0}};const Ra=Zf;var Yf=0,Kf=Array.prototype,$f=Kf.forEach,qr={genGUID:function(){return++Yf},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var r=e.split("/"),n=t.split("/"),i=r[0];i==="."||i==="..";)i===".."&&n.pop(),r.shift(),i=r[0];return n.join("/")+"/"+r.join("/")},extend:function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},defaults:function(e,t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e},extendWithPropList:function(e,t,r){if(t)for(var n=0;n<r.length;n++){var i=r[n];e[i]=t[i]}return e},defaultsWithPropList:function(e,t,r){if(t)for(var n=0;n<r.length;n++){var i=r[n];e[i]==null&&(e[i]=t[i])}return e},each:function(e,t,r){if(e&&t)if(e.forEach&&e.forEach===$f)e.forEach(t,r);else if(e.length===+e.length)for(var n=0,i=e.length;n<i;n++)t.call(r,e[n],n,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(r,e[a],a,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(qr.isObject(e)){if(qr.isArray(e))return e.slice();if(qr.isArrayLike(e)){for(var t=new e.constructor(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}else return qr.extend({},e)}else return e}};const Ue=qr;var oi=function(){this.__uid__=Ue.genGUID()};oi.__initializers__=[function(e){Ue.extend(this,e)}];Ue.extend(oi,qf);Ue.extend(oi.prototype,Ra);const Qe=oi;var Oo=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],Bo=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function Qf(e){for(var t={},r={},n=0;n<Oo.length;n++){var i=Oo[n];o(i)}for(var n=0;n<Bo.length;n++){var a=Bo[n];r[a]=e.getParameter(e[a])}this.getExtension=function(s){return s in t||o(s),t[s]},this.getParameter=function(s){return r[s]};function o(s){if(e.getExtension){var l=e.getExtension(s);l||(l=e.getExtension("MOZ_"+s)),l||(l=e.getExtension("WEBKIT_"+s)),t[s]=l}}}const M={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444};function Jf(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(r){if(r.lengthComputable){var n=r.loaded/r.total;e.onprogress(n,r.loaded,r.total)}else e.onprogress(null)}),t.onload=function(r){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}const eh={get:Jf};var Si,Ze={};Ze.supportWebGL=function(){if(Si==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{Si=!1}return Si};Ze.Int8Array=typeof Int8Array>"u"?Array:Int8Array;Ze.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array;Ze.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array;Ze.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array;Ze.Int16Array=typeof Int16Array>"u"?Array:Int16Array;Ze.Float32Array=typeof Float32Array>"u"?Array:Float32Array;Ze.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var $t={};typeof window<"u"?$t=window:typeof global<"u"&&($t=global);Ze.requestAnimationFrame=$t.requestAnimationFrame||$t.msRequestAnimationFrame||$t.mozRequestAnimationFrame||$t.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};Ze.createCanvas=function(){return document.createElement("canvas")};Ze.createImage=function(){return new $t.Image};Ze.request={get:eh.get};Ze.addEventListener=function(e,t,r,n){e.addEventListener(t,r,n)};Ze.removeEventListener=function(e,t,r){e.removeEventListener(t,r)};const De=Ze;var Oe=function(){this.head=null,this.tail=null,this._length=0};Oe.prototype.insert=function(e){var t=new Oe.Entry(e);return this.insertEntry(t),t};Oe.prototype.insertAt=function(e,t){if(!(e<0)){for(var r=this.head,n=0;r&&n!=e;)r=r.next,n++;if(r){var i=new Oe.Entry(t),a=r.prev;a?(a.next=i,i.prev=a):this.head=i,i.next=r,r.prev=i}else this.insert(t)}};Oe.prototype.insertBeforeEntry=function(e,t){var r=new Oe.Entry(e),n=t.prev;n?(n.next=r,r.prev=n):this.head=r,r.next=t,t.prev=r,this._length++};Oe.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};Oe.prototype.remove=function(e){var t=e.prev,r=e.next;t?t.next=r:this.head=r,r?r.prev=t:this.tail=t,e.next=e.prev=null,this._length--};Oe.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;if(t)return this.remove(t),t.value}};Oe.prototype.getHead=function(){if(this.head)return this.head.value};Oe.prototype.getTail=function(){if(this.tail)return this.tail.value};Oe.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;return t.value}};Oe.prototype.indexOf=function(e){for(var t=this.head,r=0;t;){if(t.value===e)return r;t=t.next,r++}};Oe.prototype.length=function(){return this._length};Oe.prototype.isEmpty=function(){return this._length===0};Oe.prototype.forEach=function(e,t){for(var r=this.head,n=0,i=typeof t<"u";r;)i?e.call(t,r.value,n):e(r.value,n),r=r.next,n++};Oe.prototype.clear=function(){this.tail=this.head=null,this._length=0};Oe.Entry=function(e){this.value=e,this.next=null,this.prev=null};const th=Oe;var Fr=function(e){this._list=new th,this._map={},this._maxSize=e||10};Fr.prototype.setMaxSize=function(e){this._maxSize=e};Fr.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var r=this._list.length();if(r>=this._maxSize&&r>0){var n=this._list.head;this._list.remove(n),delete this._map[n.key]}var i=this._list.insert(t);i.key=e,this._map[e]=i}};Fr.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};Fr.prototype.remove=function(e){var t=this._map[e];typeof t<"u"&&(delete this._map[e],this._list.remove(t))};Fr.prototype.clear=function(){this._list.clear(),this._map={}};const rl=Fr;var Te={},Fo={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function ct(e){return e=Math.round(e),e<0?0:e>255?255:e}function rh(e){return e=Math.round(e),e<0?0:e>360?360:e}function an(e){return e<0?0:e>1?1:e}function Ai(e){return e.length&&e.charAt(e.length-1)==="%"?ct(parseFloat(e)/100*255):ct(parseInt(e,10))}function Lr(e){return e.length&&e.charAt(e.length-1)==="%"?an(parseFloat(e)/100):an(parseFloat(e))}function bi(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function Ut(e,t,r){return e+(t-e)*r}function ut(e,t,r,n,i){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e}function ia(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var nl=new rl(20),_n=null;function pr(e,t){_n&&ia(_n,t),_n=nl.put(e,_n||t.slice())}Te.parse=function(e,t){if(e){t=t||[];var r=nl.get(e);if(r)return ia(t,r);e=e+"";var n=e.replace(/ /g,"").toLowerCase();if(n in Fo)return ia(t,Fo[n]),pr(e,t),t;if(n.charAt(0)==="#"){if(n.length===4){var i=parseInt(n.substr(1),16);if(!(i>=0&&i<=4095)){ut(t,0,0,0,1);return}return ut(t,(i&3840)>>4|(i&3840)>>8,i&240|(i&240)>>4,i&15|(i&15)<<4,1),pr(e,t),t}else if(n.length===7){var i=parseInt(n.substr(1),16);if(!(i>=0&&i<=16777215)){ut(t,0,0,0,1);return}return ut(t,(i&16711680)>>16,(i&65280)>>8,i&255,1),pr(e,t),t}return}var a=n.indexOf("("),o=n.indexOf(")");if(a!==-1&&o+1===n.length){var s=n.substr(0,a),l=n.substr(a+1,o-(a+1)).split(","),u=1;switch(s){case"rgba":if(l.length!==4){ut(t,0,0,0,1);return}u=Lr(l.pop());case"rgb":if(l.length!==3){ut(t,0,0,0,1);return}return ut(t,Ai(l[0]),Ai(l[1]),Ai(l[2]),u),pr(e,t),t;case"hsla":if(l.length!==4){ut(t,0,0,0,1);return}return l[3]=Lr(l[3]),aa(l,t),pr(e,t),t;case"hsl":if(l.length!==3){ut(t,0,0,0,1);return}return aa(l,t),pr(e,t),t;default:return}}ut(t,0,0,0,1)}};Te.parseToFloat=function(e,t){if(t=Te.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function aa(e,t){var r=(parseFloat(e[0])%360+360)%360/360,n=Lr(e[1]),i=Lr(e[2]),a=i<=.5?i*(n+1):i+n-i*n,o=i*2-a;return t=t||[],ut(t,ct(bi(o,a,r+1/3)*255),ct(bi(o,a,r)*255),ct(bi(o,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function nh(e){if(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255,i=Math.min(t,r,n),a=Math.max(t,r,n),o=a-i,s=(a+i)/2,l,u;if(o===0)l=0,u=0;else{s<.5?u=o/(a+i):u=o/(2-a-i);var c=((a-t)/6+o/2)/o,f=((a-r)/6+o/2)/o,d=((a-n)/6+o/2)/o;t===a?l=d-f:r===a?l=1/3+c-d:n===a&&(l=2/3+f-c),l<0&&(l+=1),l>1&&(l-=1)}var h=[l*360,u,s];return e[3]!=null&&h.push(e[3]),h}}Te.lift=function(e,t){var r=Te.parse(e);if(r){for(var n=0;n<3;n++)t<0?r[n]=r[n]*(1-t)|0:r[n]=(255-r[n])*t+r[n]|0;return Te.stringify(r,r.length===4?"rgba":"rgb")}};Te.toHex=function(e){var t=Te.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};Te.fastLerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){r=r||[];var n=e*(t.length-1),i=Math.floor(n),a=Math.ceil(n),o=t[i],s=t[a],l=n-i;return r[0]=ct(Ut(o[0],s[0],l)),r[1]=ct(Ut(o[1],s[1],l)),r[2]=ct(Ut(o[2],s[2],l)),r[3]=an(Ut(o[3],s[3],l)),r}};Te.fastMapToColor=Te.fastLerp;Te.lerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var n=e*(t.length-1),i=Math.floor(n),a=Math.ceil(n),o=Te.parse(t[i]),s=Te.parse(t[a]),l=n-i,u=Te.stringify([ct(Ut(o[0],s[0],l)),ct(Ut(o[1],s[1],l)),ct(Ut(o[2],s[2],l)),an(Ut(o[3],s[3],l))],"rgba");return r?{color:u,leftIndex:i,rightIndex:a,value:n}:u}};Te.mapToColor=Te.lerp;Te.modifyHSL=function(e,t,r,n){if(e=Te.parse(e),e)return e=nh(e),t!=null&&(e[0]=rh(t)),r!=null&&(e[1]=Lr(r)),n!=null&&(e[2]=Lr(n)),Te.stringify(aa(e),"rgba")};Te.modifyAlpha=function(e,t){if(e=Te.parse(e),e&&t!=null)return e[3]=an(t),Te.stringify(e,"rgba")};Te.stringify=function(e,t){if(!(!e||!e.length)){var r=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(r+=","+e[3]),t+"("+r+")"}};const ih=Te;var ah=ih.parseToFloat,wi={};function Uo(e){var t=Object.keys(e);t.sort();for(var r=[],n=0;n<t.length;n++){var i=t[n],a=e[i];a===null?r.push(i):r.push(i+" "+a.toString())}return r.join(`
`)}function oh(e,t,r){r.sort();for(var n=[],i=0;i<r.length;i++){var a=r[i];n.push(a)}var o=Uo(e)+`
`+Uo(t)+`
`+n.join(`
`);if(wi[o])return wi[o];var s=Ue.genGUID();return wi[o]=s,s}var sh=Qe.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var r=this.uniforms[e];r&&(typeof t=="string"&&(t=ah(t)||t),r.value=t,this.autoUpdateTextureStatus&&r.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var r=e[t];this.setUniform(t,r)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var r in e){var n=e[r];this.setUniform(r,n)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var r=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var n=this.uniforms;this._enabledUniforms=Object.keys(n),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(u){var c=this.uniforms[u].type;return c==="t"||c==="tv"},this);var i=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=Ue.clone(e.vertexDefines),this.fragmentDefines=Ue.clone(e.fragmentDefines),t){for(var o in r)n[o]&&(n[o].value=r[o].value);Ue.defaults(this.vertexDefines,i),Ue.defaults(this.fragmentDefines,a)}var s={};for(var l in e.textures)s[l]={shaderType:e.textures[l].shaderType,type:e.textures[l].type,enabled:t&&this._textureStatus[l]?this._textureStatus[l].enabled:!1};this._textureStatus=s,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=Ue.clone(this.vertexDefines),e.fragmentDefines=Ue.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,r){var n=this.vertexDefines,i=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(r=t,t=e,e="both"),r=r??null,(e==="vertex"||e==="both")&&n[t]!==r&&(n[t]=r,this._programKey=""),(e==="fragment"||e==="both")&&i[t]!==r&&(i[t]=r,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var n=r.enabled;n||(r.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var n=!r.enabled;n||(r.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var r in t)t[r].enabled&&e.push(r);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=oh(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}});const Rt=sh;var Dn=1e-6,He=Array,Cr=Math.random,K={};K.create=function(){var e=new He(2);return e[0]=0,e[1]=0,e};K.clone=function(e){var t=new He(2);return t[0]=e[0],t[1]=e[1],t};K.fromValues=function(e,t){var r=new He(2);return r[0]=e,r[1]=t,r};K.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};K.set=function(e,t,r){return e[0]=t,e[1]=r,e};K.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e};K.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e};K.sub=K.subtract;K.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e};K.mul=K.multiply;K.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e};K.div=K.divide;K.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e};K.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e};K.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e};K.scaleAndAdd=function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e};K.distance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1];return Math.sqrt(r*r+n*n)};K.dist=K.distance;K.squaredDistance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1];return r*r+n*n};K.sqrDist=K.squaredDistance;K.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)};K.len=K.length;K.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r};K.sqrLen=K.squaredLength;K.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};K.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};K.normalize=function(e,t){var r=t[0],n=t[1],i=r*r+n*n;return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i),e};K.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};K.cross=function(e,t,r){var n=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=n,e};K.lerp=function(e,t,r,n){var i=t[0],a=t[1];return e[0]=i+n*(r[0]-i),e[1]=a+n*(r[1]-a),e};K.random=function(e,t){t=t||1;var r=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e};K.transformMat2=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[2]*i,e[1]=r[1]*n+r[3]*i,e};K.transformMat2d=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[2]*i+r[4],e[1]=r[1]*n+r[3]*i+r[5],e};K.transformMat3=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[3]*i+r[6],e[1]=r[1]*n+r[4]*i+r[7],e};K.transformMat4=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[4]*i+r[12],e[1]=r[1]*n+r[5]*i+r[13],e};K.forEach=function(){var e=K.create();return function(t,r,n,i,a,o){var s,l;for(r||(r=2),n||(n=0),i?l=Math.min(i*r+n,t.length):l=t.length,s=n;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}}();const z=K;var Q=function(e,t){e=e||0,t=t||0,this.array=z.fromValues(e,t),this._dirty=!0};Q.prototype={constructor:Q,add:function(e){return z.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new Q(this.x,this.y)},copy:function(e){return z.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return z.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return z.dist(this.array,e.array)},distance:function(e){return z.distance(this.array,e.array)},div:function(e){return z.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return z.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return z.dot(this.array,e.array)},len:function(){return z.len(this.array)},length:function(){return z.length(this.array)},lerp:function(e,t,r){return z.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return z.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return z.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return z.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return z.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return z.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return z.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return z.random(this.array,e),this._dirty=!0,this},scale:function(e){return z.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return z.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return z.sqrDist(this.array,e.array)},squaredDistance:function(e){return z.squaredDistance(this.array,e.array)},sqrLen:function(){return z.sqrLen(this.array)},squaredLength:function(){return z.squaredLength(this.array)},sub:function(e){return z.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return z.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return z.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return z.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return z.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return z.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var Ho=Q.prototype;Object.defineProperty(Ho,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(Ho,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}Q.add=function(e,t,r){return z.add(e.array,t.array,r.array),e._dirty=!0,e};Q.set=function(e,t,r){return z.set(e.array,t,r),e._dirty=!0,e};Q.copy=function(e,t){return z.copy(e.array,t.array),e._dirty=!0,e};Q.cross=function(e,t,r){return z.cross(e.array,t.array,r.array),e._dirty=!0,e};Q.dist=function(e,t){return z.distance(e.array,t.array)};Q.distance=Q.dist;Q.div=function(e,t,r){return z.divide(e.array,t.array,r.array),e._dirty=!0,e};Q.divide=Q.div;Q.dot=function(e,t){return z.dot(e.array,t.array)};Q.len=function(e){return z.length(e.array)};Q.lerp=function(e,t,r,n){return z.lerp(e.array,t.array,r.array,n),e._dirty=!0,e};Q.min=function(e,t,r){return z.min(e.array,t.array,r.array),e._dirty=!0,e};Q.max=function(e,t,r){return z.max(e.array,t.array,r.array),e._dirty=!0,e};Q.mul=function(e,t,r){return z.multiply(e.array,t.array,r.array),e._dirty=!0,e};Q.multiply=Q.mul;Q.negate=function(e,t){return z.negate(e.array,t.array),e._dirty=!0,e};Q.normalize=function(e,t){return z.normalize(e.array,t.array),e._dirty=!0,e};Q.random=function(e,t){return z.random(e.array,t),e._dirty=!0,e};Q.scale=function(e,t,r){return z.scale(e.array,t.array,r),e._dirty=!0,e};Q.scaleAndAdd=function(e,t,r,n){return z.scaleAndAdd(e.array,t.array,r.array,n),e._dirty=!0,e};Q.sqrDist=function(e,t){return z.sqrDist(e.array,t.array)};Q.squaredDistance=Q.sqrDist;Q.sqrLen=function(e){return z.sqrLen(e.array)};Q.squaredLength=Q.sqrLen;Q.sub=function(e,t,r){return z.subtract(e.array,t.array,r.array),e._dirty=!0,e};Q.subtract=Q.sub;Q.transformMat2=function(e,t,r){return z.transformMat2(e.array,t.array,r.array),e._dirty=!0,e};Q.transformMat2d=function(e,t,r){return z.transformMat2d(e.array,t.array,r.array),e._dirty=!0,e};Q.transformMat3=function(e,t,r){return z.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};Q.transformMat4=function(e,t,r){return z.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};const et=Q;var Go=1,zo=2,Ci=3,Vo={};function lh(e){for(var t=e.split(`
`),r=0,n=t.length;r<n;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function ko(e,t,r){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),lh(r)].join(`
`)}var Wo=new De.Float32Array(16),uh=Qe.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,r){t&&(e.gl.activeTexture(e.gl.TEXTURE0+r),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var r=this._textureSlot;return this.useTextureSlot(e,t,r),this._textureSlot++,r},setUniform:function(e,t,r,n){var i=this._locations,a=i[r];if(a==null)return!1;switch(t){case"m4":if(!(n instanceof Float32Array)){for(var o=0;o<n.length;o++)Wo[o]=n[o];n=Wo}e.uniformMatrix4fv(a,!1,n);break;case"2i":e.uniform2i(a,n[0],n[1]);break;case"2f":e.uniform2f(a,n[0],n[1]);break;case"3i":e.uniform3i(a,n[0],n[1],n[2]);break;case"3f":e.uniform3f(a,n[0],n[1],n[2]);break;case"4i":e.uniform4i(a,n[0],n[1],n[2],n[3]);break;case"4f":e.uniform4f(a,n[0],n[1],n[2],n[3]);break;case"1i":e.uniform1i(a,n);break;case"1f":e.uniform1f(a,n);break;case"1fv":e.uniform1fv(a,n);break;case"1iv":e.uniform1iv(a,n);break;case"2iv":e.uniform2iv(a,n);break;case"2fv":e.uniform2fv(a,n);break;case"3iv":e.uniform3iv(a,n);break;case"3fv":e.uniform3fv(a,n);break;case"4iv":e.uniform4iv(a,n);break;case"4fv":e.uniform4fv(a,n);break;case"m2":case"m2v":e.uniformMatrix2fv(a,!1,n);break;case"m3":case"m3v":e.uniformMatrix3fv(a,!1,n);break;case"m4v":if(Array.isArray(n)&&Array.isArray(n[0])){for(var s=new De.Float32Array(n.length*16),l=0,o=0;o<n.length;o++)for(var u=n[o],c=0;c<16;c++)s[l++]=u[c];e.uniformMatrix4fv(a,!1,s)}else e.uniformMatrix4fv(a,!1,n);break}return!0},setUniformOfSemantic:function(e,t,r){var n=this.uniformSemantics[t];return n?this.setUniform(e,n.type,n.symbol,r):!1},enableAttributes:function(e,t,r){var n=e.gl,i=this._program,a=this._locations,o;r?o=r.__enabledAttributeList:o=Vo[e.__uid__],o||(r?o=r.__enabledAttributeList=[]:o=Vo[e.__uid__]=[]);for(var s=[],l=0;l<t.length;l++){var u=t[l];if(!this.attributes[u]){s[l]=-1;continue}var c=a[u];if(c==null){if(c=n.getAttribLocation(i,u),c===-1){s[l]=-1;continue}a[u]=c}s[l]=c,o[c]?o[c]=zo:o[c]=Go}for(var l=0;l<o.length;l++)switch(o[l]){case Go:n.enableVertexAttribArray(l),o[l]=Ci;break;case zo:o[l]=Ci;break;case Ci:n.disableVertexAttribArray(l),o[l]=0;break}return s},getAttribLocation:function(e,t){var r=this._locations,n=r[t];return n==null&&(n=e.getAttribLocation(this._program,t),r[t]=n),n},buildProgram:function(e,t,r,n){var i=e.createShader(e.VERTEX_SHADER),a=e.createProgram();e.shaderSource(i,r),e.compileShader(i);var o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,n),e.compileShader(o);var s=ko(e,i,r);if(s||(s=ko(e,o,n),s))return s;if(e.attachShader(a,i),e.attachShader(a,o),t.attributeSemantics.POSITION)e.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);e.bindAttribLocation(a,0,l[0])}if(e.linkProgram(a),e.deleteShader(i),e.deleteShader(o),this._program=a,this.vertexCode=r,this.fragmentCode=n,!e.getProgramParameter(a,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(a);for(var u=0;u<t.uniforms.length;u++){var c=t.uniforms[u];this._locations[c]=e.getUniformLocation(a,c)}}});const ch=uh;var fh=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Xo(e,t,r){function n(o,s,l,u){var c="";isNaN(s)&&(s in t?s=t[s]:s=i[s]),isNaN(l)&&(l in t?l=t[l]:l=i[l]);for(var f=parseInt(s);f<parseInt(l);f++)c+="{"+u.replace(/float\s*\(\s*_idx_\s*\)/g,f.toFixed(1)).replace(/_idx_/g,f)+"}";return c}var i={};for(var a in r)i[a+"_COUNT"]=r[a];return e.replace(fh,n)}function Ri(e,t,r){var n=[];if(t)for(var i in t){var a=t[i];a>0&&n.push("#define "+i.toUpperCase()+"_COUNT "+a)}if(r)for(var o=0;o<r.length;o++){var s=r[o];n.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in e){var l=e[s];l===null?n.push("#define "+s):n.push("#define "+s+" "+l.toString())}return n.join(`
`)}function hh(e){for(var t=[],r=0;r<e.length;r++)t.push("#extension GL_"+e[r]+" : enable");return t.join(`
`)}function dh(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function il(e){this._renderer=e,this._cache={}}il.prototype.getProgram=function(e,t,r){var n=this._cache,i=e.isSkinnedMesh&&e.isSkinnedMesh(),a=e.isInstancedMesh&&e.isInstancedMesh(),o="s"+t.shader.shaderID+"m"+t.getProgramKey();r&&(o+="se"+r.getProgramKey(e.lightGroup)),i&&(o+=",sk"+e.joints.length),a&&(o+=",is");var x=n[o];if(x)return x;var s=r?r.getLightsNumbers(e.lightGroup):{},l=this._renderer,u=l.gl,c=t.getEnabledTextures(),f="";if(i){var d={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>l.getMaxJointNumber()&&(d.USE_SKIN_MATRICES_TEXTURE=null),f+=`
`+Ri(d)+`
`}a&&(f+=`
#define INSTANCING
`);var h=f+Ri(t.vertexDefines,s,c),p=f+Ri(t.fragmentDefines,s,c),v=h+`
`+t.shader.vertex,m=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(T){return l.getGLExtension(T)!=null});m.indexOf("EXT_shader_texture_lod")>=0&&(p+=`
#define SUPPORT_TEXTURE_LOD`),m.indexOf("OES_standard_derivatives")>=0&&(p+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var _=hh(m)+`
`+dh(t.precision)+`
`+p+`
`+t.shader.fragment,y=Xo(v,t.vertexDefines,s),g=Xo(_,t.fragmentDefines,s),x=new ch;x.uniformSemantics=t.shader.uniformSemantics,x.attributes=t.shader.attributes;var E=x.buildProgram(u,t.shader,y,g);return x.__error=E,n[o]=x,x};var qo=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,vh=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,jo=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,ph={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function Et(e){for(var t=[],r=0;r<e;r++)t[r]=0;return t}var Zo={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return Et(2)},vec3:function(){return Et(3)},vec4:function(){return Et(4)},ivec2:function(){return Et(2)},ivec3:function(){return Et(3)},ivec4:function(){return Et(4)},mat2:function(){return Et(4)},mat3:function(){return Et(9)},mat4:function(){return Et(16)},array:function(){return[]}},oa=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],al=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],ol=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],mh={vec4:4,vec3:3,vec2:2,float:1},Di={},sl={};function _h(e,t){var r="vertex:"+e+"fragment:"+t;if(Di[r])return Di[r];var n=Ue.genGUID();return Di[r]=n,sl[n]={vertex:e,fragment:t},n}function Yo(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function mr(){console.error("Wrong uniform/attributes syntax")}function Ko(e,t){for(var r=/[,=\(\):]/,n=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),i=[],a=0;a<n.length;a++)n[a].match(r)?i.push(n[a].charAt(0),n[a].slice(1)):i.push(n[a]);n=i;var o=0,s=1,l=2,u=3,c=4,f=5,d=o,h={},p=null,v;m(n[0]);function m(g){g||mr();var x=g.match(/\[(.*?)\]/);v=g.replace(/\[(.*?)\]/,""),h[v]={},x&&(h[v].isArray=!0,h[v].arraySize=x[1])}for(var a=1;a<n.length;a++){var _=n[a];if(_){if(_==="="){if(d!==o&&d!==u){mr();break}d=s;continue}else if(_===":"){d=c;continue}else if(_===","){if(d===l){if(!(p instanceof Array)){mr();break}p.push(+n[++a])}else d=f;continue}else if(_===")"){h[v].value=new De.Float32Array(p),p=null,d=f;continue}else if(_==="("){if(d!==l){mr();break}if(!(p instanceof Array)){mr();break}p.push(+n[++a]);continue}else if(_.indexOf("vec")>=0){if(d!==s&&d!==c){mr();break}d=l,p=[];continue}else if(d===s){e==="bool"?h[v].value=_==="true":h[v].value=parseFloat(_),p=null;continue}else if(d===c){var y=_;oa.indexOf(y)>=0||al.indexOf(y)>=0||ol.indexOf(y)>=0?h[v].semantic=y:y==="ignore"||y==="unconfigurable"?h[v].ignore=!0:e==="bool"?h[v].value=y==="true":h[v].value=parseFloat(y);continue}m(_),d=o}}return h}function F(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=Yo(e),t=Yo(t),this._shaderID=_h(e,t),this._vertexCode=F.parseImport(e),this._fragmentCode=F.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}F.prototype={constructor:F,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var r=this.uniformTemplates[t];e[t]={type:r.type,value:r.value()}}return e},_parseImport:function(){this._vertexCode=F.parseImport(this.vertex),this._fragmentCode=F.parseImport(this.fragment)},_addSemanticUniform:function(e,t,r){if(oa.indexOf(r)>=0)this.attributeSemantics[r]={symbol:e,type:t};else if(ol.indexOf(r)>=0){var n=!1,i=r;r.match(/TRANSPOSE$/)&&(n=!0,i=r.slice(0,-9)),this.matrixSemantics[r]={symbol:e,type:t,isTranspose:n,semanticNoTranspose:i}}else al.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:e,type:t})},_addMaterialUniform:function(e,t,r,n,i,a){a[e]={type:r,value:i?Zo.array:n||Zo[t],semantic:null}},_parseUniforms:function(){var e={},t=this,r="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(qo,i),r="fragment",this._fragmentCode=this._fragmentCode.replace(qo,i),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function n(a){return a!=null?function(){return a}:null}function i(a,o,s){var l=Ko(o,s),u=[];for(var c in l){var f=l[c],d=f.semantic,h=c,p=ph[o],v=n(l[c].value);l[c].isArray&&(h+="["+l[c].arraySize+"]",p+="v"),u.push(h),t._uniformList.push(c),f.ignore||((o==="sampler2D"||o==="samplerCube")&&(t.textures[c]={shaderType:r,type:o}),d?t._addSemanticUniform(c,p,d):t._addMaterialUniform(c,o,p,v,l[c].isArray,e))}return u.length>0?"uniform "+o+" "+u.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(vh,r);function r(n,i,a){var o=Ko(i,a),s=mh[i]||1,l=[];for(var u in o){var c=o[u].semantic;if(e[u]={type:"float",size:s,semantic:c||null},c){if(oa.indexOf(c)<0)throw new Error('Unkown semantic "'+c+'"');t.attributeSemantics[c]={symbol:u,type:i}}l.push(u)}return"attribute "+i+" "+l.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(jo,r),t="fragment",this._fragmentCode=this._fragmentCode.replace(jo,r);function r(n,i,a){var o=t==="vertex"?e.vertexDefines:e.fragmentDefines;return o[i]||(a==="false"?o[i]=!1:a==="true"?o[i]=!0:o[i]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var e=sl[this._shaderID],t=new F(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(F.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(F.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(F.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(F.prototype,"uniforms",{get:function(){return this._uniformList}}));var gh=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;F.parseImport=function(e){return e=e.replace(gh,function(i,r,n){var i=F.source(n);return i?F.parseImport(i):(console.error('Shader chunk "'+n+'" not existed in library'),"")}),e};var yh=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;F.import=function(e){e.replace(yh,function(t,r,n,a){var a=a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(a){for(var o=n.split("."),s=F.codes,l=0,u;l<o.length-1;)u=o[l++],s[u]||(s[u]={}),s=s[u];u=o[l],s[u]=a}return a})};F.codes={};F.source=function(e){for(var t=e.split("."),r=F.codes,n=0;r&&n<t.length;){var i=t[n++];r=r[i]}return typeof r!="string"?(console.error('Shader "'+e+'" not existed in library'),""):r};const ll=`@export clay.prez.vertex
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
@end`;var ve={};ve.create=function(){var e=new He(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ve.clone=function(e){var t=new He(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};ve.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};ve.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ve.transpose=function(e,t){if(e===t){var r=t[1],n=t[2],i=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=i,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};ve.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],f=t[9],d=t[10],h=t[11],p=t[12],v=t[13],m=t[14],_=t[15],y=r*s-n*o,g=r*l-i*o,x=r*u-a*o,E=n*l-i*s,T=n*u-a*s,S=i*u-a*l,A=c*v-f*p,w=c*m-d*p,D=c*_-h*p,R=f*m-d*v,C=f*_-h*v,P=d*_-h*m,L=y*P-g*C+x*R+E*D-T*w+S*A;return L?(L=1/L,e[0]=(s*P-l*C+u*R)*L,e[1]=(i*C-n*P-a*R)*L,e[2]=(v*S-m*T+_*E)*L,e[3]=(d*T-f*S-h*E)*L,e[4]=(l*D-o*P-u*w)*L,e[5]=(r*P-i*D+a*w)*L,e[6]=(m*x-p*S-_*g)*L,e[7]=(c*S-d*x+h*g)*L,e[8]=(o*C-s*D+u*A)*L,e[9]=(n*D-r*C-a*A)*L,e[10]=(p*T-v*x+_*y)*L,e[11]=(f*x-c*T-h*y)*L,e[12]=(s*w-o*R-l*A)*L,e[13]=(r*R-n*w+i*A)*L,e[14]=(v*g-p*E-m*y)*L,e[15]=(c*E-f*g+d*y)*L,e):null};ve.adjoint=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],f=t[9],d=t[10],h=t[11],p=t[12],v=t[13],m=t[14],_=t[15];return e[0]=s*(d*_-h*m)-f*(l*_-u*m)+v*(l*h-u*d),e[1]=-(n*(d*_-h*m)-f*(i*_-a*m)+v*(i*h-a*d)),e[2]=n*(l*_-u*m)-s*(i*_-a*m)+v*(i*u-a*l),e[3]=-(n*(l*h-u*d)-s*(i*h-a*d)+f*(i*u-a*l)),e[4]=-(o*(d*_-h*m)-c*(l*_-u*m)+p*(l*h-u*d)),e[5]=r*(d*_-h*m)-c*(i*_-a*m)+p*(i*h-a*d),e[6]=-(r*(l*_-u*m)-o*(i*_-a*m)+p*(i*u-a*l)),e[7]=r*(l*h-u*d)-o*(i*h-a*d)+c*(i*u-a*l),e[8]=o*(f*_-h*v)-c*(s*_-u*v)+p*(s*h-u*f),e[9]=-(r*(f*_-h*v)-c*(n*_-a*v)+p*(n*h-a*f)),e[10]=r*(s*_-u*v)-o*(n*_-a*v)+p*(n*u-a*s),e[11]=-(r*(s*h-u*f)-o*(n*h-a*f)+c*(n*u-a*s)),e[12]=-(o*(f*m-d*v)-c*(s*m-l*v)+p*(s*d-l*f)),e[13]=r*(f*m-d*v)-c*(n*m-i*v)+p*(n*d-i*f),e[14]=-(r*(s*m-l*v)-o*(n*m-i*v)+p*(n*l-i*s)),e[15]=r*(s*d-l*f)-o*(n*d-i*f)+c*(n*l-i*s),e};ve.determinant=function(e){var t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8],c=e[9],f=e[10],d=e[11],h=e[12],p=e[13],v=e[14],m=e[15],_=t*o-r*a,y=t*s-n*a,g=t*l-i*a,x=r*s-n*o,E=r*l-i*o,T=n*l-i*s,S=u*p-c*h,A=u*v-f*h,w=u*m-d*h,D=c*v-f*p,R=c*m-d*p,C=f*m-d*v;return _*C-y*R+g*D+x*w-E*A+T*S};ve.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],c=t[7],f=t[8],d=t[9],h=t[10],p=t[11],v=t[12],m=t[13],_=t[14],y=t[15],g=r[0],x=r[1],E=r[2],T=r[3];return e[0]=g*n+x*s+E*f+T*v,e[1]=g*i+x*l+E*d+T*m,e[2]=g*a+x*u+E*h+T*_,e[3]=g*o+x*c+E*p+T*y,g=r[4],x=r[5],E=r[6],T=r[7],e[4]=g*n+x*s+E*f+T*v,e[5]=g*i+x*l+E*d+T*m,e[6]=g*a+x*u+E*h+T*_,e[7]=g*o+x*c+E*p+T*y,g=r[8],x=r[9],E=r[10],T=r[11],e[8]=g*n+x*s+E*f+T*v,e[9]=g*i+x*l+E*d+T*m,e[10]=g*a+x*u+E*h+T*_,e[11]=g*o+x*c+E*p+T*y,g=r[12],x=r[13],E=r[14],T=r[15],e[12]=g*n+x*s+E*f+T*v,e[13]=g*i+x*l+E*d+T*m,e[14]=g*a+x*u+E*h+T*_,e[15]=g*o+x*c+E*p+T*y,e};ve.multiplyAffine=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[4],s=t[5],l=t[6],u=t[8],c=t[9],f=t[10],d=t[12],h=t[13],p=t[14],v=r[0],m=r[1],_=r[2];return e[0]=v*n+m*o+_*u,e[1]=v*i+m*s+_*c,e[2]=v*a+m*l+_*f,v=r[4],m=r[5],_=r[6],e[4]=v*n+m*o+_*u,e[5]=v*i+m*s+_*c,e[6]=v*a+m*l+_*f,v=r[8],m=r[9],_=r[10],e[8]=v*n+m*o+_*u,e[9]=v*i+m*s+_*c,e[10]=v*a+m*l+_*f,v=r[12],m=r[13],_=r[14],e[12]=v*n+m*o+_*u+d,e[13]=v*i+m*s+_*c+h,e[14]=v*a+m*l+_*f+p,e};ve.mul=ve.multiply;ve.mulAffine=ve.multiplyAffine;ve.translate=function(e,t,r){var n=r[0],i=r[1],a=r[2],o,s,l,u,c,f,d,h,p,v,m,_;return t===e?(e[12]=t[0]*n+t[4]*i+t[8]*a+t[12],e[13]=t[1]*n+t[5]*i+t[9]*a+t[13],e[14]=t[2]*n+t[6]*i+t[10]*a+t[14],e[15]=t[3]*n+t[7]*i+t[11]*a+t[15]):(o=t[0],s=t[1],l=t[2],u=t[3],c=t[4],f=t[5],d=t[6],h=t[7],p=t[8],v=t[9],m=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=l,e[3]=u,e[4]=c,e[5]=f,e[6]=d,e[7]=h,e[8]=p,e[9]=v,e[10]=m,e[11]=_,e[12]=o*n+c*i+p*a+t[12],e[13]=s*n+f*i+v*a+t[13],e[14]=l*n+d*i+m*a+t[14],e[15]=u*n+h*i+_*a+t[15]),e};ve.scale=function(e,t,r){var n=r[0],i=r[1],a=r[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};ve.rotate=function(e,t,r,n){var i=n[0],a=n[1],o=n[2],s=Math.sqrt(i*i+a*a+o*o),l,u,c,f,d,h,p,v,m,_,y,g,x,E,T,S,A,w,D,R,C,P,L,I;return Math.abs(s)<Dn?null:(s=1/s,i*=s,a*=s,o*=s,l=Math.sin(r),u=Math.cos(r),c=1-u,f=t[0],d=t[1],h=t[2],p=t[3],v=t[4],m=t[5],_=t[6],y=t[7],g=t[8],x=t[9],E=t[10],T=t[11],S=i*i*c+u,A=a*i*c+o*l,w=o*i*c-a*l,D=i*a*c-o*l,R=a*a*c+u,C=o*a*c+i*l,P=i*o*c+a*l,L=a*o*c-i*l,I=o*o*c+u,e[0]=f*S+v*A+g*w,e[1]=d*S+m*A+x*w,e[2]=h*S+_*A+E*w,e[3]=p*S+y*A+T*w,e[4]=f*D+v*R+g*C,e[5]=d*D+m*R+x*C,e[6]=h*D+_*R+E*C,e[7]=p*D+y*R+T*C,e[8]=f*P+v*L+g*I,e[9]=d*P+m*L+x*I,e[10]=h*P+_*L+E*I,e[11]=p*P+y*L+T*I,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};ve.rotateX=function(e,t,r){var n=Math.sin(r),i=Math.cos(r),a=t[4],o=t[5],s=t[6],l=t[7],u=t[8],c=t[9],f=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*i+u*n,e[5]=o*i+c*n,e[6]=s*i+f*n,e[7]=l*i+d*n,e[8]=u*i-a*n,e[9]=c*i-o*n,e[10]=f*i-s*n,e[11]=d*i-l*n,e};ve.rotateY=function(e,t,r){var n=Math.sin(r),i=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[8],c=t[9],f=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i-u*n,e[1]=o*i-c*n,e[2]=s*i-f*n,e[3]=l*i-d*n,e[8]=a*n+u*i,e[9]=o*n+c*i,e[10]=s*n+f*i,e[11]=l*n+d*i,e};ve.rotateZ=function(e,t,r){var n=Math.sin(r),i=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[4],c=t[5],f=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*i+u*n,e[1]=o*i+c*n,e[2]=s*i+f*n,e[3]=l*i+d*n,e[4]=u*i-a*n,e[5]=c*i-o*n,e[6]=f*i-s*n,e[7]=d*i-l*n,e};ve.fromRotationTranslation=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=n+n,l=i+i,u=a+a,c=n*s,f=n*l,d=n*u,h=i*l,p=i*u,v=a*u,m=o*s,_=o*l,y=o*u;return e[0]=1-(h+v),e[1]=f+y,e[2]=d-_,e[3]=0,e[4]=f-y,e[5]=1-(c+v),e[6]=p+m,e[7]=0,e[8]=d+_,e[9]=p-m,e[10]=1-(c+h),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e};ve.fromQuat=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r+r,s=n+n,l=i+i,u=r*o,c=n*o,f=n*s,d=i*o,h=i*s,p=i*l,v=a*o,m=a*s,_=a*l;return e[0]=1-f-p,e[1]=c+_,e[2]=d-m,e[3]=0,e[4]=c-_,e[5]=1-u-p,e[6]=h+v,e[7]=0,e[8]=d+m,e[9]=h-v,e[10]=1-u-f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ve.frustum=function(e,t,r,n,i,a,o){var s=1/(r-t),l=1/(i-n),u=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(i+n)*l,e[10]=(o+a)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*u,e[15]=0,e};ve.perspective=function(e,t,r,n,i){var a=1/Math.tan(t/2),o=1/(n-i);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(i+n)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*i*n*o,e[15]=0,e};ve.ortho=function(e,t,r,n,i,a,o){var s=1/(t-r),l=1/(n-i),u=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+r)*s,e[13]=(i+n)*l,e[14]=(o+a)*u,e[15]=1,e};ve.lookAt=function(e,t,r,n){var i,a,o,s,l,u,c,f,d,h,p=t[0],v=t[1],m=t[2],_=n[0],y=n[1],g=n[2],x=r[0],E=r[1],T=r[2];return Math.abs(p-x)<Dn&&Math.abs(v-E)<Dn&&Math.abs(m-T)<Dn?ve.identity(e):(c=p-x,f=v-E,d=m-T,h=1/Math.sqrt(c*c+f*f+d*d),c*=h,f*=h,d*=h,i=y*d-g*f,a=g*c-_*d,o=_*f-y*c,h=Math.sqrt(i*i+a*a+o*o),h?(h=1/h,i*=h,a*=h,o*=h):(i=0,a=0,o=0),s=f*o-d*a,l=d*i-c*o,u=c*a-f*i,h=Math.sqrt(s*s+l*l+u*u),h?(h=1/h,s*=h,l*=h,u*=h):(s=0,l=0,u=0),e[0]=i,e[1]=s,e[2]=c,e[3]=0,e[4]=a,e[5]=l,e[6]=f,e[7]=0,e[8]=o,e[9]=u,e[10]=d,e[11]=0,e[12]=-(i*p+a*v+o*m),e[13]=-(s*p+l*v+u*m),e[14]=-(c*p+f*v+d*m),e[15]=1,e)};ve.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};const N=ve;var X={};X.create=function(){var e=new He(3);return e[0]=0,e[1]=0,e[2]=0,e};X.clone=function(e){var t=new He(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};X.fromValues=function(e,t,r){var n=new He(3);return n[0]=e,n[1]=t,n[2]=r,n};X.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};X.set=function(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e};X.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e};X.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e};X.sub=X.subtract;X.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e};X.mul=X.multiply;X.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e};X.div=X.divide;X.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e};X.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e};X.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e};X.scaleAndAdd=function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e};X.distance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2];return Math.sqrt(r*r+n*n+i*i)};X.dist=X.distance;X.squaredDistance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2];return r*r+n*n+i*i};X.sqrDist=X.squaredDistance;X.length=function(e){var t=e[0],r=e[1],n=e[2];return Math.sqrt(t*t+r*r+n*n)};X.len=X.length;X.squaredLength=function(e){var t=e[0],r=e[1],n=e[2];return t*t+r*r+n*n};X.sqrLen=X.squaredLength;X.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};X.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};X.normalize=function(e,t){var r=t[0],n=t[1],i=t[2],a=r*r+n*n+i*i;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e};X.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};X.cross=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=r[0],s=r[1],l=r[2];return e[0]=i*l-a*s,e[1]=a*o-n*l,e[2]=n*s-i*o,e};X.lerp=function(e,t,r,n){var i=t[0],a=t[1],o=t[2];return e[0]=i+n*(r[0]-i),e[1]=a+n*(r[1]-a),e[2]=o+n*(r[2]-o),e};X.random=function(e,t){t=t||1;var r=Cr()*2*Math.PI,n=Cr()*2-1,i=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(r)*i,e[1]=Math.sin(r)*i,e[2]=n*t,e};X.transformMat4=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=r[3]*n+r[7]*i+r[11]*a+r[15];return o=o||1,e[0]=(r[0]*n+r[4]*i+r[8]*a+r[12])/o,e[1]=(r[1]*n+r[5]*i+r[9]*a+r[13])/o,e[2]=(r[2]*n+r[6]*i+r[10]*a+r[14])/o,e};X.transformMat3=function(e,t,r){var n=t[0],i=t[1],a=t[2];return e[0]=n*r[0]+i*r[3]+a*r[6],e[1]=n*r[1]+i*r[4]+a*r[7],e[2]=n*r[2]+i*r[5]+a*r[8],e};X.transformQuat=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],c=u*n+s*a-l*i,f=u*i+l*n-o*a,d=u*a+o*i-s*n,h=-o*n-s*i-l*a;return e[0]=c*u+h*-o+f*-l-d*-s,e[1]=f*u+h*-s+d*-o-c*-l,e[2]=d*u+h*-l+c*-s-f*-o,e};X.rotateX=function(e,t,r,n){var i=[],a=[];return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],a[0]=i[0],a[1]=i[1]*Math.cos(n)-i[2]*Math.sin(n),a[2]=i[1]*Math.sin(n)+i[2]*Math.cos(n),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};X.rotateY=function(e,t,r,n){var i=[],a=[];return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],a[0]=i[2]*Math.sin(n)+i[0]*Math.cos(n),a[1]=i[1],a[2]=i[2]*Math.cos(n)-i[0]*Math.sin(n),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};X.rotateZ=function(e,t,r,n){var i=[],a=[];return i[0]=t[0]-r[0],i[1]=t[1]-r[1],i[2]=t[2]-r[2],a[0]=i[0]*Math.cos(n)-i[1]*Math.sin(n),a[1]=i[0]*Math.sin(n)+i[1]*Math.cos(n),a[2]=i[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};X.forEach=function(){var e=X.create();return function(t,r,n,i,a,o){var s,l;for(r||(r=3),n||(n=0),i?l=Math.min(i*r+n,t.length):l=t.length,s=n;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}();X.angle=function(e,t){var r=X.fromValues(e[0],e[1],e[2]),n=X.fromValues(t[0],t[1],t[2]);X.normalize(r,r),X.normalize(n,n);var i=X.dot(r,n);return i>1?0:Math.acos(i)};const b=X;F.import(ll);var xe=N.create,$o={};function Qo(e){return e.material}function xh(e,t,r){return t.uniforms[r].value}function Th(e,t,r,n){return r!==n}function Eh(e){return!0}function Jo(){}var es={float:M.FLOAT,byte:M.BYTE,ubyte:M.UNSIGNED_BYTE,short:M.SHORT,ushort:M.UNSIGNED_SHORT};function Sh(e,t,r){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=r,this.vao=null}function Ah(e){var t,r;this.bind=function(n){t||(t=De.createCanvas(),t.width=t.height=1,t.getContext("2d"));var i=n.gl,a=!r;a&&(r=i.createTexture()),i.bindTexture(i.TEXTURE_2D,r),a&&i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,t)},this.unbind=function(n){n.gl.bindTexture(n.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var Ht=Qe.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=De.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new Qf(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new il(this),this._placeholderTexture=new Ah},{resize:function(e,t){var r=this.canvas,n=this.devicePixelRatio;e!=null?(r.style&&(r.style.width=e+"px",r.style.height=t+"px"),r.width=e*n,r.height=t*n,this._width=e,this._height=t):(this._width=r.width/n,this._height=r.height/n),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,r,n,i){if(typeof e=="object"){var a=e;e=a.x,t=a.y,r=a.width,n=a.height,i=a.devicePixelRatio}i=i||this.devicePixelRatio,this.gl.viewport(e*i,t*i,r*i,n*i),this.viewport={x:e,y:t,width:r,height:n,devicePixelRatio:i}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,r,n){var i=this.gl,a=this.clearColor;if(this.clearBit){i.colorMask(!0,!0,!0,!0),i.depthMask(!0);var o=this.viewport,s=!1,l=o.devicePixelRatio;(o.width!==this._width||o.height!==this._height||l&&l!==this.devicePixelRatio||o.x||o.y)&&(s=!0,i.enable(i.SCISSOR_TEST),i.scissor(o.x*l,o.y*l,o.width*l,o.height*l)),i.clearColor(a[0],a[1],a[2],a[3]),i.clear(this.clearBit),s&&i.disable(i.SCISSOR_TEST)}if(r||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var u=e.updateRenderList(t,!0);this._sceneRendering=e;var c=u.opaque,f=u.transparent,d=e.material;e.trigger("beforerender",this,e,t,u),n?(this.renderPreZ(c,e,t),i.depthFunc(i.LEQUAL)):i.depthFunc(i.LESS);for(var h=xe(),p=b.create(),v=0;v<f.length;v++){var m=f[v];N.multiplyAffine(h,t.viewMatrix.array,m.worldTransform.array),b.transformMat4(p,m.position.array,h),m.__depth=p[2]}this.renderPass(c,t,{getMaterial:function(_){return d||_.material},sortCompare:this.opaqueSortCompare}),this.renderPass(f,t,{getMaterial:function(_){return d||_.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,u),this._sceneRendering=null},getProgram:function(e,t,r){return t=t||e.material,this._programMgr.getProgram(e,t,r)},validateProgram:function(e){if(e.__error){var t=e.__error;if($o[e.__uid__])return;if($o[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,r){var n=r&&r.getMaterial||Qo;t=t||null;for(var i=0;i<e.length;i++){var a=e[i],o=n.call(this,a);if(i>0){var s=e[i-1],l=s.joints?s.joints.length:0,u=a.joints?a.joints.length:0;if(u===l&&a.material===s.material&&a.lightGroup===s.lightGroup){a.__program=s.__program;continue}}var c=this._programMgr.getProgram(a,o,t);this.validateProgram(c),a.__program=c}},renderPass:function(e,t,r){this.trigger("beforerenderpass",this,e,t,r),r=r||{},r.getMaterial=r.getMaterial||Qo,r.getUniform=r.getUniform||xh,r.isMaterialChanged=r.isMaterialChanged||Th,r.beforeRender=r.beforeRender||Jo,r.afterRender=r.afterRender||Jo;var n=r.ifRender||Eh;this.updatePrograms(e,this._sceneRendering,r),r.sortCompare&&e.sort(r.sortCompare);var i=this.viewport,a=i.devicePixelRatio,o=[i.x*a,i.y*a,i.width*a,i.height*a],s=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*s,this._height*s],u=[o[2],o[3]],c=Date.now();t?(N.copy(ye.VIEW,t.viewMatrix.array),N.copy(ye.PROJECTION,t.projectionMatrix.array),N.copy(ye.VIEWINVERSE,t.worldTransform.array)):(N.identity(ye.VIEW),N.identity(ye.PROJECTION),N.identity(ye.VIEWINVERSE)),N.multiply(ye.VIEWPROJECTION,ye.PROJECTION,ye.VIEW),N.invert(ye.PROJECTIONINVERSE,ye.PROJECTION),N.invert(ye.VIEWPROJECTIONINVERSE,ye.VIEWPROJECTION);for(var f=this.gl,d=this._sceneRendering,h,p,v,m,_,y,g,x,E,T,S,A,w=null,D=0;D<e.length;D++){var R=e[D],C=R.worldTransform!=null,P;if(n(R)){C&&(P=R.isSkinnedMesh&&R.isSkinnedMesh()?R.offsetMatrix?R.offsetMatrix.array:ye.IDENTITY:R.worldTransform.array);var L=R.geometry,I=r.getMaterial.call(this,R),O=R.__program,H=I.shader,G=L.__uid__+"-"+O.__uid__,q=G!==T;T=G,q&&w&&w.bindVertexArrayOES(null),C&&(N.copy(ye.WORLD,P),N.multiply(ye.WORLDVIEWPROJECTION,ye.VIEWPROJECTION,P),N.multiplyAffine(ye.WORLDVIEW,ye.VIEW,P),(H.matrixSemantics.WORLDINVERSE||H.matrixSemantics.WORLDINVERSETRANSPOSE)&&N.invert(ye.WORLDINVERSE,P),(H.matrixSemantics.WORLDVIEWINVERSE||H.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&N.invert(ye.WORLDVIEWINVERSE,ye.WORLDVIEW),(H.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||H.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&N.invert(ye.WORLDVIEWPROJECTIONINVERSE,ye.WORLDVIEWPROJECTION)),R.beforeRender&&R.beforeRender(this),r.beforeRender.call(this,R,I,h);var ae=O!==p;ae?(O.bind(this),O.setUniformOfSemantic(f,"VIEWPORT",o),O.setUniformOfSemantic(f,"WINDOW_SIZE",l),t&&(O.setUniformOfSemantic(f,"NEAR",t.near),O.setUniformOfSemantic(f,"FAR",t.far)),O.setUniformOfSemantic(f,"DEVICEPIXELRATIO",a),O.setUniformOfSemantic(f,"TIME",c),O.setUniformOfSemantic(f,"VIEWPORT_SIZE",u),d&&d.setLightUniforms(O,R.lightGroup,this)):O=p,(ae||r.isMaterialChanged(R,v,I,h))&&(I.depthTest!==m&&(I.depthTest?f.enable(f.DEPTH_TEST):f.disable(f.DEPTH_TEST),m=I.depthTest),I.depthMask!==_&&(f.depthMask(I.depthMask),_=I.depthMask),I.transparent!==E&&(I.transparent?f.enable(f.BLEND):f.disable(f.BLEND),E=I.transparent),I.transparent&&(I.blend?I.blend(f):(f.blendEquationSeparate(f.FUNC_ADD,f.FUNC_ADD),f.blendFuncSeparate(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA,f.ONE,f.ONE_MINUS_SRC_ALPHA))),A=this._bindMaterial(R,I,O,v||null,h||null,p||null,r.getUniform),h=I);var te=H.matrixSemanticKeys;if(C)for(var _e=0;_e<te.length;_e++){var oe=te[_e],fe=H.matrixSemantics[oe],Ce=ye[oe];if(fe.isTranspose){var ue=ye[fe.semanticNoTranspose];N.transpose(Ce,ue)}O.setUniform(f,fe.type,fe.symbol,Ce)}R.cullFace!==g&&(g=R.cullFace,f.cullFace(g)),R.frontFace!==x&&(x=R.frontFace,f.frontFace(x)),R.culling!==y&&(y=R.culling,y?f.enable(f.CULL_FACE):f.disable(f.CULL_FACE)),this._updateSkeleton(R,O,A),q&&(S=this._bindVAO(w,H,L,O)),this._renderObject(R,S,O),r.afterRender(this,R),R.afterRender&&R.afterRender(this),p=O,v=R}}this.trigger("afterrenderpass",this,e,t,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,r){var n=this.gl,i=e.skeleton;if(i)if(i.update(),e.joints.length>this.getMaxJointNumber()){var a=i.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,a,r),t.setUniform(n,"1i","skinMatricesTexture",r),t.setUniform(n,"1f","skinMatricesTextureSize",a.width)}else{var o=i.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(n,"SKIN_MATRIX",o)}},_renderObject:function(e,t,r){var n=this.gl,i=e.geometry,a=e.mode;a==null&&(a=4);var o=null,s=e.isInstancedMesh&&e.isInstancedMesh();if(s&&(o=this.getGLExtension("ANGLE_instanced_arrays"),!o)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var l;if(s&&(l=this._bindInstancedAttributes(e,r,o)),t.indicesBuffer){var u=this.getGLExtension("OES_element_index_uint"),c=u&&i.indices instanceof Uint32Array,f=c?n.UNSIGNED_INT:n.UNSIGNED_SHORT;s?o.drawElementsInstancedANGLE(a,t.indicesBuffer.count,f,0,e.getInstanceCount()):n.drawElements(a,t.indicesBuffer.count,f,0)}else s?o.drawArraysInstancedANGLE(a,0,i.vertexCount,e.getInstanceCount()):n.drawArrays(a,0,i.vertexCount);if(s)for(var d=0;d<l.length;d++)n.disableVertexAttribArray(l[d])},_bindInstancedAttributes:function(e,t,r){for(var n=this.gl,i=e.getInstancedAttributesBuffers(this),a=[],o=0;o<i.length;o++){var s=i[o],l=t.getAttribLocation(n,s.symbol);if(!(l<0)){var u=es[s.type]||n.FLOAT;n.enableVertexAttribArray(l),n.bindBuffer(n.ARRAY_BUFFER,s.buffer),n.vertexAttribPointer(l,s.size,u,!1,0,0),r.vertexAttribDivisorANGLE(l,s.divisor),a.push(l)}}return a},_bindMaterial:function(e,t,r,n,i,a,o){for(var s=this.gl,l=a===r,u=r.currentTextureSlot(),c=t.getEnabledUniforms(),f=t.getTextureUniforms(),d=this._placeholderTexture,h=0;h<f.length;h++){var p=f[h],v=o(e,t,p),m=t.uniforms[p].type;if(m==="t"&&v)v.__slot=-1;else if(m==="tv")for(var _=0;_<v.length;_++)v[_]&&(v[_].__slot=-1)}d.__slot=-1;for(var h=0;h<c.length;h++){var p=c[h],y=t.uniforms[p],v=o(e,t,p),m=y.type,g=m==="t";if(g&&(!v||!v.isRenderable())&&(v=d),i&&l){var x=o(n,i,p);if(g&&(!x||!x.isRenderable())&&(x=d),x===v){if(g)r.takeCurrentTextureSlot(this,null);else if(m==="tv"&&v)for(var _=0;_<v.length;_++)r.takeCurrentTextureSlot(this,null);continue}}if(v!=null)if(g)if(v.__slot<0){var E=r.currentTextureSlot(),T=r.setUniform(s,"1i",p,E);T&&(r.takeCurrentTextureSlot(this,v),v.__slot=E)}else r.setUniform(s,"1i",p,v.__slot);else if(Array.isArray(v)){if(v.length===0)continue;if(m==="tv"){if(!r.hasUniform(p))continue;for(var S=[],_=0;_<v.length;_++){var A=v[_];if(A.__slot<0){var E=r.currentTextureSlot();S.push(E),r.takeCurrentTextureSlot(this,A),A.__slot=E}else S.push(A.__slot)}r.setUniform(s,"1iv",p,S)}else r.setUniform(s,y.type,p,v)}else r.setUniform(s,y.type,p,v)}var w=r.currentTextureSlot();return r.resetTextureSlot(u),w},_bindVAO:function(e,t,r,n){var i=!r.dynamic,a=this.gl,o=this.__uid__+"-"+n.__uid__,s=r.__vaoCache[o];if(!s){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var u=l[0],c=u.attributeBuffers,x=u.indicesBuffer,g=[],f=[],d=0;d<c.length;d++){var h=c[d],p=h.name,v=h.semantic,m;if(v){var _=t.attributeSemantics[v];m=_&&_.symbol}else m=p;m&&n.attributes[m]&&(g.push(h),f.push(m))}s=new Sh(g,f,x),i&&(r.__vaoCache[o]=s)}var y=!0;e&&i&&(s.vao==null?s.vao=e.createVertexArrayOES():y=!1,e.bindVertexArrayOES(s.vao));var g=s.availableAttributes,x=s.indicesBuffer;if(y){for(var E=n.enableAttributes(this,s.availableAttributeSymbols,e&&i&&s),d=0;d<g.length;d++){var T=E[d];if(T!==-1){var h=g[d],S=h.buffer,A=h.size,w=es[h.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,S),a.vertexAttribPointer(T,A,w,!1,0,0)}}r.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,x.buffer)}return s},renderPreZ:function(e,t,r){var n=this.gl,i=this._prezMaterial||new Rt({shader:new F(F.source("clay.prez.vertex"),F.source("clay.prez.fragment"))});this._prezMaterial=i,n.colorMask(!1,!1,!1,!1),n.depthMask(!0),this.renderPass(e,r,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,o){var s=a.material,l=o.material;return s.get("diffuseMap")!==l.get("diffuseMap")||(s.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(a,o,s){if(s==="alphaMap")return a.material.get("diffuseMap");if(s==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var l=a.material.get("alphaCutoff");return l||0}return 0}else return s==="uvRepeat"?a.material.get("uvRepeat"):s==="uvOffset"?a.material.get("uvOffset"):o.get(s)},getMaterial:function(){return i},sort:this.opaqueSortCompare}),n.colorMask(!0,!0,!0,!0),n.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,r){e.getParent()&&e.getParent().remove(e);var n={};e.traverse(function(i){var a=i.material;if(i.geometry&&t&&i.geometry.dispose(this),r&&a&&!n[a.__uid__]){for(var o=a.getTextureUniforms(),s=0;s<o.length;s++){var l=o[s],u=a.uniforms[l].value,c=a.uniforms[l].type;if(u){if(c==="t")u.dispose&&u.dispose(this);else if(c==="tv")for(var f=0;f<u.length;f++)u[f]&&u[f].dispose&&u[f].dispose(this)}}n[a.__uid__]=!0}i.dispose&&i.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,r){r||(r=new et),t=this._height-t;var n=this.viewport,i=r.array;return i[0]=(e-n.x)/n.width,i[0]=i[0]*2-1,i[1]=(t-n.y)/n.height,i[1]=i[1]*2-1,r}});Ht.opaqueSortCompare=Ht.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};Ht.transparentSortCompare=Ht.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var ye={IDENTITY:xe(),WORLD:xe(),VIEW:xe(),PROJECTION:xe(),WORLDVIEW:xe(),VIEWPROJECTION:xe(),WORLDVIEWPROJECTION:xe(),WORLDINVERSE:xe(),VIEWINVERSE:xe(),PROJECTIONINVERSE:xe(),WORLDVIEWINVERSE:xe(),VIEWPROJECTIONINVERSE:xe(),WORLDVIEWPROJECTIONINVERSE:xe(),WORLDTRANSPOSE:xe(),VIEWTRANSPOSE:xe(),PROJECTIONTRANSPOSE:xe(),WORLDVIEWTRANSPOSE:xe(),VIEWPROJECTIONTRANSPOSE:xe(),WORLDVIEWPROJECTIONTRANSPOSE:xe(),WORLDINVERSETRANSPOSE:xe(),VIEWINVERSETRANSPOSE:xe(),PROJECTIONINVERSETRANSPOSE:xe(),WORLDVIEWINVERSETRANSPOSE:xe(),VIEWPROJECTIONINVERSETRANSPOSE:xe(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:xe()};Ht.COLOR_BUFFER_BIT=M.COLOR_BUFFER_BIT;Ht.DEPTH_BUFFER_BIT=M.DEPTH_BUFFER_BIT;Ht.STENCIL_BUFFER_BIT=M.STENCIL_BUFFER_BIT;const en=Ht;var W=function(e,t,r){e=e||0,t=t||0,r=r||0,this.array=b.fromValues(e,t,r),this._dirty=!0};W.prototype={constructor:W,add:function(e){return b.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new W(this.x,this.y,this.z)},copy:function(e){return b.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return b.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return b.dist(this.array,e.array)},distance:function(e){return b.distance(this.array,e.array)},div:function(e){return b.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return b.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return b.dot(this.array,e.array)},len:function(){return b.len(this.array)},length:function(){return b.length(this.array)},lerp:function(e,t,r){return b.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return b.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return b.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return b.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return b.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return b.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return b.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return b.random(this.array,e),this._dirty=!0,this},scale:function(e){return b.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return b.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return b.sqrDist(this.array,e.array)},squaredDistance:function(e){return b.squaredDistance(this.array,e.array)},sqrLen:function(){return b.sqrLen(this.array)},squaredLength:function(){return b.squaredLength(this.array)},sub:function(e){return b.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return b.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return b.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return b.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return b.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var r=-1/t[2];t[0]=e[0]*t[0]*r,t[1]=e[5]*t[1]*r,t[2]=(e[10]*t[2]+e[14])*r}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){W.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){W.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var gn=Object.defineProperty;if(gn){var Li=W.prototype;gn(Li,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),gn(Li,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),gn(Li,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}W.add=function(e,t,r){return b.add(e.array,t.array,r.array),e._dirty=!0,e};W.set=function(e,t,r,n){b.set(e.array,t,r,n),e._dirty=!0};W.copy=function(e,t){return b.copy(e.array,t.array),e._dirty=!0,e};W.cross=function(e,t,r){return b.cross(e.array,t.array,r.array),e._dirty=!0,e};W.dist=function(e,t){return b.distance(e.array,t.array)};W.distance=W.dist;W.div=function(e,t,r){return b.divide(e.array,t.array,r.array),e._dirty=!0,e};W.divide=W.div;W.dot=function(e,t){return b.dot(e.array,t.array)};W.len=function(e){return b.length(e.array)};W.lerp=function(e,t,r,n){return b.lerp(e.array,t.array,r.array,n),e._dirty=!0,e};W.min=function(e,t,r){return b.min(e.array,t.array,r.array),e._dirty=!0,e};W.max=function(e,t,r){return b.max(e.array,t.array,r.array),e._dirty=!0,e};W.mul=function(e,t,r){return b.multiply(e.array,t.array,r.array),e._dirty=!0,e};W.multiply=W.mul;W.negate=function(e,t){return b.negate(e.array,t.array),e._dirty=!0,e};W.normalize=function(e,t){return b.normalize(e.array,t.array),e._dirty=!0,e};W.random=function(e,t){return b.random(e.array,t),e._dirty=!0,e};W.scale=function(e,t,r){return b.scale(e.array,t.array,r),e._dirty=!0,e};W.scaleAndAdd=function(e,t,r,n){return b.scaleAndAdd(e.array,t.array,r.array,n),e._dirty=!0,e};W.sqrDist=function(e,t){return b.sqrDist(e.array,t.array)};W.squaredDistance=W.sqrDist;W.sqrLen=function(e){return b.sqrLen(e.array)};W.squaredLength=W.sqrLen;W.sub=function(e,t,r){return b.subtract(e.array,t.array,r.array),e._dirty=!0,e};W.subtract=W.sub;W.transformMat3=function(e,t,r){return b.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};W.transformMat4=function(e,t,r){return b.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};W.transformQuat=function(e,t,r){return b.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};function it(e,t,r){return e<t?t:e>r?r:e}var de=Math.atan2,at=Math.asin,_r=Math.abs;W.eulerFromQuat=function(e,t,d){e._dirty=!0,t=t.array;var n=e.array,i=t[0],a=t[1],o=t[2],s=t[3],l=i*i,u=a*a,c=o*o,f=s*s,d=(d||"XYZ").toUpperCase();switch(d){case"XYZ":n[0]=de(2*(i*s-a*o),f-l-u+c),n[1]=at(it(2*(i*o+a*s),-1,1)),n[2]=de(2*(o*s-i*a),f+l-u-c);break;case"YXZ":n[0]=at(it(2*(i*s-a*o),-1,1)),n[1]=de(2*(i*o+a*s),f-l-u+c),n[2]=de(2*(i*a+o*s),f-l+u-c);break;case"ZXY":n[0]=at(it(2*(i*s+a*o),-1,1)),n[1]=de(2*(a*s-o*i),f-l-u+c),n[2]=de(2*(o*s-i*a),f-l+u-c);break;case"ZYX":n[0]=de(2*(i*s+o*a),f-l-u+c),n[1]=at(it(2*(a*s-i*o),-1,1)),n[2]=de(2*(i*a+o*s),f+l-u-c);break;case"YZX":n[0]=de(2*(i*s-o*a),f-l+u-c),n[1]=de(2*(a*s-i*o),f+l-u-c),n[2]=at(it(2*(i*a+o*s),-1,1));break;case"XZY":n[0]=de(2*(i*s+a*o),f-l+u-c),n[1]=de(2*(i*o+a*s),f+l-u-c),n[2]=at(it(2*(o*s-i*a),-1,1));break;default:console.warn("Unkown order: "+d)}return e};W.eulerFromMat3=function(e,t,p){var n=t.array,i=n[0],a=n[3],o=n[6],s=n[1],l=n[4],u=n[7],c=n[2],f=n[5],d=n[8],h=e.array,p=(p||"XYZ").toUpperCase();switch(p){case"XYZ":h[1]=at(it(o,-1,1)),_r(o)<.99999?(h[0]=de(-u,d),h[2]=de(-a,i)):(h[0]=de(f,l),h[2]=0);break;case"YXZ":h[0]=at(-it(u,-1,1)),_r(u)<.99999?(h[1]=de(o,d),h[2]=de(s,l)):(h[1]=de(-c,i),h[2]=0);break;case"ZXY":h[0]=at(it(f,-1,1)),_r(f)<.99999?(h[1]=de(-c,d),h[2]=de(-a,l)):(h[1]=0,h[2]=de(s,i));break;case"ZYX":h[1]=at(-it(c,-1,1)),_r(c)<.99999?(h[0]=de(f,d),h[2]=de(s,i)):(h[0]=0,h[2]=de(-a,l));break;case"YZX":h[2]=at(it(s,-1,1)),_r(s)<.99999?(h[0]=de(-u,l),h[1]=de(-c,i)):(h[0]=0,h[1]=de(o,d));break;case"XZY":h[2]=at(-it(a,-1,1)),_r(a)<.99999?(h[0]=de(f,l),h[1]=de(o,i)):(h[0]=de(-u,d),h[1]=0);break;default:console.warn("Unkown order: "+p)}return e._dirty=!0,e};Object.defineProperties(W,{POSITIVE_X:{get:function(){return new W(1,0,0)}},NEGATIVE_X:{get:function(){return new W(-1,0,0)}},POSITIVE_Y:{get:function(){return new W(0,1,0)}},NEGATIVE_Y:{get:function(){return new W(0,-1,0)}},POSITIVE_Z:{get:function(){return new W(0,0,1)}},NEGATIVE_Z:{get:function(){return new W(0,0,-1)}},UP:{get:function(){return new W(0,1,0)}},ZERO:{get:function(){return new W}}});const B=W;var Mi=1e-5,Ln=function(e,t){this.origin=e||new B,this.direction=t||new B};Ln.prototype={constructor:Ln,intersectPlane:function(e,t){var r=e.normal.array,n=e.distance,i=this.origin.array,a=this.direction.array,o=b.dot(r,a);if(o===0)return null;t||(t=new B);var s=(b.dot(r,i)-n)/o;return b.scaleAndAdd(t.array,i,a,-s),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=b.dot(e.normal.array,this.direction.array);b.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=b.create();return function(t){b.sub(e,t,this.origin.array);var r=b.dot(e,this.direction.array);if(r<0)return b.distance(this.origin.array,t);var n=b.lenSquared(e);return Math.sqrt(n-r*r)}}(),intersectSphere:function(){var e=b.create();return function(t,r,n){var i=this.origin.array,a=this.direction.array;t=t.array,b.sub(e,t,i);var o=b.dot(e,a),s=b.squaredLength(e),l=s-o*o,u=r*r;if(!(l>u)){var c=Math.sqrt(u-l),f=o-c,d=o+c;return n||(n=new B),f<0?d<0?null:(b.scaleAndAdd(n.array,i,a,d),n):(b.scaleAndAdd(n.array,i,a,f),n)}}}(),intersectBoundingBox:function(e,t){var r=this.direction.array,n=this.origin.array,i=e.min.array,a=e.max.array,o=1/r[0],s=1/r[1],l=1/r[2],u,c,f,d,h,p;if(o>=0?(u=(i[0]-n[0])*o,c=(a[0]-n[0])*o):(c=(i[0]-n[0])*o,u=(a[0]-n[0])*o),s>=0?(f=(i[1]-n[1])*s,d=(a[1]-n[1])*s):(d=(i[1]-n[1])*s,f=(a[1]-n[1])*s),u>d||f>c||((f>u||u!==u)&&(u=f),(d<c||c!==c)&&(c=d),l>=0?(h=(i[2]-n[2])*l,p=(a[2]-n[2])*l):(p=(i[2]-n[2])*l,h=(a[2]-n[2])*l),u>p||h>c)||((h>u||u!==u)&&(u=h),(p<c||c!==c)&&(c=p),c<0))return null;var v=u>=0?u:c;return t||(t=new B),b.scaleAndAdd(t.array,n,r,v),t},intersectTriangle:function(){var e=b.create(),t=b.create(),r=b.create(),n=b.create();return function(i,a,o,s,l,u){var c=this.direction.array,f=this.origin.array;i=i.array,a=a.array,o=o.array,b.sub(e,a,i),b.sub(t,o,i),b.cross(n,t,c);var d=b.dot(e,n);if(s){if(d>-Mi)return null}else if(d>-Mi&&d<Mi)return null;b.sub(r,f,i);var h=b.dot(n,r)/d;if(h<0||h>1)return null;b.cross(n,e,r);var p=b.dot(c,n)/d;if(p<0||p>1||h+p>1)return null;b.cross(n,e,t);var v=-b.dot(r,n)/d;return v<0?null:(l||(l=new B),u&&B.set(u,1-h-p,h,p),b.scaleAndAdd(l.array,f,c,v),l)}}(),applyTransform:function(e){B.add(this.direction,this.direction,this.origin),B.transformMat4(this.origin,this.origin,e),B.transformMat4(this.direction,this.direction,e),B.sub(this.direction,this.direction,this.origin),B.normalize(this.direction,this.direction)},copy:function(e){B.copy(this.origin,e.origin),B.copy(this.direction,e.direction)},clone:function(){var e=new Ln;return e.copy(this),e}};const qn=Ln;var $={};$.create=function(){var e=new He(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};$.clone=function(e){var t=new He(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};$.fromValues=function(e,t,r,n){var i=new He(4);return i[0]=e,i[1]=t,i[2]=r,i[3]=n,i};$.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};$.set=function(e,t,r,n,i){return e[0]=t,e[1]=r,e[2]=n,e[3]=i,e};$.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e};$.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e};$.sub=$.subtract;$.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e};$.mul=$.multiply;$.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e};$.div=$.divide;$.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e};$.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e};$.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e};$.scaleAndAdd=function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e};$.distance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+n*n+i*i+a*a)};$.dist=$.distance;$.squaredDistance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1],i=t[2]-e[2],a=t[3]-e[3];return r*r+n*n+i*i+a*a};$.sqrDist=$.squaredDistance;$.length=function(e){var t=e[0],r=e[1],n=e[2],i=e[3];return Math.sqrt(t*t+r*r+n*n+i*i)};$.len=$.length;$.squaredLength=function(e){var t=e[0],r=e[1],n=e[2],i=e[3];return t*t+r*r+n*n+i*i};$.sqrLen=$.squaredLength;$.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};$.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};$.normalize=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r*r+n*n+i*i+a*a;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e};$.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};$.lerp=function(e,t,r,n){var i=t[0],a=t[1],o=t[2],s=t[3];return e[0]=i+n*(r[0]-i),e[1]=a+n*(r[1]-a),e[2]=o+n*(r[2]-o),e[3]=s+n*(r[3]-s),e};$.random=function(e,t){return t=t||1,e[0]=Cr(),e[1]=Cr(),e[2]=Cr(),e[3]=Cr(),$.normalize(e,e),$.scale(e,e,t),e};$.transformMat4=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3];return e[0]=r[0]*n+r[4]*i+r[8]*a+r[12]*o,e[1]=r[1]*n+r[5]*i+r[9]*a+r[13]*o,e[2]=r[2]*n+r[6]*i+r[10]*a+r[14]*o,e[3]=r[3]*n+r[7]*i+r[11]*a+r[15]*o,e};$.transformQuat=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],c=u*n+s*a-l*i,f=u*i+l*n-o*a,d=u*a+o*i-s*n,h=-o*n-s*i-l*a;return e[0]=c*u+h*-o+f*-l-d*-s,e[1]=f*u+h*-s+d*-o-c*-l,e[2]=d*u+h*-l+c*-s-f*-o,e};$.forEach=function(){var e=$.create();return function(t,r,n,i,a,o){var s,l;for(r||(r=4),n||(n=0),i?l=Math.min(i*r+n,t.length):l=t.length,s=n;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}();const U=$;var Ne={};Ne.create=function(){var e=new He(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Ne.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};Ne.clone=function(e){var t=new He(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};Ne.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Ne.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Ne.transpose=function(e,t){if(e===t){var r=t[1],n=t[2],i=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=n,e[7]=i}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};Ne.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],f=c*o-s*u,d=-c*a+s*l,h=u*a-o*l,p=r*f+n*d+i*h;return p?(p=1/p,e[0]=f*p,e[1]=(-c*n+i*u)*p,e[2]=(s*n-i*o)*p,e[3]=d*p,e[4]=(c*r-i*l)*p,e[5]=(-s*r+i*a)*p,e[6]=h*p,e[7]=(-u*r+n*l)*p,e[8]=(o*r-n*a)*p,e):null};Ne.adjoint=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8];return e[0]=o*c-s*u,e[1]=i*u-n*c,e[2]=n*s-i*o,e[3]=s*l-a*c,e[4]=r*c-i*l,e[5]=i*a-r*s,e[6]=a*u-o*l,e[7]=n*l-r*u,e[8]=r*o-n*a,e};Ne.determinant=function(e){var t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8];return t*(u*a-o*l)+r*(-u*i+o*s)+n*(l*i-a*s)};Ne.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],c=t[7],f=t[8],d=r[0],h=r[1],p=r[2],v=r[3],m=r[4],_=r[5],y=r[6],g=r[7],x=r[8];return e[0]=d*n+h*o+p*u,e[1]=d*i+h*s+p*c,e[2]=d*a+h*l+p*f,e[3]=v*n+m*o+_*u,e[4]=v*i+m*s+_*c,e[5]=v*a+m*l+_*f,e[6]=y*n+g*o+x*u,e[7]=y*i+g*s+x*c,e[8]=y*a+g*l+x*f,e};Ne.mul=Ne.multiply;Ne.translate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],c=t[7],f=t[8],d=r[0],h=r[1];return e[0]=n,e[1]=i,e[2]=a,e[3]=o,e[4]=s,e[5]=l,e[6]=d*n+h*o+u,e[7]=d*i+h*s+c,e[8]=d*a+h*l+f,e};Ne.rotate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],c=t[7],f=t[8],d=Math.sin(r),h=Math.cos(r);return e[0]=h*n+d*o,e[1]=h*i+d*s,e[2]=h*a+d*l,e[3]=h*o-d*n,e[4]=h*s-d*i,e[5]=h*l-d*a,e[6]=u,e[7]=c,e[8]=f,e};Ne.scale=function(e,t,r){var n=r[0],i=r[1];return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Ne.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};Ne.fromQuat=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r+r,s=n+n,l=i+i,u=r*o,c=n*o,f=n*s,d=i*o,h=i*s,p=i*l,v=a*o,m=a*s,_=a*l;return e[0]=1-f-p,e[3]=c-_,e[6]=d+m,e[1]=c+_,e[4]=1-u-p,e[7]=h-v,e[2]=d-m,e[5]=h+v,e[8]=1-u-f,e};Ne.normalFromMat4=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],c=t[8],f=t[9],d=t[10],h=t[11],p=t[12],v=t[13],m=t[14],_=t[15],y=r*s-n*o,g=r*l-i*o,x=r*u-a*o,E=n*l-i*s,T=n*u-a*s,S=i*u-a*l,A=c*v-f*p,w=c*m-d*p,D=c*_-h*p,R=f*m-d*v,C=f*_-h*v,P=d*_-h*m,L=y*P-g*C+x*R+E*D-T*w+S*A;return L?(L=1/L,e[0]=(s*P-l*C+u*R)*L,e[1]=(l*D-o*P-u*w)*L,e[2]=(o*C-s*D+u*A)*L,e[3]=(i*C-n*P-a*R)*L,e[4]=(r*P-i*D+a*w)*L,e[5]=(n*D-r*C-a*A)*L,e[6]=(v*S-m*T+_*E)*L,e[7]=(m*x-p*S-_*g)*L,e[8]=(p*T-v*x+_*y)*L,e):null};Ne.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};const ee=Ne;var ie={};ie.create=function(){var e=new He(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};ie.rotationTo=function(){var e=b.create(),t=b.fromValues(1,0,0),r=b.fromValues(0,1,0);return function(n,i,a){var o=b.dot(i,a);return o<-.999999?(b.cross(e,t,i),b.length(e)<1e-6&&b.cross(e,r,i),b.normalize(e,e),ie.setAxisAngle(n,e,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(b.cross(e,i,a),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=1+o,ie.normalize(n,n))}}();ie.setAxes=function(){var e=ee.create();return function(t,r,n,i){return e[0]=n[0],e[3]=n[1],e[6]=n[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],ie.normalize(t,ie.fromMat3(t,e))}}();ie.clone=U.clone;ie.fromValues=U.fromValues;ie.copy=U.copy;ie.set=U.set;ie.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};ie.setAxisAngle=function(e,t,r){r=r*.5;var n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e};ie.add=U.add;ie.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],c=r[3];return e[0]=n*c+o*s+i*u-a*l,e[1]=i*c+o*l+a*s-n*u,e[2]=a*c+o*u+n*l-i*s,e[3]=o*c-n*s-i*l-a*u,e};ie.mul=ie.multiply;ie.scale=U.scale;ie.rotateX=function(e,t,r){r*=.5;var n=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l+o*s,e[1]=i*l+a*s,e[2]=a*l-i*s,e[3]=o*l-n*s,e};ie.rotateY=function(e,t,r){r*=.5;var n=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l-a*s,e[1]=i*l+o*s,e[2]=a*l+n*s,e[3]=o*l-i*s,e};ie.rotateZ=function(e,t,r){r*=.5;var n=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l+i*s,e[1]=i*l-n*s,e[2]=a*l+o*s,e[3]=o*l-a*s,e};ie.calculateW=function(e,t){var r=t[0],n=t[1],i=t[2];return e[0]=r,e[1]=n,e[2]=i,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-i*i)),e};ie.dot=U.dot;ie.lerp=U.lerp;ie.slerp=function(e,t,r,n){var i=t[0],a=t[1],o=t[2],s=t[3],l=r[0],u=r[1],c=r[2],f=r[3],d,h,p,v,m;return h=i*l+a*u+o*c+s*f,h<0&&(h=-h,l=-l,u=-u,c=-c,f=-f),1-h>1e-6?(d=Math.acos(h),p=Math.sin(d),v=Math.sin((1-n)*d)/p,m=Math.sin(n*d)/p):(v=1-n,m=n),e[0]=v*i+m*l,e[1]=v*a+m*u,e[2]=v*o+m*c,e[3]=v*s+m*f,e};ie.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r*r+n*n+i*i+a*a,s=o?1/o:0;return e[0]=-r*s,e[1]=-n*s,e[2]=-i*s,e[3]=a*s,e};ie.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};ie.length=U.length;ie.len=ie.length;ie.squaredLength=U.squaredLength;ie.sqrLen=ie.squaredLength;ie.normalize=U.normalize;ie.fromMat3=function(e,t){var r=t[0]+t[4]+t[8],n;if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var a=(i+1)%3,o=(i+2)%3;n=Math.sqrt(t[i*3+i]-t[a*3+a]-t[o*3+o]+1),e[i]=.5*n,n=.5/n,e[3]=(t[a*3+o]-t[o*3+a])*n,e[a]=(t[a*3+i]+t[i*3+a])*n,e[o]=(t[o*3+i]+t[i*3+o])*n}return e};const Z=ie;var ge=function(){this._axisX=new B,this._axisY=new B,this._axisZ=new B,this.array=N.create(),this._dirty=!0};ge.prototype={constructor:ge,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return N.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new ge().copy(this)},copy:function(e){return N.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return N.determinant(this.array)},fromQuat:function(e){return N.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return N.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return ge.fromMat2d(this,e),this},frustum:function(e,t,r,n,i,a){return N.frustum(this.array,e,t,r,n,i,a),this._dirty=!0,this},identity:function(){return N.identity(this.array),this._dirty=!0,this},invert:function(){return N.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,r){return N.lookAt(this.array,e.array,t.array,r.array),this._dirty=!0,this},mul:function(e){return N.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return N.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return N.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return N.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,r,n,i,a){return N.ortho(this.array,e,t,r,n,i,a),this._dirty=!0,this},perspective:function(e,t,r,n){return N.perspective(this.array,e,t,r,n),this._dirty=!0,this},rotate:function(e,t){return N.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return N.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return N.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return N.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return N.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return N.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return N.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=b.create(),t=b.create(),r=b.create(),n=ee.create();return function(i,a,o){var s=this.array;b.set(e,s[0],s[1],s[2]),b.set(t,s[4],s[5],s[6]),b.set(r,s[8],s[9],s[10]);var l=b.length(e),u=b.length(t),c=b.length(r),f=this.determinant();f<0&&(l=-l),i&&i.set(l,u,c),o.set(s[12],s[13],s[14]),ee.fromMat4(n,s),n[0]/=l,n[1]/=l,n[2]/=l,n[3]/=u,n[4]/=u,n[5]/=u,n[6]/=c,n[7]/=c,n[8]/=c,Z.fromMat3(a.array,n),Z.normalize(a.array,a.array),a._dirty=!0,o._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var yn=Object.defineProperty;if(yn){var Pi=ge.prototype;yn(Pi,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),yn(Pi,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),yn(Pi,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}ge.adjoint=function(e,t){return N.adjoint(e.array,t.array),e._dirty=!0,e};ge.copy=function(e,t){return N.copy(e.array,t.array),e._dirty=!0,e};ge.determinant=function(e){return N.determinant(e.array)};ge.identity=function(e){return N.identity(e.array),e._dirty=!0,e};ge.ortho=function(e,t,r,n,i,a,o){return N.ortho(e.array,t,r,n,i,a,o),e._dirty=!0,e};ge.perspective=function(e,t,r,n,i){return N.perspective(e.array,t,r,n,i),e._dirty=!0,e};ge.lookAt=function(e,t,r,n){return N.lookAt(e.array,t.array,r.array,n.array),e._dirty=!0,e};ge.invert=function(e,t){return N.invert(e.array,t.array),e._dirty=!0,e};ge.mul=function(e,t,r){return N.mul(e.array,t.array,r.array),e._dirty=!0,e};ge.multiply=ge.mul;ge.fromQuat=function(e,t){return N.fromQuat(e.array,t.array),e._dirty=!0,e};ge.fromRotationTranslation=function(e,t,r){return N.fromRotationTranslation(e.array,t.array,r.array),e._dirty=!0,e};ge.fromMat2d=function(n,r){n._dirty=!0;var r=r.array,n=n.array;return n[0]=r[0],n[4]=r[2],n[12]=r[4],n[1]=r[1],n[5]=r[3],n[13]=r[5],n};ge.rotate=function(e,t,r,n){return N.rotate(e.array,t.array,r,n.array),e._dirty=!0,e};ge.rotateX=function(e,t,r){return N.rotateX(e.array,t.array,r),e._dirty=!0,e};ge.rotateY=function(e,t,r){return N.rotateY(e.array,t.array,r),e._dirty=!0,e};ge.rotateZ=function(e,t,r){return N.rotateZ(e.array,t.array,r),e._dirty=!0,e};ge.scale=function(e,t,r){return N.scale(e.array,t.array,r.array),e._dirty=!0,e};ge.transpose=function(e,t){return N.transpose(e.array,t.array),e._dirty=!0,e};ge.translate=function(e,t,r){return N.translate(e.array,t.array,r.array),e._dirty=!0,e};const V=ge;var ce=function(e,t,r,n){e=e||0,t=t||0,r=r||0,n=n===void 0?1:n,this.array=Z.fromValues(e,t,r,n),this._dirty=!0};ce.prototype={constructor:ce,add:function(e){return Z.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return Z.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,r,n){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=n,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new ce(this.x,this.y,this.z,this.w)},conjugate:function(){return Z.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return Z.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return Z.dot(this.array,e.array)},fromMat3:function(e){return Z.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=ee.create();return function(t){return ee.fromMat4(e,t.array),ee.transpose(e,e),Z.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return Z.identity(this.array),this._dirty=!0,this},invert:function(){return Z.invert(this.array,this.array),this._dirty=!0,this},len:function(){return Z.len(this.array)},length:function(){return Z.length(this.array)},lerp:function(e,t,r){return Z.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},mul:function(e){return Z.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Z.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Z.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Z.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return Z.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return Z.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return Z.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return Z.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return Z.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,r){return Z.setAxes(this.array,e.array,t.array,r.array),this._dirty=!0,this},setAxisAngle:function(e,t){return Z.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,r){return Z.slerp(this.array,e.array,t.array,r),this._dirty=!0,this},sqrLen:function(){return Z.sqrLen(this.array)},squaredLength:function(){return Z.squaredLength(this.array)},fromEuler:function(e,t){return ce.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Gr=Object.defineProperty;if(Gr){var xn=ce.prototype;Gr(xn,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Gr(xn,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Gr(xn,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Gr(xn,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}ce.add=function(e,t,r){return Z.add(e.array,t.array,r.array),e._dirty=!0,e};ce.set=function(e,t,r,n,i){Z.set(e.array,t,r,n,i),e._dirty=!0};ce.copy=function(e,t){return Z.copy(e.array,t.array),e._dirty=!0,e};ce.calculateW=function(e,t){return Z.calculateW(e.array,t.array),e._dirty=!0,e};ce.conjugate=function(e,t){return Z.conjugate(e.array,t.array),e._dirty=!0,e};ce.identity=function(e){return Z.identity(e.array),e._dirty=!0,e};ce.invert=function(e,t){return Z.invert(e.array,t.array),e._dirty=!0,e};ce.dot=function(e,t){return Z.dot(e.array,t.array)};ce.len=function(e){return Z.length(e.array)};ce.lerp=function(e,t,r,n){return Z.lerp(e.array,t.array,r.array,n),e._dirty=!0,e};ce.slerp=function(e,t,r,n){return Z.slerp(e.array,t.array,r.array,n),e._dirty=!0,e};ce.mul=function(e,t,r){return Z.multiply(e.array,t.array,r.array),e._dirty=!0,e};ce.multiply=ce.mul;ce.rotateX=function(e,t,r){return Z.rotateX(e.array,t.array,r),e._dirty=!0,e};ce.rotateY=function(e,t,r){return Z.rotateY(e.array,t.array,r),e._dirty=!0,e};ce.rotateZ=function(e,t,r){return Z.rotateZ(e.array,t.array,r),e._dirty=!0,e};ce.setAxisAngle=function(e,t,r){return Z.setAxisAngle(e.array,t.array,r),e._dirty=!0,e};ce.normalize=function(e,t){return Z.normalize(e.array,t.array),e._dirty=!0,e};ce.sqrLen=function(e){return Z.sqrLen(e.array)};ce.squaredLength=ce.sqrLen;ce.fromMat3=function(e,t){return Z.fromMat3(e.array,t.array),e._dirty=!0,e};ce.setAxes=function(e,t,r,n){return Z.setAxes(e.array,t.array,r.array,n.array),e._dirty=!0,e};ce.rotationTo=function(e,t,r){return Z.rotationTo(e.array,t.array,r.array),e._dirty=!0,e};ce.fromEuler=function(e,t,c){e._dirty=!0,t=t.array;var n=e.array,i=Math.cos(t[0]/2),a=Math.cos(t[1]/2),o=Math.cos(t[2]/2),s=Math.sin(t[0]/2),l=Math.sin(t[1]/2),u=Math.sin(t[2]/2),c=(c||"XYZ").toUpperCase();switch(c){case"XYZ":n[0]=s*a*o+i*l*u,n[1]=i*l*o-s*a*u,n[2]=i*a*u+s*l*o,n[3]=i*a*o-s*l*u;break;case"YXZ":n[0]=s*a*o+i*l*u,n[1]=i*l*o-s*a*u,n[2]=i*a*u-s*l*o,n[3]=i*a*o+s*l*u;break;case"ZXY":n[0]=s*a*o-i*l*u,n[1]=i*l*o+s*a*u,n[2]=i*a*u+s*l*o,n[3]=i*a*o-s*l*u;break;case"ZYX":n[0]=s*a*o-i*l*u,n[1]=i*l*o+s*a*u,n[2]=i*a*u-s*l*o,n[3]=i*a*o+s*l*u;break;case"YZX":n[0]=s*a*o+i*l*u,n[1]=i*l*o+s*a*u,n[2]=i*a*u-s*l*o,n[3]=i*a*o-s*l*u;break;case"XZY":n[0]=s*a*o-i*l*u,n[1]=i*l*o-s*a*u,n[2]=i*a*u+s*l*o,n[3]=i*a*o+s*l*u;break}};const ul=ce;var Ot=b.set,Tn=b.copy,Mn=function(e,t){this.min=e||new B(1/0,1/0,1/0),this.max=t||new B(-1/0,-1/0,-1/0),this.vertices=null};Mn.prototype={constructor:Mn,updateFromVertices:function(e){if(e.length>0){var t=this.min,r=this.max,n=t.array,i=r.array;Tn(n,e[0]),Tn(i,e[0]);for(var a=1;a<e.length;a++){var o=e[a];o[0]<n[0]&&(n[0]=o[0]),o[1]<n[1]&&(n[1]=o[1]),o[2]<n[2]&&(n[2]=o[2]),o[0]>i[0]&&(i[0]=o[0]),o[1]>i[1]&&(i[1]=o[1]),o[2]>i[2]&&(i[2]=o[2])}t._dirty=!0,r._dirty=!0}},union:function(e){var t=this.min,r=this.max;return b.min(t.array,t.array,e.min.array),b.max(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersection:function(e){var t=this.min,r=this.max;return b.max(t.array,t.array,e.min.array),b.min(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,r=this.max.array,n=e.min.array,i=e.max.array;return!(t[0]>i[0]||t[1]>i[1]||t[2]>i[2]||r[0]<n[0]||r[1]<n[1]||r[2]<n[2])},containBoundingBox:function(e){var t=this.min.array,r=this.max.array,n=e.min.array,i=e.max.array;return t[0]<=n[0]&&t[1]<=n[1]&&t[2]<=n[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},containPoint:function(e){var t=this.min.array,r=this.max.array,n=e.array;return t[0]<=n[0]&&t[1]<=n[1]&&t[2]<=n[2]&&r[0]>=n[0]&&r[1]>=n[1]&&r[2]>=n[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=b.create(),t=b.create(),r=b.create(),n=b.create(),i=b.create(),a=b.create();return function(o,s){var l=o.min.array,u=o.max.array,c=s.array;return e[0]=c[0]*l[0],e[1]=c[1]*l[0],e[2]=c[2]*l[0],t[0]=c[0]*u[0],t[1]=c[1]*u[0],t[2]=c[2]*u[0],r[0]=c[4]*l[1],r[1]=c[5]*l[1],r[2]=c[6]*l[1],n[0]=c[4]*u[1],n[1]=c[5]*u[1],n[2]=c[6]*u[1],i[0]=c[8]*l[2],i[1]=c[9]*l[2],i[2]=c[10]*l[2],a[0]=c[8]*u[2],a[1]=c[9]*u[2],a[2]=c[10]*u[2],l=this.min.array,u=this.max.array,l[0]=Math.min(e[0],t[0])+Math.min(r[0],n[0])+Math.min(i[0],a[0])+c[12],l[1]=Math.min(e[1],t[1])+Math.min(r[1],n[1])+Math.min(i[1],a[1])+c[13],l[2]=Math.min(e[2],t[2])+Math.min(r[2],n[2])+Math.min(i[2],a[2])+c[14],u[0]=Math.max(e[0],t[0])+Math.max(r[0],n[0])+Math.max(i[0],a[0])+c[12],u[1]=Math.max(e[1],t[1])+Math.max(r[1],n[1])+Math.max(i[1],a[1])+c[13],u[2]=Math.max(e[2],t[2])+Math.max(r[2],n[2])+Math.max(i[2],a[2])+c[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,r=this.max.array,n=e.array,i=t[0],a=t[1],o=t[2],s=r[0],l=r[1],u=t[2],c=r[0],f=r[1],d=r[2];if(n[15]===1)t[0]=n[0]*i+n[12],t[1]=n[5]*a+n[13],r[2]=n[10]*o+n[14],r[0]=n[0]*c+n[12],r[1]=n[5]*f+n[13],t[2]=n[10]*d+n[14];else{var h=-1/o;t[0]=n[0]*i*h,t[1]=n[5]*a*h,r[2]=(n[10]*o+n[14])*h,h=-1/u,r[0]=n[0]*s*h,r[1]=n[5]*l*h,h=-1/d,t[2]=(n[10]*d+n[14])*h}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=b.fromValues(0,0,0);this.vertices=e}var r=this.min.array,n=this.max.array;return Ot(e[0],r[0],r[1],r[2]),Ot(e[1],r[0],n[1],r[2]),Ot(e[2],n[0],r[1],r[2]),Ot(e[3],n[0],n[1],r[2]),Ot(e[4],r[0],r[1],n[2]),Ot(e[5],r[0],n[1],n[2]),Ot(e[6],n[0],r[1],n[2]),Ot(e[7],n[0],n[1],n[2]),this},copy:function(e){var t=this.min,r=this.max;return Tn(t.array,e.min.array),Tn(r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},clone:function(){var e=new Mn;return e.copy(this),e}};const Xe=Mn;var bh=0,wh=Qe.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+bh++),this.position||(this.position=new B),this.rotation||(this.rotation=new ul),this.scale||(this.scale=new B(1,1,1)),this.worldTransform=new V,this.localTransform=new V,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var r=t._nodeRepository;delete r[this.name],r[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var r=this._scene;r&&r!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,r=t.indexOf(e);r<0||(t.splice(r,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,r=0;r<t.length;r++)if(t[r].name===e)return t[r]},getDescendantByName:function(e){for(var t=this._children,r=0;r<t.length;r++){var n=t[r];if(n.name===e)return n;var i=n.getDescendantByName(e);if(i)return i}},queryNode:function(e){if(e){for(var t=e.split("/"),r=this,n=0;n<t.length;n++){var i=t[n];if(i){for(var a=!1,o=r._children,s=0;s<o.length;s++){var l=o[s];if(l.name===i){r=l,a=!0;break}}if(!a)return}}return r}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,r=this.name;t._parent&&(r=t.name+"/"+r,t._parent!=e);)t=t._parent;return!t._parent&&e?null:r},traverse:function(e,t){e.call(t,this);for(var r=this._children,n=0,i=r.length;n<i;n++)r[n].traverse(e,t)},eachChild:function(e,t){for(var r=this._children,n=0,i=r.length;n<i;n++){var a=r[n];e.call(t,a,n)}},setLocalTransform:function(e){N.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){N.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=N.create();return function(t){var r=this.localTransform,n=this.worldTransform;this._parent?(N.invert(e,this._parent.worldTransform.array),N.multiply(r.array,e,n.array)):N.copy(r.array,n.array);var i=t?null:this.scale;r.decomposeMatrix(i,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var n=this.localTransform.array;N.fromRotationTranslation(n,t.array,e.array),N.scale(n,n,r.array),t._dirty=!1,r._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?N.multiplyAffine(t,this._parent.worldTransform.array,e):N.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,r=0,n=t.length;r<n;r++)t[r].update(e)},getBoundingBox:function(){function e(i){return!i.invisible&&i.geometry}var t=new Xe,r=new V,n=new V;return function(i,a){return a=a||new Xe,this._parent?V.invert(n,this._parent.worldTransform):V.identity(n),this.traverse(function(o){o.geometry&&o.geometry.boundingBox&&(t.copy(o.geometry.boundingBox),V.multiply(r,n,o.worldTransform),t.applyTransform(r),a.union(t))},this,e),a}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var r=e.array;return r[0]=t[12],r[1]=t[13],r[2]=t[14],e}else return new B(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var r=0;r<t.length;r++)e.add(t[r].clone());return e},rotateAround:function(){var e=new B,t=new V;return function(r,n,i){e.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(i,n),t.fromRotationTranslation(this.rotation,e),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new V;return function(t,r){e.lookAt(this.position,t,r||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()});const _t=wh;var rt=_t.extend({material:null,geometry:null,mode:M.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:M.BACK,frontFace:M.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=_t.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=_t.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var r=0;r<e.length;r++){var n=e[r];t[n]!==this[n]&&(t[n]=this[n])}return t}}()});rt.POINTS=M.POINTS;rt.LINES=M.LINES;rt.LINE_LOOP=M.LINE_LOOP;rt.LINE_STRIP=M.LINE_STRIP;rt.TRIANGLES=M.TRIANGLES;rt.TRIANGLE_STRIP=M.TRIANGLE_STRIP;rt.TRIANGLE_FAN=M.TRIANGLE_FAN;rt.BACK=M.BACK;rt.FRONT=M.FRONT;rt.FRONT_AND_BACK=M.FRONT_AND_BACK;rt.CW=M.CW;rt.CCW=M.CCW;const sa=rt;var Da=Qe.extend({scene:null,camera:null,renderer:null},function(){this._ray=new qn,this._ndc=new et},{pick:function(e,t,r){var n=this.pickAll(e,t,[],r);return n[0]||null},pickAll:function(e,t,r,n){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,n||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(e,t,r){e instanceof sa&&e.isRenderable()&&(!e.ignorePicking||r)&&(e.mode===M.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var n=0;n<e._children.length;n++)this._intersectNode(e._children[n],t,r)},_intersectRenderable:function(){var e=new B,t=new B,r=new B,n=new qn,i=new V;return function(a,o){var s=a.isSkinnedMesh();n.copy(this._ray),V.invert(i,a.worldTransform),s||n.applyTransform(i);var l=a.geometry,u=s?a.skeleton.boundingBox:l.boundingBox;if(!(u&&!n.intersectBoundingBox(u))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,o);return}else if(l.pickByRay){l.pickByRay(n,a,o);return}var c=a.cullFace===M.BACK&&a.frontFace===M.CCW||a.cullFace===M.FRONT&&a.frontFace===M.CW,f,d=l.indices,h=l.attributes.position,p=l.attributes.weight,v=l.attributes.joint,m,_=[];if(!(!h||!h.value||!d)){if(s){m=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var y=0;y<a.joints.length;y++){_[y]=_[y]||[];for(var g=0;g<16;g++)_[y][g]=m[y*16+g]}var x=[],E=[],T=[],S=[],A=[],w=l.attributes.skinnedPosition;(!w||!w.value)&&(l.createAttribute("skinnedPosition","f",3),w=l.attributes.skinnedPosition,w.init(l.vertexCount));for(var y=0;y<l.vertexCount;y++){h.get(y,x),p.get(y,E),v.get(y,T),E[3]=1-E[0]-E[1]-E[2],b.set(S,0,0,0);for(var g=0;g<4;g++)T[g]>=0&&E[g]>1e-4&&(b.transformMat4(A,x,_[T[g]]),b.scaleAndAdd(S,S,A,E[g]));w.set(y,S)}}for(var y=0;y<d.length;y+=3){var D=d[y],R=d[y+1],C=d[y+2],P=s?l.attributes.skinnedPosition:h;if(P.get(D,e.array),P.get(R,t.array),P.get(C,r.array),c?f=n.intersectTriangle(e,t,r,a.culling):f=n.intersectTriangle(e,r,t,a.culling),f){var L=new B;s?B.copy(L,f):B.transformMat4(L,f,a.worldTransform),o.push(new Da.Intersection(f,L,a,[D,R,C],y/3,B.dist(L,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});Da.Intersection=function(e,t,r,n,i,a){this.point=e,this.pointWorld=t,this.target=r,this.triangle=n,this.triangleIndex=i,this.distance=a};const Ch=Da;var zr="__dt__",jn=function(){this._contextId=0,this._caches=[],this._context={}};jn.prototype={use:function(e,t){var r=this._caches;r[e]||(r[e]={},t&&(r[e]=t())),this._contextId=e,this._context=r[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=zr+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=zr+e,r=this._caches,n=0;n<r.length;n++)r[n]&&(r[n][t]=!0)},fresh:function(e){e=e||"";var t=zr+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=zr+e,r=this._caches,n=0;n<r.length;n++)r[n]&&(r[n][t]=!1)},isDirty:function(e){e=e||"";var t=zr+e,r=this._context;return!r.hasOwnProperty(t)||r[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var r=Object.keys(this._caches);r.forEach(function(n){e&&e.call(t,n)})},miss:function(e){return!this._context.hasOwnProperty(e)}};jn.prototype.constructor=jn;const La=jn;var re=Qe.extend({width:512,height:512,type:M.UNSIGNED_BYTE,format:M.RGBA,wrapS:M.REPEAT,wrapT:M.REPEAT,minFilter:M.LINEAR_MIPMAP_LINEAR,magFilter:M.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new La},{getWebGLTexture:function(e){var t=e.gl,r=this._cache;return r.use(e.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):r.isDirty()&&(this.update(e),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===M.DEPTH_COMPONENT&&(this.useMipmap=!1);var r=e.getGLExtension("EXT_sRGB");this.format===re.SRGB&&!r&&(this.format=re.RGB),this.format===re.SRGB_ALPHA&&!r&&(this.format=re.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?M.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?M.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===M.NEAREST_MIPMAP_NEAREST||e===M.NEAREST_MIPMAP_LINEAR?M.NEAREST:e===M.LINEAR_MIPMAP_LINEAR||e===M.LINEAR_MIPMAP_NEAREST?M.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("webgl_texture");r&&e.gl.deleteTexture(r),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(re.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(re.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});re.BYTE=M.BYTE;re.UNSIGNED_BYTE=M.UNSIGNED_BYTE;re.SHORT=M.SHORT;re.UNSIGNED_SHORT=M.UNSIGNED_SHORT;re.INT=M.INT;re.UNSIGNED_INT=M.UNSIGNED_INT;re.FLOAT=M.FLOAT;re.HALF_FLOAT=36193;re.UNSIGNED_INT_24_8_WEBGL=34042;re.DEPTH_COMPONENT=M.DEPTH_COMPONENT;re.DEPTH_STENCIL=M.DEPTH_STENCIL;re.ALPHA=M.ALPHA;re.RGB=M.RGB;re.RGBA=M.RGBA;re.LUMINANCE=M.LUMINANCE;re.LUMINANCE_ALPHA=M.LUMINANCE_ALPHA;re.SRGB=35904;re.SRGB_ALPHA=35906;re.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;re.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;re.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;re.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;re.NEAREST=M.NEAREST;re.LINEAR=M.LINEAR;re.NEAREST_MIPMAP_NEAREST=M.NEAREST_MIPMAP_NEAREST;re.LINEAR_MIPMAP_NEAREST=M.LINEAR_MIPMAP_NEAREST;re.NEAREST_MIPMAP_LINEAR=M.NEAREST_MIPMAP_LINEAR;re.LINEAR_MIPMAP_LINEAR=M.LINEAR_MIPMAP_LINEAR;re.REPEAT=M.REPEAT;re.CLAMP_TO_EDGE=M.CLAMP_TO_EDGE;re.MIRRORED_REPEAT=M.MIRRORED_REPEAT;const Y=re;var nt=sa.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=sa.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});nt.POINTS=M.POINTS;nt.LINES=M.LINES;nt.LINE_LOOP=M.LINE_LOOP;nt.LINE_STRIP=M.LINE_STRIP;nt.TRIANGLES=M.TRIANGLES;nt.TRIANGLE_STRIP=M.TRIANGLE_STRIP;nt.TRIANGLE_FAN=M.TRIANGLE_FAN;nt.BACK=M.BACK;nt.FRONT=M.FRONT;nt.FRONT_AND_BACK=M.FRONT_AND_BACK;nt.CW=M.CW;nt.CCW=M.CCW;const Ma=nt;var si={};si.isPowerOfTwo=function(e){return(e&e-1)===0};si.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};si.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};const cl=si;var ts=cl.isPowerOfTwo;function rs(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function Rh(e,t){var r=rs(e.width),n=rs(e.height);t=t||document.createElement("canvas"),t.width=r,t.height=n;var i=t.getContext("2d");return i.drawImage(e.image,0,0,r,n),t}var Pa=Y.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,n=this.type,i=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===Y.REPEAT||this.wrapT===Y.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,i?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,i?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,i?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,i?this.minFilter:this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193){var o=e.getGLExtension("OES_texture_half_float");o||(n=M.FLOAT)}if(this.mipmaps.length)for(var s=this.width,l=this.height,u=0;u<this.mipmaps.length;u++){var c=this.mipmaps[u];this._updateTextureData(t,c,u,s,l,r,n,!1),s/=2,l/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,n,i),this.useMipmap&&(!this.NPOT||i)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,r,n,i,a,o,s){if(t.image){var l=t.image;s&&(this._potCanvas=Rh(this,this._potCanvas),l=this._potCanvas),e.texImage2D(e.TEXTURE_2D,r,a,a,o,l)}else a<=Y.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=Y.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,r,a,n,i,0,t.pixels):e.texImage2D(e.TEXTURE_2D,r,a,n,i,0,a,o,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return ts(this.width)&&ts(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var r=De.createImage();t&&(r.crossOrigin=t);var n=this;return r.onload=function(){n.dirty(),n.trigger("success",n)},r.onerror=function(){n.trigger("error",n)},r.src=e,this.image=r,this}});Object.defineProperty(Pa.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(Pa.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});const le=Pa;function fl(e){return{byte:De.Int8Array,ubyte:De.Uint8Array,short:De.Int16Array,ushort:De.Uint16Array}[e]||De.Float32Array}function Ni(e){return"attr_"+e}function Mr(e,t,r,n){switch(this.name=e,this.type=t,this.size=r,this.semantic=n||"",this.value=null,r){case 1:this.get=function(i){return this.value[i]},this.set=function(i,a){this.value[i]=a},this.copy=function(i,a){this.value[i]=this.value[i]};break;case 2:this.get=function(i,a){var o=this.value;return a[0]=o[i*2],a[1]=o[i*2+1],a},this.set=function(i,a){var o=this.value;o[i*2]=a[0],o[i*2+1]=a[1]},this.copy=function(i,a){var o=this.value;a*=2,i*=2,o[i]=o[a],o[i+1]=o[a+1]};break;case 3:this.get=function(i,a){var o=i*3,s=this.value;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a},this.set=function(i,a){var o=i*3,s=this.value;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2]},this.copy=function(i,a){var o=this.value;a*=3,i*=3,o[i]=o[a],o[i+1]=o[a+1],o[i+2]=o[a+2]};break;case 4:this.get=function(i,a){var o=this.value,s=i*4;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a[3]=o[s+3],a},this.set=function(i,a){var o=this.value,s=i*4;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2],o[s+3]=a[3]},this.copy=function(i,a){var o=this.value;a*=4,i*=4,o[i]=o[a],o[i+1]=o[a+1],o[i+2]=o[a+2],o[i+3]=o[a+3]}}}Mr.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=fl(this.type);this.value=new t(e*this.size)}};Mr.prototype.fromArray=function(e){var t=fl(this.type),r;if(e[0]&&e[0].length){var n=0,i=this.size;r=new t(e.length*i);for(var a=0;a<e.length;a++)for(var o=0;o<i;o++)r[n++]=e[a][o]}else r=new t(e);this.value=r};Mr.prototype.clone=function(e){var t=new Mr(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function hl(e,t,r,n,i){this.name=e,this.type=t,this.buffer=r,this.size=n,this.semantic=i,this.symbol="",this.needsRemove=!1}function dl(e){this.buffer=e,this.count=0}var At=Qe.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new La,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(Ni(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var r=this.indices;return t[0]=r[e*3],t[1]=r[e*3+1],t[2]=r[e*3+2],t}},setTriangleIndices:function(e,t){var r=this.indices;r[e*3]=t[0],r[e*3+1]=t[1],r[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,r=this.vertexCount>65535?De.Uint32Array:De.Uint16Array;if(e[0]&&e[0].length){var n=0,i=3;t=new r(e.length*i);for(var a=0;a<e.length;a++)for(var o=0;o<i;o++)t[n++]=e[a][o]}else t=new r(e);this.indices=t},createAttribute:function(e,t,r,n){var i=new Mr(e,t,r,n);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=i,this._attributeList.push(e),i},removeAttribute:function(e){var t=this._attributeList,r=t.indexOf(e);return r>=0?(t.splice(r,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var r=[],n=this.vertexCount,i=0;i<t.length;i++){var a=t[i],o=this.attributes[a];o.value&&o.value.length===n*o.size&&r.push(a)}return this._enabledAttributes=r,r},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var r=t.isDirty("attributes"),n=t.isDirty("indices");if(r||n){this._updateBuffer(e.gl,r,n);for(var i=this.getEnabledAttributes(),a=0;a<i.length;a++)t.fresh(Ni(i[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,r){var n=this._cache,i=n.get("chunks"),a=!1;i||(i=[],i[0]={attributeBuffers:[],indicesBuffer:null},n.put("chunks",i),a=!0);var o=i[0],s=o.attributeBuffers,l=o.indicesBuffer;if(t||a){var u=this.getEnabledAttributes(),c={};if(!a)for(var f=0;f<s.length;f++)c[s[f].name]=s[f];for(var d=0;d<u.length;d++){var h=u[d],p=this.attributes[h],v;a||(v=c[h]);var m;v?m=v.buffer:m=e.createBuffer(),n.isDirty(Ni(h))&&(e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,p.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),s[d]=new hl(h,p.type,m,p.size,p.semantic)}for(var f=d;f<s.length;f++)e.deleteBuffer(s[f].buffer);s.length=d}this.isUseIndices()&&(r||a)&&(l||(l=new dl(e.createBuffer()),o.indicesBuffer=l),l.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var n=0;n<r.length;n++){for(var i=r[n],a=0;a<i.attributeBuffers.length;a++){var o=i.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}i.indicesBuffer&&e.gl.deleteBuffer(i.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(At.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(At.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));At.STATIC_DRAW=M.STATIC_DRAW;At.DYNAMIC_DRAW=M.DYNAMIC_DRAW;At.STREAM_DRAW=M.STREAM_DRAW;At.AttributeBuffer=hl;At.IndicesBuffer=dl;At.Attribute=Mr;const sr=At;var We=b.create,gr=b.add,Vt=b.set,vt=sr.Attribute,lr=sr.extend(function(){return{attributes:{position:new vt("position","float",3,"POSITION"),texcoord0:new vt("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new vt("texcoord1","float",2,"TEXCOORD_1"),normal:new vt("normal","float",3,"NORMAL"),tangent:new vt("tangent","float",4,"TANGENT"),color:new vt("color","float",4,"COLOR"),weight:new vt("weight","float",3,"WEIGHT"),joint:new vt("joint","float",4,"JOINT"),barycentric:new vt("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new Xe);var t=this.attributes.position.value;if(t&&t.length){var r=e.min,n=e.max,i=r.array,a=n.array;b.set(i,t[0],t[1],t[2]),b.set(a,t[0],t[1],t[2]);for(var o=3;o<t.length;){var s=t[o++],l=t[o++],u=t[o++];s<i[0]&&(i[0]=s),l<i[1]&&(i[1]=l),u<i[2]&&(i[2]=u),s>a[0]&&(a[0]=s),l>a[1]&&(a[1]=l),u>a[2]&&(a[2]=u)}r._dirty=!0,n._dirty=!0}},generateVertexNormals:function(){if(this.vertexCount){var e=this.indices,t=this.attributes,r=t.position.value,n=t.normal.value;if(!n||n.length!==r.length)n=t.normal.value=new De.Float32Array(r.length);else for(var i=0;i<n.length;i++)n[i]=0;for(var a=We(),o=We(),s=We(),l=We(),u=We(),c=We(),f=e?e.length:this.vertexCount,d,h,p,v=0;v<f;){e?(d=e[v++],h=e[v++],p=e[v++]):(d=v++,h=v++,p=v++),Vt(a,r[d*3],r[d*3+1],r[d*3+2]),Vt(o,r[h*3],r[h*3+1],r[h*3+2]),Vt(s,r[p*3],r[p*3+1],r[p*3+2]),b.sub(l,a,o),b.sub(u,o,s),b.cross(c,l,u);for(var i=0;i<3;i++)n[d*3+i]=n[d*3+i]+c[i],n[h*3+i]=n[h*3+i]+c[i],n[p*3+i]=n[p*3+i]+c[i]}for(var i=0;i<n.length;)Vt(c,n[i],n[i+1],n[i+2]),b.normalize(c,c),n[i++]=c[0],n[i++]=c[1],n[i++]=c[2];this.dirty()}},generateFaceNormals:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,r=t.position.value,n=t.normal.value,i=We(),a=We(),o=We(),s=We(),l=We(),u=We();n||(n=t.normal.value=new Float32Array(r.length));for(var c=e?e.length:this.vertexCount,f,d,h,p=0;p<c;){e?(f=e[p++],d=e[p++],h=e[p++]):(f=p++,d=p++,h=p++),Vt(i,r[f*3],r[f*3+1],r[f*3+2]),Vt(a,r[d*3],r[d*3+1],r[d*3+2]),Vt(o,r[h*3],r[h*3+1],r[h*3+2]),b.sub(s,i,a),b.sub(l,a,o),b.cross(u,s,l),b.normalize(u,u);for(var v=0;v<3;v++)n[f*3+v]=u[v],n[d*3+v]=u[v],n[h*3+v]=u[v]}this.dirty()}},generateTangents:function(){if(this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var r=t.texcoord0.value,n=t.position.value,i=t.tangent.value,a=t.normal.value;if(!r){console.warn("Geometry without texcoords can't generate tangents.");return}for(var o=[],s=[],l=0;l<e;l++)o[l]=[0,0,0],s[l]=[0,0,0];for(var u=[0,0,0],c=[0,0,0],f=this.indices,d=f?f.length:this.vertexCount,h,p,v,l=0;l<d;){f?(h=f[l++],p=f[l++],v=f[l++]):(h=l++,p=l++,v=l++);var m=r[h*2],_=r[p*2],y=r[v*2],g=r[h*2+1],x=r[p*2+1],E=r[v*2+1],T=n[h*3],S=n[p*3],A=n[v*3],w=n[h*3+1],D=n[p*3+1],R=n[v*3+1],C=n[h*3+2],P=n[p*3+2],L=n[v*3+2],I=S-T,O=A-T,H=D-w,G=R-w,q=P-C,ae=L-C,te=_-m,_e=y-m,oe=x-g,fe=E-g,Ce=1/(te*fe-oe*_e);u[0]=(fe*I-oe*O)*Ce,u[1]=(fe*H-oe*G)*Ce,u[2]=(fe*q-oe*ae)*Ce,c[0]=(te*O-_e*I)*Ce,c[1]=(te*G-_e*H)*Ce,c[2]=(te*ae-_e*q)*Ce,gr(o[h],o[h],u),gr(o[p],o[p],u),gr(o[v],o[v],u),gr(s[h],s[h],c),gr(s[p],s[p],c),gr(s[v],s[v],c)}for(var ue=We(),xt=We(),Je=We(),l=0;l<e;l++){Je[0]=a[l*3],Je[1]=a[l*3+1],Je[2]=a[l*3+2];var Tt=o[l];b.scale(ue,Je,b.dot(Je,Tt)),b.sub(ue,Tt,ue),b.normalize(ue,ue),b.cross(xt,Je,Tt),i[l*4]=ue[0],i[l*4+1]=ue[1],i[l*4+2]=ue[2],i[l*4+3]=b.dot(xt,s[l])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new De.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,r=this.getEnabledAttributes(),n={},i=0;i<r.length;i++){var a=r[i];n[a]=e[a].value,e[a].init(this.indices.length)}for(var o=0,s=0;s<t.length;s++){for(var l=t[s],i=0;i<r.length;i++)for(var a=r[i],u=e[a].value,c=e[a].size,f=0;f<c;f++)u[o*c+f]=n[a][l*c+f];t[s]=o,o++}this.dirty()}},generateBarycentric:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,r=this.indices;if(!(t&&t.length===r.length*3)){t=e.barycentric.value=new Float32Array(r.length*3);for(var n=0;n<(r?r.length:this.vertexCount/3);)for(var i=0;i<3;i++){var a=r?r[n++]:n*3+i;t[a*3+i]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,r=t.position.value,n=t.normal.value,i=t.tangent.value;e=e.array;var a=N.create();N.invert(a,e),N.transpose(a,a);var o=b.transformMat4,s=b.forEach;s(r,3,0,null,o,e),n&&s(n,3,0,null,o,a),i&&s(i,4,0,null,o,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var n=0;n<r.length;n++){for(var i=r[n],a=0;a<i.attributeBuffers.length;a++){var o=i.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}i.indicesBuffer&&e.gl.deleteBuffer(i.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});lr.STATIC_DRAW=sr.STATIC_DRAW;lr.DYNAMIC_DRAW=sr.DYNAMIC_DRAW;lr.STREAM_DRAW=sr.STREAM_DRAW;lr.AttributeBuffer=sr.AttributeBuffer;lr.IndicesBuffer=sr.IndicesBuffer;lr.Attribute=vt;const me=lr,Dh=`vec3 calcAmbientSHLight(int idx, vec3 N) {
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
}`;var lt="uniform vec3 ",Vr="uniform float ",yr="@export clay.header.",xr="@end",Fe=":unconfigurable;";const Lh=[yr+"directional_light",lt+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+Fe,lt+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+Fe,xr,yr+"ambient_light",lt+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+Fe,xr,yr+"ambient_sh_light",lt+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+Fe,lt+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+Fe,Dh,xr,yr+"ambient_cubemap_light",lt+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Fe,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Fe,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Fe,xr,yr+"point_light",lt+"pointLightPosition[POINT_LIGHT_COUNT]"+Fe,Vr+"pointLightRange[POINT_LIGHT_COUNT]"+Fe,lt+"pointLightColor[POINT_LIGHT_COUNT]"+Fe,xr,yr+"spot_light",lt+"spotLightPosition[SPOT_LIGHT_COUNT]"+Fe,lt+"spotLightDirection[SPOT_LIGHT_COUNT]"+Fe,Vr+"spotLightRange[SPOT_LIGHT_COUNT]"+Fe,Vr+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+Fe,Vr+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+Fe,Vr+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+Fe,lt+"spotLightColor[SPOT_LIGHT_COUNT]"+Fe,xr].join(`
`);F.import(Lh);var Mh=_t.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=_t.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}});const ht=Mh;var Pn=function(e,t){this.normal=e||new B(0,1,0),this.distance=t||0};Pn.prototype={constructor:Pn,distanceToPoint:function(e){return b.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new B);var r=this.distanceToPoint(e);return b.scaleAndAdd(t.array,e.array,this.normal.array,-r),t._dirty=!0,t},normalize:function(){var e=1/b.len(this.normal.array);b.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,r=this.normal.array,n=b.dot(t[0].array,r)>this.distance,i=1;i<8;i++)if(b.dot(t[i].array,r)>this.distance!=n)return!0},intersectLine:function(){var e=b.create();return function(t,r,n){var i=this.distanceToPoint(t),a=this.distanceToPoint(r);if(i>0&&a>0||i<0&&a<0)return null;var o=this.normal.array,s=this.distance,l=t.array;b.sub(e,r.array,t.array),b.normalize(e,e);var u=b.dot(o,e);if(u===0)return null;n||(n=new B);var c=(b.dot(o,l)-s)/u;return b.scaleAndAdd(n.array,l,e,-c),n._dirty=!0,n}}(),applyTransform:function(){var e=N.create(),t=U.create(),r=U.create();return r[3]=1,function(n){n=n.array,b.scale(r,this.normal.array,this.distance),U.transformMat4(r,r,n),this.distance=b.dot(r,this.normal.array),N.invert(e,n),N.transpose(e,e),t[3]=0,b.copy(t,this.normal.array),U.transformMat4(t,t,e),b.copy(this.normal.array,t)}}(),copy:function(e){b.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new Pn;return e.copy(this),e}};const vl=Pn;var we=b.set,ns=b.copy,is=b.transformMat4,Ii=Math.min,Oi=Math.max,pl=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new vl);this.boundingBox=new Xe,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=b.fromValues(0,0,0)};pl.prototype={setFromProjection:function(e){var t=this.planes,r=e.array,n=r[0],i=r[1],a=r[2],o=r[3],s=r[4],l=r[5],u=r[6],c=r[7],f=r[8],d=r[9],h=r[10],p=r[11],v=r[12],m=r[13],_=r[14],y=r[15];we(t[0].normal.array,o-n,c-s,p-f),t[0].distance=-(y-v),t[0].normalize(),we(t[1].normal.array,o+n,c+s,p+f),t[1].distance=-(y+v),t[1].normalize(),we(t[2].normal.array,o+i,c+l,p+d),t[2].distance=-(y+m),t[2].normalize(),we(t[3].normal.array,o-i,c-l,p-d),t[3].distance=-(y-m),t[3].normalize(),we(t[4].normal.array,o-a,c-u,p-h),t[4].distance=-(y-_),t[4].normalize(),we(t[5].normal.array,o+a,c+u,p+h),t[5].distance=-(y+_),t[5].normalize();var g=this.boundingBox,x=this.vertices;if(y===0){var E=l/n,T=-_/(h-1),S=-_/(h+1),A=-S/l,w=-T/l;g.min.set(-A*E,-A,S),g.max.set(A*E,A,T),we(x[0],-A*E,-A,S),we(x[1],-A*E,A,S),we(x[2],A*E,-A,S),we(x[3],A*E,A,S),we(x[4],-w*E,-w,T),we(x[5],-w*E,w,T),we(x[6],w*E,-w,T),we(x[7],w*E,w,T)}else{var D=(-1-v)/n,R=(1-v)/n,C=(1-m)/l,P=(-1-m)/l,L=(-1-_)/h,I=(1-_)/h;g.min.set(Math.min(D,R),Math.min(P,C),Math.min(I,L)),g.max.set(Math.max(R,D),Math.max(C,P),Math.max(L,I));var O=g.min.array,H=g.max.array;we(x[0],O[0],O[1],O[2]),we(x[1],O[0],H[1],O[2]),we(x[2],H[0],O[1],O[2]),we(x[3],H[0],H[1],O[2]),we(x[4],O[0],O[1],H[2]),we(x[5],O[0],H[1],H[2]),we(x[6],H[0],O[1],H[2]),we(x[7],H[0],H[1],H[2])}},getTransformedBoundingBox:function(){var e=b.create();return function(t,r){var n=this.vertices,i=r.array,a=t.min,o=t.max,s=a.array,l=o.array,u=n[0];is(e,u,i),ns(s,e),ns(l,e);for(var c=1;c<8;c++)u=n[c],is(e,u,i),s[0]=Ii(e[0],s[0]),s[1]=Ii(e[1],s[1]),s[2]=Ii(e[2],s[2]),l[0]=Oi(e[0],l[0]),l[1]=Oi(e[1],l[1]),l[2]=Oi(e[2],l[2]);return a._dirty=!0,o._dirty=!0,t}}()};const Na=pl;var Ph=_t.extend(function(){return{projectionMatrix:new V,invProjectionMatrix:new V,viewMatrix:new V,frustum:new Na}},function(){this.update(!0)},{update:function(e){_t.prototype.update.call(this,e),V.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),V.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){V.copy(this.viewMatrix,e),V.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){V.copy(this.projectionMatrix,e),V.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=U.create();return function(t,r){var n=r!==void 0?r:new qn,i=t.array[0],a=t.array[1];return U.set(e,i,a,-1,1),U.transformMat4(e,e,this.invProjectionMatrix.array),U.transformMat4(e,e,this.worldTransform.array),b.scale(n.origin.array,e,1/e[3]),U.set(e,i,a,1,1),U.transformMat4(e,e,this.invProjectionMatrix.array),U.transformMat4(e,e,this.worldTransform.array),b.scale(e,e,1/e[3]),b.sub(n.direction.array,e,n.origin.array),b.normalize(n.direction.array,n.direction.array),n.direction._dirty=!0,n.origin._dirty=!0,n}}()});const Pr=Ph;var Nh=N.create(),as=N.create(),Bi={};function Ih(e){var t=[],r=Object.keys(e);r.sort();for(var n=0;n<r.length;n++){var i=r[n];t.push(i+" "+e[i])}var a=t.join(`
`);if(Bi[a])return Bi[a];var o=Ue.genGUID();return Bi[a]=o,o}function li(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}li.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};li.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};li.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var Oh=_t.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new Xe,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new rl(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof Pr?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof ht&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof Pr?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof ht&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},r=0;r<e.length;r++){var n=e[r];if(!n.invisible){var i=n.group;t[i]||(t[i]={}),t[i][n.type]=t[i][n.type]||0,t[i][n.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=Ih(t[a]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),r={};function n(i,a){r[i.__uid__]=a;for(var o=0;o<i._children.length;o++){var s=i._children[o],l=a._children[o];n(s,l)}}return n(e,t),t.traverse(function(i){i.skeleton&&(i.skeleton=i.skeleton.clone(r)),i.material&&(i.material=i.material.clone())}),t},updateRenderList:function(e,t){var r=e.__uid__,n=this._renderLists.get(r);n||(n=new li,this._renderLists.put(r,n)),n.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var i=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,i,n,t),n.endCount(),n},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,r,n,i){if(!e.invisible)for(var a=0;a<e._children.length;a++){var o=e._children[a];if(o.isRenderable()){var s=o.isSkinnedMesh()?Nh:o.worldTransform.array,l=o.geometry;N.multiplyAffine(as,t.viewMatrix.array,s),(i&&!l.boundingBox||!this.isFrustumCulled(o,t,as))&&n.add(o,o.material.transparent||r)}o._children.length>0&&this._doUpdateRenderList(o,t,r,n,i)}},isFrustumCulled:function(){var e=new Xe,t=new V;return function(r,n,i){var a=r.boundingBox;if(a||(r.skeleton&&r.skeleton.boundingBox?a=r.skeleton.boundingBox:a=r.geometry.boundingBox),!a)return!1;if(t.array=i,e.transformFrom(a,t),r.castShadow&&this.viewBoundingBoxLastFrame.union(e),r.frustumCulling){if(!e.intersectBoundingBox(n.frustum.boundingBox))return!0;t.array=n.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var o=e.min.array,s=e.max.array;if(s[0]<-1||o[0]>1||s[1]<-1||o[1]>1||s[2]<-1||o[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(Bh);var t=this._lightUniforms;for(var r in t)for(var n in t[r])t[r][n].value.length=0;for(var i=0;i<e.length;i++){var a=e[i];if(!a.invisible){var r=a.group;for(var n in a.uniformTemplates){var o=a.uniformTemplates[n],s=o.value(a);if(s!=null){t[r]||(t[r]={}),t[r][n]||(t[r][n]={type:"",value:[]});var l=t[r][n];switch(l.type=o.type+"v",o.type){case"1i":case"1f":case"t":l.value.push(s);break;case"2f":case"3f":case"4f":for(var u=0;u<s.length;u++)l.value.push(s[u]);break;default:console.error("Unkown light uniform type "+o.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,r=this._lightNumber;for(var n in r[e])if(!t[e]||r[e][n]!==t[e][n])return!0;for(var n in t[e])if(!r[e]||r[e][n]!==t[e][n])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,r,n){for(var i in t){var a=t[i];if(a.type==="tv"){if(!r.hasUniform(i))continue;for(var o=[],s=0;s<a.value.length;s++){var l=a.value[s],u=r.takeCurrentTextureSlot(n,l);o.push(u)}r.setUniform(n.gl,"1iv",i,o)}else r.setUniform(n.gl,a.type,i,a.value)}}return function(t,r,n){e(this._lightUniforms[r],t,n),e(this.shadowUniforms,t,n)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function Bh(e,t){if(t.castShadow&&!e.castShadow)return!0}const Gt=Oh;var En=cl.isPowerOfTwo,Fh=["px","nx","py","ny","pz","nz"],Ia=Y.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,n=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var i=e.getGLExtension("EXT_texture_filter_anisotropic");if(i&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193){var a=e.getGLExtension("OES_texture_half_float");a||(n=M.FLOAT)}if(this.mipmaps.length)for(var o=this.width,s=this.height,l=0;l<this.mipmaps.length;l++){var u=this.mipmaps[l];this._updateTextureData(t,u,l,o,s,r,n),o/=2,s/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,n),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,r,n,i,a,o){for(var s=0;s<6;s++){var l=Fh[s],u=t.image&&t.image[l];u?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,a,o,u):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,n,i,0,a,o,t.pixels&&t.pixels[l])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?En(this.image.px.width)&&En(this.image.px.height):En(this.width)&&En(this.height)},isRenderable:function(){return this.image.px?Tr(this.image.px)&&Tr(this.image.nx)&&Tr(this.image.py)&&Tr(this.image.ny)&&Tr(this.image.pz)&&Tr(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var r=0,n=this;return Ue.each(e,function(i,a){var o=De.createImage();t&&(o.crossOrigin=t),o.onload=function(){r--,r===0&&(n.dirty(),n.trigger("success",n))},o.onerror=function(){r--},r++,o.src=i,n.image[a]=o}),this}});Object.defineProperty(Ia.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(Ia.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function Tr(e){return e.width>0&&e.height>0}const on=Ia;var Uh=Pr.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=Pr.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}});const Ie=Uh;var Sn="framebuffer",St="renderbuffer",os=St+"_width",ss=St+"_height",Fi=St+"_attached",Ui="depthtexture_attached",kt=M.FRAMEBUFFER,kr=M.RENDERBUFFER,jr=M.DEPTH_ATTACHMENT,ml=M.COLOR_ATTACHMENT0,fn=Qe.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new La,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer(kt,this._getFrameBufferGL(e)),this._boundRenderer=e;var r=this._cache;r.put("viewport",e.viewport);var n=!1,i,a;for(var o in this._textures){n=!0;var s=this._textures[o];s&&(i=s.texture.width,a=s.texture.height,this._doAttach(e,s.texture,o,s.target))}this._width=i,this._height=a,!n&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,i,a,1);var l=r.get("attached_textures");if(l){for(var o in l)if(!this._textures[o]){var u=l[o];this._doDetach(t,o,u)}}if(!r.get(Ui)&&this.depthBuffer){r.miss(St)&&r.put(St,t.createRenderbuffer());var c=r.get(St);(i!==r.get(os)||a!==r.get(ss))&&(t.bindRenderbuffer(kr,c),t.renderbufferStorage(kr,t.DEPTH_COMPONENT16,i,a),r.put(os,i),r.put(ss,a),t.bindRenderbuffer(kr,null)),r.get(Fi)||(t.framebufferRenderbuffer(kt,jr,kr,c),r.put(Fi,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer(kt,null),this._boundRenderer=null,this._cache.use(e.__uid__);var r=this._cache.get("viewport");r&&e.setViewport(r),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var r in this._textures){var n=this._textures[r];if(n){var i=n.texture;if(!i.NPOT&&i.useMipmap&&i.minFilter===Y.LINEAR_MIPMAP_LINEAR){var a=i.textureType==="textureCube"?M.TEXTURE_CUBE_MAP:M.TEXTURE_2D;t.bindTexture(a,i.getWebGLTexture(e)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus(kt)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(Sn)&&t.put(Sn,e.gl.createFramebuffer()),t.get(Sn)},attach:function(e,t,r){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||ml,r=r||M.TEXTURE_2D;var n=this._boundRenderer,i=n&&n.gl,a;if(i){var o=this._cache;o.use(n.__uid__),a=o.get("attached_textures")}var s=this._textures[t];if(!(s&&s.target===r&&s.texture===e&&a&&a[t]!=null)){var l=!0;n&&(l=this._doAttach(n,e,t,r),this.viewport||n.setViewport(0,0,e.width,e.height,1)),l&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=r)}},_doAttach:function(e,t,r,n){var i=e.gl,a=t.getWebGLTexture(e),o=this._cache.get("attached_textures");if(o&&o[r]){var s=o[r];if(s.texture===t&&s.target===n)return}r=+r;var l=!0;if(r===jr||r===M.DEPTH_STENCIL_ATTACHMENT){var u=e.getGLExtension("WEBGL_depth_texture");if(u||(console.error("Depth texture is not supported by the browser"),l=!1),t.format!==M.DEPTH_COMPONENT&&t.format!==M.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l){var c=this._cache.get(St);c&&(i.framebufferRenderbuffer(kt,jr,kr,null),i.deleteRenderbuffer(c),this._cache.put(St,!1)),this._cache.put(Fi,!1),this._cache.put(Ui,!0)}}return i.framebufferTexture2D(kt,r,n,a,0),o||(o={},this._cache.put("attached_textures",o)),o[r]=o[r]||{},o[r].texture=t,o[r].target=n,l},_doDetach:function(e,t,r){e.framebufferTexture2D(kt,t,r,null,0);var n=this._cache.get("attached_textures");n&&n[t]&&(n[t]=null),(t===jr||t===M.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(Ui,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var r=this._cache;r.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,r=this._cache;r.use(e.__uid__);var n=r.get(St);n&&t.deleteRenderbuffer(n);var i=r.get(Sn);i&&t.deleteFramebuffer(i),r.deleteContext(e.__uid__),this._textures={}}});fn.DEPTH_ATTACHMENT=jr;fn.COLOR_ATTACHMENT0=ml;fn.STENCIL_ATTACHMENT=M.STENCIL_ATTACHMENT;fn.DEPTH_STENCIL_ATTACHMENT=M.DEPTH_STENCIL_ATTACHMENT;const Ve=fn;var Hh=["px","nx","py","ny","pz","nz"],Gh=Qe.extend(function(){var e={position:new B,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new Ie({fov:90}),nx:new Ie({fov:90}),py:new Ie({fov:90}),ny:new Ie({fov:90}),pz:new Ie({fov:90}),nz:new Ie({fov:90})};return t.px.lookAt(B.POSITIVE_X,B.NEGATIVE_Y),t.nx.lookAt(B.NEGATIVE_X,B.NEGATIVE_Y),t.py.lookAt(B.POSITIVE_Y,B.POSITIVE_Z),t.ny.lookAt(B.NEGATIVE_Y,B.NEGATIVE_Z),t.pz.lookAt(B.POSITIVE_Z,B.NEGATIVE_Y),t.nz.lookAt(B.NEGATIVE_Z,B.NEGATIVE_Y),e._frameBuffer=new Ve,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,r){var n=e.gl;r||t.update();for(var i=this.texture.width,a=2*Math.atan(i/(i-.5))/Math.PI*180,o=0;o<6;o++){var s=Hh[o],l=this._cameras[s];if(B.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=a,this.shadowMapPass){l.update();var u=t.getBoundingBox();u.applyTransform(l.viewMatrix),t.viewBoundingBoxLastFrame.copy(u),this.shadowMapPass.render(e,t,l,!0)}this._frameBuffer.attach(this.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+o),this._frameBuffer.bind(e),e.render(t,l,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}});const Oa=Gh;var zh=me.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,r=this.attributes,n=[],i=[],a=[],o=[],s=0;s<=e;s++)for(var l=s/e,u=0;u<=t;u++){var c=u/t;if(n.push([2*c-1,2*l-1,0]),i&&i.push([c,l]),a&&a.push([0,0,1]),u<t&&s<e){var f=u+s*(t+1);o.push([f,f+1,f+t+1]),o.push([f+t+1,f+1,f+t+2])}}r.position.fromArray(n),r.texcoord0.fromArray(i),r.normal.fromArray(a),this.initIndicesFromArray(o),this.boundingBox=new Xe,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}});const Ba=zh;var Se=new V,Vh=me.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:Er("px",this.depthSegments,this.heightSegments),nx:Er("nx",this.depthSegments,this.heightSegments),py:Er("py",this.widthSegments,this.depthSegments),ny:Er("ny",this.widthSegments,this.depthSegments),pz:Er("pz",this.widthSegments,this.heightSegments),nz:Er("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],r=0,n=0;for(var i in e)r+=e[i].vertexCount,n+=e[i].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(r);this.indices=new De.Uint16Array(n);var o=0,s=0;for(var i in e){for(var l=e[i],a=0;a<t.length;a++)for(var u=t[a],c=l.attributes[u].value,f=l.attributes[u].size,d=u==="normal",h=0;h<c.length;h++){var p=c[h];this.inside&&d&&(p=-p),this.attributes[u].value[h+f*s]=p}for(var v=l.indices.length,h=0;h<l.indices.length;h++)this.indices[h+o]=s+l.indices[this.inside?v-h-1:h];o+=l.indices.length,s+=l.vertexCount}this.boundingBox=new Xe,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function Er(e,t,r){Se.identity();var n=new Ba({widthSegments:t,heightSegments:r});switch(e){case"px":V.translate(Se,Se,B.POSITIVE_X),V.rotateY(Se,Se,Math.PI/2);break;case"nx":V.translate(Se,Se,B.NEGATIVE_X),V.rotateY(Se,Se,-Math.PI/2);break;case"py":V.translate(Se,Se,B.POSITIVE_Y),V.rotateX(Se,Se,-Math.PI/2);break;case"ny":V.translate(Se,Se,B.NEGATIVE_Y),V.rotateX(Se,Se,Math.PI/2);break;case"pz":V.translate(Se,Se,B.POSITIVE_Z);break;case"nz":V.translate(Se,Se,B.NEGATIVE_Z),V.rotateY(Se,Se,Math.PI);break}return n.applyTransform(Se),n}const _l=Vh,kh=`@export clay.skybox.vertex
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
@end`;F.import(kh);var Wh=Ma.extend(function(){var e=new F({vertex:F.source("clay.skybox.vertex"),fragment:F.source("clay.skybox.fragment")}),t=new Rt({shader:e,depthMask:!1});return{scene:null,geometry:new _l,material:t,environmentMap:null,culling:!1,_dummyCamera:new Ie}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=Y.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,r){this.renderSkybox(e,r)},renderSkybox:function(e,t){var r=this._dummyCamera;r.aspect=e.getViewportAspect(),r.fov=t.fov||50,r.updateProjectionMatrix(),V.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(t.worldTransform),r.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],r)}});const sn=Wh;var Xh=542327876,qh=131072,jh=512,Zh=4;function Fa(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var Yh=31,Kh=Fa("DXT1"),$h=Fa("DXT3"),Qh=Fa("DXT5"),Jh=0,ed=1,td=2,rd=3,nd=4,id=7,ad=20,od=21,sd=28,ld={parse:function(e,t){var r=new Int32Array(e,0,Yh);if(r[Jh]!==Xh||!r(ad)&Zh)return null;var n=r(od),i=r[nd],a=r[rd],o=r[sd]&jh,s=r[td]&qh,l,u;switch(n){case Kh:l=8,u=Y.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case $h:l=16,u=Y.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Qh:l=16,u=Y.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var c=r[ed]+4,f=o?6:1,d=1;s&&(d=Math.max(1,r[id]));for(var h=[],p=0;p<f;p++){var v=i,m=a;h[p]=new le({width:v,height:m,format:u});for(var _=[],y=0;y<d;y++){var g=Math.max(4,v)/4*Math.max(4,m)/4*l,x=new Uint8Array(e,c,g);c+=g,v*=.5,m*=.5,_[y]=x}h[p].pixels=_[0],s&&(h[p].mipmaps=_)}if(t)t.width=h[0].width,t.height=h[0].height,t.format=h[0].format,t.pixels=h[0].pixels,t.mipmaps=h[0].mipmaps;else return h[0]}};const ud=ld;var Nn=String.fromCharCode,cd=8,fd=32767;function hd(e,t,r,n){if(e[3]>0){var i=Math.pow(2,e[3]-128-8+n);t[r+0]=e[0]*i,t[r+1]=e[1]*i,t[r+2]=e[2]*i}else t[r+0]=0,t[r+1]=0,t[r+2]=0;return t[r+3]=1,t}function dd(e,t,r){for(var n="",i=t;i<r;i++)n+=Nn(e[i]);return n}function vd(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function ls(e,t,r,n){for(var i=0,a=0,o=n;o>0;)if(e[a][0]=t[r++],e[a][1]=t[r++],e[a][2]=t[r++],e[a][3]=t[r++],e[a][0]===1&&e[a][1]===1&&e[a][2]===1){for(var s=e[a][3]<<i>>>0;s>0;s--)vd(e[a-1],e[a]),a++,o--;i+=8}else a++,o--,i=0;return r}function pd(e,t,r,n){if(n<cd|n>fd)return ls(e,t,r,n);var i=t[r++];if(i!=2)return ls(e,t,r-1,n);if(e[0][1]=t[r++],e[0][2]=t[r++],i=t[r++],(e[0][2]<<8>>>0|i)>>>0!==n)return null;for(var i=0;i<4;i++)for(var a=0;a<n;){var o=t[r++];if(o>128){o=(o&127)>>>0;for(var s=t[r++];o--;)e[a++][i]=s}else for(;o--;)e[a++][i]=t[r++]}return r}var md={parseRGBE:function(e,t,r){r==null&&(r=0);var n=new Uint8Array(e),i=n.length;if(dd(n,0,2)==="#?"){for(var a=2;a<i&&!(Nn(n[a])===`
`&&Nn(n[a+1])===`
`);a++);if(!(a>=i)){a+=2;for(var o="";a<i;a++){var s=Nn(n[a]);if(s===`
`)break;o+=s}var l=o.split(" "),u=parseInt(l[1]),c=parseInt(l[3]);if(!(!c||!u)){for(var f=a+1,d=[],h=0;h<c;h++){d[h]=[];for(var p=0;p<4;p++)d[h][p]=0}for(var v=new Float32Array(c*u*4),m=0,_=0;_<u;_++){var f=pd(d,n,f,c);if(!f)return null;for(var h=0;h<c;h++)hd(d[h],v,m,r),m+=4}return t||(t=new le),t.width=c,t.height=u,t.pixels=v,t.type=Y.FLOAT,t}}}},parseRGBEFromPNG:function(e){}};const _d=md;var In={loadTexture:function(e,t,r,n){var i;if(typeof t=="function"?(r=t,n=r,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return i=new le({width:0,height:0,sRGB:!1}),In._fetchTexture(e,function(a){_d.parseRGBE(a,i,t.exposure),i.dirty(),r&&r(i)},n),i;e.match(/.dds$/)||t.fileType==="dds"?(i=new le({width:0,height:0}),In._fetchTexture(e,function(a){ud.parse(a,i),i.dirty(),r&&r(i)},n)):(i=new le,i.load(e),i.success(r),i.error(n))}else typeof e=="object"&&typeof e.px<"u"&&(i=new on,i.load(e),i.success(r),i.error(n));return i},loadPanorama:function(e,t,r,n,i,a){var o=this;typeof n=="function"?(i=n,a=i,n={}):n=n||{},In.loadTexture(t,n,function(s){s.flipY=n.flipY||!1,o.panoramaToCubeMap(e,s,r,n),s.dispose(e),i&&i(r)},a)},panoramaToCubeMap:function(e,t,r,n){var i=new Oa,a=new sn({scene:new Gt});return a.setEnvironmentMap(t),n=n||{},n.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),r.sRGB=t.sRGB,i.texture=r,i.render(e,a.scene),i.texture=null,i.dispose(e),r},heightToNormal:function(e,t){var r=document.createElement("canvas"),n=r.width=e.width,i=r.height=e.height,a=r.getContext("2d");a.drawImage(e,0,0,n,i),t=t||!1;for(var o=a.getImageData(0,0,n,i),s=a.createImageData(n,i),l=0;l<o.data.length;l+=4){if(t){var u=o.data[l],c=o.data[l+1],f=o.data[l+2],d=Math.abs(u-c)+Math.abs(c-f);if(d>20)return console.warn("Given image is not a height map"),e}var h,p,v,m;l%(n*4)===0?(h=o.data[l],v=o.data[l+4]):l%(n*4)===(n-1)*4?(h=o.data[l-4],v=o.data[l]):(h=o.data[l-4],v=o.data[l+4]),l<n*4?(p=o.data[l],m=o.data[l+n*4]):l>n*(i-1)*4?(p=o.data[l-n*4],m=o.data[l]):(p=o.data[l-n*4],m=o.data[l+n*4]),s.data[l]=h-v+127,s.data[l+1]=p-m+127,s.data[l+2]=255,s.data[l+3]=255}return a.putImageData(s,0,0),r},isHeightImage:function(e,t,r){if(!e||!e.width||!e.height)return!1;var n=document.createElement("canvas"),i=n.getContext("2d"),a=t||32;r=r||20,n.width=n.height=a,i.drawImage(e,0,0,a,a);for(var o=i.getImageData(0,0,a,a),s=0;s<o.data.length;s+=4){var l=o.data[s],u=o.data[s+1],c=o.data[s+2],f=Math.abs(l-u)+Math.abs(u-c);if(f>r)return!1}return!0},_fetchTexture:function(e,t,r){De.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:r})},createChessboard:function(e,t,r,n){e=e||512,t=t||64,r=r||"black",n=n||"white";var i=Math.ceil(e/t),a=document.createElement("canvas");a.width=e,a.height=e;var o=a.getContext("2d");o.fillStyle=n,o.fillRect(0,0,e,e),o.fillStyle=r;for(var s=0;s<i;s++)for(var l=0;l<i;l++){var u=l%2?s%2:s%2-1;u&&o.fillRect(s*t,l*t,t,t)}var c=new le({image:a,anisotropic:8});return c},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var n=new le({image:t});return n}};const tr=In;var la=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function ua(e){return"_on"+e}var ca=function(e){var t=this;this._texture=new le({anisotropic:32,flipY:!1,surface:this,dispose:function(r){t.dispose(),le.prototype.dispose.call(this,r)}}),la.forEach(function(r){this[ua(r)]=function(n){n.triangle&&this._meshes.forEach(function(i){this.dispatchEvent(r,i,n.triangle,n.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};ca.prototype={constructor:ca,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var r=this,n=e.getZr(),i=n.__oldRefreshImmediately||n.refreshImmediately;n.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},n.__oldRefreshImmediately=i}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new B,t=new B,r=new B,n=new et,i=new et,a=new et,o=new et,s=new B;return function(l,u,c,f){var d=u.geometry,h=d.attributes.position,p=d.attributes.texcoord0,v=B.dot,m=B.cross;h.get(c[0],e.array),h.get(c[1],t.array),h.get(c[2],r.array),p.get(c[0],n.array),p.get(c[1],i.array),p.get(c[2],a.array),m(s,t,r);var _=v(e,s),y=v(f,s)/_;m(s,r,e);var g=v(f,s)/_;m(s,e,t);var x=v(f,s)/_;et.scale(o,n,y),et.scaleAndAdd(o,o,i,g),et.scaleAndAdd(o,o,a,x);var E=o.x*this._chart.getWidth(),T=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:E,zrY:T})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(la.forEach(function(t){e.on(t,this[ua(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),la.forEach(function(r){e.off(r,this[ua(r)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};const gd=ca;var yd=Pr.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=Pr.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}});const ln=yd,xd=`
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
@end`;F.import(xd);var Td=new Ba,us=new Ma({geometry:Td,frustumCulling:!1}),Ed=new ln,Sd=Qe.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new F(F.source("clay.compositor.vertex"),this.fragment),t=new Rt({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||M.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var r in this.outputs){var n=this.outputs[r];n&&t.attach(n,r)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var r=e.gl;if(t){this.bind(e,t);var n=e.getGLExtension("EXT_draw_buffers");if(n&&this.outputs){var i=[];for(var a in this.outputs)a=+a,a>=r.COLOR_ATTACHMENT0&&a<=r.COLOR_ATTACHMENT0+8&&i.push(a);n.drawBuffersEXT(i)}}this.trigger("beforerender",this,e);var o=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){o=o|r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var s=this.clearColor;Array.isArray(s)&&r.clearColor(s[0],s[1],s[2],s[3])}r.clear(o),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){us.material=this.material,e.renderPass([us],Ed)},dispose:function(e){}});const qe=Sd,Ad=`#define SAMPLE_NUMBER 1024
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
`,bd=`#define SHADER_NAME prefilter
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
`;var rr={},Hi=["px","nx","py","ny","pz","nz"];rr.prefilterEnvironmentMap=function(e,t,r,n,i){(!i||!n)&&(n=rr.generateNormalDistribution(),i=rr.integrateBRDF(e,n)),r=r||{};var a=r.width||64,o=r.height||64,s=r.type||t.type,l=new on({width:a,height:o,type:s,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var u=Math.min(a,o),c=Math.log(u)/Math.log(2)+1,f=new Rt({shader:new F({vertex:F.source("clay.skybox.vertex"),fragment:bd})});f.set("normalDistribution",n),r.encodeRGBM&&f.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&f.define("fragment","RGBM_DECODE");var d=new Gt,h;if(t.textureType==="texture2D"){var p=new on({width:a,height:o,type:s===Y.FLOAT?Y.HALF_FLOAT:s});tr.panoramaToCubeMap(e,t,p,{encodeRGBM:r.decodeRGBM}),t=p}h=new sn({scene:d,material:f}),h.material.set("environmentMap",t);var v=new Oa({texture:l});r.encodeRGBM&&(s=l.type=Y.UNSIGNED_BYTE);for(var m=new le({width:a,height:o,type:s}),_=new Ve({depthBuffer:!1}),y=De[s===Y.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],g=0;g<c;g++){l.mipmaps[g]={pixels:{}},h.material.set("roughness",g/(c-1));for(var x=m.width,E=2*Math.atan(x/(x-.5))/Math.PI*180,T=0;T<Hi.length;T++){var S=new y(m.width*m.height*4);_.attach(m),_.bind(e);var A=v.getCamera(Hi[T]);A.fov=E,e.render(d,A),e.gl.readPixels(0,0,m.width,m.height,Y.RGBA,s,S),_.unbind(e),l.mipmaps[g].pixels[Hi[T]]=S}m.width/=2,m.height/=2,m.dirty()}return _.dispose(e),m.dispose(e),h.dispose(e),n.dispose(e),{environmentMap:l,brdfLookup:i,normalDistribution:n,maxMipmapLevel:c}};rr.integrateBRDF=function(e,t){t=t||rr.generateNormalDistribution();var r=new Ve({depthBuffer:!1}),n=new qe({fragment:Ad}),i=new le({width:512,height:256,type:Y.HALF_FLOAT,wrapS:Y.CLAMP_TO_EDGE,wrapT:Y.CLAMP_TO_EDGE,minFilter:Y.NEAREST,magFilter:Y.NEAREST,useMipmap:!1});return n.setUniform("normalDistribution",t),n.setUniform("viewportSize",[512,256]),n.attachOutput(i),n.render(e,r),r.dispose(e),i};rr.generateNormalDistribution=function(r,n){for(var r=r||256,n=n||1024,i=new le({width:r,height:n,type:Y.FLOAT,minFilter:Y.NEAREST,magFilter:Y.NEAREST,wrapS:Y.CLAMP_TO_EDGE,wrapT:Y.CLAMP_TO_EDGE,useMipmap:!1}),a=new Float32Array(n*r*4),o=[],s=0;s<r;s++){for(var l=s/r,u=l*l,c=0;c<n;c++){var f=(c<<16|c>>>16)>>>0;f=((f&1431655765)<<1|(f&2863311530)>>>1)>>>0,f=((f&858993459)<<2|(f&3435973836)>>>2)>>>0,f=((f&252645135)<<4|(f&4042322160)>>>4)>>>0,f=(((f&16711935)<<8|(f&4278255360)>>>8)>>>0)/4294967296;var d=Math.sqrt((1-f)/(1+(u*u-1)*f));o[c]=d}for(var c=0;c<n;c++){var h=(c*r+s)*4,d=o[c],p=Math.sqrt(1-d*d),v=c/n,m=2*Math.PI*v;a[h]=p*Math.cos(m),a[h+1]=d,a[h+2]=p*Math.sin(m),a[h+3]=1}}return i.pixels=a,i};const On=rr;var wd=ht.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=On.generateNormalDistribution(),this._brdfLookup=On.integrateBRDF(e,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var n=On.prefilterEnvironmentMap(e,r,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=n.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}});const Cd=wd;var Rd=ht.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new De.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,r=0;r<e.coefficients.length;r++)t[r]=e.coefficients[r];return t}}}});const Dd=Rd;var gl={},Qt=["px","nx","py","ny","pz","nz"];function Ld(e,t){var r=e[0],n=e[1],i=e[2];return t===0?1:t===1?r:t===2?n:t===3?i:t===4?r*i:t===5?n*i:t===6?r*n:t===7?3*i*i-1:r*r-n*n}var Md={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function Pd(e,t,r,n){for(var i=new De.Float32Array(27),a=b.create(),o=b.create(),s=b.create(),l=0;l<9;l++){for(var u=b.create(),c=0;c<Qt.length;c++){for(var f=t[Qt[c]],d=b.create(),h=0,p=0,v=Md[Qt[c]],m=0;m<n;m++)for(var _=0;_<r;_++){a[0]=_/(r-1)*2-1,a[1]=m/(n-1)*2-1,a[2]=-1,b.normalize(a,a),s[0]=a[v[0]]*v[3],s[1]=a[v[1]]*v[4],s[2]=a[v[2]]*v[5],o[0]=f[p++]/255,o[1]=f[p++]/255,o[2]=f[p++]/255;var y=f[p++]/255*8.12;o[0]*=y,o[1]*=y,o[2]*=y,b.scaleAndAdd(d,d,o,Ld(s,l)*-a[2]),h+=-a[2]}b.scaleAndAdd(u,u,d,1/h)}i[l*3]=u[0]/6,i[l*3+1]=u[1]/6,i[l*3+2]=u[2]/6}return i}gl.projectEnvironmentMap=function(e,t,r){r=r||{},r.lod=r.lod||0;var n,i=new Gt,a=64;t.textureType==="texture2D"?n=new sn({scene:i,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,n=new sn({scene:i,environmentMap:t}));var o=Math.ceil(a/Math.pow(2,r.lod)),s=Math.ceil(a/Math.pow(2,r.lod)),l=new le({width:o,height:s}),u=new Ve;n.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&n.material.define("fragment","RGBM_DECODE"),n.material.set("lod",r.lod);for(var c=new Oa({texture:l}),f={},d=0;d<Qt.length;d++){f[Qt[d]]=new Uint8Array(o*s*4);var h=c.getCamera(Qt[d]);h.fov=90,u.attach(l),u.bind(e),e.render(i,h),e.gl.readPixels(0,0,o,s,Y.RGBA,Y.UNSIGNED_BYTE,f[Qt[d]]),u.unbind(e)}return n.dispose(e),u.dispose(e),l.dispose(e),Pd(e,f,o,s)};const Nd=gl;var Id={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return ze(t.dataIndex)?ot(t.dataIndex,function(r){return e.indexOfRawIndex(r)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return ze(t.name)?ot(t.name,function(r){return e.indexOfName(r)}):e.indexOfName(t.name)}};const Ye=Id;var Od=me.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,r=this.attributes.position,n=this.attributes.texcoord0,i=this.attributes.normal,a=(t+1)*(e+1);r.init(a),n.init(a),i.init(a);var o=a>65535?Uint32Array:Uint16Array,s=this.indices=new o(t*e*6),l,u,c,f,d,h,p,g=this.radius,v=this.phiStart,m=this.phiLength,_=this.thetaStart,y=this.thetaLength,g=this.radius,x=[],E=[],T=0,S=1/g;for(p=0;p<=e;p++)for(h=0;h<=t;h++)f=h/t,d=p/e,l=-g*Math.cos(v+f*m)*Math.sin(_+d*y),u=g*Math.cos(_+d*y),c=g*Math.sin(v+f*m)*Math.sin(_+d*y),x[0]=l,x[1]=u,x[2]=c,E[0]=f,E[1]=d,r.set(T,x),n.set(T,E),x[0]*=S,x[1]*=S,x[2]*=S,i.set(T,x),T++;var A,w,D,R,C=t+1,P=0;for(p=0;p<e;p++)for(h=0;h<t;h++)w=p*C+h,A=p*C+h+1,R=(p+1)*C+h+1,D=(p+1)*C+h,s[P++]=A,s[P++]=w,s[P++]=R,s[P++]=w,s[P++]=D,s[P++]=R;this.boundingBox=new Xe,this.boundingBox.max.set(g,g,g),this.boundingBox.min.set(-g,-g,-g)}});const Bd=Od;var Fd=ht.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}}});const Ud=Fd;var Hd=ht.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new B,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=ht.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}});const Gd=Hd;var zd=ht.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=ht.prototype.clone.call(this);return e.range=this.range,e}});const Vd=zd;var kd=ht.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new B,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=ht.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}});const Wd=kd;var ne=function(e,t,r,n){e=e||0,t=t||0,r=r||0,n=n||0,this.array=U.fromValues(e,t,r,n),this._dirty=!0};ne.prototype={constructor:ne,add:function(e){return U.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r,n){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=n,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new ne(this.x,this.y,this.z,this.w)},copy:function(e){return U.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return U.dist(this.array,e.array)},distance:function(e){return U.distance(this.array,e.array)},div:function(e){return U.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return U.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return U.dot(this.array,e.array)},len:function(){return U.len(this.array)},length:function(){return U.length(this.array)},lerp:function(e,t,r){return U.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return U.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return U.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return U.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return U.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return U.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return U.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return U.random(this.array,e),this._dirty=!0,this},scale:function(e){return U.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return U.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return U.sqrDist(this.array,e.array)},squaredDistance:function(e){return U.squaredDistance(this.array,e.array)},sqrLen:function(){return U.sqrLen(this.array)},squaredLength:function(){return U.squaredLength(this.array)},sub:function(e){return U.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return U.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return U.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return U.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Wr=Object.defineProperty;if(Wr){var An=ne.prototype;Wr(An,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Wr(An,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Wr(An,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Wr(An,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}ne.add=function(e,t,r){return U.add(e.array,t.array,r.array),e._dirty=!0,e};ne.set=function(e,t,r,n,i){U.set(e.array,t,r,n,i),e._dirty=!0};ne.copy=function(e,t){return U.copy(e.array,t.array),e._dirty=!0,e};ne.dist=function(e,t){return U.distance(e.array,t.array)};ne.distance=ne.dist;ne.div=function(e,t,r){return U.divide(e.array,t.array,r.array),e._dirty=!0,e};ne.divide=ne.div;ne.dot=function(e,t){return U.dot(e.array,t.array)};ne.len=function(e){return U.length(e.array)};ne.lerp=function(e,t,r,n){return U.lerp(e.array,t.array,r.array,n),e._dirty=!0,e};ne.min=function(e,t,r){return U.min(e.array,t.array,r.array),e._dirty=!0,e};ne.max=function(e,t,r){return U.max(e.array,t.array,r.array),e._dirty=!0,e};ne.mul=function(e,t,r){return U.multiply(e.array,t.array,r.array),e._dirty=!0,e};ne.multiply=ne.mul;ne.negate=function(e,t){return U.negate(e.array,t.array),e._dirty=!0,e};ne.normalize=function(e,t){return U.normalize(e.array,t.array),e._dirty=!0,e};ne.random=function(e,t){return U.random(e.array,t),e._dirty=!0,e};ne.scale=function(e,t,r){return U.scale(e.array,t.array,r),e._dirty=!0,e};ne.scaleAndAdd=function(e,t,r,n){return U.scaleAndAdd(e.array,t.array,r.array,n),e._dirty=!0,e};ne.sqrDist=function(e,t){return U.sqrDist(e.array,t.array)};ne.squaredDistance=ne.sqrDist;ne.sqrLen=function(e){return U.sqrLen(e.array)};ne.squaredLength=ne.sqrLen;ne.sub=function(e,t,r){return U.subtract(e.array,t.array,r.array),e._dirty=!0,e};ne.subtract=ne.sub;ne.transformMat4=function(e,t,r){return U.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};ne.transformQuat=function(e,t,r){return U.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};const Xd=ne;var ke={};ke.create=function(){var e=new He(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};ke.clone=function(e){var t=new He(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};ke.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};ke.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};ke.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};ke.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=r*a-i*n;return o?(o=1/o,e[0]=a*o,e[1]=-n*o,e[2]=-i*o,e[3]=r*o,e):null};ke.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e};ke.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};ke.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],c=r[3];return e[0]=n*s+a*l,e[1]=i*s+o*l,e[2]=n*u+a*c,e[3]=i*u+o*c,e};ke.mul=ke.multiply;ke.rotate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=n*l+a*s,e[1]=i*l+o*s,e[2]=n*-s+a*l,e[3]=i*-s+o*l,e};ke.scale=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=r[0],l=r[1];return e[0]=n*s,e[1]=i*s,e[2]=a*l,e[3]=o*l,e};ke.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};ke.LDU=function(e,t,r,n){return e[2]=n[2]/n[0],r[0]=n[0],r[1]=n[1],r[3]=n[3]-e[2]*r[1],[e,t,r]};const be=ke;var je=function(){this.array=be.create(),this._dirty=!0};je.prototype={constructor:je,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new je().copy(this)},copy:function(e){return be.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return be.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return be.determinant(this.array)},identity:function(){return be.identity(this.array),this._dirty=!0,this},invert:function(){return be.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return be.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return be.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return be.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return be.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return be.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return be.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return be.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};je.adjoint=function(e,t){return be.adjoint(e.array,t.array),e._dirty=!0,e};je.copy=function(e,t){return be.copy(e.array,t.array),e._dirty=!0,e};je.determinant=function(e){return be.determinant(e.array)};je.identity=function(e){return be.identity(e.array),e._dirty=!0,e};je.invert=function(e,t){return be.invert(e.array,t.array),e._dirty=!0,e};je.mul=function(e,t,r){return be.mul(e.array,t.array,r.array),e._dirty=!0,e};je.multiply=je.mul;je.rotate=function(e,t,r){return be.rotate(e.array,t.array,r),e._dirty=!0,e};je.scale=function(e,t,r){return be.scale(e.array,t.array,r.array),e._dirty=!0,e};je.transpose=function(e,t){return be.transpose(e.array,t.array),e._dirty=!0,e};const qd=je;var $e={};$e.create=function(){var e=new He(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};$e.clone=function(e){var t=new He(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};$e.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};$e.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};$e.invert=function(e,t){var r=t[0],n=t[1],i=t[2],a=t[3],o=t[4],s=t[5],l=r*a-n*i;return l?(l=1/l,e[0]=a*l,e[1]=-n*l,e[2]=-i*l,e[3]=r*l,e[4]=(i*s-a*o)*l,e[5]=(n*o-r*s)*l,e):null};$e.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};$e.multiply=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],c=r[1],f=r[2],d=r[3],h=r[4],p=r[5];return e[0]=n*u+a*c,e[1]=i*u+o*c,e[2]=n*f+a*d,e[3]=i*f+o*d,e[4]=n*h+a*p+s,e[5]=i*h+o*p+l,e};$e.mul=$e.multiply;$e.rotate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=Math.sin(r),c=Math.cos(r);return e[0]=n*c+a*u,e[1]=i*c+o*u,e[2]=n*-u+a*c,e[3]=i*-u+o*c,e[4]=s,e[5]=l,e};$e.scale=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],c=r[1];return e[0]=n*u,e[1]=i*u,e[2]=a*c,e[3]=o*c,e[4]=s,e[5]=l,e};$e.translate=function(e,t,r){var n=t[0],i=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],c=r[1];return e[0]=n,e[1]=i,e[2]=a,e[3]=o,e[4]=n*u+a*c+s,e[5]=i*u+o*c+l,e};$e.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};const Re=$e;var Ke=function(){this.array=Re.create(),this._dirty=!0};Ke.prototype={constructor:Ke,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new Ke().copy(this)},copy:function(e){return Re.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return Re.determinant(this.array)},identity:function(){return Re.identity(this.array),this._dirty=!0,this},invert:function(){return Re.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Re.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Re.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Re.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Re.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Re.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Re.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return Re.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ke.copy=function(e,t){return Re.copy(e.array,t.array),e._dirty=!0,e};Ke.determinant=function(e){return Re.determinant(e.array)};Ke.identity=function(e){return Re.identity(e.array),e._dirty=!0,e};Ke.invert=function(e,t){return Re.invert(e.array,t.array),e._dirty=!0,e};Ke.mul=function(e,t,r){return Re.mul(e.array,t.array,r.array),e._dirty=!0,e};Ke.multiply=Ke.mul;Ke.rotate=function(e,t,r){return Re.rotate(e.array,t.array,r),e._dirty=!0,e};Ke.scale=function(e,t,r){return Re.scale(e.array,t.array,r.array),e._dirty=!0,e};Ke.translate=function(e,t,r){return Re.translate(e.array,t.array,r.array),e._dirty=!0,e};const jd=Ke;var Pe=function(){this.array=ee.create(),this._dirty=!0};Pe.prototype={constructor:Pe,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return ee.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new Pe().copy(this)},copy:function(e){return ee.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return ee.determinant(this.array)},fromMat2d:function(e){return ee.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return ee.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return ee.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return ee.identity(this.array),this._dirty=!0,this},invert:function(){return ee.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return ee.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return ee.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return ee.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return ee.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return ee.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return ee.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return ee.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return ee.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return ee.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Pe.adjoint=function(e,t){return ee.adjoint(e.array,t.array),e._dirty=!0,e};Pe.copy=function(e,t){return ee.copy(e.array,t.array),e._dirty=!0,e};Pe.determinant=function(e){return ee.determinant(e.array)};Pe.identity=function(e){return ee.identity(e.array),e._dirty=!0,e};Pe.invert=function(e,t){return ee.invert(e.array,t.array),e};Pe.mul=function(e,t,r){return ee.mul(e.array,t.array,r.array),e._dirty=!0,e};Pe.multiply=Pe.mul;Pe.fromMat2d=function(e,t){return ee.fromMat2d(e.array,t.array),e._dirty=!0,e};Pe.fromMat4=function(e,t){return ee.fromMat4(e.array,t.array),e._dirty=!0,e};Pe.fromQuat=function(e,t){return ee.fromQuat(e.array,t.array),e._dirty=!0,e};Pe.normalFromMat4=function(e,t){return ee.normalFromMat4(e.array,t.array),e._dirty=!0,e};Pe.rotate=function(e,t,r){return ee.rotate(e.array,t.array,r),e._dirty=!0,e};Pe.scale=function(e,t,r){return ee.scale(e.array,t.array,r.array),e._dirty=!0,e};Pe.transpose=function(e,t){return ee.transpose(e.array,t.array),e._dirty=!0,e};Pe.translate=function(e,t,r){return ee.translate(e.array,t.array,r.array),e._dirty=!0,e};const Zd=Pe;var Yd={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var r=this,n;if(e){for(var i=e.split("."),a=r,o=0,s=i.length;o<s;o++)a&&(a=a[i[o]]);a&&(n=a)}else n=r;if(n==null)throw new Error("Target "+e+" not exists");var l=this._animators,u=new Bu(n,t),c=this;return u.during(function(){c.__zr&&c.__zr.refresh()}).done(function(){var f=l.indexOf(u);f>=0&&l.splice(f,1)}),l.push(u),this.__zr&&this.__zr.animation.addAnimator(u),u},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,r=t.length,n=0;n<r;n++)t[n].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}};const Kd=Yd,$d=`
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
@end`,Qd=`
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
`,Jd=`@export ecgl.color.vertex

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
@end`,ev=`/**
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

@end`,tv=`@export ecgl.realistic.vertex

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

@end`,rv=`@export ecgl.hatching.vertex

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
`,nv=`@export ecgl.sm.depth.vertex

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

@end`;Object.assign(_t.prototype,Kd);F.import($d);F.import(ll);F.import(Qd);F.import(Jd);F.import(ev);F.import(tv);F.import(rv);F.import(nv);function iv(e){return!e||e==="none"}function yl(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function av(e){return e.getZr&&e.setOption}var ov=Gt.prototype.addToScene,sv=Gt.prototype.removeFromScene;Gt.prototype.addToScene=function(e){if(ov.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(r){r.__zr=t,r.addAnimatorsToZr&&r.addAnimatorsToZr(t)})}};Gt.prototype.removeFromScene=function(e){sv.call(this,e),e.traverse(function(t){var r=t.__zr;t.__zr=null,r&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(r)})};Rt.prototype.setTextureImage=function(e,t,r,n){if(this.shader){var i=r.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),iv(t)||(o=j.loadTexture(t,r,n,function(s){a.enableTexture(e),i&&i.refresh()}),a.set(e,o)),o}};var j={};j.Renderer=en;j.Node=_t;j.Mesh=Ma;j.Shader=F;j.Material=Rt;j.Texture=Y;j.Texture2D=le;j.Geometry=me;j.SphereGeometry=Bd;j.PlaneGeometry=Ba;j.CubeGeometry=_l;j.AmbientLight=Ud;j.DirectionalLight=Gd;j.PointLight=Vd;j.SpotLight=Wd;j.PerspectiveCamera=Ie;j.OrthographicCamera=ln;j.Vector2=et;j.Vector3=B;j.Vector4=Xd;j.Quaternion=ul;j.Matrix2=qd;j.Matrix2d=jd;j.Matrix3=Zd;j.Matrix4=V;j.Plane=vl;j.Ray=qn;j.BoundingBox=Xe;j.Frustum=Na;var bn=null;function lv(){return bn!==null||(bn=tr.createBlank("rgba(255,255,255,0)").image),bn}function cs(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function fs(e){if((e.wrapS===Y.REPEAT||e.wrapT===Y.REPEAT)&&e.image){var t=cs(e.width),r=cs(e.height);if(t!==e.width||r!==e.height){var n=document.createElement("canvas");n.width=t,n.height=r;var i=n.getContext("2d");i.drawImage(e.image,0,0,t,r),e.image=n}}}j.loadTexture=function(e,t,r,n){typeof r=="function"&&(n=r,r={}),r=r||{};for(var i=Object.keys(r).sort(),a="",o=0;o<i.length;o++)a+=i[o]+"_"+r[i[o]]+"_";var s=t.__textureCache=t.__textureCache||new Fu(20);if(av(e)){var l=e.__textureid__,u=s.get(a+l);if(u)u.texture.surface.setECharts(e),n&&n(u.texture);else{var c=new gd(e);c.onupdate=function(){t.getZr().refresh()},u={texture:c.getTexture()};for(var o=0;o<i.length;o++)u.texture[i[o]]=r[i[o]];l=e.__textureid__||"__ecgl_ec__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),n&&n(u.texture)}return u.texture}else if(yl(e)){var l=e.__textureid__,u=s.get(a+l);if(!u){u={texture:new j.Texture2D({image:e})};for(var o=0;o<i.length;o++)u.texture[i[o]]=r[i[o]];l=e.__textureid__||"__ecgl_image__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),fs(u.texture),n&&n(u.texture)}return u.texture}else{var u=s.get(a+e);if(u)u.callbacks?u.callbacks.push(n):n&&n(u.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){u={callbacks:[n]};var f=tr.loadTexture(e,{exposure:r.exposure,fileType:"hdr"},function(){f.dirty(),u.callbacks.forEach(function(p){p&&p(f)}),u.callbacks=null});u.texture=f,s.put(a+e,u)}else{for(var f=new j.Texture2D({image:new Image}),o=0;o<i.length;o++)f[i[o]]=r[i[o]];u={texture:f,callbacks:[n]};var d=f.image;d.onload=function(){f.image=d,fs(f),f.dirty(),u.callbacks.forEach(function(v){v&&v(f)}),u.callbacks=null},d.crossOrigin="Anonymous",d.src=e,f.image=lv(),s.put(a+e,u)}return u.texture}};j.createAmbientCubemap=function(e,t,r,n){e=e||{};var i=e.texture,a=Ye.firstNotNull(e.exposure,1),o=new Cd({intensity:Ye.firstNotNull(e.specularIntensity,1)}),s=new Dd({intensity:Ye.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=j.loadTexture(i,r,{exposure:a},function(){o.cubemap.flipY=!1,o.prefilter(t,32),s.coefficients=Nd.projectEnvironmentMap(t,o.cubemap,{lod:1}),n&&n()}),{specular:o,diffuse:s}};j.createBlankTexture=tr.createBlank;j.isImage=yl;j.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};j.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=xa(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};j.directionFromAlphaBeta=function(e,t){var r=e/180*Math.PI+Math.PI/2,n=-t/180*Math.PI+Math.PI/2,i=[],a=Math.sin(r);return i[0]=a*Math.cos(n),i[1]=-Math.cos(r),i[2]=a*Math.sin(n),i};j.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};j.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];j.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=F.source(e+".vertex"),r=F.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),r||console.error("Fragment shader of '%s' not exits",e);var n=new F(t,r);return n.name=e,n};j.createMaterial=function(e,t){t instanceof Array||(t=[t]);var r=j.createShader(e),n=new Rt({shader:r});return t.forEach(function(i){typeof i=="string"&&n.define(i)}),n};j.setMaterialFromModel=function(e,t,r,n){t.autoUpdateTextureStatus=!1;var i=r.getModel(e+"Material"),a=i.get("detailTexture"),o=Ye.firstNotNull(i.get("textureTiling"),1),s=Ye.firstNotNull(i.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?j.Texture.REPEAT:j.Texture.CLAMP_TO_EDGE,u={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var c=i.get("roughness"),f=i.get("metalness");f!=null?isNaN(f)&&(t.setTextureImage("metalnessMap",f,n,u),f=Ye.firstNotNull(i.get("metalnessAdjust"),.5)):f=0,c!=null?isNaN(c)&&(t.setTextureImage("roughnessMap",c,n,u),c=Ye.firstNotNull(i.get("roughnessAdjust"),.5)):c=.5;var d=i.get("normalTexture");t.setTextureImage("detailMap",a,n,u),t.setTextureImage("normalMap",d,n,u),t.set({roughness:c,metalness:f,detailUvRepeat:o,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",a,n,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",a,n,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="hatching"){var h=i.get("hatchingTextures")||[];h.length<6;for(var p=0;p<6;p++)t.setTextureImage("hatch"+(p+1),h[p],n,{anisotropic:8,wrapS:j.Texture.REPEAT,wrapT:j.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}};j.updateVertexAnimation=function(e,t,r,n){var i=n.get("animation"),a=n.get("animationDurationUpdate"),o=n.get("animationEasingUpdate"),s=r.shadowDepthMaterial;if(i&&t&&a>0&&t.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)r.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),s&&s.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};const k=j;var pe=function(e,t){this.id=e,this.zr=t;try{this.renderer=new en({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(n){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(n);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new Ch({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new ir({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};pe.prototype.setUnpainted=function(){};pe.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var r=this.zr;e.scene.traverse(function(n){n.__zr=r,n.addAnimatorsToZr&&n.addAnimatorsToZr(r)})}};function xl(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}pe.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(xl,this),e.layer=null,this._viewsToDispose.push(e))}};pe.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(xl,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};pe.prototype.resize=function(e,t){var r=this.renderer;r.resize(e,t)};pe.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};pe.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};pe.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};pe.prototype.needsRefresh=function(){this.zr.refresh()};pe.prototype.refresh=function(e){this._backgroundColor=e?k.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};pe.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};pe.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};pe.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var uv=1;pe.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var r=!1,n=0;n<this.views.length;n++)r=this.views[n].needsAccumulate()||r;if(!r)return;function i(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var o=!0,s=0;s<t.views.length;s++)o=t.views[s].isAccumulateFinished()&&r;o||(t._doRender(!0),e?i(a):Uu(function(){i(a)}))}}this._accumulatingId=uv++,e?i(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){i(t._accumulatingId)},50)};pe.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(Zn(this._textureList),Zn(this._geometriesList));for(var r=0;r<this.views.length;r++)cv(this.views[r].scene,e,t);this._textureList&&(Yn(this.renderer,this._textureList),Yn(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function Zn(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function Yn(e,t){for(var r=0;r<t.length;r++)t[r].__used__||t[r].dispose(e)}function wn(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function cv(e,t,r){var n,i;e.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==n)for(var u=l.getTextureUniforms(),c=0;c<u.length;c++){var f=u[c],d=l.uniforms[f].value;if(d){if(d instanceof Y)wn(d,t);else if(d instanceof Array)for(var h=0;h<d.length;h++)d[h]instanceof Y&&wn(d[h],t)}}s!==i&&wn(s,r),n=l,i=s}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&wn(e.lights[a].cubemap,t)}pe.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(Zn(this._textureList),Zn(this._geometriesList),Yn(this.renderer,this._textureList),Yn(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};pe.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};pe.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),r=t&&t.target,n=this._hovered;this._hovered=t,n&&r!==n.target&&(n.relatedTarget=r,this._dispatchEvent("mouseout",e,n),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!n||r!==n.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};pe.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};pe.prototype.onclick=pe.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(t*t+r*r)>20)){e=e.event;var n=this.pickObject(e.offsetX,e.offsetY);n&&(this._dispatchEvent(e.type,e,n),this._dispatchDataEvent(e.type,e,n));var i=this._clickToSetFocusPoint(e);if(i){var a=i.view.setDOFFocusOnPoint(i.distance);a&&this.zr.refresh()}}}};pe.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,r=t.viewport,n=this.views.length-1;n>=0;n--){var i=this.views[n];if(i.hasDOF()&&i.containPoint(e.offsetX,e.offsetY)){this._picking.scene=i.scene,this._picking.camera=i.camera,t.viewport=i.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=i,a}}t.viewport=r};pe.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};pe.prototype.pickObject=function(e,t){for(var r=[],n=this.renderer,i=n.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,n.viewport=o.viewport,this._picking.pickAll(e,t,r))}return n.viewport=i,r.sort(function(s,l){return s.distance-l.distance}),r[0]};pe.prototype._dispatchEvent=function(e,t,r){r||(r={});var n=r.target;for(r.cancelBubble=!1,r.event=t,r.type=e,r.offsetX=t.offsetX,r.offsetY=t.offsetY;n&&(n.trigger(e,r),n=n.getParent(),!r.cancelBubble););this._dispatchToView(e,r)};pe.prototype._dispatchDataEvent=function(e,t,r){var n=r&&r.target,i=n&&n.dataIndex,a=n&&n.seriesIndex,o=n&&n.eventData,s=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var u={target:l};const c=Jt(l);e==="mousemove"&&(i!=null?i!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(c.dataIndex=this._lastDataIndex,c.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(c.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0),this._lastEventData=o,this._lastDataIndex=i,this._lastSeriesIndex=a),c.eventData=o,c.dataIndex=i,c.seriesIndex=a,(o!=null||parseInt(i,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(u,e,t),s&&this.zr.handler.dispatchToElement(u,"mouseover",t))};pe.prototype._dispatchToView=function(e,t){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(t.offsetX,t.offsetY)&&this.views[r].trigger(e,t)};Object.assign(pe.prototype,Ra);const Tl=pe;var fv=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function Zr(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var r=e[t].normal,n=e[t].emphasis;r&&(e[t]=r),n&&(e.emphasis=e.emphasis||{},e.emphasis[t]=n)}}function hv(e){Zr(e,"itemStyle"),Zr(e,"lineStyle"),Zr(e,"areaStyle"),Zr(e,"label")}function Cn(e){e&&(e instanceof Array||(e=[e]),he(e,function(t){if(t.axisLabel){var r=t.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function dv(e){he(e.series,function(t){Ms(fv,t.type)>=0&&(hv(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),Cn(e.xAxis3D),Cn(e.yAxis3D),Cn(e.zAxis3D),Cn(e.grid3D),Zr(e.geo3D)}function El(e){this._layers={},this._zr=e}El.prototype.update=function(e,t){var r=this,n=t.getZr();if(!n.getWidth()||!n.getHeight()){console.warn("Dom has no width or height");return}function i(s){n.setSleepAfterStill(0);var l;s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var u=r._layers,c=u[l];if(!c){if(c=u[l]=new Tl("gl-"+l,n),n.painter.isSingleCanvas()){c.virtual=!0;var f=new Rs({z:1e4,style:{image:c.renderer.canvas},silent:!0});c.__hostImage=f,n.add(f)}n.painter.insertLayer(l,c)}return c.__hostImage&&c.__hostImage.setStyle({width:c.renderer.getWidth(),height:c.renderer.getHeight()}),c}function a(s,l){s&&s.traverse(function(u){u.isRenderable&&u.isRenderable()&&(u.ignorePicking=u.$ignorePicking!=null?u.$ignorePicking:l)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(s,l){if(s!=="series"){var u=t.getViewOfComponentModel(l),c=l.coordinateSystem;if(u.__ecgl__){var f;if(c){if(!c.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}f=c.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}f=c.viewGL}var f=c.viewGL,d=i(l);d.addView(f),u.afterRender&&u.afterRender(l,e,t,d),a(u.groupGL,l.get("silent"))}}}),e.eachSeries(function(s){var l=t.getViewOfSeriesModel(s),u=s.coordinateSystem;if(l.__ecgl__){if(u&&!u.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var c=u&&u.viewGL||l.viewGL,f=i(s);f.addView(c),l.afterRender&&l.afterRender(s,e,t,f),a(l.groupGL,s.get("silent"))}})};Hu(function(e){var t=e.getZr(),r=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(n){n instanceof Tl&&n.dispose()}),r.call(this)},t.painter.getRenderedCanvas=function(n){if(n=n||{},this._singleCanvas)return this._layers[0].dom;var i=document.createElement("canvas"),a=n.pixelRatio||this.dpr;i.width=this.getWidth()*a,i.height=this.getHeight()*a;var o=i.getContext("2d");o.dpr=a,o.clearRect(0,0,i.width,i.height),n.backgroundColor&&(o.fillStyle=n.backgroundColor,o.fillRect(0,0,i.width,i.height));var s=this.storage.getDisplayList(!0),l={},u,c=this;function f(v,m){var _=c._zlevelList;v==null&&(v=-1/0);for(var y,g=0;g<_.length;g++){var x=_[g],E=c._layers[x];if(!E.__builtin__&&x>v&&x<m){y=E;break}}y&&y.renderToCanvas&&(o.save(),y.renderToCanvas(o),o.restore())}for(var d={ctx:o},h=0;h<s.length;h++){var p=s[h];p.zlevel!==u&&(f(u,p.zlevel),u=p.zlevel),this._doPaintEl(p,d,!0,null,l)}return f(u,1/0),i}});Gu(function(e,t){var r=t.getZr(),n=r.__egl=r.__egl||new El(r);n.update(e,t)});zu(dv);const zt={vec2:z,vec3:b,vec4:U,mat2:be,mat2d:Re,mat3:ee,mat4:N,quat:Z};var vv=zt.vec3,pv=ba.isDimensionStacked;function mv(e){var t=e[0],r=e[1];return!(t>0&&r>0||t<0&&r<0)}function _v(e,t){var r=e.getData(),n=e.get("barSize");if(n==null){var i=t.size,a,o,s=t.getAxis("x"),l=t.getAxis("y");s.type==="category"?a=s.getBandWidth()*.7:a=Math.round(i[0]/Math.sqrt(r.count()))*.6,l.type==="category"?o=l.getBandWidth()*.7:o=Math.round(i[1]/Math.sqrt(r.count()))*.6,n=[a,o]}else ze(n)||(n=[n,n]);var u=t.getAxis("z").scale.getExtent(),c=mv(u),f=["x","y","z"].map(function(p){return e.coordDimToDataDim(p)[0]}),d=pv(r,f[2]),h=d?r.getCalculationInfo("stackResultDimension"):f[2];r.each(f,function(p,v,m,_){var y=r.get(h,_),g=d?y-m:c?0:u[0],x=t.dataToPoint([p,v,g]),E=t.dataToPoint([p,v,y]),T=vv.dist(x,E),S=[0,E[1]<x[1]?-1:1,0];Math.abs(T)===0&&(T=.1);var A=[n[0],T,n[1]];r.setItemLayout(_,[x,S,A])}),r.setLayout("orient",[1,0,0])}function Ua(e,t,r){for(var n=e.getDataExtent(t),i=e.getDataExtent(r),a=n[1]-n[0]||n[0],o=i[1]-i[0]||i[0],s=50,l=new Uint8Array(s*s),u=0;u<e.count();u++){var c=e.get(t,u),f=e.get(r,u),d=Math.floor((c-n[0])/a*(s-1)),h=Math.floor((f-i[0])/o*(s-1)),p=h*s+d;l[p]=l[p]||1}for(var v=0,u=0;u<l.length;u++)l[u]&&v++;return v/l.length}var hs=zt.vec3,gv=ba.isDimensionStacked;function yv(e,t){var r=e.getData(),n=e.get("minHeight")||0,i=e.get("barSize"),a=["lng","lat","alt"].map(function(u){return e.coordDimToDataDim(u)[0]});if(i==null){var o=t.radius*Math.PI,s=Ua(r,a[0],a[1]);i=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else ze(i)||(i=[i,i]);var l=Ha(r,a);r.each(a,function(u,c,f,d){var h=r.get(l.dimension,d),p=l.isStacked?h-f:t.altitudeAxis.scale.getExtent()[0],v=Math.max(t.altitudeAxis.dataToCoord(f),n),m=t.dataToPoint([u,c,p]),_=t.dataToPoint([u,c,h]),y=hs.sub([],_,m);hs.normalize(y,y);var g=[i[0],v,i[1]];r.setItemLayout(d,[m,y,g])}),r.setLayout("orient",B.UP.array)}function xv(e,t){var r=e.getData(),n=e.get("barSize"),i=e.get("minHeight")||0,a=["lng","lat","alt"].map(function(c){return e.coordDimToDataDim(c)[0]});if(n==null){var o=Math.min(t.size[0],t.size[2]),s=Ua(r,a[0],a[1]);n=[o/Math.sqrt(r.count()/s),o/Math.sqrt(r.count()/s)]}else ze(n)||(n=[n,n]);var l=[0,1,0],u=Ha(r,a);r.each(a,function(c,f,d,h){var p=r.get(u.dimension,h),v=u.isStacked?p-d:t.altitudeAxis.scale.getExtent()[0],m=Math.max(t.altitudeAxis.dataToCoord(d),i),_=t.dataToPoint([c,f,v]),y=[n[0],m,n[1]];r.setItemLayout(h,[_,l,y])}),r.setLayout("orient",[1,0,0])}function Tv(e,t){var r=e.getData(),n=e.coordDimToDataDim("lng")[0],i=e.coordDimToDataDim("lat")[0],a=e.coordDimToDataDim("alt")[0],o=e.get("barSize"),s=e.get("minHeight")||0;if(o==null){var l=r.getDataExtent(n),u=r.getDataExtent(i),c=t.dataToPoint([l[0],u[0]]),f=t.dataToPoint([l[1],u[1]]),d=Math.min(Math.abs(c[0]-f[0]),Math.abs(c[1]-f[1]))||1,h=Ua(r,n,i);o=[d/Math.sqrt(r.count()/h),d/Math.sqrt(r.count()/h)]}else ze(o)||(o=[o,o]),o[0]/=t.getScale()/16,o[1]/=t.getScale()/16;var p=[0,0,1],v=[n,i,a],m=Ha(r,v);r.each(v,function(_,y,g,x){var E=r.get(m.dimension,x),T=m.isStacked?E-g:0,S=t.dataToPoint([_,y,T]),A=t.dataToPoint([_,y,E]),w=Math.max(A[2]-S[2],s),D=[o[0],w,o[1]];r.setItemLayout(x,[S,p,D])}),r.setLayout("orient",[1,0,0])}function Ha(e,t){var r=gv(e,t[2]);return{dimension:r?e.getCalculationInfo("stackResultDimension"):t[2],isStacked:r}}function Ev(e){e.registerLayout(function(t,r){t.eachSeriesByType("bar3D",function(n){var i=n.coordinateSystem,a=i&&i.type;a==="globe"?yv(n,i):a==="cartesian3D"?_v(n,i):a==="geo3D"?xv(n,i):(a==="mapbox3D"||a==="maptalks3D")&&Tv(n,i)})})}const Sv={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}};var Ga={};Ga.getFormattedLabel=function(e,t,r,n,i){r=r||"normal";var a=e.getData(n),o=a.getItemModel(t),s=e.getDataParams(t,n);i!=null&&s.value instanceof Array&&(s.value=s.value[i]);var l=o.get(r==="normal"?["label","formatter"]:["emphasis","label","formatter"]);l==null&&(l=o.get(["label","formatter"]));var u;return typeof l=="function"?(s.status=r,u=l(s)):typeof l=="string"&&(u=Vu(l,s)),u};Ga.normalizeToArray=function(e){return e instanceof Array?e:e==null?[]:[e]};const Sl=Ga;function tn(e,t){const r=e.getItemVisual(t,"style");if(r){const n=e.getVisual("drawType");return r[n]}}function Bn(e,t){const r=e.getItemVisual(t,"style");return r&&r.opacity}function Av(e,t){var r=[];return he(e.dimensions,function(n){var i=e.getDimensionInfo(n),a=i.otherDims,o=a[t];o!=null&&o!==!1&&(r[o]=i.name)}),r}function bv(e,t,r){function n(f){var d=[],h=Av(i,"tooltip");h.length?he(h,function(v){p(i.get(v,t),v)}):he(f,p);function p(v,m){var _=i.getDimensionInfo(m);if(!(!_||_.otherDims.tooltip===!1)){var y=_.type,g="- "+(_.tooltipName||_.name)+": "+(y==="ordinal"?v+"":y==="time"?r?"":Wu("yyyy/MM/dd hh:mm:ss",v):oo(v));g&&d.push(dn(g))}}return"<br/>"+d.join("<br/>")}var i=e.getData(),a=e.getRawValue(t),o=ze(a)?n(a):dn(oo(a)),s=i.getName(t),l=tn(i,t);Ls(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var u=ku(l),c=e.name;return c==="\0-"&&(c=""),c=c?dn(c)+(r?": ":"<br/>"):"",r?u+c+o:c+u+(s?dn(s)+": "+o:o)}function wv(e,t,r){r=r||e.getSource();var n=t||Xu(e.get("coordinateSystem"))||["x","y","z"],i=qu(r,{dimensionsDefine:r.dimensionsDefine||e.get("dimensions"),encodeDefine:r.encodeDefine||e.get("encode"),coordDimensions:n.map(function(s){var l=e.getReferringComponents(s+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:s}})});e.get("coordinateSystem")==="cartesian3D"&&i.forEach(function(s){if(n.indexOf(s.coordDim)>=0){var l=e.getReferringComponents(s.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(s.ordinalMeta=l.getOrdinalMeta())}});var a=ba.enableDataStack(e,i,{byIndex:!0,stackedCoordDimension:"z"}),o=new ju(i,e);return o.setCalculationInfo(a),o.initData(r),o}var Al=Ns.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(e,t){return wv(this)},getFormattedLabel:function(e,t,r,n){var i=Sl.getFormattedLabel(this,e,t,r,n);return i==null&&(i=this.getData().get("z",e)),i},formatTooltip:function(e){return bv(this,e)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});mt(Al.prototype,Sv);const Cv=Al,ui={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var r in t)e||!t[r].value?t[r].value=[]:t[r].value=Array.prototype.slice.call(t[r].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}};function Gi(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function bl(e,t,r,n,i){var a=r,o=e[t];Gi(e,t,n);for(var s=r;s<n;s++)i(e[s],o)<0&&(Gi(e,s,a),a++);return Gi(e,n,a),a}function Kn(e,t,r,n){if(r<n){var i=Math.floor((r+n)/2),a=bl(e,i,r,n,t);Kn(e,t,r,a-1),Kn(e,t,a+1,n)}}function $n(){this._parts=[]}$n.prototype.step=function(e,t,r){var n=e.length;if(r===0){this._parts=[],this._sorted=!1;var i=Math.floor(n/2);this._parts.push({pivot:i,left:0,right:n-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var o=0;o<a.length;o++)a[o].pivot=bl(e,a[o].pivot,a[o].left,a[o].right,t);for(var s=[],o=0;o<a.length;o++){var l=a[o].left,u=a[o].pivot-1;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u});var l=a[o].pivot+1,u=a[o].right;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u})}a=this._parts=s}else for(var o=0;o<Math.floor(a.length/10);o++){var c=a.length-1-this._currentSortPartIdx;if(Kn(e,t,a[c].left,a[c].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}};$n.sort=Kn;var Rr=zt.vec3,ds=Rr.create(),vs=Rr.create(),ps=Rr.create();const Rv={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var r=this.indices;if(t===0){var n=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new r.constructor(r.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var i=0,a,o=0;o<r.length;){n.get(r[o++],ds),n.get(r[o++],vs),n.get(r[o++],ps);var s=Rr.sqrDist(ds,e),l=Rr.sqrDist(vs,e),u=Rr.sqrDist(ps,e),c=Math.min(s,l);c=Math.min(c,u),o===3?(a=c,c=0):c=c-a,this._triangleZList[i++]=c}}for(var f=this._sortedTriangleIndices,o=0;o<f.length;o++)f[o]=o;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var o=0;o<3;o++)this._progressiveQuickSort(t*3+o);for(var d=this._indicesTmp,h=this._triangleZListTmp,p=this._triangleZList,o=0;o<this.triangleCount;o++){var v=f[o]*3,m=o*3;d[m++]=r[v++],d[m++]=r[v++],d[m]=r[v],h[o]=p[f[o]]}var _=this._indicesTmp;this._indicesTmp=this.indices,this.indices=_;var _=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=_,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;function n(i,a){return t[a]-t[i]}e?Array.prototype.sort.call(r,n):$n.sort(r,n,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;this._quickSort=this._quickSort||new $n,this._quickSort.step(r,function(n,i){return t[i]-t[n]},e)}};var Ae=zt.vec3,Dv=zt.mat3,za=me.extend(function(){return{attributes:{position:new me.Attribute("position","float",3,"POSITION"),normal:new me.Attribute("normal","float",3,"NORMAL"),color:new me.Attribute("color","float",4,"COLOR"),prevPosition:new me.Attribute("prevPosition","float",3),prevNormal:new me.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(e){var t=this.enableNormal,r=this.getBarVertexCount()*e,n=this.getBarTriangleCount()*e;this.vertexCount!==r&&(this.attributes.position.init(r),t?this.attributes.normal.init(r):this.attributes.normal.value=null,this.attributes.color.init(r)),this.triangleCount!==n&&(this.indices=r>65535?new Uint32Array(n*3):new Uint16Array(n*3),this._dataIndices=new Uint32Array(r))},getBarVertexCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarVertexCount(e):this.enableNormal?24:8},getBarTriangleCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarTriangleCount(e):12},_getBevelBarVertexCount:function(e){return(e+1)*4*(e+1)*2},_getBevelBarTriangleCount:function(e){var t=e*4+3,r=e*2+1;return(t+1)*r*2+4},setColor:function(e,t){for(var r=this.getBarVertexCount(),n=r*e,i=r*(e+1),a=n;a<i;a++)this.attributes.color.set(a,t);this.dirtyAttribute("color")},getDataIndexOfVertex:function(e){return this._dataIndices?this._dataIndices[e]:null},addBar:function(){for(var e=Ae.create,t=Ae.scaleAndAdd,r=e(),n=e(),i=e(),a=e(),o=e(),s=e(),l=e(),u=[],c=[],f=0;f<8;f++)u[f]=e();for(var d=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],h=[0,1,2,0,2,3],p=[],f=0;f<d.length;f++)for(var v=d[f],m=0;m<2;m++){for(var _=[],y=0;y<3;y++)_.push(v[h[m*3+y]]);p.push(_)}return function(g,x,E,T,S,A){var w=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(g,x,E,T,this.bevelSize,this.bevelSegments,S);else{Ae.copy(i,x),Ae.normalize(i,i),Ae.cross(a,E,i),Ae.normalize(a,a),Ae.cross(n,i,a),Ae.normalize(a,a),Ae.negate(o,n),Ae.negate(s,i),Ae.negate(l,a),t(u[0],g,n,T[0]/2),t(u[0],u[0],a,T[2]/2),t(u[1],g,n,T[0]/2),t(u[1],u[1],l,T[2]/2),t(u[2],g,o,T[0]/2),t(u[2],u[2],l,T[2]/2),t(u[3],g,o,T[0]/2),t(u[3],u[3],a,T[2]/2),t(r,g,i,T[1]),t(u[4],r,n,T[0]/2),t(u[4],u[4],a,T[2]/2),t(u[5],r,n,T[0]/2),t(u[5],u[5],l,T[2]/2),t(u[6],r,o,T[0]/2),t(u[6],u[6],l,T[2]/2),t(u[7],r,o,T[0]/2),t(u[7],u[7],a,T[2]/2);var D=this.attributes;if(this.enableNormal){c[0]=n,c[1]=o,c[2]=i,c[3]=s,c[4]=a,c[5]=l;for(var R=this._vertexOffset,C=0;C<d.length;C++){for(var P=this._triangleOffset*3,L=0;L<6;L++)this.indices[P++]=R+h[L];R+=4,this._triangleOffset+=2}for(var C=0;C<d.length;C++)for(var I=c[C],L=0;L<4;L++){var O=d[C][L];D.position.set(this._vertexOffset,u[O]),D.normal.set(this._vertexOffset,I),D.color.set(this._vertexOffset++,S)}}else{for(var C=0;C<p.length;C++){for(var P=this._triangleOffset*3,L=0;L<3;L++)this.indices[P+L]=p[C][L]+this._vertexOffset;this._triangleOffset++}for(var C=0;C<u.length;C++)D.position.set(this._vertexOffset,u[C]),D.color.set(this._vertexOffset++,S)}}for(var H=this._vertexOffset,C=w;C<H;C++)this._dataIndices[C]=A}}(),_addBevelBar:function(){var e=Ae.create(),t=Ae.create(),r=Ae.create(),n=Dv.create(),i=[],a=[1,-1,-1,1],o=[1,1,-1,-1],s=[2,0];return function(l,u,c,f,d,h,p){Ae.copy(t,u),Ae.normalize(t,t),Ae.cross(r,c,t),Ae.normalize(r,r),Ae.cross(e,t,r),Ae.normalize(r,r),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=t[0],n[4]=t[1],n[5]=t[2],n[6]=r[0],n[7]=r[1],n[8]=r[2],d=Math.min(f[0],f[2])/2*d;for(var v=0;v<3;v++)i[v]=Math.max(f[v]-d*2,0);for(var m=(f[0]-i[0])/2,_=(f[1]-i[1])/2,y=(f[2]-i[2])/2,g=[],x=[],E=this._vertexOffset,T=[],v=0;v<2;v++){T[v]=T[v]=[];for(var S=0;S<=h;S++)for(var A=0;A<4;A++){(S===0&&v===0||v===1&&S===h)&&T[v].push(E);for(var w=0;w<=h;w++){var D=w/h*Math.PI/2+Math.PI/2*A,R=S/h*Math.PI/2+Math.PI/2*v;x[0]=m*Math.cos(D)*Math.sin(R),x[1]=_*Math.cos(R),x[2]=y*Math.sin(D)*Math.sin(R),g[0]=x[0]+a[A]*i[0]/2,g[1]=x[1]+_+s[v]*i[1]/2,g[2]=x[2]+o[A]*i[2]/2,Math.abs(m-_)<1e-6&&Math.abs(_-y)<1e-6||(x[0]/=m*m,x[1]/=_*_,x[2]/=y*y),Ae.normalize(x,x),Ae.transformMat3(g,g,n),Ae.transformMat3(x,x,n),Ae.add(g,g,l),this.attributes.position.set(E,g),this.enableNormal&&this.attributes.normal.set(E,x),this.attributes.color.set(E,p),E++}}}for(var C=h*4+3,P=h*2+1,L=C+1,A=0;A<P;A++)for(var v=0;v<=C;v++){var I=A*L+v+this._vertexOffset,O=A*L+(v+1)%L+this._vertexOffset,H=(A+1)*L+(v+1)%L+this._vertexOffset,G=(A+1)*L+v+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[H,I,O]),this.setTriangleIndices(this._triangleOffset++,[H,G,I])}this.setTriangleIndices(this._triangleOffset++,[T[0][0],T[0][2],T[0][1]]),this.setTriangleIndices(this._triangleOffset++,[T[0][0],T[0][3],T[0][2]]),this.setTriangleIndices(this._triangleOffset++,[T[1][0],T[1][1],T[1][2]]),this.setTriangleIndices(this._triangleOffset++,[T[1][0],T[1][2],T[1][3]]),this._vertexOffset=E}}()});Ge(za.prototype,ui);Ge(za.prototype,Rv);const Lv=za;function Qn(e,t,r,n,i,a,o){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=n,this.height=i,this.offsetX=t,this.offsetY=r,this.dpr=o,this.gap=a}Qn.prototype={constructor:Qn,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,r){var n=e.getBoundingRect();t==null&&(t=n.width),r==null&&(r=n.height),t*=this.dpr,r*=this.dpr,this._fitElement(e,t,r);var i=this._x,a=this._y,o=this.width*this.dpr,s=this.height*this.dpr,l=this.gap;if(i+t+l>o&&(i=this._x=0,a+=this._rowHeight+l,this._y=a,this._rowHeight=0),this._x+=t+l,this._rowHeight=Math.max(this._rowHeight,r),a+r+l>s)return null;e.x+=this.offsetX*this.dpr+i,e.y+=this.offsetY*this.dpr+a,this._zr.add(e);var u=[this.offsetX/this.width,this.offsetY/this.height],c=[[i/o+u[0],a/s+u[1]],[(i+t)/o+u[0],(a+r)/s+u[1]]];return c},_fitElement:function(e,t,r){var n=e.getBoundingRect(),i=t/n.width,a=r/n.height;e.x=-n.x*i,e.y=-n.y*a,e.scaleX=i,e.scaleY=a,e.update()}};function Jn(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new le({image:t,flipY:!1});var r=this;this._zr=Zu(t);var n=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){n.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new Qn(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}Jn.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,r=t.length,n=r*this._nodeWidth%e,i=Math.floor(r*this._nodeWidth/e)*this._nodeHeight;if(!(i>=e)){var a=(n+this._nodeWidth)*this._dpr,o=(i+this._nodeHeight)*this._dpr;try{this._zr.resize({width:a,height:o})}catch{this._canvas.width=a,this._canvas.height=o}var s=new Qn(this._zr,n,i,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(s),s}},add:function(e,t,r){if(this._coords[e.id])return this._coords[e.id];var n=this._getCurrentNode().add(e,t,r);if(!n){var i=this._expand();if(!i)return;n=i.add(e,t,r)}return this._coords[e.id]=n,n},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};var ms=[0,1,2,0,2,3],wl=me.extend(function(){return{attributes:{position:new me.Attribute("position","float",3,"POSITION"),texcoord:new me.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new me.Attribute("offset","float",2),color:new me.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,r=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==r&&(this.indices=t>65535?new Uint32Array(r*3):new Uint16Array(r*3))},setSpriteAlign:function(e,t,r,n,i){r==null&&(r="left"),n==null&&(n="top");var a,o,s,l;switch(i=i||0,r){case"left":a=i,s=t[0]+i;break;case"center":case"middle":a=-t[0]/2,s=t[0]/2;break;case"right":a=-t[0]-i,s=-i;break}switch(n){case"bottom":o=i,l=t[1]+i;break;case"middle":o=-t[1]/2,l=t[1]/2;break;case"top":o=-t[1]-i,l=-i;break}var u=e*4,c=this.attributes.offset;c.set(u,[a,l]),c.set(u+1,[s,l]),c.set(u+2,[s,o]),c.set(u+3,[a,o])},addSprite:function(e,t,r,n,i,a){var o=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,r,n,i,a);for(var s=0;s<ms.length;s++)this.indices[this._faceOffset*3+s]=ms[s]+o;return this._faceOffset+=2,this._vertexOffset+=4,o/4},setSprite:function(e,t,r,n,i,a,o){for(var s=e*4,l=this.attributes,u=0;u<4;u++)l.position.set(s+u,t);var c=l.texcoord;c.set(s,[n[0][0],n[0][1]]),c.set(s+1,[n[1][0],n[0][1]]),c.set(s+2,[n[1][0],n[1][1]]),c.set(s+3,[n[0][0],n[1][1]]),this.setSpriteAlign(e,r,i,a,o)}});Ge(wl.prototype,ui);const Mv=wl,Pv=`@export ecgl.labels.vertex

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

@end`;k.Shader.import(Pv);const Va=k.Mesh.extend(function(){var e=new Mv({dynamic:!0}),t=new k.Material({shader:k.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}});var Cl=1,Rl=2;function ur(e,t,r){this._labelsMesh=new Va,this._labelTextureSurface=new Jn({width:512,height:512,devicePixelRatio:r.getDevicePixelRatio(),onupdate:function(){r.getZr().refresh()}}),this._api=r,this._labelsMesh.material.set("textureAtlas",this._labelTextureSurface.getTexture())}ur.prototype.getLabelPosition=function(e,t,r){return[0,0,0]};ur.prototype.getLabelDistance=function(e,t,r){return 0};ur.prototype.getMesh=function(){return this._labelsMesh};ur.prototype.updateData=function(e,t,r){t==null&&(t=0),r==null&&(r=e.count()),(!this._labelsVisibilitiesBits||this._labelsVisibilitiesBits.length!==r-t)&&(this._labelsVisibilitiesBits=new Uint8Array(r-t));for(var n=["label","show"],i=["emphasis","label","show"],a=t;a<r;a++){var o=e.getItemModel(a),s=o.get(n),l=o.get(i);l==null&&(l=s);var u=(s?Cl:0)|(l?Rl:0);this._labelsVisibilitiesBits[a-t]=u}this._start=t,this._end=r,this._data=e};ur.prototype.updateLabels=function(e){if(this._data){e=e||[];for(var t=e.length>0,r={},n=0;n<e.length;n++)r[e[n]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var i=["label"],a=["emphasis","label"],o=this._data.hostModel,s=this._data,l=o.getModel(i),u=o.getModel(a,l),c={left:"right",right:"left",top:"center",bottom:"center"},f={left:"middle",right:"middle",top:"bottom",bottom:"top"},d=this._start;d<this._end;d++){var h=!1;t&&r[d]&&(h=!0);var p=this._labelsVisibilitiesBits[d-this._start]&(h?Rl:Cl);if(p){var v=s.getItemModel(d),m=v.getModel(h?a:i,h?u:l),_=m.get("distance")||0,y=m.get("position"),g=this._api.getDevicePixelRatio(),x=o.getFormattedLabel(d,h?"emphasis":"normal");if(x==null||x==="")return;var E=new gt({style:nr(m,{text:x,fill:m.get("color")||tn(s,d)||"#000",align:"left",verticalAlign:"top",opacity:Ye.firstNotNull(m.get("opacity"),Bn(s,d),1)})}),T=E.getBoundingRect(),S=1.2;T.height*=S;var A=this._labelTextureSurface.add(E),w=c[y]||"center",D=f[y]||"bottom";this._labelsMesh.geometry.addSprite(this.getLabelPosition(d,y,_),[T.width*g,T.height*g],A,w,D,this.getLabelDistance(d,y,_)*g)}}this._labelsMesh.material.set("uvScale",this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}};ur.prototype.dispose=function(){this._labelTextureSurface.dispose()};var Nv=zt.vec3;const Iv=Rn.extend({type:"bar3D",__ecgl__:!0,init:function(e,t){this.groupGL=new k.Node,this._api=t,this._labelsBuilder=new ur(256,256,t);var r=this;this._labelsBuilder.getLabelPosition=function(n,i,a){if(r._data){var o=r._data.getItemLayout(n),s=o[0],l=o[1],u=o[2][1];return Nv.scaleAndAdd([],s,l,a+u)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(e,t,r){var n=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=n,this._barMesh||(this._barMesh=new k.Mesh({geometry:new Lv,shadowDepthMaterial:new k.Material({shader:new k.Shader(k.Shader.source("ecgl.sm.depth.vertex"),k.Shader.source("ecgl.sm.depth.fragment"))}),culling:e.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var i=e.coordinateSystem;if(this._doRender(e,r),i&&i.viewGL){i.viewGL.add(this.groupGL);var a=i.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[a]("fragment","SRGB_DECODE")}this._data=e.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(e)},_updateAnimation:function(e){k.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,e)},_doRender:function(e,t){var r=e.getData(),n=e.get("shading"),i=n!=="color",a=this,o=this._barMesh,s="ecgl."+n;(!o.material||o.material.shader.name!==s)&&(o.material=k.createMaterial(s,["VERTEX_COLOR"])),k.setMaterialFromModel(n,o.material,e,t),o.geometry.enableNormal=i,o.geometry.resetOffset();var l=e.get("bevelSize"),u=e.get("bevelSmoothness");o.geometry.bevelSegments=u,o.geometry.bevelSize=l;var c=[],f=new Float32Array(r.count()*4),d=0,m=0,h=!1;r.each(function(y){if(r.hasValue(y)){var g=tn(r,y),x=Bn(r,y);x==null&&(x=1),k.parseColor(g,c),c[3]*=x,f[d++]=c[0],f[d++]=c[1],f[d++]=c[2],f[d++]=c[3],c[3]>0&&(m++,c[3]<.99&&(h=!0))}}),o.geometry.setBarCount(m);var p=r.getLayout("orient"),v=this._barIndexOfData=new Int32Array(r.count()),m=0;r.each(function(y){if(!r.hasValue(y)){v[y]=-1;return}var g=r.getItemLayout(y),x=g[0],E=g[1],T=g[2],S=y*4;c[0]=f[S++],c[1]=f[S++],c[2]=f[S++],c[3]=f[S++],c[3]>0&&(a._barMesh.geometry.addBar(x,E,p,T,c,y),v[y]=m++)}),o.geometry.dirty(),o.geometry.updateBoundingBox();var _=o.material;_.transparent=h,_.depthMask=!h,o.geometry.sortTriangles=h,this._initHandler(e,t)},_initHandler:function(e,t){var r=e.getData(),n=this._barMesh,i=e.coordinateSystem.type==="cartesian3D";n.seriesIndex=e.seriesIndex;var a=-1;n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(o){var s=n.geometry.getDataIndexOfVertex(o.triangle[0]);s!==a&&(this._downplay(a),this._highlight(s),this._labelsBuilder.updateLabels([s]),i&&t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",s),r.get("y",s),r.get("z",s,!0)]})),a=s,n.dataIndex=s},this),n.on("mouseout",function(o){this._downplay(a),this._labelsBuilder.updateLabels(),a=-1,n.dataIndex=-1,i&&t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var n=t.getItemModel(e),i=n.getModel("emphasis.itemStyle"),a=i.get("color"),o=i.get("opacity");if(a==null){var s=tn(t,e);a=Yu(s,-.4)}o==null&&(o=Bn(t,e));var l=k.parseColor(a);l[3]*=o,this._barMesh.geometry.setColor(r,l),this._api.getZr().refresh()}}},_downplay:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var n=tn(t,e),i=Bn(t,e),a=k.parseColor(n);a[3]*=i,this._barMesh.geometry.setColor(r,a),this._api.getZr().refresh()}}},highlight:function(e,t,r,n){this._toggleStatus("highlight",e,t,r,n)},downplay:function(e,t,r,n){this._toggleStatus("downplay",e,t,r,n)},_toggleStatus:function(e,t,r,n,i){var a=t.getData(),o=Ye.queryDataIndex(a,i),s=this;o!=null?he(Sl.normalizeToArray(o),function(l){e==="highlight"?this._highlight(l):this._downplay(l)},this):a.each(function(l){e==="highlight"?s._highlight(l):s._downplay(l)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function Ov(e){e.registerChartView(Iv),e.registerSeriesModel(Cv),Ev(e),e.registerProcessor(function(t,r){t.eachSeriesByType("bar3d",function(n){var i=n.getData();i.filterSelf(function(a){return i.hasValue(a)})})})}var zi=zt.vec3,_s=[[0,0],[1,1]],Dl=me.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new me.Attribute("position","float",3,"POSITION"),positionPrev:new me.Attribute("positionPrev","float",3),positionNext:new me.Attribute("positionNext","float",3),prevPositionPrev:new me.Attribute("prevPositionPrev","float",3),prevPosition:new me.Attribute("prevPosition","float",3),prevPositionNext:new me.Attribute("prevPositionNext","float",3),offset:new me.Attribute("offset","float",1),color:new me.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,n){var i=zi.dist(e,t)+zi.dist(r,t)+zi.dist(n,r),a=1/(i+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,n){var i=this._getCubicCurveApproxStep(e,t,r,n),a=Math.ceil(1/i);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,n){var i=this._getCubicCurveApproxStep(e,t,r,n),a=Math.ceil(1/i);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(_s)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(_s)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,r,n,i,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=e[2],u=t[0],c=t[1],f=t[2],d=r[0],h=r[1],p=r[2],v=n[0],m=n[1],_=n[2],y=this._getCubicCurveApproxStep(e,t,r,n),g=y*y,x=g*y,E=3*y,T=3*g,S=6*g,A=6*x,w=o-u*2+d,D=s-c*2+h,R=l-f*2+p,C=(u-d)*3-o+v,P=(c-h)*3-s+m,L=(f-p)*3-l+_,I=o,O=s,H=l,G=(u-o)*E+w*T+C*x,q=(c-s)*E+D*T+P*x,ae=(f-l)*E+R*T+L*x,te=w*S+C*A,_e=D*S+P*A,oe=R*S+L*A,fe=C*A,Ce=P*A,ue=L*A,xt=0,Je=0,Tt=Math.ceil(1/y),Mt=new Float32Array((Tt+1)*3),Mt=[],cr=0,Je=0;Je<Tt+1;Je++)Mt[cr++]=I,Mt[cr++]=O,Mt[cr++]=H,I+=G,O+=q,H+=ae,G+=te,q+=_e,ae+=oe,te+=fe,_e+=Ce,oe+=ue,xt+=y,xt>1&&(I=G>0?Math.min(I,v):Math.max(I,v),O=q>0?Math.min(O,m):Math.max(O,m),H=ae>0?Math.min(H,_):Math.max(H,_));return this.addPolyline(Mt,i,a)},addLine:function(e,t,r,n){return this.addPolyline([e,t],r,n)},addPolyline:function(e,t,r,n,i){if(e.length){var a=typeof e[0]!="number";if(i==null&&(i=a?e.length:e.length/3),!(i<2)){n==null&&(n=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",o=a?typeof t[0]!="number":t.length/4===i,s=this.attributes.position,l=this.attributes.positionPrev,u=this.attributes.positionNext,c=this.attributes.color,f=this.attributes.offset,d=this.indices,h=this._vertexOffset,p,v;r=Math.max(r,.01);for(var m=n;m<i;m++){if(a)p=e[m],o?v=t[m]:v=t;else{var _=m*3;if(p=p||[],p[0]=e[_],p[1]=e[_+1],p[2]=e[_+2],o){var y=m*4;v=v||[],v[0]=t[y],v[1]=t[y+1],v[2]=t[y+2],v[3]=t[y+3]}else v=t}if(this.useNativeLine?m>1&&(s.copy(h,h-1),c.copy(h,h-1),h++):(m<i-1&&(l.set(h+2,p),l.set(h+3,p)),m>0&&(u.set(h-2,p),u.set(h-1,p)),s.set(h,p),s.set(h+1,p),c.set(h,v),c.set(h+1,v),f.set(h,r/2),f.set(h+1,-r/2),h+=2),this.useNativeLine)c.set(h,v),s.set(h,p),h++;else if(m>0){var g=this._triangleOffset*3,d=this.indices;d[g]=h-4,d[g+1]=h-3,d[g+2]=h-2,d[g+3]=h-3,d[g+4]=h-1,d[g+5]=h-2,this._triangleOffset+=2}}if(!this.useNativeLine){var x=this._vertexOffset,E=this._vertexOffset+i*2;l.copy(x,x+2),l.copy(x+1,x+3),u.copy(E-1,E-3),u.copy(E-2,E-4)}return this._vertexOffset=h,this._vertexOffset}}},setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],n=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,i=r;i<n;i++)this.attributes.color.set(i,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});Ge(Dl.prototype,ui);const ka=Dl,Bv=`@export ecgl.lines3D.vertex

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

@end`,Fv={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},Uv={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Hv={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}};var fa=function(){this._pool={},this._allocatedTextures=[]};fa.prototype={constructor:fa,get:function(e){var t=gs(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];if(!r.length){var n=new le(e);return this._allocatedTextures.push(n),n}return r.pop()},put:function(e){var t=gs(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];r.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var Ll={width:512,height:512,type:M.UNSIGNED_BYTE,format:M.RGBA,wrapS:M.CLAMP_TO_EDGE,wrapT:M.CLAMP_TO_EDGE,minFilter:M.LINEAR_MIPMAP_LINEAR,magFilter:M.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},Vi=Object.keys(Ll);function gs(e){Ue.defaultsWithPropList(e,Ll,Vi),Gv(e);for(var t="",r=0;r<Vi.length;r++){var n=Vi[r],i=e[n].toString();t+=i}return t}function Gv(e){var t=zv(e.width,e.height);e.format===M.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==M.NEAREST_MIPMAP_NEAREST||e.minFilter==M.NEAREST_MIPMAP_LINEAR?e.minFilter=M.NEAREST:(e.minFilter==M.LINEAR_MIPMAP_LINEAR||e.minFilter==M.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=M.LINEAR)),t||(e.wrapS=M.CLAMP_TO_EDGE,e.wrapT=M.CLAMP_TO_EDGE)}function zv(e,t){return(e&e-1)===0&&(t&t-1)===0}const Ml=fa,Vv=`@export clay.sm.depth.vertex
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
@end`;var Bt=["px","nx","py","ny","pz","nz"];F.import(Vv);function ki(e,t,r){if(r==="alphaMap")return e.material.get("diffuseMap");if(r==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var n=e.material.get("alphaCutoff");return n||0}return 0}else return r==="uvRepeat"?e.material.get("uvRepeat"):r==="uvOffset"?e.material.get("uvOffset"):t.get(r)}function ys(e,t){var r=e.material,n=t.material;return r.get("diffuseMap")!==n.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(n.get("alphaCutoff")||0)}var pt=Qe.extend(function(){return{softShadow:pt.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new Ve,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new Ml}},function(){this._gaussianPassH=new qe({fragment:F.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new qe({fragment:F.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new qe({fragment:F.source("clay.sm.debug_depth")})},{render:function(e,t,r,n){r||(r=t.getMainCamera()),this.trigger("beforerender",this,e,t,r),this._renderShadowPass(e,t,r,n),this.trigger("afterrender",this,e,t,r)},renderDebug:function(e,t){e.saveClear();var r=e.viewport,n=0,i=0,a=t||r.width/4,o=a;this.softShadow===pt.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var s in this._textures){var l=this._textures[s];e.setViewport(n,i,a*l.width/l.height,o),this._outputDepthPass.setUniform("depthMap",l),this._outputDepthPass.render(e),n+=a*l.width/l.height}e.setViewport(r),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===pt.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?t.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var r=this;t.traverse(function(a){a.isRenderable()&&r._updateReceivers(e,a)});for(var n=0;n<t.lights.length;n++){var i=t.lights[n];i.castShadow&&!i.invisible&&this._lightsCastShadow.push(i)}},_renderShadowPass:function(e,t,r,n){for(var i in this._shadowMapNumber)this._shadowMapNumber[i]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=e.gl;if(n||t.update(),r&&r.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var o=[],s=[],l=[],u=[],c=[],f=[],d,h=0;h<this._lightsCastShadow.length;h++){var p=this._lightsCastShadow[h];if(p.type==="DIRECTIONAL_LIGHT"){if(d){console.warn("Only one direectional light supported with shadow cascade");continue}if(p.shadowCascade>4){console.warn("Support at most 4 cascade");continue}p.shadowCascade>1&&(d=p),this.renderDirectionalLightShadow(e,t,r,p,c,u,l)}else p.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,p,s,o):p.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,p,f);this._shadowMapNumber[p.type]++}for(var v in this._shadowMapNumber)for(var m=this._shadowMapNumber[v],_=v+"_SHADOWMAP_COUNT",h=0;h<this._receivers.length;h++){var y=this._receivers[h],g=y.material;g.fragmentDefines[_]!==m&&(m>0?g.define("fragment",_,m):g.isDefined("fragment",_)&&g.undefine("fragment",_))}for(var h=0;h<this._receivers.length;h++){var y=this._receivers[h],g=y.material;d?g.define("fragment","SHADOW_CASCADE",d.shadowCascade):g.undefine("fragment","SHADOW_CASCADE")}var x=t.shadowUniforms;function E(D){return D.height}if(l.length>0){var T=l.map(E);if(x.directionalLightShadowMaps={value:l,type:"tv"},x.directionalLightMatrices={value:u,type:"m4v"},x.directionalLightShadowMapSizes={value:T,type:"1fv"},d){var S=c.slice(),A=c.slice();S.pop(),A.shift(),S.reverse(),A.reverse(),u.reverse(),x.shadowCascadeClipsNear={value:S,type:"1fv"},x.shadowCascadeClipsFar={value:A,type:"1fv"}}}if(o.length>0){var w=o.map(E),x=t.shadowUniforms;x.spotLightShadowMaps={value:o,type:"tv"},x.spotLightMatrices={value:s,type:"m4v"},x.spotLightShadowMapSizes={value:w,type:"1fv"}}f.length>0&&(x.pointLightShadowMaps={value:f,type:"tv"})},renderDirectionalLightShadow:function(){var e=new Na,t=new V,r=new Xe,n=new V,i=new V,a=new V,o=new V;return function(s,l,u,c,f,d,h){var p=this._getDepthMaterial(c),v={getMaterial:function(oe){return oe.shadowDepthMaterial||p},isMaterialChanged:ys,getUniform:ki,ifRender:function(oe){return oe.castShadow},sortCompare:en.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var m=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(m).applyTransform(u.viewMatrix)}var _=Math.min(-l.viewBoundingBoxLastFrame.min.z,u.far),y=Math.max(-l.viewBoundingBoxLastFrame.max.z,u.near),g=this._getDirectionalLightCamera(c,l,u),x=a.array;o.copy(g.projectionMatrix),N.invert(i.array,g.worldTransform.array),N.multiply(i.array,i.array,u.worldTransform.array),N.multiply(x,o.array,i.array);for(var E=[],T=u instanceof Ie,S=(u.near+u.far)/(u.near-u.far),A=2*u.near*u.far/(u.near-u.far),w=0;w<=c.shadowCascade;w++){var D=y*Math.pow(_/y,w/c.shadowCascade),R=y+(_-y)*w/c.shadowCascade,C=D*c.cascadeSplitLogFactor+R*(1-c.cascadeSplitLogFactor);E.push(C),f.push(-(-C*S+A)/-C)}var P=this._getTexture(c,c.shadowCascade);h.push(P);var L=s.viewport,I=s.gl;this._frameBuffer.attach(P),this._frameBuffer.bind(s),I.clear(I.COLOR_BUFFER_BIT|I.DEPTH_BUFFER_BIT);for(var w=0;w<c.shadowCascade;w++){var O=E[w],H=E[w+1];T?N.perspective(t.array,u.fov/180*Math.PI,u.aspect,O,H):N.ortho(t.array,u.left,u.right,u.bottom,u.top,O,H),e.setFromProjection(t),e.getTransformedBoundingBox(r,i),r.applyProjection(o);var G=r.min.array,q=r.max.array;G[0]=Math.max(G[0],-1),G[1]=Math.max(G[1],-1),q[0]=Math.min(q[0],1),q[1]=Math.min(q[1],1),n.ortho(G[0],q[0],G[1],q[1],1,-1),g.projectionMatrix.multiplyLeft(n);var ae=c.shadowResolution||512;s.setViewport((c.shadowCascade-w-1)*ae,0,ae,ae,1);var te=l.updateRenderList(g);s.renderPass(te.opaque,g,v),this.softShadow===pt.VSM&&this._gaussianFilter(s,P,P.width);var _e=new V;_e.copy(g.viewMatrix).multiplyLeft(g.projectionMatrix),d.push(_e.array),g.projectionMatrix.copy(o)}this._frameBuffer.unbind(s),s.setViewport(L)}}(),renderSpotLightShadow:function(e,t,r,n,i){var a=this._getTexture(r),o=this._getSpotLightCamera(r),s=e.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(e),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),u={getMaterial:function(d){return d.shadowDepthMaterial||l},isMaterialChanged:ys,getUniform:ki,ifRender:function(d){return d.castShadow},sortCompare:en.opaqueSortCompare},c=t.updateRenderList(o);e.renderPass(c.opaque,o,u),this._frameBuffer.unbind(e),this.softShadow===pt.VSM&&this._gaussianFilter(e,a,a.width);var f=new V;f.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix),i.push(a),n.push(f.array)},renderPointLightShadow:function(e,t,r,n){var i=this._getTexture(r),a=e.gl;n.push(i);var o=this._getDepthMaterial(r),s={getMaterial:function(y){return y.shadowDepthMaterial||o},getUniform:ki,sortCompare:en.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},u=new Xe,c=r.getWorldPosition().array,f=new Xe,d=r.range;f.min.setArray(c),f.max.setArray(c);var h=new B(d,d,d);f.max.add(h),f.min.sub(h);var p={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(y){if(y.isRenderable()&&y.castShadow){var g=y.geometry;if(!g.boundingBox){for(var x=0;x<Bt.length;x++)l[Bt[x]].push(y);return}if(u.transformFrom(g.boundingBox,y.worldTransform),!u.intersectBoundingBox(f))return;u.updateVertices();for(var x=0;x<Bt.length;x++)p[Bt[x]]=!1;for(var x=0;x<8;x++){var E=u.vertices[x],T=E[0]-c[0],S=E[1]-c[1],A=E[2]-c[2],w=Math.abs(T),D=Math.abs(S),R=Math.abs(A);w>D?w>R?p[T>0?"px":"nx"]=!0:p[A>0?"pz":"nz"]=!0:D>R?p[S>0?"py":"ny"]=!0:p[A>0?"pz":"nz"]=!0}for(var x=0;x<Bt.length;x++)p[Bt[x]]&&l[Bt[x]].push(y)}});for(var v=0;v<6;v++){var m=Bt[v],_=this._getPointLightCamera(r,m);this._frameBuffer.attach(i,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+v),this._frameBuffer.bind(e),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),e.renderPass(l[m],_,s)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],r=e.type==="POINT_LIGHT";if(!t){var n=r?"clay.sm.distance.":"clay.sm.depth.";t=new Rt({precision:this.precision,shader:new F(F.source(n+"vertex"),F.source(n+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===pt.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),r&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,r){var n={width:r,height:r,type:Y.FLOAT},i=this._texturePool.get(n);this._frameBuffer.attach(i),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",i),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(i)},_getTexture:function(e,t){var r=e.__uid__,n=this._textures[r],i=e.shadowResolution||512;return t=t||1,n||(e.type==="POINT_LIGHT"?n=new on:n=new le,n.width=i*t,n.height=i,this.softShadow===pt.VSM?(n.type=Y.FLOAT,n.anisotropic=4):(n.minFilter=M.NEAREST,n.magFilter=M.NEAREST,n.useMipmap=!1),this._textures[r]=n),n},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new Ie,nx:new Ie,py:new Ie,ny:new Ie,pz:new Ie,nz:new Ie});var r=this._lightCameras.point[t];switch(r.far=e.range,r.fov=90,r.position.set(0,0,0),t){case"px":r.lookAt(B.POSITIVE_X,B.NEGATIVE_Y);break;case"nx":r.lookAt(B.NEGATIVE_X,B.NEGATIVE_Y);break;case"py":r.lookAt(B.POSITIVE_Y,B.POSITIVE_Z);break;case"ny":r.lookAt(B.NEGATIVE_Y,B.NEGATIVE_Z);break;case"pz":r.lookAt(B.POSITIVE_Z,B.NEGATIVE_Y);break;case"nz":r.lookAt(B.NEGATIVE_Z,B.NEGATIVE_Y);break}return e.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var e=new V,t=new Xe,r=new Xe;return function(n,i,a){this._lightCameras.directional||(this._lightCameras.directional=new ln);var o=this._lightCameras.directional;t.copy(i.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),o.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),o.rotation.copy(n.rotation),o.scale.copy(n.scale),o.updateWorldTransform(),V.invert(e,o.worldTransform),V.multiply(e,e,a.worldTransform),r.copy(t).applyTransform(e);var s=r.min.array,l=r.max.array;return o.position.set((s[0]+l[0])/2,(s[1]+l[1])/2,l[2]).transformMat4(o.worldTransform),o.near=0,o.far=-s[2]+l[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=s[0],o.right=l[0],o.top=l[1],o.bottom=s[1],o.update(!0),o}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new Ie);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),N.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var r in this._textures)this._textures[r].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var n=0;n<this._receivers.length;n++){var i=this._receivers[n];if(i.material){var a=i.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});pt.VSM=1;pt.PCF=2;const kv=pt;var Wv=Qe.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var r=this.outputs[e],n=r.parameters,i=r._parametersCopy;if(i||(i=r._parametersCopy={}),n)for(var a in n)a!=="width"&&a!=="height"&&(i[a]=n[a]);var o,s;return n.width instanceof Function?o=n.width.call(this,t):o=n.width,n.height instanceof Function?s=n.height.call(this,t):s=n.height,(i.width!==o||i.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),i.width=o,i.height=s,i},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var r=this.outputs[t];if(r)return this._rendered?r.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,r){this.inputLinks[e]={node:t,pin:r},t.outputLinks[r]||(t.outputLinks[r]=[]),t.outputLinks[r].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var r=this.inputLinks[t];r.node.updateReference(r.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}});const un=Wv;var Xv=Qe.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(t.inputs){for(var r in t.inputs)if(t.inputs[r]){if(t.pass&&!t.pass.material.isUniformEnabled(r)){console.warn("Pin "+t.name+"."+r+" not used.");continue}var n=t.inputs[r],i=this.findPin(n);i?t.link(r,i.node,i.pin):console.warn(typeof n=="string"?"Node "+n+" not exist":"Pin of "+n.node+"."+n.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof un)&&(e={node:e}),typeof e.node=="string")for(var r=0;r<this.nodes.length;r++){var n=this.nodes[r];n.name===e.node&&(t=n)}else t=e.node;if(t){var i=e.pin;if(i||t.outputs&&(i=Object.keys(t.outputs)[0]),t.outputs[i])return{node:t,pin:i}}}});const xs=Xv;var qv=xs.extend(function(){return{_outputs:[],_texturePool:new Ml,_frameBuffer:new Ve({depthBuffer:!1})}},{addNode:function(e){xs.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(var r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(var r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(var r=0;r<this._outputs.length;r++)this._outputs[r].render(e,t);for(var r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}});const jv=qv;var Zv=un.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new Ve},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var r;if(!this.outputs)r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var n=this.frameBuffer;for(var i in this.outputs){var a=this.updateParameter(i,e),o=this.outputs[i],s=this._compositor.allocateTexture(a);this._outputTextures[i]=s;var l=o.attachment||t.COLOR_ATTACHMENT0;typeof l=="string"&&(l=t[l]),n.attach(s,l)}n.bind(e);var u=e.getGLExtension("EXT_draw_buffers");if(u){var c=[];for(var l in this.outputs)l=parseInt(l),l>=t.COLOR_ATTACHMENT0&&l<=t.COLOR_ATTACHMENT0+8&&c.push(l);u.drawBuffersEXT(c)}e.saveClear(),e.clearBit=M.DEPTH_BUFFER_BIT|M.COLOR_BUFFER_BIT,r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),n.unbind(e)}this.trigger("afterrender",r),this._rendering=!1,this._rendered=!0}});const Yv=Zv;var Kv=un.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}});const $v=Kv;var Qv=un.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new qe({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var r=e.gl;for(var n in this.inputLinks){var i=this.inputLinks[n],a=i.node.getOutput(e,i.pin);this.pass.setUniform(n,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var o={};for(var s in this.outputs){var l=this.updateParameter(s,e);isNaN(l.width)&&this.updateParameter(s,e);var u=this.outputs[s],c=this._compositor.allocateTexture(l);this._outputTextures[s]=c;var f=u.attachment||r.COLOR_ATTACHMENT0;typeof f=="string"&&(f=r[f]),o[f]=c}this._compositor.getFrameBuffer().bind(e);for(var f in o)this._compositor.getFrameBuffer().attach(o[f],f);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var n in this.inputLinks){var i=this.inputLinks[n];i.node.removeReference(i.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var r=this.outputs[e],n=r.parameters,i=r._parametersCopy;if(i||(i=r._parametersCopy={}),n)for(var a in n)a!=="width"&&a!=="height"&&(i[a]=n[a]);var o,s;return typeof n.width=="function"?o=n.width.call(this,t):o=n.width,typeof n.height=="function"?s=n.height.call(this,t):s=n.height,o=Math.ceil(o),s=Math.ceil(s),(i.width!==o||i.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),i.width=o,i.height=s,i},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){un.prototype.clear.call(this),this.pass.material.disableTexturesAll()}});const Jv=Qv,ep=`@export clay.compositor.coloradjust
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
@end`,Pl=`@export clay.compositor.kernel.gaussian_9
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
`,tp=`@export clay.compositor.hdr.log_lum
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
@end`,Nl=`
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
@end`,rp=`@export clay.compositor.vignette
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
@end`,Il=`@export clay.compositor.output
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
@end`,Ol=`@export clay.compositor.bright
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
`,Bl=`@export clay.compositor.downsample
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
@end`,Fl=`
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
@end`,Ul=`@export clay.compositor.hdr.composite
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
@end`,np=`@export clay.compositor.lensflare
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
@end`,Hl=`@export clay.compositor.blend
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
@end`,Gl=`@export clay.compositor.fxaa
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
@end`;function ip(e){e.import(ep),e.import(Pl),e.import(tp),e.import(Nl),e.import(rp),e.import(Il),e.import(Ol),e.import(Bl),e.import(Fl),e.import(Ul),e.import(np),e.import(Hl),e.import(Gl)}ip(F);var ap=/^#source\((.*?)\)/;function op(e,t){var r=new jv;t=t||{};var n={textures:{},parameters:{}},i=function(s,l){for(var u=0;u<e.nodes.length;u++){var c=e.nodes[u],f=sp(c,n,t);f&&r.addNode(f)}};for(var a in e.parameters){var o=e.parameters[a];n.parameters[a]=Wa(o)}return cp(e,n,t,function(s){n.textures=s,i()}),r}function sp(e,t,r){var n=e.type||"filter",i,a,o;if(n==="filter"){var s=e.shader.trim(),l=ap.exec(s);if(l?i=F.source(l[1].trim()):s.charAt(0)==="#"&&(i=t.shaders[s.substr(1)]),i||(i=s),!i)return}if(e.inputs){a={};for(var u in e.inputs)typeof e.inputs[u]=="string"?a[u]=e.inputs[u]:a[u]={node:e.inputs[u].node,pin:e.inputs[u].pin}}if(e.outputs){o={};for(var u in e.outputs){var c=e.outputs[u];o[u]={},c.attachment!=null&&(o[u].attachment=c.attachment),c.keepLastFrame!=null&&(o[u].keepLastFrame=c.keepLastFrame),c.outputLastFrame!=null&&(o[u].outputLastFrame=c.outputLastFrame),c.parameters&&(o[u].parameters=Wa(c.parameters))}}var f;if(n==="scene"?f=new Yv({name:e.name,scene:r.scene,camera:r.camera,outputs:o}):n==="texture"?f=new $v({name:e.name,outputs:o}):f=new Jv({name:e.name,shader:i,inputs:a,outputs:o}),f){if(e.parameters)for(var u in e.parameters){var d=e.parameters[u];typeof d=="string"?(d=d.trim(),d.charAt(0)==="#"?d=t.textures[d.substr(1)]:f.on("beforerender",fp(u,zl(d)))):typeof d=="function"&&f.on("beforerender",d),f.setParameter(u,d)}if(e.defines&&f.pass)for(var u in e.defines){var d=e.defines[u];f.pass.material.define("fragment",u,d)}}return f}function lp(e,t){return e}function up(e,t){return t}function Wa(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(n){var i=e[n];i!=null&&(typeof i=="string"&&(i=Y[i]),t[n]=i)});var r=e.scale||1;return["width","height"].forEach(function(n){if(e[n]!=null){var i=e[n];typeof i=="string"?(i=i.trim(),t[n]=hp(n,zl(i),r)):t[n]=i}}),t.width||(t.width=lp),t.height||(t.height=up),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function cp(e,t,r,n){if(!e.textures){n({});return}var i={},a=0,o=!1,s=r.textureRootPath;Ue.each(e.textures,function(l,u){var c,f=l.path,d=Wa(l.parameters);if(Array.isArray(f)&&f.length===6)s&&(f=f.map(function(h){return Ue.relative2absolute(h,s)})),c=new on(d);else if(typeof f=="string")s&&(f=Ue.relative2absolute(f,s)),c=new le(d);else return;c.load(f),a++,c.once("success",function(){i[u]=c,a--,a===0&&(n(i),o=!0)})}),a===0&&!o&&n(i)}function fp(e,t){return function(r){var n=r.getDevicePixelRatio(),i=r.getWidth(),a=r.getHeight(),o=t(i,a,n);this.setParameter(e,o)}}function hp(e,t,r){return r=r||1,function(n){var i=n.getDevicePixelRatio(),a=n.getWidth()*r,o=n.getHeight()*r;return t(a,o,i)}}function zl(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var r=new Function("width","height","dpr","return "+t[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function Nr(e,t){for(var r=0,n=1/t,i=e;i>0;)r=r+n*(i%t),i=Math.floor(i/t),n=n/t;return r}const dp=`@export ecgl.ssao.estimate

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
`;F.import(dp);function Vl(e){for(var t=new Uint8Array(e*e*4),r=0,n=new B,i=0;i<e;i++)for(var a=0;a<e;a++)n.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(n.x*.5+.5)*255,t[r++]=(n.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function Ts(e){return new le({pixels:Vl(e),wrapS:Y.REPEAT,wrapT:Y.REPEAT,width:e,height:e})}function vp(e,t,r){var n=new Float32Array(e*3);t=t||0;for(var i=0;i<e;i++){var a=Nr(i+t,2)*(r?1:2)*Math.PI,o=Nr(i+t,3)*Math.PI,s=Math.random(),l=Math.cos(a)*Math.sin(o)*s,u=Math.cos(o)*s,c=Math.sin(a)*Math.sin(o)*s;n[i*3]=l,n[i*3+1]=u,n[i*3+2]=c}return n}function Dt(e){e=e||{},this._ssaoPass=new qe({fragment:F.source("ecgl.ssao.estimate")}),this._blurPass=new qe({fragment:F.source("ecgl.ssao.blur")}),this._framebuffer=new Ve({depthBuffer:!1}),this._ssaoTexture=new le,this._blurTexture=new le,this._blurTexture2=new le,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}Dt.prototype.setDepthTexture=function(e){this._depthTex=e};Dt.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};Dt.prototype.update=function(e,t,r){var n=e.getWidth(),i=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new V;V.transpose(s,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,u=this._blurTexture,c=this._blurTexture2;l.width=n/2,l.height=i/2,u.width=n,u.height=i,c.width=n,c.height=i,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform("textureSize",[n/2,i/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(u),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(e),this._framebuffer.attach(c),o.setUniform("textureSize",[n,i]),o.setUniform("direction",1),o.setUniform("ssaoTexture",u),o.render(e),this._framebuffer.unbind(e);var f=e.clearColor;e.gl.clearColor(f[0],f[1],f[2],f[3])};Dt.prototype.getTargetTexture=function(){return this._blurTexture2};Dt.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};Dt.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=vp(e,t*e,!!this._normalTex)};Dt.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=Vl(e),t.width=t.height=e,t.dirty()):(t=Ts(e),this._ssaoPass.setUniform("noiseTex",Ts(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};Dt.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};const pp=`@export ecgl.ssr.main

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

@end`;F.import(pp);function Lt(e){e=e||{},this._ssrPass=new qe({fragment:F.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new qe({fragment:F.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new qe({fragment:F.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new qe({fragment:F.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new le({type:Y.HALF_FLOAT}),this._texture2=new le({type:Y.HALF_FLOAT}),this._texture3=new le({type:Y.HALF_FLOAT}),this._prevTexture=new le({type:Y.HALF_FLOAT}),this._currentTexture=new le({type:Y.HALF_FLOAT}),this._frameBuffer=new Ve({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}Lt.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")};Lt.prototype.update=function(e,t,r,n){var i=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=i/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=l.width=i,s.height=l.height=a;var u=this._frameBuffer,c=this._ssrPass,f=this._blurPass1,d=this._blurPass2,h=this._blendPass,p=new V,v=new V;V.transpose(p,t.worldTransform),V.transpose(v,t.viewMatrix),c.setUniform("sourceTexture",r),c.setUniform("projection",t.projectionMatrix.array),c.setUniform("projectionInv",t.invProjectionMatrix.array),c.setUniform("toViewSpace",p.array),c.setUniform("toWorldSpace",v.array),c.setUniform("nearZ",t.near);var m=n/this._totalSamples*this._samplePerFrame;if(c.setUniform("jitterOffset",m),c.setUniform("sampleOffset",n*this._samplePerFrame),f.setUniform("textureSize",[o.width,o.height]),d.setUniform("textureSize",[i,a]),d.setUniform("sourceTexture",r),f.setUniform("projection",t.projectionMatrix.array),d.setUniform("projection",t.projectionMatrix.array),u.attach(o),u.bind(e),c.render(e),this._physicallyCorrect&&(u.attach(this._currentTexture),h.setUniform("texture1",this._prevTexture),h.setUniform("texture2",o),h.material.set({weight1:n>=1?.95:0,weight2:n>=1?.05:1}),h.render(e)),u.attach(s),f.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),f.render(e),u.attach(l),d.setUniform("texture",s),d.render(e),u.unbind(e),this._physicallyCorrect){var _=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=_}};Lt.prototype.getTargetTexture=function(){return this._texture3};Lt.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};Lt.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=On.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};Lt.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};Lt.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};Lt.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};const Es=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],mp=`@export ecgl.normal.vertex

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
@end`;F.import(mp);function Wi(e,t,r,n,i){var a=e.gl;t.setUniform(a,"1i",r,i),a.activeTexture(a.TEXTURE0+i),n.isRenderable()?n.bind(e):n.unbind(e)}function _p(e,t,r,n,i){var a,o,s,l,u=e.gl;return function(c,f,d){if(!(l&&l.material===c.material)){var h=c.material,p=c.__program,v=h.get("roughness");v==null&&(v=1);var m=h.get("normalMap")||t,_=h.get("roughnessMap"),y=h.get("bumpMap"),g=h.get("uvRepeat"),x=h.get("uvOffset"),E=h.get("detailUvRepeat"),T=h.get("detailUvOffset"),S=!!y&&h.isTextureEnabled("bumpMap"),A=!!_&&h.isTextureEnabled("roughnessMap"),w=h.isDefined("fragment","DOUBLE_SIDED");y=y||r,_=_||n,d!==f?(f.set("normalMap",m),f.set("bumpMap",y),f.set("roughnessMap",_),f.set("useBumpMap",S),f.set("useRoughnessMap",A),f.set("doubleSide",w),g!=null&&f.set("uvRepeat",g),x!=null&&f.set("uvOffset",x),E!=null&&f.set("detailUvRepeat",E),T!=null&&f.set("detailUvOffset",T),f.set("roughness",v)):(p.setUniform(u,"1f","roughness",v),a!==m&&Wi(e,p,"normalMap",m,0),o!==y&&y&&Wi(e,p,"bumpMap",y,1),s!==_&&_&&Wi(e,p,"roughnessMap",_,2),g!=null&&p.setUniform(u,"2f","uvRepeat",g),x!=null&&p.setUniform(u,"2f","uvOffset",x),E!=null&&p.setUniform(u,"2f","detailUvRepeat",E),T!=null&&p.setUniform(u,"2f","detailUvOffset",T),p.setUniform(u,"1i","useBumpMap",+S),p.setUniform(u,"1i","useRoughnessMap",+A),p.setUniform(u,"1i","doubleSide",+w)),a=m,o=y,s=_,l=c}}}function Ur(e){this._depthTex=new le({format:Y.DEPTH_COMPONENT,type:Y.UNSIGNED_INT}),this._normalTex=new le({type:Y.HALF_FLOAT}),this._framebuffer=new Ve,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,Ve.DEPTH_ATTACHMENT),this._normalMaterial=new Rt({shader:new F(F.source("ecgl.normal.vertex"),F.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=tr.createBlank("#000"),this._defaultBumpMap=tr.createBlank("#000"),this._defaultRoughessMap=tr.createBlank("#000"),this._debugPass=new qe({fragment:F.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}Ur.prototype.getDepthTexture=function(){return this._depthTex};Ur.prototype.getNormalTexture=function(){return this._normalTex};Ur.prototype.update=function(e,t,r){var n=e.getWidth(),i=e.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=n,a.height=i,o.width=n,o.height=i;var l=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,r,{getMaterial:function(){return s},ifRender:function(u){return u.renderNormal},beforeRender:_p(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};Ur.prototype.renderDebug=function(e){this._debugPass.render(e)};Ur.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function hn(e){e=e||{},this._edgePass=new qe({fragment:F.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new le({type:Y.HALF_FLOAT}),this._frameBuffer=new Ve,this._frameBuffer.attach(this._targetTexture)}hn.prototype.update=function(e,t,r,n){var i=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=i,o.height=a;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[i,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),s.unbind(e)};hn.prototype.getTargetTexture=function(){return this._targetTexture};hn.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};hn.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};const gp={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},yp=`@export ecgl.dof.coc

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

@end`,xp=`@export ecgl.edge

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
@end`;F.import(Pl);F.import(Nl);F.import(Il);F.import(Ol);F.import(Bl);F.import(Fl);F.import(Ul);F.import(Hl);F.import(Gl);F.import(yp);F.import(xp);function kl(e,t){return{color:{parameters:{width:e,height:t}}}}var Xa=["composite","FXAA"];function J(){this._width,this._height,this._dpr,this._sourceTexture=new le({type:Y.HALF_FLOAT}),this._depthTexture=new le({format:Y.DEPTH_COMPONENT,type:Y.UNSIGNED_INT}),this._framebuffer=new Ve,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,Ve.DEPTH_ATTACHMENT),this._normalPass=new Ur,this._compositor=op(gp);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(n){return this._compositor.getNodeByName(n)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=Xa.map(function(n){return this._compositor.getNodeByName(n)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new Dt(r),this._ssrPass=new Lt(r),this._edgePass=new hn(r)}J.prototype.resize=function(n,i,r){r=r||1;var n=n*r,i=i*r,a=this._sourceTexture,o=this._depthTexture;a.width=n,a.height=i,o.width=n,o.height=i;var s={getWidth:function(){return n},getHeight:function(){return i},getDevicePixelRatio:function(){return r}};function l(u,c){if(typeof u[c]=="function"){var f=u[c].__original||u[c];u[c]=function(d){return f.call(this,s)},u[c].__original=f}}this._compositor.nodes.forEach(function(u){for(var c in u.outputs){var f=u.outputs[c].parameters;f&&(l(f,"width"),l(f,"height"))}for(var d in u.parameters)l(u.parameters,d)}),this._width=n,this._height=i,this._dpr=r};J.prototype.getWidth=function(){return this._width};J.prototype.getHeight=function(){return this._height};J.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};J.prototype._getPrevNode=function(e){for(var t=Xa.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r};J.prototype._getNextNode=function(e){for(var t=Xa.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r};J.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(e.inputs.texture=t.name,r?(e.outputs=kl(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};J.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(r?(t.outputs=kl(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};J.prototype.updateNormal=function(e,t,r,n){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)};J.prototype.updateSSAO=function(e,t,r,n){this._ssaoPass.update(e,r,n)};J.prototype.enableSSAO=function(){this._enableSSAO=!0};J.prototype.disableSSAO=function(){this._enableSSAO=!1};J.prototype.enableSSR=function(){this._enableSSR=!0};J.prototype.disableSSR=function(){this._enableSSR=!1};J.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};J.prototype.getSourceFrameBuffer=function(){return this._framebuffer};J.prototype.getSourceTexture=function(){return this._sourceTexture};J.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};J.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};J.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};J.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};J.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};J.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};J.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};J.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};J.prototype.enableEdge=function(){this._enableEdge=!0};J.prototype.disableEdge=function(){this._enableEdge=!1};J.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};J.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};J.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var n={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=n;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",n);this._dofBlurKernel=new Float32Array(n*2);break}};J.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,n={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",n);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};J.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};J.prototype.setEdgeColor=function(e){var t=k.parseColor(e);this._edgePass.setParameter("edgeColor",t)};J.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};J.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:k.Texture.NEAREST,magFilter:k.Texture.NEAREST,flipY:!1})};J.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};J.prototype.isSSREnabled=function(){return this._enableSSR};J.prototype.composite=function(e,t,r,n,i){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,r,a,i),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,a,i),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,u=Math.floor(Es.length/2/l),c=i%u,f=0;f<l*2;f++)s[f]=Es[f+c*l*2];for(var f=0;f<this._dofBlurNodes.length;f++)this._dofBlurNodes[f].setParameter("percent",i/30),this._dofBlurNodes[f].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,n)};J.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function ha(e){for(var t=[],r=0;r<30;r++)t.push([Nr(r,2),Nr(r,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new le,this._sourceFb=new Ve,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new le,this._outputTex=new le;var n=this._blendPass=new qe({fragment:F.source("clay.compositor.blend")});n.material.disableTexturesAll(),n.material.enableTexture(["texture1","texture2"]),this._blendFb=new Ve({depthBuffer:!1}),this._outputPass=new qe({fragment:F.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(i){i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD),i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA)}}ha.prototype={constructor:ha,jitterProjection:function(e,t){var r=e.viewport,n=r.devicePixelRatio||e.getDevicePixelRatio(),i=r.width*n,a=r.height*n,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new V;s.array[12]=(o[0]*2-1)/i,s.array[13]=(o[1]*2-1)/a,V.mul(t.projectionMatrix,s,t.projectionMatrix),V.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,r){var n=this._blendPass;this._frame===0?(n.setUniform("weight1",0),n.setUniform("weight2",1)):(n.setUniform("weight1",.9),n.setUniform("weight2",.1)),n.setUniform("texture1",this._prevFrameTex),n.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),n.render(e),this._blendFb.unbind(e),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var i=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=i,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function Ee(e){e=e||"perspective",this.layer=null,this.scene=new Gt,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new J,this._temporalSS=new ha,this._shadowMapPass=new kv;for(var t=[],r=0,n=0;n<30;n++){for(var i=[],a=0;a<6;a++)i.push(Nr(r,2)*4-2),i.push(Nr(r,3)*4-2),r++;t.push(i)}this._pcfKernels=t,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}Ee.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof Ie||(this.camera=new Ie,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof ln||(this.camera=new ln,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};Ee.prototype.setViewport=function(e,t,r,n,i){this.camera instanceof Ie&&(this.camera.aspect=r/n),i=i||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=r,this.viewport.height=n,this.viewport.devicePixelRatio=i,this._compositor.resize(r*i,n*i),this._temporalSS.resize(r*i,n*i)};Ee.prototype.containPoint=function(e,t){var r=this.viewport,n=this.layer.renderer.getHeight();return t=n-t,e>=r.x&&t>=r.y&&e<=r.x+r.width&&t<=r.y+r.height};var Ss=new et;Ee.prototype.castRay=function(e,t,r){var n=this.layer.renderer,i=n.viewport;return n.viewport=this.viewport,n.screenToNDC(e,t,Ss),this.camera.castRay(Ss,r),n.viewport=i,r};Ee.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var r=e.transparent[t],n=r.geometry;n.needsSortVerticesProgressively&&n.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),n.needsSortTrianglesProgressively&&n.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};Ee.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};Ee.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};Ee.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};Ee.prototype.hasDOF=function(){return this._enableDOF};Ee.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};Ee.prototype._doRender=function(e,t,r){var n=this.scene,i=this.camera;r=r||0,this._updateTransparent(e,n,i,r),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,n,i,!0)),this._updateShadowPCFKernel(r);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,i),this._compositor.updateNormal(e,n,i,this._temporalSS.getFrame())),this._updateSSAO(e,n,i,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(n,i,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,n,i,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,n,i,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(n,i,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(n,i,!0,!0)};Ee.prototype._updateTransparent=function(e,t,r,n){for(var i=new B,a=new V,o=r.getWorldPosition(),s=t.getRenderList(r).transparent,l=0;l<s.length;l++){var u=s[l],c=u.geometry;V.invert(a,u.worldTransform),B.transformMat4(i,o,a),c.needsSortTriangles&&c.needsSortTriangles()&&c.doSortTriangles(i,n),c.needsSortVertices&&c.needsSortVertices()&&c.doSortVertices(i,n)}};Ee.prototype._updateSSAO=function(e,t,r){var n=this._enableSSAO&&this._enablePostEffect;n&&this._compositor.updateSSAO(e,t,r,this._temporalSS.getFrame());for(var i=t.getRenderList(r),a=0;a<i.opaque.length;a++){var o=i.opaque[a];o.renderNormal&&o.material[n?"enableTexture":"disableTexture"]("ssaoMap"),n&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}};Ee.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),n=r.opaque,i=0;i<n.length;i++)n[i].receiveShadow&&(n[i].material.set("pcfKernel",t),n[i].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};Ee.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};Ee.prototype.setPostEffect=function(e,t){var r=this._compositor;this._enablePostEffect=e.get("enable");var n=e.getModel("bloom"),i=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),u=e.getModel("colorCorrection");n.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),s.get("enable")?r.enableSSR():r.disableSSR(),u.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),i.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(n.get("intensity")),r.setEdgeColor(i.get("color")),r.setColorLookupTexture(u.get("lookupTexture"),t),r.setExposure(u.get("exposure")),["radius","quality","intensity"].forEach(function(c){r.setSSAOParameter(c,o.get(c))}),["quality","maxRoughness","physical"].forEach(function(c){r.setSSRParameter(c,s.get(c))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(c){r.setDOFParameter(c,a.get(c))}),["brightness","contrast","saturation"].forEach(function(c){r.setColorCorrection(c,u.get(c))})};Ee.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};Ee.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};Ee.prototype.isLinearSpace=function(){return this._enablePostEffect};Ee.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),r=0;r<t.length;r++)e.add(t[r]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};Ee.prototype.add=function(e){this.rootNode.add(e)};Ee.prototype.remove=function(e){this.rootNode.remove(e)};Ee.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(Ee.prototype,Ra);var Xr=Ye.firstNotNull,As={left:0,middle:1,right:2};function bs(e){return e instanceof Array||(e=[e,e]),e}var Wl=Qe.extend(function(){return{zr:null,viewGL:null,_center:new B,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new et,_panVelocity:new et,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var r=t.baseDistance||0,n=t.baseOrthoSize||1,i=e.get("projection");i!=="perspective"&&i!=="orthographic"&&i!=="isometric"&&(i="perspective"),this._projection=i,this.viewGL.setProjection(i);var a=e.get("distance")+r,o=e.get("orthographicSize")+n;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(d){this[d[0]]=Xr(e.get(d[0]),d[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=n,this.maxOrthographicSize+=n;var s=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(d){l[d]=Xr(e.get(d),s&&s.get(d))});var u=Xr(t.alpha,e.get("alpha"))||0,c=Xr(t.beta,e.get("beta"))||0,f=Xr(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:u,beta:c,center:f,distance:a,orthographicSize:o,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(u),this.setBeta(c),this.setCenter(f),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,r=this,n={},i={};return e.distance!=null&&(n.distance=this.getDistance(),i.distance=e.distance),e.orthographicSize!=null&&(n.orthographicSize=this.getOrthographicSize(),i.orthographicSize=e.orthographicSize),e.alpha!=null&&(n.alpha=this.getAlpha(),i.alpha=e.alpha),e.beta!=null&&(n.beta=this.getBeta(),i.beta=e.beta),e.center!=null&&(n.center=this.getCenter(),i.center=e.center),this._addAnimator(t.animation.animate(n).when(e.duration||1e3,i).during(function(){n.alpha!=null&&r.setAlpha(n.alpha),n.beta!=null&&r.setBeta(n.beta),n.distance!=null&&r.setDistance(n.distance),n.center!=null&&r.setCenter(n.center),n.orthographicSize!=null&&r.setOrthographicSize(n.orthographicSize),r._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),r=this._orthoSize,n=r/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-n/2,t.right=n/2,t.top=r/2,t.bottom=-r/2},_updatePan:function(e){var t=this._panVelocity,r=this._distance,n=this.getCamera(),i=n.worldTransform.y,a=n.worldTransform.x;this._center.scaleAndAdd(a,-t.x*r/200).scaleAndAdd(i,-t.y*r/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new B,r=this._theta+Math.PI/2,n=this._phi+Math.PI/2,i=Math.sin(r);t.x=i*Math.cos(n),t.y=-Math.cos(r),t.z=i*Math.sin(n),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var r=e.len();r=r*t,r<1e-4&&(r=0),e.normalize().scale(r)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),r=Math.atan2(e.x,e.z);this._theta=t,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,r=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===As[this.rotateMouseButton]?this._mode="rotate":e.event.button===As[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=bs(this.panSensitivity),r=bs(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var r=e.offsetX,n=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,n))){var i;this._projection==="perspective"?i=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):i=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*i*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var r=t.indexOf(e);r>=0&&t.splice(r,1)}),e}});Object.defineProperty(Wl.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});const Tp=Wl;function da(){}da.prototype={constructor:da,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new k.DirectionalLight({shadowBias:.005}),this.ambientLight=new k.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,r=this.ambientLight,n=e.getModel("light"),i=n.getModel("main"),a=n.getModel("ambient");t.intensity=i.get("intensity"),r.intensity=a.get("intensity"),t.color=k.parseColor(i.get("color")).slice(0,3),r.color=k.parseColor(a.get("color")).slice(0,3);var o=i.get("alpha")||0,s=i.get("beta")||0;t.position.setArray(k.directionFromAlphaBeta(o,s)),t.lookAt(k.Vector3.ZERO),t.castShadow=i.get("shadow"),t.shadowResolution=k.getShadowResolution(i.get("shadowQuality"))},updateAmbientCubemap:function(e,t,r){var n=t.getModel("light.ambientCubemap"),i=n.get("texture");if(i){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[i];if(!a){var o=this;a=this._cubemapLightsCache[i]=k.createAmbientCubemap(n.option,e,r,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,r){var n=t.get("environment"),i=this;function a(){return i._skybox=i._skybox||new sn,i._skybox}var o=a();if(n&&n!=="none")if(n==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(s),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof n=="object"&&n.colorStops||typeof n=="string"&&xa(n)){this._isSkyboxFromAmbientCubemap=!1;var l=new k.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(l);var u=l.image=document.createElement("canvas");u.width=u.height=16;var c=u.getContext("2d"),f=new ir({shape:{x:0,y:0,width:16,height:16},style:{fill:n}});Ku(c,f),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=k.loadTexture(n,r,{anisotropic:8,flipY:!1});o.setEnvironmentMap(l),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var d=t.coordinateSystem;if(this._skybox)if(d&&d.viewGL&&n!=="auto"&&!(n.match&&n.match(/.hdr$/))){var h=d.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[h]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var ci=ti.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});mt(ci.prototype,Fv);mt(ci.prototype,Uv);mt(ci.prototype,Hv);const Ep=ci;var Wt=zt.vec3,Xl=me.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new me.Attribute("position","float",3,"POSITION"),normal:new me.Attribute("normal","float",3,"NORMAL"),color:new me.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,r=this.getQuadVertexCount()*e,n=this.getQuadTriangleCount()*e;this.vertexCount!==r&&(t.position.init(r),t.normal.init(r),t.color.init(r)),this.triangleCount!==n&&(this.indices=r>65535?new Uint32Array(n*3):new Uint16Array(n*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=Wt.create(),t=Wt.create(),r=Wt.create(),n=[0,3,1,3,2,1];return function(i,a){var o=this.attributes.position,s=this.attributes.normal,l=this.attributes.color;Wt.sub(e,i[1],i[0]),Wt.sub(t,i[2],i[1]),Wt.cross(r,e,t),Wt.normalize(r,r);for(var u=0;u<4;u++)o.set(this._vertexOffset+u,i[u]),l.set(this._vertexOffset+u,a),s.set(this._vertexOffset+u,r);for(var c=this._faceOffset*3,u=0;u<6;u++)this.indices[c+u]=n[u]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});Ge(Xl.prototype,ui);const Sp=Xl;var va=Ye.firstNotNull,Ap={x:0,y:2,z:1};function bp(e,t,r,n){var i=[0,0,0],a=n<0?r.getExtentMin():r.getExtentMax();i[Ap[r.dim]]=a,e.position.setArray(i),e.rotation.identity(),t.distance=-Math.abs(a),t.normal.set(0,0,0),r.dim==="x"?(e.rotation.rotateY(n*Math.PI/2),t.normal.x=-n):r.dim==="z"?(e.rotation.rotateX(-n*Math.PI/2),t.normal.y=-n):(n>0&&e.rotation.rotateY(Math.PI),t.normal.z=-n)}function fi(e,t,r){this.rootNode=new k.Node;var n=new k.Mesh({geometry:new ka({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),i=new k.Mesh({geometry:new Sp,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(i),this.rootNode.add(n),this.faceInfo=e,this.plane=new k.Plane,this.linesMesh=n,this.quadsMesh=i}fi.prototype.update=function(e,t,r){var n=e.coordinateSystem,i=[n.getAxis(this.faceInfo[0]),n.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,o=this.quadsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(a,i,e,r),this._udpateSplitAreas(o,i,e,r),a.convertToTypedArray(),o.convertToTypedArray();var s=n.getAxis(this.faceInfo[2]);bp(this.rootNode,this.plane,s,this.faceInfo[3])};fi.prototype._updateSplitLines=function(e,t,r,n){var i=n.getDevicePixelRatio();t.forEach(function(a,o){var s=a.model,l=t[1-o].getExtent();if(!a.scale.isBlank()){var u=s.getModel("splitLine",r.getModel("splitLine"));if(u.get("show")){var c=u.getModel("lineStyle"),f=c.get("color"),d=va(c.get("opacity"),1),h=va(c.get("width"),1);f=ze(f)?f:[f];for(var p=a.getTicksCoords({tickModel:u}),v=0,m=0;m<p.length;m++){var _=p[m].coord,y=k.parseColor(f[v%f.length]);y[3]*=d;var g=[0,0,0],x=[0,0,0];g[o]=x[o]=_,g[1-o]=l[0],x[1-o]=l[1],e.addLine(g,x,y,h*i),v++}}}})};fi.prototype._udpateSplitAreas=function(e,t,r,n){t.forEach(function(i,a){var o=i.model,s=t[1-a].getExtent();if(!i.scale.isBlank()){var l=o.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var u=l.getModel("areaStyle"),c=u.get("color"),f=va(u.get("opacity"),1);c=ze(c)?c:[c];for(var d=i.getTicksCoords({tickModel:l,clamp:!0}),h=0,p=[0,0,0],v=[0,0,0],m=0;m<d.length;m++){var _=d[m].coord,y=[0,0,0],g=[0,0,0];if(y[a]=g[a]=_,y[1-a]=s[0],g[1-a]=s[1],m===0){p=y,v=g;continue}var x=k.parseColor(c[h%c.length]);x[3]*=f,e.addQuad([p,y,g,v],x),p=y,v=g,h++}}}})};var Xt=Ye.firstNotNull,qt={x:0,y:2,z:1};function qa(e,t){var r=new k.Mesh({geometry:new ka({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),n=new Va;n.material.depthMask=!1;var i=new k.Node;i.add(r),i.add(n),this.rootNode=i,this.dim=e,this.linesMesh=r,this.labelsMesh=n,this.axisLineCoords=null,this.labelElements=[]}var Xi={x:"y",y:"x",z:"y"};qa.prototype.update=function(e,t,r){var n=e.coordinateSystem,i=n.getAxis(this.dim),a=this.linesMesh.geometry,o=this.labelsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0);var s=i.model,l=i.getExtent(),R=r.getDevicePixelRatio(),u=s.getModel("axisLine",e.getModel("axisLine")),c=s.getModel("axisTick",e.getModel("axisTick")),f=s.getModel("axisLabel",e.getModel("axisLabel")),d=u.get("lineStyle.color");if(u.get("show")){var h=u.getModel("lineStyle"),p=[0,0,0],v=[0,0,0],m=qt[i.dim];p[m]=l[0],v[m]=l[1],this.axisLineCoords=[p,v];var _=k.parseColor(d),y=Xt(h.get("width"),1),g=Xt(h.get("opacity"),1);_[3]*=g,a.addLine(p,v,_,y*R)}if(c.get("show")){var x=c.getModel("lineStyle"),E=k.parseColor(Xt(x.get("color"),d)),y=Xt(x.get("width"),1);E[3]*=Xt(x.get("opacity"),1);for(var T=i.getTicksCoords(),S=c.get("length"),A=0;A<T.length;A++){var w=T[A].coord,p=[0,0,0],v=[0,0,0],m=qt[i.dim],D=qt[Xi[i.dim]];p[m]=v[m]=w,v[D]=S,a.addLine(p,v,E,y*R)}}this.labelElements=[];var R=r.getDevicePixelRatio();if(f.get("show"))for(var T=i.getTicksCoords(),C=s.get("data"),P=f.get("margin"),L=i.getViewLabels(),A=0;A<L.length;A++){var I=L[A].tickValue,O=L[A].formattedLabel,H=L[A].rawLabel,w=i.dataToCoord(I),G=[0,0,0],m=qt[i.dim],D=qt[Xi[i.dim]];G[m]=G[m]=w,G[D]=P;var q=f;C&&C[I]&&C[I].textStyle&&(q=new Fn(C[I].textStyle,f,s.ecModel));var ae=Xt(q.get("color"),d),te=new gt({style:nr(q,{text:O,fill:typeof ae=="function"?ae(i.type==="category"?H:i.type==="value"?I+"":I,A):ae,verticalAlign:"top",align:"left"})}),_e=t.add(te),oe=te.getBoundingRect();o.addSprite(G,[oe.width*R,oe.height*R],_e),this.labelElements.push(te)}if(s.get("name")){var fe=s.getModel("nameTextStyle"),G=[0,0,0],m=qt[i.dim],D=qt[Xi[i.dim]],Ce=Xt(fe.get("color"),d),ue=fe.get("borderColor"),y=fe.get("borderWidth");G[m]=G[m]=(l[0]+l[1])/2,G[D]=s.get("nameGap");var te=new gt({style:nr(fe,{text:s.get("name"),fill:Ce,stroke:ue,lineWidth:y})}),_e=t.add(te),oe=te.getBoundingRect();o.addSprite(G,[oe.width*R,oe.height*R],_e),te.__idx=this.labelElements.length,this.nameLabelElement=te}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),a.convertToTypedArray(),o.convertToTypedArray()};qa.prototype.setSpriteAlign=function(e,t,r){for(var n=r.getDevicePixelRatio(),i=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var o=this.labelElements[a],s=o.getBoundingRect();i.setSpriteAlign(a,[s.width*n,s.height*n],e,t)}var l=this.nameLabelElement;if(l){var s=l.getBoundingRect();i.setSpriteAlign(l.__idx,[s.width*n,s.height*n],e,t),i.dirty()}this.textAlign=e,this.textVerticalAlign=t};var ws=Ye.firstNotNull;k.Shader.import(Bv);var jt={x:0,y:2,z:1};const wp=pa.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var r=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],n=["x","y","z"],i=new k.Material({shader:k.createShader("ecgl.color"),depthMask:!1,transparent:!0}),a=new k.Material({shader:k.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});i.define("fragment","DOUBLE_SIDED"),i.define("both","VERTEX_COLOR"),this.groupGL=new k.Node,this._control=new Tp({zr:t.getZr()}),this._control.init(),this._faces=r.map(function(s){var l=new fi(s,a,i);return this.groupGL.add(l.rootNode),l},this),this._axes=n.map(function(s){var l=new qa(s,a);return this.groupGL.add(l.rootNode),l},this);var o=t.getDevicePixelRatio();this._axisLabelSurface=new Jn({width:256,height:256,devicePixelRatio:o}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new k.Mesh({geometry:new ka({useNativeLine:!1}),material:a,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new Jn({width:128,height:128,devicePixelRatio:o}),this._axisPointerLabelsMesh=new Va({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new k.Node,this._sceneHelper=new da,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,r){this._model=e,this._api=r;var n=e.coordinateSystem;n.viewGL.add(this._lightRoot),e.get("show")?n.viewGL.add(this.groupGL):n.viewGL.remove(this.groupGL);var i=this._control;i.setViewGL(n.viewGL);var a=e.getModel("viewControl");i.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),i.off("update"),e.get("show")&&(this._faces.forEach(function(o){o.update(e,t,r)},this),this._axes.forEach(function(o){o.update(e,this._axisLabelSurface,r)},this)),i.on("update",this._onCameraChange.bind(this,e,r),this),this._sceneHelper.setScene(n.viewGL.scene),this._sceneHelper.updateLight(e),n.viewGL.setPostEffect(e.getModel("postEffect"),r),n.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,r,n){var i=n.renderer;this._sceneHelper.updateAmbientCubemap(i,e,r),this._sceneHelper.updateSkybox(i,e,r)},showAxisPointer:function(e,t,r,n){this._doShowAxisPointer(),this._updateAxisPointer(n.value)},hideAxisPointer:function(e,t,r,n){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,r=t.viewGL;e.get("show")&&e.get("axisPointer.show")?r.on("mousemove",this._updateAxisPointerOnMousePosition,this):r.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,r=t.coordinateSystem,n=r.viewGL,i=n.castRay(e.offsetX,e.offsetY,new k.Ray),a,o=0;o<this._faces.length;o++){var s=this._faces[o];if(!s.rootNode.invisible){s.plane.normal.dot(n.camera.worldTransform.z)<0&&s.plane.normal.negate();var l=i.intersectPlane(s.plane);if(l){var u=r.getAxis(s.faceInfo[0]),c=r.getAxis(s.faceInfo[1]),f=jt[s.faceInfo[0]],d=jt[s.faceInfo[1]];u.contain(l.array[f])&&c.contain(l.array[d])&&(a=l)}}}if(a){var h=r.pointToData(a.array,[],!0);this._updateAxisPointer(h),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var r=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:r.getAlpha(),beta:r.getBeta(),distance:r.getDistance(),center:r.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new k.Vector3;e.update();for(var r=0;r<this._faces.length/2;r++){for(var n=[],i=0;i<2;i++){var a=this._faces[r*2+i];a.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),n[i]=t.z}var o=n[0]>n[1]?0:1,s=this._faces[r*2+o],l=this._faces[r*2+1-o];s.rootNode.invisible=!0,l.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),r=e.getAxis("y"),n=e.getAxis("z"),i=n.getExtentMax(),a=n.getExtentMin(),o=t.getExtentMin(),s=t.getExtentMax(),l=r.getExtentMax(),u=r.getExtentMin(),c=this._axes[0].rootNode,f=this._axes[1].rootNode,d=this._axes[2].rootNode,h=this._faces,p=h[4].rootNode.invisible?u:l,v=h[2].rootNode.invisible?i:a,m=h[0].rootNode.invisible?o:s,_=h[2].rootNode.invisible?i:a,y=h[0].rootNode.invisible?s:o,g=h[4].rootNode.invisible?u:l;c.rotation.identity(),f.rotation.identity(),d.rotation.identity(),h[4].rootNode.invisible&&(this._axes[0].flipped=!0,c.rotation.rotateX(Math.PI)),h[0].rootNode.invisible&&(this._axes[1].flipped=!0,f.rotation.rotateZ(Math.PI)),h[4].rootNode.invisible&&(this._axes[2].flipped=!0,d.rotation.rotateY(Math.PI)),c.position.set(0,v,p),f.position.set(m,_,0),d.position.set(y,0,g),c.update(),f.update(),d.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new k.Vector4,new k.Vector4],r=new k.Vector4;this.groupGL.getWorldPosition(r),r.w=1,r.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),r.x/=r.w,r.y/=r.w,this._axes.forEach(function(n){var i=n.axisLineCoords;n.labelsMesh.geometry;for(var a=0;a<t.length;a++)t[a].setArray(i[a]),t[a].w=1,t[a].transformMat4(n.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[a].x/=t[a].w,t[a].y/=t[a].w;var o=t[1].x-t[0].x,s=t[1].y-t[0].y,l=(t[1].x+t[0].x)/2,u=(t[1].y+t[0].y)/2,c,f;Math.abs(s/o)<.5?(c="center",f=u>r.y?"bottom":"top"):(f="middle",c=l>r.x?"left":"right"),n.setSpriteAlign(c,f,this._api)},this)},_doShowAxisPointer:function(){this._axisPointerLineMesh.invisible&&(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,r=t.dataToPoint(e),n=this._axisPointerLineMesh,i=n.geometry,a=this._model.getModel("axisPointer"),o=this._api.getDevicePixelRatio();i.convertToDynamicArray(!0);function s(A){return Ye.firstNotNull(A.model.get("axisPointer.show"),a.get("show"))}function l(A){var w=A.model.getModel("axisPointer",a),D=w.getModel("lineStyle"),R=k.parseColor(D.get("color")),C=ws(D.get("width"),1),P=ws(D.get("opacity"),1);return R[3]*=P,{color:R,lineWidth:C}}for(var u=0;u<this._faces.length;u++){var c=this._faces[u];if(!c.rootNode.invisible){for(var f=c.faceInfo,d=f[3]<0?t.getAxis(f[2]).getExtentMin():t.getAxis(f[2]).getExtentMax(),h=jt[f[2]],p=0;p<2;p++){var v=f[p],m=f[1-p],_=t.getAxis(v),y=t.getAxis(m);if(s(_)){var g=[0,0,0],x=[0,0,0],E=jt[v],T=jt[m];g[E]=x[E]=r[E],g[h]=x[h]=d,g[T]=y.getExtentMin(),x[T]=y.getExtentMax();var S=l(_);i.addLine(g,x,S.color,S.lineWidth*o)}}if(s(t.getAxis(f[2]))){var g=r.slice(),x=r.slice();x[h]=d;var S=l(t.getAxis(f[2]));i.addLine(g,x,S.color,S.lineWidth*o)}}}i.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,r=this._axisPointerLabelsMesh,n=this._axisPointerLabelsSurface,i=t.coordinateSystem,a=t.getModel("axisPointer");r.geometry.convertToDynamicArray(!0),n.clear();var o={x:"y",y:"x",z:"y"};this._axes.forEach(function(s,l){var u=i.getAxis(s.dim),c=u.model,f=c.getModel("axisPointer",a),d=f.getModel("label"),h=f.get("lineStyle.color");if(!(!d.get("show")||!f.get("show"))){var p=e[l],v=d.get("formatter"),m=u.scale.getLabel({value:p});if(v!=null)m=v(m,e);else if(u.scale.type==="interval"||u.scale.type==="log"){var _=$u(u.scale.getTicks()[0]);m=p.toFixed(_+2)}var y=d.get("color"),g=new gt({style:nr(d,{text:m,fill:y||h,align:"left",verticalAlign:"top"})}),x=n.add(g),E=g.getBoundingRect(),T=this._api.getDevicePixelRatio(),S=s.rootNode.position.toArray(),A=jt[o[s.dim]];S[A]+=(s.flipped?-1:1)*d.get("margin"),S[jt[s.dim]]=u.dataToCoord(e[l]),r.geometry.addSprite(S,[E.width*T,E.height*T],x,s.textAlign,s.textVerticalAlign)}},this),n.getZr().refreshImmediately(),r.material.set("uvScale",n.getCoordsScale()),r.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function cn(e){Fs.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}cn.prototype={constructor:cn,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],r),t[2]=this.getAxis("y").dataToCoord(e[1],r),t[1]=this.getAxis("z").dataToCoord(e[2],r),t},pointToData:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],r),t[1]=this.getAxis("y").coordToData(e[2],r),t[2]=this.getAxis("z").coordToData(e[1],r),t}};Us(cn,Fs);function ei(e,t,r){Hs.call(this,e,t,r)}ei.prototype={constructor:ei,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}};Us(ei,Hs);function Cp(e,t){var r=e.getBoxLayoutParams(),n=Un(r,{width:t.getWidth(),height:t.getHeight()});n.y=t.getHeight()-n.y-n.height,this.viewGL.setViewport(n.x,n.y,n.width,n.height,t.getDevicePixelRatio());var i=e.get("boxWidth"),a=e.get("boxHeight"),o=e.get("boxDepth");this.getAxis("x").setExtent(-i/2,i/2),this.getAxis("y").setExtent(o/2,-o/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[i,a,o]}function Rp(e,t){var r={};function n(i,a){r[i]=r[i]||[1/0,-1/0],r[i][0]=Math.min(a[0],r[i][0]),r[i][1]=Math.max(a[1],r[i][1])}e.eachSeries(function(i){if(i.coordinateSystem===this){var a=i.getData();["x","y","z"].forEach(function(o){a.mapDimensionsAll(o,!0).forEach(function(s){n(o,a.getDataExtent(s,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(i){e.eachComponent(i,function(a){var o=i.charAt(0),s=a.getReferringComponents("grid3D").models[0],l=s.coordinateSystem;if(l===this){var u=l.getAxis(o);if(!u){var c=pc(r[o]||[1/0,-1/0],a);u=new ei(o,c),u.type=a.get("type");var f=u.type==="category";u.onBand=f&&a.get("boundaryGap"),u.inverse=a.get("inverse"),a.axis=u,u.model=a,u.getLabelModel=function(){return a.getModel("axisLabel",s.getModel("axisLabel"))},u.getTickModel=function(){return a.getModel("axisTick",s.getModel("axisTick"))},l.addAxis(u)}}},this)},this),this.resize(this.model,t)}var Dp={dimensions:cn.prototype.dimensions,create:function(e,t){var r=[];e.eachComponent("grid3D",function(a){a.__viewGL=a.__viewGL||new Ee;var o=new cn;o.model=a,o.viewGL=a.__viewGL,a.coordinateSystem=o,r.push(o),o.resize=Cp,o.update=Rp});var n=["xAxis3D","yAxis3D","zAxis3D"];function i(a,o){return n.map(function(s){var l=a.getReferringComponents(s).models[0];return l==null&&(l=o.getComponent(s)),l})}return e.eachSeries(function(a){if(a.get("coordinateSystem")==="cartesian3D"){var o=a.getReferringComponents("grid3D").models[0];if(o==null){var s=i(a,e),o=s[0].getCoordSysModel();s.forEach(function(c){c.getCoordSysModel()})}var l=o.coordinateSystem;a.coordinateSystem=l}}),r}};const Lp=Dp;var ql=ti.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});mc(ql);const Mp=ql;var jl={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},Pp=mt({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},jl),ja=mt({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},jl),Np=Ge({scale:!0,min:"dataMin",max:"dataMax"},ja),Zl=Ge({logBase:10},ja);Zl.scale=!0;const Ip={categoryAxis3D:Pp,valueAxis3D:ja,timeAxis3D:Np,logAxis3D:Zl};var Op=["value","category","time","log"];function Bp(e,t,r,n,i){Op.forEach(function(a){var o=r.extend({type:t+"Axis3D."+a,__ordinalMeta:null,mergeDefaultAndTheme:function(s,l){var u=l.getTheme();mt(s,u.get(a+"Axis3D")),mt(s,this.getDefaultOption()),s.type=n(t,s)},optionUpdated:function(){var s=this.option;s.type==="category"&&(this.__ordinalMeta=Qu.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:mt(Ps(Ip[a+"Axis3D"]),i||{},!0)});e.registerComponentModel(o)}),e.registerSubTypeDefaulter(t+"Axis3D",Yt(n,t))}function Fp(e,t){return t.type||(t.data?"category":"value")}function Up(e){e.registerComponentModel(Ep),e.registerComponentView(wp),e.registerCoordinateSystem("grid3D",Lp),["x","y","z"].forEach(function(t){Bp(e,t,Mp,Fp,{name:t.toUpperCase()});const r=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(r)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"grid3D",query:t},function(n){n.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,r){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,r){})}const Hp={id:"right-top-bar-chart"},Gp=wt({__name:"RightTopBar3D",setup(e){return ft([Br,ii,ai,Up,Ov,or]),Ct(()=>{var t=document.getElementById("right-top-bar-chart"),r=Or(t,"dark",{devicePixelRatio:2}),n,i=["12a","1a","2a","3a","4a","5a","6a","7a","8a","9a","10a","11a","12p","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p"],a=["Saturday"],o=[[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];n={backgroundColor:"transparent",title:{text:"预约情况显示"},tooltip:{},visualMap:{max:20,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]}},xAxis3D:{type:"category",data:i,name:"",axisLabel:{textStyle:{color:"#fff"}}},yAxis3D:{type:"category",data:a,show:!1,name:"",axisLabel:{show:!1},axisLine:{show:!0},axisTick:{show:!1},splitLine:{show:!1}},zAxis3D:{type:"value",name:""},grid3D:{boxWidth:200,boxDepth:10,viewControl:{alpha:0,beta:0},light:{main:{intensity:1.2,shadow:!0},ambient:{intensity:.3}}},series:[{type:"bar3D",data:o.slice(0,24).map(function(s){return{value:[s[1],s[0],s[2]]}}),label:{fontSize:16,borderWidth:1},emphasis:{label:{fontSize:20,color:"#900"},itemStyle:{color:"#900"}}}]},n&&r.setOption(n)}),(t,r)=>(Le(),Me("div",Hp))}});const zp=bt(Gp,[["__scopeId","data-v-01303a01"]]);function Vp(){const e=tt(null),t=tt(document.body.clientWidth),r=tt(document.body.clientHeight);function n(){const a=document.body.clientWidth,o=document.body.clientHeight;e.value&&(e.value.style.transform=`scale(${Math.min(a/t.value,o/r.value)})`)}const i=Ju(100,n);return Ct(()=>{n(),window.addEventListener("resize",i)}),Aa(()=>{window.removeEventListener("resize",i)}),{containerRef:e,screenWidth:t,screenHeight:r}}const yt=e=>(Gs("data-v-988daac3"),e=e(),zs(),e),kp=yt(()=>se("div",{class:"header"},"义乌铁路西站场区作业情况展示",-1)),Wp={class:"container"},Xp={class:"container-content"},qp={class:"left-part"},jp=yt(()=>se("div",{class:"box-title"},"堆区在场箱数量",-1)),Zp={class:"box-item-wrap"},Yp={class:"box-item"},Kp={class:"box-item-value"},$p=yt(()=>se("div",{class:"box-item-title"},"总数量",-1)),Qp={class:"box-item"},Jp={class:"box-item-value"},em=yt(()=>se("div",{class:"box-item-title"},"空箱量",-1)),tm={class:"box-item"},rm={class:"box-item-value"},nm=yt(()=>se("div",{class:"box-item-title"},"重箱量",-1)),im={class:"box-item"},am={class:"box-item-value"},om=yt(()=>se("div",{class:"box-item-title"},"含转关箱",-1)),sm={class:"left-bar-chart-2"},lm={class:"left-bar-chart"},um={class:"middle-part"},cm={class:"bar"},fm=yt(()=>se("div",{class:"bar-title"},"本年度",-1)),hm={class:"barbox-value"},dm={class:"barbox-item"},vm={class:"barbox-item"},pm=yt(()=>se("div",{class:"barbox-title"},[se("div",{class:"barbox-item"},"进口箱量"),se("div",{class:"barbox-item"},"出口箱量")],-1)),mm=yt(()=>se("div",{class:"table-title"},"当前场站作业情况",-1)),_m={class:"right-part"},gm={class:"right-header"},ym=yt(()=>se("div",{class:"table-title"},"近期船期待发运量",-1)),xm={name:"YiWu"},Tm=wt({...xm,setup(e){const{containerRef:t,screenWidth:r,screenHeight:n}=Vp(),i=tt(new Array(10).fill(1).map(()=>["TRAYW 001SI/001NW","50","50","45"])),a=tt(new Array(10).fill(1).map(()=>["MAERSK LINS/001W","2023-01-01 10:00:00","2023-01-01 10:00:00","50","2023-01-01 10:00:00","BLCT2","150"]));return(o,s)=>(Le(),Me("div",{class:"YiWu-view",style:Sr({width:pn(r)+"px",height:pn(n)+"px"}),ref_key:"containerRef",ref:t},[kp,se("div",Wp,[Be(pn(ec),null,{default:lo(()=>[se("div",Xp,[se("div",qp,[Be(pn(sc),{class:"box"},{default:lo(()=>[jp,se("div",Zp,[se("div",Yp,[se("div",Kp,[Be(fr,{"end-val":890})]),$p]),se("div",Qp,[se("div",Jp,[Be(fr,{"end-val":450})]),em]),se("div",tm,[se("div",rm,[Be(fr,{"end-val":440})]),nm]),se("div",im,[se("div",am,[Be(fr,{"end-val":330})]),om])])]),_:1}),se("div",sm,[Be(cf),Be(so,{position:"top"})]),se("div",lm,[Be(sf),Be(so,{position:"top"})])]),se("div",um,[se("div",cm,[fm,se("div",hm,[se("div",dm,[Be(fr,{"end-val":15e3})]),se("div",vm,[Be(fr,{"end-val":5e4,duration:3.5},null,8,["duration"])])]),pm]),mm,Be(uo,{style:{flex:"1"},"column-flex":[2,1,1,1],header:["车名车次","计划卸量","计划装量","已放行待装"],data:i.value,showIdx:!0},null,8,["data"]),Be(Uf)]),se("div",_m,[se("div",gm,[Be(zf),Be(zp)]),ym,Be(uo,{style:{height:"30%"},"column-flex":[2,3,3,1,3,1,1],header:["船名航次","截关期/开船期","本航次集装箱数量（已发运数量）","铁路发运预计日期","靠泊时间","靠泊码头","待发箱量"],data:a.value,"row-num":6},null,8,["data"]),Be(Wf)])])]),_:1})])],4))}});const Am=bt(Tm,[["__scopeId","data-v-988daac3"]]);export{Am as default};
