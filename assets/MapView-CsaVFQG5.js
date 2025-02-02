import{f as B,h as v,i as j,j as R,k as _,m as M,l as x,p as P,q as je,s as C,u as W,v as ne,x as se,y as oe,z as Re,o as X,c as te,b as Q,d as V,w as ee,A as D,t as ie,F as ue,B as Pe,C as Ie,e as Ee,g as Ne}from"./index-Do91mhRF.js";const de=(e,t)=>{for(const n of Object.keys(t))e.on(n,t[n])},ye=e=>{for(const t of Object.keys(e)){const n=e[t];n&&w(n.cancel)&&n.cancel()}},ze=e=>!e||typeof e.charAt!="function"?e:e.charAt(0).toUpperCase()+e.slice(1),w=e=>typeof e=="function",I=(e,t,n)=>{for(const o in n){const l="set"+ze(o);e[l]?se(()=>n[o],(a,r)=>{e[l](a,r)}):t[l]&&se(()=>n[o],a=>{t[l](a)})}},E=(e,t,n={})=>{const o={...n};for(const l in e){const a=t[l],r=e[l];a&&(a&&a.custom===!0||r!==void 0&&(o[l]=r))}return o},U=e=>{const t={},n={};for(const o in e)if(o.startsWith("on")&&!o.startsWith("onUpdate")&&o!=="onReady"){const l=o.slice(2).toLocaleLowerCase();t[l]=e[o]}else n[o]=e[o];return{listeners:t,attrs:n}},ke=async e=>{const t=await Promise.all([_(()=>import("./marker-icon-2x-D4k_ikNW.js"),[]),_(()=>import("./marker-icon-C2eJqgqv.js"),[]),_(()=>import("./marker-shadow-DU6CIJ0p.js"),[])]);delete e.Default.prototype._getIconUrl,e.Default.mergeOptions({iconRetinaUrl:t[0].default,iconUrl:t[1].default,shadowUrl:t[2].default})},J=e=>{const t=v((...o)=>console.warn(`Method ${e} has been invoked without being replaced`)),n=(...o)=>t.value(...o);return n.wrapped=t,C(e,n),n},K=(e,t)=>e.wrapped.value=t,A=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||globalThis,L=e=>{const t=j(e);if(t===void 0)throw new Error(`Attempt to inject ${e.description} before it was provided.`);return t},N=Symbol("useGlobalLeaflet"),G=Symbol("addLayer"),me=Symbol("removeLayer"),be=Symbol("registerControl"),De=Symbol("registerLayerControl"),ve=Symbol("canSetParentHtml"),ge=Symbol("setParentHtml"),he=Symbol("setIcon"),Ve=Symbol("bindPopup"),_e=Symbol("bindTooltip"),Me=Symbol("unbindPopup"),Le=Symbol("unbindTooltip"),H={options:{type:Object,default:()=>({}),custom:!0}},F=e=>({options:e.options,methods:{}}),$={...H,pane:{type:String},attribution:{type:String},name:{type:String,custom:!0},layerType:{type:String,custom:!0},visible:{type:Boolean,custom:!0,default:!0}},Se=(e,t,n)=>{const o=L(G),l=L(me),{options:a,methods:r}=F(e),s=E(e,$,a),p=()=>o({leafletObject:t.value}),d=()=>l({leafletObject:t.value}),u={...r,setAttribution(c){d(),t.value.options.attribution=c,e.visible&&p()},setName(){d(),e.visible&&p()},setLayerType(){d(),e.visible&&p()},setVisible(c){t.value&&(c?p():d())},bindPopup(c){if(!t.value||!w(t.value.bindPopup)){console.warn("Attempt to bind popup before bindPopup method available on layer.");return}t.value.bindPopup(c)},bindTooltip(c){if(!t.value||!w(t.value.bindTooltip)){console.warn("Attempt to bind tooltip before bindTooltip method available on layer.");return}t.value.bindTooltip(c)},unbindTooltip(){t.value&&(w(t.value.closeTooltip)&&t.value.closeTooltip(),w(t.value.unbindTooltip)&&t.value.unbindTooltip())},unbindPopup(){t.value&&(w(t.value.closePopup)&&t.value.closePopup(),w(t.value.unbindPopup)&&t.value.unbindPopup())},updateVisibleProp(c){n.emit("update:visible",c)}};return C(Ve,u.bindPopup),C(_e,u.bindTooltip),C(Me,u.unbindPopup),C(Le,u.unbindTooltip),oe(()=>{u.unbindPopup(),u.unbindTooltip(),d()}),{options:s,methods:u}},Ue=(e,t)=>{if(e&&t.default)return P("div",{style:{display:"none"}},t.default())},$e={...$,interactive:{type:Boolean,default:void 0},bubblingMouseEvents:{type:Boolean,default:void 0}},Oe={...$e,stroke:{type:Boolean,default:void 0},color:{type:String},weight:{type:Number},opacity:{type:Number},lineCap:{type:String},lineJoin:{type:String},dashArray:{type:String},dashOffset:{type:String},fill:{type:Boolean,default:void 0},fillColor:{type:String},fillOpacity:{type:Number},fillRule:{type:String},className:{type:String}},qe={...Oe,radius:{type:Number},latLng:{type:[Object,Array],required:!0,custom:!0}};({...qe});const q={...H,position:{type:String}},Ze=(e,t)=>{const{options:n,methods:o}=F(e),l=E(e,q,n),a={...o,setPosition(r){t.value&&t.value.setPosition(r)}};return oe(()=>{t.value&&t.value.remove()}),{options:l,methods:a}},Ge=e=>e.default?P("div",{ref:"root"},e.default()):null;B({name:"LControl",props:{...q,disableClickPropagation:{type:Boolean,custom:!0,default:!0},disableScrollPropagation:{type:Boolean,custom:!0,default:!1}},setup(e,t){const n=v(),o=v(),l=j(N),a=L(be),{options:r,methods:s}=Ze(e,n);return R(async()=>{const{Control:p,DomEvent:d}=l?A.L:await _(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]),u=p.extend({onAdd(){return o.value}});n.value=M(new u(r)),I(s,n.value,e),a({leafletObject:n.value}),e.disableClickPropagation&&o.value&&d.disableClickPropagation(o.value),e.disableScrollPropagation&&o.value&&d.disableScrollPropagation(o.value),x(()=>t.emit("ready",n.value))}),{root:o,leafletObject:n}},render(){return Ge(this.$slots)}});({...q});({...q});({...q});({...q});const Te={...$};({...Te});({...Te});const ae={...$,opacity:{type:Number},zIndex:{type:Number},tileSize:{type:[Number,Array,Object]},noWrap:{type:Boolean,default:void 0},minZoom:{type:Number},maxZoom:{type:Number},className:{type:String}},Ce=(e,t,n)=>{const{options:o,methods:l}=Se(e,t,n),a=E(e,ae,o),r={...l,setTileComponent(){var s;(s=t.value)==null||s.redraw()}};return oe(()=>{t.value.off()}),{options:a,methods:r}},He=(e,t,n,o)=>e.extend({initialize(l){this.tileComponents={},this.on("tileunload",this._unloadTile),n.setOptions(this,l)},createTile(l){const a=this._tileCoordsToKey(l);this.tileComponents[a]=t.create("div");const r=P({setup:o,props:["coords"]},{coords:l});return Re(r,this.tileComponents[a]),this.tileComponents[a]},_unloadTile(l){const a=this._tileCoordsToKey(l.coords);this.tileComponents[a]&&(this.tileComponents[a].innerHTML="",this.tileComponents[a]=void 0)}});B({props:{...ae,childRender:{type:Function,required:!0}},setup(e,t){const n=v(),o=v(null),l=v(!1),a=j(N),r=L(G),{options:s,methods:p}=Ce(e,n,t);return R(async()=>{const{GridLayer:d,DomUtil:u,Util:c}=a?A.L:await _(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]),g=He(d,u,c,e.childRender);n.value=M(new g(s));const{listeners:f}=U(t.attrs);n.value.on(f),I(p,n.value,e),r({...e,...p,leafletObject:n.value}),l.value=!0,x(()=>t.emit("ready",n.value))}),{root:o,ready:l,leafletObject:n}},render(){return this.ready?P("div",{style:{display:"none"},ref:"root"}):null}});const pe={iconUrl:{type:String},iconRetinaUrl:{type:String},iconSize:{type:[Object,Array]},iconAnchor:{type:[Object,Array]},popupAnchor:{type:[Object,Array]},tooltipAnchor:{type:[Object,Array]},shadowUrl:{type:String},shadowRetinaUrl:{type:String},shadowSize:{type:[Object,Array]},shadowAnchor:{type:[Object,Array]},bgPos:{type:[Object,Array]},className:{type:String}},Fe=B({name:"LIcon",props:{...pe,...H},setup(e,t){const n=v(),o=j(N),l=L(ve),a=L(ge),r=L(he);let s,p,d,u,c;const g=(O,m,b)=>{const h=O&&O.innerHTML;if(!m){b&&c&&l()&&a(h);return}const{listeners:k}=U(t.attrs);c&&p(c,k);const{options:Y}=F(e),T=E(e,pe,Y);h&&(T.html=h),c=T.html?d(T):u(T),s(c,k),r(c)},f=()=>{x(()=>g(n.value,!0,!1))},S=()=>{x(()=>g(n.value,!1,!0))},z={setIconUrl:f,setIconRetinaUrl:f,setIconSize:f,setIconAnchor:f,setPopupAnchor:f,setTooltipAnchor:f,setShadowUrl:f,setShadowRetinaUrl:f,setShadowAnchor:f,setBgPos:f,setClassName:f,setHtml:f};return R(async()=>{const{DomEvent:O,divIcon:m,icon:b}=o?A.L:await _(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]);s=O.on,p=O.off,d=m,u=b,I(z,{},e),new MutationObserver(S).observe(n.value,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),f()}),{root:n}},render(){const e=this.$slots.default?this.$slots.default():void 0;return P("div",{ref:"root"},e)}});({...$});function Ae(e,t,n){var o,l,a;t===void 0&&(t=50),n===void 0&&(n={});var r=(o=n.isImmediate)!=null&&o,s=(l=n.callback)!=null&&l,p=n.maxWait,d=Date.now(),u=[];function c(){if(p!==void 0){var f=Date.now()-d;if(f+t>=p)return p-f}return t}var g=function(){var f=[].slice.call(arguments),S=this;return new Promise(function(z,O){var m=r&&a===void 0;if(a!==void 0&&clearTimeout(a),a=setTimeout(function(){if(a=void 0,d=Date.now(),!r){var h=e.apply(S,f);s&&s(h),u.forEach(function(k){return(0,k.resolve)(h)}),u=[]}},c()),m){var b=e.apply(S,f);return s&&s(b),z(b)}u.push({resolve:z,reject:O})})};return g.cancel=function(f){a!==void 0&&clearTimeout(a),u.forEach(function(S){return(0,S.reject)(f)}),u=[]},g}const ce={...H,center:{type:[Object,Array]},bounds:{type:[Array,Object]},maxBounds:{type:[Array,Object]},zoom:{type:Number},minZoom:{type:Number},maxZoom:{type:Number},paddingBottomRight:{type:[Object,Array]},paddingTopLeft:{type:Object},padding:{type:Object},worldCopyJump:{type:Boolean,default:void 0},crs:{type:[String,Object]},maxBoundsViscosity:{type:Number},inertia:{type:Boolean,default:void 0},inertiaDeceleration:{type:Number},inertiaMaxSpeed:{type:Number},easeLinearity:{type:Number},zoomAnimation:{type:Boolean,default:void 0},zoomAnimationThreshold:{type:Number},fadeAnimation:{type:Boolean,default:void 0},markerZoomAnimation:{type:Boolean,default:void 0},noBlockingAnimations:{type:Boolean,default:void 0},useGlobalLeaflet:{type:Boolean,default:!0,custom:!0}},We=B({inheritAttrs:!1,emits:["ready","update:zoom","update:center","update:bounds"],props:ce,setup(e,t){const n=v(),o=je({ready:!1,layersToAdd:[],layersInControl:[]}),{options:l}=F(e),a=E(e,ce,l),{listeners:r,attrs:s}=U(t.attrs),p=J(G),d=J(me),u=J(be),c=J(De);C(N,e.useGlobalLeaflet);const g=W(()=>{const m={};return e.noBlockingAnimations&&(m.animate=!1),m}),f=W(()=>{const m=g.value;return e.padding&&(m.padding=e.padding),e.paddingTopLeft&&(m.paddingTopLeft=e.paddingTopLeft),e.paddingBottomRight&&(m.paddingBottomRight=e.paddingBottomRight),m}),S={moveend:Ae(m=>{o.leafletRef&&(t.emit("update:zoom",o.leafletRef.getZoom()),t.emit("update:center",o.leafletRef.getCenter()),t.emit("update:bounds",o.leafletRef.getBounds()))}),overlayadd(m){const b=o.layersInControl.find(h=>h.name===m.name);b&&b.updateVisibleProp(!0)},overlayremove(m){const b=o.layersInControl.find(h=>h.name===m.name);b&&b.updateVisibleProp(!1)}};R(async()=>{e.useGlobalLeaflet&&(A.L=A.L||await _(()=>import("./leaflet-src-r9KgTLRM.js").then(i=>i.l),[]));const{map:m,CRS:b,Icon:h,latLngBounds:k,latLng:Y,stamp:T}=e.useGlobalLeaflet?A.L:await _(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]);try{a.beforeMapMount&&await a.beforeMapMount()}catch(i){console.error(`The following error occurred running the provided beforeMapMount hook ${i.message}`)}await ke(h);const xe=typeof a.crs=="string"?b[a.crs]:a.crs;a.crs=xe||b.EPSG3857;const Z={addLayer(i){i.layerType!==void 0&&(o.layerControl===void 0?o.layersToAdd.push(i):o.layersInControl.find(y=>T(y.leafletObject)===T(i.leafletObject))||(o.layerControl.addLayer(i),o.layersInControl.push(i))),i.visible!==!1&&o.leafletRef.addLayer(i.leafletObject)},removeLayer(i){i.layerType!==void 0&&(o.layerControl===void 0?o.layersToAdd=o.layersToAdd.filter(y=>y.name!==i.name):(o.layerControl.removeLayer(i.leafletObject),o.layersInControl=o.layersInControl.filter(y=>T(y.leafletObject)!==T(i.leafletObject)))),o.leafletRef.removeLayer(i.leafletObject)},registerLayerControl(i){o.layerControl=i,o.layersToAdd.forEach(y=>{o.layerControl.addLayer(y)}),o.layersToAdd=[],u(i)},registerControl(i){o.leafletRef.addControl(i.leafletObject)},setZoom(i){const y=o.leafletRef.getZoom();i!==y&&o.leafletRef.setZoom(i,g.value)},setCrs(i){const y=o.leafletRef.getBounds();o.leafletRef.options.crs=i,o.leafletRef.fitBounds(y,{animate:!1,padding:[0,0]})},fitBounds(i){o.leafletRef.fitBounds(i,f.value)},setBounds(i){if(!i)return;const y=k(i);y.isValid()&&!(o.lastSetBounds||o.leafletRef.getBounds()).equals(y,0)&&(o.lastSetBounds=y,o.leafletRef.fitBounds(y))},setCenter(i){if(i==null)return;const y=Y(i),re=o.lastSetCenter||o.leafletRef.getCenter();(re.lat!==y.lat||re.lng!==y.lng)&&(o.lastSetCenter=y,o.leafletRef.panTo(y,g.value))}};K(p,Z.addLayer),K(d,Z.removeLayer),K(u,Z.registerControl),K(c,Z.registerLayerControl),o.leafletRef=M(m(n.value,a)),I(Z,o.leafletRef,e),de(o.leafletRef,S),de(o.leafletRef,r),o.ready=!0,x(()=>t.emit("ready",o.leafletRef))}),ne(()=>{ye(S),o.leafletRef&&(o.leafletRef.off(),o.leafletRef.remove())});const z=W(()=>o.leafletRef),O=W(()=>o.ready);return{root:n,ready:O,leafletObject:z,attrs:s}},render({attrs:e}){return e.style||(e.style={}),e.style.width||(e.style.width="100%"),e.style.height||(e.style.height="100%"),P("div",{...e,ref:"root"},this.ready&&this.$slots.default?this.$slots.default():{})}}),Je=["Symbol(Comment)","Symbol(Text)"],Ke=["LTooltip","LPopup"],Be={...$,draggable:{type:Boolean,default:void 0},icon:{type:[Object]},zIndexOffset:{type:Number},latLng:{type:[Object,Array],custom:!0,required:!0}},Xe=(e,t,n)=>{const{options:o,methods:l}=Se(e,t,n),a=E(e,Be,o),r={...l,setDraggable(s){t.value.dragging&&(s?t.value.dragging.enable():t.value.dragging.disable())},latLngSync(s){n.emit("update:latLng",s.latlng),n.emit("update:lat-lng",s.latlng)},setLatLng(s){if(s!=null&&t.value){const p=t.value.getLatLng();(!p||!p.equals(s))&&t.value.setLatLng(s)}}};return{options:a,methods:r}},Qe=(e,t)=>{const n=t.slots.default&&t.slots.default();return n&&n.length&&n.some(Ye)};function Ye(e){return!(Je.includes(e.type.toString())||Ke.includes(e.type.name))}const et=B({name:"LMarker",props:Be,setup(e,t){const n=v(),o=v(!1),l=j(N),a=L(G);C(ve,()=>{var d;return!!((d=n.value)!=null&&d.getElement())}),C(ge,d=>{var u,c;const g=w((u=n.value)==null?void 0:u.getElement)&&((c=n.value)==null?void 0:c.getElement());g&&(g.innerHTML=d)}),C(he,d=>{var u;return((u=n.value)==null?void 0:u.setIcon)&&n.value.setIcon(d)});const{options:r,methods:s}=Xe(e,n,t),p={moveHandler:Ae(s.latLngSync)};return R(async()=>{const{marker:d,divIcon:u}=l?A.L:await _(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]);Qe(r,t)&&(r.icon=u({className:""})),n.value=M(d(e.latLng,r));const{listeners:c}=U(t.attrs);n.value.on(c),n.value.on("move",p.moveHandler),I(s,n.value,e),a({...e,...s,leafletObject:n.value}),o.value=!0,x(()=>t.emit("ready",n.value))}),ne(()=>ye(p)),{ready:o,leafletObject:n}},render(){return Ue(this.ready,this.$slots)}}),tt={...Oe,smoothFactor:{type:Number},noClip:{type:Boolean,default:void 0},latLngs:{type:Array,required:!0,custom:!0}},fe={...tt},we={...H,content:{type:String,default:null}},nt=(e,t)=>{const{options:n,methods:o}=F(e),l={...o,setContent(a){t.value&&a!==null&&a!==void 0&&t.value.setContent(a)}};return{options:n,methods:l}},ot=e=>e.default?P("div",{ref:"root"},e.default()):null;({...we});({...fe,latLngs:{...fe.latLngs}});const le={...ae,tms:{type:Boolean,default:void 0},subdomains:{type:[String,Array],validator:e=>typeof e=="string"?!0:Array.isArray(e)?e.every(t=>typeof t=="string"):!1},detectRetina:{type:Boolean,default:void 0},url:{type:String,required:!0,custom:!0}},at=(e,t,n)=>{const{options:o,methods:l}=Ce(e,t,n),a=E(e,le,o),r={...l};return{options:a,methods:r}},lt=B({props:le,setup(e,t){const n=v(),o=j(N),l=L(G),{options:a,methods:r}=at(e,n,t);return R(async()=>{const{tileLayer:s}=o?A.L:await _(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]);n.value=M(s(e.url,a));const{listeners:p}=U(t.attrs);n.value.on(p),I(r,n.value,e),l({...e,...r,leafletObject:n.value}),x(()=>t.emit("ready",n.value))}),{leafletObject:n}},render(){return null}}),rt={...we},st=(e,t)=>{const{options:n,methods:o}=nt(e,t),l=L(Le);return ne(()=>{l()}),{options:n,methods:o}},it=B({name:"LTooltip",props:rt,setup(e,t){const n=v(),o=v(null),l=j(N),a=L(_e),{options:r,methods:s}=st(e,n);return R(async()=>{const{tooltip:p}=l?A.L:await _(()=>import("./leaflet-src.esm-HdBnhJze.js"),[]);n.value=M(p(r)),I(s,n.value,e);const{listeners:d}=U(t.attrs);n.value.on(d),n.value.setContent(e.content||o.value||""),a(n.value),x(()=>t.emit("ready",n.value))}),{root:o,leafletObject:n}},render(){return ot(this.$slots)}});({...le});const ut="/waste-tracker/assets/trashmarker-ClbpahV5.png",dt={class:"fixed top-0 right-0 w-full h-screen z-[0]"},pt={class:"fixed top-0 right-0"},ct=B({__name:"Map",setup(e){const t=v(16),n=v([[13.770002456596833,460.5888676643372],[13.78392380181997,460.5827575922013]]),o=l=>{console.log(l),n.value.push([l.latlng.lat,l.latlng.lng]),n.value=n.value.map(a=>a),console.log(n.value)};return(l,a)=>(X(),te(ue,null,[Q("div",dt,[V(D(We),{ref:"map",zoom:t.value,"onUpdate:zoom":a[0]||(a[0]=r=>t.value=r),center:[13.771513,460.586636],onClick:o},{default:ee(()=>[V(D(lt),{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png","layer-type":"base",name:"OpenStreetMap"}),(X(!0),te(ue,null,Pe(n.value,r=>(X(),Ie(D(et),{"lat-lng":r,class:"pointer-events-none"},{default:ee(()=>[V(D(Fe),{"icon-url":D(ut),"icon-size":[60,60]},null,8,["icon-url"]),V(D(it),{class:"pointer-events-none"},{default:ee(()=>a[1]||(a[1]=[Ee(" trash ")])),_:1})]),_:2},1032,["lat-lng"]))),256))]),_:1},8,["zoom"])]),Q("div",pt,ie(n.value)+" "+ie(t.value),1)],64))}}),ft={class:"overflow-hidden relative w-full h-screen bg-slate-200",role:"region","aria-label":"Map Two Container"},yt={class:"absolute"},bt=B({__name:"MapView",props:{title:{}},setup(e){return(t,n)=>(X(),te("div",ft,[V(ct),Q("div",yt,[V(Ne)]),n[0]||(n[0]=Q("div",{class:"absolute px-16 pt-24 pb-20 text-4xl font-bold text-center text-black bg-slate-400 bottom-[60px] min-w-[266px] right-[52px] rounded-[40px] max-md:right-10 max-md:bottom-10 max-md:px-10 max-md:py-16 max-md:text-3xl max-sm:right-5 max-sm:bottom-5 max-sm:px-8 max-sm:py-10 max-sm:text-2xl max-sm:min-w-[200px]",role:"heading","aria-level":"1",tabindex:"0"}," Map 2 ",-1))]))}});export{bt as default};
