"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signin/page",{

/***/ "(app-pages-browser)/./src/app/signin/page.jsx":
/*!*********************************!*\
  !*** ./src/app/signin/page.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst signInForm = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3001/user/login\", {\n                email,\n                password\n            });\n            if (response.status !== 200) {\n                throw new Error(response.data.message);\n            }\n            const { user, token } = response.data;\n            document.cookie = \"token=\".concat(token, \"; path=/\");\n            console.log(\"User:\", user);\n            console.log(\"Token:\", token);\n            router.push(\"/events\");\n        } catch (err) {\n            setError(err.message);\n        }\n    };\n    const handleGoogleSignIn = ()=>{\n        window.location.href = \"http://localhost:3001/user/auth/google\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-3xl mx-auto py-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white shadow-lg rounded-md p-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"mx-auto h-40 w-40 rounded-full\",\n                            src: \"https://firebasestorage.googleapis.com/v0/b/eventure-61c1e.appspot.com/o/files%2FEventure.png?alt=media&token=e14a6c7c-8fe0-46eb-ae4d-d796f308e98f\",\n                            alt: \"Your Company\"\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900\",\n                            children: \"Sign in to your account\"\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"space-y-6\",\n                    children: [\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-red-500\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"block text-sm font-medium leading-6 text-gray-900\",\n                                    children: \"Email address\"\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"email\",\n                                        name: \"email\",\n                                        type: \"email\",\n                                        autoComplete: \"email\",\n                                        required: true,\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value),\n                                        className: \"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-stone-700 focus:border-stone-700 \"\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"password\",\n                                        className: \"block text-sm font-medium leading-6 text-gray-900\",\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"password\",\n                                        name: \"password\",\n                                        type: \"password\",\n                                        autoComplete: \"current-password\",\n                                        required: true,\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value),\n                                        className: \"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-stone-700  focus:ring-stone-700\"\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"w-full px-4 py-2 bg-stone-700 text-white rounded-full hover:bg-orange-300 hover:text-black border-2 border-stone-700 duration-300\",\n                                children: \"Sign in\"\n                            }, void 0, false, {\n                                fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-6 text-center text-sm text-gray-500\",\n                    children: [\n                        \"Not a member?\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/signup\",\n                            className: \"font-semibold leading-6 text-teal-500 hover:text-teal-600\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleGoogleSignIn,\n                        className: \"w-full px-4 py-2 border-2 border-blue-500 hover:border-blue-500 bg-white text-black rounded-full hover:bg-gray-100 focus:outline-none duration-300\",\n                        children: \"Or continue with Google\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/usr/src/app/client/src/app/signin/page.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(signInForm, \"nORxhW6qfpGzR0M5TFYU5NIDhVI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (signInForm);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbmluL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3dDO0FBQ0k7QUFDbEI7QUFFMUIsTUFBTUksYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTVUsU0FBU1QsMERBQVNBO0lBRXhCLE1BQU1VLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVosNkNBQUtBLENBQUNhLElBQUksQ0FBQyxvQ0FBb0M7Z0JBQ3BFWDtnQkFDQUU7WUFDRjtZQUNBLElBQUlRLFNBQVNFLE1BQU0sS0FBSyxLQUFLO2dCQUMzQixNQUFNLElBQUlDLE1BQU1ILFNBQVNJLElBQUksQ0FBQ0MsT0FBTztZQUN2QztZQUNBLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR1AsU0FBU0ksSUFBSTtZQUNyQ0ksU0FBU0MsTUFBTSxHQUFHLFNBQWUsT0FBTkYsT0FBTTtZQUNqQ0csUUFBUUMsR0FBRyxDQUFDLFNBQVNMO1lBQ3JCSSxRQUFRQyxHQUFHLENBQUMsVUFBVUo7WUFDdEJYLE9BQU9nQixJQUFJLENBQUM7UUFDZCxFQUFFLE9BQU9DLEtBQUs7WUFDWmxCLFNBQVNrQixJQUFJUixPQUFPO1FBQ3RCO0lBQ0Y7SUFFQSxNQUFNUyxxQkFBcUI7UUFDekJDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO0lBQ3pCO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUNDRCxXQUFVOzRCQUNWRSxLQUFJOzRCQUNKQyxLQUFJOzs7Ozs7c0NBRU4sOERBQUNDOzRCQUFHSixXQUFVO3NDQUE2RTs7Ozs7Ozs7Ozs7OzhCQUk3Riw4REFBQ0s7b0JBQUtDLFVBQVU1QjtvQkFBY3NCLFdBQVU7O3dCQUNyQ3pCLHVCQUFTLDhEQUFDd0I7NEJBQUlDLFdBQVU7c0NBQWdCekI7Ozs7OztzQ0FDekMsOERBQUN3Qjs7OENBQ0MsOERBQUNRO29DQUNDQyxTQUFRO29DQUNSUixXQUFVOzhDQUNYOzs7Ozs7OENBR0QsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDUzt3Q0FDQ0MsSUFBRzt3Q0FDSEMsTUFBSzt3Q0FDTEMsTUFBSzt3Q0FDTEMsY0FBYTt3Q0FDYkMsUUFBUTt3Q0FDUkMsT0FBTzVDO3dDQUNQNkMsVUFBVSxDQUFDckMsSUFBTVAsU0FBU08sRUFBRXNDLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FDeENmLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUloQiw4REFBQ0Q7OzhDQUNDLDhEQUFDQTtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ087d0NBQ0NDLFNBQVE7d0NBQ1JSLFdBQVU7a0RBQ1g7Ozs7Ozs7Ozs7OzhDQUlILDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ1M7d0NBQ0NDLElBQUc7d0NBQ0hDLE1BQUs7d0NBQ0xDLE1BQUs7d0NBQ0xDLGNBQWE7d0NBQ2JDLFFBQVE7d0NBQ1JDLE9BQU8xQzt3Q0FDUDJDLFVBQVUsQ0FBQ3JDLElBQU1MLFlBQVlLLEVBQUVzQyxNQUFNLENBQUNGLEtBQUs7d0NBQzNDZixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJaEIsOERBQUNEO3NDQUNDLDRFQUFDbUI7Z0NBQ0NOLE1BQUs7Z0NBQ0xaLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtMLDhEQUFDbUI7b0JBQUVuQixXQUFVOzt3QkFBeUM7d0JBQ3RDO3NDQUNkLDhEQUFDb0I7NEJBQ0N0QixNQUFLOzRCQUNMRSxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7OEJBSUgsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDa0I7d0JBQ0NOLE1BQUs7d0JBQ0xTLFNBQVMxQjt3QkFDVEssV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBckhNOUI7O1FBSVdGLHNEQUFTQTs7O0FBbUgxQiwrREFBZUUsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NpZ25pbi9wYWdlLmpzeD9jZGRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHNpZ25JbkZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvdXNlci9sb2dpblwiLCB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgY29uc3QgeyB1c2VyLCB0b2tlbiB9ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGB0b2tlbj0ke3Rva2VufTsgcGF0aD0vYDtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlcjpcIiwgdXNlcik7XG4gICAgICBjb25zb2xlLmxvZyhcIlRva2VuOlwiLCB0b2tlbik7XG4gICAgICByb3V0ZXIucHVzaChcIi9ldmVudHNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUdvb2dsZVNpZ25JbiA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXIvYXV0aC9nb29nbGVcIjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG8gcHktOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC1tZCBwLThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtYi02XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBoLTQwIHctNDAgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvZXZlbnR1cmUtNjFjMWUuYXBwc3BvdC5jb20vby9maWxlcyUyRkV2ZW50dXJlLnBuZz9hbHQ9bWVkaWEmdG9rZW49ZTE0YTZjN2MtOGZlMC00NmViLWFlNGQtZDc5NmYzMDhlOThmXCJcbiAgICAgICAgICAgIGFsdD1cIllvdXIgQ29tcGFueVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LWJvbGQgbGVhZGluZy05IHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgIFNpZ24gaW4gdG8geW91ciBhY2NvdW50XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPntlcnJvcn08L2Rpdj59XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXN0b25lLTcwMCBmb2N1czpib3JkZXItc3RvbmUtNzAwIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1zdG9uZS03MDAgIGZvY3VzOnJpbmctc3RvbmUtNzAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIGJnLXN0b25lLTcwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1vcmFuZ2UtMzAwIGhvdmVyOnRleHQtYmxhY2sgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTcwMCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC02IHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgIE5vdCBhIG1lbWJlcj97XCIgXCJ9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCIvc2lnbnVwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtdGVhbC01MDAgaG92ZXI6dGV4dC10ZWFsLTYwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVHb29nbGVTaWduSW59XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIGJvcmRlci0yIGJvcmRlci1ibHVlLTUwMCBob3Zlcjpib3JkZXItYmx1ZS01MDAgYmctd2hpdGUgdGV4dC1ibGFjayByb3VuZGVkLWZ1bGwgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgT3IgY29udGludWUgd2l0aCBHb29nbGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpZ25JbkZvcm07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImF4aW9zIiwic2lnbkluRm9ybSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsInN0YXR1cyIsIkVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJ1c2VyIiwidG9rZW4iLCJkb2N1bWVudCIsImNvb2tpZSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZXJyIiwiaGFuZGxlR29vZ2xlU2lnbkluIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwibmFtZSIsInR5cGUiLCJhdXRvQ29tcGxldGUiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJwIiwiYSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signin/page.jsx\n"));

/***/ })

});