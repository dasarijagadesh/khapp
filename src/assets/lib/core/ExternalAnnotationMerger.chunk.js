/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{339:function(Ca,va,aa){aa.r(va);var pa=aa(2),ja=aa(365),la=aa(366),fa;(function(ca){ca[ca.EXTERNAL_XFDF_NOT_REQUESTED=0]="EXTERNAL_XFDF_NOT_REQUESTED";ca[ca.EXTERNAL_XFDF_NOT_AVAILABLE=1]="EXTERNAL_XFDF_NOT_AVAILABLE";ca[ca.EXTERNAL_XFDF_AVAILABLE=2]="EXTERNAL_XFDF_AVAILABLE"})(fa||(fa={}));Ca=function(){function ca(z){this.aa=z;this.state=fa.EXTERNAL_XFDF_NOT_REQUESTED}ca.prototype.M_=function(){var z=this;return function(w,
r,b){return Object(pa.b)(z,void 0,void 0,function(){var a,e,f,x,n,h,y,ba=this,ka;return Object(pa.d)(this,function(ha){switch(ha.label){case 0:if(this.state!==fa.EXTERNAL_XFDF_NOT_REQUESTED)return[3,2];a=this.aa.getDocument().Eo();return[4,this.uZ(a)];case 1:e=ha.ia(),f=this.cW(e),this.HB=null!==(ka=null===f||void 0===f?void 0:f.parse())&&void 0!==ka?ka:null,this.state=null===this.HB?fa.EXTERNAL_XFDF_NOT_AVAILABLE:fa.EXTERNAL_XFDF_AVAILABLE,ha.label=2;case 2:if(this.state===fa.EXTERNAL_XFDF_NOT_AVAILABLE)return b(w),
[2];x=new DOMParser;n=x.parseFromString(w,"text/xml");r.forEach(function(ia){ba.merge(n,ba.HB,ia-1)});h=new XMLSerializer;y=h.serializeToString(n);b(y);return[2]}})})}};ca.prototype.HE=function(z){this.uZ=z};ca.prototype.Bd=function(){this.HB=void 0;this.state=fa.EXTERNAL_XFDF_NOT_REQUESTED};ca.prototype.cW=function(z){return z?Array.isArray(z)?new ja.a(z):"string"!==typeof z?null:(new DOMParser).parseFromString(z,"text/xml").querySelector("xfdf > add")?new ja.a(z):new la.a(z):null};ca.prototype.merge=
function(z,w,r){var b=this;0===r&&(this.T1(z,w.Xl),this.V1(z,w.vB));var a=w.ba[r];a&&(this.W1(z,a.ek),this.Y1(z,a.qQ,w.tr),this.X1(z,a.page,r),this.U1(z,a.pJ));a=this.aa.nc();if(r===a-1){var e=w.tr;Object.keys(e).forEach(function(f){e[f].JC||b.oM(z,f,e[f])})}};ca.prototype.T1=function(z,w){null!==w&&(z=this.Oq(z),this.en(z,"calculation-order",w))};ca.prototype.V1=function(z,w){null!==w&&(z=this.Oq(z),this.en(z,"document-actions",w))};ca.prototype.W1=function(z,w){var r=this,b=this.Nq(z.querySelector("xfdf"),
"annots");Object.keys(w).forEach(function(a){r.en(b,'[name="'+a+'"]',w[a])})};ca.prototype.Y1=function(z,w,r){var b=this;if(0!==w.length){var a=this.Oq(z);w.forEach(function(e){var f=e.getAttribute("field"),x=r[f];x&&(b.oM(z,f,x),b.en(a,"null",e))})}};ca.prototype.oM=function(z,w,r){var b=this.Oq(z);null!==r.uw&&this.en(b,'ffield [name="'+w+'"]',r.uw);z=this.Nq(z.querySelector("xfdf"),"fields");w=w.split(".");this.aE(z,w,0,r.value);r.JC=!0};ca.prototype.X1=function(z,w,r){null!==w&&(z=this.Oq(z),
z=this.Nq(z,"pages"),this.en(z,'[number="'+(r+1)+'"]',w))};ca.prototype.U1=function(z,w){Object.keys(w).forEach(function(r){(r=z.querySelector('annots [name="'+r+'"]'))&&r.parentElement.removeChild(r)})};ca.prototype.aE=function(z,w,r,b){if(r===w.length)w=document.createElementNS("","value"),w.textContent=b,this.en(z,"value",w);else{var a=w[r];this.Nq(z,'[name="'+a+'"]',"field").setAttribute("name",a);z=z.querySelectorAll('[name="'+a+'"]');1===z.length?this.aE(z[0],w,r+1,b):(a=this.DY(z),this.aE(r===
w.length-1?a:this.R7(z,a),w,r+1,b))}};ca.prototype.DY=function(z){for(var w=null,r=0;r<z.length;r++){var b=z[r];if(0===b.childElementCount||1===b.childElementCount&&"value"===b.children[0].tagName){w=b;break}}return w};ca.prototype.R7=function(z,w){for(var r=0;r<z.length;r++)if(z[r]!==w)return z[r];return null};ca.prototype.en=function(z,w,r){w=z.querySelector(w);null!==w&&z.removeChild(w);z.appendChild(r)};ca.prototype.Oq=function(z){var w=z.querySelector("pdf-info");if(null!==w)return w;w=this.Nq(z.querySelector("xfdf"),
"pdf-info");w.setAttribute("xmlns","http://www.pdftron.com/pdfinfo");w.setAttribute("version","2");w.setAttribute("import-version","3");return w};ca.prototype.Nq=function(z,w,r){var b=z.querySelector(w);if(null!==b)return b;b=document.createElementNS("",r||w);z.appendChild(b);return b};return ca}();va["default"]=Ca},351:function(Ca,va){Ca=function(){function aa(){}aa.prototype.kv=function(pa){var ja={Xl:null,vB:null,tr:{},ba:{}};pa=(new DOMParser).parseFromString(pa,"text/xml");ja.Xl=pa.querySelector("pdf-info calculation-order");
ja.vB=pa.querySelector("pdf-info document-actions");ja.tr=this.S2(pa);ja.ba=this.e3(pa);return ja};aa.prototype.S2=function(pa){var ja=pa.querySelector("fields");pa=pa.querySelectorAll("pdf-info > ffield");if(null===ja&&null===pa)return{};var la={};this.eU(la,ja);this.bU(la,pa);return la};aa.prototype.eU=function(pa,ja){if(null!==ja&&ja.children){for(var la=[],fa=0;fa<ja.children.length;fa++){var ca=ja.children[fa];la.push({name:ca.getAttribute("name"),element:ca})}for(;0!==la.length;)for(ja=la.shift(),
fa=0;fa<ja.element.children.length;fa++)ca=ja.element.children[fa],"value"===ca.tagName?pa[ja.name]={value:ca.textContent,uw:null,JC:!1}:ca.children&&la.push({name:ja.name+"."+ca.getAttribute("name"),element:ca})}};aa.prototype.bU=function(pa,ja){ja.forEach(function(la){var fa=la.getAttribute("name");pa[fa]?pa[fa].uw=la:pa[fa]={value:null,uw:la,JC:!1}})};aa.prototype.e3=function(pa){var ja=this,la={};pa.querySelectorAll("pdf-info widget").forEach(function(fa){var ca=parseInt(fa.getAttribute("page"),
10)-1;ja.ox(la,ca);la[ca].qQ.push(fa)});pa.querySelectorAll("pdf-info page").forEach(function(fa){var ca=parseInt(fa.getAttribute("number"),10)-1;ja.ox(la,ca);la[ca].page=fa});this.FK(pa).forEach(function(fa){var ca=parseInt(fa.getAttribute("page"),10),z=fa.getAttribute("name");ja.ox(la,ca);la[ca].ek[z]=fa});this.rK(pa).forEach(function(fa){var ca=parseInt(fa.getAttribute("page"),10);fa=fa.textContent;ja.ox(la,ca);la[ca].pJ[fa]=!0});return la};aa.prototype.ox=function(pa,ja){pa[ja]||(pa[ja]={ek:{},
pJ:{},qQ:[],page:null})};return aa}();va.a=Ca},365:function(Ca,va,aa){var pa=aa(2),ja=aa(0);aa.n(ja);Ca=function(la){function fa(ca){var z=la.call(this)||this;z.sY=Array.isArray(ca)?ca:[ca];return z}Object(pa.c)(fa,la);fa.prototype.parse=function(){var ca=this,z={Xl:null,vB:null,tr:{},ba:{}};this.sY.forEach(function(w){z=Object(ja.merge)(z,ca.kv(w))});return z};fa.prototype.FK=function(ca){var z=[];ca.querySelectorAll("add > *").forEach(function(w){z.push(w)});ca.querySelectorAll("modify > *").forEach(function(w){z.push(w)});
return z};fa.prototype.rK=function(ca){return ca.querySelectorAll("delete > *")};return fa}(aa(351).a);va.a=Ca},366:function(Ca,va,aa){var pa=aa(2);Ca=function(ja){function la(fa){var ca=ja.call(this)||this;ca.tY=fa;return ca}Object(pa.c)(la,ja);la.prototype.parse=function(){return this.kv(this.tY)};la.prototype.FK=function(fa){return fa.querySelectorAll("annots > *")};la.prototype.rK=function(){return[]};return la}(aa(351).a);va.a=Ca}}]);}).call(this || window)
