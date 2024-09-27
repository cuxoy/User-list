/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Filter.js":
/*!***********************!*\
  !*** ./src/Filter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Filter {\r\n  constructor(onFilterChange) {\r\n    this.onFilterChange = onFilterChange;\r\n  }\r\n\r\n  init() {\r\n    const filterInputs = [\r\n      \"name-filter\",\r\n      \"username-filter\",\r\n      \"email-filter\",\r\n      \"phone-filter\",\r\n      \"website-filter\",\r\n      \"company-filter\",\r\n      \"address-filter\",\r\n    ];\r\n\r\n    filterInputs.forEach((id) => {\r\n      const input = document.getElementById(id);\r\n      input.addEventListener(\"input\", () => {\r\n        const filters = {};\r\n        filterInputs.forEach((filterId) => {\r\n          filters[filterId.replace(\"-filter\", \"\")] = document\r\n            .getElementById(filterId)\r\n            .value.toLowerCase();\r\n        });\r\n        this.onFilterChange(filters);\r\n      });\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);\r\n\n\n//# sourceURL=webpack://user-cards-app/./src/Filter.js?");

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass User {\r\n  constructor({ id, name, email, phone, username, website, company, address }) {\r\n    this.id = id;\r\n    this.name = name;\r\n    this.email = email;\r\n    this.phone = phone;\r\n    this.username = username;\r\n    this.website = website;\r\n    this.company = company;\r\n    this.address = address;\r\n  }\r\n\r\n  render() {\r\n    const card = document.createElement(\"div\");\r\n    card.className = \"user-card\";\r\n    card.innerHTML = `\r\n          <h2>${this.name}</h2>\r\n          <p><strong>Username:</strong> ${this.username}</p>\r\n          <p><strong>Email:</strong> ${this.email}</p>\r\n          <p><strong>Phone:</strong> ${this.phone}</p>\r\n          <p><strong>Website:</strong> <a href=\"http://${this.website}\" target=\"_blank\">${this.website}</a></p>\r\n          <p><strong>Company:</strong> ${this.company.name}</p>\r\n          <p><strong>Address:</strong> ${this.address.street}, ${this.address.city}</p>\r\n        `;\r\n    return card;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\r\n\n\n//# sourceURL=webpack://user-cards-app/./src/User.js?");

/***/ }),

/***/ "./src/UserList.js":
/*!*************************!*\
  !*** ./src/UserList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ \"./src/User.js\");\n\r\n\r\nclass UserList {\r\n  constructor(users) {\r\n    this.users = users.map((user) => new _User__WEBPACK_IMPORTED_MODULE_0__[\"default\"](user));\r\n  }\r\n\r\n  render(filter = {}) {\r\n    const listElement = document.getElementById(\"app\");\r\n    listElement.innerHTML = \"\";\r\n\r\n    const filteredUsers = this.users.filter((user) => {\r\n      return (\r\n        user.name.toLowerCase().includes(filter.name || \"\") &&\r\n        user.username.toLowerCase().includes(filter.username || \"\") &&\r\n        user.email.toLowerCase().includes(filter.email || \"\") &&\r\n        user.phone.toLowerCase().includes(filter.phone || \"\") &&\r\n        user.website.toLowerCase().includes(filter.website || \"\") &&\r\n        user.company.name.toLowerCase().includes(filter.company || \"\") &&\r\n        (user.address.street.toLowerCase().includes(filter.address || \"\") ||\r\n          user.address.city.toLowerCase().includes(filter.address || \"\"))\r\n      );\r\n    });\r\n\r\n    filteredUsers.forEach((user) => {\r\n      listElement.appendChild(user.render());\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);\r\n\n\n//# sourceURL=webpack://user-cards-app/./src/UserList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList */ \"./src/UserList.js\");\n/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter */ \"./src/Filter.js\");\n\r\n\r\n\r\nlet users = [];\r\nlet userList;\r\n\r\nasync function fetchUsers() {\r\n  try {\r\n    const response = await fetch(\"https://jsonplaceholder.typicode.com/users\");\r\n    users = await response.json();\r\n    userList = new _UserList__WEBPACK_IMPORTED_MODULE_0__[\"default\"](users);\r\n    userList.render();\r\n  } catch (error) {\r\n    console.error(\"data loading error\", error);\r\n  }\r\n}\r\n\r\nfunction filterUsers(filters) {\r\n  userList.render(filters);\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  fetchUsers();\r\n\r\n  const filter = new _Filter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](filterUsers);\r\n  filter.init();\r\n});\r\n\n\n//# sourceURL=webpack://user-cards-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;