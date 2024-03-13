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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst getCookie = (name)=>{\n    const value = \"; \".concat(document.cookie);\n    const parts = value.split(\"; \".concat(name, \"=\"));\n    if (parts.length === 2) {\n        return parts.pop().split(\";\").shift();\n    }\n};\nconst ProfilePage = ()=>{\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"information\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Check if the user has a valid token cookie\n        const token = getCookie(\"token\");\n        if (!token) {\n            // Redirect to /signin if no token is present\n            router.push(\"/signin\");\n        } else {\n            // Fetch user data from the API\n            fetchUserData(token);\n        }\n    }, []);\n    const fetchUserData = async (token)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:3001/user/me\", {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            setUserData(response.data.user);\n        } catch (error) {\n            console.error(\"Error fetching user data:\", error);\n        }\n    };\n    // Render the profile page only if userData is available\n    if (!userData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n            lineNumber: 44,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-lg shadow-lg overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-4 py-2 \".concat(activeTab === \"information\" ? \"bg-gray-200\" : \"\"),\n                        onClick: ()=>setActiveTab(\"information\"),\n                        children: \"Profile Information\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-4 py-2 \".concat(activeTab === \"orders\" ? \"bg-gray-200\" : \"\"),\n                        onClick: ()=>setActiveTab(\"orders\"),\n                        children: \"Orders\"\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4\",\n                children: [\n                    activeTab === \"information\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileInformation, {\n                        userData: userData\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined),\n                    activeTab === \"orders\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Orders, {\n                        orders: userData.orders\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 36\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePage, \"a9HQqDnb7k48Uza+Q1R/lRQ/QvI=\");\n_c = ProfilePage;\nconst ProfileInformation = (param)=>{\n    let { userData } = param;\n// Render the profile information component\n};\n_c1 = ProfileInformation;\nconst Orders = (param)=>{\n    let { orders } = param;\n// Render the orders component\n};\n_c2 = Orders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ProfilePage\");\n$RefreshReg$(_c1, \"ProfileInformation\");\n$RefreshReg$(_c2, \"Orders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ3pCO0FBRTFCLE1BQU1JLFlBQVksQ0FBQ0M7SUFDakIsTUFBTUMsUUFBUSxLQUFxQixPQUFoQkMsU0FBU0MsTUFBTTtJQUNsQyxNQUFNQyxRQUFRSCxNQUFNSSxLQUFLLENBQUMsS0FBVSxPQUFMTCxNQUFLO0lBQ3BDLElBQUlJLE1BQU1FLE1BQU0sS0FBSyxHQUFHO1FBQ3RCLE9BQU9GLE1BQU1HLEdBQUcsR0FBR0YsS0FBSyxDQUFDLEtBQUtHLEtBQUs7SUFDckM7QUFDRjtBQUVBLE1BQU1DLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNnQixXQUFXQyxhQUFhLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUiw2Q0FBNkM7UUFDN0MsTUFBTWlCLFFBQVFmLFVBQVU7UUFDeEIsSUFBSSxDQUFDZSxPQUFPO1lBQ1YsNkNBQTZDO1lBQzdDQyxPQUFPQyxJQUFJLENBQUM7UUFDZCxPQUFPO1lBQ0wsK0JBQStCO1lBQy9CQyxjQUFjSDtRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1HLGdCQUFnQixPQUFPSDtRQUMzQixJQUFJO1lBQ0YsTUFBTUksV0FBVyxNQUFNcEIsNkNBQUtBLENBQUNxQixHQUFHLENBQUMsaUNBQWlDO2dCQUNoRUMsU0FBUztvQkFDUEMsZUFBZSxVQUFnQixPQUFOUDtnQkFDM0I7WUFDRjtZQUNBSCxZQUFZTyxTQUFTSSxJQUFJLENBQUNDLElBQUk7UUFDaEMsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1FBQzdDO0lBQ0Y7SUFFQSx3REFBd0Q7SUFDeEQsSUFBSSxDQUFDZCxVQUFVO1FBQ2IscUJBQU8sOERBQUNnQjtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NELFdBQVcsYUFFVixPQURDZixjQUFjLGdCQUFnQixnQkFBZ0I7d0JBRWhEaUIsU0FBUyxJQUFNaEIsYUFBYTtrQ0FDN0I7Ozs7OztrQ0FHRCw4REFBQ2U7d0JBQ0NELFdBQVcsYUFBeUQsT0FBNUNmLGNBQWMsV0FBVyxnQkFBZ0I7d0JBQ2pFaUIsU0FBUyxJQUFNaEIsYUFBYTtrQ0FDN0I7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ2E7Z0JBQUlDLFdBQVU7O29CQUNaZixjQUFjLCtCQUNiLDhEQUFDa0I7d0JBQW1CcEIsVUFBVUE7Ozs7OztvQkFFL0JFLGNBQWMsMEJBQVksOERBQUNtQjt3QkFBT0MsUUFBUXRCLFNBQVNzQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEU7R0E1RE12QjtLQUFBQTtBQThETixNQUFNcUIscUJBQXFCO1FBQUMsRUFBRXBCLFFBQVEsRUFBRTtBQUN0QywyQ0FBMkM7QUFDN0M7TUFGTW9CO0FBSU4sTUFBTUMsU0FBUztRQUFDLEVBQUVDLE1BQU0sRUFBRTtBQUN4Qiw4QkFBOEI7QUFDaEM7TUFGTUQ7QUFJTiwrREFBZXRCLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL3BhZ2UuanN4PzBiOWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBnZXRDb29raWUgPSAobmFtZSkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XG4gIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoYDsgJHtuYW1lfT1gKTtcbiAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHJldHVybiBwYXJ0cy5wb3AoKS5zcGxpdChcIjtcIikuc2hpZnQoKTtcbiAgfVxufTtcblxuY29uc3QgUHJvZmlsZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZShcImluZm9ybWF0aW9uXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHVzZXIgaGFzIGEgdmFsaWQgdG9rZW4gY29va2llXG4gICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoXCJ0b2tlblwiKTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICAvLyBSZWRpcmVjdCB0byAvc2lnbmluIGlmIG5vIHRva2VuIGlzIHByZXNlbnRcbiAgICAgIHJvdXRlci5wdXNoKFwiL3NpZ25pblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRmV0Y2ggdXNlciBkYXRhIGZyb20gdGhlIEFQSVxuICAgICAgZmV0Y2hVc2VyRGF0YSh0b2tlbik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jICh0b2tlbikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2VyL21lXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBzZXRVc2VyRGF0YShyZXNwb25zZS5kYXRhLnVzZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlciBkYXRhOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlbmRlciB0aGUgcHJvZmlsZSBwYWdlIG9ubHkgaWYgdXNlckRhdGEgaXMgYXZhaWxhYmxlXG4gIGlmICghdXNlckRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgJHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gXCJpbmZvcm1hdGlvblwiID8gXCJiZy1ncmF5LTIwMFwiIDogXCJcIlxuICAgICAgICAgIH1gfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYihcImluZm9ybWF0aW9uXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgUHJvZmlsZSBJbmZvcm1hdGlvblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiAke2FjdGl2ZVRhYiA9PT0gXCJvcmRlcnNcIiA/IFwiYmctZ3JheS0yMDBcIiA6IFwiXCJ9YH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoXCJvcmRlcnNcIil9XG4gICAgICAgID5cbiAgICAgICAgICBPcmRlcnNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgIHthY3RpdmVUYWIgPT09IFwiaW5mb3JtYXRpb25cIiAmJiAoXG4gICAgICAgICAgPFByb2ZpbGVJbmZvcm1hdGlvbiB1c2VyRGF0YT17dXNlckRhdGF9IC8+XG4gICAgICAgICl9XG4gICAgICAgIHthY3RpdmVUYWIgPT09IFwib3JkZXJzXCIgJiYgPE9yZGVycyBvcmRlcnM9e3VzZXJEYXRhLm9yZGVyc30gLz59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFByb2ZpbGVJbmZvcm1hdGlvbiA9ICh7IHVzZXJEYXRhIH0pID0+IHtcbiAgLy8gUmVuZGVyIHRoZSBwcm9maWxlIGluZm9ybWF0aW9uIGNvbXBvbmVudFxufTtcblxuY29uc3QgT3JkZXJzID0gKHsgb3JkZXJzIH0pID0+IHtcbiAgLy8gUmVuZGVyIHRoZSBvcmRlcnMgY29tcG9uZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXRDb29raWUiLCJuYW1lIiwidmFsdWUiLCJkb2N1bWVudCIsImNvb2tpZSIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJwb3AiLCJzaGlmdCIsIlByb2ZpbGVQYWdlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInRva2VuIiwicm91dGVyIiwicHVzaCIsImZldGNoVXNlckRhdGEiLCJyZXNwb25zZSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsInVzZXIiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiUHJvZmlsZUluZm9ybWF0aW9uIiwiT3JkZXJzIiwib3JkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.jsx\n"));

/***/ })

});