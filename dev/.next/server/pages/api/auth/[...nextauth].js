"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        // Optionally configure one or more authentication providers\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            // The name to display on the sign in form (e.g. 'Sign in with...')\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                // Add your own logic for credentials validation here\n                if (credentials.username === \"user\" && credentials.password === \"password\") {\n                    return {\n                        id: 1,\n                        name: \"User\",\n                        email: \"user@example.com\"\n                    };\n                }\n                return null;\n            }\n        }), \n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user.id = token.id;\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUN1QjtBQUNBO0FBQ1U7QUFFbEUsaUVBQWVBLGdEQUFRLENBQUM7SUFDdEJJLFNBQVMsRUFBRTtRQUNULDREQUE0RDtRQUM1REgsaUVBQWMsQ0FBQztZQUNiSSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG9CQUFvQjtTQUMvQyxDQUFDO1FBQ0ZSLGlFQUFjLENBQUM7WUFDYkcsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkYsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssYUFBYTtTQUN4QyxDQUFDO1FBQ0ZULHNFQUFtQixDQUFDO1lBQ2xCLG1FQUFtRTtZQUNuRVUsSUFBSSxFQUFFLGFBQWE7WUFDbkJDLFdBQVcsRUFBRTtnQkFDWEMsUUFBUSxFQUFFO29CQUFFQyxLQUFLLEVBQUUsVUFBVTtvQkFBRUMsSUFBSSxFQUFFLE1BQU07aUJBQUU7Z0JBQzdDQyxRQUFRLEVBQUU7b0JBQUVGLEtBQUssRUFBRSxVQUFVO29CQUFFQyxJQUFJLEVBQUUsVUFBVTtpQkFBRTthQUNsRDtZQUNELE1BQU1FLFNBQVMsRUFBQ0wsV0FBVyxFQUFFO2dCQUMzQixxREFBcUQ7Z0JBQ3JELElBQUlBLFdBQVcsQ0FBQ0MsUUFBUSxLQUFLLE1BQU0sSUFBSUQsV0FBVyxDQUFDSSxRQUFRLEtBQUssVUFBVSxFQUFFO29CQUMxRSxPQUFPO3dCQUFFRSxFQUFFLEVBQUUsQ0FBQzt3QkFBRVAsSUFBSSxFQUFFLE1BQU07d0JBQUVRLEtBQUssRUFBRSxrQkFBa0I7cUJBQUUsQ0FBQztpQkFDM0Q7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGLENBQUM7S0FDSDtJQUNEQyxPQUFPLEVBQUU7UUFDUEMsUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFDREMsU0FBUyxFQUFFO1FBQ1QsTUFBTUMsR0FBRyxFQUFDLEVBQUVDLEtBQUssR0FBRUMsSUFBSSxHQUFFLEVBQUU7WUFDekIsSUFBSUEsSUFBSSxFQUFFO2dCQUNSRCxLQUFLLENBQUNOLEVBQUUsR0FBR08sSUFBSSxDQUFDUCxFQUFFLENBQUM7YUFDcEI7WUFDRCxPQUFPTSxLQUFLLENBQUM7U0FDZDtRQUNELE1BQU1KLE9BQU8sRUFBQyxFQUFFQSxPQUFPLEdBQUVJLEtBQUssR0FBRSxFQUFFO1lBQ2hDSixPQUFPLENBQUNLLElBQUksQ0FBQ1AsRUFBRSxHQUFHTSxLQUFLLENBQUNOLEVBQUUsQ0FBQztZQUMzQixPQUFPRSxPQUFPLENBQUM7U0FDaEI7S0FDRjtJQUNETSxLQUFLLEVBQUU7UUFDTEMsTUFBTSxFQUFFLFFBQVE7S0FDakI7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXV0aC1hcHAvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnO1xuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIC8vIE9wdGlvbmFsbHkgY29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBHaXRodWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgLy8gVGhlIG5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuICdTaWduIGluIHdpdGguLi4nKVxuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIC8vIEFkZCB5b3VyIG93biBsb2dpYyBmb3IgY3JlZGVudGlhbHMgdmFsaWRhdGlvbiBoZXJlXG4gICAgICAgIGlmIChjcmVkZW50aWFscy51c2VybmFtZSA9PT0gJ3VzZXInICYmIGNyZWRlbnRpYWxzLnBhc3N3b3JkID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgcmV0dXJuIHsgaWQ6IDEsIG5hbWU6ICdVc2VyJywgZW1haWw6ICd1c2VyQGV4YW1wbGUuY29tJyB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0pLFxuICBdLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQ7XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9sb2dpbicsXG4gIH0sXG59KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkdpdGh1YlByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIkdJVEhVQl9JRCIsIkdJVEhVQl9TRUNSRVQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiaWQiLCJlbWFpbCIsInNlc3Npb24iLCJzdHJhdGVneSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsInBhZ2VzIiwic2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();