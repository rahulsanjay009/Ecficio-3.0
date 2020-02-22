function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"events\">\n      <ion-icon name=\"logo-buffer\"></ion-icon>\n      <ion-label>Events</ion-label>\n    </ion-tab-button>\n    \n    <ion-tab-button tab=\"register\" >\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Register</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"organizer\">\n      <ion-icon name=\"power\"></ion-icon>\n      <ion-label>organizer</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"getqr\">\n      <ion-icon name=\"qr-code-sharp\"></ion-icon>\n      <ion-label>Get QR</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | register-register-module */
          [__webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null,
          /*! ../register/register.module */
          "./src/app/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'organizer',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | scan-scan-module */
          [__webpack_require__.e("common"), __webpack_require__.e("scan-scan-module")]).then(__webpack_require__.bind(null,
          /*! ../scan/scan.module */
          "./src/app/scan/scan.module.ts")).then(function (m) {
            return m.ScanPageModule;
          });
        }
      }, {
        path: 'events',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | events-events-module */
          "events-events-module").then(__webpack_require__.bind(null,
          /*! ../events/events.module */
          "./src/app/events/events.module.ts")).then(function (m) {
            return m.EventsPageModule;
          });
        }
      }, {
        path: 'events/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | selected-event-selected-event-module */
          "selected-event-selected-event-module").then(__webpack_require__.bind(null,
          /*! ../selected-event/selected-event.module */
          "./src/app/selected-event/selected-event.module.ts")).then(function (m) {
            return m.SelectedEventPageModule;
          });
        }
      }, {
        path: 'organizer/studentlist/:ghi',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | scan-students-list-students-list-module */
          [__webpack_require__.e("common"), __webpack_require__.e("scan-students-list-students-list-module")]).then(__webpack_require__.bind(null,
          /*! ../scan/students-list/students-list.module */
          "./src/app/scan/students-list/students-list.module.ts")).then(function (m) {
            return m.StudentsListPageModule;
          });
        }
      }, {
        path: 'getqr',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | get-qr-get-qr-module */
          [__webpack_require__.e("default~get-qr-get-qr-module~qrgenerate-qrgenerate-module"), __webpack_require__.e("common"), __webpack_require__.e("get-qr-get-qr-module")]).then(__webpack_require__.bind(null,
          /*! ../get-qr/get-qr.module */
          "./src/app/get-qr/get-qr.module.ts")).then(function (m) {
            return m.GetQRPageModule;
          });
        }
      }, {
        path: 'register/:abc',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | qrgenerate-qrgenerate-module */
          [__webpack_require__.e("default~get-qr-get-qr-module~qrgenerate-qrgenerate-module"), __webpack_require__.e("qrgenerate-qrgenerate-module")]).then(__webpack_require__.bind(null,
          /*! ../qrgenerate/qrgenerate.module */
          "./src/app/qrgenerate/qrgenerate.module.ts")).then(function (m) {
            return m.QrgeneratePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: '/tabs/events',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/tabs/events',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsPage = function TabsPage() {
      _classCallCheck(this, TabsPage);
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map