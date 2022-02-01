exports.id = 389;
exports.ids = [389];
exports.modules = {

/***/ 2389:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZL": function() { return /* binding */ GlobalStyle; },
/* harmony export */   "W2": function() { return /* binding */ Container; },
/* harmony export */   "fe": function() { return /* binding */ ImageCard; },
/* harmony export */   "oT": function() { return /* binding */ Dot; },
/* harmony export */   "Zb": function() { return /* binding */ Card; },
/* harmony export */   "qE": function() { return /* binding */ Avatar; },
/* harmony export */   "zx": function() { return /* binding */ Button; },
/* harmony export */   "xv": function() { return /* binding */ Text; },
/* harmony export */   "Vp": function() { return /* binding */ Tag; },
/* harmony export */   "xu": function() { return /* binding */ Box; },
/* harmony export */   "Kq": function() { return /* binding */ Stack; }
/* harmony export */ });
/* unused harmony export Input */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*{padding:0;margin:0;font-family:'Poppins',sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;}a{text-decoration:none;}::selection{background-color:#5C81AC80;}body{font-size:14px;background-color:#E5E9F099;overflow-x:hidden;}"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "global__Container",
  componentId: "sc-1763tua-0"
})(["max-width:900px;margin:0 auto;padding:0 20px;"]);
const ImageCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "global__ImageCard",
  componentId: "sc-1763tua-1"
})(["width:calc(100% + 40px);object-fit:cover;object-position:center;height:120px;margin:-20px -20px 0 -20px;border-bottom:1px solid #d8dee9;"]);
const Dot = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "global__Dot",
  componentId: "sc-1763tua-2"
})(["padding:4px;background:", ";border-radius:50%;"], props => props.color);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "global__Card",
  componentId: "sc-1763tua-3"
})(["background-color:#fff;overflow:hidden;border-radius:10px;padding:20px 20px;box-shadow:0 5px 8px -8px #ccc;border:1px solid #e5e9f0;transition:300ms all ease;&:hover{border:1px solid #d8dee9;background-color:#f9f9fb;}"]);
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "global__Avatar",
  componentId: "sc-1763tua-4"
})(["border-radius:50%;background-color:#e5e9f0;width:36px;height:36px;object-fit:cover;object-position:center;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "global__Input",
  componentId: "sc-1763tua-5"
})(["padding:20px 25px;background-color:#ffffff50;border-radius:5px;font-size:1rem;font-weight:300;color:#fff;border:0;outline:0;width:-webkit-fill-available;width:-moz-fill-available;transition:300ms all ease;position:relative;&::placeholder{color:#ffffffaa;}&:hover{background-color:#ffffff85;}&:focus{color:#222;background-color:#ffffff;font-weight:300;box-shadow:0 5px 40px -15px #4068a090;}"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "global__Button",
  componentId: "sc-1763tua-6"
})(["display:inline-flex;gap:10px;flex-direction:row;align-items:center;justify-content:center;border:0;white-space:nowrap;font-style:normal;font-weight:600;font-size:1rem;line-height:1;transition:700ms all ease;cursor:pointer;background-size:100%;background-position:center;padding:15px 20px;border-radius:10px;background:#d8dee9;color:#2e3440;&:hover{background:#c6ccd7;}&:active{}", " ", " ", " ", " &:active{opacity:0.85;}"], props => props.variant === 'ghost' && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:#f9f9fb;", " ", " ", " &:hover{opacity:0.85;background:#e5e9f0;}"], props.color === 'green' && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:#c6f6d5;color:#21543d;&:hover{background:#c6f6d5;color:#21543d;}"]), props.color === 'orange' && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:#fed7d7;color:#822727;&:hover{background:#fed7d7;color:#822727;}"]), props.color === 'blue' && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:#d1edfd;color:#1d475f;&:hover{background:#d1edfd;color:#1d475f;}"])), props => props.variant === 'actived' && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:#e5e9f0;&:hover{opacity:0.85;background:#f9f9fb;}"]), props => props.variant === 'icon' && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:transparent;padding:15px;border-radius:50%;&:hover{background:#e4e9ef;}"]), props => props.pride && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["background:transparent;padding:15px 12px;&:hover{background:#e4e9ef;background-image:linear-gradient( 43deg,#4158d020 0%,#c850c020 46%,#ffcc7020 100% );}"]));
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "global__Text",
  componentId: "sc-1763tua-7"
})(["font-style:normal;font-weight:normal;font-size:1rem;line-height:1.8;font-weight:400;color:#2e3440;margin-bottom:", ";text-align:", ";@media only screen and (max-width:1024px){", "}@media only screen and (max-width:768px){", "}@media only screen and (max-width:414px){", "}", " ", " ", ""], props => props.gutter, props => (Array.isArray(props.textAlign) ? props.textAlign[0] : props.textAlign) || `left`, props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["text-align:", ";"], Array.isArray(props.textAlign) ? props.textAlign[1] : props.textAlign), props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["text-align:", ";"], Array.isArray(props.textAlign) ? props.textAlign[2] : props.textAlign), props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["text-align:", ";"], Array.isArray(props.textAlign) ? props.textAlign[3] : props.textAlign), props => props.truncated && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:-webkit-box;max-width:100%;-webkit-line-clamp:", ";-webkit-box-orient:vertical;overflow:hidden;"], props.truncated), props => props.variant === 'title' && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-weight:600;font-size:1.2rem;"]), props => props.variant === 'subtitle' && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["font-weight:500;font-size:1rem;color:#5e81ac;"]));
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "global__Tag",
  componentId: "sc-1763tua-8"
})(["padding:13px 10px;font-size:0.85rem;color:#1d475f;font-weight:600;background:#d1edfd;border-radius:5px;width:fit-content;"]);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "global__Box",
  componentId: "sc-1763tua-9"
})(["display:", ";order:", ";margin:", ";border-radius:", ";background:", ";text-align:", ";width:", ";align-items:", ";justify-content:", ";line-height:0;", " @media only screen and (max-width:1024px){", "}@media only screen and (max-width:768px){", "}@media only screen and (max-width:414px){", "}"], props => Array.isArray(props.display) ? props.display[0] : props.display, props => Array.isArray(props.order) ? props.order[0] : props.order, props => Array.isArray(props.margin) ? props.margin[0] : props.margin, props => props.borderRadius, props => props.background, props => props.textAlign, props => Array.isArray(props.width) ? props.width[0] : props.width || '-webkit-fill-available', props => (Array.isArray(props.alignItems) ? props.alignItems[0] : props.alignItems) || `center`, props => (Array.isArray(props.justifyContent) ? props.justifyContent[0] : props.justifyContent) || `flex-start`, props => Array.isArray(props.padding) ? (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:", ";"], props.padding[0]) : (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:", ";"], props.padding), props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["order:", ";display:", ";margin:", ";padding:", ";width:", ";align-items:", ";justify-content:", ";"], Array.isArray(props.order) ? props.order[1] : props.order, Array.isArray(props.display) ? props.display[1] : props.display, Array.isArray(props.margin) ? props.margin[1] : props.margin, Array.isArray(props.padding) ? props.padding[1] : props.padding, (Array.isArray(props.width) ? props.width[1] : props.width) || `-webkit-fill-available`, (Array.isArray(props.alignItems) ? props.alignItems[1] : props.alignItems) || `center`, (Array.isArray(props.justifyContent) ? props.justifyContent[1] : props.justifyContent) || `flex-start`), props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["order:", ";display:", ";margin:", ";padding:", ";width:", ";align-items:", ";justify-content:", ";"], Array.isArray(props.order) ? props.order[2] : props.order, Array.isArray(props.display) ? props.display[2] : props.display, Array.isArray(props.margin) ? props.margin[2] : props.margin, Array.isArray(props.padding) ? props.padding[2] : props.padding, (Array.isArray(props.width) ? props.width[2] : props.width) || `-webkit-fill-available`, (Array.isArray(props.alignItems) ? props.alignItems[2] : props.alignItems) || `center`, (Array.isArray(props.justifyContent) ? props.justifyContent[2] : props.justifyContent) || `flex-start`), props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["order:", ";display:", ";margin:", ";padding:", ";width:", ";align-items:", ";justify-content:", ";"], Array.isArray(props.order) ? props.order[3] : props.order, Array.isArray(props.display) ? props.display[3] : props.display, Array.isArray(props.margin) ? props.margin[3] : props.margin, Array.isArray(props.padding) ? props.padding[3] : props.padding, (Array.isArray(props.width) ? props.width[3] : props.width) || `-webkit-fill-available`, (Array.isArray(props.alignItems) ? props.alignItems[3] : props.alignItems) || `center`, (Array.isArray(props.justifyContent) ? props.justifyContent[3] : props.justifyContent) || `flex-start`));
const Stack = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "global__Stack",
  componentId: "sc-1763tua-10"
})(["display:inline-flex;width:-webkit-fill-available;flex-wrap:", ";flex:", ";flex-direction:", ";padding:", ";align-items:", ";justify-content:", ";gap:", ";@media only screen and (max-width:1024px){", "}@media only screen and (max-width:768px){", "}@media only screen and (max-width:414px){", "}"], props => (Array.isArray(props.wrap) ? props.wrap[0] : props.wrap) || `nowrap`, props => (Array.isArray(props.width) ? props.width[0] : props.width) || `1`, props => (Array.isArray(props.direction) ? props.direction[0] : props.direction) || `column`, props => Array.isArray(props.padding) ? props.padding[0] : props.padding, props => (Array.isArray(props.alignItems) ? props.alignItems[0] : props.alignItems) || `flex-start`, props => (Array.isArray(props.justifyContent) ? props.justifyContent[0] : props.justifyContent) || `flex-start`, props => Array.isArray(props.spacing) ? props.spacing[0] : props.spacing, props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["flex-direction:", ";flex:", ";padding:", ";align-items:", ";justify-content:", ";gap:", ";flex-wrap:", ";"], (Array.isArray(props.direction) ? props.direction[1] : props.direction) || props.direction, (Array.isArray(props.width) ? props.width[1] : props.width) || `-webkit-fill-available`, Array.isArray(props.padding) ? props.padding[1] : props.padding, (Array.isArray(props.alignItems) ? props.alignItems[1] : props.alignItems) || `flex-start`, (Array.isArray(props.justifyContent) ? props.justifyContent[1] : props.justifyContent) || `flex-start`, Array.isArray(props.spacing) ? props.spacing[1] : props.spacing, (Array.isArray(props.wrap) ? props.wrap[1] : props.wrap) || `nowrap`), props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["flex-direction:", ";flex:", ";padding:", ";align-items:", ";justify-content:", ";gap:", ";flex-wrap:", ";"], (Array.isArray(props.direction) ? props.direction[2] : props.direction) || props.direction, (Array.isArray(props.width) ? props.width[2] : props.width) || `-webkit-fill-available`, Array.isArray(props.padding) ? props.padding[2] : props.padding, (Array.isArray(props.alignItems) ? props.alignItems[2] : props.alignItems) || `flex-start`, (Array.isArray(props.justifyContent) ? props.justifyContent[2] : props.justifyContent) || `flex-start`, Array.isArray(props.spacing) ? props.spacing[2] : props.spacing, (Array.isArray(props.wrap) ? props.wrap[2] : props.wrap) || `nowrap`), props => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["flex-direction:", ";flex:", ";padding:", ";align-items:", ";justify-content:", ";gap:", ";flex-wrap:", ";"], (Array.isArray(props.direction) ? props.direction[3] : props.direction) || props.direction, (Array.isArray(props.width) ? props.width[3] : props.width) || `-webkit-fill-available`, Array.isArray(props.padding) ? props.padding[3] : props.padding, (Array.isArray(props.alignItems) ? props.alignItems[3] : props.alignItems) || `flex-start`, (Array.isArray(props.justifyContent) ? props.justifyContent[3] : props.justifyContent) || `flex-start`, Array.isArray(props.spacing) ? props.spacing[3] : props.spacing, (Array.isArray(props.wrap) ? props.wrap[3] : props.wrap) || `nowrap`));

/***/ })

};
;