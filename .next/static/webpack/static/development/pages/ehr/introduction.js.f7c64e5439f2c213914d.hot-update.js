webpackHotUpdate("static/development/pages/ehr/introduction.js",{

/***/ "./pages/ehr/introduction.js":
/*!***********************************!*\
  !*** ./pages/ehr/introduction.js ***!
  \***********************************/
/*! exports provided: introduction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introduction", function() { return introduction; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Navbar */ "./components/Navbar/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/akbar.nafisajafar/Documents/evius/Artria/pages/ehr/introduction.js";






var introduction =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(introduction, _Component);

  function introduction(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, introduction);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(introduction).call(this, props));
    _this.state = {
      hero: {
        title: 'Solusi untuk Mengelola Pasien dengan Layanan Electronic Medical Record',
        desc: 'Tanpa harus mengulang anamnesis biarkan kami yang mengelola rekam medis Anda, agar pasien nyaman dengan layanan yang anda berikan'
      },
      pros: [{
        title: 'EHR Basic',
        items: ['+5.000 EMR', 'PRM (Patient Relationship Management)', 'Artria Home Care Managed by Apps'],
        to: ''
      }, {
        title: 'EHR Pro',
        items: ['Unlimited EMR', 'PRM (Patient Relationship Management)', 'Artria Home Care Managed by Apps', 'DOK (Artria Telemedicine managed by Apps)', 'Offline Sync'],
        to: ''
      }],
      table: [{
        title: 'Data medis',
        basic: '+5.000',
        pro: 'Tak Terbatas'
      }, {
        title: 'History Medical Record',
        basic: true,
        pro: true
      }, {
        title: 'Analityics',
        basic: 'Standar',
        pro: 'Full'
      }, {
        title: 'Patient Relationship Management',
        basic: '',
        pro: ''
      }, {
        title: 'Online Appointment',
        basic: true,
        pro: true
      }, {
        title: 'Skor Kepuasan Pasien',
        basic: true,
        pro: true
      }, {
        title: 'Broadcast Management',
        basic: true,
        pro: true
      }, {
        title: 'Home Care (Managed by Apps)',
        basic: true,
        pro: true
      }, {
        title: 'DOK (Telemedicine managed by Apps)',
        basic: false,
        pro: true
      }, {
        title: 'Offline Sync',
        basic: false,
        pro: true
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(introduction, [{
    key: "render",
    value: function render() {
      var pros = this.state.pros.map(function (v, index) {
        if (index === 0) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
            key: index * 3,
            className: "feature section row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "col-md-6 col-12 text-right",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
            className: "h3-sm h2-md mb-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }, v.title), v.items.map(function (item, index) {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
              key: index * 4,
              className: "feature__item h4-md  mb-3 text-right justify-content-end",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              },
              __self: this
            }, item), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
              className: "ml-3",
              src: "/static/icon/true.svg",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              },
              __self: this
            }));
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
            className: "btn btn--medium secondary mt-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
            href: "/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          }, "Pelajari Lebih Lanjut")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "col-md-6 col-12 mt-3 mt-7 mt-md-0",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            className: "w-75 d-flex mx-auto ml-md-7",
            src: "/static/icon/house-1.svg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          })));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
            key: index * 3,
            className: "feature section row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "col-md-6 col-12 order-md-2 ",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
            className: "h3-sm h2-md mb-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            },
            __self: this
          }, v.title), v.items.map(function (item, index) {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h5", {
              key: index * 4,
              className: "feature__item h4-md  mb-3 ",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
              className: "mr-3",
              src: "/static/icon/true.svg",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              },
              __self: this
            }, item));
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
            className: "btn btn--medium secondary mt-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
            href: "/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          }, "Pelajari Lebih Lanjut")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "col-md-6 col-12 mt-3 mt-7 mt-md-0",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            className: "w-75 d-flex mx-auto ml-md-7",
            src: "/static/icon/house-2.svg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: this
          })));
        }
      });
      var features = this.state.pros.map(function (v, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: index * 13,
          className: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
          className: "card__title h3-sm ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, v.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "card__content px-md-7 px-4 pb-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "card__text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, index === 0 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "w-75 mx-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "w-100",
          src: "/static/icon/house-1.svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        })) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "w-75 mx-auto",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "w-100",
          src: "/static/icon/house-2.svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        })), v.items.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            key: index * 3,
            className: "card__item h4-md ",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            },
            __self: this
          }, item);
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          className: "card__compare flex-items text-center my-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, "Bandingkan", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "ml-2",
          src: "/static/icon/chevron-white.svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          className: "btn btn--medium primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: v.to,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, "Mulai Sekarang"))))));
      });
      var table = this.state.table.map(function (v, index) {
        if (v.title === 'Patient Relationship Management') {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            key: index,
            className: "table__row my-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            },
            __self: this
          }, v.title)));
        } else {
          var dataBasic;
          var dataPro;

          if (v.basic === true) {
            dataBasic = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
              src: "/static/icon/true.svg",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 213
              },
              __self: this
            });
          } else if (v.basic === false) {
            dataBasic = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
              src: "/static/icon/false.svg",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 215
              },
              __self: this
            });
          } else {
            dataBasic = v.basic;
          }

          if (v.pro === true) {
            dataPro = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
              src: "/static/icon/true.svg",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 221
              },
              __self: this
            });
          } else if (v.pro === false) {
            dataPro = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
              src: "/static/icon/false.svg",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 223
              },
              __self: this
            });
          } else {
            dataPro = v.pro;
          }

          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            key: index,
            className: "table__row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 229
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 230
            },
            __self: this
          }, v.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 233
            },
            __self: this
          }, dataBasic), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 236
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 237
            },
            __self: this
          }, dataPro)));
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "erh__introduction",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "Artria - EHR Introduction")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "hero section-header flex-items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hero__wrapper container ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-6 col-12 flex-justify flex-column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "h3-md mw-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, this.state.hero.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, this.state.hero.desc), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "btn btn--medium primary mt-5 mw-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "Mulai Uji Coba 14 Hari Gratis"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "app-download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/icon/app-store.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/icon/app-google.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "hero__image",
        src: "/static/image/ehr.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, pros), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "section no-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "h3-md text-center mw-3 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "Tanpa batas, kelola rekam medis Anda berikan pelayanan ekstra kepada pasien loyal Anda.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "section no-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        className: "h3-md text-center mw-3 mx-auto mb-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, "Buka Fitur ini Sekarang"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "card__wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, features)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "section no-border container section-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "table mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "table__header table__row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "Electronic Medical Record Management"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "EHR Basic"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "EHR Pro")), table)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }));
    }
  }]);

  return introduction;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (introduction);

/***/ })

})
//# sourceMappingURL=introduction.js.f7c64e5439f2c213914d.hot-update.js.map