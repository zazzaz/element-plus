(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DOCS zh-CN4"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./website/md-loader/index.js!./website/docs/zh-CN/border.md?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/dist??ref--5-0!./website/md-loader!./website/docs/zh-CN/border.md?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bus */ \"./website/bus.js\");\n\nconst varMap = {\n  '$--box-shadow-light': 'boxShadowLight',\n  '$--box-shadow-base': 'boxShadowBase',\n  '$--border-radius-base': 'borderRadiusBase',\n  '$--border-radius-small': 'borderRadiusSmall'\n};\nconst original = {\n  boxShadowLight: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',\n  boxShadowBase: '0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)',\n  borderRadiusBase: '4px',\n  borderRadiusSmall: '2px'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mounted() {\n    this.setGlobal();\n  },\n\n  methods: {\n    setGlobal() {\n      if (window.userThemeConfig) {\n        this.global = window.userThemeConfig.global;\n      }\n    }\n\n  },\n\n  data() {\n    return {\n      global: {},\n      boxShadowLight: '',\n      boxShadowBase: '',\n      borderRadiusBase: '',\n      borderRadiusSmall: ''\n    };\n  },\n\n  watch: {\n    global: {\n      immediate: true,\n\n      handler(value) {\n        Object.keys(varMap).forEach(c => {\n          if (value[c]) {\n            this[varMap[c]] = value[c];\n          } else {\n            this[varMap[c]] = original[varMap[c]];\n          }\n        });\n      }\n\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPyEuL3dlYnNpdGUvbWQtbG9hZGVyL2luZGV4LmpzIS4vd2Vic2l0ZS9kb2NzL3poLUNOL2JvcmRlci5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlYnNpdGUvZG9jcy96aC1DTi9ib3JkZXIubWQ/NTVlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudCBlbGVtZW50LWRvY1wiPlxuICAgICAgXG48aDIgaWQ9XCJib3JkZXItYmlhbi1rdWFuZ1wiPjxhIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiIGhyZWY9XCIjYm9yZGVyLWJpYW4ta3VhbmdcIj7CtjwvYT4gQm9yZGVyIOi+ueahhjwvaDI+XG48cD7miJHku6zlr7novrnmoYbov5vooYznu5/kuIDop4TojIPvvIzlj6/nlKjkuo7mjInpkq7jgIHljaHniYfjgIHlvLnnqpfnrYnnu4Tku7bph4zjgII8L3A+XG48aDMgaWQ9XCJiaWFuLWt1YW5nXCI+PGEgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCIgaHJlZj1cIiNiaWFuLWt1YW5nXCI+wrY8L2E+IOi+ueahhjwvaDM+XG48cD7miJHku6zmj5Dkvpvkuobku6XkuIvlh6Dnp43ovrnmoYbmoLflvI/vvIzku6XkvpvpgInmi6njgII8L3A+XG48dGFibGUgY2xhc3M9XCJkZW1vLWJvcmRlclwiPlxuICA8dGJvZHk+XG4gICAgPHRyPlxuICAgICAgPHRkIGNsYXNzPVwidGV4dFwiPuWQjeensDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJ0ZXh0XCI+57KX57uGPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cImxpbmVcIj7kuL7kvos8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyPlxuICAgICAgPHRkIGNsYXNzPVwidGV4dFwiPlxi5a6e57q/PC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cInRleHRcIj4xcHg8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwibGluZVwiPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZCBjbGFzcz1cInRleHRcIj5cYuiZmue6vzwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJ0ZXh0XCI+MnB4PC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cImxpbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRhc2hlZFwiPjwvZGl2PlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cbjxoMyBpZD1cInl1YW4tamlhb1wiPjxhIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiIGhyZWY9XCIjeXVhbi1qaWFvXCI+wrY8L2E+IOWchuinkjwvaDM+XG48cD7miJHku6zmj5Dkvpvkuobku6XkuIvlh6Dnp43lnIbop5LmoLflvI/vvIzku6XkvpvpgInmi6njgII8L3A+XG48ZWwtcm93IDpndXR0ZXI9XCIxMlwiIGNsYXNzPVwiZGVtby1yYWRpdXNcIj5cbiAgPGVsLWNvbCA6c3Bhbj1cIjZcIiA6eHM9XCJ7c3BhbjogMTJ9XCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+5peg5ZyG6KeSPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInZhbHVlXCI+Ym9yZGVyLXJhZGl1czogMHB4PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJhZGl1c1wiPjwvZGl2PlxuICA8L2VsLWNvbD5cbiAgPGVsLWNvbCA6c3Bhbj1cIjZcIiA6eHM9XCJ7c3BhbjogMTJ9XCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+5bCP5ZyG6KeSPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInZhbHVlXCI+Ym9yZGVyLXJhZGl1czoge3tib3JkZXJSYWRpdXNTbWFsbH19PC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJyYWRpdXNcIlxuICAgICAgOnN0eWxlPVwieyBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1c1NtYWxsIH1cIlxuICAgID48L2Rpdj5cbiAgPC9lbC1jb2w+XG4gIDxlbC1jb2wgOnNwYW49XCI2XCIgOnhzPVwie3NwYW46IDEyfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPuWkp+WchuinkjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZVwiPmJvcmRlci1yYWRpdXM6IHt7Ym9yZGVyUmFkaXVzQmFzZX19PC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJyYWRpdXNcIlxuICAgICAgOnN0eWxlPVwieyBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1c0Jhc2UgfVwiXG4gICAgPjwvZGl2PlxuICA8L2VsLWNvbD5cbiAgPGVsLWNvbCA6c3Bhbj1cIjZcIiA6eHM9XCJ7c3BhbjogMTJ9XCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+5ZyG5b2i5ZyG6KeSPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInZhbHVlXCI+Ym9yZGVyLXJhZGl1czogMzBweDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyYWRpdXMgcmFkaXVzLTMwXCI+PC9kaXY+XG4gIDwvZWwtY29sPlxuPC9lbC1yb3c+XG48aDMgaWQ9XCJ0b3UteWluZ1wiPjxhIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiIGhyZWY9XCIjdG91LXlpbmdcIj7CtjwvYT4g5oqV5b2xPC9oMz5cbjxwPuaIkeS7rOaPkOS+m+S6huS7peS4i+WHoOenjeaKleW9seagt+W8j++8jOS7peS+m+mAieaLqeOAgjwvcD5cbjxkaXZcbmNsYXNzPVwiZGVtby1zaGFkb3dcIlxuOnN0eWxlPVwieyBib3hTaGFkb3c6IGJveFNoYWRvd0Jhc2UgfVwiXG4+PC9kaXY+XG48c3BhbiBjbGFzcz1cImRlbW8tc2hhZG93LXRleHRcIj7ln7rnoYDmipXlvbEgYm94LXNoYWRvdzoge3tib3hTaGFkb3dCYXNlfX08L3NwYW4+XG48ZGl2XG5jbGFzcz1cImRlbW8tc2hhZG93XCJcbjpzdHlsZT1cInsgYm94U2hhZG93OiBib3hTaGFkb3dMaWdodCB9XCJcbj48L2Rpdj5cbjxzcGFuIGNsYXNzPVwiZGVtby1zaGFkb3ctdGV4dFwiPua1heiJsuaKleW9sSBib3gtc2hhZG93OiB7e2JveFNoYWRvd0xpZ2h0fX08L3NwYW4+XG5cbiAgICA8L3NlY3Rpb24+XG4gIDwvdGVtcGxhdGU+XG4gIDxzY3JpcHQ+XG4gIGltcG9ydCBidXMgZnJvbSAnLi4vLi4vYnVzJztcbiAgY29uc3QgdmFyTWFwID0ge1xuICAgICckLS1ib3gtc2hhZG93LWxpZ2h0JzogJ2JveFNoYWRvd0xpZ2h0JyxcbiAgICAnJC0tYm94LXNoYWRvdy1iYXNlJzogJ2JveFNoYWRvd0Jhc2UnLFxuICAgICckLS1ib3JkZXItcmFkaXVzLWJhc2UnOiAnYm9yZGVyUmFkaXVzQmFzZScsXG4gICAgJyQtLWJvcmRlci1yYWRpdXMtc21hbGwnOiAnYm9yZGVyUmFkaXVzU21hbGwnXG4gIH07XG4gIGNvbnN0IG9yaWdpbmFsID0ge1xuICAgIGJveFNoYWRvd0xpZ2h0OiAnMCAycHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgYm94U2hhZG93QmFzZTogJzAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIC4xMiksIDAgMCA2cHggcmdiYSgwLCAwLCAwLCAuMDQpJyxcbiAgICBib3JkZXJSYWRpdXNCYXNlOiAnNHB4JyxcbiAgICBib3JkZXJSYWRpdXNTbWFsbDogJzJweCdcbiAgfVxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbW91bnRlZCgpIHtcbiAgICAgIHRoaXMuc2V0R2xvYmFsKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBzZXRHbG9iYWwoKSB7XG4gICAgICAgIGlmICh3aW5kb3cudXNlclRoZW1lQ29uZmlnKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWwgPSB3aW5kb3cudXNlclRoZW1lQ29uZmlnLmdsb2JhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdsb2JhbDoge30sXG4gICAgICAgIGJveFNoYWRvd0xpZ2h0OiAnJyxcbiAgICAgICAgYm94U2hhZG93QmFzZTogJycsXG4gICAgICAgIGJvcmRlclJhZGl1c0Jhc2U6ICcnLFxuICAgICAgICBib3JkZXJSYWRpdXNTbWFsbDogJydcbiAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICBnbG9iYWw6IHtcbiAgICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXModmFyTWFwKS5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWVbY10pIHtcbiAgICAgICAgICAgICAgdGhpc1t2YXJNYXBbY11dID0gdmFsdWVbY11cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXNbdmFyTWFwW2NdXSA9IG9yaWdpbmFsW3Zhck1hcFtjXV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4gICJdLCJtYXBwaW5ncyI6IkFBNkVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQURBO0FBcEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./website/md-loader/index.js!./website/docs/zh-CN/border.md?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./website/md-loader/index.js!./website/docs/zh-CN/border.md?vue&type=template&id=cf965b6c&bindings={\"setGlobal\":\"options\",\"global\":\"data\",\"boxShadowLight\":\"data\",\"boxShadowBase\":\"data\",\"borderRadiusBase\":\"data\",\"borderRadiusSmall\":\"data\"}":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--5-0!./website/md-loader!./website/docs/zh-CN/border.md?vue&type=template&id=cf965b6c&bindings={"setGlobal":"options","global":"data","boxShadowLight":"data","boxShadowBase":"data","borderRadiusBase":"data","borderRadiusSmall":"data"} ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"content element-doc\"\n};\n\nconst _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createStaticVNode\"])(\"<h2 id=\\\"border-bian-kuang\\\"><a class=\\\"header-anchor\\\" href=\\\"#border-bian-kuang\\\">¶</a> Border 边框</h2><p>我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。</p><h3 id=\\\"bian-kuang\\\"><a class=\\\"header-anchor\\\" href=\\\"#bian-kuang\\\">¶</a> 边框</h3><p>我们提供了以下几种边框样式，以供选择。</p><table class=\\\"demo-border\\\"><tbody><tr><td class=\\\"text\\\">名称</td><td class=\\\"text\\\">粗细</td><td class=\\\"line\\\">举例</td></tr><tr><td class=\\\"text\\\">\\b实线</td><td class=\\\"text\\\">1px</td><td class=\\\"line\\\"><div></div></td></tr><tr><td class=\\\"text\\\">\\b虚线</td><td class=\\\"text\\\">2px</td><td class=\\\"line\\\"><div class=\\\"dashed\\\"></div></td></tr></tbody></table><h3 id=\\\"yuan-jiao\\\"><a class=\\\"header-anchor\\\" href=\\\"#yuan-jiao\\\">¶</a> 圆角</h3><p>我们提供了以下几种圆角样式，以供选择。</p>\", 7);\n\nconst _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n  class: \"title\"\n}, \"无圆角\", -1\n/* HOISTED */\n);\n\nconst _hoisted_10 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n  class: \"value\"\n}, \"border-radius: 0px\", -1\n/* HOISTED */\n);\n\nconst _hoisted_11 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n  class: \"radius\"\n}, null, -1\n/* HOISTED */\n);\n\nconst _hoisted_12 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n  class: \"title\"\n}, \"小圆角\", -1\n/* HOISTED */\n);\n\nconst _hoisted_13 = {\n  class: \"value\"\n};\n\nconst _hoisted_14 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n  class: \"title\"\n}, \"大圆角\", -1\n/* HOISTED */\n);\n\nconst _hoisted_15 = {\n  class: \"value\"\n};\n\nconst _hoisted_16 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n  class: \"title\"\n}, \"圆形圆角\", -1\n/* HOISTED */\n);\n\nconst _hoisted_17 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n  class: \"value\"\n}, \"border-radius: 30px\", -1\n/* HOISTED */\n);\n\nconst _hoisted_18 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n  class: \"radius radius-30\"\n}, null, -1\n/* HOISTED */\n);\n\nconst _hoisted_19 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"h3\", {\n  id: \"tou-ying\"\n}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"a\", {\n  class: \"header-anchor\",\n  href: \"#tou-ying\"\n}, \"¶\"), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" 投影\")], -1\n/* HOISTED */\n);\n\nconst _hoisted_20 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"p\", null, \"我们提供了以下几种投影样式，以供选择。\", -1\n/* HOISTED */\n);\n\nconst _hoisted_21 = {\n  class: \"demo-shadow-text\"\n};\nconst _hoisted_22 = {\n  class: \"demo-shadow-text\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_el_col = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"el-col\");\n\n  const _component_el_row = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"el-row\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"section\", _hoisted_1, [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_el_row, {\n    gutter: 12,\n    class: \"demo-radius\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_el_col, {\n      span: 6,\n      xs: {\n        span: 12\n      }\n    }, {\n      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [_hoisted_9, _hoisted_10, _hoisted_11]),\n      _: 1\n    }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_el_col, {\n      span: 6,\n      xs: {\n        span: 12\n      }\n    }, {\n      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [_hoisted_12, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_13, \"border-radius: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($data.borderRadiusSmall), 1\n      /* TEXT */\n      ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n        class: \"radius\",\n        style: {\n          borderRadius: $data.borderRadiusSmall\n        }\n      }, null, 4\n      /* STYLE */\n      )]),\n      _: 1\n    }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_el_col, {\n      span: 6,\n      xs: {\n        span: 12\n      }\n    }, {\n      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [_hoisted_14, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_15, \"border-radius: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($data.borderRadiusBase), 1\n      /* TEXT */\n      ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n        class: \"radius\",\n        style: {\n          borderRadius: $data.borderRadiusBase\n        }\n      }, null, 4\n      /* STYLE */\n      )]),\n      _: 1\n    }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_el_col, {\n      span: 6,\n      xs: {\n        span: 12\n      }\n    }, {\n      default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(() => [_hoisted_16, _hoisted_17, _hoisted_18]),\n      _: 1\n    })]),\n    _: 1\n  }), _hoisted_19, _hoisted_20, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n    class: \"demo-shadow\",\n    style: {\n      boxShadow: $data.boxShadowBase\n    }\n  }, null, 4\n  /* STYLE */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", _hoisted_21, \"基础投影 box-shadow: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($data.boxShadowBase), 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n    class: \"demo-shadow\",\n    style: {\n      boxShadow: $data.boxShadowLight\n    }\n  }, null, 4\n  /* STYLE */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", _hoisted_22, \"浅色投影 box-shadow: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($data.boxShadowLight), 1\n  /* TEXT */\n  )]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/IS4vd2Vic2l0ZS9tZC1sb2FkZXIvaW5kZXguanMhLi93ZWJzaXRlL2RvY3MvemgtQ04vYm9yZGVyLm1kP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNmOTY1YjZjJmJpbmRpbmdzPXtcInNldEdsb2JhbFwiOlwib3B0aW9uc1wiLFwiZ2xvYmFsXCI6XCJkYXRhXCIsXCJib3hTaGFkb3dMaWdodFwiOlwiZGF0YVwiLFwiYm94U2hhZG93QmFzZVwiOlwiZGF0YVwiLFwiYm9yZGVyUmFkaXVzQmFzZVwiOlwiZGF0YVwiLFwiYm9yZGVyUmFkaXVzU21hbGxcIjpcImRhdGFcIn0uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL2RvY3MvemgtQ04vYm9yZGVyLm1kPzU1ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gIDx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQgZWxlbWVudC1kb2NcIj5cbiAgICAgIFxuPGgyIGlkPVwiYm9yZGVyLWJpYW4ta3VhbmdcIj48YSBjbGFzcz1cImhlYWRlci1hbmNob3JcIiBocmVmPVwiI2JvcmRlci1iaWFuLWt1YW5nXCI+wrY8L2E+IEJvcmRlciDovrnmoYY8L2gyPlxuPHA+5oiR5Lus5a+56L655qGG6L+b6KGM57uf5LiA6KeE6IyD77yM5Y+v55So5LqO5oyJ6ZKu44CB5Y2h54mH44CB5by556qX562J57uE5Lu26YeM44CCPC9wPlxuPGgzIGlkPVwiYmlhbi1rdWFuZ1wiPjxhIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiIGhyZWY9XCIjYmlhbi1rdWFuZ1wiPsK2PC9hPiDovrnmoYY8L2gzPlxuPHA+5oiR5Lus5o+Q5L6b5LqG5Lul5LiL5Yeg56eN6L655qGG5qC35byP77yM5Lul5L6b6YCJ5oup44CCPC9wPlxuPHRhYmxlIGNsYXNzPVwiZGVtby1ib3JkZXJcIj5cbiAgPHRib2R5PlxuICAgIDx0cj5cbiAgICAgIDx0ZCBjbGFzcz1cInRleHRcIj7lkI3np7A8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwidGV4dFwiPueyl+e7hjwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJsaW5lXCI+5Li+5L6LPC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZCBjbGFzcz1cInRleHRcIj5cYuWunue6vzwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJ0ZXh0XCI+MXB4PC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cImxpbmVcIj5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQgY2xhc3M9XCJ0ZXh0XCI+XGLomZrnur88L3RkPlxuICAgICAgPHRkIGNsYXNzPVwidGV4dFwiPjJweDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJsaW5lXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXNoZWRcIj48L2Rpdj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG48aDMgaWQ9XCJ5dWFuLWppYW9cIj48YSBjbGFzcz1cImhlYWRlci1hbmNob3JcIiBocmVmPVwiI3l1YW4tamlhb1wiPsK2PC9hPiDlnIbop5I8L2gzPlxuPHA+5oiR5Lus5o+Q5L6b5LqG5Lul5LiL5Yeg56eN5ZyG6KeS5qC35byP77yM5Lul5L6b6YCJ5oup44CCPC9wPlxuPGVsLXJvdyA6Z3V0dGVyPVwiMTJcIiBjbGFzcz1cImRlbW8tcmFkaXVzXCI+XG4gIDxlbC1jb2wgOnNwYW49XCI2XCIgOnhzPVwie3NwYW46IDEyfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPuaXoOWchuinkjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZVwiPmJvcmRlci1yYWRpdXM6IDBweDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyYWRpdXNcIj48L2Rpdj5cbiAgPC9lbC1jb2w+XG4gIDxlbC1jb2wgOnNwYW49XCI2XCIgOnhzPVwie3NwYW46IDEyfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPuWwj+WchuinkjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZVwiPmJvcmRlci1yYWRpdXM6IHt7Ym9yZGVyUmFkaXVzU21hbGx9fTwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwicmFkaXVzXCJcbiAgICAgIDpzdHlsZT1cInsgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNTbWFsbCB9XCJcbiAgICA+PC9kaXY+XG4gIDwvZWwtY29sPlxuICA8ZWwtY29sIDpzcGFuPVwiNlwiIDp4cz1cIntzcGFuOiAxMn1cIj5cbiAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7lpKflnIbop5I8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5ib3JkZXItcmFkaXVzOiB7e2JvcmRlclJhZGl1c0Jhc2V9fTwvZGl2PlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwicmFkaXVzXCJcbiAgICAgIDpzdHlsZT1cInsgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNCYXNlIH1cIlxuICAgID48L2Rpdj5cbiAgPC9lbC1jb2w+XG4gIDxlbC1jb2wgOnNwYW49XCI2XCIgOnhzPVwie3NwYW46IDEyfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPuWchuW9ouWchuinkjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZVwiPmJvcmRlci1yYWRpdXM6IDMwcHg8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmFkaXVzIHJhZGl1cy0zMFwiPjwvZGl2PlxuICA8L2VsLWNvbD5cbjwvZWwtcm93PlxuPGgzIGlkPVwidG91LXlpbmdcIj48YSBjbGFzcz1cImhlYWRlci1hbmNob3JcIiBocmVmPVwiI3RvdS15aW5nXCI+wrY8L2E+IOaKleW9sTwvaDM+XG48cD7miJHku6zmj5Dkvpvkuobku6XkuIvlh6Dnp43mipXlvbHmoLflvI/vvIzku6XkvpvpgInmi6njgII8L3A+XG48ZGl2XG5jbGFzcz1cImRlbW8tc2hhZG93XCJcbjpzdHlsZT1cInsgYm94U2hhZG93OiBib3hTaGFkb3dCYXNlIH1cIlxuPjwvZGl2PlxuPHNwYW4gY2xhc3M9XCJkZW1vLXNoYWRvdy10ZXh0XCI+5Z+656GA5oqV5b2xIGJveC1zaGFkb3c6IHt7Ym94U2hhZG93QmFzZX19PC9zcGFuPlxuPGRpdlxuY2xhc3M9XCJkZW1vLXNoYWRvd1wiXG46c3R5bGU9XCJ7IGJveFNoYWRvdzogYm94U2hhZG93TGlnaHQgfVwiXG4+PC9kaXY+XG48c3BhbiBjbGFzcz1cImRlbW8tc2hhZG93LXRleHRcIj7mtYXoibLmipXlvbEgYm94LXNoYWRvdzoge3tib3hTaGFkb3dMaWdodH19PC9zcGFuPlxuXG4gICAgPC9zZWN0aW9uPlxuICA8L3RlbXBsYXRlPlxuICA8c2NyaXB0PlxuICBpbXBvcnQgYnVzIGZyb20gJy4uLy4uL2J1cyc7XG4gIGNvbnN0IHZhck1hcCA9IHtcbiAgICAnJC0tYm94LXNoYWRvdy1saWdodCc6ICdib3hTaGFkb3dMaWdodCcsXG4gICAgJyQtLWJveC1zaGFkb3ctYmFzZSc6ICdib3hTaGFkb3dCYXNlJyxcbiAgICAnJC0tYm9yZGVyLXJhZGl1cy1iYXNlJzogJ2JvcmRlclJhZGl1c0Jhc2UnLFxuICAgICckLS1ib3JkZXItcmFkaXVzLXNtYWxsJzogJ2JvcmRlclJhZGl1c1NtYWxsJ1xuICB9O1xuICBjb25zdCBvcmlnaW5hbCA9IHtcbiAgICBib3hTaGFkb3dMaWdodDogJzAgMnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMSknLFxuICAgIGJveFNoYWRvd0Jhc2U6ICcwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAuMTIpLCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgLjA0KScsXG4gICAgYm9yZGVyUmFkaXVzQmFzZTogJzRweCcsXG4gICAgYm9yZGVyUmFkaXVzU21hbGw6ICcycHgnXG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLnNldEdsb2JhbCgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgc2V0R2xvYmFsKCkge1xuICAgICAgICBpZiAod2luZG93LnVzZXJUaGVtZUNvbmZpZykge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsID0gd2luZG93LnVzZXJUaGVtZUNvbmZpZy5nbG9iYWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBnbG9iYWw6IHt9LFxuICAgICAgICBib3hTaGFkb3dMaWdodDogJycsXG4gICAgICAgIGJveFNoYWRvd0Jhc2U6ICcnLFxuICAgICAgICBib3JkZXJSYWRpdXNCYXNlOiAnJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzU21hbGw6ICcnXG4gICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgZ2xvYmFsOiB7XG4gICAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICAgICAgaGFuZGxlcih2YWx1ZSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHZhck1hcCkuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlW2NdKSB7XG4gICAgICAgICAgICAgIHRoaXNbdmFyTWFwW2NdXSA9IHZhbHVlW2NdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzW3Zhck1hcFtjXV0gPSBvcmlnaW5hbFt2YXJNYXBbY11dXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuICAiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7Ozs7O0FBaUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTs7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBOzs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUlBOzs7QUFLQTs7Ozs7OztBQXRFQTtBQStCQTtBQUFBO0FBMkJBO0FBMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUhBOztBQURBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQU5BO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBSEE7O0FBSEE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBTkE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFIQTs7QUFIQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFIQTs7QUFEQTs7QUF0QkE7QUErQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFIQTtBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUhBO0FBSUE7QUFBQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./website/md-loader/index.js!./website/docs/zh-CN/border.md?vue&type=template&id=cf965b6c&bindings={\"setGlobal\":\"options\",\"global\":\"data\",\"boxShadowLight\":\"data\",\"boxShadowBase\":\"data\",\"borderRadiusBase\":\"data\",\"borderRadiusSmall\":\"data\"}\n");

/***/ }),

/***/ "./website/docs/zh-CN/border.md":
/*!**************************************!*\
  !*** ./website/docs/zh-CN/border.md ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _border_md_vue_type_template_id_cf965b6c_bindings_setGlobal_options_global_data_boxShadowLight_data_boxShadowBase_data_borderRadiusBase_data_borderRadiusSmall_data___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./border.md?vue&type=template&id=cf965b6c&bindings={\"setGlobal\":\"options\",\"global\":\"data\",\"boxShadowLight\":\"data\",\"boxShadowBase\":\"data\",\"borderRadiusBase\":\"data\",\"borderRadiusSmall\":\"data\"} */ \"./website/docs/zh-CN/border.md?vue&type=template&id=cf965b6c&bindings={\\\"setGlobal\\\":\\\"options\\\",\\\"global\\\":\\\"data\\\",\\\"boxShadowLight\\\":\\\"data\\\",\\\"boxShadowBase\\\":\\\"data\\\",\\\"borderRadiusBase\\\":\\\"data\\\",\\\"borderRadiusSmall\\\":\\\"data\\\"}\");\n/* harmony import */ var _border_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./border.md?vue&type=script&lang=js */ \"./website/docs/zh-CN/border.md?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */\n\n\n_border_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _border_md_vue_type_template_id_cf965b6c_bindings_setGlobal_options_global_data_boxShadowLight_data_boxShadowBase_data_borderRadiusBase_data_borderRadiusSmall_data___WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_border_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"website/docs/zh-CN/border.md\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_border_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWJzaXRlL2RvY3MvemgtQ04vYm9yZGVyLm1kLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vd2Vic2l0ZS9kb2NzL3poLUNOL2JvcmRlci5tZD85MWY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2JvcmRlci5tZD92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZjk2NWI2YyZiaW5kaW5ncz17XFxcInNldEdsb2JhbFxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJnbG9iYWxcXFwiOlxcXCJkYXRhXFxcIixcXFwiYm94U2hhZG93TGlnaHRcXFwiOlxcXCJkYXRhXFxcIixcXFwiYm94U2hhZG93QmFzZVxcXCI6XFxcImRhdGFcXFwiLFxcXCJib3JkZXJSYWRpdXNCYXNlXFxcIjpcXFwiZGF0YVxcXCIsXFxcImJvcmRlclJhZGl1c1NtYWxsXFxcIjpcXFwiZGF0YVxcXCJ9XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYm9yZGVyLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2JvcmRlci5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiY2Y5NjViNmNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdjZjk2NWI2YycsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCdjZjk2NWI2YycsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2JvcmRlci5tZD92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZjk2NWI2YyZiaW5kaW5ncz17XFxcInNldEdsb2JhbFxcXCI6XFxcIm9wdGlvbnNcXFwiLFxcXCJnbG9iYWxcXFwiOlxcXCJkYXRhXFxcIixcXFwiYm94U2hhZG93TGlnaHRcXFwiOlxcXCJkYXRhXFxcIixcXFwiYm94U2hhZG93QmFzZVxcXCI6XFxcImRhdGFcXFwiLFxcXCJib3JkZXJSYWRpdXNCYXNlXFxcIjpcXFwiZGF0YVxcXCIsXFxcImJvcmRlclJhZGl1c1NtYWxsXFxcIjpcXFwiZGF0YVxcXCJ9XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2NmOTY1YjZjJywgcmVuZGVyKVxuICB9KVxuXG59XG5cbnNjcmlwdC5fX2ZpbGUgPSBcIndlYnNpdGUvZG9jcy96aC1DTi9ib3JkZXIubWRcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./website/docs/zh-CN/border.md\n");

/***/ }),

/***/ "./website/docs/zh-CN/border.md?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./website/docs/zh-CN/border.md?vue&type=script&lang=js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_dist_index_js_ref_5_0_md_loader_index_js_border_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/dist??ref--5-0!../../md-loader!./border.md?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/index.js?!./website/md-loader/index.js!./website/docs/zh-CN/border.md?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_dist_index_js_ref_5_0_md_loader_index_js_border_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWJzaXRlL2RvY3MvemgtQ04vYm9yZGVyLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vd2Vic2l0ZS9kb2NzL3poLUNOL2JvcmRlci5tZD8yNDUzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vbWQtbG9hZGVyL2luZGV4LmpzIS4vYm9yZGVyLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi9tZC1sb2FkZXIvaW5kZXguanMhLi9ib3JkZXIubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./website/docs/zh-CN/border.md?vue&type=script&lang=js\n");

/***/ }),

/***/ "./website/docs/zh-CN/border.md?vue&type=template&id=cf965b6c&bindings={\"setGlobal\":\"options\",\"global\":\"data\",\"boxShadowLight\":\"data\",\"boxShadowBase\":\"data\",\"borderRadiusBase\":\"data\",\"borderRadiusSmall\":\"data\"}":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./website/docs/zh-CN/border.md?vue&type=template&id=cf965b6c&bindings={"setGlobal":"options","global":"data","boxShadowLight":"data","boxShadowBase":"data","borderRadiusBase":"data","borderRadiusSmall":"data"} ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_5_0_md_loader_index_js_border_md_vue_type_template_id_cf965b6c_bindings_setGlobal_options_global_data_boxShadowLight_data_boxShadowBase_data_borderRadiusBase_data_borderRadiusSmall_data___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--5-0!../../md-loader!./border.md?vue&type=template&id=cf965b6c&bindings={\"setGlobal\":\"options\",\"global\":\"data\",\"boxShadowLight\":\"data\",\"boxShadowBase\":\"data\",\"borderRadiusBase\":\"data\",\"borderRadiusSmall\":\"data\"} */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./website/md-loader/index.js!./website/docs/zh-CN/border.md?vue&type=template&id=cf965b6c&bindings={\\\"setGlobal\\\":\\\"options\\\",\\\"global\\\":\\\"data\\\",\\\"boxShadowLight\\\":\\\"data\\\",\\\"boxShadowBase\\\":\\\"data\\\",\\\"borderRadiusBase\\\":\\\"data\\\",\\\"borderRadiusSmall\\\":\\\"data\\\"}\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_5_0_md_loader_index_js_border_md_vue_type_template_id_cf965b6c_bindings_setGlobal_options_global_data_boxShadowLight_data_boxShadowBase_data_borderRadiusBase_data_borderRadiusSmall_data___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWJzaXRlL2RvY3MvemgtQ04vYm9yZGVyLm1kP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNmOTY1YjZjJmJpbmRpbmdzPXtcInNldEdsb2JhbFwiOlwib3B0aW9uc1wiLFwiZ2xvYmFsXCI6XCJkYXRhXCIsXCJib3hTaGFkb3dMaWdodFwiOlwiZGF0YVwiLFwiYm94U2hhZG93QmFzZVwiOlwiZGF0YVwiLFwiYm9yZGVyUmFkaXVzQmFzZVwiOlwiZGF0YVwiLFwiYm9yZGVyUmFkaXVzU21hbGxcIjpcImRhdGFcIn0uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL2RvY3MvemgtQ04vYm9yZGVyLm1kP2YxMWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi9tZC1sb2FkZXIvaW5kZXguanMhLi9ib3JkZXIubWQ/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2Y5NjViNmMmYmluZGluZ3M9e1xcXCJzZXRHbG9iYWxcXFwiOlxcXCJvcHRpb25zXFxcIixcXFwiZ2xvYmFsXFxcIjpcXFwiZGF0YVxcXCIsXFxcImJveFNoYWRvd0xpZ2h0XFxcIjpcXFwiZGF0YVxcXCIsXFxcImJveFNoYWRvd0Jhc2VcXFwiOlxcXCJkYXRhXFxcIixcXFwiYm9yZGVyUmFkaXVzQmFzZVxcXCI6XFxcImRhdGFcXFwiLFxcXCJib3JkZXJSYWRpdXNTbWFsbFxcXCI6XFxcImRhdGFcXFwifVwiIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./website/docs/zh-CN/border.md?vue&type=template&id=cf965b6c&bindings={\"setGlobal\":\"options\",\"global\":\"data\",\"boxShadowLight\":\"data\",\"boxShadowBase\":\"data\",\"borderRadiusBase\":\"data\",\"borderRadiusSmall\":\"data\"}\n");

/***/ })

}]);