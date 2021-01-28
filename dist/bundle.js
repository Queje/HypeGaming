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

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => /* binding */ Home\n/* harmony export */ });\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  console.log(\"Home\", argument);\n};\n\n\n\n//# sourceURL=webpack://hypegamingjs2/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => /* binding */ PageDetail\n/* harmony export */ });\nvar PageDetail = function PageDetail() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument;\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var name = response.name,\n            released = response.released,\n            description = response.description,\n            background_image = response.background_image,\n            developers = response.developers,\n            genres = response.genres,\n            tags = response.tags,\n            parent_platforms = response.parent_platforms,\n            website = response.website,\n            clip = response.clip,\n            rating = response.rating,\n            rating_top = response.rating_top,\n            ratings_count = response.ratings_count,\n            stores = response.stores;\n        console.log(response);\n        var devname = \"\";\n        developers.forEach(function (e) {\n          devname += \"<a href='#pagelist/\".concat(e.id, \"'>\").concat(e.name, \"</a>\") + \"  \";\n        });\n        var gamegenres = \"\";\n        genres.forEach(function (e) {\n          gamegenres += \"<a href='#pagelist/\".concat(e.id, \"'>\").concat(e.name, \"</a>\") + \"  \";\n        });\n        var gametags = [];\n        tags.forEach(function (e) {\n          gametags += \"<a href='#pagelist/\".concat(e.id, \"'>\").concat(e.name, \"</a>\") + \"  \";\n        });\n        var detailstore = [];\n        stores.forEach(function (e) {\n          detailstore += \"<a href=\\\"\".concat(e.url, \"\\\">\").concat(e.store.domain, \"</a>\") + \"  \";\n        });\n        fetch(\"https://api.rawg.io/api/games/\".concat(response.id, \"/screenshots?&page_size=4\")).then(function (response) {\n          return response.json();\n        }).then(function (response) {\n          response.results.forEach(function (screenshot) {\n            var newScreen = document.createElement(\"IMG\");\n            newScreen.src = screenshot.image;\n            document.querySelector(\"#detailscreenshots\").appendChild(newScreen);\n          });\n        });\n        fetch(\"https://api.rawg.io/api/games/\".concat(response.id, \"/suggested?&page_size=4\")).then(function (response) {\n          return response.json();\n        }).then(function (response) {\n          response.results.forEach(function (samegame) {\n            var samegamelist = document.createElement(\"a\");\n            samegamelist.innerHTML = samegame.name + \" - \";\n            samegamelist.href = \"#pagedetail/\".concat(samegame.id);\n            document.querySelector(\"#detailsuggestedgames\").appendChild(samegamelist);\n          });\n        });\n        var detailplatformlist = \"\";\n        parent_platforms.forEach(function (platforms) {\n          switch (platforms.platform.name) {\n            case \"PC\":\n              detailplatformlist += \"<a href='#pagelist/\".concat(platforms.platform.id, \"'><img src=\\\"./src/images/windows.svg\\\" alt=\\\"windows-PC\\\"></a>  \");\n              break;\n\n            case \"PlayStation\":\n              detailplatformlist += \"<a href='#pagelist/\".concat(platforms.platform.id, \"'><img src=\\\"./src/images/ps4.svg\\\" alt=\\\"playstation\\\"></a>  \");\n              break;\n\n            case \"Xbox\":\n              detailplatformlist += \"<a href='#pagelist/\".concat(platforms.platform.id, \"'><img src=\\\"./src/images/xbox.svg\\\" alt=\\\"xbox\\\"></a>  \");\n              break;\n\n            case \"Nintendo\":\n              detailplatformlist += \"<a href='#pagelist/\".concat(platforms.platform.id, \"'><img src=\\\"./src/images/switch.svg\\\" alt=\\\"nintendo-switch\\\"></a>  \");\n              break;\n\n            case \"Android\":\n              detailplatformlist += \"<a href='#pagelist/\".concat(platforms.platform.id, \"'><img src=\\\"./src/images/mobile.svg\\\" alt=\\\"mobile-android\\\"></a>  \");\n              break;\n\n            case \"Linux\":\n              detailplatformlist += \"<a href='#pagelist/\".concat(platforms.platform.id, \"'><img src=\\\"./src/images/linux.svg\\\" alt=\\\"linux\\\"></a>  \");\n              break;\n\n            default:\n              break;\n          }\n        });\n        var articleDOM = document.querySelector(\".page-detail .article\");\n        articleDOM.querySelector(\"#detailtitle\").innerHTML = name;\n        articleDOM.querySelector(\"#detaildate\").innerHTML = released;\n        articleDOM.querySelector(\"#jumbo\").style.backgroundImage = \"url('\".concat(background_image, \"')\");\n        articleDOM.querySelector(\"#detailplatformlogo\").innerHTML = detailplatformlist;\n        articleDOM.querySelector(\"#detailwebsite\").href = website;\n        articleDOM.querySelector(\"#detailrating\").innerHTML = rating + \" / \" + rating_top;\n        articleDOM.querySelector(\"#detailratingscount\").innerHTML = \"for \".concat(ratings_count, \" players\");\n        articleDOM.querySelector(\"#detailgenres\").innerHTML = gamegenres;\n        articleDOM.querySelector(\"#detailtags\").innerHTML = gametags;\n        articleDOM.querySelector(\"#detailvideo\").src = \"https://www.youtube.com/embed/\".concat(clip.video);\n        articleDOM.querySelector(\"#detaildescription\").innerHTML = description;\n        articleDOM.querySelector(\"#detaildevelopers\").innerHTML = devname;\n        articleDOM.querySelector(\"#detailstore\").innerHTML = detailstore;\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <div id=\\\"jumbo\\\" class=\\\"jumbotron jumbotron-fluid\\\">\\n            <div class=\\\"container\\\">\\n              <h1 id=\\\"detailtitle\\\" class=\\\"title display-4\\\"></h1>\\n              <p class=\\\"release-date lead\\\">Release date : <span id=\\\"detaildate\\\"></span></p>\\n              <h5 id=\\\"detailgenres\\\"></h5>\\n              <br>\\n              <h5>developed by:</h5>\\n              <div id=\\\"detaildevelopers\\\"></div>\\n              <br>\\n              <p id=\\\"detailrating\\\"></p>\\n              <p id=\\\"detailratingscount\\\"></p>\\n              <br>\\n              <h5>Go get it now!</h5>\\n              <p id=\\\"detailstore\\\"></p>\\n              <br>\\n              <p id=\\\"detailplatformlogo\\\"></p>\\n              <a id=\\\"detailwebsite\\\">game website</a>\\n            </div>\\n          </div>\\n          <div class=\\\"container\\\">\\n            <small id=\\\"detailtags\\\"></small>\\n            <br>\\n            <br>\\n            <h4>List of similar Games:</h4>\\n            <div id=\\\"detailsuggestedgames\\\"></div>\\n            <br>\\n            <iframe id=\\\"detailvideo\\\" width=\\\"420\\\" height=\\\"315\\\"></iframe>\\n            <h4>Description:</h4>\\n            <p id=\\\"detaildescription\\\" class=\\\"description\\\"></p>\\n            <br>\\n            <br>\\n            <br>\\n            <h4>Screenshots:</h4>\\n            <div id=\\\"detailscreenshots\\\"></div>\\n          </div>\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://hypegamingjs2/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => /* binding */ PageList\n/* harmony export */ });\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var datasave = \"\";\n  var nextpage = \"\";\n  var count = 0;\n\n  var preparePage = function preparePage() {\n    var currentgame = \"&dates=2021-01-20,2030-12-31\";\n    var pagesize = \"&page_size=9\";\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = \"\";\n\n      if (argument == \"\") {\n        finalURL = url + \"?search=\" + pagesize + currentgame;\n      } else if (argument != \"Next\") {\n        finalURL = url + \"?search=\" + argument + pagesize;\n      } else if (argument == \"Next\") {\n        finalURL = url;\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        datasave = response;\n        console.log(datasave);\n        nextpage = datasave.next;\n        datasave.results.forEach(function (article) {\n          var platformlist = \"\";\n          article.parent_platforms.forEach(function (platforms) {\n            switch (platforms.platform.name) {\n              case \"PC\":\n                platformlist += '<img src=\"./src/images/windows.svg\" alt=\"windows-PC\"> ';\n                break;\n\n              case \"PlayStation\":\n                platformlist += '<img src=\"./src/images/ps4.svg\" alt=\"playstation\"> ';\n                break;\n\n              case \"Xbox\":\n                platformlist += '<img src=\"./src/images/xbox.svg\" alt=\"xbox\"> ';\n                break;\n\n              case \"Nintendo\":\n                platformlist += '<img src=\"./src/images/switch.svg\" alt=\"nintendo-switch\"> ';\n                break;\n\n              case \"Android\":\n                platformlist += '<img src=\"./src/images/mobile.svg\" alt=\"mobile-android\"> ';\n                break;\n\n              case \"Linux\":\n                platformlist += '<img src=\"./src/images/linux.svg\" alt=\"linux\"> ';\n                break;\n\n              default:\n                break;\n            }\n          });\n          var gamegenres = [];\n          article.genres.forEach(function (e) {\n            return gamegenres += e.name + \" \";\n          });\n          articles += \"\\n              <div class=\\\"card special\\\" id=\\\"card\\\">\\n                <a id=\\\"details\\\" href = \\\"#pagedetail/\".concat(article.id, \"\\\">\\n                  <img src=\").concat(article.background_image, \" class=\\\"card-img-top\\\" id=\\\"cool-image alt=\\\"\").concat(article.slug, \"\\\">\\n                  <div id=\\\"hidden-text\\\" class=\\\"card-body\\\"> \\n                    <h2 class=\\\"card-text\\\">Release: \").concat(article.released, \"</h2>\\n                    <h4 class=\\\"card-text\\\">\").concat(article.rating, \" / \").concat(article.rating_top, \"</h4>\\n                    <h6 class=\\\"card-text\\\"> for \").concat(article.ratings_count, \" players</h6>\\n                    <br>\\n                    <h6 class=\\\"card-text\\\">\").concat(gamegenres, \"</h6>\\n                    <h6 class=\\\"card-text\\\"></h6>\\n                  </div>\\n                  <div class=\\\"card-body\\\"> \\n                    <h1 class=\\\"card-title\\\">\").concat(article.name, \"</h1>\\n                    <p>\").concat(platformlist, \"</p>\\n                  </div>\\n                </a>\\n              </div>\\n              <br>\\n            \");\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n        var button = document.getElementById(\"buttonshowmore\");\n        button.innerHTML = \"<button type=\\\"button\\\" class=\\\"btn btn-outline-primary\\\">Plus de Games</button>\";\n\n        var newFetch = function newFetch() {\n          count += 1;\n          console.log(count);\n          button.removeEventListener(\"click\", newFetch);\n          console.log(nextpage);\n          fetchList(nextpage, \"Next\");\n        };\n\n        button.addEventListener(\"click\", newFetch);\n        var cardlist = document.querySelectorAll(\"#card\");\n        cardlist.forEach(function (element) {\n          element.addEventListener(\"mouseover\", function () {\n            element.childNodes[1].childNodes[1].style.display = \"none\";\n            element.childNodes[1].childNodes[3].style.display = \"block\";\n          });\n        });\n        cardlist.forEach(function (element) {\n          element.addEventListener(\"mouseleave\", function () {\n            element.childNodes[1].childNodes[1].style.display = \"block\";\n            element.childNodes[1].childNodes[3].style.display = \"none\";\n          });\n        });\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles row row-cols-3\\\">...loading</div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://hypegamingjs2/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes.js */ \"./src/js/routes.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageList.js */ \"./src/js/PageList.js\");\n\n\n\n\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes_js__WEBPACK_IMPORTED_MODULE_2__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"submit\", function () {\n  var searchInput = document.getElementById('search-input').value;\n  (0,_PageList_js__WEBPACK_IMPORTED_MODULE_3__.PageList)(searchInput);\n});\nvar moregames = document.getElementById(\"buttonshowmore\");\nmoregames.addEventListener(\"click\", function () {\n  return (0,_PageList_js__WEBPACK_IMPORTED_MODULE_3__.PageList)();\n});\n\n//# sourceURL=webpack://hypegamingjs2/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => /* binding */ routes\n/* harmony export */ });\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/js/Home.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageList.js */ \"./src/js/PageList.js\");\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/js/PageDetail.js\");\n\n\n\nvar routes = {\n  \"\": _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home,\n  \"pagelist\": _PageList_js__WEBPACK_IMPORTED_MODULE_1__.PageList,\n  \"pagedetail\": _PageDetail_js__WEBPACK_IMPORTED_MODULE_2__.PageDetail\n};\n\n\n//# sourceURL=webpack://hypegamingjs2/./src/js/routes.js?");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hypegamingjs2/./node_modules/bootstrap/dist/css/bootstrap.min.css?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hypegamingjs2/./src/sass/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;