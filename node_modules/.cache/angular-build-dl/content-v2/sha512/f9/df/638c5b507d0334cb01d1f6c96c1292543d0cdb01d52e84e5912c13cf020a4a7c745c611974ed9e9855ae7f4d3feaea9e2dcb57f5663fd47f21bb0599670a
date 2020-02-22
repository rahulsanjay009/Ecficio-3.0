(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["get-qr-get-qr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-qr/get-qr.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-qr/get-qr.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    \n    <ion-title>getQR</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"bo\">\n      <ion-item>\n        <ion-label position=\"floating\">Receipt no</ion-label>\n        <ion-input type=\"text\" #r></ion-input>\n        \n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">enter mobile no</ion-label>\n        <ion-input type=\"text\" #phne></ion-input>\n      </ion-item>\n      <ion-button size=\"small\" expand=\"full\" (click)=\"getqr(r.value,phne.value)\"> get my qr </ion-button>\n     <h6 align=center> {{msg}}</h6>\n    </div>\n      <ion-grid style=\"background-color:aquamarine;\" *ngIf=\"!bo\">\n        <ion-row style=\"margin-top:10%\">\n          <ion-col>\n            <div>\n    \n            </div>\n          </ion-col>\n          <ion-col >\n            <div>\n          <ion-text color=\"primary\" align=\"center\">\n           <h1 style=\"color:black;\"><b>Ecficio 3.0</b></h1>   \n           </ion-text>\n            <div align=\"center\">\n          <ngx-qrcode [(qrc-element-type)]=\"elementType\"  [(qrc-value)]=\"qrdata\" >\n          </ngx-qrcode>\n          </div>\n          <ion-text color=\"primary\" align=\"center\">\n            <div align=\"center\" style=\"color:black;\">{{registeredUser.name}}</div>\n            <p style=\"color:black;\">Thanks For Registering!!</p>\n          </ion-text>\n          <ion-datetime displayFormat=\"MMM DD YYYY, h:mm A\" [(ngModel)]=\"myDate\" style=\"color:black;\"></ion-datetime>\n          <p style=\"color:black;\"><b>Note:</b>Please Show The <b>QRCODE</b> at the Time of Participating in Events</p>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div >\n                \n            </div>\n          </ion-col>\n    \n        </ion-row>\n       \n      </ion-grid>\n      <ion-row *ngIf=\"!bo\">\n        <ion-button (click)=\"done()\" size=\"medium\" fill=\"outline\">done</ion-button>\n    </ion-row>\n    \n</ion-content>\n");

/***/ }),

/***/ "./src/app/get-qr/get-qr-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/get-qr/get-qr-routing.module.ts ***!
  \*************************************************/
/*! exports provided: GetQRPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetQRPageRoutingModule", function() { return GetQRPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _get_qr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-qr.page */ "./src/app/get-qr/get-qr.page.ts");




const routes = [
    {
        path: '',
        component: _get_qr_page__WEBPACK_IMPORTED_MODULE_3__["GetQRPage"]
    }
];
let GetQRPageRoutingModule = class GetQRPageRoutingModule {
};
GetQRPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GetQRPageRoutingModule);



/***/ }),

/***/ "./src/app/get-qr/get-qr.module.ts":
/*!*****************************************!*\
  !*** ./src/app/get-qr/get-qr.module.ts ***!
  \*****************************************/
/*! exports provided: GetQRPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetQRPageModule", function() { return GetQRPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _get_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-qr-routing.module */ "./src/app/get-qr/get-qr-routing.module.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var _get_qr_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-qr.page */ "./src/app/get-qr/get-qr.page.ts");








let GetQRPageModule = class GetQRPageModule {
};
GetQRPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _get_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__["GetQRPageRoutingModule"],
            ngx_qrcode2__WEBPACK_IMPORTED_MODULE_6__["NgxQRCodeModule"]
        ],
        declarations: [_get_qr_page__WEBPACK_IMPORTED_MODULE_7__["GetQRPage"]]
    })
], GetQRPageModule);



/***/ }),

/***/ "./src/app/get-qr/get-qr.page.scss":
/*!*****************************************!*\
  !*** ./src/app/get-qr/get-qr.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldC1xci9nZXQtcXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/get-qr/get-qr.page.ts":
/*!***************************************!*\
  !*** ./src/app/get-qr/get-qr.page.ts ***!
  \***************************************/
/*! exports provided: GetQRPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetQRPage", function() { return GetQRPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");




let GetQRPage = class GetQRPage {
    constructor(fs, ss) {
        this.fs = fs;
        this.ss = ss;
        this.bo = true;
        this.msg = "";
        this.registeredUser = {};
    }
    ngOnInit() {
    }
    getqr(r, p) {
        this.fs.getUser('participants', r).valueChanges().subscribe((da) => {
            if (da.phone == p) {
                this.registeredUser = da;
                this.myDate = da.timestamp;
                this.qrdata = da.receipt + " " + da.name + " " + da.college + " " + da.phone + " " + da.rollno + " " + da.email + " " + da.timestamp;
                this.bo = false;
            }
            else {
                this.msg = "invalid combination";
                console.log(this.msg);
            }
        });
    }
    done() {
        this.bo = !this.bo;
    }
};
GetQRPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
GetQRPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-qr',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-qr.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-qr/get-qr.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-qr.page.scss */ "./src/app/get-qr/get-qr.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
], GetQRPage);



/***/ })

}]);
//# sourceMappingURL=get-qr-get-qr-module-es2015.js.map