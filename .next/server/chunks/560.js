exports.id = 560;
exports.ids = [560];
exports.modules = {

/***/ 4239:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": function() { return /* binding */ FooterComponent; }
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(3750);
// EXTERNAL MODULE: ./src/styles/global.tsx
var global = __webpack_require__(2389);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/footer/style.tsx

const Footer = external_styled_components_default().div.withConfig({
  displayName: "style__Footer",
  componentId: "sc-12m3ou9-0"
})(["width:100%;padding:40px 0;"]);
;// CONCATENATED MODULE: ./src/components/footer/index.tsx






const FooterComponent = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Footer, {
    children: /*#__PURE__*/jsx_runtime_.jsx(global/* Container */.W2, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(global/* Stack */.Kq, {
        direction: 'row',
        justifyContent: 'space-between',
        children: [/*#__PURE__*/jsx_runtime_.jsx(global/* Box */.xu, {
          children: /*#__PURE__*/jsx_runtime_.jsx(global/* Text */.xv, {
            children: "\xA9 2022 Vin\xEDcius Grippe"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(global/* Stack */.Kq, {
          direction: 'row',
          spacing: '15px',
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://github.com/ViniciusGrippe",
            target: "_blank",
            rel: "noreferrer",
            style: {
              color: '#2E3440'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* BsGithub */.rFR, {
              size: "22px"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://www.linkedin.com/in/viniciusgrippe/",
            target: "_blank",
            rel: "noreferrer",
            style: {
              color: '#2E3440'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* BsLinkedin */.NQh, {
              size: "22px"
            })
          })]
        })]
      })
    })
  });
};
/* harmony default export */ var footer = ((/* unused pure expression or super */ null && (FooterComponent)));

/***/ }),

/***/ 9990:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": function() { return /* binding */ HeaderComponent; }
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/styles/global.tsx
var global = __webpack_require__(2389);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/header/style.tsx

const Header = external_styled_components_default().div.withConfig({
  displayName: "style__Header",
  componentId: "sc-xf5y08-0"
})(["width:100%;padding:12px 0px;background-color:#f9f9fb;border:1px solid #d8dee9;"]);
;// CONCATENATED MODULE: ./src/components/header/index.tsx







const HeaderComponent = () => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(Header, {
    children: /*#__PURE__*/jsx_runtime_.jsx(global/* Container */.W2, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(global/* Stack */.Kq, {
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(global/* Stack */.Kq, {
          spacing: "10px",
          direction: 'row',
          alignItems: 'center',
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx(global/* Avatar */.qE, {
              src: "/img/avatar_2.png"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/about",
            children: /*#__PURE__*/jsx_runtime_.jsx(global/* Button */.zx, {
              variant: router.pathname === '/about' ? 'actived' : 'ghost',
              children: "About"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/skills",
            children: /*#__PURE__*/jsx_runtime_.jsx(global/* Button */.zx, {
              variant: router.pathname === '/skills' ? 'actived' : 'ghost',
              children: "Skills"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/portfolio",
            children: /*#__PURE__*/jsx_runtime_.jsx(global/* Button */.zx, {
              variant: router.pathname === '/portfolio' ? 'actived' : 'ghost',
              children: "Portfolio"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(global/* Stack */.Kq, {
          spacing: "10px",
          direction: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          children: /*#__PURE__*/jsx_runtime_.jsx(global/* Button */.zx, {
            variant: "icon",
            pride: true,
            children: "\uD83C\uDF08"
          })
        })]
      })
    })
  });
};
/* harmony default export */ var header = ((/* unused pure expression or super */ null && (HeaderComponent)));

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;