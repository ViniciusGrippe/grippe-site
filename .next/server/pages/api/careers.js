(function() {
var exports = {};
exports.id = 908;
exports.ids = [908];
exports.modules = {

/***/ 335:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);

const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({}).get(async (req, res) => {
  res.json({
    data: [{
      id: 1,
      name: 'Weeke Manager',
      office: 'UI/UX Designer and Front-end',
      time: 'July 2019 – Currently',
      description: 'Acting as a designer to refactor and maintain the company`s products, creating websites with Elementor (WordPress) and front-end development with ReactJS (Typescript) with Kanban product.',
      image: '/img/logo_weeke.png',
      skills: ['React JS', 'Elementor WP', 'Typescript']
    }, {
      id: 2,
      name: 'Zukt Labs',
      office: 'Front-end and UI/UX Designer',
      time: 'August 2019 – Currently',
      description: 'Acting as a front-end developer with ReactJS (Typescript) to create custom systems and institutional sites, also acting as a UX/UI designer for prototyping sites and systems.',
      image: '/img/logo_zukt.jpg',
      skills: ['React JS', 'React Native', 'Typescript', 'Figma']
    }]
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 9303:
/***/ (function(module) {

"use strict";
module.exports = require("next-connect");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(335));
module.exports = __webpack_exports__;

})();