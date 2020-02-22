function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scan-students-list-students-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/scan/students-list/students-list.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scan/students-list/students-list.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScanStudentsListStudentsListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/\"></ion-back-button>\n  </ion-buttons>\n  <ion-toolbar>\n    <ion-title>studentsList</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"3\">\n          Name\n        </ion-col>\n        \n        <ion-col size=\"3\">\n           score\n        </ion-col>\n        <ion-col size=\"5\">\n          Update score\n        </ion-col>\n        <ion-col>\n\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let a of dataArray\">\n        <ion-col size=\"3\">\n          {{a.name}}\n        </ion-col>\n        <ion-col size=\"3\">\n          {{a.r1marks}}\n        </ion-col>\n        \n        <ion-col size=\"4\">       \n            <ion-item>\n              <ion-label position=\"floating\" size=\"small\">  enter score  </ion-label>\n              <ion-input type=\"number\" #r1marks  placeholder=0></ion-input>\n            </ion-item> \n        </ion-col>\n        \n        <ion-col size=\"2\">\n          <ion-button expand=\"full\" size=\"small\" (click)=\"update(a,r1marks.value)\"><ion-icon name=\"create-outline\"></ion-icon></ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" size=\"small\" (click)=\"upload()\">Upload</ion-button>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/scan/students-list/students-list-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/scan/students-list/students-list-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: StudentsListPageRoutingModule */

  /***/
  function srcAppScanStudentsListStudentsListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsListPageRoutingModule", function () {
      return StudentsListPageRoutingModule;
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


    var _students_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./students-list.page */
    "./src/app/scan/students-list/students-list.page.ts");

    var routes = [{
      path: '',
      component: _students_list_page__WEBPACK_IMPORTED_MODULE_3__["StudentsListPage"]
    }];

    var StudentsListPageRoutingModule = function StudentsListPageRoutingModule() {
      _classCallCheck(this, StudentsListPageRoutingModule);
    };

    StudentsListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StudentsListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/scan/students-list/students-list.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/scan/students-list/students-list.module.ts ***!
    \************************************************************/

  /*! exports provided: StudentsListPageModule */

  /***/
  function srcAppScanStudentsListStudentsListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsListPageModule", function () {
      return StudentsListPageModule;
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


    var _students_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./students-list-routing.module */
    "./src/app/scan/students-list/students-list-routing.module.ts");
    /* harmony import */


    var _students_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./students-list.page */
    "./src/app/scan/students-list/students-list.page.ts");

    var StudentsListPageModule = function StudentsListPageModule() {
      _classCallCheck(this, StudentsListPageModule);
    };

    StudentsListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _students_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudentsListPageRoutingModule"]],
      declarations: [_students_list_page__WEBPACK_IMPORTED_MODULE_6__["StudentsListPage"]]
    })], StudentsListPageModule);
    /***/
  },

  /***/
  "./src/app/scan/students-list/students-list.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/scan/students-list/students-list.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScanStudentsListStudentsListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjYW4vc3R1ZGVudHMtbGlzdC9zdHVkZW50cy1saXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/scan/students-list/students-list.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/scan/students-list/students-list.page.ts ***!
    \**********************************************************/

  /*! exports provided: StudentsListPage */

  /***/
  function srcAppScanStudentsListStudentsListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsListPage", function () {
      return StudentsListPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/firebase.service */
    "./src/app/services/firebase.service.ts");

    var StudentsListPage =
    /*#__PURE__*/
    function () {
      function StudentsListPage(route, storage, ss, fs, router) {
        _classCallCheck(this, StudentsListPage);

        this.route = route;
        this.storage = storage;
        this.ss = ss;
        this.fs = fs;
        this.router = router;
        this.dataArray = [];
        this.flag = false;
      }

      _createClass(StudentsListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.event = this.route.snapshot.paramMap.get('ghi');
          this.ss.getItems(this.event).then(function (items) {
            _this.dataArray = items;
          });
        }
      }, {
        key: "update",
        value: function update(a, m1) {
          a.r1marks = Number(m1);
          this.ss.updateItem(a, this.event).then();
        }
      }, {
        key: "upload",
        value: function upload() {
          var _this2 = this;

          var temp = [];
          temp = this.dataArray;
          this.dataArray.forEach(function (i) {
            _this2.fs.addUser(_this2.event, i);
          });
          this.storage.set(this.event, null).then(function () {});
          this.dataArray = null;
        }
      }]);

      return StudentsListPage;
    }();

    StudentsListPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    StudentsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-students-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./students-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/scan/students-list/students-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./students-list.page.scss */
      "./src/app/scan/students-list/students-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], StudentsListPage);
    /***/
  },

  /***/
  "./src/app/services/firebase.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/firebase.service.ts ***!
    \**********************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppServicesFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
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


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);

    var FirebaseService =
    /*#__PURE__*/
    function () {
      function FirebaseService(db) {
        _classCallCheck(this, FirebaseService);

        this.db = db;
      }

      _createClass(FirebaseService, [{
        key: "getUsers",
        value: function getUsers(ittop) {
          return this.db.collection("".concat(ittop));
        }
      }, {
        key: "getUser",
        value: function getUser(ittop, id) {
          return this.db.doc("".concat(ittop, "/").concat(id));
        }
      }, {
        key: "updateUser",
        value: function updateUser(ittop, baka) {
          return this.db.doc("".concat(ittop, "/").concat(baka.receipt)).set(baka);
        }
      }, {
        key: "addUser",
        value: function addUser(ittop, baka) {
          var _this3 = this;

          this.getUser(ittop, baka.receipt).valueChanges().subscribe(function (da) {
            if (da) {} else {
              return _this3.db.doc("".concat(ittop, "/").concat(baka.receipt)).set(baka);
            }
          });
        }
      }, {
        key: "removeUser",
        value: function removeUser(ittop, id) {
          return this.db.doc("".concat(ittop, "/").concat(id)).delete();
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.ctorParameters = function () {
      return [{
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], FirebaseService);
    /***/
  }
}]);
//# sourceMappingURL=scan-students-list-students-list-module-es5.js.map