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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_character_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/character.js */ \"./src/models/character.js\");\n/* harmony import */ var _models_action_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/action.js */ \"./src/models/action.js\");\n\n\n\nconst player = (0,_models_character_js__WEBPACK_IMPORTED_MODULE_0__.createCharacter)(\"Player\", 30);\nplayer.actions.push((0,_models_action_js__WEBPACK_IMPORTED_MODULE_1__.createAction)(\"Strike\", {attack: 5}));\nplayer.actions.push((0,_models_action_js__WEBPACK_IMPORTED_MODULE_1__.createAction)(\"Defend\", {defend: 5}));\nplayer.actions.push((0,_models_action_js__WEBPACK_IMPORTED_MODULE_1__.createAction)(\"Attack/Defend\", {attack: 3, defend: 3}));\n\nconst enemy = (0,_models_character_js__WEBPACK_IMPORTED_MODULE_0__.createCharacter)(\"Enemy\", 10);\nenemy.actions.push((0,_models_action_js__WEBPACK_IMPORTED_MODULE_1__.createAction)(\"Strike\", {attack: 10}));\nenemy.actions.push((0,_models_action_js__WEBPACK_IMPORTED_MODULE_1__.createAction)(\"Nothing\", {}));\n\nconst displayStats = () => {\n  console.log(\"Player health: \" + player.health);\n  console.log(\"Enemy health: \" + enemy.health);\n};\n\nconst performAction = (subject, object, action) => {\n  if (action.defend)\n    subject.health += action.defend;\n  if (action.attack)\n    object.health -= action.attack;\n};\n\nconst chooseRandomAction = (subject) => {\n  return subject.actions[Math.floor(Math.random() * subject.actions.length)];\n}\n\nconst takeTurn = (object, subject) => {\n  console.log(object.name + \"'s turn:\");\n\n  const randAction = chooseRandomAction(object);\n  console.log(randAction);\n  performAction(player, subject, randAction);\n\n  displayStats();\n}\n\ndisplayStats();\n\nwhile (player.health > 0 && enemy.health > 0) {\n  takeTurn(player, enemy);\n  takeTurn(enemy, player);\n}\n\nif (player.health <= 0) {\n  console.log(\"You lose!\");\n} else if (enemy.health <= 0) {\n  console.log(\"You win!\");\n}\n\n\n//# sourceURL=webpack://simple-game/./src/index.js?");

/***/ }),

/***/ "./src/models/action.js":
/*!******************************!*\
  !*** ./src/models/action.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAction\": () => (/* binding */ createAction)\n/* harmony export */ });\nconst createAction = (name, attributes) => ({\n  name: name,\n  ...attributes\n});\n\n\n//# sourceURL=webpack://simple-game/./src/models/action.js?");

/***/ }),

/***/ "./src/models/character.js":
/*!*********************************!*\
  !*** ./src/models/character.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCharacter\": () => (/* binding */ createCharacter)\n/* harmony export */ });\nconst createCharacter = (name, health, actions = []) => ({\n  // creates a character which has no actions by default\n  name: name,\n  health: health,\n  actions: actions\n});\n\n\n//# sourceURL=webpack://simple-game/./src/models/character.js?");

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