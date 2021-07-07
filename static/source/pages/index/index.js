/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/common_componentc/footer/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/footer/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/footer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/footer/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/footer/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/header/burger.scss":
/*!**********************************************************!*\
  !*** ../components/common_componentc/header/burger.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/header/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/header/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.scss */ "../components/common_componentc/header/burger.scss");
/* harmony import */ var _burger_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_burger_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.scss */ "../components/common_componentc/header/nav.scss");
/* harmony import */ var _nav_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nav_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);


 // import return_anim_item from "./../../module/animation";
// return_anim_item('.header_info__block', 'anim_top', 0);

/***/ }),

/***/ "../components/common_componentc/header/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/header/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/header/nav.scss":
/*!*******************************************************!*\
  !*** ../components/common_componentc/header/nav.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/normalize/index.js":
/*!**********************************************************!*\
  !*** ../components/common_componentc/normalize/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/normalize/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/normalize/index.scss":
/*!************************************************************!*\
  !*** ../components/common_componentc/normalize/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/button/index.js":
/*!***********************************************!*\
  !*** ../components/interface/button/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/button/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/button/index.scss":
/*!*************************************************!*\
  !*** ../components/interface/button/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/form/index.js":
/*!*********************************************!*\
  !*** ../components/interface/form/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/form/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/form/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/form/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/grid/index.js":
/*!*********************************************!*\
  !*** ../components/interface/grid/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/grid/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/grid/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/grid/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/module/cover-normilize.js":
/*!***********************************************!*\
  !*** ../components/module/cover-normilize.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var normRatio = 1.5; // Співвідношення сторін в нормальної обкладинки

  var normHeight = document.querySelector(".book-cover img").offsetWidth * normRatio;
  var windowWidth = window.innerWidth;
  var covers = document.querySelectorAll(".book-cover img");
  covers.forEach(function (element) {
    var coverHeight = element.offsetHeight;

    if (coverHeight != normHeight) {
      element.style.height = normHeight + 'px';
      element.style.maxWidth = 'none';
    }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth != windowWidth) location.reload();
  });
});

/***/ }),

/***/ "../components/module/nav.js":
/*!***********************************!*\
  !*** ../components/module/nav.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".nav-icon");
  burger.addEventListener("click", function (e) {
    burger.classList.toggle("open");
    var navigation = document.querySelector(".navigation");
    var overlay = document.querySelector(".navigation .overlay");
    navigation.classList.toggle("open");

    if (overlay) {
      overlay.parentNode.removeChild(overlay);
    } else {
      var overlay_div = document.createElement("div");
      overlay_div.classList.add("overlay");
      navigation.insertBefore(overlay_div, navigation.firstChild);
      overlay_div.addEventListener("click", function (e) {
        navigation.classList.remove("open");
        burger.classList.remove("open");
        overlay_div.parentNode.removeChild(overlay_div);
      });
    }
  });
  window.addEventListener('scroll', function () {
    var navbox = document.querySelector("nav");
    var y = window.scrollY;

    if (y < 100) {
      navbox.classList.remove("topfixed");
    } else {
      navbox.classList.add("topfixed");
    }
  });
  /* Зміна класу для <nav> по скролу */
});

/***/ }),

/***/ "../components/module/swiper-init.js":
/*!*******************************************!*\
  !*** ../components/module/swiper-init.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var swiper = new Swiper('#sw-01', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true // type: 'bullets',

  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  } // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },

});
var swiper_new = new Swiper('.slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  breakpoints: {
    // when window width is >= 320px
    300: {
      pagination: false,
      slidesPerView: 2,
      spaceBetween: 45
    },
    420: {
      pagination: false,
      slidesPerView: 2,
      spaceBetween: 65
    },
    620: {
      slidesPerView: 3,
      spaceBetween: 75
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 75
    },
    880: {
      slidesPerView: 3,
      spaceBetween: 90
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 90
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 95
    }
  }
});
var swiper_blog = new Swiper('.blog', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  breakpoints: {
    // when window width is >= 320px
    300: {
      pagination: false,
      slidesPerView: 1,
      spaceBetween: 30
    },
    480: {
      pagination: false,
      slidesPerView: 2,
      spaceBetween: 35
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    860: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});

/***/ }),

/***/ "../components/pages/index/books.scss":
/*!********************************************!*\
  !*** ../components/pages/index/books.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/index/contact.scss":
/*!**********************************************!*\
  !*** ../components/pages/index/contact.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/index/index.js":
/*!******************************************!*\
  !*** ../components/pages/index/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.scss */ "../components/pages/index/contact.scss");
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_contact_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _books_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books.scss */ "../components/pages/index/books.scss");
/* harmony import */ var _books_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_books_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _swiper_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiper.scss */ "../components/pages/index/swiper.scss");
/* harmony import */ var _swiper_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swiper_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "../components/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "../components/pages/index/index.scss":
/*!********************************************!*\
  !*** ../components/pages/index/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/index/swiper.scss":
/*!*********************************************!*\
  !*** ../components/pages/index/swiper.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_componentc_normalize_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/common_componentc/normalize/index */ "../components/common_componentc/normalize/index.js");
/* harmony import */ var _components_interface_grid_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/interface/grid/index */ "../components/interface/grid/index.js");
/* harmony import */ var _components_interface_form_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/interface/form/index */ "../components/interface/form/index.js");
/* harmony import */ var _components_interface_button_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/interface/button/index */ "../components/interface/button/index.js");
/* harmony import */ var _components_common_componentc_header_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common_componentc/header/index */ "../components/common_componentc/header/index.js");
/* harmony import */ var _components_common_componentc_footer_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/common_componentc/footer/index */ "../components/common_componentc/footer/index.js");
/* harmony import */ var _components_module_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/module/nav */ "../components/module/nav.js");
/* harmony import */ var _components_module_nav__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_module_nav__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_module_swiper_init__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/module/swiper-init */ "../components/module/swiper-init.js");
/* harmony import */ var _components_module_swiper_init__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_module_swiper_init__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_module_cover_normilize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/module/cover-normilize */ "../components/module/cover-normilize.js");
/* harmony import */ var _components_module_cover_normilize__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_module_cover_normilize__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_pages_index_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/pages/index/index */ "../components/pages/index/index.js");
// script interface



 // script common elements
// script pages








/***/ })

/******/ });
//# sourceMappingURL=index.js.map