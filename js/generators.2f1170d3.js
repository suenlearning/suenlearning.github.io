(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["generators"],{"0a93":function(e,t,r){},"12dc":function(e,t,r){"use strict";r("ca13")},"1dde":function(e,t,r){var n=r("d039"),s=r("b622"),i=r("2d00"),a=s("species");e.exports=function(e){return i>=51||!n((function(){var t=[],r=t.constructor={};return r[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"25f0":function(e,t,r){"use strict";var n=r("6eeb"),s=r("825a"),i=r("d039"),a=r("ad6d"),o="toString",c=RegExp.prototype,u=c[o],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=o;(l||d)&&n(RegExp.prototype,o,(function(){var e=s(this),t=String(e.source),r=e.flags,n=String(void 0===r&&e instanceof RegExp&&!("flags"in c)?a.call(e):r);return"/"+t+"/"+n}),{unsafe:!0})},"36c3":function(e,t,r){e.exports=r.p+"img/worksheets.b91e2d19.png"},"4ffb":function(e){e.exports=JSON.parse('{"worksheetTypes":[{"id":1,"category":"math","name":"addition","slug":"addition","generator":"GeneratorAddition","path":"#","image":{"src":"worksheets.png","alt":"addition generator"}},{"id":2,"category":"math","name":"100 board","slug":"100-board","generator":"Generator100Board","path":"#","image":{"src":"worksheets.png","alt":"hundred board generator"}},{"id":3,"category":"math","name":"number line","slug":"number-line","generator":"GeneratorNumberLine","path":"#","image":{"src":"worksheets.png","alt":"number line generator"}}]}')},"5c4f":function(e,t,r){"use strict";r("0a93")},7584:function(e,t,r){var n={"./aboutus.png":"9712","./contact.png":"dfe7","./edu.png":"96f2","./logo.png":"9d64","./pagenotfound.png":"ab96","./worksheets.png":"36c3"};function s(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=i,e.exports=s,s.id="7584"},"7db0":function(e,t,r){"use strict";var n=r("23e7"),s=r("b727").find,i=r("44d2"),a="find",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),i(a)},8418:function(e,t,r){"use strict";var n=r("c04e"),s=r("9bf2"),i=r("5c6c");e.exports=function(e,t,r){var a=n(t);a in e?s.f(e,a,i(0,r)):e[a]=r}},"8e59":function(e,t,r){},9712:function(e,t,r){e.exports=r.p+"img/aboutus.e5b40afd.png"},"99af":function(e,t,r){"use strict";var n=r("23e7"),s=r("d039"),i=r("e8b5"),a=r("861d"),o=r("7b0b"),c=r("50c4"),u=r("8418"),l=r("65f0"),d=r("1dde"),m=r("b622"),f=r("2d00"),g=m("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",b=f>=51||!s((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),_=d("concat"),v=function(e){if(!a(e))return!1;var t=e[g];return void 0!==t?!!t:i(e)},w=!b||!_;n({target:"Array",proto:!0,forced:w},{concat:function(e){var t,r,n,s,i,a=o(this),d=l(a,0),m=0;for(t=-1,n=arguments.length;t<n;t++)if(i=-1===t?a:arguments[t],v(i)){if(s=c(i.length),m+s>p)throw TypeError(h);for(r=0;r<s;r++,m++)r in i&&u(d,m,i[r])}else{if(m>=p)throw TypeError(h);u(d,m++,i)}return d.length=m,d}})},ab96:function(e,t,r){e.exports=r.p+"img/pagenotfound.e30ae4b2.png"},b327:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"main__workspace"},[e._m(0),n("ul",{staticClass:"workspace__cards--container"},e._l(e.worksheets,(function(t){return n("li",{key:t.name,staticClass:"workspace__cards--item",on:{click:function(r){e.selectedWorksheet=t}}},[n("router-link",{staticClass:"nav__link",attrs:{to:{name:"singleGenerator",params:{generatorType:t.slug}}}},[n("article",{staticClass:"card",class:{selectedWorksheet:e.selectedWorksheet.generator===t.generator}},[n("img",{staticClass:"card__thumb",attrs:{src:r("7584")("./"+t.image.src),alt:t.image.alt}}),n("h3",{staticClass:"card__title"},[e._v(e._s(t.name))])])])],1)})),0),e.selectedWorksheet?n("section",{staticClass:"workspace__generator"},[n(e.selectedWorksheet.generator,{tag:"component",attrs:{worksheetTitle:e.selectedWorksheet.name}})],1):e._e()])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"workspace__intro"},[r("h3",{staticClass:"intro__title"},[e._v("Choose an activity")])])}],i=(r("7db0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"generator"},[r("h3",{staticClass:"generator__title"},[e._v(e._s(e.worksheetTitle)+" worksheet generator")]),r("form",{staticClass:"generator__options",attrs:{action:"",method:""},on:{submit:function(e){e.preventDefault()},change:function(t){return e.generateActivity()}}},[r("fieldset",{staticClass:"form__fieldset"},[r("BaseSelect",{attrs:{label:"How many digits",options:e.numberOfDigitsOptions},model:{value:e.numberOfDigits,callback:function(t){e.numberOfDigits=e._n(t)},expression:"numberOfDigits"}})],1),r("fieldset",{staticClass:"form__fieldset"},[r("legend",{staticClass:"form__fieldset--legend"},[e._v("Dis/allow regrouping")]),r("div",{staticClass:"form__options--radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.regrouping,expression:"regrouping"}],attrs:{type:"radio",id:"no-regroup",name:"regrouping"},domProps:{value:!1,checked:e._q(e.regrouping,!1)},on:{change:function(t){e.regrouping=!1}}}),r("label",{staticClass:"options__radio--label",attrs:{for:"no-regroup"}},[e._v("no regrouping")])]),r("div",{staticClass:"form__options--radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.regrouping,expression:"regrouping"}],attrs:{type:"radio",id:"regroup",name:"regroup"},domProps:{value:!0,checked:e._q(e.regrouping,!0)},on:{change:function(t){e.regrouping=!0}}}),r("label",{staticClass:"options__radio--label",attrs:{for:"regroup"}},[e._v("regrouping")])])]),r("fieldset",{staticClass:"form__fieldset"},[r("BaseSelect",{attrs:{label:"How many problems",options:e.numberOfEquationsOptions},model:{value:e.numberOfEquations,callback:function(t){e.numberOfEquations=e._n(t)},expression:"numberOfEquations"}})],1),r("fieldset",{staticClass:"form__fieldset buttons"},[r("BaseButton",{attrs:{icon:"cogs",classModifier:"create"},on:{click:e.generateActivity}},[e._v("Refresh")])],1)]),r("BasePreview",{staticClass:"generator__preview",attrs:{isTitle:e.title,previewWorksheetTitle:e.getPreviewWorksheetTitle}},[r("div",{staticClass:"activity"},e._l(e.numbers,(function(t){return r("div",{key:t.index,staticClass:"singleProblem"},[r("p",{staticClass:"addend addend--first"},[e._v(e._s(t.firstAddend))]),r("p",{staticClass:"operationSign"},[e._v("+")]),r("p",{staticClass:"addend addend--second"},[e._v(e._s(t.secondAddend))]),r("p",{staticClass:"result"})])})),0)])],1)}),a=[],o=(r("99af"),r("d3b7"),r("25f0"),{name:"GeneratorAddition",props:{worksheetTitle:String},data:function(){return{numbers:[],numberOfDigits:2,numberOfDigitsOptions:[1,2,3,4],numberOfEquations:8,numberOfEquationsOptions:[4,8,12,16,20],regrouping:!1,title:!1}},methods:{generateActivity:function(){this.title=!0,this.numbers=[];for(var e=0;e<this.numberOfEquations;e++){var t=this.generateEquationsArray();this.numbers.push(t)}},generateEquationsArray:function(){var e=[this.createArrayOfDigits(),this.createArrayOfDigits()];if(this.ensureDigitsDontSum10OrMore(0,e),!this.regrouping)for(var t=1;t<this.numberOfDigits;t++)this.ensureDigitsDontSum10OrMore(t,e);return this.convertFromArraysToNumbers(e)},createArrayOfDigits:function(){for(var e=[],t=0;t<1;t++){var r=this.getRandomNumber(1,8);e.push(r)}for(var n=1;n<this.numberOfDigits;n++){var s=this.getRandomNumber(0,9);e.push(s)}return e},getRandomNumber:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},ensureDigitsDontSum10OrMore:function(e,t){if(t[0][e]+t[1][e]>=10){var r=10-t[0][e];t[1][e]=0===e?this.getRandomNumber(1,r-1):this.getRandomNumber(0,r-1)}return t},convertFromArraysToNumbers:function(e){var t=this.createSingleNumber(e[0]),r=this.createSingleNumber(e[1]),n=t+r;return{firstAddend:t,secondAddend:r,result:n}},createSingleNumber:function(e){for(var t=0,r=e.length-1;r>=0;r--)t+=e[r]*Math.pow(10,e.length-1-r);return t}},computed:{getPreviewWorksheetTitle:function(){var e=this,t=this.regrouping?"with":"without",r=1===this.numberOfDigits?"digit":"digits",n=function(){return e.numberOfDigits?"".concat(e.numberOfDigits.toString(),"-").concat(r," ").concat(e.worksheetTitle," ").concat(t," regrouping"):""};return this.title?n():""}},created:function(){this.generateActivity()}}),c=o,u=(r("ec5a"),r("2877")),l=Object(u["a"])(c,i,a,!1,null,"2f5c8483",null),d=l.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"generator"},[r("h3",{staticClass:"generator__title"},[e._v(e._s(e.worksheetTitle)+" worksheet generator")]),r("form",{staticClass:"generator__options",attrs:{action:"",method:""},on:{submit:function(e){e.preventDefault()},change:function(t){return e.generateActivity()}}},[r("fieldset",{staticClass:"form__fieldset"},[r("BaseSelect",{attrs:{label:"How many numbers visible",options:e.numbersVisibleOptions},model:{value:e.numbersVisible,callback:function(t){e.numbersVisible=e._n(t)},expression:"numbersVisible"}})],1),r("fieldset",{staticClass:"form__fieldset buttons"},[r("BaseButton",{attrs:{icon:"cogs",classModifier:"create"},on:{click:e.generateActivity}},[e._v("Refresh")])],1)]),r("BasePreview",{staticClass:"generator__preview",attrs:{isTitle:e.title,previewWorksheetTitle:e.getPreviewWorksheetTitle}},[r("div",{staticClass:"activity"},[r("ul",{staticClass:"numbers__container",class:0===e.numbers.length?"":"numbers__container--filled"},e._l(e.numbers,(function(t,n){return r("li",{key:n,staticClass:"numbers__singleNumber"},[r("p",{class:0===t?"numbers__singleNumber--hidden":""},[e._v(" "+e._s(t)+" ")])])})),0)])])],1)},f=[],g={name:"Generator100Board",props:{worksheetTitle:String},data:function(){return{numbersVisible:"60",numbersVisibleOptions:[20,40,60,80],numbers:[],title:!1}},methods:{generateActivity:function(){this.title=!0,this.numbers=[];for(var e=1;e<=100;e++)this.numbers.push(e);this.create100BoardElements()},create100BoardElements:function(){var e=this.createArrayOfIndexesToHide();return this.changeSomeNumbersToZero(e,this.numbers)},createArrayOfIndexesToHide:function(){var e=[],t=100-this.numbersVisible;while(e.length<t){var r=Math.floor(100*Math.random());-1===e.indexOf(r)&&e.push(r)}return e},changeSomeNumbersToZero:function(e,t){for(var r=0;r<e.length;r++){var n=e[r];t[n]=0}return t}},computed:{getPreviewWorksheetTitle:function(){return this.title?this.worksheetTitle:""}},created:function(){this.generateActivity()}},p=g,h=(r("e911"),Object(u["a"])(p,m,f,!1,null,"0fe5a6cc",null)),b=h.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"generator"},[r("h3",{staticClass:"generator__title"},[e._v(e._s(e.worksheetTitle)+" worksheet generator")]),r("form",{staticClass:"generator__options",attrs:{action:"",method:""},on:{submit:function(e){e.preventDefault()},change:function(t){return e.generateActivity()}}},[r("fieldset",{staticClass:"form__fieldset"},[r("legend",{staticClass:"form__fieldset--legend"},[e._v("Choose range")]),r("div",{staticClass:"form__options--radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstNumberRange,expression:"firstNumberRange"}],attrs:{type:"radio",id:"fst-half",name:"numberRange"},domProps:{value:0,checked:e._q(e.firstNumberRange,0)},on:{change:function(t){e.firstNumberRange=0}}}),r("label",{staticClass:"options__radio--label",attrs:{for:"fst-half"}},[e._v("from 10 to 50")])]),r("div",{staticClass:"form__options--radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstNumberRange,expression:"firstNumberRange"}],attrs:{type:"radio",id:"snd-half",name:"numberRange"},domProps:{value:1,checked:e._q(e.firstNumberRange,1)},on:{change:function(t){e.firstNumberRange=1}}}),r("label",{staticClass:"options__radio--label",attrs:{for:"snd-half"}},[e._v("from 50 to 100")])]),r("div",{staticClass:"form__options--radio custom"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.firstNumberRange,expression:"firstNumberRange"}],attrs:{type:"radio",id:"custom",name:"numberRange"},domProps:{value:2,checked:e._q(e.firstNumberRange,2)},on:{change:function(t){e.firstNumberRange=2}}}),r("label",{staticClass:"options__radio--label",attrs:{for:"custom"}},[e._v("custom range:")]),r("BaseInput",{attrs:{type:"text",placeholder:"min"},model:{value:e.optionalRange.min,callback:function(t){e.$set(e.optionalRange,"min",t)},expression:"optionalRange.min"}}),r("BaseInput",{attrs:{type:"text",placeholder:"max"},model:{value:e.optionalRange.max,callback:function(t){e.$set(e.optionalRange,"max",t)},expression:"optionalRange.max"}})],1)]),r("fieldset",{staticClass:"form__fieldset"},[r("legend",{staticClass:"form__fieldset--legend"},[e._v("Choose order")]),r("div",{staticClass:"form__options--radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.ascendingOrder,expression:"ascendingOrder"}],attrs:{type:"radio",id:"ascending",name:"order"},domProps:{value:!0,checked:e._q(e.ascendingOrder,!0)},on:{change:function(t){e.ascendingOrder=!0}}}),r("label",{staticClass:"options__radio--label",attrs:{for:"ascending"}},[e._v("ascending")])]),r("div",{staticClass:"form__options--radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.ascendingOrder,expression:"ascendingOrder"}],attrs:{type:"radio",id:"descending",name:"order"},domProps:{value:!1,checked:e._q(e.ascendingOrder,!1)},on:{change:function(t){e.ascendingOrder=!1}}}),r("label",{staticClass:"options__radio--label",attrs:{for:"descending"}},[e._v("descending")])])]),r("fieldset",{staticClass:"form__fieldset"},[r("BaseSelect",{attrs:{label:"How many rows",options:e.numberOfRowsOptions},model:{value:e.numberOfRows,callback:function(t){e.numberOfRows=e._n(t)},expression:"numberOfRows"}})],1),r("fieldset",{staticClass:"form__fieldset"},[r("BaseSelect",{attrs:{label:"How many numbers per row",options:e.numberPerRowOptions},model:{value:e.numberPerRow,callback:function(t){e.numberPerRow=e._n(t)},expression:"numberPerRow"}})],1),r("fieldset",{staticClass:"form__fieldset buttons"},[r("BaseButton",{attrs:{icon:"cogs",classModifier:"create"},on:{click:e.generateActivity}},[e._v("Refresh")])],1)]),r("BasePreview",{staticClass:"generator__preview",attrs:{isTitle:e.title,previewWorksheetTitle:e.getPreviewWorksheetTitle}},[r("ul",{staticClass:"activity"},e._l(e.numberLines,(function(t,n){return r("li",{key:n},[r("ul",{staticClass:"numberLine"},e._l(t,(function(t,n){return r("li",{key:n,staticClass:"numberLine__element"},[r("p",{class:0===t?"numberLine__element--hidden":""},[e._v(" "+e._s(t)+" ")])])})),0)])})),0)])],1)},v=[],w={name:"GeneratorNumberLine",props:{worksheetTitle:String},data:function(){return{numberLines:[],numberOfRows:4,numberOfRowsOptions:[3,4,5,6,7,8,9],numberPerRow:10,numberPerRowOptions:[8,9,10],ascendingOrder:!0,firstNumberRange:0,optionalRange:{min:0,max:100},title:!1}},methods:{generateActivity:function(){this.title=!0,this.numberLines=[];for(var e=0;e<this.numberOfRows;e++){var t=this.createSingleLine();this.numberLines.push(t)}},createSingleLine:function(){var e=[],t=this.createArrayOfIndexesToHide();if(this.ascendingOrder)for(var r=this.setNumbersRangeAscending(),n=0;n<this.numberPerRow;n++)e.push(r+n);else for(var s=this.setNumbersRangeDescending(),i=0;i<this.numberPerRow;i++)e.push(s-i);return this.changeSomeNumbersToZero(t,e)},createArrayOfIndexesToHide:function(){var e=[];while(e.length<this.numberPerRow-3){var t=Math.floor(Math.random()*this.numberPerRow);-1===e.indexOf(t)&&e.push(t)}return e},changeSomeNumbersToZero:function(e,t){for(var r=0;r<e.length;r++){var n=e[r];t[n]=0}return t},setNumbersRangeAscending:function(){var e,t;return 0===this.firstNumberRange?(e=10,t=40):1===this.firstNumberRange?(e=50,t=90):(e=parseInt(this.optionalRange.min),t=parseInt(this.optionalRange.max)-parseInt(this.numberPerRow)),this.getRandomNumber(e,t)},setNumbersRangeDescending:function(){var e,t;return 0===this.firstNumberRange?(e=20,t=50):1===this.firstNumberRange?(e=60,t=100):(e=parseInt(this.optionalRange.min)+parseInt(this.numberPerRow),t=parseInt(this.optionalRange.max)),this.getRandomNumber(e,t)},getRandomNumber:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}},computed:{getPreviewWorksheetTitle:function(){return this.title?this.worksheetTitle:""}},created:function(){this.generateActivity()}},k=w,R=(r("12dc"),Object(u["a"])(k,_,v,!1,null,"52df098e",null)),C=R.exports,O=r("4ffb"),y={name:"Workspace",components:{GeneratorAddition:d,Generator100Board:b,GeneratorNumberLine:C},data:function(){return{worksheets:O.worksheetTypes,selectedWorksheet:""}},created:function(){this.assignSelectedWorksheet()},methods:{assignSelectedWorksheet:function(){var e=this,t=this.$route.params.generatorType?this.worksheets.find((function(t){return t.slug===e.$route.params.generatorType})):"";this.selectedWorksheet=t}}},N=y,x=(r("5c4f"),Object(u["a"])(N,n,s,!1,null,"12d18cb3",null));t["default"]=x.exports},c5e2:function(e,t,r){},ca13:function(e,t,r){},dfe7:function(e,t,r){e.exports=r.p+"img/contact.832c25bf.png"},e911:function(e,t,r){"use strict";r("c5e2")},ec5a:function(e,t,r){"use strict";r("8e59")}}]);
//# sourceMappingURL=generators.2f1170d3.js.map