(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1740:function(t,e,n){},"17a0":function(t,e,n){"use strict";n("fba1")},"28d3":function(t,e,n){},"2f07":function(t,e,n){"use strict";n("1740")},"2f66":function(t,e,n){"use strict";n("28d3")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("router-link",{attrs:{to:"/"}},[a("v-img",{attrs:{alt:"Hyperfind Logo",contain:"",src:n("9b19"),transition:"scale-transition",width:"200"}})],1)],1),a("v-spacer"),a("v-btn",{attrs:{small:"",fab:"",target:"_blank",text:""},on:{click:function(e){t.drawerOpen=!t.drawerOpen}}},[a("v-icon",[t._v("mdi-menu")])],1)],1),a("v-main",[a("router-view"),a("github-repository-link")],1),a("v-navigation-drawer",{attrs:{temporary:"",right:"",app:""},model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}},[a("v-list-item",[a("v-list-item-content",[a("v-img",{attrs:{alt:"Vuetify Logo",contain:"",src:n("9b19"),transition:"scale-transition",width:"200"}})],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.navigationItems,(function(e){return a("v-list-item",{key:e.title,attrs:{link:"",to:e.route}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-center"},[n("div",{staticClass:"my-4"},[n("v-btn",{attrs:{link:"",text:"",target:"_blank",href:"https://github.com/theZaX/vuetify-lost-and-found"}},[t._v(" Zack and Dylan's Github Repository "),n("v-icon",{attrs:{right:""}},[t._v("mdi-open-in-new")])],1)],1)])},s=[],c={},l=c,u=n("2877"),d=n("6544"),f=n.n(d),p=n("8336"),m=n("132d"),v=Object(u["a"])(l,o,s,!1,null,null,null),h=v.exports;f()(v,{VBtn:p["a"],VIcon:m["a"]});var g={name:"App",components:{GithubRepositoryLink:h},data:function(){return{drawerOpen:!1,navigationItems:[{title:"Home",icon:"mdi-home",route:"/"},{title:"Dashboard",icon:"mdi-view-dashboard",route:"/dashboard"},{title:"Found Items",icon:"mdi-file-find-outline",route:"/found"}]}}},b=g,y=n("7496"),w=n("40dc"),_=n("ce7e"),k=n("adda"),C=n("8860"),I=n("da13"),x=n("5d23"),O=n("34c3"),j=n("f6c4"),V=n("f774"),F=n("2fa4"),L=Object(u["a"])(b,r,i,!1,null,null,null),P=L.exports;f()(L,{VApp:y["a"],VAppBar:w["a"],VBtn:p["a"],VDivider:_["a"],VIcon:m["a"],VImg:k["a"],VList:C["a"],VListItem:I["a"],VListItemContent:x["a"],VListItemIcon:O["a"],VListItemTitle:x["b"],VMain:j["a"],VNavigationDrawer:V["a"],VSpacer:F["a"]});var S=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"clamped"},[t._m(0),n("h2",{staticClass:"font-weight-regular"},[t._v("Where BYU Students Look First.")]),n("p",{staticClass:"my-2"},[t._v(" Lost something? Post it "),n("em",[n("router-link",{staticStyle:{"text-decoration":"inherit"},attrs:{to:"/dashboard"}},[t._v(" here ")])],1)]),n("p",{staticClass:"my-2"},[t._v(" Looking for something? Click "),n("em",[n("router-link",{staticStyle:{"text-decoration":"inherit"},attrs:{to:"/found"}},[t._v(" here ")])],1)]),n("h3",[t._v("Why Did We Make this Website?")]),n("p",[t._v("Ever since we were kids, we have been known to consistantly lose just about anything we had in our possesion. We would lose anything from our car keys to our brand new pair of shoes! I decided it was time for the schenanegans to be over, so we (Zack and Dylan) created this website. Here, if you lose anything on or off campus (in the general vicinity of BYU), we want people to post what was lost or found here! That way there is one source to come to for any lost (or found) Items in the area. If you would like to learn more, are looking for something, or have found something, you have come to the right place! Use our Menu to navigate our website and see any current postings. ")]),n("h3",[t._v("Important API Notice")]),t._m(1)])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"span4"},[a("img",{staticClass:"center-block",attrs:{src:n("66fd")}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("The API we are using is one we created on Firebase. Malcom (the TA) reccomended that I make note that it is not a large database we are using, but one we created ourselves. The API is being accessed mainly in the "),n("em",[t._v("Found Items")]),t._v(" tab. Thank you! :) ")])}],E={name:"LandingPage",components:{}},B=E,D=(n("2f07"),Object(u["a"])(B,T,A,!1,null,"113315a2",null)),R=D.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"clamped"},[n("h2",{staticClass:"font-weight-regular"},[t._v("Personal Dashboard")]),n("p",{staticClass:"my-2"},[t._v(" Items I Have Lost: ")]),n("v-row",{staticClass:"mt-2"},t._l(t.items,(function(t){return n("item-card",{key:t.id,staticClass:"col-12 col-sm-6",attrs:{buttonText:"Edit",description:t.description,image:t.image,title:t.title}})})),1)],1)])},M=[],W=n("5530"),G=n("1da1"),H=(n("96cf"),n("d81d"),n("260b")),U=(n("e71f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-img",{attrs:{height:"200",src:t.image}}),n("v-card-title",[t._v(t._s(t.title))]),n("v-card-text",[n("div",[t._v(" "+t._s(t.description)+" ")])]),n("v-card-actions",[n("v-btn",{attrs:{color:"primary"}},[t._v(" "+t._s(t.buttonText)+" ")])],1)],1)],1)}),Y=[],Z={props:{buttonText:{type:String,default:"Claim"},image:{type:String},title:{type:String},description:{type:String}},data:function(){return{loading:!1,selection:1}},methods:{}},z=Z,J=n("b0af"),N=n("99d9"),q=Object(u["a"])(z,U,Y,!1,null,null,null),K=q.exports;f()(q,{VBtn:p["a"],VCard:J["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VImg:k["a"]});var Q={name:"LostListPage",data:function(){return{items:[]}},components:{ItemCard:K},methods:{fetchItems:function(){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=H["a"].firestore().collection("lost"),e.next=3,n.get();case 3:a=e.sent,r=a.docs.map((function(t){return Object(W["a"])(Object(W["a"])({},t.data()),{},{id:t.id})})),t.items=r,console.log(a.docs.map((function(t){return t.data()})));case 7:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.fetchItems()}},X=Q,tt=(n("17a0"),n("0fd9")),et=Object(u["a"])(X,$,M,!1,null,null,null),nt=et.exports;f()(et,{VRow:tt["a"]});var at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"clamped"},[n("h2",{staticClass:"font-weight-regular"},[t._v("Found Things")]),n("p",{staticClass:"my-2"},[t._v(" Found something? Post it "),n("router-link",{staticStyle:{"text-decoration":"inherit"},attrs:{to:"/dashboard"}},[t._v(" here ")])],1),n("v-row",{staticClass:"mt-2"},t._l(t.items,(function(t){return n("item-card",{key:t.id,staticClass:"col-12 col-sm-6",attrs:{buttonText:"Claim",description:t.description,image:t.image,title:t.title}})})),1)],1)])},rt=[],it={name:"FoundListPage",data:function(){return{items:[]}},components:{ItemCard:K},methods:{fetchItems:function(){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=H["a"].firestore().collection("found"),e.next=3,n.get();case 3:a=e.sent,r=a.docs.map((function(t){return Object(W["a"])(Object(W["a"])({},t.data()),{},{id:t.id})})),t.items=r,console.log(a.docs.map((function(t){return t.data()})));case 7:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.fetchItems()}},ot=it,st=(n("2f66"),Object(u["a"])(ot,at,rt,!1,null,null,null)),ct=st.exports;f()(st,{VRow:tt["a"]}),a["a"].use(S["a"]);var lt=[{component:R,path:"/",name:"LandingPage"},{component:nt,path:"/dashboard",name:"Dashboard"},{component:ct,path:"/found",name:"FoundListPage"}],ut=new S["a"]({mode:"history",base:"/",routes:lt}),dt=ut,ft=n("f309");a["a"].use(ft["a"]);var pt=new ft["a"]({theme:{themes:{light:{primary:"#00336F",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});a["a"].config.productionTip=!1;var mt={apiKey:"AIzaSyBg3wqkRSYek-59fOGt3uGQC2fA6FklttA",authDomain:"lost-and-found-24934.firebaseapp.com",projectId:"lost-and-found-24934",storageBucket:"lost-and-found-24934.appspot.com",messagingSenderId:"112570119682",appId:"1:112570119682:web:022ed68157415b528ad91b"};H["a"].initializeApp(mt),new a["a"]({router:dt,vuetify:pt,render:function(t){return t(P)}}).$mount("#app")},"66fd":function(t,e,n){t.exports=n.p+"img/photo-1585156569731-4c5b959234f7.c8624f2c.jpg"},"9b19":function(t,e,n){t.exports=n.p+"img/logo.4100e910.svg"},fba1:function(t,e,n){}});
//# sourceMappingURL=app.5225d8c9.js.map