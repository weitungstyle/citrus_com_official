(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ee4d948"],{"159b":function(t,a,e){var s=e("da84"),r=e("fdbc"),i=e("17c2"),o=e("9112");for(var c in r){var l=s[c],n=l&&l.prototype;if(n&&n.forEach!==i)try{o(n,"forEach",i)}catch(d){n.forEach=i}}},"17c2":function(t,a,e){"use strict";var s=e("b727").forEach,r=e("a640"),i=e("ae40"),o=r("forEach"),c=i("forEach");t.exports=o&&c?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,a,e){"use strict";var s=e("23e7"),r=e("17c2");s({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},8418:function(t,a,e){"use strict";var s=e("c04e"),r=e("9bf2"),i=e("5c6c");t.exports=function(t,a,e){var o=s(a);o in t?r.f(t,o,i(0,e)):t[o]=e}},"86d6":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Navbar"),e("main",{attrs:{role:"main"}},[e("router-view")],1),e("Footer")],1)},r=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"container-fluid fixed-top pt-md-40 pt-30 px-5",class:{"header-product":t.$route.params.id,"header-checkout":t.$route.params.orderId,"pb-md-40":t.$route.params.orderId,"pb-30":t.$route.params.orderId,header:!t.$route.params.id&&!t.$route.params.orderId}},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"row align-items-center mx-0"},[e("div",{staticClass:"col-md-4 col-3 pl-lg-30 pl-15"},[e("div",{staticClass:"d-md-flex d-none align-items-center"},[e("a",{staticClass:"fas fa-envelope p-15",class:{"text-gray03":!t.$route.params.id,"text-white":t.$route.params.id},attrs:{href:"mailto:citrus.cwc@gmail.com"}}),e("span",{staticClass:"d-flex ml-15",class:{"text-gray03":!t.$route.params.id,"text-white":t.$route.params.id}},[e("i",{staticClass:"fas fa-phone"}),e("span",[t._v("+8862-2345-7851")])])]),e("a",{staticClass:"showmenu d-md-none fas fa-bars text-i6p-20 p-15",class:{"text-gray03":!t.$route.params.id,"text-gray05":t.$route.params.id},attrs:{href:"#"}})]),e("div",{staticClass:"col-md-4 col-6 px-0"},[t.$route.params.id?e("router-link",{staticClass:"text-hide bg-cover mx-i6p-auto brand-title d-block",staticStyle:{"background-image":"url('https://firebasestorage.googleapis.com/v0/b/citruscom-a00c9.appspot.com/o/website%2FDF0ZM8.png?alt=media&token=60f9fcd9-05b7-4bd7-80a4-06a564420057')"},attrs:{to:"/"}},[t._v(" CITRUS ")]):t.$route.params.orderId?e("div",{staticClass:"text-hide bg-cover mx-i6p-auto brand-title d-block",staticStyle:{"background-image":"url('https://firebasestorage.googleapis.com/v0/b/citruscom-a00c9.appspot.com/o/website%2F9cNkyP.png?alt=media&token=e8403e5b-2880-4061-8950-f06bc2f3e883')"}},[t._v(" CITRUS ")]):e("router-link",{staticClass:"text-hide bg-cover mx-i6p-auto brand-title d-block",staticStyle:{"background-image":"url('https://firebasestorage.googleapis.com/v0/b/citruscom-a00c9.appspot.com/o/website%2F9cNkyP.png?alt=media&token=e8403e5b-2880-4061-8950-f06bc2f3e883')"},attrs:{to:"/"}},[t._v(" CITRUS ")])],1),e("div",{staticClass:"col-md-4 col-3 pr-lg-30 pr-15"},[t.$route.params.orderId?t._e():e("ul",{staticClass:"d-flex justify-content-end align-items-center"},[e("li",{staticClass:"d-md-block d-none saved-link"},[e("router-link",{staticClass:"far fa-heart p-15",class:{"text-gray03":!t.$route.params.id,"text-gray05":t.$route.params.id},attrs:{to:"/saved"}}),0!==t.savedQty?e("div",{staticClass:"saved-item-qty rounded-circle bg-white text-8 text-center"},[t._v(" "+t._s(t.savedQty)+" ")]):t._e()],1),e("li",{staticClass:"cart-link d-md-none"},[e("router-link",{staticClass:"p-15",class:{"text-gray03":!t.$route.params.id,"text-gray05":t.$route.params.id},attrs:{to:"/shopping_bag"}},[e("i",{staticClass:"fas fa-shopping-cart"})]),0!==t.cartItemQty?e("div",{staticClass:"cart-item-qty rounded-circle bg-white text-8 text-center"},[t._v(" "+t._s(t.cartItemQty)+" ")]):t._e()],1),e("li",{staticClass:"cart-link d-none d-md-block"},[e("a",{staticClass:"p-15",class:{"text-gray03":!t.$route.params.id,"text-gray05":t.$route.params.id},attrs:{"data-toggle":"dropdown","data-flip":"false"}},[e("i",{staticClass:"fas fa-shopping-cart"})]),0!==t.cartItemQty?e("div",{staticClass:"cart-item-qty rounded-circle bg-white text-8 text-center"},[t._v(" "+t._s(t.cartItemQty)+" ")]):t._e(),e("div",{staticClass:"dropdown-menu dropdown-menu-cart text-lighter py-0 border-gray-03 border",staticStyle:{"min-width":"320px"},attrs:{"data-offset":"400"}},[e("p",{staticClass:"text-center text-18 py-10 border-bottom mb-0 border-gray03"},[t._v(" Shopping Bag ")]),0!==t.cartItemQty?e("div",[e("div",{staticClass:"overflow-auto",staticStyle:{"max-height":"423px"}},t._l(t.cart.carts,(function(a){return e("div",{key:a._id,staticClass:"row border-bottom border-gray03 mx-0 py-15 text-12"},[e("div",{staticClass:"col-md-4 text-center my-md-auto"},[a.productId.title&&-1!==a.productId.title.indexOf("LARGE VINTAGE EARRING")?e("img",{staticClass:"bag-img-large-earring",attrs:{src:a.productId.imageUrl,alt:a.productId.title}}):a.productId.title&&-1!==a.productId.title.indexOf("SMALL VINTAGE EARRING")?e("img",{staticClass:"bag-img-small-earring",attrs:{src:a.productId.imageUrl,alt:a.productId.title}}):a.productId.title&&-1!==a.productId.title.indexOf("NECKLACE")?e("img",{staticClass:"bag-img-necklace",attrs:{src:a.productId.imageUrl,alt:a.productId.title}}):e("img",{staticClass:"bag-img-bracelet",attrs:{src:a.productId.imageUrl,alt:a.productId.title}})]),e("div",{staticClass:"col-md-8"},[e("p",{staticClass:"text-black mb-5"},[t._v(t._s(a.productId.title))]),e("p",{staticClass:"mb-5 text-gray05"},[t._v("Quantity: "+t._s(a.qty))]),e("p",{staticClass:"mb-5 text-gray05"},[t._v(" "+t._s(t._f("currency")(a.productId.price))+" ")]),e("div",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"mb-5"},[t._v("AVAILABLE")]),e("a",{staticClass:"text-black mr-10",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeCartItem(a._id)}}},[t._v(" Remove ")])])])])})),0),e("div",{staticClass:"p-15"},[e("div",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"text-14 mb-15"},[t._v("Sub Total")]),e("p",{staticClass:"text-20 mb-15"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),e("router-link",{staticClass:"btn btn-white btn-block",attrs:{to:"/shopping_bag"}},[t._v("VIEW BAG DETAILS")]),e("router-link",{staticClass:"btn btn-black btn-block",attrs:{to:"/check_out"}},[t._v("CHECKOUT")])],1)]):e("p",{staticClass:"text-center text-18 py-10"},[t._v(" Your Bag Is Empty : ) ")])])])])])]),t.$route.params.orderId?t._e():e("div",{staticClass:"row py-md-15 py-10"},[e("div",{staticClass:"col-12"},[e("ul",{staticClass:"d-md-flex justify-content-center menu"},[e("li",[e("router-link",{staticClass:"remove-line-style d-block px-lg-25 px-15",class:{"text-white":!t.$route.params.id,"text-black":t.$route.params.id},attrs:{to:"/"}},[t._v("HOME")])],1),e("li",[e("router-link",{staticClass:"remove-line-style d-block px-lg-25 px-15",class:{"text-white":!t.$route.params.id,"text-black":t.$route.params.id},attrs:{to:"/products/EARRINGS"}},[t._v("EARRINGS")])],1),e("li",[e("router-link",{staticClass:"remove-line-style d-block px-lg-25 px-15",class:{"text-white":!t.$route.params.id,"text-black":t.$route.params.id},attrs:{to:"/products/NECKLACES"}},[t._v("NECKLACES")])],1),e("li",[e("router-link",{staticClass:"remove-line-style d-block px-lg-25 px-15",class:{"text-white":!t.$route.params.id,"text-black":t.$route.params.id},attrs:{to:"/products/BRACELETS"}},[t._v("BRACELETS")])],1),e("li",[e("router-link",{staticClass:"remove-line-style d-block px-lg-25 px-15",class:{"text-white":!t.$route.params.id,"text-black":t.$route.params.id},attrs:{to:"/about"}},[t._v("ABOUT")])],1),e("li",[e("router-link",{staticClass:"remove-line-style d-block px-lg-25 px-15 d-md-none",class:{"text-white":!t.$route.params.id,"text-black":t.$route.params.id},attrs:{to:"/saved"}},[t._v("SAVED")])],1)])])])],1)},o=[],c=(e("99af"),e("4160"),e("d3b7"),e("159b"),e("1157")),l=e.n(c),n={name:"Navbar",data:function(){return{cart:[],isLoading:!1,saved:JSON.parse(localStorage.getItem("savedItems"))||[]}},methods:{getCart:function(){var t=this,a="".concat("https://winged-record-377208.de.r.appspot.com","/api/cart");t.$http.get(a).then((function(a){t.cart=a.data.data}))},removeCartItem:function(t){var a=this,e="".concat("https://winged-record-377208.de.r.appspot.com","/api/cart/").concat(t);a.isLoading=!0,a.$http.delete(e).then((function(){a.getCart()})).catch((function(t){console.log("Navbar.vue => ",e,t)})).finally((function(){a.isLoading=!1}))}},computed:{cartItemQty:function(){if(this.cart.carts){var t=0;return this.cart.carts.forEach((function(a){t+=a.qty})),t}return 0},savedQty:function(){if(this.saved===[])return 0;var t=this.saved.length;return t}},created:function(){var t=this;t.getCart(),t.$bus.$on("AddItem:getCart",(function(){t.getCart()})),t.$bus.$on("RemoveItem:removeCartItem",(function(a){t.removeCartItem(a)}))},mounted:function(){var t=this;window.addEventListener("savedItems-localstorage-changed",(function(a){t.saved=JSON.parse(localStorage.getItem("savedItems"))||[]})),l()(".showmenu").click((function(t){t.preventDefault(),l()("body").toggleClass("menushow")})),l()(".menu .remove-line-style").click((function(t){t.preventDefault(),l()("body").toggleClass("menushow")})),l()(window).scroll((function(){l()("body").removeClass("menushow")}))}},d=n,p=e("2877"),u=Object(p["a"])(d,i,o,!1,null,null,null),m=u.exports,g=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer bg-black text-white py-35 px-lg-80 px-md-0 px-30"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row mb-md-25 mb-50"},[e("div",{staticClass:"col-md-5"},[e("span",[t._v("CONTACT US")]),e("ul",{staticClass:"text-gray03 text-14 pt-lg-20 pt-15"},[e("li",{staticClass:"pb-lg-15 pb-10"},[e("i",{staticClass:"fas fa-phone pr-lg-15 pr-10"}),e("span",[t._v("+8862-2345-7851")])]),e("li",[e("i",{staticClass:"fas fa-envelope pr-lg-15 pr-10"}),e("a",{staticClass:"text-gray03",attrs:{href:"#"}},[t._v("survice@citruschen.com")])])])]),e("div",{staticClass:"col-md-3 pt-15 pt-md-0"},[e("span",[t._v("FIND US ON")]),e("ul",{staticClass:"text-14 pt-lg-20 pt-15"},[e("li",{staticClass:"pb-lg-15 pb-10"},[e("a",{staticClass:"text-gray03",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-instagram text-gray03 pr-lg-15 pr-10"}),t._v("Instagram")])]),e("li",{staticClass:"pb-lg-15 pb-10"},[e("a",{staticClass:"text-gray03",attrs:{href:"https://www.facebook.com/%E8%8C%B6Th%C3%A9-163871500450235",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook-square text-gray03 pr-lg-15 pr-10"}),t._v(" Facebook ")])]),e("li",[e("a",{staticClass:"text-gray03",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter-square text-gray03 pr-lg-15 pr-10"}),t._v("Twitter")])])])]),e("div",{staticClass:"col-md-4 pt-15 pt-md-0"},[e("span",[t._v("SIGN UP FOR CITRUS UPDATES")]),e("div",{staticClass:"input-group pt-lg-20 pt-15"},[e("input",{staticClass:"form-control border-0 bg-gray03 text-black",attrs:{type:"email",id:"signEmail",placeholder:"Email Address"}}),e("div",{staticClass:"input-group-prepend bg-gray03"},[e("a",{staticClass:"btn"},[e("i",{staticClass:"fas fa-angle-right"})])])])])]),e("div",{staticClass:"row flex-row-reverse justify-content-between align-items-end"},[e("img",{staticClass:"footer-img col-lg-4 col-md-5",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/citruscom-a00c9.appspot.com/o/website%2Fp9iBNb.png?alt=media&token=100d5022-648b-479a-8724-be1b06257444",alt:"logo of citrus shop"}}),e("div",{staticClass:"copyright col-lg-8 col-md-7 text-gray05 text-14 pt-md-0 pt-20"},[t._v("© 2020 Citrus Chen Accessory - All Rights Reserved")])])])])}],v={name:"Footer",data:function(){return{}}},b=v,C=Object(p["a"])(b,g,f,!1,null,null,null),x=C.exports,h={name:"Layout",components:{Navbar:m,Footer:x},data:function(){return{}}},y=h,k=Object(p["a"])(y,s,r,!1,null,null,null);a["default"]=k.exports},"99af":function(t,a,e){"use strict";var s=e("23e7"),r=e("d039"),i=e("e8b5"),o=e("861d"),c=e("7b0b"),l=e("50c4"),n=e("8418"),d=e("65f0"),p=e("1dde"),u=e("b622"),m=e("2d00"),g=u("isConcatSpreadable"),f=9007199254740991,v="Maximum allowed index exceeded",b=m>=51||!r((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),C=p("concat"),x=function(t){if(!o(t))return!1;var a=t[g];return void 0!==a?!!a:i(t)},h=!b||!C;s({target:"Array",proto:!0,forced:h},{concat:function(t){var a,e,s,r,i,o=c(this),p=d(o,0),u=0;for(a=-1,s=arguments.length;a<s;a++)if(i=-1===a?o:arguments[a],x(i)){if(r=l(i.length),u+r>f)throw TypeError(v);for(e=0;e<r;e++,u++)e in i&&n(p,u,i[e])}else{if(u>=f)throw TypeError(v);n(p,u++,i)}return p.length=u,p}})},a640:function(t,a,e){"use strict";var s=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&s((function(){e.call(null,a||function(){throw 1},1)}))}},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-6ee4d948.2ba19abb.js.map