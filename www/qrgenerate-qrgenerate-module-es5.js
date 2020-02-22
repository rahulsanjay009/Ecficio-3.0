function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qrgenerate-qrgenerate-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/qrgenerate/qrgenerate.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qrgenerate/qrgenerate.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQrgenerateQrgeneratePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>QR CODE Generated</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"background-color:aquamarine;\">\n    <ion-row style=\"margin-top:10%\">\n      <ion-col>\n        <div>\n\n        </div>\n      </ion-col>\n      <ion-col >\n        <div>\n      <ion-text color=\"primary\" align=\"center\">\n       <h1 style=\"color:black;\"><b>Ecficio 3.0</b></h1>   \n       </ion-text>\n        <div align=\"center\">\n      <ngx-qrcode qrc-element-type=\"img\"  [(qrc-value)]=\"qrdata\" >\n      </ngx-qrcode>\n      </div>\n      <ion-text color=\"primary\" align=\"center\">\n        <div align=\"center\" style=\"color:black;\">{{registerUser.name}}</div>\n        <p style=\"color:black;\">Thanks For Registering!!</p>\n      </ion-text>\n      <ion-datetime displayFormat=\"MMM DD YYYY, h:mm A\" [(ngModel)]=\"myDate\" style=\"color:black;\"></ion-datetime>\n      <p style=\"color:black;\"><b>Note:</b>Please Show The <b>QRCODE</b> at the Time of Participating in Events</p>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div >\n            \n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      \n    </ion-row>\n  </ion-grid>\n      \n    \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/qrgenerate/qrgenerate-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/qrgenerate/qrgenerate-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: QrgeneratePageRoutingModule */

  /***/
  function srcAppQrgenerateQrgenerateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QrgeneratePageRoutingModule", function () {
      return QrgeneratePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _qrgenerate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./qrgenerate.page */
    "./src/app/qrgenerate/qrgenerate.page.ts");

    var routes = [{
      path: '',
      component: _qrgenerate_page__WEBPACK_IMPORTED_MODULE_3__["QrgeneratePage"]
    }];

    var QrgeneratePageRoutingModule = function QrgeneratePageRoutingModule() {
      _classCallCheck(this, QrgeneratePageRoutingModule);
    };

    QrgeneratePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QrgeneratePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/qrgenerate/qrgenerate.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/qrgenerate/qrgenerate.module.ts ***!
    \*************************************************/

  /*! exports provided: QrgeneratePageModule */

  /***/
  function srcAppQrgenerateQrgenerateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QrgeneratePageModule", function () {
      return QrgeneratePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _qrgenerate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./qrgenerate-routing.module */
    "./src/app/qrgenerate/qrgenerate-routing.module.ts");
    /* harmony import */


    var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-qrcode2 */
    "./node_modules/ngx-qrcode2/index.js");
    /* harmony import */


    var _qrgenerate_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./qrgenerate.page */
    "./src/app/qrgenerate/qrgenerate.page.ts");

    var QrgeneratePageModule = function QrgeneratePageModule() {
      _classCallCheck(this, QrgeneratePageModule);
    };

    QrgeneratePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _qrgenerate_routing_module__WEBPACK_IMPORTED_MODULE_5__["QrgeneratePageRoutingModule"], ngx_qrcode2__WEBPACK_IMPORTED_MODULE_6__["NgxQRCodeModule"]],
      declarations: [_qrgenerate_page__WEBPACK_IMPORTED_MODULE_7__["QrgeneratePage"]]
    })], QrgeneratePageModule);
    /***/
  },

  /***/
  "./src/app/qrgenerate/qrgenerate.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/qrgenerate/qrgenerate.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQrgenerateQrgeneratePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3FyZ2VuZXJhdGUvcXJnZW5lcmF0ZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/qrgenerate/qrgenerate.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/qrgenerate/qrgenerate.page.ts ***!
    \***********************************************/

  /*! exports provided: QrgeneratePage */

  /***/
  function srcAppQrgenerateQrgeneratePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QrgeneratePage", function () {
      return QrgeneratePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");

    var QrgeneratePage =
    /*#__PURE__*/
    function () {
      function QrgeneratePage(route, fs) {
        _classCallCheck(this, QrgeneratePage);

        this.route = route;
        this.fs = fs;
        this.registerUser = {};
        this.myDate = new Date().toISOString();
        this.qrdata = {};
      }

      _createClass(QrgeneratePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.qrdata = this.route.snapshot.paramMap.get('abc') + " " + this.myDate;
          var s = String(this.qrdata).split(" ");
          this.registerUser.receipt = s[0];
          this.registerUser.name = s[1];
          this.registerUser.college = s[2];
          this.registerUser.phone = s[3];
          this.registerUser.rollno = s[4];
          this.registerUser.email = s[5];
          this.registerUser.timestamp = this.myDate;
          this.fs.addUser('participants', this.registerUser);
        }
      }]);

      return QrgeneratePage;
    }();

    QrgeneratePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
      }];
    };

    QrgeneratePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-qrgenerate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./qrgenerate.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/qrgenerate/qrgenerate.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./qrgenerate.page.scss */
      "./src/app/qrgenerate/qrgenerate.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])], QrgeneratePage);
    /***/
  }
}]);
//# sourceMappingURL=qrgenerate-qrgenerate-module-es5.js.map