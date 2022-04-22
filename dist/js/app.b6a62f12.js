(function(){"use strict";var e={6663:function(e,o,r){var t=r(9242),n=r(3396);const a={class:"appWrapper"};function l(e,o,r,t,l,i){const s=(0,n.up)("ProfileBlock"),c=(0,n.up)("BeerBlock");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(s),(0,n.Wm)(c)])}const i={class:"profileBlock"};function s(e,o,r,t,a,l){const s=(0,n.up)("ProfileBlockImage"),c=(0,n.up)("ProfileBlockMoreInfo");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(s,{dataForImageBlock:e.dataForImageBlock,onOpenModal:o[0]||(o[0]=e=>this.showModal=!0)},null,8,["dataForImageBlock"]),e.showModal?((0,n.wg)(),(0,n.j4)(c,{key:0,dataForMoreInfoBlock:e.dataForMoreInfoBlock,onCloseModal:o[1]||(o[1]=e=>this.showModal=!1)},null,8,["dataForMoreInfoBlock"])):(0,n.kq)("",!0)])}r(1703);var c=r(7139);const u={class:"profileBlockImage"},d={class:"profileImageWithName"},f=["src"],m={class:"profileName"},p={class:"profileInfoBlock"},h=(0,n._)("span",null,"Position:",-1),k={class:"profileInfoBlock"},g=(0,n._)("span",null,"Age:",-1);function B(e,o,r,t,a,l){return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("figure",d,[e.showImage?((0,n.wg)(),(0,n.iD)("img",{key:0,onClick:o[0]||(o[0]=(...o)=>e.reloadImage&&e.reloadImage(...o)),onTouchstart:o[1]||(o[1]=(...o)=>e.reloadImage&&e.reloadImage(...o)),class:"profileImage",src:e.personImageUrl,alt:"Image of profile",title:"You can try to reload this image"},null,40,f)):(0,n.kq)("",!0),(0,n._)("figcaption",m,(0,c.zw)(e.personName),1)]),(0,n._)("div",p,[h,(0,n.Uk)(" "+(0,c.zw)(e.personPositionOfWork),1)]),(0,n._)("div",k,[g,(0,n.Uk)(" "+(0,c.zw)(e.personAge),1)]),(0,n._)("button",{class:"profileMoreInfoButton profileInfoBlock",onClick:o[2]||(o[2]=o=>e.$emit("openModal")),onTouchstart:o[3]||(o[3]=o=>e.$emit("openModal"))},"More information",32)])}var I=(0,n.aZ)({name:"ProfileBlockImage",data(){return{showImage:!0}},computed:{personImageUrl(){return this.dataForImageBlock?.avatar},personName(){return this.dataForImageBlock?.first_name},personPositionOfWork(){return this.dataForImageBlock?.employment},personAge(){const e=new Date,o=new Date(this.dataForImageBlock?.date_of_birth);return e.getFullYear()-o.getFullYear()}},methods:{reloadImage(){this.showImage=!1,setTimeout((()=>{this.showImage=!0}),0)}},props:{dataForImageBlock:{type:Object}}}),w=r(89);const _=(0,w.Z)(I,[["render",B]]);var v=_;const M={class:"profileBlockMoreInfo profileBlockChild"},b=(0,n._)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),y=(0,n._)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"},null,-1),F=[b,y],D={class:"profileBlockMoreInfoTitle"},O={key:0},P={key:0},j={style:{"text-decoration":"underline"}};function z(e,o,r,t,a,l){return(0,n.wg)(),(0,n.iD)("div",{class:"profileBlockMoreInfoOverlay",onClick:o[2]||(o[2]=(...o)=>e.closeModalByOverlay&&e.closeModalByOverlay(...o))},[(0,n._)("div",M,[((0,n.wg)(),(0,n.iD)("svg",{class:"modalClose",onClick:o[0]||(o[0]=o=>e.$emit("closeModal")),onTouchstart:o[1]||(o[1]=o=>e.$emit("closeModal")),xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px"},F,32)),(0,n._)("h3",D,(0,c.zw)(e.personFullName),1),(0,n._)("table",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.dataForMoreInfoBlock,((o,r,t)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:t},[e.hideProperties(r)?((0,n.wg)(),(0,n.iD)("tr",O,[(0,n._)("td",null,(0,c.zw)(e.changeName(r)),1),(0,n._)("td",null,[(0,n.Uk)((0,c.zw)(e.checkInfoRow(o))+" ",1),"object"!==typeof o||o.city?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("ul",P,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o,((o,r,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t},[(0,n._)("span",j,(0,c.zw)(e.changeName(r))+":",1),(0,n.Uk)(" "+(0,c.zw)(o),1)])))),128))]))])])):(0,n.kq)("",!0)],64)))),128))])])])}var T=(0,n.aZ)({name:"ProfileBlockMoreInfo",computed:{personFullName(){return`${this.dataForMoreInfoBlock?.first_name} ${this.dataForMoreInfoBlock?.last_name}`}},methods:{hideProperties(e){const o=["first_name","last_name"];return!o.includes(e)},closeModalByOverlay(e){const o=e.target;o.classList.contains("profileBlockMoreInfo")||o.closest(".profileBlockMoreInfo")||this.$emit("closeModal")},changeName(e){return(e.slice(0,1).toUpperCase()+e.slice(1)).replaceAll("_"," ")},checkInfoRow(e){return"string"===typeof e?e:e.country?`${e.country}, ${e.state}, ${e.city}, ${e.street_name}, ${e.street_address}`:void 0}},props:{dataForMoreInfoBlock:{type:Object}}});const C=(0,w.Z)(T,[["render",z]]);var N=C,$=(0,n.aZ)({name:"ProfileBlock",components:{ProfileBlockImage:v,ProfileBlockMoreInfo:N},data(){return{dataForImageBlock:{},dataForMoreInfoBlock:{},showModal:!1}},methods:{setDataForImageBlock(e){return this.dataForImageBlock={avatar:e.avatar,first_name:e.first_name,date_of_birth:e.date_of_birth,employment:e.employment.title}},setDataForMoreInfoBlock(e){return this.dataForMoreInfoBlock={first_name:e.first_name,last_name:e.last_name,date_of_birth:e.date_of_birth,employment:e.employment,phone_number:e.phone_number,social_insurance_number:e.social_insurance_number,email:e.email,address:e.address,subscription:e.subscription}}},mounted(){fetch("https://random-data-api.com/api/users/random_user",{method:"GET"}).then((e=>{if(e.ok)return e.json();throw new Error})).then((e=>{this.setDataForImageBlock(e),this.setDataForMoreInfoBlock(e)})).catch((e=>console.log(e)))}});const x=(0,w.Z)($,[["render",s]]);var Z=x,U="dist/img/iconRestart.18236ca5.svg";const Y={class:"beerBlock"},W={class:"beerBlockTitle"},H={key:0,class:"beerBlockListItem"};function q(e,o,r,t,a,l){return(0,n.wg)(),(0,n.iD)("div",Y,[(0,n._)("h3",W,(0,c.zw)(e.dataForBeerBlock.name),1),(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.dataForBeerBlock,((o,r,t)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:t},[e.hideProperties(r)?((0,n.wg)(),(0,n.iD)("li",H,[(0,n._)("span",null,(0,c.zw)(r)+": ",1),(0,n.Uk)((0,c.zw)(o),1)])):(0,n.kq)("",!0)],64)))),128))]),(0,n._)("img",{onMouseover:o[0]||(o[0]=o=>e.turnIcon=!0),onMouseout:o[1]||(o[1]=o=>e.turnIcon=!1),onClick:o[2]||(o[2]=(...o)=>e.getNewBeer&&e.getNewBeer(...o)),onTouchstart:o[3]||(o[3]=o=>e.turnIcon=!1),src:U,alt:"Get new beer",class:(0,c.C_)(["iconRestart",{iconRestartTurn:e.turnIcon}])},null,34)])}var A=(0,n.aZ)({name:"BeerBlock",data(){return{dataForBeerBlock:{},turnIcon:!1}},methods:{setDataForBeerBlock(e){return this.dataForBeerBlock={...e}},hideProperties(e){const o=["id","uid","name"];return!o.includes(e)},getNewBeer(){fetch("https://random-data-api.com/api/beer/random_beer",{method:"GET"}).then((e=>e.json())).then((e=>this.setDataForBeerBlock(e)))}},mounted(){fetch("https://random-data-api.com/api/beer/random_beer",{method:"GET"}).then((e=>e.json())).then((e=>this.setDataForBeerBlock(e)))}});const E=(0,w.Z)(A,[["render",q]]);var R=E,G={name:"App",components:{ProfileBlock:Z,BeerBlock:R}};const K=(0,w.Z)(G,[["render",l]]);var L=K;(0,t.ri)(L).mount("#app")}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var a=o[t]={exports:{}};return e[t](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(o,t,n,a){if(!t){var l=1/0;for(u=0;u<e.length;u++){t=e[u][0],n=e[u][1],a=e[u][2];for(var i=!0,s=0;s<t.length;s++)(!1&a||l>=a)&&Object.keys(r.O).every((function(e){return r.O[e](t[s])}))?t.splice(s--,1):(i=!1,a<l&&(l=a));if(i){e.splice(u--,1);var c=n();void 0!==c&&(o=c)}}return o}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,n,a]}}(),function(){r.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(o,{a:o}),o}}(),function(){r.d=function(e,o){for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(o){return 0===e[o]};var o=function(o,t){var n,a,l=t[0],i=t[1],s=t[2],c=0;if(l.some((function(o){return 0!==e[o]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(s)var u=s(r)}for(o&&o(t);c<l.length;c++)a=l[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},t=self["webpackChunkrandom_beer"]=self["webpackChunkrandom_beer"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(6663)}));t=r.O(t)})();
