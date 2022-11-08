parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Rr4l":[function(require,module,exports) {

},{}],"X8qw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.todoArray=exports.saveToLocflStorage=exports.loadFromLocalStorage=void 0,require("./data-todos.css");var o=[];exports.todoArray=o;var r=function(){var r=JSON.parse(localStorage.getItem("todos"));return null!=r&&(exports.todoArray=o=Array.from(r)),r};exports.loadFromLocalStorage=r;var t=function(){localStorage.setItem("todos",JSON.stringify(o))};exports.saveToLocflStorage=t;
},{"./data-todos.css":"Rr4l"}],"qH3n":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"loadFromLocalStorage",{enumerable:!0,get:function(){return e.loadFromLocalStorage}}),Object.defineProperty(exports,"saveToLocflStorage",{enumerable:!0,get:function(){return e.saveToLocflStorage}}),Object.defineProperty(exports,"todoArray",{enumerable:!0,get:function(){return e.todoArray}});var e=require("./data-todo");
},{"./data-todo":"X8qw"}],"myNR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderTodos=exports.doneItem=exports.deleteLastFromLocalStorage=exports.deleteAllFromLocalStorage=exports.createInput=exports.createButton=exports.addTodoItem=void 0,require("./cummon-functions.css");var t=require("../components/data-todo"),e=function(t,e){var o=document.createElement("button");return o.innerText=t,o.classList.add(e),o.classList.add("btnStyle"),o};exports.createButton=e;var o=function(t,e){var o=document.createElement("input");return o.placeholder=t,o.type=e,o.classList.add("inputStyle"),o};exports.createInput=o,(0,t.loadFromLocalStorage)();var r=function(e){var o=document.querySelector(".itemsRow").querySelector("[for="+e.target.getAttribute("id")+"]").innerHTML;t.todoArray.forEach(function(e){e.todo===o&&(e.checked=!e.checked,localStorage.setItem("todos",JSON.stringify(t.todoArray)))})};exports.doneItem=r;var a=function(){t.todoArray.pop(),(0,t.saveToLocflStorage)(),d()};exports.deleteLastFromLocalStorage=a;var n=function(){t.todoArray.length=0,(0,t.saveToLocflStorage)(),d()};function c(e){if("deletCurrentTodo"==e.target.className){var o=e.target.closest("li");t.todoArray.splice(o.className,1),(0,t.saveToLocflStorage)(),d(),o.remove()}}exports.deleteAllFromLocalStorage=n;var s=function(e){var o={todo:e,checked:!1,date:"".concat((new Date).getDate(),"/").concat((new Date).getMonth()+1,"/").concat((new Date).getFullYear())};t.todoArray.push(o),(0,t.saveToLocflStorage)(),d()};exports.addTodoItem=s;var d=function(){(0,t.loadFromLocalStorage)();var e="";t.todoArray.forEach(function(t,o){e+="\n\t\t<li class='".concat(o,"'>\n\t\t<input type='checkbox'  id='item_").concat(o,"' ").concat(t.checked?"checked":""," >\n\t\t<label for='item_").concat(o,"'>").concat(t.todo,"</label>\n\t\t<span class=\"begintodo\">start task: <b class='dateTodo'>").concat(t.date,'</b></span>\n\t\t<button class = "deletCurrentTodo">X</button>\n\t\t</li>\n\t\t')});var o=document.querySelector(".itemsRow");return o.innerHTML=e,o.addEventListener("change",r),o.addEventListener("click",c),e};exports.renderTodos=d;
},{"./cummon-functions.css":"Rr4l","../components/data-todo":"qH3n"}],"XEmp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"addTodoItem",{enumerable:!0,get:function(){return e.addTodoItem}}),Object.defineProperty(exports,"createButton",{enumerable:!0,get:function(){return e.createButton}}),Object.defineProperty(exports,"createInput",{enumerable:!0,get:function(){return e.createInput}}),Object.defineProperty(exports,"deleteAllFromLocalStorage",{enumerable:!0,get:function(){return e.deleteAllFromLocalStorage}}),Object.defineProperty(exports,"deleteCurrentItem",{enumerable:!0,get:function(){return e.deleteCurrentItem}}),Object.defineProperty(exports,"deleteLastFromLocalStorage",{enumerable:!0,get:function(){return e.deleteLastFromLocalStorage}}),Object.defineProperty(exports,"doneItem",{enumerable:!0,get:function(){return e.doneItem}}),Object.defineProperty(exports,"renderTodos",{enumerable:!0,get:function(){return e.renderTodos}});var e=require("./cummon-functions");
},{"./cummon-functions":"myNR"}],"yDci":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createHerader=void 0,require("./header.css");var e=require("../../cummon-functions"),t=function(){var t=document.createElement("div");t.classList.add("todoHeader");var r=(0,e.createButton)("Add Item","btnstyleAdd"),a=(0,e.createInput)("Enter todo","text"),n=(0,e.createButton)("Delete Last","btnstyleLast"),d=(0,e.createButton)("Delete All","btnstyleAll");return t.append(a),t.append(r),t.append(n),t.append(d),r.addEventListener("click",function(){""!==a.value&&(0,e.addTodoItem)(a.value)}),d.addEventListener("click",function(){(0,e.deleteAllFromLocalStorage)()}),n.addEventListener("click",function(){(0,e.deleteLastFromLocalStorage)()}),t};exports.createHerader=t;
},{"./header.css":"Rr4l","../../cummon-functions":"XEmp"}],"fW8C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"createHerader",{enumerable:!0,get:function(){return e.createHerader}});var e=require("./header");
},{"./header":"yDci"}],"Oka2":[function(require,module,exports) {
"use strict";function e(){var e=document.createElement("ul");return e.classList.add("itemsRow"),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createAppBody=e,require("./body.css");
},{"./body.css":"Rr4l"}],"UPOk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"createAppBody",{enumerable:!0,get:function(){return e.createAppBody}});var e=require("./body");
},{"./body":"Oka2"}],"ylCf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createApp=void 0,require("./app.css");var e=require("../header"),r=require("../body"),p=function(){var p=document.createElement("div"),t=(0,e.createHerader)(),a=(0,r.createAppBody)();return p.append(t),p.append(a),p};exports.createApp=p;
},{"./app.css":"Rr4l","../header":"fW8C","../body":"UPOk"}],"g68H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"createApp",{enumerable:!0,get:function(){return e.createApp}});var e=require("./app");
},{"./app":"ylCf"}],"uBxZ":[function(require,module,exports) {
"use strict";var e=require("./components/app"),r=require("./cummon-functions"),o=document.querySelector("#root");o.append((0,e.createApp)()),(0,r.renderTodos)();
},{"./components/app":"g68H","./cummon-functions":"XEmp"}]},{},["uBxZ"], null)
//# sourceMappingURL=/src.1237d857.js.map