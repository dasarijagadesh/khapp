/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[15],{336:function(Ca,va,aa){aa.r(va);var pa=aa(2),ja=aa(0);aa.n(ja);Ca=aa(70);aa=aa(283);Ca=function(la){function fa(ca,z,w){z=la.call(this,ca,z,w)||this;z.db=ca;return z}Object(pa.c)(fa,la);fa.prototype.request=function(ca){var z=this;Object(ja.each)(ca,function(w){z.db.get(w,function(r,b,a){return r?z.trigger("partReady",{Sa:w,error:r}):z.trigger("partReady",{Sa:w,data:b,Cg:!1,Ue:!1,error:null,kc:a})})})};fa.prototype.ip=function(ca){ca()};
return fa}(Ca.a);Object(aa.a)(Ca);Object(aa.b)(Ca);va["default"]=Ca}}]);}).call(this || window)