webpackJsonp([3],{148:function(n,e){function t(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id=148},178:function(n,e,t){function l(n){var e=a[n];return e?t.e(e[1]).then(function(){return t(e[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var a={"../pages/modal/category/category-modal.module.ngfactory":[429,2],"../pages/modal/expense/expense-modal.module.ngfactory":[431,1],"../pages/modal/pay_method/pay-method-modal.module.ngfactory":[430,0]};l.keys=function(){return Object.keys(a)},l.id=178,n.exports=l},27:function(n,e,t){"use strict";t(5),t(97),t(0);var l={production:!0,api_base_url:"https://slots-tracker.herokuapp.com/"};t.d(e,"a",function(){return a});var a=function(){function n(n){this.http=n,this.baseURL=l.api_base_url}return n.prototype.getExpenses=function(){return this.http.get(this.baseURL+"expenses/")},n.prototype.getPayMethods=function(){return this.http.get(this.baseURL+"pay_methods/")},n.prototype.getCategories=function(){return this.http.get(this.baseURL+"categories/")},n.prototype.getChartsData=function(){return this.http.get(this.baseURL+"charts/")},n.prototype.createOrUpdateExpense=function(n){var e=this.get_id(n);this.clean_data(n);var t=this.baseURL+"expenses/";return e?(t+=e,this.http.put(t,n)):this.http.post(t,n)},n.prototype.createOrUpdatePayMethod=function(n){var e=this.get_id(n);this.clean_data(n);var t=this.baseURL+"pay_methods/";return e?(t+=e,this.http.put(t,n)):this.http.post(t,n)},n.prototype.createOrUpdateCategory=function(n){var e=this.get_id(n);this.clean_data(n);var t=this.baseURL+"categories/";return e?(t+=e,this.http.put(t,n)):this.http.post(t,n)},n.prototype.get_id=function(n){if(this.data_has_id(n))return n._id},n.prototype.data_has_id=function(n){return!(!n||!n._id)},n.prototype.clean_data=function(n){this.data_has_id(n)&&delete n._id},n}()},341:function(n,e,t){"use strict";function l(n){return b["ɵvid"](0,[b["ɵqud"](402653184,1,{nav:0}),(n()(),b["ɵted"](-1,null,["\n"])),(n()(),b["ɵeld"](2,0,null,null,2,"ion-nav",[["swipeBackEnabled","false"]],null,null,null,T.b,T.a)),b["ɵprd"](6144,null,B.a,null,[$.a]),b["ɵdid"](4,4374528,[[1,4],["content",4]],0,$.a,[[2,Z.a],[2,S.a],H.a,V.a,X.a,b.ElementRef,b.NgZone,b.Renderer,b.ComponentFactoryResolver,K.l,J.a,[2,G.a],Q.a,b.ErrorHandler],{swipeBackEnabled:[0,"swipeBackEnabled"],root:[1,"root"]},null),(n()(),b["ɵted"](-1,null,["\n"]))],function(n,e){n(e,4,0,"false",e.component.rootPage)},null)}function a(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,24,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(n,e,t){var l=!0;if("click"===e){l=!1!==n.component.createOrUpdateExpense(n.context.$implicit)&&l}return l},nn.b,nn.a)),b["ɵdid"](1,1097728,null,3,en.a,[tn.a,V.a,b.ElementRef,b.Renderer,[2,ln.a]],null,null),b["ɵqud"](335544320,1,{contentLabel:0}),b["ɵqud"](603979776,2,{_buttons:1}),b["ɵqud"](603979776,3,{_icons:1}),b["ɵdid"](5,16384,null,0,an.a,[],null,null),(n()(),b["ɵted"](-1,2,["\n      "])),(n()(),b["ɵeld"](7,0,null,2,1,"h3",[],null,null,null,null,null)),(n()(),b["ɵted"](8,null,["",""])),(n()(),b["ɵted"](-1,2,["\n      "])),(n()(),b["ɵeld"](10,0,null,2,1,"h4",[],null,null,null,null,null)),(n()(),b["ɵted"](11,null,["",""])),(n()(),b["ɵted"](-1,2,["\n      "])),(n()(),b["ɵeld"](13,0,null,2,1,"p",[],null,null,null,null,null)),(n()(),b["ɵted"](14,null,["",""])),(n()(),b["ɵted"](-1,2,["\n      "])),(n()(),b["ɵeld"](16,0,null,4,7,"div",[["item-end",""]],null,null,null,null,null)),(n()(),b["ɵted"](-1,null,["\n        "])),(n()(),b["ɵeld"](18,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),b["ɵted"](19,null,["",""])),(n()(),b["ɵted"](-1,null,["\n        "])),(n()(),b["ɵeld"](21,0,null,null,1,"h4",[["item-end",""]],null,null,null,null,null)),(n()(),b["ɵted"](22,null,["",""])),(n()(),b["ɵted"](-1,null,["\n      "])),(n()(),b["ɵted"](-1,2,["\n    "]))],null,function(n,e){n(e,8,0,e.context.$implicit.description);n(e,11,0,e.context.$implicit.category.name);n(e,14,0,e.context.$implicit.pay_method.name);n(e,19,0,e.context.$implicit.amount);n(e,22,0,e.context.$implicit.timestamp)})}function o(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,22,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,on.b,on.a)),b["ɵdid"](1,4374528,null,0,un.a,[V.a,X.a,Q.a,b.ElementRef,b.Renderer,H.a,sn.a,b.NgZone,[2,Z.a],[2,S.a]],null,null),(n()(),b["ɵted"](-1,1,["\n  "])),(n()(),b["ɵeld"](3,0,null,1,5,"ion-list",[],null,null,null,null,null)),b["ɵdid"](4,16384,null,0,rn.a,[V.a,b.ElementRef,b.Renderer,X.a,K.l,Q.a],null,null),(n()(),b["ɵted"](-1,null,["\n    "])),(n()(),b["ɵand"](16777216,null,null,1,null,a)),b["ɵdid"](7,802816,null,0,_.i,[b.ViewContainerRef,b.TemplateRef,b.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),b["ɵted"](-1,null,["\n  "])),(n()(),b["ɵted"](-1,1,["\n  "])),(n()(),b["ɵeld"](10,0,null,0,11,"ion-fab",[["bottom",""],["right",""]],null,null,null,dn.b,dn.a)),b["ɵdid"](11,1228800,null,2,cn.a,[X.a],null,null),b["ɵqud"](335544320,4,{_mainButton:0}),b["ɵqud"](603979776,5,{_fabLists:1}),(n()(),b["ɵted"](-1,0,["\n    "])),(n()(),b["ɵeld"](15,0,null,0,5,"button",[["ion-fab",""]],null,[[null,"click"]],function(n,e,t){var l=!0;if("click"===e){l=!1!==n.component.createOrUpdateExpense()&&l}return l},pn.b,pn.a)),b["ɵdid"](16,49152,[[4,4]],0,mn.a,[V.a,b.ElementRef,b.Renderer],null,null),(n()(),b["ɵted"](-1,0,["\n      "])),(n()(),b["ɵeld"](18,0,null,0,1,"ion-icon",[["name","add"],["role","img"]],[[2,"hide",null]],null,null,null,null)),b["ɵdid"](19,147456,null,0,fn.a,[V.a,b.ElementRef,b.Renderer],{name:[0,"name"]},null),(n()(),b["ɵted"](-1,0,["\n    "])),(n()(),b["ɵted"](-1,0,["\n  "])),(n()(),b["ɵted"](-1,1,["\n"])),(n()(),b["ɵted"](-1,null,["\n"]))],function(n,e){n(e,7,0,e.component.expenses);n(e,19,0,"add")},function(n,e){n(e,0,0,b["ɵnov"](e,1).statusbarPadding,b["ɵnov"](e,1)._hasRefresher);n(e,18,0,b["ɵnov"](e,19)._hidden)})}function i(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,9,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(n,e,t){var l=!0;if("click"===e){l=!1!==n.component.createOrUpdatePayMethod(n.context.$implicit)&&l}return l},nn.b,nn.a)),b["ɵdid"](1,1097728,null,3,en.a,[tn.a,V.a,b.ElementRef,b.Renderer,[2,ln.a]],null,null),b["ɵqud"](335544320,1,{contentLabel:0}),b["ɵqud"](603979776,2,{_buttons:1}),b["ɵqud"](603979776,3,{_icons:1}),b["ɵdid"](5,16384,null,0,an.a,[],null,null),(n()(),b["ɵted"](-1,2,["\n      "])),(n()(),b["ɵeld"](7,0,null,2,1,"p",[],null,null,null,null,null)),(n()(),b["ɵted"](8,null,["",""])),(n()(),b["ɵted"](-1,2,["\n    "]))],null,function(n,e){n(e,8,0,e.context.$implicit.name)})}function u(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,22,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,on.b,on.a)),b["ɵdid"](1,4374528,null,0,un.a,[V.a,X.a,Q.a,b.ElementRef,b.Renderer,H.a,sn.a,b.NgZone,[2,Z.a],[2,S.a]],null,null),(n()(),b["ɵted"](-1,1,["\n  "])),(n()(),b["ɵeld"](3,0,null,1,5,"ion-list",[],null,null,null,null,null)),b["ɵdid"](4,16384,null,0,rn.a,[V.a,b.ElementRef,b.Renderer,X.a,K.l,Q.a],null,null),(n()(),b["ɵted"](-1,null,["\n    "])),(n()(),b["ɵand"](16777216,null,null,1,null,i)),b["ɵdid"](7,802816,null,0,_.i,[b.ViewContainerRef,b.TemplateRef,b.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),b["ɵted"](-1,null,["\n  "])),(n()(),b["ɵted"](-1,1,["\n\n  "])),(n()(),b["ɵeld"](10,0,null,0,11,"ion-fab",[["bottom",""],["right",""]],null,null,null,dn.b,dn.a)),b["ɵdid"](11,1228800,null,2,cn.a,[X.a],null,null),b["ɵqud"](335544320,4,{_mainButton:0}),b["ɵqud"](603979776,5,{_fabLists:1}),(n()(),b["ɵted"](-1,0,["\n    "])),(n()(),b["ɵeld"](15,0,null,0,5,"button",[["ion-fab",""]],null,[[null,"click"]],function(n,e,t){var l=!0;if("click"===e){l=!1!==n.component.createOrUpdatePayMethod()&&l}return l},pn.b,pn.a)),b["ɵdid"](16,49152,[[4,4]],0,mn.a,[V.a,b.ElementRef,b.Renderer],null,null),(n()(),b["ɵted"](-1,0,["\n      "])),(n()(),b["ɵeld"](18,0,null,0,1,"ion-icon",[["name","add"],["role","img"]],[[2,"hide",null]],null,null,null,null)),b["ɵdid"](19,147456,null,0,fn.a,[V.a,b.ElementRef,b.Renderer],{name:[0,"name"]},null),(n()(),b["ɵted"](-1,0,["\n    "])),(n()(),b["ɵted"](-1,0,["\n  "])),(n()(),b["ɵted"](-1,1,["\n"])),(n()(),b["ɵted"](-1,null,["\n"]))],function(n,e){n(e,7,0,e.component.methods);n(e,19,0,"add")},function(n,e){n(e,0,0,b["ɵnov"](e,1).statusbarPadding,b["ɵnov"](e,1)._hasRefresher);n(e,18,0,b["ɵnov"](e,19)._hidden)})}function s(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,9,"ion-item",[["class","item item-block"]],null,[[null,"click"]],function(n,e,t){var l=!0;if("click"===e){l=!1!==n.component.createOrUpdateCategory(n.context.$implicit)&&l}return l},nn.b,nn.a)),b["ɵdid"](1,1097728,null,3,en.a,[tn.a,V.a,b.ElementRef,b.Renderer,[2,ln.a]],null,null),b["ɵqud"](335544320,1,{contentLabel:0}),b["ɵqud"](603979776,2,{_buttons:1}),b["ɵqud"](603979776,3,{_icons:1}),b["ɵdid"](5,16384,null,0,an.a,[],null,null),(n()(),b["ɵted"](-1,2,["\n      "])),(n()(),b["ɵeld"](7,0,null,2,1,"p",[],null,null,null,null,null)),(n()(),b["ɵted"](8,null,["",""])),(n()(),b["ɵted"](-1,2,["\n    "]))],null,function(n,e){n(e,8,0,e.context.$implicit.name)})}function r(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,22,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,on.b,on.a)),b["ɵdid"](1,4374528,null,0,un.a,[V.a,X.a,Q.a,b.ElementRef,b.Renderer,H.a,sn.a,b.NgZone,[2,Z.a],[2,S.a]],null,null),(n()(),b["ɵted"](-1,1,["\n  "])),(n()(),b["ɵeld"](3,0,null,1,5,"ion-list",[],null,null,null,null,null)),b["ɵdid"](4,16384,null,0,rn.a,[V.a,b.ElementRef,b.Renderer,X.a,K.l,Q.a],null,null),(n()(),b["ɵted"](-1,null,["\n    "])),(n()(),b["ɵand"](16777216,null,null,1,null,s)),b["ɵdid"](7,802816,null,0,_.i,[b.ViewContainerRef,b.TemplateRef,b.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),b["ɵted"](-1,null,["\n  "])),(n()(),b["ɵted"](-1,1,["\n\n  "])),(n()(),b["ɵeld"](10,0,null,0,11,"ion-fab",[["bottom",""],["right",""]],null,null,null,dn.b,dn.a)),b["ɵdid"](11,1228800,null,2,cn.a,[X.a],null,null),b["ɵqud"](335544320,4,{_mainButton:0}),b["ɵqud"](603979776,5,{_fabLists:1}),(n()(),b["ɵted"](-1,0,["\n    "])),(n()(),b["ɵeld"](15,0,null,0,5,"button",[["ion-fab",""]],null,[[null,"click"]],function(n,e,t){var l=!0;if("click"===e){l=!1!==n.component.createOrUpdateCategory()&&l}return l},pn.b,pn.a)),b["ɵdid"](16,49152,[[4,4]],0,mn.a,[V.a,b.ElementRef,b.Renderer],null,null),(n()(),b["ɵted"](-1,0,["\n      "])),(n()(),b["ɵeld"](18,0,null,0,1,"ion-icon",[["name","add"],["role","img"]],[[2,"hide",null]],null,null,null,null)),b["ɵdid"](19,147456,null,0,fn.a,[V.a,b.ElementRef,b.Renderer],{name:[0,"name"]},null),(n()(),b["ɵted"](-1,0,["\n    "])),(n()(),b["ɵted"](-1,0,["\n  "])),(n()(),b["ɵted"](-1,1,["\n"])),(n()(),b["ɵted"](-1,null,["\n"]))],function(n,e){n(e,7,0,e.component.categories);n(e,19,0,"add")},function(n,e){n(e,0,0,b["ɵnov"](e,1).statusbarPadding,b["ɵnov"](e,1)._hasRefresher);n(e,18,0,b["ɵnov"](e,19)._hidden)})}function d(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,1,"ion-tab",[["role","tabpanel"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,kn.b,kn.a)),b["ɵdid"](1,245760,null,0,xn.a,[En.a,H.a,V.a,X.a,b.ElementRef,b.NgZone,b.Renderer,b.ComponentFactoryResolver,b.ChangeDetectorRef,K.l,J.a,[2,G.a],Q.a,b.ErrorHandler],{root:[0,"root"],tabTitle:[1,"tabTitle"],tabIcon:[2,"tabIcon"]},null)],function(n,e){n(e,1,0,e.context.$implicit,e.context.$implicit.get_title(),e.context.$implicit.get_icon())},function(n,e){n(e,0,0,b["ɵnov"](e,1)._tabId,b["ɵnov"](e,1)._btnId)})}function c(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,10,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,on.b,on.a)),b["ɵdid"](1,4374528,null,0,un.a,[V.a,X.a,Q.a,b.ElementRef,b.Renderer,H.a,sn.a,b.NgZone,[2,Z.a],[2,S.a]],null,null),(n()(),b["ɵted"](-1,1,["\n  "])),(n()(),b["ɵeld"](3,0,null,1,6,"ion-tabs",[["tabsPlacement","top"]],null,null,null,Pn.b,Pn.a)),b["ɵprd"](6144,null,B.a,null,[En.a]),b["ɵdid"](5,4374528,null,0,En.a,[[2,S.a],[2,Z.a],H.a,V.a,b.ElementRef,X.a,b.Renderer,G.a,sn.a],{tabsPlacement:[0,"tabsPlacement"]},null),(n()(),b["ɵted"](-1,0,[">\n    "])),(n()(),b["ɵand"](16777216,null,0,1,null,d)),b["ɵdid"](8,802816,null,0,_.i,[b.ViewContainerRef,b.TemplateRef,b.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),b["ɵted"](-1,0,["\n  "])),(n()(),b["ɵted"](-1,1,["\n"])),(n()(),b["ɵted"](-1,null,["\n"]))],function(n,e){var t=e.component;n(e,5,0,"top");n(e,8,0,t.pages)},function(n,e){n(e,0,0,b["ɵnov"](e,1).statusbarPadding,b["ɵnov"](e,1)._hasRefresher)})}function p(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,13,"ion-item",[["class","item item-block"]],null,null,null,nn.b,nn.a)),b["ɵdid"](1,1097728,null,3,en.a,[tn.a,V.a,b.ElementRef,b.Renderer,[2,ln.a]],null,null),b["ɵqud"](335544320,1,{contentLabel:0}),b["ɵqud"](603979776,2,{_buttons:1}),b["ɵqud"](603979776,3,{_icons:1}),b["ɵdid"](5,16384,null,0,an.a,[],null,null),(n()(),b["ɵted"](-1,2,["\n      "])),(n()(),b["ɵeld"](7,0,null,2,5,"div",[["style","display: block;"]],null,null,null,null,null)),(n()(),b["ɵted"](-1,null,["\n        "])),(n()(),b["ɵeld"](9,0,null,null,2,"canvas",[["baseChart",""]],null,null,null,null,null)),b["ɵdid"](10,737280,null,0,Mn.BaseChartDirective,[b.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"]},null),(n()(),b["ɵted"](-1,null,['\n          title="XXXX"\n        '])),(n()(),b["ɵted"](-1,null,["\n      "])),(n()(),b["ɵted"](-1,2,["\n    "]))],function(n,e){n(e,10,0,e.context.$implicit.data,e.context.$implicit.labels,e.context.$implicit.options,e.context.$implicit.type)},null)}function m(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),b["ɵted"](-1,null,["\n    "])),(n()(),b["ɵand"](16777216,null,null,1,null,p)),b["ɵdid"](3,802816,null,0,_.i,[b.ViewContainerRef,b.TemplateRef,b.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),b["ɵted"](-1,null,["\n  "]))],function(n,e){n(e,3,0,e.component.charts_data)},null)}function f(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,5,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,on.b,on.a)),b["ɵdid"](1,4374528,null,0,un.a,[V.a,X.a,Q.a,b.ElementRef,b.Renderer,H.a,sn.a,b.NgZone,[2,Z.a],[2,S.a]],null,null),(n()(),b["ɵted"](-1,1,["\n  "])),(n()(),b["ɵand"](16777216,null,1,1,null,m)),b["ɵdid"](4,16384,null,0,_.j,[b.ViewContainerRef,b.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),b["ɵted"](-1,1,["\n"])),(n()(),b["ɵted"](-1,null,["\n"])),(n()(),b["ɵted"](-1,null,["\n"])),(n()(),b["ɵted"](-1,null,["\n"])),(n()(),b["ɵted"](-1,null,["\n"])),(n()(),b["ɵted"](-1,null,["\n"]))],function(n,e){n(e,4,0,e.component.charts_data)},function(n,e){n(e,0,0,b["ɵnov"](e,1).statusbarPadding,b["ɵnov"](e,1)._hasRefresher)})}Object.defineProperty(e,"__esModule",{value:!0});var h,g=t(43),b=t(0),j=(t(5),t(97)),y=(t(48),t(88)),v=t(89),_=t(13),R=t(27);t(126);!function(n){n[n.Unset=1]="Unset",n[n.Success=2]="Success",n[n.Error=4]="Error"}(h||(h={}));var C=function(){function n(n,e,t,l,a){this.modalCtrl=n,this.api=e,this.datepipe=t,this.toastCtrl=l,this.loadingCtrl=a,this.expenses_state=h.Unset,this.error_msg="",this.getExpenses(),this.loader=this.loadingCtrl.create({content:"Loading data"}),this.loader.present()}return n.get_title=function(){return"Expenses"},n.get_icon=function(){return"pricetags"},n.prototype.createOrUpdateExpense=function(n){var e=this;void 0===n&&(n=void 0),n||(n={amount:void 0,description:"",pay_method:"",category:"",timestamp:this.datepipe.transform(new Date,"yyyy-MM-dd"),one_time:!1});var t=this.modalCtrl.create("ExpenseModalPage",{data:n},{enableBackdropDismiss:!1});t.onDidDismiss(function(n){if(n){if(n.hasOwnProperty("err"))return void e.toastCtrl.create({message:n.err,position:"top",showCloseButton:!0}).present();e.api.createOrUpdateExpense(n).subscribe(function(n){var t=e.expenses.findIndex(function(e){return e._id==n._id});-1!=t?e.expenses[t]=n:e.expenses.unshift(n)})}}),t.present()},n.prototype.deleteExpense=function(n){this.toastCtrl.create({message:"Not implemented yet",duration:3e3,position:"top"}).present()},n.prototype.getExpenses=function(){var n=this;this.api.getExpenses().subscribe(function(e){n.expenses=e,n.expenses_state=h.Success,n.close_loading()},function(e){n.expenses_state=h.Error,n.error_msg=n.error_msg.concat("In getExpenses: ",e.error),n.close_loading()})},n.prototype.close_loading=function(){this.expenses_state!=h.Unset&&(this.loader.dismiss(),this.expenses_state==h.Error&&(this.expenses=void 0,this.toastCtrl.create({message:this.error_msg,position:"top",showCloseButton:!0}).present()))},n}(),k=function(){function n(n,e,t,l){this.modalCtrl=n,this.api=e,this.toastCtrl=t,this.loadingCtrl=l,this.getPayMethods(),this.loader=this.loadingCtrl.create({content:"Loading data"}),this.loader.present()}return n.get_title=function(){return"Pay methods"},n.get_icon=function(){return"logo-yen"},n.prototype.createOrUpdatePayMethod=function(n){var e=this;void 0===n&&(n=void 0),n||(n={name:void 0});var t=this.modalCtrl.create("PayMethodModalPage",{data:n},{enableBackdropDismiss:!1});t.onDidDismiss(function(n){n&&e.api.createOrUpdatePayMethod(n).subscribe(function(n){var t=e.methods.findIndex(function(e){return e._id==n._id});-1!=t?e.methods[t]=n:e.methods.unshift(n)},function(n){e.toastCtrl.create({message:n.error,duration:3e3,position:"top"}).present()})}),t.present()},n.prototype.deletePayMethod=function(n){this.toastCtrl.create({message:"Not implemented yet",duration:3e3,position:"top"}).present()},n.prototype.getPayMethods=function(){var n=this;this.api.getPayMethods().subscribe(function(e){n.methods=e,n.loader.dismiss()},function(e){n.loader.dismiss();n.toastCtrl.create({message:"In getPayMethods: "+e.error,position:"top",showCloseButton:!0}).present()})},n}(),x=function(){function n(n,e,t,l){this.modalCtrl=n,this.api=e,this.toastCtrl=t,this.loadingCtrl=l,this.getCategories(),this.loader=this.loadingCtrl.create({content:"Loading data"}),this.loader.present()}return n.get_title=function(){return"Categories"},n.get_icon=function(){return"apps"},n.prototype.createOrUpdateCategory=function(n){var e=this;void 0===n&&(n=void 0),n||(n={name:void 0});var t=this.modalCtrl.create("CategoryModalPage",{data:n},{enableBackdropDismiss:!1});t.onDidDismiss(function(n){n&&e.api.createOrUpdateCategory(n).subscribe(function(n){var t=e.categories.findIndex(function(e){return e._id==n._id});-1!=t?e.categories[t]=n:e.categories.unshift(n)},function(n){e.toastCtrl.create({message:n.error,duration:3e3,position:"top"}).present()})}),t.present()},n.prototype.deleteCategory=function(n){this.toastCtrl.create({message:"Not implemented yet",duration:3e3,position:"top"}).present()},n.prototype.getCategories=function(){var n=this;this.api.getCategories().subscribe(function(e){n.categories=e,n.loader.dismiss()},function(e){n.loader.dismiss();n.toastCtrl.create({message:"In getCategories: "+e.error,position:"top",showCloseButton:!0}).present()})},n}(),E=(t(378),function(){function n(n,e,t){this.api=n,this.loadingCtrl=e,this.toastCtrl=t,this.getChartsData(),this.loader=this.loadingCtrl.create({content:"Loading data"}),this.loader.present()}return n.get_title=function(){return"Report"},n.get_icon=function(){return"stats"},n.prototype.getChartsData=function(){var n=this;this.api.getChartsData().subscribe(function(e){n.charts_data=e,console.log(n.charts_data),n.loader.dismiss()},function(e){n.loader.dismiss();n.toastCtrl.create({message:"In getCategories: "+e.error,position:"top",showCloseButton:!0}).present()})},n}()),P=function(){return function(){this.pages=[],this.pages=[C,x,k,E]}}(),I=function(){function n(n,e,t){this.platform=n,this.statusBar=e,this.splashScreen=t,this.rootPage=P,this.initializeApp()}return n.prototype.initializeApp=function(){var n=this;this.platform.ready().then(function(){n.statusBar.styleDefault(),n.splashScreen.hide()})},n}(),O=(t(425),function(){return function(){}}()),M=t(62),w=t(332),D=t(333),L=t(334),U=t(335),N=t(336),z=t(337),F=t(338),q=t(339),A=t(340),T=t(426),B=t(34),$=t(66),Z=t(6),S=t(18),H=t(8),V=t(2),X=t(4),K=t(7),J=t(28),G=t(16),Q=t(9),W=b["ɵcrt"]({encapsulation:2,styles:[],data:{}}),Y=b["ɵccf"]("ng-component",I,function(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,1,"ng-component",[],null,null,null,l,W)),b["ɵdid"](1,49152,null,0,I,[X.a,y.a,v.a],null,null)],null,null)},{},{},[]),nn=t(59),en=t(17),tn=t(15),ln=t(30),an=t(42),on=t(60),un=t(21),sn=t(24),rn=t(45),dn=t(128),cn=t(53),pn=t(129),mn=t(40),fn=t(26),hn=t(54),gn=t(47),bn=t(46),jn=b["ɵcrt"]({encapsulation:2,styles:[],data:{}}),yn=b["ɵccf"]("page-expenses",C,function(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,1,"page-expenses",[],null,null,null,o,jn)),b["ɵdid"](1,49152,null,0,C,[hn.a,R.a,_.d,gn.a,bn.a],null,null)],null,null)},{},{},[]),vn=b["ɵcrt"]({encapsulation:2,styles:[],data:{}}),_n=b["ɵccf"]("page-pay-methods",k,function(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,1,"page-pay-methods",[],null,null,null,u,vn)),b["ɵdid"](1,49152,null,0,k,[hn.a,R.a,gn.a,bn.a],null,null)],null,null)},{},{},[]),Rn=b["ɵcrt"]({encapsulation:2,styles:[],data:{}}),Cn=b["ɵccf"]("page-categories",x,function(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,1,"page-categories",[],null,null,null,r,Rn)),b["ɵdid"](1,49152,null,0,x,[hn.a,R.a,gn.a,bn.a],null,null)],null,null)},{},{},[]),kn=t(427),xn=t(85),En=t(55),Pn=t(428),In=b["ɵcrt"]({encapsulation:2,styles:[],data:{}}),On=b["ɵccf"]("page-tabs",P,function(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,1,"page-tabs",[],null,null,null,c,In)),b["ɵdid"](1,49152,null,0,P,[],null,null)],null,null)},{},{},[]),Mn=t(127),wn=b["ɵcrt"]({encapsulation:2,styles:[],data:{}}),Dn=b["ɵccf"]("page-report",E,function(n){return b["ɵvid"](0,[(n()(),b["ɵeld"](0,0,null,null,1,"page-report",[],null,null,null,f,wn)),b["ɵdid"](1,49152,null,0,E,[R.a,bn.a,gn.a],null,null)],null,null)},{},{},[]),Ln=t(111),Un=t(23),Nn=t(101),zn=t(103),Fn=t(110),qn=t(39),An=t(133),Tn=t(64),Bn=t(49),$n=t(71),Zn=t(117),Sn=t(113),Hn=t(200),Vn=t(112),Xn=t(36),Kn=t(109),Jn=t(114),Gn=b["ɵcmf"](O,[M.b],function(n){return b["ɵmod"]([b["ɵmpd"](512,b.ComponentFactoryResolver,b["ɵCodegenComponentFactoryResolver"],[[8,[w.a,D.a,L.a,U.a,N.a,z.a,F.a,q.a,A.a,Y,yn,_n,Cn,On,Dn]],[3,b.ComponentFactoryResolver],b.NgModuleRef]),b["ɵmpd"](5120,b.LOCALE_ID,b["ɵq"],[[3,b.LOCALE_ID]]),b["ɵmpd"](4608,_.l,_.k,[b.LOCALE_ID,[2,_.t]]),b["ɵmpd"](5120,b.APP_ID,b["ɵi"],[]),b["ɵmpd"](5120,b.IterableDiffers,b["ɵn"],[]),b["ɵmpd"](5120,b.KeyValueDiffers,b["ɵo"],[]),b["ɵmpd"](4608,g.c,g.q,[_.c]),b["ɵmpd"](6144,b.Sanitizer,null,[g.c]),b["ɵmpd"](4608,g.f,Ln.a,[]),b["ɵmpd"](5120,g.d,function(n,e,t,l,a){return[new g.k(n,e),new g.o(t),new g.n(l,a)]},[_.c,b.NgZone,_.c,_.c,g.f]),b["ɵmpd"](4608,g.e,g.e,[g.d,b.NgZone]),b["ɵmpd"](135680,g.m,g.m,[_.c]),b["ɵmpd"](4608,g.l,g.l,[g.e,g.m]),b["ɵmpd"](6144,b.RendererFactory2,null,[g.l]),b["ɵmpd"](6144,g.p,null,[g.m]),b["ɵmpd"](4608,b.Testability,b.Testability,[b.NgZone]),b["ɵmpd"](4608,g.h,g.h,[_.c]),b["ɵmpd"](4608,g.i,g.i,[_.c]),b["ɵmpd"](4608,j.h,j.n,[_.c,b.PLATFORM_ID,j.l]),b["ɵmpd"](4608,j.o,j.o,[j.h,j.m]),b["ɵmpd"](5120,j.a,function(n){return[n]},[j.o]),b["ɵmpd"](4608,j.k,j.k,[]),b["ɵmpd"](6144,j.i,null,[j.k]),b["ɵmpd"](4608,j.g,j.g,[j.i]),b["ɵmpd"](6144,j.b,null,[j.g]),b["ɵmpd"](4608,j.f,j.j,[j.b,b.Injector]),b["ɵmpd"](4608,j.c,j.c,[j.f]),b["ɵmpd"](4608,Un.p,Un.p,[]),b["ɵmpd"](4608,Un.d,Un.d,[]),b["ɵmpd"](4608,Nn.a,Nn.a,[H.a,V.a]),b["ɵmpd"](4608,zn.a,zn.a,[H.a,V.a]),b["ɵmpd"](4608,Fn.a,Fn.a,[]),b["ɵmpd"](4608,tn.a,tn.a,[]),b["ɵmpd"](4608,qn.a,qn.a,[X.a]),b["ɵmpd"](4608,sn.a,sn.a,[V.a,X.a,b.NgZone,Q.a]),b["ɵmpd"](4608,bn.a,bn.a,[H.a,V.a]),b["ɵmpd"](5120,_.g,An.c,[_.r,[2,_.a],V.a]),b["ɵmpd"](4608,_.f,_.f,[_.g]),b["ɵmpd"](5120,Tn.b,Tn.d,[H.a,Tn.a]),b["ɵmpd"](5120,G.a,G.b,[H.a,Tn.b,_.f,Bn.b,b.ComponentFactoryResolver]),b["ɵmpd"](4608,hn.a,hn.a,[H.a,V.a,G.a]),b["ɵmpd"](4608,$n.a,$n.a,[H.a,V.a]),b["ɵmpd"](4608,Zn.a,Zn.a,[H.a,V.a,G.a]),b["ɵmpd"](4608,Sn.a,Sn.a,[V.a,X.a,Q.a,H.a,K.l]),b["ɵmpd"](4608,gn.a,gn.a,[H.a,V.a]),b["ɵmpd"](4608,J.a,J.a,[X.a,V.a]),b["ɵmpd"](4608,y.a,y.a,[]),b["ɵmpd"](4608,v.a,v.a,[]),b["ɵmpd"](4608,R.a,R.a,[j.c]),b["ɵmpd"](4608,_.d,_.d,[b.LOCALE_ID]),b["ɵmpd"](512,_.b,_.b,[]),b["ɵmpd"](512,b.ErrorHandler,Hn.a,[]),b["ɵmpd"](256,V.b,{animate:!1},[]),b["ɵmpd"](1024,Vn.a,Vn.b,[]),b["ɵmpd"](1024,X.a,X.b,[g.b,Vn.a,b.NgZone]),b["ɵmpd"](1024,V.a,V.c,[V.b,X.a]),b["ɵmpd"](512,Q.a,Q.a,[X.a]),b["ɵmpd"](512,Xn.a,Xn.a,[]),b["ɵmpd"](512,H.a,H.a,[V.a,X.a,[2,Xn.a]]),b["ɵmpd"](512,K.l,K.l,[H.a]),b["ɵmpd"](256,Tn.a,{links:[{loadChildren:"../pages/modal/category/category-modal.module.ngfactory#ModalPageModuleNgFactory",name:"CategoryModalPage",segment:"category-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/modal/pay_method/pay-method-modal.module.ngfactory#ModalPageModuleNgFactory",name:"PayMethodModalPage",segment:"pay-method-modal",priority:"low",defaultHistory:[]},{loadChildren:"../pages/modal/expense/expense-modal.module.ngfactory#ModalPageModuleNgFactory",name:"ExpenseModalPage",segment:"expense-modal",priority:"low",defaultHistory:[]}]},[]),b["ɵmpd"](512,b.Compiler,b.Compiler,[]),b["ɵmpd"](512,Kn.a,Kn.a,[b.Compiler]),b["ɵmpd"](1024,Bn.b,Bn.c,[Kn.a,b.Injector]),b["ɵmpd"](1024,b.APP_INITIALIZER,function(n,e,t,l,a,o,i,u,s,r,d,c,p){return[g.s(n),Jn.a(e),Fn.b(t,l),Sn.b(a,o,i,u,s),Bn.d(r,d,c,p)]},[[2,b.NgProbeToken],V.a,X.a,Q.a,V.a,X.a,Q.a,H.a,K.l,V.a,Tn.a,Bn.b,b.NgZone]),b["ɵmpd"](512,b.ApplicationInitStatus,b.ApplicationInitStatus,[[2,b.APP_INITIALIZER]]),b["ɵmpd"](131584,b.ApplicationRef,b.ApplicationRef,[b.NgZone,b["ɵConsole"],b.Injector,b.ErrorHandler,b.ComponentFactoryResolver,b.ApplicationInitStatus]),b["ɵmpd"](512,b.ApplicationModule,b.ApplicationModule,[b.ApplicationRef]),b["ɵmpd"](512,g.a,g.a,[[3,g.a]]),b["ɵmpd"](512,j.e,j.e,[]),b["ɵmpd"](512,j.d,j.d,[]),b["ɵmpd"](512,Un.n,Un.n,[]),b["ɵmpd"](512,Un.g,Un.g,[]),b["ɵmpd"](512,Un.m,Un.m,[]),b["ɵmpd"](512,An.a,An.a,[]),b["ɵmpd"](512,Mn.ChartsModule,Mn.ChartsModule,[]),b["ɵmpd"](512,O,O,[]),b["ɵmpd"](256,j.l,"XSRF-TOKEN",[]),b["ɵmpd"](256,j.m,"X-XSRF-TOKEN",[]),b["ɵmpd"](256,M.a,I,[]),b["ɵmpd"](256,_.a,"/",[])])});Object(b.enableProdMode)(),Object(g.j)().bootstrapModuleFactory(Gn)},406:function(n,e,t){function l(n){return t(a(n))}function a(n){var e=o[n];if(!(e+1))throw new Error("Cannot find module '"+n+"'.");return e}var o={"./af":209,"./af.js":209,"./ar":210,"./ar-dz":211,"./ar-dz.js":211,"./ar-kw":212,"./ar-kw.js":212,"./ar-ly":213,"./ar-ly.js":213,"./ar-ma":214,"./ar-ma.js":214,"./ar-sa":215,"./ar-sa.js":215,"./ar-tn":216,"./ar-tn.js":216,"./ar.js":210,"./az":217,"./az.js":217,"./be":218,"./be.js":218,"./bg":219,"./bg.js":219,"./bm":220,"./bm.js":220,"./bn":221,"./bn.js":221,"./bo":222,"./bo.js":222,"./br":223,"./br.js":223,"./bs":224,"./bs.js":224,"./ca":225,"./ca.js":225,"./cs":226,"./cs.js":226,"./cv":227,"./cv.js":227,"./cy":228,"./cy.js":228,"./da":229,"./da.js":229,"./de":230,"./de-at":231,"./de-at.js":231,"./de-ch":232,"./de-ch.js":232,"./de.js":230,"./dv":233,"./dv.js":233,"./el":234,"./el.js":234,"./en-au":235,"./en-au.js":235,"./en-ca":236,"./en-ca.js":236,"./en-gb":237,"./en-gb.js":237,"./en-ie":238,"./en-ie.js":238,"./en-il":239,"./en-il.js":239,"./en-nz":240,"./en-nz.js":240,"./eo":241,"./eo.js":241,"./es":242,"./es-do":243,"./es-do.js":243,"./es-us":244,"./es-us.js":244,"./es.js":242,"./et":245,"./et.js":245,"./eu":246,"./eu.js":246,"./fa":247,"./fa.js":247,"./fi":248,"./fi.js":248,"./fo":249,"./fo.js":249,"./fr":250,"./fr-ca":251,"./fr-ca.js":251,"./fr-ch":252,"./fr-ch.js":252,"./fr.js":250,"./fy":253,"./fy.js":253,"./gd":254,"./gd.js":254,"./gl":255,"./gl.js":255,"./gom-latn":256,"./gom-latn.js":256,"./gu":257,"./gu.js":257,"./he":258,"./he.js":258,"./hi":259,"./hi.js":259,"./hr":260,"./hr.js":260,"./hu":261,"./hu.js":261,"./hy-am":262,"./hy-am.js":262,"./id":263,"./id.js":263,"./is":264,"./is.js":264,"./it":265,"./it.js":265,"./ja":266,"./ja.js":266,"./jv":267,"./jv.js":267,"./ka":268,"./ka.js":268,"./kk":269,"./kk.js":269,"./km":270,"./km.js":270,"./kn":271,"./kn.js":271,"./ko":272,"./ko.js":272,"./ky":273,"./ky.js":273,"./lb":274,"./lb.js":274,"./lo":275,"./lo.js":275,"./lt":276,"./lt.js":276,"./lv":277,"./lv.js":277,"./me":278,"./me.js":278,"./mi":279,"./mi.js":279,"./mk":280,"./mk.js":280,"./ml":281,"./ml.js":281,"./mn":282,"./mn.js":282,"./mr":283,"./mr.js":283,"./ms":284,"./ms-my":285,"./ms-my.js":285,"./ms.js":284,"./mt":286,"./mt.js":286,"./my":287,"./my.js":287,"./nb":288,"./nb.js":288,"./ne":289,"./ne.js":289,"./nl":290,"./nl-be":291,"./nl-be.js":291,"./nl.js":290,"./nn":292,"./nn.js":292,"./pa-in":293,"./pa-in.js":293,"./pl":294,"./pl.js":294,"./pt":295,"./pt-br":296,"./pt-br.js":296,"./pt.js":295,"./ro":297,"./ro.js":297,"./ru":298,"./ru.js":298,"./sd":299,"./sd.js":299,"./se":300,"./se.js":300,"./si":301,"./si.js":301,"./sk":302,"./sk.js":302,"./sl":303,"./sl.js":303,"./sq":304,"./sq.js":304,"./sr":305,"./sr-cyrl":306,"./sr-cyrl.js":306,"./sr.js":305,"./ss":307,"./ss.js":307,"./sv":308,"./sv.js":308,"./sw":309,"./sw.js":309,"./ta":310,"./ta.js":310,"./te":311,"./te.js":311,"./tet":312,"./tet.js":312,"./tg":313,"./tg.js":313,"./th":314,"./th.js":314,"./tl-ph":315,"./tl-ph.js":315,"./tlh":316,"./tlh.js":316,"./tr":317,"./tr.js":317,"./tzl":318,"./tzl.js":318,"./tzm":319,"./tzm-latn":320,"./tzm-latn.js":320,"./tzm.js":319,"./ug-cn":321,"./ug-cn.js":321,"./uk":322,"./uk.js":322,"./ur":323,"./ur.js":323,"./uz":324,"./uz-latn":325,"./uz-latn.js":325,"./uz.js":324,"./vi":326,"./vi.js":326,"./x-pseudo":327,"./x-pseudo.js":327,"./yo":328,"./yo.js":328,"./zh-cn":329,"./zh-cn.js":329,"./zh-hk":330,"./zh-hk.js":330,"./zh-tw":331,"./zh-tw.js":331};l.keys=function(){return Object.keys(o)},l.resolve=a,n.exports=l,l.id=406}},[341]);