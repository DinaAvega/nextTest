"use strict";
(() => {
var exports = {};
exports.id = 108;
exports.ids = [108];
exports.modules = {

/***/ 832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./utils/mockData.ts
var mockData = __webpack_require__(205);
// EXTERNAL MODULE: ./components/Layout.tsx
var Layout = __webpack_require__(943);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/ListDetail.tsx


const ListDetail = ({ item: user  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                children: [
                    "Detail for ",
                    user.name
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "ID: ",
                    user.id
                ]
            })
        ]
    })
;
/* harmony default export */ const components_ListDetail = (ListDetail);

;// CONCATENATED MODULE: ./pages/users/[id].tsx




const StaticPropsDetail = ({ item , errors  })=>{
    if (errors) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
            title: "Error | Next.js + TypeScript Example",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            color: "red"
                        },
                        children: "Error:"
                    }),
                    " ",
                    errors
                ]
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        title: `${item ? item.name : "User Detail"} | Next.js + TypeScript Example`,
        children: item && /*#__PURE__*/ jsx_runtime_.jsx(components_ListDetail, {
            item: item
        })
    });
};
/* harmony default export */ const _id_ = (StaticPropsDetail);
const getStaticPaths = async ()=>{
    // Get the paths we want to pre-render based on users
    const paths = mockData/* sampleUserData.map */.w.map((user)=>({
            params: {
                id: user.id.toString()
            }
        })
    );
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths,
        fallback: false
    };
};
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
const getStaticProps = async ({ params  })=>{
    try {
        const id = params === null || params === void 0 ? void 0 : params.id;
        const item = mockData/* sampleUserData.find */.w.find((data)=>data.id === Number(id)
        );
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return {
            props: {
                item
            }
        };
    } catch (err) {
        return {
            props: {
                errors: err.message
            }
        };
    }
};


/***/ }),

/***/ 205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ sampleUserData)
/* harmony export */ });
/** Dummy user data. */ const sampleUserData = [
    {
        id: 1000,
        name: "Noah"
    },
    {
        id: 2000,
        name: "Norah"
    },
    {
        id: 3000,
        name: "Adam"
    },
    {
        id: 4000,
        name: "Dina"
    }, 
];


/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,943], () => (__webpack_exec__(832)));
module.exports = __webpack_exports__;

})();