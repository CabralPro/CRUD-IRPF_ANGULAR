(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"sidebar\" data-image=\"./assets/img/sidebar-1.jpg\">\n    <app-sidebar></app-sidebar>\n    <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/background2.jpg)\"></div>\n  </div>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <div class=\"main-content\">\n      <router-outlet></router-outlet>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/button/button.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/button/button.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-raised-button [type]=\"type || 'button'\" ngClass=\"{{'btn btn-primary ' + _class}}\">\n  {{label}}\n</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/confirmation/confirmation.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/confirmation/confirmation.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-overlay-loading [isLoading]=\"loading\">\n  <h3 class=\"mb-3\">Deseja continuar?</h3>\n  <div class=\"d-flex justify-content-around\">\n    <app-button label=\"Sim\" _class=\"btn-success\" (click)=\"executeCallback()\"></app-button>\n    <app-button mat-dialog-close label=\"Não\" _class=\"btn-danger \"></app-button>\n  </div>\n</app-overlay-loading>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/dialog/dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/dialog/dialog.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-button (click)=\"openDialog()\">\n  <ng-content></ng-content>\n</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/form/form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/form/form.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header card-header-primary\">\n        <h4 class=\"card-title\">{{title}}</h4>\n        <p class=\"card-category\">{{subtitle}}</p>\n      </div>\n      <div class=\"card-body\">\n        <form name=\"form\" [formGroup]=\"formGroup\" (ngSubmit)=\"submit()\" #formDirective=\"ngForm\">\n          <app-overlay-loading [isLoading]=\"loading\">\n            <div class=\"row\">\n              <ng-content> </ng-content>\n            </div>\n            <ng-content select=\"[actions]\"> </ng-content>\n          </app-overlay-loading>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/input/input.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/input/input.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n  <input *ngIf=\"type == 'money'; else default\" currencyMask matInput [placeholder]=\"placeholder\"\n    [formControl]=\"formControl\" [options]=\"customCurrencyMaskConfig\">\n  <ng-template #default>\n    <input matInput [placeholder]=\"placeholder\" [type]=\"type\" [formControl]=\"formControl\">\n  </ng-template>\n  <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n</mat-form-field>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/overlay-loading/overlay-loading.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/overlay-loading/overlay-loading.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overlay-loading\">\n  <ng-content></ng-content>\n  <div class=\"overlay\" *ngIf=\"isLoading || loading\">\n    <mat-spinner diameter=\"50\"></mat-spinner>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/table/table.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/table/table.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card table\">\r\n  <div class=\"card-header card-header-primary\">\r\n    <h4 class=\"card-title \">{{title}}</h4>\r\n    <p class=\"card-category\"> {{subtitle}}</p>\r\n  </div>\r\n  <app-overlay-loading [isLoading]=\"loading\">\r\n    <div class=\"card-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead class=\" text-primary\">\r\n            <th *ngFor=\"let header of headers\">{{header.text}}</th>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let _object of list\">\r\n              <td *ngFor=\"let item of [].constructor(headers.length); let i = index\">\r\n                <div *ngIf=\"headers[i].actions; else default\">\r\n                  <app-dialog *ngIf=\"headers[i].actions.includes('edit')\" [content]=\"updateComponent\"\r\n                    [_object]=\"_object\">\r\n                    <i class=\"material-icons text-primary\">edit</i>\r\n                  </app-dialog>\r\n                  <app-dialog *ngIf=\"headers[i].actions.includes('delete')\" [content]=\"deleteComponent\"\r\n                    [_object]=\"_object\">\r\n                    <i class=\"material-icons text-danger\">delete_forever</i>\r\n                  </app-dialog>\r\n                </div>\r\n                <ng-template #default>\r\n                  {{headers[i].prefix}}\r\n                  {{ headers[i].type == 'money' ? convertMoney( _object[headers[i].value]) : _object[headers[i].value]}}\r\n                </ng-template>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </app-overlay-loading>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-create/irpf-create.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-create/irpf-create.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-irpf-form _type=\"create\"></app-irpf-form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-delete/irpf-delete.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-delete/irpf-delete.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-irpf-form _type=\"delete\" [irpfSelected]=\"_object\"></app-irpf-form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-form/irpf-form.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-form/irpf-form.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-form [formGroup]=\"form\" [callback]=\"currentCallback\" title=\"Identificação do contribuinte\"\n  subtitle=\"{{'Declaração de ajuste anual original - ' + (typeForm)}}\">\n  <app-input placeholder=\"Nome Completo\" name=\"nome\"></app-input>\n  <app-input placeholder=\"Cpf\" type=\"number\" name=\"cpfCnpj\"></app-input>\n  <app-input placeholder=\"Email\" type=\"email\" name=\"email\"></app-input>\n  <app-input placeholder=\"Data de nascimento\" type=\"date\" name=\"dtNascimento\"></app-input>\n  <app-input placeholder=\"Título eleitoral\" type=\"number\" name=\"tituloEleitoral\"></app-input>\n  <app-input placeholder=\"Rendimentos tributáveis (R$)\" type=\"money\" name=\"rendimentosTributaveis\"></app-input>\n  <app-input placeholder=\"Endereço\" name=\"endereco\"></app-input>\n  <app-input placeholder=\"Cidade\" name=\"cidade\"></app-input>\n  <app-input placeholder=\"Bairro\" name=\"bairro\"></app-input>\n  <app-input placeholder=\"Cep\" name=\"cep\" type=\"number\"></app-input>\n  <div actions class=\"actionsForm\">\n    <app-button *ngIf=\"_type != 'create'\" mat-dialog-close label=\"Cancelar\" _class=\"btn-danger\"></app-button>\n    <app-dialog *ngIf=\"_type == 'delete'; else default\" _type=\"confirmation\" [callbackContinue]=\"deleteIrpf\">\n      <app-button [label]=\"labelSubmitButton\" type=\"submit\"></app-button>\n    </app-dialog>\n    <ng-template #default>\n      <app-button [label]=\"labelSubmitButton\" type=\"submit\"></app-button>\n    </ng-template>\n  </div>\n</app-form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-read/irpf-read.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-read/irpf-read.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-table \n  title=\"IRPF's cadastrados\" \n  subtitle=\" Imposto de renda pessoa física\" \n  [headers]=\"headers\"\n  [list]=\"irpfs\"\n  [loadItems]=\"loadIrpfs\"  \n  [updateComponent]=\"updateComponent\"  \n  [deleteComponent]=\"deleteComponent\"  \n>\n</app-table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-update/irpf-update.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-update/irpf-update.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-irpf-form _type=\"update\" [irpfSelected]=\"_object\"></app-irpf-form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irps-dashboard/irps-dashboard.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irps-dashboard/irps-dashboard.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"card-dashboard\" class=\"card card-stats\">\n  <app-overlay-loading [execute]=\"loadIrpfs\">\n    <div class=\"card-header card-header-icon\">\n      <div class=\"card-icon\">\n        <i class=\"material-icons\">recent_actors</i>\n      </div>\n      <p class=\"card-category\">Cadastros</p>\n      <h3 class=\"card-title\">{{iprfsCount}}\n        <small>IRPF's</small>\n      </h3>\n    </div>\n    <div class=\"card-footer\"></div>\n  </app-overlay-loading>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/template/footer/footer.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/template/footer/footer.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\n  <div class=\"container-fluid\">\n    <nav class=\"pull-left\">\n      <ul>\n        <li>\n          <a target=\"_blank\" href=\"https://github.com/CabralPro\">\n            GitHub\n          </a>\n        </li>\n        <li>\n          <a target=\"_blank\" href=\"https://www.linkedin.com/in/arthurcabrallemos/\">\n            Linkedin\n          </a>\n        </li>\n        <li>\n          <a target=\"_blank\"\n            href=\"https://api.whatsapp.com/send?phone=5531998762713&text=Obrigado%20por%20reservar%20um%20tempo%20para%20entrar%20em%20contato.%20Como%20posso%20te%20ajudar%3F  \">\n            Whatsapp\n          </a>\n        </li>\n        <li>\n          <a target=\"_blank\" href=\"mailto:cabraltec02@gmail.com\">\n            Contato\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"copyright pull-right\">\n      &copy;\n      {{currentDate | date: 'yyyy'}}, desenvolvido por\n      <a href=\"https://cabraltec.com\" target=\"_blank\">Arthur Cabral</a>\n    </div>\n  </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/template/navbar/navbar.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/template/navbar/navbar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n    </button>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/template/sidebar/sidebar.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/template/sidebar/sidebar.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\n  <a [routerLink]=\"['/dashboard']\" class=\"simple-text\">\n    <div class=\"logo-img\">\n      <img class=\"mt-1\" src=\"/assets/img/logo-irpf.png\" />\n    </div>\n    CRUD IRPF\n  </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <ul class=\"nav\">\n    <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"nav-item\">\n      <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n        <i class=\"material-icons\">{{menuItem.icon}}</i>\n        <p>{{menuItem.title}}</p>\n      </a>\n    </li>\n  </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/template/template.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/template/template.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n    <app-sidebar></app-sidebar>\n    <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/background2.jpg)\"></div>\n  </div>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/irpf/view-create-irpf/view-create-irpf.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/irpf/view-create-irpf/view-create-irpf.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-irpf-create></app-irpf-create>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/irpf/view-dashboard/view-dashboard.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/irpf/view-dashboard/view-dashboard.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-irps-dashboard></app-irps-dashboard>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/irpf/view-irpfs/view-irpfs.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/irpf/view-irpfs/view-irpfs.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-irpf-read></app-irpf-read>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/__ivy_ngcc__/fesm5/ng2-currency-mask.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/template/footer/footer.component */ "./src/app/components/template/footer/footer.component.ts");
/* harmony import */ var _components_template_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/template/navbar/navbar.component */ "./src/app/components/template/navbar/navbar.component.ts");
/* harmony import */ var _components_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/template/sidebar/sidebar.component */ "./src/app/components/template/sidebar/sidebar.component.ts");
/* harmony import */ var _components_generics_input_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/_generics/input/input.component */ "./src/app/components/_generics/input/input.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tooltip.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-spinner.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm5/agm-core.js");
/* harmony import */ var _components_template_template_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/template/template.component */ "./src/app/components/template/template.component.ts");
/* harmony import */ var _components_generics_form_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/_generics/form/form.component */ "./src/app/components/_generics/form/form.component.ts");
/* harmony import */ var _components_generics_button_button_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/_generics/button/button.component */ "./src/app/components/_generics/button/button.component.ts");
/* harmony import */ var _components_irpf_irpf_create_irpf_create_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/irpf/irpf-create/irpf-create.component */ "./src/app/components/irpf/irpf-create/irpf-create.component.ts");
/* harmony import */ var _components_irpf_irpf_read_irpf_read_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/irpf/irpf-read/irpf-read.component */ "./src/app/components/irpf/irpf-read/irpf-read.component.ts");
/* harmony import */ var _components_irpf_irpf_update_irpf_update_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/irpf/irpf-update/irpf-update.component */ "./src/app/components/irpf/irpf-update/irpf-update.component.ts");
/* harmony import */ var _views_irpf_view_create_irpf_view_create_irpf_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/irpf/view-create-irpf/view-create-irpf.component */ "./src/app/views/irpf/view-create-irpf/view-create-irpf.component.ts");
/* harmony import */ var _views_irpf_view_dashboard_view_dashboard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/irpf/view-dashboard/view-dashboard.component */ "./src/app/views/irpf/view-dashboard/view-dashboard.component.ts");
/* harmony import */ var _views_irpf_view_irpfs_view_irpfs_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./views/irpf/view-irpfs/view-irpfs.component */ "./src/app/views/irpf/view-irpfs/view-irpfs.component.ts");
/* harmony import */ var _components_generics_table_table_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/_generics/table/table.component */ "./src/app/components/_generics/table/table.component.ts");
/* harmony import */ var _components_generics_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/_generics/dialog/dialog.component */ "./src/app/components/_generics/dialog/dialog.component.ts");
/* harmony import */ var _components_generics_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/_generics/confirmation/confirmation.component */ "./src/app/components/_generics/confirmation/confirmation.component.ts");
/* harmony import */ var _components_irpf_irpf_form_irpf_form_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/irpf/irpf-form/irpf-form.component */ "./src/app/components/irpf/irpf-form/irpf-form.component.ts");
/* harmony import */ var _components_generics_overlay_loading_overlay_loading_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/_generics/overlay-loading/overlay-loading.component */ "./src/app/components/_generics/overlay-loading/overlay-loading.component.ts");
/* harmony import */ var _components_irpf_irpf_delete_irpf_delete_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/irpf/irpf-delete/irpf-delete.component */ "./src/app/components/irpf/irpf-delete/irpf-delete.component.ts");
/* harmony import */ var _components_irpf_irps_dashboard_irps_dashboard_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/irpf/irps-dashboard/irps-dashboard.component */ "./src/app/components/irpf/irps-dashboard/irps-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_22__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                }),
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_6__["CurrencyMaskModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_template_template_component__WEBPACK_IMPORTED_MODULE_23__["TemplateComponent"],
                _components_generics_input_input_component__WEBPACK_IMPORTED_MODULE_11__["InputComponent"],
                _components_template_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_template_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _components_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
                _components_generics_form_form_component__WEBPACK_IMPORTED_MODULE_24__["FormComponent"],
                _components_generics_button_button_component__WEBPACK_IMPORTED_MODULE_25__["ButtonComponent"],
                _components_irpf_irpf_create_irpf_create_component__WEBPACK_IMPORTED_MODULE_26__["IrpfCreateComponent"],
                _components_irpf_irpf_read_irpf_read_component__WEBPACK_IMPORTED_MODULE_27__["IrpfReadComponent"],
                _components_irpf_irpf_update_irpf_update_component__WEBPACK_IMPORTED_MODULE_28__["IrpfUpdateComponent"],
                _views_irpf_view_create_irpf_view_create_irpf_component__WEBPACK_IMPORTED_MODULE_29__["ViewCreateIrpfComponent"],
                _views_irpf_view_dashboard_view_dashboard_component__WEBPACK_IMPORTED_MODULE_30__["ViewDashboardComponent"],
                _views_irpf_view_irpfs_view_irpfs_component__WEBPACK_IMPORTED_MODULE_31__["ViewIrpfsComponent"],
                _components_generics_table_table_component__WEBPACK_IMPORTED_MODULE_32__["TableComponent"],
                _components_generics_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_33__["DialogComponent"],
                _components_generics_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_34__["ConfirmationComponent"],
                _components_irpf_irpf_form_irpf_form_component__WEBPACK_IMPORTED_MODULE_35__["IrpfFormComponent"],
                _components_generics_overlay_loading_overlay_loading_component__WEBPACK_IMPORTED_MODULE_36__["OverlayLoadingComponent"],
                _components_irpf_irpf_delete_irpf_delete_component__WEBPACK_IMPORTED_MODULE_37__["IrpfDeleteComponent"],
                _components_irpf_irps_dashboard_irps_dashboard_component__WEBPACK_IMPORTED_MODULE_38__["IrpsDashboardComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_views_irpf_view_irpfs_view_irpfs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/views/irpf/view-irpfs/view-irpfs.component */ "./src/app/views/irpf/view-irpfs/view-irpfs.component.ts");
/* harmony import */ var _app_views_irpf_view_dashboard_view_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/views/irpf/view-dashboard/view-dashboard.component */ "./src/app/views/irpf/view-dashboard/view-dashboard.component.ts");
/* harmony import */ var _app_views_irpf_view_create_irpf_view_create_irpf_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/views/irpf/view-create-irpf/view-create-irpf.component */ "./src/app/views/irpf/view-create-irpf/view-create-irpf.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var routes = [
    { path: '', component: _app_views_irpf_view_dashboard_view_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["ViewDashboardComponent"] },
    { path: 'dashboard', component: _app_views_irpf_view_dashboard_view_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["ViewDashboardComponent"] },
    { path: 'create-irpf', component: _app_views_irpf_view_create_irpf_view_create_irpf_component__WEBPACK_IMPORTED_MODULE_6__["ViewCreateIrpfComponent"] },
    { path: 'irpfs', component: _app_views_irpf_view_irpfs_view_irpfs_component__WEBPACK_IMPORTED_MODULE_4__["ViewIrpfsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/_generics/button/button.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/_generics/button/button.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX2dlbmVyaWNzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/_generics/button/button.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/_generics/button/button.component.ts ***!
  \*****************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "_class", void 0);
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __importDefault(__webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/button/button.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./button.component.css */ "./src/app/components/_generics/button/button.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/_generics/confirmation/confirmation.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/_generics/confirmation/confirmation.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX2dlbmVyaWNzL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/_generics/confirmation/confirmation.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/_generics/confirmation/confirmation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.loading = false;
    }
    ConfirmationComponent.prototype.ngOnInit = function () { };
    ConfirmationComponent.prototype.executeCallback = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.callback()];
                    case 1:
                        _a.sent();
                        this.dialogRef.closeAll();
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfirmationComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], ConfirmationComponent.prototype, "callback", void 0);
    ConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation',
            template: __importDefault(__webpack_require__(/*! raw-loader!./confirmation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/confirmation/confirmation.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./confirmation.component.css */ "./src/app/components/_generics/confirmation/confirmation.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/components/_generics/dialog/dialog.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/_generics/dialog/dialog.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX2dlbmVyaWNzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/_generics/dialog/dialog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/_generics/dialog/dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirmation/confirmation.component */ "./src/app/components/_generics/confirmation/confirmation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.openDialog = function () {
        if (this._type == 'confirmation') {
            var dialogRefConf = void 0;
            dialogRefConf = this.dialog.open(_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationComponent"]);
            dialogRefConf.componentInstance.callback = this.callbackContinue;
        }
        else {
            var dialogRef = void 0;
            dialogRef = this.dialog.open(this.content, { height: '85vh' });
            dialogRef.componentInstance._object = this._object;
        }
    };
    DialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], DialogComponent.prototype, "callbackContinue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DialogComponent.prototype, "_type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "_object", void 0);
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/dialog/dialog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dialog.component.css */ "./src/app/components/_generics/dialog/dialog.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/components/_generics/form/form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/_generics/form/form.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX2dlbmVyaWNzL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/_generics/form/form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/_generics/form/form.component.ts ***!
  \*************************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.loading = false;
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.formGroup.valid)
                            return [2 /*return*/];
                        this.loading = true;
                        return [4 /*yield*/, this.callback()];
                    case 1:
                        resp = _a.sent();
                        if (resp) {
                            this.formGroup.reset();
                            Object.keys(this.formGroup.controls).forEach(function (key) {
                                _this.formGroup.get(key).setErrors(null);
                            });
                            setTimeout(function () { return location.reload(); }, 1500);
                        }
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], FormComponent.prototype, "formGroup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FormComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FormComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], FormComponent.prototype, "callback", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/form/form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./form.component.css */ "./src/app/components/_generics/form/form.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/components/_generics/input/input.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/_generics/input/input.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvX2dlbmVyaWNzL2lucHV0L2lucHV0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/_generics/input/input.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/_generics/input/input.component.ts ***!
  \***************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/form.component */ "./src/app/components/_generics/form/form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var InputComponent = /** @class */ (function () {
    function InputComponent(parent) {
        this.required = true;
        this.type = 'text';
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"];
        this.parentForm = new _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"];
        this.customCurrencyMaskConfig = {
            align: "left",
            allowNegative: false,
            decimal: ",",
            precision: 2,
            prefix: "R$ ",
            suffix: "",
            thousands: "."
        };
        this.parentForm = parent;
    }
    InputComponent.prototype.ngOnInit = function () {
        this.formControl = this.parentForm.formGroup.controls[this.name];
        if (this.type == 'date')
            this.formControl.setValue(this.formControl.value.split('T')[0]);
    };
    InputComponent.prototype.getErrorMessage = function () {
        if (this.formControl.hasError('required'))
            return 'Campo obrigatório';
        if (this.formControl.hasError('email'))
            return 'Email inválido';
        if (this.formControl.hasError('pattern'))
            return 'Numero inválido';
    };
    InputComponent.ctorParameters = function () { return [
        { type: _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InputComponent.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InputComponent.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputComponent.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "name", void 0);
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input',
            template: __importDefault(__webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/input/input.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./input.component.css */ "./src/app/components/_generics/input/input.component.css")).default]
        }),
        __metadata("design:paramtypes", [_form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"]])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/components/_generics/overlay-loading/overlay-loading.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/_generics/overlay-loading/overlay-loading.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".overlay-loading{\r\n    position: relative;\r\n}\r\n.overlay-loading .overlay{\r\n    width: 100%;\r\n    min-height: 100% !important;\r\n    background-color: rgba(255, 255, 255, 0.445);\r\n    -webkit-backdrop-filter: blur(.7px);\r\n            backdrop-filter: blur(.7px);\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    position: absolute;\r\n    top: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9fZ2VuZXJpY3Mvb3ZlcmxheS1sb2FkaW5nL292ZXJsYXktbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLDRDQUE0QztJQUM1QyxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsTUFBTTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9fZ2VuZXJpY3Mvb3ZlcmxheS1sb2FkaW5nL292ZXJsYXktbG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXktbG9hZGluZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ub3ZlcmxheS1sb2FkaW5nIC5vdmVybGF5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDQ1KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciguN3B4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/_generics/overlay-loading/overlay-loading.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/_generics/overlay-loading/overlay-loading.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OverlayLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayLoadingComponent", function() { return OverlayLoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var OverlayLoadingComponent = /** @class */ (function () {
    function OverlayLoadingComponent() {
        this.loading = true;
    }
    OverlayLoadingComponent.prototype.ngOnInit = function () {
        this.start();
    };
    OverlayLoadingComponent.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.execute) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.execute()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OverlayLoadingComponent.prototype, "isLoading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], OverlayLoadingComponent.prototype, "execute", void 0);
    OverlayLoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overlay-loading',
            template: __importDefault(__webpack_require__(/*! raw-loader!./overlay-loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/overlay-loading/overlay-loading.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./overlay-loading.component.css */ "./src/app/components/_generics/overlay-loading/overlay-loading.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], OverlayLoadingComponent);
    return OverlayLoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/_generics/table/table.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/_generics/table/table.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th{\r\n  text-transform: capitalize;\r\n}\r\n\r\n.table .card-body {\r\n  position: relative;\r\n  min-height: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9fZ2VuZXJpY3MvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL19nZW5lcmljcy90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGh7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi50YWJsZSAuY2FyZC1ib2R5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/_generics/table/table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/_generics/table/table.component.ts ***!
  \***************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.loading = true;
    }
    TableComponent.prototype.ngOnInit = function () {
        this.executeLoadItems();
    };
    TableComponent.prototype.executeLoadItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.loadItems()];
                    case 1:
                        _a.sent();
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    TableComponent.prototype.convertMoney = function (value) {
        return value.toFixed(2).replace('.', ',');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TableComponent.prototype, "headers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], TableComponent.prototype, "loadItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "updateComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "deleteComponent", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __importDefault(__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/_generics/table/table.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./table.component.css */ "./src/app/components/_generics/table/table.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/components/irpf/irpf-create/irpf-create.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/irpf/irpf-create/irpf-create.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXJwZi9pcnBmLWNyZWF0ZS9pcnBmLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/irpf/irpf-create/irpf-create.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/irpf/irpf-create/irpf-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: IrpfCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrpfCreateComponent", function() { return IrpfCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var IrpfCreateComponent = /** @class */ (function () {
    function IrpfCreateComponent() {
    }
    IrpfCreateComponent.prototype.ngOnInit = function () { };
    IrpfCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-irpf-create',
            template: __importDefault(__webpack_require__(/*! raw-loader!./irpf-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-create/irpf-create.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./irpf-create.component.css */ "./src/app/components/irpf/irpf-create/irpf-create.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], IrpfCreateComponent);
    return IrpfCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/irpf/irpf-delete/irpf-delete.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/irpf/irpf-delete/irpf-delete.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXJwZi9pcnBmLWRlbGV0ZS9pcnBmLWRlbGV0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/irpf/irpf-delete/irpf-delete.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/irpf/irpf-delete/irpf-delete.component.ts ***!
  \**********************************************************************/
/*! exports provided: IrpfDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrpfDeleteComponent", function() { return IrpfDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var IrpfDeleteComponent = /** @class */ (function () {
    function IrpfDeleteComponent() {
    }
    IrpfDeleteComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IrpfDeleteComponent.prototype, "_object", void 0);
    IrpfDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-irpf-delete',
            template: __importDefault(__webpack_require__(/*! raw-loader!./irpf-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-delete/irpf-delete.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./irpf-delete.component.css */ "./src/app/components/irpf/irpf-delete/irpf-delete.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], IrpfDeleteComponent);
    return IrpfDeleteComponent;
}());



/***/ }),

/***/ "./src/app/components/irpf/irpf-form/irpf-form.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/irpf/irpf-form/irpf-form.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 768px) {\r\n  app-input {\r\n    -webkit-box-flex: 0;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n}\r\napp-input {\r\n  position: relative;\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\napp-button {\r\n  margin: 10px;\r\n}\r\n.actionsForm {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n@media (max-width: 430px) {\r\n  .actionsForm {\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pcnBmL2lycGYtZm9ybS9pcnBmLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixxQkFBeUI7VUFBekIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRTtJQUNFLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXJwZi9pcnBmLWZvcm0vaXJwZi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBhcHAtaW5wdXQge1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcclxuICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuYXBwLWlucHV0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuYXBwLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uYWN0aW9uc0Zvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcclxuICAuYWN0aW9uc0Zvcm0ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/irpf/irpf-form/irpf-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/irpf/irpf-form/irpf-form.component.ts ***!
  \******************************************************************/
/*! exports provided: IrpfFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrpfFormComponent", function() { return IrpfFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regex */ "./src/app/components/irpf/irpf-form/regex.ts");
/* harmony import */ var _irpf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../irpf.service */ "./src/app/components/irpf/irpf.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var TypeForm;
(function (TypeForm) {
    TypeForm["Create"] = "create";
    TypeForm["Update"] = "update";
    TypeForm["Delete"] = "delete";
})(TypeForm || (TypeForm = {}));
var IrpfFormComponent = /** @class */ (function () {
    function IrpfFormComponent(irpfService, dialogRef) {
        var _this = this;
        this.irpfService = irpfService;
        this.dialogRef = dialogRef;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            cpfCnpj: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_regex__WEBPACK_IMPORTED_MODULE_2__["REGEX_CPF"])]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            dtNascimento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            tituloEleitoral: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_regex__WEBPACK_IMPORTED_MODULE_2__["REGEX_TITULO_ELEITOR"])]),
            rendimentosTributaveis: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            endereco: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            cidade: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            bairro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            cep: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_regex__WEBPACK_IMPORTED_MODULE_2__["REGEX_CEP"])]),
        });
        this.createIrpf = function () { return __awaiter(_this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.form.removeControl('id');
                        return [4 /*yield*/, this.irpfService.create(this.form.value)];
                    case 1:
                        resp = _a.sent();
                        if (resp)
                            this.irpfService.showMessage('Irpf criado!');
                        return [2 /*return*/, resp];
                }
            });
        }); };
        this.updateIrpf = function () { return __awaiter(_this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.irpfService.update(this.form.value)];
                    case 1:
                        resp = _a.sent();
                        if (resp)
                            this.irpfService.showMessage("IRPF atualizado com sucesso!");
                        this.dialogRef.closeAll();
                        setTimeout(function () { return location.reload(); }, 1500);
                        return [2 /*return*/, resp];
                }
            });
        }); };
        this.deleteIrpf = function () { return __awaiter(_this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.irpfService.delete(this.irpfSelected.id)];
                    case 1:
                        resp = _a.sent();
                        console.log('resp :>> ', resp);
                        if (resp)
                            this.irpfService.showMessage("IRPF excluido com sucesso!");
                        setTimeout(function () { return location.reload(); }, 1500);
                        return [2 /*return*/];
                }
            });
        }); };
    }
    IrpfFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._type != 'create')
            Object.entries(this.form.controls).forEach(function (_a) {
                var key = _a[0], control = _a[1];
                control.setValue(_this.irpfSelected[key]);
            });
        if (this._type == 'delete')
            this.form.disable();
    };
    Object.defineProperty(IrpfFormComponent.prototype, "labelSubmitButton", {
        get: function () {
            switch (this._type) {
                case TypeForm.Create:
                    return 'Entregar Declaração';
                case TypeForm.Delete:
                    return 'Deletar';
                case TypeForm.Update:
                    return 'Salvar Alterações';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IrpfFormComponent.prototype, "typeForm", {
        get: function () {
            switch (this._type) {
                case TypeForm.Create:
                    return 'Cadastro';
                case TypeForm.Delete:
                    return 'Deleção';
                case TypeForm.Update:
                    return 'Atualização';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IrpfFormComponent.prototype, "currentCallback", {
        get: function () {
            switch (this._type) {
                case TypeForm.Create:
                    return this.createIrpf;
                case TypeForm.Delete:
                    return this.deleteIrpf;
                case TypeForm.Update:
                    return this.updateIrpf;
            }
        },
        enumerable: true,
        configurable: true
    });
    IrpfFormComponent.ctorParameters = function () { return [
        { type: _irpf_service__WEBPACK_IMPORTED_MODULE_3__["IrpfService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IrpfFormComponent.prototype, "_type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IrpfFormComponent.prototype, "irpfSelected", void 0);
    IrpfFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-irpf-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./irpf-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-form/irpf-form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./irpf-form.component.css */ "./src/app/components/irpf/irpf-form/irpf-form.component.css")).default]
        }),
        __metadata("design:paramtypes", [_irpf_service__WEBPACK_IMPORTED_MODULE_3__["IrpfService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], IrpfFormComponent);
    return IrpfFormComponent;
}());



/***/ }),

/***/ "./src/app/components/irpf/irpf-form/regex.ts":
/*!****************************************************!*\
  !*** ./src/app/components/irpf/irpf-form/regex.ts ***!
  \****************************************************/
/*! exports provided: REGEX_CPF, REGEX_TITULO_ELEITOR, REGEX_CEP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX_CPF", function() { return REGEX_CPF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX_TITULO_ELEITOR", function() { return REGEX_TITULO_ELEITOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX_CEP", function() { return REGEX_CEP; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var REGEX_CPF = /\b\w{11}\b/;
var REGEX_TITULO_ELEITOR = /\b\w{12}\b/;
var REGEX_CEP = /\b\w{8}\b/;


/***/ }),

/***/ "./src/app/components/irpf/irpf-read/irpf-read.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/irpf/irpf-read/irpf-read.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXJwZi9pcnBmLXJlYWQvaXJwZi1yZWFkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/irpf/irpf-read/irpf-read.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/irpf/irpf-read/irpf-read.component.ts ***!
  \******************************************************************/
/*! exports provided: IrpfReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrpfReadComponent", function() { return IrpfReadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _irpf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../irpf.service */ "./src/app/components/irpf/irpf.service.ts");
/* harmony import */ var _irpf_update_irpf_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../irpf-update/irpf-update.component */ "./src/app/components/irpf/irpf-update/irpf-update.component.ts");
/* harmony import */ var _irpf_delete_irpf_delete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../irpf-delete/irpf-delete.component */ "./src/app/components/irpf/irpf-delete/irpf-delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var IrpfReadComponent = /** @class */ (function () {
    function IrpfReadComponent(irpfService) {
        var _this = this;
        this.irpfService = irpfService;
        this.updateComponent = _irpf_update_irpf_update_component__WEBPACK_IMPORTED_MODULE_2__["IrpfUpdateComponent"];
        this.deleteComponent = _irpf_delete_irpf_delete_component__WEBPACK_IMPORTED_MODULE_3__["IrpfDeleteComponent"];
        this.loading = true;
        this.headers = [
            { text: 'Id', value: "id" },
            { text: 'Nome', value: "nome" },
            { text: 'Bairro', value: "bairro" },
            { text: 'Cidade', value: "cidade" },
            { text: 'Salário', value: "rendimentosTributaveis", prefix: 'R$', type: 'money' },
            { text: 'Ações', actions: ['edit', 'delete'] },
        ];
        this.loadIrpfs = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.irpfService.read()];
                    case 1:
                        _a.irpfs = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
    }
    IrpfReadComponent.prototype.ngOnInit = function () { };
    IrpfReadComponent.ctorParameters = function () { return [
        { type: _irpf_service__WEBPACK_IMPORTED_MODULE_1__["IrpfService"] }
    ]; };
    IrpfReadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-irpf-read',
            template: __importDefault(__webpack_require__(/*! raw-loader!./irpf-read.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-read/irpf-read.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./irpf-read.component.css */ "./src/app/components/irpf/irpf-read/irpf-read.component.css")).default]
        }),
        __metadata("design:paramtypes", [_irpf_service__WEBPACK_IMPORTED_MODULE_1__["IrpfService"]])
    ], IrpfReadComponent);
    return IrpfReadComponent;
}());



/***/ }),

/***/ "./src/app/components/irpf/irpf-update/irpf-update.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/irpf/irpf-update/irpf-update.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXJwZi9pcnBmLXVwZGF0ZS9pcnBmLXVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/irpf/irpf-update/irpf-update.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/irpf/irpf-update/irpf-update.component.ts ***!
  \**********************************************************************/
/*! exports provided: IrpfUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrpfUpdateComponent", function() { return IrpfUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var IrpfUpdateComponent = /** @class */ (function () {
    function IrpfUpdateComponent() {
    }
    IrpfUpdateComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IrpfUpdateComponent.prototype, "_object", void 0);
    IrpfUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-irpf-update',
            template: __importDefault(__webpack_require__(/*! raw-loader!./irpf-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irpf-update/irpf-update.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./irpf-update.component.css */ "./src/app/components/irpf/irpf-update/irpf-update.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], IrpfUpdateComponent);
    return IrpfUpdateComponent;
}());



/***/ }),

/***/ "./src/app/components/irpf/irpf.service.ts":
/*!*************************************************!*\
  !*** ./src/app/components/irpf/irpf.service.ts ***!
  \*************************************************/
/*! exports provided: IrpfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrpfService", function() { return IrpfService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_observable_empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/observable/empty */ "./node_modules/rxjs/internal/observable/empty.js");
/* harmony import */ var rxjs_internal_observable_empty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_empty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/constant */ "./src/app/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var IrpfService = /** @class */ (function () {
    function IrpfService(snackBar, http) {
        this.snackBar = snackBar;
        this.http = http;
        this.baseUrl = app_constant__WEBPACK_IMPORTED_MODULE_5__["BASE_URL"] + "/irpf";
    }
    IrpfService.prototype.showMessage = function (msg, isError) {
        if (isError === void 0) { isError = false; }
        this.snackBar.open(msg, "X", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"],
        });
    };
    IrpfService.prototype.create = function (irpf) {
        var _this = this;
        return this.http.post(this.baseUrl, irpf).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (obj) { return obj; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) { return _this.errorHandler(e); })).toPromise();
    };
    IrpfService.prototype.read = function () {
        var _this = this;
        return this.http.get(this.baseUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (obj) { return obj; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) { return _this.errorHandler(e); })).toPromise();
    };
    IrpfService.prototype.update = function (irpf) {
        var _this = this;
        var url = "" + this.baseUrl;
        return this.http.put(url, irpf).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (obj) { return obj; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) { return _this.errorHandler(e); })).toPromise();
    };
    IrpfService.prototype.delete = function (id) {
        var _this = this;
        var url = this.baseUrl + "/" + id;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (obj) { return obj; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) { return _this.errorHandler(e); })).toPromise();
    };
    IrpfService.prototype.errorHandler = function (e) {
        var _a;
        this.showMessage((_a = e.resp, (_a !== null && _a !== void 0 ? _a : "Ocorreu um erro!")), true);
        return rxjs_internal_observable_empty__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
    };
    IrpfService.ctorParameters = function () { return [
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    IrpfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IrpfService);
    return IrpfService;
}());



/***/ }),

/***/ "./src/app/components/irpf/irps-dashboard/irps-dashboard.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/irpf/irps-dashboard/irps-dashboard.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#card-dashboard{\r\n    max-width: 300px;\r\n}\r\n\r\n#card-dashboard .card-icon{\r\n    background-color: var(--primary);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pcnBmL2lycHMtZGFzaGJvYXJkL2lycHMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lycGYvaXJwcy1kYXNoYm9hcmQvaXJwcy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXJkLWRhc2hib2FyZHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbiNjYXJkLWRhc2hib2FyZCAuY2FyZC1pY29ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/irpf/irps-dashboard/irps-dashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/irpf/irps-dashboard/irps-dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: IrpsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IrpsDashboardComponent", function() { return IrpsDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _irpf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../irpf.service */ "./src/app/components/irpf/irpf.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var IrpsDashboardComponent = /** @class */ (function () {
    function IrpsDashboardComponent(irpfService) {
        var _this = this;
        this.irpfService = irpfService;
        this.loadIrpfs = function () { return __awaiter(_this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.irpfService.read()];
                    case 1:
                        resp = _a.sent();
                        this.iprfsCount = resp.length;
                        return [2 /*return*/];
                }
            });
        }); };
    }
    IrpsDashboardComponent.prototype.ngOnInit = function () { };
    IrpsDashboardComponent.ctorParameters = function () { return [
        { type: _irpf_service__WEBPACK_IMPORTED_MODULE_1__["IrpfService"] }
    ]; };
    IrpsDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-irps-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./irps-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/irpf/irps-dashboard/irps-dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./irps-dashboard.component.css */ "./src/app/components/irpf/irps-dashboard/irps-dashboard.component.css")).default]
        }),
        __metadata("design:paramtypes", [_irpf_service__WEBPACK_IMPORTED_MODULE_1__["IrpfService"]])
    ], IrpsDashboardComponent);
    return IrpsDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/template/footer/footer.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/template/footer/footer.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVtcGxhdGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/template/footer/footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/template/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.currentDate = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/template/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/components/template/footer/footer.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/template/navbar/navbar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/template/navbar/navbar.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar.navbar-absolute {\r\n    z-index: 999;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLm5hdmJhci1hYnNvbHV0ZSB7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/template/navbar/navbar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/template/navbar/navbar.component.ts ***!
  \****************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/template/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function () {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/template/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/template/navbar/navbar.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/template/sidebar/sidebar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/template/sidebar/sidebar.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar-wrapper .active a{\r\n background-color: var(--primary);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZW1wbGF0ZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdDQUFnQztBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVtcGxhdGUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhci13cmFwcGVyIC5hY3RpdmUgYXtcclxuIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/template/sidebar/sidebar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/template/sidebar/sidebar.component.ts ***!
  \******************************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard' },
    { path: '/create-irpf', title: 'Cadastrar IRPF', icon: 'list_alt' },
    { path: '/irpfs', title: 'IRPF\'s', icon: 'list' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/template/sidebar/sidebar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/template/sidebar/sidebar.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/template/template.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/template/template.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/template/template.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/template/template.component.ts ***!
  \***********************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    TemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_5__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_5__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_5__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_5__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_5__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    TemplateComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    TemplateComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    };
    TemplateComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    TemplateComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    TemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template',
            template: __importDefault(__webpack_require__(/*! raw-loader!./template.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/template/template.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./template.component.css */ "./src/app/components/template/template.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/constant.ts":
/*!*****************************!*\
  !*** ./src/app/constant.ts ***!
  \*****************************/
/*! exports provided: BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BASE_URL = "http://54.232.146.73/api";


/***/ }),

/***/ "./src/app/views/irpf/view-create-irpf/view-create-irpf.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/views/irpf/view-create-irpf/view-create-irpf.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2lycGYvdmlldy1jcmVhdGUtaXJwZi92aWV3LWNyZWF0ZS1pcnBmLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/irpf/view-create-irpf/view-create-irpf.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/irpf/view-create-irpf/view-create-irpf.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewCreateIrpfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCreateIrpfComponent", function() { return ViewCreateIrpfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ViewCreateIrpfComponent = /** @class */ (function () {
    function ViewCreateIrpfComponent() {
    }
    ViewCreateIrpfComponent.prototype.ngOnInit = function () { };
    ViewCreateIrpfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-create-irpf',
            template: __importDefault(__webpack_require__(/*! raw-loader!./view-create-irpf.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/irpf/view-create-irpf/view-create-irpf.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./view-create-irpf.component.css */ "./src/app/views/irpf/view-create-irpf/view-create-irpf.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ViewCreateIrpfComponent);
    return ViewCreateIrpfComponent;
}());



/***/ }),

/***/ "./src/app/views/irpf/view-dashboard/view-dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/irpf/view-dashboard/view-dashboard.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2lycGYvdmlldy1kYXNoYm9hcmQvdmlldy1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/irpf/view-dashboard/view-dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/irpf/view-dashboard/view-dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: ViewDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDashboardComponent", function() { return ViewDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ViewDashboardComponent = /** @class */ (function () {
    function ViewDashboardComponent() {
    }
    ViewDashboardComponent.prototype.ngOnInit = function () { };
    ViewDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./view-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/irpf/view-dashboard/view-dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./view-dashboard.component.css */ "./src/app/views/irpf/view-dashboard/view-dashboard.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ViewDashboardComponent);
    return ViewDashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/irpf/view-irpfs/view-irpfs.component.css":
/*!****************************************************************!*\
  !*** ./src/app/views/irpf/view-irpfs/view-irpfs.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2lycGYvdmlldy1pcnBmcy92aWV3LWlycGZzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/irpf/view-irpfs/view-irpfs.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/irpf/view-irpfs/view-irpfs.component.ts ***!
  \***************************************************************/
/*! exports provided: ViewIrpfsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewIrpfsComponent", function() { return ViewIrpfsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ViewIrpfsComponent = /** @class */ (function () {
    function ViewIrpfsComponent() {
    }
    ViewIrpfsComponent.prototype.ngOnInit = function () { };
    ViewIrpfsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-irpfs',
            template: __importDefault(__webpack_require__(/*! raw-loader!./view-irpfs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/irpf/view-irpfs/view-irpfs.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./view-irpfs.component.css */ "./src/app/views/irpf/view-irpfs/view-irpfs.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ViewIrpfsComponent);
    return ViewIrpfsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/arthur/Arquivos/Repositorios/CRUD ANGULAR E .NET/front-end/ANGULAR_ CRUD-IRPF/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map