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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_profileComponents_ProfileInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/profileComponents/ProfileInformation */ \"(app-pages-browser)/./src/app/components/profileComponents/ProfileInformation.jsx\");\n/* harmony import */ var _components_profileComponents_Orders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/profileComponents/Orders */ \"(app-pages-browser)/./src/app/components/profileComponents/Orders.jsx\");\n/* harmony import */ var _components_profileComponents_SignOutButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/profileComponents/SignOutButton */ \"(app-pages-browser)/./src/app/components/profileComponents/SignOutButton.jsx\");\n/* harmony import */ var _utls_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utls/constants */ \"(app-pages-browser)/./src/app/utls/constants.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst getCookie = (name)=>{\n    const value = \"; \".concat(document.cookie);\n    const parts = value.split(\"; \".concat(name, \"=\"));\n    if (parts.length === 2) {\n        return parts.pop().split(\";\").shift();\n    }\n};\nconst ProfilePage = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"information\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = getCookie(\"token\");\n        if (!token) {\n            router.push(\"/signin\");\n        } else {\n            fetchUserData(token);\n        }\n    }, []);\n    const fetchUserData = async (token)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(\"\".concat(_utls_constants__WEBPACK_IMPORTED_MODULE_6__.BASE_URL, \"/user/me\"), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            setUserData(response.data.user);\n        } catch (error) {\n            console.error(\"Error fetching user data:\", error);\n        }\n    };\n    if (!userData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n            lineNumber: 46,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" pt-60 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white rounded-lg shadow-lg overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"px-4 py-2 border-2 border-stone-700 rounded-md \".concat(activeTab === \"information\" ? \"text-black bg-orange-300\" : \"text-white bg-stone-700 hover:bg-orange-300 hover:text-black duration-300\"),\n                            onClick: ()=>setActiveTab(\"information\"),\n                            children: \"Profile Information\"\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"px-4 py-2 border-2 border-stone-700 \".concat(activeTab === \"orders\" ? \"text-black bg-orange-300\" : \"text-white bg-stone-700 hover:bg-orange-300 hover:text-black duration-300\"),\n                            onClick: ()=>setActiveTab(\"orders\"),\n                            children: \"Orders\"\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profileComponents_SignOutButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4\",\n                    children: [\n                        activeTab === \"information\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profileComponents_ProfileInformation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            userData: userData\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined),\n                        activeTab === \"orders\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profileComponents_Orders__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            orders: userData.orders\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 38\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"bzsjxj+x+Y8ZbCupNzjHM65bPjw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProfilePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c;\n$RefreshReg$(_c, \"ProfilePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDekI7QUFDa0I7QUFDd0M7QUFDeEI7QUFDYztBQUM3QjtBQUU3QyxNQUFNUyxZQUFZLENBQUNDO0lBQ2pCLE1BQU1DLFFBQVEsS0FBcUIsT0FBaEJDLFNBQVNDLE1BQU07SUFDbEMsTUFBTUMsUUFBUUgsTUFBTUksS0FBSyxDQUFDLEtBQVUsT0FBTEwsTUFBSztJQUNwQyxJQUFJSSxNQUFNRSxNQUFNLEtBQUssR0FBRztRQUN0QixPQUFPRixNQUFNRyxHQUFHLEdBQUdGLEtBQUssQ0FBQyxLQUFLRyxLQUFLO0lBQ3JDO0FBQ0Y7QUFFQSxNQUFNQyxjQUFjOztJQUNsQixNQUFNQyxTQUFTaEIsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ2lCLFVBQVVDLFlBQVksR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3NCLFdBQVdDLGFBQWEsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBRTNDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU11QixRQUFRaEIsVUFBVTtRQUN4QixJQUFJLENBQUNnQixPQUFPO1lBQ1ZMLE9BQU9NLElBQUksQ0FBQztRQUNkLE9BQU87WUFDTEMsY0FBY0Y7UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNRSxnQkFBZ0IsT0FBT0Y7UUFDM0IsSUFBSTtZQUNGLE1BQU1HLFdBQVcsTUFBTXpCLDZDQUFLQSxDQUFDMEIsR0FBRyxDQUFDLEdBQVksT0FBVHJCLHFEQUFRQSxFQUFDLGFBQVc7Z0JBQ3REc0IsU0FBUztvQkFDUEMsZUFBZSxVQUFnQixPQUFOTjtnQkFDM0I7WUFDRjtZQUNBSCxZQUFZTSxTQUFTSSxJQUFJLENBQUNDLElBQUk7UUFDaEMsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1FBQzdDO0lBQ0Y7SUFFQSxJQUFJLENBQUNiLFVBQVU7UUFDYixxQkFBTyw4REFBQ2U7c0JBQUk7Ozs7OztJQUNkO0lBRUEscUJBQ0UsOERBQUNBO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUNDRCxXQUFXLGtEQUlWLE9BSENkLGNBQWMsZ0JBQ1YsNkJBQ0E7NEJBRU5nQixTQUFTLElBQU1mLGFBQWE7c0NBQzdCOzs7Ozs7c0NBR0QsOERBQUNjOzRCQUNDRCxXQUFXLHVDQUlWLE9BSENkLGNBQWMsV0FDViw2QkFDQTs0QkFFTmdCLFNBQVMsSUFBTWYsYUFBYTtzQ0FDN0I7Ozs7OztzQ0FHRCw4REFBQ2pCLG1GQUFhQTs7Ozs7Ozs7Ozs7OEJBRWhCLDhEQUFDNkI7b0JBQUlDLFdBQVU7O3dCQUNaZCxjQUFjLCtCQUNiLDhEQUFDbEIsd0ZBQWtCQTs0QkFBQ2dCLFVBQVVBOzs7Ozs7d0JBRS9CRSxjQUFjLDBCQUFZLDhEQUFDakIsNEVBQU1BOzRCQUFDa0MsUUFBUW5CLFNBQVNtQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwRTtHQWxFTXJCOztRQUNXZixzREFBU0E7OztLQURwQmU7QUFvRU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL3BhZ2UuanN4PzBiOWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFByb2ZpbGVJbmZvcm1hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9maWxlQ29tcG9uZW50cy9Qcm9maWxlSW5mb3JtYXRpb25cIjtcbmltcG9ydCBPcmRlcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZmlsZUNvbXBvbmVudHMvT3JkZXJzXCI7XG5pbXBvcnQgU2lnbk91dEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9maWxlQ29tcG9uZW50cy9TaWduT3V0QnV0dG9uXCI7XG5pbXBvcnQgeyBCQVNFX1VSTCB9IGZyb20gXCIuLi91dGxzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBnZXRDb29raWUgPSAobmFtZSkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XG4gIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoYDsgJHtuYW1lfT1gKTtcbiAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHJldHVybiBwYXJ0cy5wb3AoKS5zcGxpdChcIjtcIikuc2hpZnQoKTtcbiAgfVxufTtcblxuY29uc3QgUHJvZmlsZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoXCJpbmZvcm1hdGlvblwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gZ2V0Q29va2llKFwidG9rZW5cIik7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcm91dGVyLnB1c2goXCIvc2lnbmluXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaFVzZXJEYXRhKHRva2VuKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaFVzZXJEYXRhID0gYXN5bmMgKHRva2VuKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0JBU0VfVVJMfS91c2VyL21lYCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHNldFVzZXJEYXRhKHJlc3BvbnNlLmRhdGEudXNlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1c2VyIGRhdGE6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKCF1c2VyRGF0YSkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHB0LTYwIG14LWF1dG8gbWF4LXctN3hsIHB4LTQgc206cHgtNiBsZzpweC04IHB5LTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgYm9yZGVyLTIgYm9yZGVyLXN0b25lLTcwMCByb3VuZGVkLW1kICR7XG4gICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gXCJpbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgPyBcInRleHQtYmxhY2sgYmctb3JhbmdlLTMwMFwiXG4gICAgICAgICAgICAgICAgOiBcInRleHQtd2hpdGUgYmctc3RvbmUtNzAwIGhvdmVyOmJnLW9yYW5nZS0zMDAgaG92ZXI6dGV4dC1ibGFjayBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoXCJpbmZvcm1hdGlvblwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcm9maWxlIEluZm9ybWF0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0yIGJvcmRlci0yIGJvcmRlci1zdG9uZS03MDAgJHtcbiAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSBcIm9yZGVyc1wiXG4gICAgICAgICAgICAgICAgPyBcInRleHQtYmxhY2sgYmctb3JhbmdlLTMwMFwiXG4gICAgICAgICAgICAgICAgOiBcInRleHQtd2hpdGUgYmctc3RvbmUtNzAwIGhvdmVyOmJnLW9yYW5nZS0zMDAgaG92ZXI6dGV4dC1ibGFjayBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoXCJvcmRlcnNcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgT3JkZXJzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPFNpZ25PdXRCdXR0b24gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gXCJpbmZvcm1hdGlvblwiICYmIChcbiAgICAgICAgICAgIDxQcm9maWxlSW5mb3JtYXRpb24gdXNlckRhdGE9e3VzZXJEYXRhfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2FjdGl2ZVRhYiA9PT0gXCJvcmRlcnNcIiAmJiA8T3JkZXJzIG9yZGVycz17dXNlckRhdGEub3JkZXJzfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlByb2ZpbGVJbmZvcm1hdGlvbiIsIk9yZGVycyIsIlNpZ25PdXRCdXR0b24iLCJCQVNFX1VSTCIsImdldENvb2tpZSIsIm5hbWUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiY29va2llIiwicGFydHMiLCJzcGxpdCIsImxlbmd0aCIsInBvcCIsInNoaWZ0IiwiUHJvZmlsZVBhZ2UiLCJyb3V0ZXIiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidG9rZW4iLCJwdXNoIiwiZmV0Y2hVc2VyRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwidXNlciIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvcmRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.jsx\n"));

/***/ })

});