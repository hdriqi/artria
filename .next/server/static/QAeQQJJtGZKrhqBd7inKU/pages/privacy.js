module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("mnIH");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8bpD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Navbar/ActiveLink.js

 // typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

var ActiveLink_ActiveLink = function ActiveLink(_ref) {
  var children = _ref.children,
      router = _ref.router,
      href = _ref.href;

  var _class = router.pathname === href ? 'nav-active flex-items' : 'flex-items';

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href).then(function () {
      return window.scrollTo(0, 0);
    });
  };

  return external_react_default.a.createElement("a", {
    href: href,
    onClick: handleClick,
    className: _class
  }, children);
};

/* harmony default export */ var Navbar_ActiveLink = (Object(router_["withRouter"])(ActiveLink_ActiveLink));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/Navbar/index.scss
var Navbar = __webpack_require__("w+rK");

// CONCATENATED MODULE: ./components/Navbar/index.js












var Navbar_Nav =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Nav, _Component);

  function Nav(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Nav);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Nav).call(this, props));

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "handleClick", function () {
      var html = document.querySelector('html');

      _this.setState({
        navActive: !_this.state.navActive
      }); // this.state.navActive ? html.style = '' : html.style.overflow = 'hidden'

    });

    _this.state = {
      lists: [{
        name: 'EHR',
        to: '',
        child: [{
          name: 'Introduction',
          to: '/ehr/introduction',
          child: ''
        }, {
          name: 'EHR Plugin',
          to: '/ehr/ehr-plugin',
          child: ''
        }, {
          name: 'BPJS Plugin',
          to: '/ehr/bpjs-plugin',
          child: ''
        }]
      }, {
        name: 'Homecare',
        to: '/homecare',
        child: ''
      }, {
        name: 'Pricing',
        to: '/pricing',
        child: ''
      }, {
        name: 'Lainnya',
        to: '',
        child: [{
          name: 'Dokter Umum',
          to: '/others/dokter-umum',
          child: ''
        }, {
          name: 'Dokter Gigi',
          to: '/others/dokter-gigi',
          child: ''
        }, {
          name: 'Klinink Pratama',
          to: '/others/klinik-pratama',
          child: ''
        }, {
          name: 'Puskesmas',
          to: '/others/puskesmas',
          child: ''
        }]
      }],
      navActive: false
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Nav, [{
    key: "showAlert",
    value: function showAlert() {
      alert("Im an alert");
    }
  }, {
    key: "render",
    value: function render() {
      var navLists = this.state.lists;
      var navRender = navLists.map(function (item, index) {
        if (item.child) {
          return external_react_default.a.createElement("div", {
            key: index * 9,
            className: "nav-parents-wrapper"
          }, external_react_default.a.createElement("div", {
            className: "nav-parents"
          }, external_react_default.a.createElement("span", {
            className: "link-text"
          }, item.name), external_react_default.a.createElement("img", {
            className: "chevron",
            src: "/static/icon/chevron.svg"
          })), external_react_default.a.createElement("div", {
            className: "nav-child-wrapper"
          }, item.child.map(function (child, index) {
            return external_react_default.a.createElement(Navbar_ActiveLink, {
              key: index * 8,
              href: child.to
            }, external_react_default.a.createElement("span", {
              className: "nav-child link-child-text"
            }, child.name));
          })));
        } else {
          return external_react_default.a.createElement(Navbar_ActiveLink, {
            key: index * 9,
            href: item.to
          }, external_react_default.a.createElement("span", {
            className: "nav-child link-text"
          }, item.name));
        }
      });
      var navMobile = navLists.map(function (item, index) {
        if (item.child) {
          return external_react_default.a.createElement("div", {
            key: index * 13,
            className: "nav-parents-wrapper"
          }, external_react_default.a.createElement("div", {
            className: "nav-parents"
          }, item.name), external_react_default.a.createElement("div", {
            className: "nav-child-wrapper"
          }, item.child.map(function (child, index) {
            return external_react_default.a.createElement(Navbar_ActiveLink, {
              key: index * 14,
              href: child.to
            }, external_react_default.a.createElement("span", {
              className: "nav-child-item"
            }, child.name));
          })));
        } else {
          return external_react_default.a.createElement(Navbar_ActiveLink, {
            key: index * 13,
            href: item.to
          }, external_react_default.a.createElement("span", {
            className: "nav-item"
          }, item.name));
        }
      });
      return external_react_default.a.createElement("nav", {
        className: "navigation "
      }, external_react_default.a.createElement("div", {
        className: "nav-desktop container"
      }, external_react_default.a.createElement(Navbar_ActiveLink, {
        href: "/"
      }, external_react_default.a.createElement("img", {
        onClick: this.handleClick,
        className: "logo",
        src: "/static/icon/logo.svg"
      })), external_react_default.a.createElement("div", {
        className: "nav-center"
      }, navRender), external_react_default.a.createElement("div", {
        className: "nav-right"
      }, external_react_default.a.createElement("button", {
        className: "btn btn--small secondary"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/sign-in"
      }, external_react_default.a.createElement("a", null, "Masuk"))), external_react_default.a.createElement("button", {
        className: "btn btn--small primary"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/register"
      }, external_react_default.a.createElement("a", null, "Daftar"))))), external_react_default.a.createElement("div", {
        className: "nav-mobile"
      }, external_react_default.a.createElement("div", {
        className: "nav-mobile-top"
      }, external_react_default.a.createElement(Navbar_ActiveLink, {
        href: "/"
      }, external_react_default.a.createElement("img", {
        onClick: this.handleClick,
        className: "logo",
        src: "/static/icon/logo.svg"
      })), external_react_default.a.createElement("img", {
        onClick: this.handleClick,
        className: "hamburger",
        src: "/static/icon/hamburger.svg"
      })), external_react_default.a.createElement("div", {
        className: this.state.navActive ? 'menu menu-active' : 'menu'
      }, navMobile, external_react_default.a.createElement(link_default.a, {
        href: "/sign-in"
      }, external_react_default.a.createElement("a", {
        className: "nav-item"
      }, "Masuk")), external_react_default.a.createElement(link_default.a, {
        href: "/register"
      }, external_react_default.a.createElement("a", {
        className: "nav-item"
      }, "Daftar")))));
    }
  }]);

  return Nav;
}(external_react_["Component"]);

/* harmony default export */ var components_Navbar = __webpack_exports__["a"] = (Navbar_Nav);

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Fl18":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("v4hW");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);




var index = function index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer pt-5 pt-md-7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container py-5 py-md-7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-12 mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Workshop Office"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mt-5"
  }, "Kontak"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1 pr-3"
  }, "Komplek Villa Kencana Damai Blok F.02 RT.021 RW.04 Kelurahan Sukamaju Kecamatan Sako Palembang, Indonesia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "mt-5"
  }, "Kontak"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1"
  }, "cs@artria.id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1"
  }, "+62812345678"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/instagram.svg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/facebook.svg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/twitter.svg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/youtube.svg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/linkedin.svg"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 col-12 mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Navigasi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/ehr/introduction"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "EHR")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/homecarae"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Homecare")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/pricing"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Pricing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/others/dokter-umum"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Lainya"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 col-12 mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Legal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/term"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Terms")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/privacy"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Privacy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/copyright"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Copyright"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-12 mb-6 px-lg-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Kontak Kami"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Nama"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    placeholder: "Email"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    placeholder: "Pesan"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn--medium primary"
  }, "Submit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-download"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/app-store.png"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/icon/app-google.png"
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-bottom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row flex-items "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left col-md-6"
  }, "\xA9 Copyright 2019 PT Artria Medika Indonesia. All Rights Reserved."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right col-md-6 mt-5 mt-md-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/sitemap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Sitemap")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/privacy"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Kebijakan Privasi")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/policy"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Syarat dan Ketentuan")))))));
};

/* harmony default export */ __webpack_exports__["a"] = (index);

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WMMs":
/***/ (function(module, exports) {



/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "mnIH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pricing; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WMMs");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8bpD");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Fl18");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);






function pricing() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "privacy-of-service"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Artria - Privacy Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero section-header  flex-items"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "h3-sm h2-md fw-700 flex-items  py-4 px-md-7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mw-4"
  }, "Privacy Policy"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section container mw-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Ketentuan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-5"
  }, "Terakhir diperbarui: 08 Mei 2019"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kami adalah pemilik konten dan operator situs web http://Artria.id, situs terkait dan microsites yang diakses melalui situs web tersebut (masing-masing disebut \u201CSitus\u201C dan secara kolektif disebut \u201CSitus-situs\u201C) (\u201CArtria\u201C, atau \u201Ckami\u201C). Harap diperhatikan bahwa Artria tidak bertanggung jawab atas situs web lain yang dikelola oleh perusahaan lain dari grup Artria atau tautan ke situs atau konten lain di internet yang dimiliki atau dioperasikan oleh pihak ketiga. Situs atau konten terkait tidak berada di bawah kendali kami dan Artria tidak bertanggung jawab atas kesalahan, kelalaian, penundaan, pencemaran nama baik, fitnah, kebohongan, pornografi, konten cabul, ketidakakuratan atau materi lain yang terkandung dalam konten, atau konsekuensi dari mengakses situs web terkait."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Pernyataan Privasi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Melindungi privasi Anda sangat penting bagi Artria. Kami menghargai privasi Anda dan kami berkomitmen untuk melindungi setiap dan semua informasi pribadi yang mungkin diberikan oleh Anda dan oleh karena itu akan memastikan perlakuan yang adil, keandalan, kerahasiaan, dan keamanan informasi pribadi Anda. Kami merancang Kebijakan Privasi ini untuk menjelaskan kepada Anda bagaimana kami mengumpulkan, menggunakan, dan membagikan informasi pribadi Anda. \u201CInformasi pribadi\u201D berarti informasi apa pun yang dapat digunakan untuk mengidentifikasi Anda secara pribadi (tidak termasuk informasi apa pun yang telah dikumpulkan atau dibuat anonim) dan sebagaimana ditafsirkan berdasarkan Peraturan Menteri Komunikasi dan Teknologi Informasi No. 20 tahun 2016 tentang Perlindungan Data Pribadi dalam Sistem Elektronik (selanjutnya disebut sebagai \u201CPeraturan 20/2016\u201C)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Informasi yang terdapat dalam Kebijakan Privasi ini telah dipersiapkan sehubungan dan sesuai dengan peraturan yang berlaku dan untuk digunakan khusus oleh Artria dan afiliasinya dan/atau penerima pengalihannya."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Penerimaan dan Persetujuan Anda"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda wajib membaca Kebijakan Privasi kami dari waktu ke waktu. Dengan mengakses atau menggunakan layanan atau produk kami serta Situs Web kami, hal tersebut akan dianggap sebagai persetujuan dan penerimaan Anda terhadap Kebijakan Privasi kami, dengan demikian, Anda setuju untuk terikat pada setiap ketentuan yang tercantum dalam Kebijakan Privasi kami. Jika Anda tidak setuju dengan ketentuan atau ketentuan apa pun dalam Kebijakan Privasi ini, jangan gunakan layanan atau produk kami serta Situs Web kami. [Dengan mengirimkan pemberitahuan ke email Anda], kami memiliki hak untuk merevisi dan/atau memperbarui Kebijakan Privasi kami dari waktu ke waktu dan Anda setuju untuk terikat dengan Kebijakan Privasi yang direvisi dan/atau diperbarui tersebut. Jika Anda tidak setuju dengan ketentuan kami yang direvisi dan/atau diperbarui dalam Kebijakan Privasi, silakan berhenti mengakses layanan atau produk kami atau Situs Web kami."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Penerimaan dan persetujuan Anda terhadap Kebijakan Privasi ini juga akan berkaitan dengan ketentuan yang tercantum berdasarkan Ketentuan Layanan dan akan dianggap dan tidak dapat dipisahkan dan satu perjanjian yang mengatur hak dan kewajiban kami kepada Anda."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Pengumpulan Informasi Pribadi Anda"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kami mengumpulkan dan mengelola informasi pribadi Anda ketika Anda mendaftar untuk akun Artria sebagai bagian dari proses verifikasi identitas kami, dalam proses transaksi, atau ketika Anda meminta tanda terima digital. Kami dapat mengumpulkan dan mengelola, tetapi tidak terbatas pada pengumpulan dan pengelolaan, sebagai berikut:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inside"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Informasi dasar pengguna, seperti nama lengkap Anda, alamat email, alamat tempat tinggal dan tempat tinggal tetap, nomor telepon, tanggal lahir, usia, rincian rekening bank, informasi pekerjaan, kartu kredit, dan / atau informasi rekening keuangan;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Informasi apa pun yang diunggah oleh Anda atau informasi apa pun tentang produk dan layanan Anda;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Informasi yang melekat pada Anda saat Anda mengakses Situs kami;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Informasi apa pun di komputer, ponsel, atau perangkat lain tempat Anda memasang aplikasi kami atau mengakses Layanan kami, yang akan bergantung pada izin yang Anda berikan;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Setiap informasi yang dikumpulkan oleh cookies, suar web, serta informasi log umum;")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kami berhak, dari waktu ke waktu, melakukan verifikasi terhadap informasi pribadi yang Anda berikan kepada kami, dengan mengirimkan surat verifikasi, e-mail, atau mengharuskan Anda untuk mengirimkan dokumentasi pendukung, atau cara apa pun, sebagaimana yang diminta."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda dengan ini setuju bahwa Informasi Pribadi Anda dapat diungkapkan kepada pihak-pihak sebagai berikut: (a) afiliasi dan anak perusahaan, agen dan subkontraktor Perusahaan; (b) pemerintah, badan pengatur, dan lembaga pencegah penipuan untuk tujuan mengidentifikasi, mencegah, mendeteksi atau menanggulangi penipuan, pencucian uang, atau kejahatan lainnya, dan untuk tujuan yang sah lainnya; (d) kepada pihak ketiga untuk tujuan manajemen risiko (e) entitas lain yang mungkin diwajibkan oleh hukum atau sebagai kepentingan publik dapat menjamin, untuk tujuan yang dijelaskan dalam paragraf berikutnya; dan (f) pembeli pada saat terjadinya akuisisi. Anda memahami dan menyadari bahwa pengungkapan tersebut harus dibuat dan setuju untuk mengesampingkan hak Anda untuk mengajukan klaim ganti rugi, sejauh diizinkan oleh undang-undang."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Penggunaan Informasi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Di Artria, kami menggunakan informasi tentang Anda untuk menyediakan, memelihara, dan meningkatkan layanan kami dan untuk menyampaikan informasi dan dukungan yang Anda minta, termasuk tanda terima, peringatan, dan dukungan serta pesan-pesan iklan administratif."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kami dapat menggunakan informasi yang kami kumpulkan untuk kegiatan berikut:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-inside"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Mengirimkan berita dan informasi tentang layanan kami dan untuk berkomunikasi dengan Anda tentang produk, layanan, promosi, dan pembaruan yang ditawarkan oleh kami dan pilih mitra;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Meningkatkan produk, layanan, atau Situs kami dan memenuhi permintaan Anda;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Memelihara catatan internal;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Menanggapi pertanyaan dan komentar Anda, untuk memberi Anda akses ke produk atau layanan kami dan untuk berkomunikasi dengan Anda tentang produk atau layanan kami;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Menyelidiki dugaan kecurangan, pelecehan, ancaman fisik, atau pelanggaran lain terhadap hukum, aturan atau peraturan apa pun, aturan atau kebijakan Situs, atau hak pihak ketiga; atau untuk menyelidiki segala perilaku yang dicurigai yang kami anggap tidak patut;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Untuk tujuan internal kami seperti audit, analisis data, dan penelitian untuk meningkatkan produk, layanan, dan komunikasi pelanggan kami;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Untuk pengungkapan yang disyaratkan oleh hukum, peraturan, atau perintah pengadilan; dan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Untuk tujuan atau sehubungan dengan proses hukum atau diperlukan untuk menetapkan, membela, atau melaksanakan hak hukum.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kami dapat menggunakan informasi tentang Anda untuk meningkatkan, menyesuaikan, dan memfasilitasi penggunaan layanan dan produk kami untuk memberikan layanan yang lebih baik."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Berbagi Informasi Pribadi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda dengan ini setuju bahwa Informasi Pribadi Anda dapat dibagikan kepada afiliasi atau vendor kami untuk tujuan pemrosesan yang mungkin diperlukan dalam pemeliharaan dan pelaksanaan tugas dan tanggung jawab layanan kami, sesuai dengan hukum, aturan, dan peraturan yang berlaku. Kami mungkin, jika perlu, melibatkan subkontraktor atau pemroses data dalam setiap keadaan sehubungan dengan tujuan yang disebutkan di atas."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Semua perjanjian pemrosesan, subkontrak atau pembagian data akan sesuai dengan persyaratan berdasarkan Peraturan No. 20/2016, atau undang-undang dan peraturan yang berlaku yang mungkin ada di sini setelah lulus dan diimplementasikan. Sejauh pemrosesan, subkontrak, atau pembagian data membutuhkan pemberitahuan atau persetujuan, kami akan memberikan atau meminta pemberitahuan dan/atau persetujuan tersebut, dalam setiap keadaan, sebelum pemrosesan atau pembagian Informasi Pribadi Anda (jika berlaku)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kecuali sebagaimana yang ditetapkan di sini, kami tidak akan memberikan Informasi Pribadi Anda kepada pihak ketiga tanpa persetujuan khusus Anda"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Retensi Informasi Pribadi Anda"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sejauh diizinkan oleh undang-undang, Informasi Pribadi akan disimpan oleh Artria untuk periode yang diperlukan untuk memenuhi tujuan yang diuraikan dalam Kebijakan Privasi ini."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda berhak untuk membatalkan akun anda pada Artria pada setiap waktu. Anda dapat membatalkan akun dengan mengikuti petunjuk pada saat anda masuk ke akun anda melalui Aplikasi atau Website. Apabila anda membatalkan akun sebelum berakhirnya masa langganan bulanan atau tahunan anda, pembatalan akun anda akan berlaku seketika dan anda tidak memiliki hak atas pengembalian Biaya apapun yang telah dibayarkan di muka (kecuali Kami menyetujui sebaliknya)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Keamanan Informasi Pribadi Anda"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kami menghargai Informasi Pribadi yang dikumpulkan, digunakan, disimpan, dan disimpan melalui Situs kami, dan akan mengambil tindakan yang wajar termasuk perlindungan administratif, fisik dan teknis, untuk melindunginya dari kemungkinan ancaman, baik online maupun offline. Kami tidak menjamin bahwa pihak ketiga yang tidak sah tidak akan dapat mengalahkan upaya keamanan kami atau menggunakan informasi pribadi Anda untuk tujuan yang tidak benar. Jika informasi dikompromikan sebagai akibat dari pelanggaran keamanan, kami akan mengambil langkah-langkah yang wajar untuk menyelidiki situasi dan jika perlu, memberi tahu individu-individu yang informasinya mungkin telah disalahgunakan dan mengambil langkah-langkah lain sesuai dengan undang-undang atau peraturan yang berlaku."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kami tidak menjamin bahwa: (a) Layanan akan memenuhi kebutuhan khusus anda; (b) Layanan akan tidak terganggu, cepat, aman, atau bebas dari kekeliruan; (c)Layanan akan akurat dan dapat diandalkan; (d) kualitas dari segala produk, layanan, informasi, atau material lain yang dibeli atau diperoleh oleh anda melalui Layanan akan memenuhi ekspektasi anda; atau (e) segala kekeliruan dalam Layanan akan diperbaiki."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Namun, karena sifat Internet yang terbuka, kami tidak menjamin akses yang tidak sah oleh pihak ketiga dan Anda sadar akan situasi semacam ini. Jika informasi tersebut dikompromikan sebagai akibat dari pelanggaran keamanan, kami akan mengambil langkah-langkah yang wajar untuk menyelidiki situasi dan jika perlu, memberi tahu individu yang informasinya mungkin telah disalahgunakan dan mengambil langkah lain sesuai dengan hukum atau peraturan yang berlaku. Sejauh diizinkan oleh undang-undang, kami tidak bertanggung jawab dan berkewajiban atas segala kerusakan, kerugian, dan/atau klaim langsung, tidak langsung, konsekuensial, atau hukuman, yang mungkin Anda derita karena kehilangan, akses tidak sah, penyalahgunaan, atau perubahan informasi apa pun yang Anda kirimkan ke Situs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Kerahasiaan Akun Anda"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda harus bertanggung jawab untuk menjaga kerahasiaan akun dan kata sandi Anda sendiri, serta setiap dan semua aplikasi yang diajukan, kewajiban yang disetujui atau dimasukkan ke dalam dan semua kegiatan lain yang dilakukan berdasarkan akun tersebut. Anda setuju untuk segera memberi tahu kami tentang penggunaan atau pengungkapan yang tidak sah atas akun atau kata sandi Anda, setiap kegiatan tidak sah di bawah akun Anda atau pelanggaran keamanan lainnya."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Kami tidak akan bertanggung jawab atas kerugian apa pun yang mungkin Anda alami akibat penggunaan pihak ketiga atas akun atau kata sandi Anda, baik dengan atau tanpa sepengetahuan Anda, tanpa kesalahan atau kelalaian dari pihak kami."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Pengalihan Aset"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Selama menjalankan bisnis kami, kami dapat menjual atau membeli aset. Jika entitas lain mengakuisisi kami atau semua atau secara substansial semua aset kami, Informasi yang kami kumpulkan tentang Anda dapat ditransfer ke entitas tersebut. Juga, jika terdapat proses kepailitan atau perubahan organisasi yang dilakukan oleh atau terhadap kami, informasi tersebut dapat dianggap sebagai aset milik kami dan dapat dijual atau dialihkan kepada pihak ketiga. Jika hal-hal di atas terjadi, Anda setuju untuk memberikan kami izin Anda dan hak untuk kami mentransfernya ke pihak ketiga tanpa pemberitahuan lebih lanjut, sejauh diizinkan oleh undang-undang dan peraturan yang berlaku."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Hukum yang Berlaku"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Setiap referensi terhadap hukum dan peraturan yang berlaku berdasarkan Kebijakan Privasi ini harus ditafsirkan sesuai dengan ketentuan yang tercantum di bawah hukum dan peraturan Republik Indonesia."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Keterpisahan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Jika ada ketentuan atau ketentuan dari Kebijakan Privasi ini akan diadakan atau dinyatakan tidak sah, tidak berdasar atau tidak dapat diberlakukan untuk alasan apa pun oleh aturan hukum atau kebijakan publik, ketentuan tersebut harus dicabut sejauh tidak sah atau tidak dapat dilaksanakan dan ketentuan lainnya akan terus berlanjut dengan kekuatan dan keberlakuan yang penuh."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Hubungi kami"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Anda setuju untuk mengizinkan kami mengontak anda melalui email (atau kecuali dinyatakan lain oleh anda) dan menyampaikan iklan, material pemasaran, informasi baru, surat kabar, pemberitahuan, dan informasi lain apapun kepada anda melalui alamat kontak yang anda sampaikan kepada kami pada saat pendaftaran dan/atau alamat kontak lain dari waktu ke waktu."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "h3-sm fw-700"
  }, "Lain-lain"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Untuk pertanyaan, kekhawatiran atau klarifikasi apapun tentang Kebijakan Privasi kami, kami dapat dihubungi melalui sistem dukungan pelanggan di +62857 5876 3112 dan/atau email ke privacy@artria.id"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null));
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "v4hW":
/***/ (function(module, exports) {



/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "w+rK":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });