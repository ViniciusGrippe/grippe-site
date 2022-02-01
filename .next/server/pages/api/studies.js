(function() {
var exports = {};
exports.id = 696;
exports.ids = [696];
exports.modules = {

/***/ 5718:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);

const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({}).get(async (req, res) => {
  res.json({
    data: [{
      id: 1,
      name: 'Mentorama',
      office: 'UI/UX Designer and Web Development',
      time: 'September 2019 – Done',
      description: 'Course focused on website prototyping, component creation, typography and grid structuring.',
      image: '/img/logo_mentorama.jpeg',
      skills: ['HTML', 'CSS', 'Figma', 'Javascript']
    }, {
      id: 2,
      name: 'University of Mato Grosso',
      office: 'Chemistry Engineering',
      time: 'October 2021 – Done',
      description: 'Degree in engineering with a focus on solving problems and finding new solutions in production lines in general.',
      image: '/img/logo_ufmt.png',
      skills: ['Solve issues']
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
var __webpack_exports__ = (__webpack_exec__(5718));
module.exports = __webpack_exports__;

})();