"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./src/app/profile/page.jsx":
/*!**********************************!*\
  !*** ./src/app/profile/page.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst getCookie = (name)=>{\n    const value = \"; \".concat(document.cookie);\n    const parts = value.split(\"; \".concat(name, \"=\"));\n    if (parts.length === 2) {\n        return parts.pop().split(\";\").shift();\n    }\n};\nconst ProfilePage = ()=>{\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"information\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = getCookie(\"token\");\n        if (!token) {\n            router.push(\"/signin\");\n        } else {\n            fetchUserData(token);\n        }\n    }, []);\n    const fetchUserData = async (token)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/user/me\", {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            setUserData(response.data.user);\n        } catch (error) {\n            console.error(\"Error fetching user data:\", error);\n        }\n    };\n    if (!userData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n            lineNumber: 40,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white rounded-lg shadow-lg overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"px-4 py-2 \".concat(activeTab === \"information\" ? \"bg-gray-200\" : \"\"),\n                            onClick: ()=>setActiveTab(\"information\"),\n                            children: \"Profile Information\"\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"px-4 py-2 \".concat(activeTab === \"orders\" ? \"bg-gray-200\" : \"\"),\n                            onClick: ()=>setActiveTab(\"orders\"),\n                            children: \"Orders\"\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4\",\n                    children: [\n                        activeTab === \"information\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileInformation, {\n                            userData: userData\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined),\n                        activeTab === \"orders\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Orders, {\n                            orders: userData.orders\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 38\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"a9HQqDnb7k48Uza+Q1R/lRQ/QvI=\");\n_c = ProfilePage;\nconst ProfileInformation = (param)=>{\n    let { userData } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-start space-x-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-bold mb-1\",\n                        children: [\n                            \"Hi! \",\n                            userData.username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-5 w-5 text-gray-400\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: 2,\n                                    d: \"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\"\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-600\",\n                                children: userData.email\n                            }, void 0, false, {\n                                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-5 w-5 text-gray-400\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        strokeWidth: 2,\n                                        d: \"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z\"\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\",\n                                        strokeWidth: 2,\n                                        d: \"M15 11a3 3 0 11-6 0 3 3 0 016 0z\"\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-gray-600\",\n                                children: userData.location.title\n                            }, void 0, false, {\n                                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-24 h-24 rounded-full overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: userData.image,\n                    alt: \"Profile\",\n                    className: \"object-cover w-full h-full\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = ProfileInformation;\nconst Orders = (param)=>{\n    let { orders } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-xl font-bold mb-4\",\n                children: \"Orders\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, undefined),\n            orders.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-600\",\n                children: \"No orders found.\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                lineNumber: 137,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-4\",\n                children: orders.map((order)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-100 p-4 rounded-lg shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-lg font-bold\",\n                                children: order.eventTitle\n                            }, void 0, false, {\n                                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                lineNumber: 145,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: [\n                                    \"Ticket: \",\n                                    order.ticketTitle,\n                                    \" - \",\n                                    order.ticketDescription\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                lineNumber: 146,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: [\n                                    \"Quantity: \",\n                                    order.quantity\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                lineNumber: 149,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: [\n                                    \"Total Price: $\",\n                                    order.totalPrice.toFixed(2)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                lineNumber: 150,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, order._id, true, {\n                        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                        lineNumber: 141,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                lineNumber: 139,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n        lineNumber: 134,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = Orders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ProfilePage\");\n$RefreshReg$(_c1, \"ProfileInformation\");\n$RefreshReg$(_c2, \"Orders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ3pCO0FBRTFCLE1BQU1JLFlBQVksQ0FBQ0M7SUFDakIsTUFBTUMsUUFBUSxLQUFxQixPQUFoQkMsU0FBU0MsTUFBTTtJQUNsQyxNQUFNQyxRQUFRSCxNQUFNSSxLQUFLLENBQUMsS0FBVSxPQUFMTCxNQUFLO0lBQ3BDLElBQUlJLE1BQU1FLE1BQU0sS0FBSyxHQUFHO1FBQ3RCLE9BQU9GLE1BQU1HLEdBQUcsR0FBR0YsS0FBSyxDQUFDLEtBQUtHLEtBQUs7SUFDckM7QUFDRjtBQUVBLE1BQU1DLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNnQixXQUFXQyxhQUFhLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNaUIsUUFBUWYsVUFBVTtRQUN4QixJQUFJLENBQUNlLE9BQU87WUFDVkMsT0FBT0MsSUFBSSxDQUFDO1FBQ2QsT0FBTztZQUNMQyxjQUFjSDtRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1HLGdCQUFnQixPQUFPSDtRQUMzQixJQUFJO1lBQ0YsTUFBTUksV0FBVyxNQUFNcEIsNkNBQUtBLENBQUNxQixHQUFHLENBQUMsaUNBQWlDO2dCQUNoRUMsU0FBUztvQkFDUEMsZUFBZSxVQUFnQixPQUFOUDtnQkFDM0I7WUFDRjtZQUNBSCxZQUFZTyxTQUFTSSxJQUFJLENBQUNDLElBQUk7UUFDaEMsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1FBQzdDO0lBQ0Y7SUFFQSxJQUFJLENBQUNkLFVBQVU7UUFDYixxQkFBTyw4REFBQ2dCO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4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YWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLmpzeD8wYjlmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgZ2V0Q29va2llID0gKG5hbWUpID0+IHtcbiAgY29uc3QgdmFsdWUgPSBgOyAke2RvY3VtZW50LmNvb2tpZX1gO1xuICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KGA7ICR7bmFtZX09YCk7XG4gIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICByZXR1cm4gcGFydHMucG9wKCkuc3BsaXQoXCI7XCIpLnNoaWZ0KCk7XG4gIH1cbn07XG5cbmNvbnN0IFByb2ZpbGVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoXCJpbmZvcm1hdGlvblwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKFwidG9rZW5cIik7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcm91dGVyLnB1c2goXCIvc2lnbmluXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaFVzZXJEYXRhKHRva2VuKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKHRva2VuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXIvbWVcIiwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHNldFVzZXJEYXRhKHJlc3BvbnNlLmRhdGEudXNlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyIGRhdGE6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKCF1c2VyRGF0YSkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHgtNCBzbTpweC02IGxnOnB4LTggcHktMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiAke1xuICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09IFwiaW5mb3JtYXRpb25cIiA/IFwiYmctZ3JheS0yMDBcIiA6IFwiXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKFwiaW5mb3JtYXRpb25cIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJvZmlsZSBJbmZvcm1hdGlvblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiAke1xuICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09IFwib3JkZXJzXCIgPyBcImJnLWdyYXktMjAwXCIgOiBcIlwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYihcIm9yZGVyc1wiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBPcmRlcnNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gXCJpbmZvcm1hdGlvblwiICYmIChcbiAgICAgICAgICAgIDxQcm9maWxlSW5mb3JtYXRpb24gdXNlckRhdGE9e3VzZXJEYXRhfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gXCJvcmRlcnNcIiAmJiA8T3JkZXJzIG9yZGVycz17dXNlckRhdGEub3JkZXJzfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFByb2ZpbGVJbmZvcm1hdGlvbiA9ICh7IHVzZXJEYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgc3BhY2UteC02XCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTFcIj5IaSEge3VzZXJEYXRhLnVzZXJuYW1lfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIG1iLTJcIj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICBkPVwiTTMgOGw3Ljg5IDUuMjZhMiAyIDAgMDAyLjIyIDBMMjEgOE01IDE5aDE0YTIgMiAwIDAwMi0yVjdhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyelwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj57dXNlckRhdGEuZW1haWx9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICBkPVwiTTE3LjY1NyAxNi42NTdMMTMuNDE0IDIwLjlhMS45OTggMS45OTggMCAwMS0yLjgyNyAwbC00LjI0NC00LjI0M2E4IDggMCAxMTExLjMxNCAwelwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgICBkPVwiTTE1IDExYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e3VzZXJEYXRhLmxvY2F0aW9uLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTI0IHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17dXNlckRhdGEuaW1hZ2V9XG4gICAgICAgICAgYWx0PVwiUHJvZmlsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGxcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBPcmRlcnMgPSAoeyBvcmRlcnMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPk9yZGVyczwvaDI+XG4gICAgICB7b3JkZXJzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPk5vIG9yZGVycyBmb3VuZC48L3A+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgIHtvcmRlcnMubWFwKChvcmRlcikgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e29yZGVyLl9pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+e29yZGVyLmV2ZW50VGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgIFRpY2tldDoge29yZGVyLnRpY2tldFRpdGxlfSAtIHtvcmRlci50aWNrZXREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+UXVhbnRpdHk6IHtvcmRlci5xdWFudGl0eX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICBUb3RhbCBQcmljZTogJHtvcmRlci50b3RhbFByaWNlLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXRDb29raWUiLCJuYW1lIiwidmFsdWUiLCJkb2N1bWVudCIsImNvb2tpZSIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJwb3AiLCJzaGlmdCIsIlByb2ZpbGVQYWdlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInRva2VuIiwicm91dGVyIiwicHVzaCIsImZldGNoVXNlckRhdGEiLCJyZXNwb25zZSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsInVzZXIiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiUHJvZmlsZUluZm9ybWF0aW9uIiwiT3JkZXJzIiwib3JkZXJzIiwiaDIiLCJ1c2VybmFtZSIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwic3BhbiIsImVtYWlsIiwibG9jYXRpb24iLCJ0aXRsZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwicCIsIm1hcCIsIm9yZGVyIiwiaDMiLCJldmVudFRpdGxlIiwidGlja2V0VGl0bGUiLCJ0aWNrZXREZXNjcmlwdGlvbiIsInF1YW50aXR5IiwidG90YWxQcmljZSIsInRvRml4ZWQiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.jsx\n"));

/***/ })

});