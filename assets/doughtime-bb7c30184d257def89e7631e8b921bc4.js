"use strict"
define("doughtime/app",["exports","doughtime/resolver","ember-load-initializers","doughtime/config/environment"],function(e,t,n,i){Object.defineProperty(e,"__esModule",{value:!0})
var l=Ember.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:t.default});(0,n.default)(l,i.default.modulePrefix),e.default=l}),define("doughtime/components/ivy-tabs-tab",["exports","ivy-tabs/components/ivy-tabs-tab"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("doughtime/components/ivy-tabs-tablist",["exports","ivy-tabs/components/ivy-tabs-tablist"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("doughtime/components/ivy-tabs-tabpanel",["exports","ivy-tabs/components/ivy-tabs-tabpanel"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("doughtime/components/ivy-tabs",["exports","ivy-tabs/components/ivy-tabs"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("doughtime/components/temperature-select",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({})}),define("doughtime/components/weight-select",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({})}),define("doughtime/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({init:function(){this._super.apply(this,arguments),this.set("selection","kettle")},coldWeight:Ember.computed("coldTemp","finalTemp","finalWeight",function(){var e=Math.round(this.finalWeight*((this.finalTemp-this.hotTemp)/(this.coldTemp-this.hotTemp)))
if(e)return e}),hotWeight:Ember.computed("coldWeight","finalWeight",function(){var e=this.finalWeight-this.coldWeight
if(e)return e}),actions:{selectTab:function(e){this.set("selection",e),"kettle"===e&&this.set("hotTemp",100)}}})}),define("doughtime/helpers/app-version",["exports","doughtime/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function i(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=t.default.APP.version,a=i.versionOnly||i.hideSha,o=i.shaOnly||i.hideVersion,r=null
return a&&(i.showExtended&&(r=l.match(n.versionExtendedRegExp)),r||(r=l.match(n.versionRegExp))),o&&(r=l.match(n.shaRegExp)),r?r[0]:l}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=i,e.default=Ember.Helper.helper(i)}),define("doughtime/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("doughtime/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("doughtime/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","doughtime/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var i=void 0,l=void 0
n.default.APP&&(i=n.default.APP.name,l=n.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(i,l)}}),define("doughtime/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("doughtime/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("doughtime/initializers/export-application-global",["exports","doughtime/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var i,l=t.default.exportApplicationGlobal
i="string"==typeof l?l:Ember.String.classify(t.default.modulePrefix),n[i]||(n[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[i]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("doughtime/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("doughtime/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("doughtime/router",["exports","doughtime/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){}),e.default=n}),define("doughtime/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("doughtime/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"NkHcuFMB",block:'{"symbols":["tabs","tablist"],"statements":[[4,"ivy-tabs",null,[["selection"],[[22,["selection"]]]],{"statements":[[4,"component",[[21,1,["tablist"]]],null,{"statements":[[6,"ul"],[10,"role","presentation"],[10,"class","flex justify-around"],[8],[0,"\\n  "],[6,"li"],[10,"role","presentation"],[8],[0,"\\n    "],[4,"component",[[21,2,["tab"]],"kettle"],[["on-select"],[[26,"action",[[21,0,[]],"selectTab"],null]]],{"statements":[[0,"Kettle"]],"parameters":[]},null],[0,"\\n  "],[9],[0,"\\n  "],[6,"li"],[10,"role","presentation"],[8],[0,"\\n    "],[4,"component",[[21,2,["tab"]],"mix"],[["on-select"],[[26,"action",[[21,0,[]],"selectTab"],null]]],{"statements":[[0,"Mix"]],"parameters":[]},null],[0,"\\n  "],[9],[0,"\\n  "],[6,"li"],[10,"role","presentation"],[8],[0,"\\n    "],[4,"component",[[21,2,["tab"]],"DDT"],[["on-select"],[[26,"action",[[21,0,[]],"selectTab"],null]]],{"statements":[[0,"DDT"]],"parameters":[]},null],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"parameters":[2]},null],[0,"\\n"],[4,"component",[[21,1,["tabpanel"]],"kettle"],null,{"statements":[[1,[26,"temperature-select",null,[["label","temp","previous"],["Cold water:",[22,["coldTemp"]],[22,["previousColdTemp"]]]]],false],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"component",[[21,1,["tabpanel"]],"mix"],null,{"statements":[[1,[26,"temperature-select",null,[["label","temp","previous"],["Cold water:",[22,["coldTemp"]],[22,["previousColdTemp"]]]]],false],[0,"\\n"],[1,[26,"temperature-select",null,[["label","temp","previous"],["Hot water:",[22,["hotTemp"]],[22,["previousHotTemp"]]]]],false],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"component",[[21,1,["tabpanel"]],"DDT"],null,{"statements":[[6,"h2"],[8],[0,"Baz"],[9],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null],[1,[26,"temperature-select",null,[["label","temp","previous"],["Final Temp:",[22,["finalTemp"]],[22,["previousFinalTemp"]]]]],false],[0,"\\n"],[1,[26,"weight-select",null,[["label","weight","previous"],["Final Weight:",[22,["finalWeight"]],[22,["previousFinalWeight"]]]]],false],[0,"\\n\\nCold weight: "],[1,[20,"coldWeight"],false],[0,"\\nHot weight: "],[1,[20,"hotWeight"],false],[0,"\\n"],[1,[20,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"doughtime/templates/application.hbs"}})}),define("doughtime/templates/components/temperature-select",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"OXNhvf2K",block:'{"symbols":["prev","&default"],"statements":[[6,"div"],[10,"class","flex justify-around"],[8],[0,"\\n  "],[1,[20,"label"],false],[0," "],[1,[26,"input",null,[["type","pattern","value"],["number","\\\\d*",[22,["temp"]]]]],false],[0,"\\n"],[9],[0,"\\n"],[6,"ul"],[10,"class","flex justift-around"],[8],[0,"\\n"],[4,"each",[[22,["previous"]]],null,{"statements":[[0,"  "],[6,"li"],[8],[1,[21,1,[]],false],[9],[0,"\\n"]],"parameters":[1]},null],[9],[0,"\\n"],[13,2],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"doughtime/templates/components/temperature-select.hbs"}})}),define("doughtime/templates/components/weight-select",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"w5JFUm/k",block:'{"symbols":["prev","&default"],"statements":[[6,"div"],[10,"class","flex justify-around"],[8],[0,"\\n  "],[1,[20,"label"],false],[0," "],[1,[26,"input",null,[["type","pattern","value"],["number","\\\\d*",[22,["weight"]]]]],false],[0,"\\n"],[9],[0,"\\n"],[6,"ul"],[8],[0,"\\n"],[4,"each",[[22,["previous"]]],null,{"statements":[[0,"  "],[6,"li"],[8],[1,[21,1,[]],false],[9],[0,"\\n"]],"parameters":[1]},null],[9],[0,"\\n"],[13,2],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"doughtime/templates/components/weight-select.hbs"}})}),define("doughtime/config/environment",[],function(){try{var e="doughtime/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("doughtime/app").default.create({name:"doughtime",version:"0.0.0+8d7107a3"})
