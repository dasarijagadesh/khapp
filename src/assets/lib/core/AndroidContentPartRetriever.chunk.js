/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[4],{328:function(Ca,va,aa){aa.r(va);var pa=aa(2),ja=aa(187);Ca=aa(324);aa=aa(283);var la=window,fa=function(ca){function z(w,r){var b=ca.call(this,w,r)||this;b.url=w;b.range=r;b.request=new XMLHttpRequest;b.request.open("GET",b.url,!0);la.Uint8Array&&(b.request.responseType="arraybuffer");b.request.setRequestHeader("X-Requested-With","XMLHttpRequest");b.status=ja.a.NOT_STARTED;return b}Object(pa.c)(z,ca);return z}(Ca.ByteRangeRequest);
Ca=function(ca){function z(w,r,b,a){w=ca.call(this,w,r,b,a)||this;w.Vs=fa;return w}Object(pa.c)(z,ca);z.prototype.dr=function(w,r){return w+"/bytes="+r.start+","+(r.stop?r.stop:"")};return z}(Ca["default"]);Object(aa.a)(Ca);Object(aa.b)(Ca);va["default"]=Ca}}]);}).call(this || window)
