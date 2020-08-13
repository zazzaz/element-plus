(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DOCS zh-CN59"],{

/***/ "./node_modules/vue-loader/dist/index.js?!./website/md-loader/index.js!./website/docs/zh-CN/typography.md?vue&type=script&lang=js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/typography.md?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bus */ \"./website/bus.js\");\n\n  \n  const varMap = [\n    '$--font-size-extra-large',\n    '$--font-size-large',\n    '$--font-size-medium',\n    '$--font-size-base',\n    '$--font-size-small',\n    '$--font-size-extra-small'\n  ];\n  const original = {\n    'font_size_extra_large': '20px',\n    'font_size_large': '18px',\n    'font_size_medium': '16px',\n    'font_size_base': '14px',\n    'font_size_small': '13px',\n    'font_size_extra_small': '12px'\n  }\n  /* harmony default export */ __webpack_exports__[\"default\"] = ({\n    created() {\n      _bus__WEBPACK_IMPORTED_MODULE_0__[\"default\"].$on(ACTION_USER_CONFIG_UPDATE, this.setGlobal);\n    },\n    mounted() {\n      this.setGlobal();\n    },\n    methods: {\n      tintColor(color, tint) {\n        return tintColor(color, tint);\n      },\n      setGlobal() {\n        if (window.userThemeConfig) {\n          this.global = window.userThemeConfig.global;\n        }\n      }\n    },\n    data() {\n      return {\n        global: {},\n        'font_size_extra_large': '',\n        'font_size_large': '',\n        'font_size_medium': '',\n        'font_size_base': '',\n        'font_size_small': '',\n        'font_size_extra_small': ''\n      }\n    },\n    watch: {\n      global: {\n        immediate: true,\n        handler(value) {\n          varMap.forEach((v) => {\n            const key = v.replace('$--', '').replace(/-/g, '_')\n            if (value[v]) {\n              this[key] = value[v]\n            } else {\n              this[key] = original[key]\n            }\n          });\n        }\n      }\n    },\n  });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPyEuL3dlYnNpdGUvbWQtbG9hZGVyL2luZGV4LmpzIS4vd2Vic2l0ZS9kb2NzL3poLUNOL3R5cG9ncmFwaHkubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJzaXRlL2RvY3MvemgtQ04vdHlwb2dyYXBoeS5tZD8xYjUzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICA8dGVtcGxhdGU+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50IGVsZW1lbnQtZG9jXCI+XG4gICAgICBcbjxoMiBpZD1cInR5cG9ncmFwaHktemktdGlcIj48YSBjbGFzcz1cImhlYWRlci1hbmNob3JcIiBocmVmPVwiI3R5cG9ncmFwaHktemktdGlcIj7CtjwvYT4gVHlwb2dyYXBoeSDlrZfkvZM8L2gyPlxuPHA+5oiR5Lus5a+55a2X5L2T6L+b6KGM57uf5LiA6KeE6IyD77yM5Yqb5rGC5Zyo5ZCE5Liq5pON5L2c57O757uf5LiL6YO95pyJ5pyA5L2z5bGV56S65pWI5p6c44CCPC9wPlxuPGgzIGlkPVwiemktdGlcIj48YSBjbGFzcz1cImhlYWRlci1hbmNob3JcIiBocmVmPVwiI3ppLXRpXCI+wrY8L2E+IOWtl+S9kzwvaDM+XG48ZGl2IGNsYXNzPVwiZGVtby10ZXJtLWJveFwiPlxuPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaW1hZ2VzL3Rlcm0tcGluZ2ZhbmcucG5nXCIgYWx0PVwiXCI+XG48aW1nIHNyYz1cIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVybS1oaXJhZ2luby5wbmdcIiBhbHQ9XCJcIj5cbjxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL2ltYWdlcy90ZXJtLW1pY3Jvc29mdC5wbmdcIiBhbHQ9XCJcIj5cbjxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL2ltYWdlcy90ZXJtLXNmLnBuZ1wiIGFsdD1cIlwiPlxuPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaW1hZ2VzL3Rlcm0taGVsdmV0aWNhLnBuZ1wiIGFsdD1cIlwiPlxuPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaW1hZ2VzL3Rlcm0tYXJpYWwucG5nXCIgYWx0PVwiXCI+XG48L2Rpdj5cbjxoMyBpZD1cInppLWhhb1wiPjxhIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiIGhyZWY9XCIjemktaGFvXCI+wrY8L2E+IOWtl+WPtzwvaDM+XG48dGFibGUgY2xhc3M9XCJkZW1vLXR5cG8tc2l6ZVwiPlxuICA8dGJvZHk+XG4gIDx0clxuICAgID5cbiAgICAgIDx0ZD7lsYLnuqc8L3RkPlxuICAgICAgPHRkPuWtl+S9k+Wkp+WwjzwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJjb2xvci1kYXJrLWxpZ2h0XCI+5Li+5L6LPC90ZD5cbiAgICA8L3RyPlxuICAgIDx0clxuICAgIDpzdHlsZT1cInsgZm9udFNpemU6IGZvbnRfc2l6ZV9leHRyYV9zbWFsbCB9XCJcbiAgICA+XG4gICAgICA8dGQ+6L6F5Yqp5paH5a2XPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cImNvbG9yLWRhcmstbGlnaHRcIj57e2ZvbnRfc2l6ZV9leHRyYV9zbWFsbH19IEV4dHJhIFNtYWxsPC90ZD5cbiAgICAgIDx0ZD7nlKggRWxlbWVudCDlv6vpgJ/mkK3lu7rpobXpnaI8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyXG4gICAgOnN0eWxlPVwieyBmb250U2l6ZTogZm9udF9zaXplX3NtYWxsIH1cIlxuICAgID5cbiAgICAgIDx0ZD7mraPmlofvvIjlsI/vvIk8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwiY29sb3ItZGFyay1saWdodFwiPnt7Zm9udF9zaXplX3NtYWxsfX0gU21hbGw8L3RkPlxuICAgICAgPHRkPueUqCBFbGVtZW50IOW/q+mAn+aQreW7uumhtemdojwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHJcbiAgICA6c3R5bGU9XCJ7IGZvbnRTaXplOiBmb250X3NpemVfYmFzZSB9XCJcbiAgICA+XG4gICAgICA8dGQ+5q2j5paHPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cImNvbG9yLWRhcmstbGlnaHRcIj57e2ZvbnRfc2l6ZV9iYXNlfX0gQmFzZTwvdGQ+XG4gICAgICA8dGQ+55SoIEVsZW1lbnQg5b+r6YCf5pCt5bu66aG16Z2iPC90ZD5cbiAgICA8L3RyPlxuICAgIDx0clxuICAgIDpzdHlsZT1cInsgZm9udFNpemU6IGZvbnRfc2l6ZV9tZWRpdW0gfVwiXG4gICAgPlxuICAgICAgPHRkPuWwj+agh+mimDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJjb2xvci1kYXJrLWxpZ2h0XCI+e3tmb250X3NpemVfbWVkaXVtfX0gTWVkaXVtPC90ZD5cbiAgICAgIDx0ZD7nlKggRWxlbWVudCDlv6vpgJ/mkK3lu7rpobXpnaI8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyXG4gICAgOnN0eWxlPVwieyBmb250U2l6ZTogZm9udF9zaXplX2xhcmdlIH1cIlxuICAgID5cbiAgICAgIDx0ZD7moIfpopg8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwiY29sb3ItZGFyay1saWdodFwiPnt7Zm9udF9zaXplX2xhcmdlfX0gbGFyZ2U8L3RkPlxuICAgICAgPHRkPueUqCBFbGVtZW50IOW/q+mAn+aQreW7uumhtemdojwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHJcbiAgICA6c3R5bGU9XCJ7IGZvbnRTaXplOiBmb250X3NpemVfZXh0cmFfbGFyZ2UgfVwiXG4gICAgPlxuICAgICAgPHRkPuS4u+agh+mimDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJjb2xvci1kYXJrLWxpZ2h0XCI+e3tmb250X3NpemVfZXh0cmFfbGFyZ2V9fSBFeHRyYSBsYXJnZTwvdGQ+XG4gICAgICA8dGQ+55SoIEVsZW1lbnQg5b+r6YCf5pCt5bu66aG16Z2iPC90ZD5cbiAgICA8L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cbjxoMyBpZD1cInhpbmctZ2FvXCI+PGEgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCIgaHJlZj1cIiN4aW5nLWdhb1wiPsK2PC9hPiDooYzpq5g8L2gzPlxuPGRpdj5cbjxpbWcgY2xhc3M9XCJsaW5lSC1sZWZ0XCIgc3JjPVwifmV4YW1wbGVzL2Fzc2V0cy9pbWFnZXMvdHlwb2dyYXBoeS5wbmdcIiAvPlxuPHVsIGNsYXNzPVwibGluZUgtcmlnaHRcIj5cbjxsaT5saW5lLWhlaWdodDoxIDxzcGFuPuaXoOihjOmrmDwvc3Bhbj48L2xpPlxuPGxpPmxpbmUtaGVpZ2h0OjEuMyA8c3Bhbj7ntKflh5E8L3NwYW4+PC9saT5cbjxsaT5saW5lLWhlaWdodDoxLjUgPHNwYW4+5bi46KeEPC9zcGFuPjwvbGk+XG48bGk+bGluZS1oZWlnaHQ6MS43IDxzcGFuPuWuveadvjwvc3Bhbj48L2xpPlxuPC91bD5cbjwvZGl2PlxuPGgzIGlkPVwiZm9udC1mYW1pbHktZGFpLW1hXCI+PGEgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCIgaHJlZj1cIiNmb250LWZhbWlseS1kYWktbWFcIj7CtjwvYT4gRm9udC1mYW1pbHkg5Luj56CBPC9oMz5cbjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1jc3NcIj5mb250LWZhbWlseTogJnF1b3Q7SGVsdmV0aWNhIE5ldWUmcXVvdDssSGVsdmV0aWNhLCZxdW90O1BpbmdGYW5nIFNDJnF1b3Q7LCZxdW90O0hpcmFnaW5vIFNhbnMgR0ImcXVvdDssJnF1b3Q7TWljcm9zb2Z0IFlhSGVpJnF1b3Q7LCZxdW90O+W+rui9r+mbhem7kSZxdW90OyxBcmlhbCxzYW5zLXNlcmlmO1xuPC9jb2RlPjwvcHJlPlxuXG4gICAgPC9zZWN0aW9uPlxuICA8L3RlbXBsYXRlPlxuICA8c2NyaXB0PlxuICBpbXBvcnQgYnVzIGZyb20gJy4uLy4uL2J1cyc7XG4gIGNvbnN0IHZhck1hcCA9IFtcbiAgICAnJC0tZm9udC1zaXplLWV4dHJhLWxhcmdlJyxcbiAgICAnJC0tZm9udC1zaXplLWxhcmdlJyxcbiAgICAnJC0tZm9udC1zaXplLW1lZGl1bScsXG4gICAgJyQtLWZvbnQtc2l6ZS1iYXNlJyxcbiAgICAnJC0tZm9udC1zaXplLXNtYWxsJyxcbiAgICAnJC0tZm9udC1zaXplLWV4dHJhLXNtYWxsJ1xuICBdO1xuICBjb25zdCBvcmlnaW5hbCA9IHtcbiAgICAnZm9udF9zaXplX2V4dHJhX2xhcmdlJzogJzIwcHgnLFxuICAgICdmb250X3NpemVfbGFyZ2UnOiAnMThweCcsXG4gICAgJ2ZvbnRfc2l6ZV9tZWRpdW0nOiAnMTZweCcsXG4gICAgJ2ZvbnRfc2l6ZV9iYXNlJzogJzE0cHgnLFxuICAgICdmb250X3NpemVfc21hbGwnOiAnMTNweCcsXG4gICAgJ2ZvbnRfc2l6ZV9leHRyYV9zbWFsbCc6ICcxMnB4J1xuICB9XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBjcmVhdGVkKCkge1xuICAgICAgYnVzLiRvbihBQ1RJT05fVVNFUl9DT05GSUdfVVBEQVRFLCB0aGlzLnNldEdsb2JhbCk7XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgdGhpcy5zZXRHbG9iYWwoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHRpbnRDb2xvcihjb2xvciwgdGludCkge1xuICAgICAgICByZXR1cm4gdGludENvbG9yKGNvbG9yLCB0aW50KTtcbiAgICAgIH0sXG4gICAgICBzZXRHbG9iYWwoKSB7XG4gICAgICAgIGlmICh3aW5kb3cudXNlclRoZW1lQ29uZmlnKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWwgPSB3aW5kb3cudXNlclRoZW1lQ29uZmlnLmdsb2JhbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdsb2JhbDoge30sXG4gICAgICAgICdmb250X3NpemVfZXh0cmFfbGFyZ2UnOiAnJyxcbiAgICAgICAgJ2ZvbnRfc2l6ZV9sYXJnZSc6ICcnLFxuICAgICAgICAnZm9udF9zaXplX21lZGl1bSc6ICcnLFxuICAgICAgICAnZm9udF9zaXplX2Jhc2UnOiAnJyxcbiAgICAgICAgJ2ZvbnRfc2l6ZV9zbWFsbCc6ICcnLFxuICAgICAgICAnZm9udF9zaXplX2V4dHJhX3NtYWxsJzogJydcbiAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICBnbG9iYWw6IHtcbiAgICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgICAgdmFyTWFwLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHYucmVwbGFjZSgnJC0tJywgJycpLnJlcGxhY2UoLy0vZywgJ18nKVxuICAgICAgICAgICAgaWYgKHZhbHVlW3ZdKSB7XG4gICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlW3ZdXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzW2tleV0gPSBvcmlnaW5hbFtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9XG48L3NjcmlwdD5cbiAgIl0sIm1hcHBpbmdzIjoiOzs7QUFxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/dist/index.js?!./website/md-loader/index.js!./website/docs/zh-CN/typography.md?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./website/md-loader/index.js!./website/docs/zh-CN/typography.md?vue&type=template&id=11094de7":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ref--5!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/typography.md?vue&type=template&id=11094de7 ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js\");\n/* harmony import */ var _assets_images_term_pingfang_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/term-pingfang.png */ \"./website/assets/images/term-pingfang.png\");\n/* harmony import */ var _assets_images_term_hiragino_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/term-hiragino.png */ \"./website/assets/images/term-hiragino.png\");\n/* harmony import */ var _assets_images_term_microsoft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/term-microsoft.png */ \"./website/assets/images/term-microsoft.png\");\n/* harmony import */ var _assets_images_term_sf_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/term-sf.png */ \"./website/assets/images/term-sf.png\");\n/* harmony import */ var _assets_images_term_helvetica_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/term-helvetica.png */ \"./website/assets/images/term-helvetica.png\");\n/* harmony import */ var _assets_images_term_arial_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/term-arial.png */ \"./website/assets/images/term-arial.png\");\n/* harmony import */ var examples_assets_images_typography_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! examples/assets/images/typography.png */ \"./website/assets/images/typography.png\");\n\n\n\n\n\n\n\n\n\n\nconst _hoisted_1 = { class: \"content element-doc\" }\nconst _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"h2\", { id: \"typography-zi-ti\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"a\", {\n    class: \"header-anchor\",\n    href: \"#typography-zi-ti\"\n  }, \"¶\"),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Typography 字体\")\n], -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"p\", null, \"我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。\", -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"h3\", { id: \"zi-ti\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"a\", {\n    class: \"header-anchor\",\n    href: \"#zi-ti\"\n  }, \"¶\"),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" 字体\")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", { class: \"demo-term-box\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n    src: _assets_images_term_pingfang_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    alt: \"\"\n  }),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n    src: _assets_images_term_hiragino_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    alt: \"\"\n  }),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n    src: _assets_images_term_microsoft_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    alt: \"\"\n  }),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n    src: _assets_images_term_sf_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    alt: \"\"\n  }),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n    src: _assets_images_term_helvetica_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    alt: \"\"\n  }),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n    src: _assets_images_term_arial_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    alt: \"\"\n  })\n], -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"h3\", { id: \"zi-hao\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"a\", {\n    class: \"header-anchor\",\n    href: \"#zi-hao\"\n  }, \"¶\"),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" 字号\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = { class: \"demo-typo-size\" }\nconst _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"tr\", null, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"层级\"),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"字体大小\"),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", { class: \"color-dark-light\" }, \"举例\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"辅助文字\", -1 /* HOISTED */)\nconst _hoisted_10 = { class: \"color-dark-light\" }\nconst _hoisted_11 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"用 Element 快速搭建页面\", -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"正文（小）\", -1 /* HOISTED */)\nconst _hoisted_13 = { class: \"color-dark-light\" }\nconst _hoisted_14 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"用 Element 快速搭建页面\", -1 /* HOISTED */)\nconst _hoisted_15 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"正文\", -1 /* HOISTED */)\nconst _hoisted_16 = { class: \"color-dark-light\" }\nconst _hoisted_17 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"用 Element 快速搭建页面\", -1 /* HOISTED */)\nconst _hoisted_18 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"小标题\", -1 /* HOISTED */)\nconst _hoisted_19 = { class: \"color-dark-light\" }\nconst _hoisted_20 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"用 Element 快速搭建页面\", -1 /* HOISTED */)\nconst _hoisted_21 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"标题\", -1 /* HOISTED */)\nconst _hoisted_22 = { class: \"color-dark-light\" }\nconst _hoisted_23 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"用 Element 快速搭建页面\", -1 /* HOISTED */)\nconst _hoisted_24 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"主标题\", -1 /* HOISTED */)\nconst _hoisted_25 = { class: \"color-dark-light\" }\nconst _hoisted_26 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", null, \"用 Element 快速搭建页面\", -1 /* HOISTED */)\nconst _hoisted_27 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"h3\", { id: \"xing-gao\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"a\", {\n    class: \"header-anchor\",\n    href: \"#xing-gao\"\n  }, \"¶\"),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" 行高\")\n], -1 /* HOISTED */)\nconst _hoisted_28 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", null, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"img\", {\n    class: \"lineH-left\",\n    src: examples_assets_images_typography_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  }),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"ul\", { class: \"lineH-right\" }, [\n    /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"li\", null, [\n      /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\"line-height:1 \"),\n      /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", null, \"无行高\")\n    ]),\n    /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"li\", null, [\n      /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\"line-height:1.3 \"),\n      /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", null, \"紧凑\")\n    ]),\n    /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"li\", null, [\n      /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\"line-height:1.5 \"),\n      /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", null, \"常规\")\n    ]),\n    /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"li\", null, [\n      /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\"line-height:1.7 \"),\n      /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", null, \"宽松\")\n    ])\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_29 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"h3\", { id: \"font-family-dai-ma\" }, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"a\", {\n    class: \"header-anchor\",\n    href: \"#font-family-dai-ma\"\n  }, \"¶\"),\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" Font-family 代码\")\n], -1 /* HOISTED */)\nconst _hoisted_30 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"pre\", null, [\n  /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"code\", { class: \"language-css\" }, \"font-family: \\\"Helvetica Neue\\\",Helvetica,\\\"PingFang SC\\\",\\\"Hiragino Sans GB\\\",\\\"Microsoft YaHei\\\",\\\"微软雅黑\\\",Arial,sans-serif;\\n\")\n], -1 /* HOISTED */)\n\nfunction render(_ctx, _cache) {\n  return (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"section\", _hoisted_1, [\n    _hoisted_2,\n    _hoisted_3,\n    _hoisted_4,\n    _hoisted_5,\n    _hoisted_6,\n    Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"table\", _hoisted_7, [\n      Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"tbody\", null, [\n        _hoisted_8,\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"tr\", {\n          style: { fontSize: _ctx.font_size_extra_small }\n        }, [\n          _hoisted_9,\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", _hoisted_10, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.font_size_extra_small) + \" Extra Small\", 1 /* TEXT */),\n          _hoisted_11\n        ], 4 /* STYLE */),\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"tr\", {\n          style: { fontSize: _ctx.font_size_small }\n        }, [\n          _hoisted_12,\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", _hoisted_13, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.font_size_small) + \" Small\", 1 /* TEXT */),\n          _hoisted_14\n        ], 4 /* STYLE */),\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"tr\", {\n          style: { fontSize: _ctx.font_size_base }\n        }, [\n          _hoisted_15,\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", _hoisted_16, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.font_size_base) + \" Base\", 1 /* TEXT */),\n          _hoisted_17\n        ], 4 /* STYLE */),\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"tr\", {\n          style: { fontSize: _ctx.font_size_medium }\n        }, [\n          _hoisted_18,\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", _hoisted_19, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.font_size_medium) + \" Medium\", 1 /* TEXT */),\n          _hoisted_20\n        ], 4 /* STYLE */),\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"tr\", {\n          style: { fontSize: _ctx.font_size_large }\n        }, [\n          _hoisted_21,\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", _hoisted_22, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.font_size_large) + \" large\", 1 /* TEXT */),\n          _hoisted_23\n        ], 4 /* STYLE */),\n        Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"tr\", {\n          style: { fontSize: _ctx.font_size_extra_large }\n        }, [\n          _hoisted_24,\n          Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"td\", _hoisted_25, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.font_size_extra_large) + \" Extra large\", 1 /* TEXT */),\n          _hoisted_26\n        ], 4 /* STYLE */)\n      ])\n    ]),\n    _hoisted_27,\n    _hoisted_28,\n    _hoisted_29,\n    _hoisted_30\n  ]))\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/IS4vd2Vic2l0ZS9tZC1sb2FkZXIvaW5kZXguanMhLi93ZWJzaXRlL2RvY3MvemgtQ04vdHlwb2dyYXBoeS5tZD92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMTA5NGRlNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlYnNpdGUvZG9jcy96aC1DTi90eXBvZ3JhcGh5Lm1kPzFiNTMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gIDx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQgZWxlbWVudC1kb2NcIj5cbiAgICAgIFxuPGgyIGlkPVwidHlwb2dyYXBoeS16aS10aVwiPjxhIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiIGhyZWY9XCIjdHlwb2dyYXBoeS16aS10aVwiPsK2PC9hPiBUeXBvZ3JhcGh5IOWtl+S9kzwvaDI+XG48cD7miJHku6zlr7nlrZfkvZPov5vooYznu5/kuIDop4TojIPvvIzlipvmsYLlnKjlkITkuKrmk43kvZzns7vnu5/kuIvpg73mnInmnIDkvbPlsZXnpLrmlYjmnpzjgII8L3A+XG48aDMgaWQ9XCJ6aS10aVwiPjxhIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiIGhyZWY9XCIjemktdGlcIj7CtjwvYT4g5a2X5L2TPC9oMz5cbjxkaXYgY2xhc3M9XCJkZW1vLXRlcm0tYm94XCI+XG48aW1nIHNyYz1cIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVybS1waW5nZmFuZy5wbmdcIiBhbHQ9XCJcIj5cbjxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL2ltYWdlcy90ZXJtLWhpcmFnaW5vLnBuZ1wiIGFsdD1cIlwiPlxuPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaW1hZ2VzL3Rlcm0tbWljcm9zb2Z0LnBuZ1wiIGFsdD1cIlwiPlxuPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvaW1hZ2VzL3Rlcm0tc2YucG5nXCIgYWx0PVwiXCI+XG48aW1nIHNyYz1cIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVybS1oZWx2ZXRpY2EucG5nXCIgYWx0PVwiXCI+XG48aW1nIHNyYz1cIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVybS1hcmlhbC5wbmdcIiBhbHQ9XCJcIj5cbjwvZGl2PlxuPGgzIGlkPVwiemktaGFvXCI+PGEgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCIgaHJlZj1cIiN6aS1oYW9cIj7CtjwvYT4g5a2X5Y+3PC9oMz5cbjx0YWJsZSBjbGFzcz1cImRlbW8tdHlwby1zaXplXCI+XG4gIDx0Ym9keT5cbiAgPHRyXG4gICAgPlxuICAgICAgPHRkPuWxgue6pzwvdGQ+XG4gICAgICA8dGQ+5a2X5L2T5aSn5bCPPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cImNvbG9yLWRhcmstbGlnaHRcIj7kuL7kvos8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyXG4gICAgOnN0eWxlPVwieyBmb250U2l6ZTogZm9udF9zaXplX2V4dHJhX3NtYWxsIH1cIlxuICAgID5cbiAgICAgIDx0ZD7ovoXliqnmloflrZc8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwiY29sb3ItZGFyay1saWdodFwiPnt7Zm9udF9zaXplX2V4dHJhX3NtYWxsfX0gRXh0cmEgU21hbGw8L3RkPlxuICAgICAgPHRkPueUqCBFbGVtZW50IOW/q+mAn+aQreW7uumhtemdojwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHJcbiAgICA6c3R5bGU9XCJ7IGZvbnRTaXplOiBmb250X3NpemVfc21hbGwgfVwiXG4gICAgPlxuICAgICAgPHRkPuato+aWh++8iOWwj++8iTwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJjb2xvci1kYXJrLWxpZ2h0XCI+e3tmb250X3NpemVfc21hbGx9fSBTbWFsbDwvdGQ+XG4gICAgICA8dGQ+55SoIEVsZW1lbnQg5b+r6YCf5pCt5bu66aG16Z2iPC90ZD5cbiAgICA8L3RyPlxuICAgIDx0clxuICAgIDpzdHlsZT1cInsgZm9udFNpemU6IGZvbnRfc2l6ZV9iYXNlIH1cIlxuICAgID5cbiAgICAgIDx0ZD7mraPmloc8L3RkPlxuICAgICAgPHRkIGNsYXNzPVwiY29sb3ItZGFyay1saWdodFwiPnt7Zm9udF9zaXplX2Jhc2V9fSBCYXNlPC90ZD5cbiAgICAgIDx0ZD7nlKggRWxlbWVudCDlv6vpgJ/mkK3lu7rpobXpnaI8L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyXG4gICAgOnN0eWxlPVwieyBmb250U2l6ZTogZm9udF9zaXplX21lZGl1bSB9XCJcbiAgICA+XG4gICAgICA8dGQ+5bCP5qCH6aKYPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cImNvbG9yLWRhcmstbGlnaHRcIj57e2ZvbnRfc2l6ZV9tZWRpdW19fSBNZWRpdW08L3RkPlxuICAgICAgPHRkPueUqCBFbGVtZW50IOW/q+mAn+aQreW7uumhtemdojwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHJcbiAgICA6c3R5bGU9XCJ7IGZvbnRTaXplOiBmb250X3NpemVfbGFyZ2UgfVwiXG4gICAgPlxuICAgICAgPHRkPuagh+mimDwvdGQ+XG4gICAgICA8dGQgY2xhc3M9XCJjb2xvci1kYXJrLWxpZ2h0XCI+e3tmb250X3NpemVfbGFyZ2V9fSBsYXJnZTwvdGQ+XG4gICAgICA8dGQ+55SoIEVsZW1lbnQg5b+r6YCf5pCt5bu66aG16Z2iPC90ZD5cbiAgICA8L3RyPlxuICAgIDx0clxuICAgIDpzdHlsZT1cInsgZm9udFNpemU6IGZvbnRfc2l6ZV9leHRyYV9sYXJnZSB9XCJcbiAgICA+XG4gICAgICA8dGQ+5Li75qCH6aKYPC90ZD5cbiAgICAgIDx0ZCBjbGFzcz1cImNvbG9yLWRhcmstbGlnaHRcIj57e2ZvbnRfc2l6ZV9leHRyYV9sYXJnZX19IEV4dHJhIGxhcmdlPC90ZD5cbiAgICAgIDx0ZD7nlKggRWxlbWVudCDlv6vpgJ/mkK3lu7rpobXpnaI8L3RkPlxuICAgIDwvdHI+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuPGgzIGlkPVwieGluZy1nYW9cIj48YSBjbGFzcz1cImhlYWRlci1hbmNob3JcIiBocmVmPVwiI3hpbmctZ2FvXCI+wrY8L2E+IOihjOmrmDwvaDM+XG48ZGl2PlxuPGltZyBjbGFzcz1cImxpbmVILWxlZnRcIiBzcmM9XCJ+ZXhhbXBsZXMvYXNzZXRzL2ltYWdlcy90eXBvZ3JhcGh5LnBuZ1wiIC8+XG48dWwgY2xhc3M9XCJsaW5lSC1yaWdodFwiPlxuPGxpPmxpbmUtaGVpZ2h0OjEgPHNwYW4+5peg6KGM6auYPC9zcGFuPjwvbGk+XG48bGk+bGluZS1oZWlnaHQ6MS4zIDxzcGFuPue0p+WHkTwvc3Bhbj48L2xpPlxuPGxpPmxpbmUtaGVpZ2h0OjEuNSA8c3Bhbj7luLjop4Q8L3NwYW4+PC9saT5cbjxsaT5saW5lLWhlaWdodDoxLjcgPHNwYW4+5a695p2+PC9zcGFuPjwvbGk+XG48L3VsPlxuPC9kaXY+XG48aDMgaWQ9XCJmb250LWZhbWlseS1kYWktbWFcIj48YSBjbGFzcz1cImhlYWRlci1hbmNob3JcIiBocmVmPVwiI2ZvbnQtZmFtaWx5LWRhaS1tYVwiPsK2PC9hPiBGb250LWZhbWlseSDku6PnoIE8L2gzPlxuPHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWNzc1wiPmZvbnQtZmFtaWx5OiAmcXVvdDtIZWx2ZXRpY2EgTmV1ZSZxdW90OyxIZWx2ZXRpY2EsJnF1b3Q7UGluZ0ZhbmcgU0MmcXVvdDssJnF1b3Q7SGlyYWdpbm8gU2FucyBHQiZxdW90OywmcXVvdDtNaWNyb3NvZnQgWWFIZWkmcXVvdDssJnF1b3Q75b6u6L2v6ZuF6buRJnF1b3Q7LEFyaWFsLHNhbnMtc2VyaWY7XG48L2NvZGU+PC9wcmU+XG5cbiAgICA8L3NlY3Rpb24+XG4gIDwvdGVtcGxhdGU+XG4gIDxzY3JpcHQ+XG4gIGltcG9ydCBidXMgZnJvbSAnLi4vLi4vYnVzJztcbiAgY29uc3QgdmFyTWFwID0gW1xuICAgICckLS1mb250LXNpemUtZXh0cmEtbGFyZ2UnLFxuICAgICckLS1mb250LXNpemUtbGFyZ2UnLFxuICAgICckLS1mb250LXNpemUtbWVkaXVtJyxcbiAgICAnJC0tZm9udC1zaXplLWJhc2UnLFxuICAgICckLS1mb250LXNpemUtc21hbGwnLFxuICAgICckLS1mb250LXNpemUtZXh0cmEtc21hbGwnXG4gIF07XG4gIGNvbnN0IG9yaWdpbmFsID0ge1xuICAgICdmb250X3NpemVfZXh0cmFfbGFyZ2UnOiAnMjBweCcsXG4gICAgJ2ZvbnRfc2l6ZV9sYXJnZSc6ICcxOHB4JyxcbiAgICAnZm9udF9zaXplX21lZGl1bSc6ICcxNnB4JyxcbiAgICAnZm9udF9zaXplX2Jhc2UnOiAnMTRweCcsXG4gICAgJ2ZvbnRfc2l6ZV9zbWFsbCc6ICcxM3B4JyxcbiAgICAnZm9udF9zaXplX2V4dHJhX3NtYWxsJzogJzEycHgnXG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNyZWF0ZWQoKSB7XG4gICAgICBidXMuJG9uKEFDVElPTl9VU0VSX0NPTkZJR19VUERBVEUsIHRoaXMuc2V0R2xvYmFsKTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLnNldEdsb2JhbCgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgdGludENvbG9yKGNvbG9yLCB0aW50KSB7XG4gICAgICAgIHJldHVybiB0aW50Q29sb3IoY29sb3IsIHRpbnQpO1xuICAgICAgfSxcbiAgICAgIHNldEdsb2JhbCgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy51c2VyVGhlbWVDb25maWcpIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbCA9IHdpbmRvdy51c2VyVGhlbWVDb25maWcuZ2xvYmFsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZ2xvYmFsOiB7fSxcbiAgICAgICAgJ2ZvbnRfc2l6ZV9leHRyYV9sYXJnZSc6ICcnLFxuICAgICAgICAnZm9udF9zaXplX2xhcmdlJzogJycsXG4gICAgICAgICdmb250X3NpemVfbWVkaXVtJzogJycsXG4gICAgICAgICdmb250X3NpemVfYmFzZSc6ICcnLFxuICAgICAgICAnZm9udF9zaXplX3NtYWxsJzogJycsXG4gICAgICAgICdmb250X3NpemVfZXh0cmFfc21hbGwnOiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIGdsb2JhbDoge1xuICAgICAgICBpbW1lZGlhdGU6IHRydWUsXG4gICAgICAgIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgICB2YXJNYXAuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdi5yZXBsYWNlKCckLS0nLCAnJykucmVwbGFjZSgvLS9nLCAnXycpXG4gICAgICAgICAgICBpZiAodmFsdWVbdl0pIHtcbiAgICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWVbdl1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXNba2V5XSA9IG9yaWdpbmFsW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH1cbjwvc2NyaXB0PlxuICAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeURBO0FBQ0E7QUFDQTtBQXRFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTs7OztBQTdFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFTQTtBQUNBOztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./website/md-loader/index.js!./website/docs/zh-CN/typography.md?vue&type=template&id=11094de7\n");

/***/ }),

/***/ "./website/docs/zh-CN/typography.md":
/*!******************************************!*\
  !*** ./website/docs/zh-CN/typography.md ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _typography_md_vue_type_template_id_11094de7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typography.md?vue&type=template&id=11094de7 */ \"./website/docs/zh-CN/typography.md?vue&type=template&id=11094de7\");\n/* harmony import */ var _typography_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography.md?vue&type=script&lang=js */ \"./website/docs/zh-CN/typography.md?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */\n\n\n_typography_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _typography_md_vue_type_template_id_11094de7__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_typography_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"website/docs/zh-CN/typography.md\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_typography_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWJzaXRlL2RvY3MvemgtQ04vdHlwb2dyYXBoeS5tZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlYnNpdGUvZG9jcy96aC1DTi90eXBvZ3JhcGh5Lm1kPzA4MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vdHlwb2dyYXBoeS5tZD92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMTA5NGRlN1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3R5cG9ncmFwaHkubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdHlwb2dyYXBoeS5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiMTEwOTRkZTdcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcxMTA5NGRlNycsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCcxMTA5NGRlNycsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3R5cG9ncmFwaHkubWQ/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTEwOTRkZTdcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMTEwOTRkZTcnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuc2NyaXB0Ll9fZmlsZSA9IFwid2Vic2l0ZS9kb2NzL3poLUNOL3R5cG9ncmFwaHkubWRcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./website/docs/zh-CN/typography.md\n");

/***/ }),

/***/ "./website/docs/zh-CN/typography.md?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./website/docs/zh-CN/typography.md?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ref_3_0_md_loader_index_js_typography_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist??ref--3-0!../../md-loader!./typography.md?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js?!./website/md-loader/index.js!./website/docs/zh-CN/typography.md?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_vue_loader_dist_index_js_ref_3_0_md_loader_index_js_typography_md_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWJzaXRlL2RvY3MvemgtQ04vdHlwb2dyYXBoeS5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlYnNpdGUvZG9jcy96aC1DTi90eXBvZ3JhcGh5Lm1kP2Q5MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMy0wIS4uLy4uL21kLWxvYWRlci9pbmRleC5qcyEuL3R5cG9ncmFwaHkubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cmVmLS0zLTAhLi4vLi4vbWQtbG9hZGVyL2luZGV4LmpzIS4vdHlwb2dyYXBoeS5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./website/docs/zh-CN/typography.md?vue&type=script&lang=js\n");

/***/ }),

/***/ "./website/docs/zh-CN/typography.md?vue&type=template&id=11094de7":
/*!************************************************************************!*\
  !*** ./website/docs/zh-CN/typography.md?vue&type=template&id=11094de7 ***!
  \************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_3_0_md_loader_index_js_typography_md_vue_type_template_id_11094de7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ref--5!../../../node_modules/vue-loader/dist??ref--3-0!../../md-loader!./typography.md?vue&type=template&id=11094de7 */ \"./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./website/md-loader/index.js!./website/docs/zh-CN/typography.md?vue&type=template&id=11094de7\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_dist_templateLoader_js_ref_5_node_modules_vue_loader_dist_index_js_ref_3_0_md_loader_index_js_typography_md_vue_type_template_id_11094de7__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWJzaXRlL2RvY3MvemgtQ04vdHlwb2dyYXBoeS5tZD92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMTA5NGRlNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlYnNpdGUvZG9jcy96aC1DTi90eXBvZ3JhcGh5Lm1kPzM4ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3JlZi0tMy0wIS4uLy4uL21kLWxvYWRlci9pbmRleC5qcyEuL3R5cG9ncmFwaHkubWQ/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTEwOTRkZTdcIiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./website/docs/zh-CN/typography.md?vue&type=template&id=11094de7\n");

/***/ })

}]);