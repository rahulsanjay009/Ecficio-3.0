function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scan-scan-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/scan/scan.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scan/scan.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScanScanPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    \n    <ion-title>{{event}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"!bo\">\n    <ion-item>\n      <ion-label position=\"floating\" size=small>EVENTS</ion-label>\n      <ion-select value=\"Event\" [(ngModel)]=\"event\" >\n        <ion-select-option [value]=\"e.eventname\" *ngFor=\"let e of events\">{{e.eventname}}</ion-select-option>\n        \n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" size=small>password</ion-label>\n      <ion-input type=\"password\" #password></ion-input>\n    </ion-item>\n    \n      <ion-button (click)=\"SelectedEvent(password.value,ref)\" expand=\"block\">login</ion-button>\n{{msg}}\n\n    \n  </ion-list>\n  <div *ngIf=\"bo\">\n  <ion-button expand=\"block\" type=\"submit\" (click)=\"Scancode()\">Scancode<ion-icon name=\"scan-outline\" slot=\"end\"></ion-icon></ion-button>\n  <ion-card *ngIf=\"!data.receipt==''\"> \n    <ion-card-content>\n        {{status+\" \"}}<br>\n        receipt : {{data.receipt}} <br>\n        name : {{data.name}}<br>\n        college : {{data.college}}  <br>       \n        contact : {{data.phone}} <br>\n        rollno : {{data.rollno}} <br>\n        email : {{data.email}} \n        \n        \n    </ion-card-content>\n  </ion-card>\n  <ion-button expand=\"block\"  (click)=\"UpdateMarks()\" > Update <ion-icon name=\"arrow-up-circle-outline\" slot=\"end\"></ion-icon></ion-button> \n\n  <ion-button expand=\"block\"  (click)=\"UploadedData()\" >UploadedData</ion-button> \n  \n  <ion-button expand=\"block\"  (click)=\"logout()\" >logout<ion-icon name=\"log-out-outline\" slot=\"end\"></ion-icon></ion-button> \n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/scan/scan-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/scan/scan-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: ScanPageRoutingModule */

  /***/
  function srcAppScanScanRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScanPageRoutingModule", function () {
      return ScanPageRoutingModule;
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


    var _scan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./scan.page */
    "./src/app/scan/scan.page.ts");

    var routes = [{
      path: '',
      component: _scan_page__WEBPACK_IMPORTED_MODULE_3__["ScanPage"]
    }, {
      path: 'uploadeddata/:db',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | uploadeddata-uploadeddata-module */
        "uploadeddata-uploadeddata-module").then(__webpack_require__.bind(null,
        /*! ./uploadeddata/uploadeddata.module */
        "./src/app/scan/uploadeddata/uploadeddata.module.ts")).then(function (m) {
          return m.UploadeddataPageModule;
        });
      }
    }];

    var ScanPageRoutingModule = function ScanPageRoutingModule() {
      _classCallCheck(this, ScanPageRoutingModule);
    };

    ScanPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ScanPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/scan/scan.module.ts":
  /*!*************************************!*\
    !*** ./src/app/scan/scan.module.ts ***!
    \*************************************/

  /*! exports provided: ScanPageModule */

  /***/
  function srcAppScanScanModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScanPageModule", function () {
      return ScanPageModule;
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


    var _scan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./scan-routing.module */
    "./src/app/scan/scan-routing.module.ts");
    /* harmony import */


    var _scan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./scan.page */
    "./src/app/scan/scan.page.ts");

    var ScanPageModule = function ScanPageModule() {
      _classCallCheck(this, ScanPageModule);
    };

    ScanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _scan_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScanPageRoutingModule"]],
      declarations: [_scan_page__WEBPACK_IMPORTED_MODULE_6__["ScanPage"]]
    })], ScanPageModule);
    /***/
  },

  /***/
  "./src/app/scan/scan.page.scss":
  /*!*************************************!*\
    !*** ./src/app/scan/scan.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppScanScanPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjYW4vc2Nhbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/scan/scan.page.ts":
  /*!***********************************!*\
    !*** ./src/app/scan/scan.page.ts ***!
    \***********************************/

  /*! exports provided: ScanPage */

  /***/
  function srcAppScanScanPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScanPage", function () {
      return ScanPage;
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


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/firebase.service */
    "./src/app/services/firebase.service.ts");

    var ScanPage =
    /*#__PURE__*/
    function () {
      function ScanPage(qr, ss, fs, route, router, storage) {
        var _this = this;

        _classCallCheck(this, ScanPage);

        this.qr = qr;
        this.ss = ss;
        this.fs = fs;
        this.route = route;
        this.router = router;
        this.storage = storage;
        this.event = "";
        this.msg = "";
        this.events = [];
        this.selectedEvent = null;
        this.data = {};
        this.dataArray = [];
        this.filtered = [];
        this.status = "";
        setInterval(function (data) {
          _this.ss.getEvent().then(function (x) {
            _this.bo = x;
          }).catch(function (err) {
            return _this.bo = false;
          });
        }, 1000);
      }

      _createClass(ScanPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.ss.getEvent().then(function (x) {
            _this2.bo = false;

            _this2.ss.setEvent(false);
          }).catch(function (err) {
            return _this2.bo = true;
          });
          this.fs.getUsers('events').valueChanges().subscribe(function (da) {
            _this2.events = da;
          });
        }
      }, {
        key: "Scancode",
        value: function Scancode() {
          var _this3 = this;

          this.qr.scan().then(function (data) {
            var s = data.text.split(" ");
            _this3.data.eventname = _this3.selectedEvent;
            _this3.data.r1marks = 0;
            /*  this.data.receipt="12";
                this.data.name="fasdsfd";
                 this.data.college="asfdsa";
                 this.data.phone="fasddsa";
                this.data.rollno="fsdadags";
               this.data.email="afsds";   */

            _this3.data.receipt = s[0];
            _this3.data.name = s[1];
            _this3.data.college = s[2];
            _this3.data.phone = s[3];
            _this3.data.rollno = s[4];
            _this3.data.email = s[5];

            var b = _this3.fs.getUser('participants', _this3.data.receipt).valueChanges().subscribe(function (da) {
              if (da) {
                var a = _this3.fs.getUser(_this3.data.eventname, _this3.data.receipt).valueChanges().subscribe(function (ittop) {
                  if (ittop) {
                    _this3.status = "Participitant already participated in " + _this3.event;
                  } else {
                    _this3.ss.addItem(da, _this3.data.eventname);

                    _this3.status = "Successfully registered for " + _this3.event;
                    a.unsubscribe();
                    b.unsubscribe();
                  }
                });
              } else {
                console.log("Not a participitant!!");
              }
            });
          });
        }
      }, {
        key: "UpdateMarks",
        value: function UpdateMarks() {
          this.data = {};
          this.router.navigate(['tabs/organizer/studentlist/', this.event]);
        }
      }, {
        key: "UploadedData",
        value: function UploadedData() {
          this.router.navigate(['tabs/organizer/uploadeddata/', this.event]);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.ss.setEvent(false);
        }
      }, {
        key: "SelectedEvent",
        value: function SelectedEvent(x, e) {
          var _this4 = this;

          var a = this.fs.getUser('logins', 'eventslogin').valueChanges().subscribe(function (da) {
            if (x == da.password) {
              console.log(x);
              _this4.selectedEvent = _this4.event;

              _this4.ss.setEvent(true);

              a.unsubscribe();
            } else {
              _this4.msg = "invalid";
              a.unsubscribe();
            }
          });
        }
      }]);

      return ScanPage;
    }();

    ScanPage.ctorParameters = function () {
      return [{
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }, {
        type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    ScanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./scan.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/scan/scan.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./scan.page.scss */
      "./src/app/scan/scan.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__["BarcodeScanner"], _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])], ScanPage);
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
          var _this5 = this;

          this.getUser(ittop, baka.receipt).valueChanges().subscribe(function (da) {
            if (da) {} else {
              return _this5.db.doc("".concat(ittop, "/").concat(baka.receipt)).set(baka);
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
//# sourceMappingURL=scan-scan-module-es5.js.map