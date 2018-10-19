webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.loginData = { username: '', password: '' };
    }
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.showLoader();
        this.authService.login(this.loginData).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            if (_this.data != false) {
                localStorage.setItem('token', _this.data.userLevel);
                localStorage.setItem('idData', _this.data.idData);
                if (_this.data.noRegistrasi == "" || _this.data.noRegistrasi == null) {
                    localStorage.setItem('userNotif', _this.data.username);
                }
                else {
                    localStorage.setItem('userNotif', _this.data.noRegistrasi);
                }
                localStorage.setItem('noRegistrasi', _this.data.noRegistrasi);
                localStorage.setItem('nama', _this.data.nama);
                localStorage.setItem('jabatan', _this.data.jabatan);
                localStorage.setItem('alamat', _this.data.alamat);
                localStorage.setItem('noRt', _this.data.noRt);
                localStorage.setItem('noRw', _this.data.noRw);
                localStorage.setItem('kodeKelurahan', _this.data.kodeKelurahan);
                localStorage.setItem('kodeKecamatan', _this.data.kodeKecamatan);
                localStorage.setItem('kodeWilayah', _this.data.kodeWilayah);
                localStorage.setItem('kodeProvinsi', _this.data.kodeProvinsi);
                localStorage.setItem('noTelp', _this.data.noTelp);
                localStorage.setItem('email', _this.data.email);
                localStorage.setItem('username', _this.data.username);
                localStorage.setItem('urlGambar', _this.data.urlGambar);
                localStorage.setItem('userLevel', _this.data.userLevel);
                localStorage.setItem('lingkupArea', _this.data.lingkupArea);
                localStorage.setItem('idBatasArea', _this.data.idBatasArea);
                localStorage.setItem('statusActive', _this.data.statusActive);
                // empty initial 
                localStorage.setItem('kelembagaan-filter-keyword', '');
                localStorage.setItem('kelembagaan-filter-bentukLembaga', '');
                localStorage.setItem('kelembagaan-filter-wilayah', '');
                localStorage.setItem('kelembagaan-filter-kecamatan', '');
                localStorage.setItem('kelembagaan-filter-kelurahan', '');
                localStorage.setItem('kelembagaan-filter-ajuan', '');
                localStorage.setItem('kelembagaan-filter-valid', '');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.presentToast('Gagal login, mohon check kembali Username dan Password Anda!');
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage.prototype.loginSuccess = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], {});
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/login/login.html"*/'<ion-content padding center text-center>\n  <ion-img id="logo" width=\'72\'height=\'72\' src="assets/imgs/gedung-sate-200x200_.png"></ion-img>\n  <ion-title>DPLEGA APPS</ion-title>\n  <form (submit)="doLogin()" method="POST">\n    <ion-list class="form-style" padding margin-top> \n      <ion-item>\n        <ion-input [(ngModel)]="loginData.username" name="username" type="text" placeholder="Username"></ion-input>\n      </ion-item>\n      <ion-item class="no-border">\n        <ion-input [(ngModel)]="loginData.password" name="password" placeholder="Password" type="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-buttons padding>\n      <button color="dark" ion-button full type="submit">Masuk</button>\n    </ion-buttons>\n  </form>\n  <p text-center>v.012</p>\n  <!-- <p text-center>Copyright © 2018 Pemerintah Provinsi Jawa Barat.</p> -->\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inbox_inbox__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_form__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, loadingCtrl, authService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.home = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.inbox = __WEBPACK_IMPORTED_MODULE_4__inbox_inbox__["b" /* InboxPage */];
        this.search = __WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */];
        this.form = __WEBPACK_IMPORTED_MODULE_6__form_form__["f" /* FormPage */];
        this.inboxCounter = 0;
        this.getCountInbox();
    }
    TabsPage.prototype.getCountInbox = function () {
        var _this = this;
        this.authService.getCountNotifications().then(function (result) {
            _this.inboxCounter = result;
        }, function (err) {
            console.log(err);
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/tabs/tabs.html"*/'<ion-tabs color=\'dark\'>\n  <ion-tab [root]="home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="inbox" tabIcon="notifications" tabBadge="{{inboxCounter != \'0\' ? inboxCounter : \'\'}}" tabBadgeStyle="bright"></ion-tab>\n  <ion-tab [root]="search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="form" tabIcon="add"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrestasiPage = /** @class */ (function () {
    function PrestasiPage(navCtrl, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.page = 1;
        // get initial data
        this.getData();
    }
    PrestasiPage.prototype.getData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getListPage('prestasi', this.page).then(function (result) {
            _this.data = result;
            _this.page = _this.page + 1;
            _this.authService.getSummary('prestasi').then(function (result) {
                _this.summary = result;
                _this.summary = _this.summary.summary;
                _this.loading.dismiss();
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
                return false;
            });
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    PrestasiPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        this.authService.getListPage('prestasi', this.page).then(function (result) {
            var temp;
            temp = result;
            console.log("row : " + temp.length);
            for (var i = 0; i < temp.length; i++) {
                _this.data.push(result[i]);
            }
            infiniteScroll.complete();
            _this.page = _this.page + 1;
        });
    };
    PrestasiPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    PrestasiPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PrestasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prestasi',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/prestasi/prestasi.html"*/'<ion-header>\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Prestasi</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list>\n    <ion-item>\n      <p>Total data ({{ summary }})</p>\n    </ion-item>\n    <button ion-item *ngFor="let d of data" padding-right>\n      <ion-icon name="trophy" class="text-bright" item-start></ion-icon>\n      <h3 text-wrap>{{d.deskripsi}}</h3>\n      <p text-nowrap>{{d.namaBentukLembaga}} {{d.nama}}</p>\n    </button>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadData($event)" threshold="100px">\n    <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="Memuat data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/prestasi/prestasi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], PrestasiPage);
    return PrestasiPage;
}());

//# sourceMappingURL=prestasi.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KoleksiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KoleksiPage = /** @class */ (function () {
    function KoleksiPage(navCtrl, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.page = 1;
        // get initial data
        this.getData();
    }
    KoleksiPage.prototype.getData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getListPage('koleksi', this.page).then(function (result) {
            _this.data = result;
            _this.page = _this.page + 1;
            _this.authService.getSummary('koleksi').then(function (result) {
                _this.summary = result;
                _this.summary = _this.summary.summary;
                _this.loading.dismiss();
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
                return false;
            });
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KoleksiPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        this.authService.getListPage('koleksi', this.page).then(function (result) {
            var temp;
            temp = result;
            console.log("row : " + temp.length);
            for (var i = 0; i < temp.length; i++) {
                _this.data.push(result[i]);
            }
            infiniteScroll.complete();
            _this.page = _this.page + 1;
        });
    };
    KoleksiPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    KoleksiPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    KoleksiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-koleksi',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/koleksi/koleksi.html"*/'<ion-header>\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Koleksi</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <p>Total data ({{ summary }})</p>\n    </ion-item>\n    <button ion-item *ngFor="let d of data" padding-right>\n      <ion-icon name="book" class="text-secondary" item-start></ion-icon>\n      <h3 text-wrap>({{d.jenisKoleksi}}) {{d.judulKoleksi}}</h3>\n      <p text-nowrap>{{d.namaBentukLembaga}} {{d.nama}}</p>\n    </button>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadData($event)" threshold="100px">\n    <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="Memuat data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/koleksi/koleksi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], KoleksiPage);
    return KoleksiPage;
}());

//# sourceMappingURL=koleksi.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VerificationPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevisionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerificationPage = /** @class */ (function () {
    function VerificationPage(modalCtrl, alertCtrl, viewCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
    }
    VerificationPage.prototype.openRevision = function () {
        var modal = this.modalCtrl.create(RevisionPage);
        modal.present();
    };
    VerificationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/verification/verification.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'main\'>\n    <ion-title>Verifikasi Lembaga</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item color=\'light\' class="no-border">\n      <ion-avatar item-start>\n        <img src="assets/imgs/sample.jpg">\n      </ion-avatar>\n      <h2>Nama lembaganya</h2>\n      <p>Yayasan</p>\n    </ion-item>\n    <ion-item>\n      <ion-toggle checked="false"></ion-toggle>\n      <ion-label>\n        Konfimasi keabsahan data\n      </ion-label>\n      <ion-icon color="main" name=\'md-checkmark-circle-outline\' item-start></ion-icon>\n    </ion-item>\n    <button ion-item (click)="openRevision()">\n      <ion-icon name="chatbubbles" item-start color="secondary"></ion-icon>\n      Catatan revisi\n    </button>\n  </ion-list>\n  <ion-list>\n    <ion-list-header color="clear">Kelengkapan legalitas</ion-list-header>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>Akta Notaris</ion-label>\n        <ion-checkbox color="main"></ion-checkbox>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="main">\n          Lihat Berkas\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-label>SK Kemenkumham</ion-label>\n        <ion-checkbox color="main"></ion-checkbox>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="main">\n          Lihat Berkas\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list>\n    <ion-list-header color="clear">Kelengkapan lainnya</ion-list-header>\n    <ion-item>\n      <ion-label>Survey Lapangan</ion-label>\n      <ion-checkbox color="main"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/verification/verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], VerificationPage);
    return VerificationPage;
}());

var RevisionPage = /** @class */ (function () {
    function RevisionPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    RevisionPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RevisionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/verification/revision.html"*/'<ion-header class="static">\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Revisi</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list padding>\n    <ion-item class="no-border-top" text-wrap>\n      <p>Historial catatan revisi yang dikirimkan ke Lembaga, terkait verifikasi.</p>\n      <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n      <ion-icon name="chatbubbles" item-end color="secondary"></ion-icon>\n    </ion-item>\n    <!-- <ion-item>\n      <p>Total data ({{ data.length }})</p>\n    </ion-item> -->\n    <!-- <button ion-item *ngFor="let d of data">\n      <ion-icon name="trophy" class="text-bright" item-start></ion-icon>\n      <h2>{{d.nama_prestasi}}</h2>\n    </button> -->\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="clear">\n    <ion-item class="no-border">\n      <ion-input type="text" placeholder="Ketik catatan revisi.."></ion-input>\n      <ion-icon item-right name="md-create"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/verification/revision.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], RevisionPage);
    return RevisionPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SettingPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, modalCtrl) {
        // set our app's pages
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.other = [
            { title: 'Manjemen Akun', component: SettingAccountPage, icon: 'lock', color: 'bright' },
        ];
    }
    SettingPage.prototype.openModal = function (index) {
        var modal = this.modalCtrl.create(this.other[index].component);
        modal.present();
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/setting/setting.html"*/'<ion-header>\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Pengaturan</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list margin-top>\n    <button ion-item *ngFor="let o of other; let i = index" (click)="openModal(i)" class="no-border-top">\n      <ion-icon name="{{o.icon}}" item-start color="{{o.color}}"></ion-icon>\n      {{o.title}}\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/setting/setting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], SettingPage);
    return SettingPage;
}());

var SettingAccountPage = /** @class */ (function () {
    function SettingAccountPage(navCtrl, modalCtrl, viewCtrl) {
        // set our app's pages
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    SettingAccountPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SettingAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/setting/account.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Manajemen Akun</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-row class="big-avatar-frame">\n      <div class="big-avatar">\n        <img src="assets/imgs/sample.jpg">\n        <ion-buttons margin-top>\n          <button class="no-shadow" color="bright" ion-button text-capitalize small round>\n            Unggah avatar\n          </button>\n        </ion-buttons>\n      </div>\n      <ion-item color="dark" text-center class="big-avatar-frame" padding></ion-item>\n      <ion-item></ion-item>\n    </ion-row>\n  </ion-list>\n  <ion-list padding>\n    <ion-list-header class="text-main no-border-top">Ubah password</ion-list-header>\n    <ion-row margin-bottom>\n      <ion-item>\n        <ion-label>Password lama (*)</ion-label>\n        <ion-input type="text" no-border></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Password baru (*)</ion-label>\n        <ion-input type="text" no-border></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Ulangi Password baru (*)</ion-label>\n        <ion-input type="text" no-border></ion-input>\n      </ion-item>\n    </ion-row>\n  </ion-list>\n  <ion-buttons text-center>\n    <button ion-button class="no-shadow" color="main" round>Ubah Password</button>\n  </ion-buttons>\n</ion-content>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/setting/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], SettingAccountPage);
    return SettingAccountPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InboxPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InboxPage = /** @class */ (function () {
    // groupedData: [];
    function InboxPage(modalCtrl, authService, loadingCtrl, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.getData();
    }
    InboxPage.prototype.openModal = function (inboxId) {
        var modal = this.modalCtrl.create(InboxDetailPage, inboxId);
        modal.present();
    };
    InboxPage.prototype.getData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getListNotifications().then(function (result) {
            _this.data = result;
            _this.dataClone = _this.data;
            _this.dataClone[-1] = { tanggal: 'start' };
            // this.data.forEach(function (o) {
            //   if (!this[o.tanggal]) {
            //     this[o.tanggal] = {
            //       t_id: o.idData,
            //       val1: 0,
            //       title: o.judul
            //     };
            //     this.groupedData.push(this[o.tanggal]);
            //   }
            //   // this[o.t_id].val1 += Number(o.val1);
            // }, Object.create(null));
            // console.log("******");
            // console.log(this.data);
            var array = [{ t_id: "1", val1: "1", title: "cash to purchase", unit: "bag" }, { t_id: "1", val1: "1", title: "cash to purchase", unit: "bag" }, { t_id: "1", val1: "1", title: "cash to purchase", unit: "bag" }, { t_id: "2", val1: "4", title: "offload", unit: "bag" }, { t_id: "2", val1: "5", title: "onroad", unit: "bag" }, { t_id: "3", val1: "5", title: "Onroad", unit: "bag" }, { t_id: "3", val1: "6", title: "Onroad", unit: "bag" }];
            // console.log(array);
            // console.log("******");
            var grouped = [];
            var grouped2 = [];
            array.forEach(function (o) {
                if (!this[o.t_id]) {
                    this[o.t_id] = {
                        t_id: o.t_id,
                        val1: 0,
                        title: o.title
                    };
                    grouped.push(this[o.t_id]);
                }
                this[o.t_id].val1 += Number(o.val1);
            }, Object.create(null));
            _this.data.forEach(function (o) {
                if (!this[o.tanggal]) {
                    this[o.tanggal] = {
                        tanggal: o.tanggal,
                        val1: 0
                    };
                    grouped2.push(this[o.tanggal]);
                }
                this[o.tanggal].val1 += 1;
            }, Object.create(null));
            console.log(grouped);
            console.log(grouped2);
            // console.log(this.groupedData);
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    InboxPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    InboxPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    InboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inbox',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/inbox/inbox.html"*/'<ion-content>\n  <h3 padding-left class="text-main">KOTAK MASUK</h3>\n  <ion-list>\n    <ion-item-group>\n      <div  *ngFor="let d of data; let idx = index;">\n        <ion-list-header color="light" *ngIf="d.tanggal != dataClone[idx-1].tanggal"> {{d.tanggal | date:\'yyyy MMM dd\'}}</ion-list-header>\n        <ion-item-sliding>\n          <button ion-item (click)="openModal({charNum: 0})">\n            <ion-icon name="notifications" color="{{d.statusBaca == \'0\' ? \'bright\' : \'light\'}}" item-start></ion-icon>\n            <h2 class="{{d.statusBaca == \'0\' ? \'text-main\' : \'\'}}">{{d.judul}}</h2>\n            <!-- <h3>{{d.waktu}}</h3> -->\n            <p text-nowrap>{{d.deskripsi}}</p>\n            <ion-note item-end>{{d.jam}}</ion-note>\n          </button>\n          <ion-item-options side="right">\n            <button ion-button color="danger">Hapus</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </div>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/inbox/inbox.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], InboxPage);
    return InboxPage;
}());

var InboxDetailPage = /** @class */ (function () {
    function InboxDetailPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.filterWilayah = "";
        this.filterKecamatan = "";
        this.filterKelurahan = "";
        this.filterStatus = "";
        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses!',
                image: 'assets/img/avatar-gollum.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'River Folk' },
                    { title: 'Alter Ego', note: 'Smeagol' }
                ]
            },
            {
                name: 'Frodo',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Samwise Gamgee',
                quote: 'What we need is a few good taters.',
                image: 'assets/img/avatar-samwise.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Nickname', note: 'Sam' }
                ]
            }
        ];
        this.character = characters[this.params.get('charNum')];
    }
    InboxDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    InboxDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detailInbox',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/inbox/detail.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Baca pesan</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-group margin-top>\n    <ion-item-divider>Title</ion-item-divider>\n    <ion-item-divider>Subject</ion-item-divider>\n    <ion-item text-wrap>The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.</ion-item>\n  </ion-item-group>\n</ion-content>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/inbox/detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], InboxDetailPage);
    return InboxDetailPage;
}());

//# sourceMappingURL=inbox.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://api.syncardtech.com/dplega-api/public/auth/', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // let headers = new Headers();
            // headers.append('Content-Type', 'application/json');
            // headers.append('X-Auth-Token', localStorage.getItem('token'));
            _this.http.get('http://api.syncardtech.com/dplega-api/public/books/', {})
                .subscribe(function (res) {
                localStorage.clear();
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.getListLembaga = function (page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var filterData = {
                'keyword': localStorage.getItem('kelembagaan-filter-keyword'),
                'bentukLembaga': localStorage.getItem('kelembagaan-filter-bentukLembaga'),
                'wilayah': localStorage.getItem('kelembagaan-filter-wilayah'),
                'kecamatan': localStorage.getItem('kelembagaan-filter-kecamatan'),
                'kelurahan': localStorage.getItem('kelembagaan-filter-kelurahan'),
                'ajuan': localStorage.getItem('kelembagaan-filter-ajuan'),
                'valid': localStorage.getItem('kelembagaan-filter-valid'),
            };
            _this.http.post('http://api.syncardtech.com/dplega-api/public/list/lembaga/' + page, JSON.stringify(filterData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.getCountNotifications = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://api.syncardtech.com/dplega-api/public/count/notifications/' + localStorage.getItem('userNotif'), {})
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.getListNotifications = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://api.syncardtech.com/dplega-api/public/list/notifications/' + localStorage.getItem('userNotif'), {})
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.getList = function (target) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://api.syncardtech.com/dplega-api/public/' + target, {})
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.getSummary = function (target) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://api.syncardtech.com/dplega-api/public/summary/' + target + '/', {})
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.getListPage = function (target, page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://api.syncardtech.com/dplega-api/public/list/' + target + '/' + page, {})
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.getOptionList = function (target, idRef) {
        var _this = this;
        if (idRef === void 0) { idRef = null; }
        return new Promise(function (resolve, reject) {
            target = target + '/';
            if (idRef != null) {
                target = target + idRef;
            }
            _this.http.get('http://api.syncardtech.com/dplega-api/public/option/' + target, {})
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: false
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return KelembagaanPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KelembagaanFilterPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KelembagaanDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return KelembagaanLegalitasPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return KelembagaanSejarahPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return KelembagaanKepengurusanPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return KelembagaanUsahaPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return KelembagaanPrestasiPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return KelembagaanKoleksiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verification_verification__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KelembagaanPage = /** @class */ (function () {
    function KelembagaanPage(events, navCtrl, authService, loadingCtrl, modalCtrl, toastCtrl) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.page = 1;
        // get initial data
        this.getData();
        // set our app's pages
        this.pages = [
            { component: KelembagaanFilterPage },
            { component: KelembagaanDetailPage },
        ];
        events.subscribe('kelembagaan:reload', function () {
            _this.getData();
        });
    }
    KelembagaanPage.prototype.openModal = function (index) {
        var modal = this.modalCtrl.create(this.pages[index].component);
        modal.present();
    };
    KelembagaanPage.prototype.getData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getListLembaga(this.page).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            _this.page = _this.page + 1;
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        this.authService.getListLembaga(this.page).then(function (result) {
            var temp;
            temp = result;
            console.log("row : " + temp.length);
            for (var i = 0; i < temp.length; i++) {
                _this.data.push(result[i]);
            }
            infiniteScroll.complete();
            _this.page = _this.page + 1;
        });
    };
    KelembagaanPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    KelembagaanPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    KelembagaanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-kelembagaan',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/kelembagaan.html"*/'<ion-header>\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Kelembagaan</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openModal(0)">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <p>Total data ({{ summary }})</p>\n    </ion-item>\n    <ion-item-group>\n      <ion-item-sliding *ngFor="let d of data">\n        <button ion-item (click)="openModal(1, d.noRegistrasi)" padding-right>\n          <ion-avatar item-start>\n            <img src="http://dplega.yanbangsos.jabarprov.go.id/img/logo/{{d.urlGambarLogo}}">\n          </ion-avatar>\n          <h3 text-wrap>{{d.nama}}</h3>\n          <p>{{d.namaBentukLembaga}} &nbsp; <span class="text-{{d.statusVerifikasi == \'0\' ? \'danger\' : \'secondary\'}}"><ion-icon name="compass"></ion-icon></span></p>\n        </button>\n        <ion-item-options side="right">\n          <button ion-button color="light" class="text-vibrant">\n            <!-- <ion-icon name="checkmark-circle"></ion-icon> -->\n            Verifikasi\n          </button>\n          <button ion-button color="light" class="text-primary">\n            <!-- <ion-icon name="create"></ion-icon> -->\n            Edit\n          </button>\n          <button ion-button color="light" class="text-danger">\n            <!-- <ion-icon name="trash"></ion-icon> -->\n            Hapus\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadData($event)" threshold="100px">\n    <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="Memuat data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/kelembagaan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], KelembagaanPage);
    return KelembagaanPage;
}());

var KelembagaanFilterPage = /** @class */ (function () {
    function KelembagaanFilterPage(events, platform, params, viewCtrl, authService, loadingCtrl, toastCtrl) {
        this.events = events;
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // keyword: string = "";
        // filterBentukLembaga: string = "";
        // filterWilayah: string = "";
        // filterKecamatan: string = "";
        // filterKelurahan: string = "";
        // filterAjuan: string = "";
        // filterValid: string = "";
        this.filterData = { keyword: '', bentukLembaga: '', wilayah: '', kecamatan: '', kelurahan: '', ajuan: '', valid: '' };
        this.loadInit();
    }
    KelembagaanFilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanFilterPage.prototype.loadInit = function () {
        var _this = this;
        this.showLoader();
        this.authService.getOptionList('bentuk-lembaga').then(function (result) {
            _this.bentukLembaga = result;
            _this.authService.getOptionList('wilayah').then(function (result) {
                _this.wilayah = result;
                _this.loading.dismiss();
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
                return false;
            });
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanFilterPage.prototype.loadKecamatan = function (idWilayah) {
        var _this = this;
        this.showLoader();
        this.authService.getOptionList('kecamatan', idWilayah).then(function (result) {
            _this.kecamatan = result;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanFilterPage.prototype.loadKelurahan = function (idKecamatan) {
        var _this = this;
        this.showLoader();
        this.authService.getOptionList('kelurahan', idKecamatan).then(function (result) {
            _this.kelurahan = result;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanFilterPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    KelembagaanFilterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    KelembagaanFilterPage.prototype.filter = function () {
        localStorage.setItem('kelembagaan-filter-keyword', this.filterData.keyword);
        localStorage.setItem('kelembagaan-filter-bentukLembaga', this.filterData.bentukLembaga);
        localStorage.setItem('kelembagaan-filter-wilayah', this.filterData.wilayah);
        localStorage.setItem('kelembagaan-filter-kecamatan', this.filterData.kecamatan);
        localStorage.setItem('kelembagaan-filter-kelurahan', this.filterData.kelurahan);
        localStorage.setItem('kelembagaan-filter-ajuan', this.filterData.ajuan);
        localStorage.setItem('kelembagaan-filter-valid', this.filterData.valid);
        this.dismiss();
        this.events.publish('kelembagaan:reload');
    };
    KelembagaanFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/filter.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Filter Lembaga</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear" >Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header class="text-dark">Pencarian</ion-list-header>\n    <ion-item color="clear">\n      <ion-searchbar [(ngModel)]="filterData.keyword" placeholder="Berdasarkan nama" showWhen="ios" value=""></ion-searchbar>\n      <ion-searchbar [(ngModel)]="filterData.keyword" placeholder="Berdasarkan nama"showWhen="android,windows" no-padding></ion-searchbar>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bentuk Lembaga</ion-label>\n      <ion-select [(ngModel)]="filterData.bentukLembaga">\n        <ion-option value="" selected="{{filterData.bentukLembaga == \'\' ? selected : \'\' }}">Semua</ion-option>\n        <ion-option *ngFor="let d of bentukLembaga" value="{{ d.value }}" selected="{{filterData.bentukLembaga == d.value ? selected : \'\' }}">{{ d.caption }}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header class="text-dark">Lokasi</ion-list-header>\n    <ion-item>\n      <ion-label>Wilayah</ion-label>\n      <ion-select [(ngModel)]="filterData.wilayah" (ionChange)="loadKecamatan(filterData.wilayah)">\n        <ion-option value="" selected="{{filterData.wilayah == \'\' ? selected : \'\' }}">Semua</ion-option>\n        <ion-option *ngFor="let d of wilayah" value="{{ d.value }}" selected="{{filterData.wilayah == d.value ? selected : \'\' }}">{{ d.caption }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Kecamatan</ion-label>\n      <ion-select [(ngModel)]="filterData.kecamatan" (ionChange)="loadKelurahan(filterData.kecamatan)">\n        <ion-option value="" selected="{{filterData.kecamatan == \'\' ? selected : \'\' }}">Semua</ion-option>\n        <ion-option *ngFor="let d of kecamatan" value="{{ d.value }}" selected="{{filterData.kecamatan == d.value ? selected : \'\' }}">{{ d.caption }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Kelurahan</ion-label>\n      <ion-select [(ngModel)]="filterData.kelurahan">\n        <ion-option value="" selected="{{filterData.kelurahan == \'\' ? selected : \'\' }}">Semua</ion-option>\n        <ion-option *ngFor="let d of kelurahan" value="{{ d.value }}" selected="{{filterData.kelurahan == d.value ? selected : \'\' }}">{{ d.caption }}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header class="text-dark">Status</ion-list-header>\n    <ion-item>\n      <ion-label>Belum Verifikasi</ion-label>\n      <ion-checkbox [(ngModel)]="filterData.ajuan" color="main" checked="{{filterData.ajuan != \'false\' ? \'true\' : \'false\' }}" item-end></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sudah Verifikasi</ion-label>\n      <ion-checkbox [(ngModel)]="filterData.valid" color="main" checked="{{filterData.valid != \'false\' ? \'true\' : \'false\' }}" item-end></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main">\n      <button type="button" (click)="filter()" class="text-white" ion-button block clear>Aktifkan</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], KelembagaanFilterPage);
    return KelembagaanFilterPage;
}());

// DETAIL
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
var KelembagaanDetailPage = /** @class */ (function () {
    function KelembagaanDetailPage(platform, params, viewCtrl, modalCtrl, launchNavigator) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.launchNavigator = launchNavigator;
        // set our app's pages
        this.detailPages = [
            { component: KelembagaanLegalitasPage },
            { component: KelembagaanSejarahPage },
            { component: KelembagaanKepengurusanPage },
            { component: KelembagaanUsahaPage },
            { component: KelembagaanPrestasiPage },
            { component: KelembagaanKoleksiPage },
            { component: __WEBPACK_IMPORTED_MODULE_4__verification_verification__["b" /* VerificationPage */] },
        ];
    }
    KelembagaanDetailPage.prototype.openModal = function (index) {
        var modal = this.modalCtrl.create(this.detailPages[index].component);
        modal.present();
    };
    KelembagaanDetailPage.prototype.openMaps = function () {
        this.launchNavigator.navigate([-6.902401, 107.618815], {
            start: "-6.902401, 107.618815"
        }).then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    KelembagaanDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/detail.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'main\'>\n    <ion-title>Profil Lembaga</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-list no-margin> -->\n    <ion-list>\n      <ion-item color="main" text-center class="no-border">\n        <ion-avatar margin-bottom class="medium">\n          <img class="margin-auto" src="http://dplega.yanbangsos.jabarprov.go.id/img/logo/{{detail.avatar}}">\n        </ion-avatar>\n        <p>{{ detail.namaBentukLembaga }}</p>\n        <h1>{{ detail.nama }}</h1>\n        <p class="text-{{ detail.statusVerifikasi == 1 ? \'white\' : \'bright\' }}" (click)="openModal(6)">{{ detail.statusVerifikasi == 1 ? \'Sudah Verifikasi\' : \'Belum Verifikasi\' }}</p>\n      </ion-item>\n    </ion-list>\n    <ion-list padding>\n      <ion-item>\n        <p><b>No Registrasi.</b><br/> {{ detail.noreg }}</p>\n      </ion-item>\n      <ion-item>\n        <p><b>Telp.</b><br/> {{ detail.telp }}</p>\n      </ion-item>\n      <ion-item>\n        <p><b>Email.</b><br/> {{ detail.email }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Alamat.</b><br/> {{ detail.alamat }}</p>\n      </ion-item>\n      <ion-item>\n        <p><b>Bergerak dalam bidang.</b><br/> {{ detail.namaBidangGerak }}</p>\n      </ion-item>\n      <ion-item>\n        <p><b>Jumlah pengurus.</b><br/> {{ detail.jumlahPengurus }} Orang</p>\n      </ion-item>\n      <ion-item>\n        <p><b>NPWP.</b> {{ detail.noNpwp }}</p>\n      </ion-item>\n      <ion-item>\n        <p><b>Afiliasi.</b> {{ detail.organisasiAfiliasi }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Visi.</b> {{ detail.visiLembaga }}</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Misi.</b> {{ detail.misiLembaga }}</p>\n      </ion-item>\n      <ion-item margin-bottom class="no-border">\n        <p><b>Media sosial.</b> {{ detail.mediaSosial }}</p>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-list-header class="text-main">Informasi lainnya</ion-list-header>\n      <button ion-item (click)="openModal(0)">\n        <ion-icon name="paper" item-start color="main"></ion-icon>\n        Legalitas\n      </button>\n      <button ion-item (click)="openModal(1)">\n        <ion-icon name="time" item-start color="bright"></ion-icon>\n        Sejarah\n      </button>\n      <button ion-item (click)="openModal(2)">\n        <ion-icon name="people" item-start color="vibrant"></ion-icon>\n        Kepengurusan\n      </button>\n      <button ion-item (click)="openModal(3)">\n        <ion-icon name="pricetag" item-start color="primary"></ion-icon>\n        Usaha\n      </button>\n      <button ion-item (click)="openModal(4)">\n        <ion-icon name="trophy" item-start color="bright"></ion-icon>\n        Prestasi\n      </button>\n      <button ion-item (click)="openModal(5)">\n        <ion-icon name="book" item-start color="secondary"></ion-icon>\n        Koleksi\n      </button>\n      <button ion-item (click)="openMaps()">\n        <ion-icon name="globe" item-start color="primary"></ion-icon>\n        Lihat Maps\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header class="text-main">Aplikasi</ion-list-header>\n      <button ion-item (click)="openModal(6)">\n        <ion-icon name="md-create" item-start color="secondary"></ion-icon>\n        Verifikasi Lembaga\n      </button>\n    </ion-list>\n  <!-- </ion-list> -->\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], KelembagaanDetailPage);
    return KelembagaanDetailPage;
}());

// ---------------------------------------------------------------------------
var KelembagaanLegalitasPage = /** @class */ (function () {
    function KelembagaanLegalitasPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    KelembagaanLegalitasPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanLegalitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/legalitas.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'main\'>\n    <ion-title>Legalitas</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-row padding>\n      <ion-item text-wrap>\n        <p>Informasi mengenai legalitas yang dimiliki oleh Lembaga terkait.</p>\n        <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n        <ion-icon name="paper" item-end color="main"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <p>Total data (2)</p>\n      </ion-item>\n      <button ion-item text-wrap>\n        <ion-icon name="document" item-start color="main"></ion-icon>\n        <p><b>Akta Notaris.</b><br /><br /> <span class="text-vibrant">2123029</span> | 2017-11-02</p>\n      </button>\n      <button ion-item text-wrap margin-bottom class="no-border">\n        <ion-icon name="document" item-start color="main"></ion-icon>\n        <p><b>SK Kemenkumham.</b><br /><br /> <span class="text-vibrant">2123029</span> | 2017-11-02</p>\n      </button>\n    </ion-row>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/legalitas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], KelembagaanLegalitasPage);
    return KelembagaanLegalitasPage;
}());

// ---------------------------------------------------------------------------
var KelembagaanSejarahPage = /** @class */ (function () {
    function KelembagaanSejarahPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    KelembagaanSejarahPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanSejarahPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/sejarah.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'main\'>\n    <ion-title>Sejarah</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-row padding>\n      <ion-item text-wrap>\n        <p>Informasi mengenai sejarah Lembaga terkait.</p>\n        <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n        <ion-icon name="time" item-end color="bright"></ion-icon>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Sejarah singkat.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Tanggal didirikan.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Kepemilikan.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Sertifikasi.</b> -</p>\n      </ion-item>\n      <ion-item>\n        <p><b>Luas Tanah.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Luas Bangunan.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Saranan / Prasarana.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Struktur Organisasi.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Bahasa Pengantar.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Sensus.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Bantuan Pemerintah.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Kondisi Geografis.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Potensi Wilayah.</b> -</p>\n      </ion-item>\n      <ion-item margin-bottom class="no-border">\n        <p><b>Catatan.</b> -</p>\n      </ion-item>\n    </ion-row>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/sejarah.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], KelembagaanSejarahPage);
    return KelembagaanSejarahPage;
}());

// ---------------------------------------------------------------------------
var KelembagaanKepengurusanPage = /** @class */ (function () {
    function KelembagaanKepengurusanPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    KelembagaanKepengurusanPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanKepengurusanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/kepengurusan.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'main\'>\n    <ion-title>Kepengurusan</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-row padding>\n      <ion-item text-wrap>\n        <p>Informasi mengenai kepengurusan Lembaga terkait.</p>\n        <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n        <ion-icon name="people" item-end color="vibrant"></ion-icon>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Penanggung jawab.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Alamat.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Telp.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Kewarganegaraan.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Tempat, Tanggal Lahir.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Jenis Kelamin.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Agama.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Jabatan lain.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Pendidikan.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Kompetensi.</b> -</p>\n      </ion-item>\n      <ion-item margin-bottom class="no-border">\n        <p><b>Catatan.</b> -</p>\n      </ion-item>\n    </ion-row>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/kepengurusan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], KelembagaanKepengurusanPage);
    return KelembagaanKepengurusanPage;
}());

// ---------------------------------------------------------------------------
var KelembagaanUsahaPage = /** @class */ (function () {
    function KelembagaanUsahaPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    KelembagaanUsahaPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanUsahaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/usaha.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'main\'>\n    <ion-title>Usaha</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-row padding>\n      <ion-item text-wrap>\n        <p>Informasi mengenai usaha yang sedang dijalankan oleh Lembaga terkait.</p>\n        <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n        <ion-icon name="pricetag" item-end color="primary"></ion-icon>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Nama Usaha.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Detail Usaha.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Jenis Usaha.</b> -</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Jumlah Pekerja.</b> -</p>\n      </ion-item>\n      <ion-item margin-bottom class="no-border">\n        <p><b>Catatan.</b> -</p>\n      </ion-item>\n    </ion-row>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/usaha.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], KelembagaanUsahaPage);
    return KelembagaanUsahaPage;
}());

// ---------------------------------------------------------------------------
var KelembagaanPrestasiPage = /** @class */ (function () {
    function KelembagaanPrestasiPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.data = [
            { noreg: '1', nama_prestasi: 'Prestasi 1', nama_lembaga: 'Lembaga 1', bentuk_lembaga: 'Yayasan' },
            { noreg: '2', nama_prestasi: 'Prestasi 2', nama_lembaga: 'Lembaga 2', bentuk_lembaga: 'Pondok pesantren' },
            { noreg: '3', nama_prestasi: 'Prestasi 3', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
            { noreg: '3', nama_prestasi: 'Prestasi 4', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
        ];
    }
    KelembagaanPrestasiPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanPrestasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/prestasi.html"*/'<ion-header class="static">\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Prestasi</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list padding>\n    <ion-item class="no-border-top" text-wrap>\n      <p>Informasi mengenai prestasi yang dimiliki oleh Lembaga terkait.</p>\n      <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n      <ion-icon name="trophy" item-end color="bright"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <p>Total data ({{ data.length }})</p>\n    </ion-item>\n    <button ion-item *ngFor="let d of data">\n      <ion-icon name="trophy" class="text-bright" item-start></ion-icon>\n      <h2>{{d.nama_prestasi}}</h2>\n    </button>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="clear">\n    <ion-item class="no-border">\n      <ion-input type="text" placeholder="Tambah prestasi.."></ion-input>\n      <ion-icon item-right name="md-create"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/prestasi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], KelembagaanPrestasiPage);
    return KelembagaanPrestasiPage;
}());

// ---------------------------------------------------------------------------
var KelembagaanKoleksiPage = /** @class */ (function () {
    function KelembagaanKoleksiPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.data = [
            { noreg: '1', nama_koleksi: 'Koleksi 1', nama_lembaga: 'Lembaga 1', bentuk_lembaga: 'Yayasan' },
            { noreg: '2', nama_koleksi: 'Koleksi 2', nama_lembaga: 'Lembaga 2', bentuk_lembaga: 'Pondok pesantren' },
            { noreg: '3', nama_koleksi: 'Koleksi 3', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
            { noreg: '3', nama_koleksi: 'Koleksi 4', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
        ];
    }
    KelembagaanKoleksiPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanKoleksiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/koleksi.html"*/'<ion-header class="static">\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Koleksi</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list padding>\n    <ion-item class="no-border-top" text-wrap>\n      <p>Informasi mengenai koleksi yang dimiliki oleh Lembaga terkait.</p>\n      <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n      <ion-icon name="book" item-end color="secondary"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <p>Total data ({{ data.length }})</p>\n    </ion-item>\n    <button ion-item *ngFor="let d of data">\n      <ion-icon name="book" class="text-secondary" item-start></ion-icon>\n      <h2>{{d.nama_koleksi}}</h2>\n    </button>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="clear">\n    <ion-item class="no-border">\n      <ion-input type="text" placeholder="Tambah koleksi.."></ion-input>\n      <ion-icon item-right name="md-create"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/koleksi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], KelembagaanKoleksiPage);
    return KelembagaanKoleksiPage;
}());

//# sourceMappingURL=kelembagaan.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kelembagaan_kelembagaan__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prestasi_prestasi__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__koleksi_koleksi__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_news__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__setting_setting__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HomePage = /** @class */ (function () {
    function HomePage(app, authService, loadingCtrl, toastCtrl, appCtrl, navCtrl) {
        this.app = app;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        // set our app's pages
        this.pages = [
            { title: 'Rekapitulasi', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */], icon: 'stats', color: 'main' },
            { title: 'Kelembagaan', component: __WEBPACK_IMPORTED_MODULE_3__kelembagaan_kelembagaan__["f" /* KelembagaanPage */], icon: 'people', color: 'vibrant' },
            { title: 'Prestasi', component: __WEBPACK_IMPORTED_MODULE_4__prestasi_prestasi__["a" /* PrestasiPage */], icon: 'trophy', color: 'bright' },
            { title: 'Koleksi', component: __WEBPACK_IMPORTED_MODULE_5__koleksi_koleksi__["a" /* KoleksiPage */], icon: 'book', color: 'secondary' },
            { title: 'Berita', component: __WEBPACK_IMPORTED_MODULE_6__news_news__["c" /* NewsPage */], icon: 'paper', color: 'primary' },
        ];
        this.other = [
            { title: 'Pengaturan', component: __WEBPACK_IMPORTED_MODULE_8__setting_setting__["b" /* SettingPage */], icon: 'settings', color: '' },
            { title: 'Tentang Aplikasi', component: __WEBPACK_IMPORTED_MODULE_7__about_about__["a" /* AboutPage */], icon: 'ios-information-circle-outline', color: 'primary' },
        ];
    }
    HomePage.prototype.logout = function () {
        this.showLoader();
        this.loading.dismiss();
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
        // this.authService.logout().then((result) => {
        //   this.loading.dismiss();
        //   this.appCtrl.getRootNav().push(LoginPage);
        // }, (err) => {
        //   this.loading.dismiss();
        //   this.presentToast(err);
        // });
    };
    HomePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Logout...'
        });
        this.loading.present();
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage.prototype.navigateTo = function (pages) {
        // Let's navigate from TabsPage to Page1
        this.navCtrl.push(pages.component);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/home/home.html"*/'<ion-content>\n  <ion-img id="logo-apps" width=\'40\' height=\'40\' src="assets/imgs/icon.png" margin float-left></ion-img>\n  <h3 padding-left class="text-main header-logo-text">DPLEGA APPS</h3>\n  <ion-list>\n    <ion-list-header>Menu</ion-list-header>\n    <button ion-item *ngFor="let p of pages" (click)="navigateTo(p)">\n      <ion-icon name="{{p.icon}}" item-start color="{{p.color}}"></ion-icon>\n      {{p.title}}\n    </button>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>Lainnya</ion-list-header>\n    <button ion-item *ngFor="let o of other" (click)="navigateTo(o)">\n      <ion-icon name="{{o.icon}}" item-start color="{{o.color}}"></ion-icon>\n      {{o.title}}\n    </button>\n    <button ion-item (click)="logout()">\n      <ion-icon name="log-out" item-start color="danger"></ion-icon>\n      Keluar\n    </button>\n  </ion-list>\n</ion-content>\n<!-- \n<ion-tabs color=\'dark\'>\n  <ion-tab [root]="home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="inbox" tabIcon="notifications" tabBadge="1" tabBadgeStyle="bright"></ion-tab>\n  <ion-tab [root]="search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="form" tabIcon="add"></ion-tab>\n</ion-tabs> -->\n\n<!-- <ion-footer>\n  <ion-toolbar>\n    <p text-center>Copyright © 2018 Pemerintah Provinsi Jawa Barat.</p>\n  </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_10__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prestasi_prestasi__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koleksi_koleksi__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.que = 0;
        // set our app's pages
        this.pages = [
            { title: 'Prestasi', component: __WEBPACK_IMPORTED_MODULE_3__prestasi_prestasi__["a" /* PrestasiPage */], icon: 'trophy', color: 'bright' },
            { title: 'Koleksi', component: __WEBPACK_IMPORTED_MODULE_4__koleksi_koleksi__["a" /* KoleksiPage */], icon: 'book', color: 'secondary' },
        ];
        this.loadSummary();
    }
    DashboardPage.prototype.navigateTo = function (index) {
        this.navCtrl.push(this.pages[index].component);
    };
    DashboardPage.prototype.loadSummary = function () {
        var _this = this;
        this.showLoader();
        this.authService.getList('count/summary/').then(function (result) {
            _this.countSummary = result;
            _this.koleksi = _this.countSummary.koleksi;
            _this.prestasi = _this.countSummary.prestasi;
            _this.ajuan = _this.countSummary.ajuan;
            _this.valid = _this.countSummary.valid;
            // next count
            _this.authService.getList('count/lembaga/').then(function (result) {
                _this.countLembaga = result;
                _this.loading.dismiss();
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
                return false;
            });
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    DashboardPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    DashboardPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    DashboardPage.prototype.advanceNumber = function (number) {
        var abs;
        if (number !== void 0) {
            console.log(number);
            abs = Math.abs(number);
            if (abs >= Math.pow(10, 12)) {
                number = (number / Math.pow(10, 12)).toFixed(1) + "t";
            }
            else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9)) {
                number = (number / Math.pow(10, 9)).toFixed(1) + "b";
            }
            else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6)) {
                number = (number / Math.pow(10, 6)).toFixed(1) + "m";
            }
            else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3)) {
                number = (number / Math.pow(10, 3)).toFixed(1) + "k";
            }
            return number;
        }
    };
    ;
    DashboardPage.prototype.simpleNumber = function (number) {
        if (number >= 1000) {
            number = number / 1000;
            number = number.toFixed(1) + 'k';
        }
        return number;
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/dashboard/dashboard.html"*/'<ion-header>\n  <ion-navbar color=\'main\' hideBackButton> \n    <ion-title>Rekapitulasi</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6 no-padding>\n              <button ion-item (click)="navigateTo(2, \'ajuan\')" class="border-bottom">\n                <ion-badge color=\'danger\'>Data Ajuan</ion-badge>\n                <h1 margin-top>{{ simpleNumber(ajuan) }}</h1>\n              </button>\n          </ion-col>\n          <ion-col col-6 no-padding>\n              <button ion-item (click)="navigateTo(2, \'valid\')" class="border-bottom">\n                <ion-badge color=\'secondary\'>Data Terverifikasi</ion-badge>\n                <h1 margin-top>{{ simpleNumber(valid) }}</h1>\n              </button>\n          </ion-col>\n          <ion-col col-6 no-padding>\n            <button ion-item (click)="navigateTo(0)" >\n              <ion-badge color=\'bright\'>Total Prestasi</ion-badge>\n              <h1 margin-top>{{ simpleNumber(prestasi) }}</h1>\n            </button>\n          </ion-col>\n          <ion-col col-6 no-padding>\n            <button ion-item (click)="navigateTo(1)">\n              <ion-badge color=\'vibrant\'>Total Koleksi</ion-badge>\n              <h1 margin-top>{{ simpleNumber(koleksi) }}</h1>\n            </button>\n          </ion-col>\n        </ion-row>\n\n        \n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card margin-top>\n    <ion-card-content>\n      <ion-list>\n        <ion-list-header class="no-border" no-margin>Berdasarkan bentuk Lembaga</ion-list-header>\n        <ion-item *ngFor="let c of countLembaga" class="border-bottom">\n          {{ c.namaBentukLembaga }}\n          <ion-badge item-end color=\'danger\'>{{ simpleNumber(c.ajuan) }}</ion-badge>\n          <ion-badge item-end color=\'secondary\'>{{ simpleNumber(c.valid) }}</ion-badge>\n        </ion-item>\n      </ion-list>\n      <button (click)="navigateTo(2)" ion-button color="vibrant" icon-end full margin-top>\n        DATA LEMBAGA\n        <ion-icon name=\'arrow-forward\'></ion-icon>\n      </button>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/dashboard/dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Tentang Aplikasi</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="assets/imgs/logo_apps_small.png">\n  <p text-center>Aplikasi ini dibangun untuk mempermudah Lembaga dan Instansi terkait mengelola Data Potensi Lembaga Keagamaan di Jawa Barat.</p>\n  <p text-center>Copyright © 2018 Pemerintah Provinsi Jawa Barat.</p>\n  <p text-center><small>Support by Syncard Tech.</small></p>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FormPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormKelembagaanPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FormLegalitasPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return FormSejarahPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FormKepengurusanPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return FormUsahaPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormHirarkiPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FormKoleksiPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FormPrestasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormPage = /** @class */ (function () {
    function FormPage(modalCtrl, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.formPage = [
            FormKelembagaanPage,
            FormLegalitasPage,
            FormSejarahPage,
            FormKepengurusanPage,
            FormUsahaPage,
            FormHirarkiPage,
            FormPrestasiPage,
            FormKoleksiPage
        ];
    }
    FormPage.prototype.openModal = function (index) {
        var modal = this.modalCtrl.create(this.formPage[index]);
        modal.present();
    };
    FormPage.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'Konfirmasi',
            message: 'Apakah Anda ingin menghentikan sesi Lembaga ini?',
            buttons: [
                {
                    text: 'Tidak',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ya',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    FormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/form.html"*/'<ion-content>\n  <h3 padding-left class="text-main">FORM LEMBAGA</h3>\n  <ion-list>\n    <ion-item color=\'light\'>\n      <ion-avatar item-start>\n        <img src="assets/imgs/sample.jpg">\n      </ion-avatar>\n      <h2>Nama lembaganya</h2>\n      <p>Yayasan</p>\n      <ion-buttons item-end>\n        <button ion-button clear (click)="showConfirm()">\n          <ion-icon color="dark" name="md-close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header color="clear">Kelengkapan utama</ion-list-header>\n    <button ion-item (click)="openModal(0)">\n      <ion-icon name="contact" item-start color="primary"></ion-icon>\n      Kelembagaan\n    </button>\n    <button ion-item (click)="openModal(1)">\n      <ion-icon name="paper" item-start color="main"></ion-icon>\n      Legalitas\n    </button>\n  </ion-list>\n  <ion-list>\n    <ion-list-header color="clear">Kelengkapan lainnya</ion-list-header>\n    <button ion-item (click)="openModal(2)">\n      <ion-icon name="time" item-start color="bright"></ion-icon>\n      Sejarah\n    </button>\n    <button ion-item (click)="openModal(3)">\n      <ion-icon name="people" item-start color="vibrant"></ion-icon>\n      Kepengurusan\n    </button>\n    <button ion-item (click)="openModal(4)">\n      <ion-icon name="pricetag" item-start color="primary"></ion-icon>\n      Usaha\n    </button>\n    <!-- <button ion-item (click)="openModal(5)">\n      <ion-icon name="list-box" item-start color="dark"></ion-icon>\n      Hirarki\n    </button> -->\n    <button ion-item (click)="openModal(6)">\n      <ion-icon name="trophy" item-start color="bright"></ion-icon>\n      Prestasi\n    </button>\n    <button ion-item (click)="openModal(7)">\n      <ion-icon name="book" item-start color="secondary"></ion-icon>\n      Koleksi\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FormPage);
    return FormPage;
}());

// FORM Kelembagaan
var FormKelembagaanPage = /** @class */ (function () {
    function FormKelembagaanPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    FormKelembagaanPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormKelembagaanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formKelembagaan',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/kelembagaan.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Form Kelembagaan</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-row class="big-avatar-frame">\n      <div class="big-avatar">\n        <img src="assets/imgs/sample.jpg">\n        <ion-buttons margin-top>\n          <button class="no-shadow" color="bright" ion-button text-capitalize small round>\n            Unggah logo\n          </button>\n        </ion-buttons>\n      </div>\n      <ion-item color="dark" text-center class="big-avatar-frame" padding></ion-item>\n      <ion-item></ion-item>\n    </ion-row>\n  </ion-list>\n  <ion-list padding>\n    <ion-list-header class="text-main no-border-top">Kelembagaan</ion-list-header>\n    <ion-row margin-bottom>\n      <ion-item>\n        <ion-label>Bentuk lembaga (*)</ion-label>\n        <ion-select>\n          <ion-option value="1">Yayasan</ion-option>\n          <ion-option value="2">Pondok pesantren</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Nama lembaga (*)</ion-label>\n        <ion-input type="text" no-border></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Alamat (*)</ion-label>\n        <ion-textarea type="text"></ion-textarea>\n      </ion-item>\n      <ion-col col-6 no-padding>\n        <ion-item class="no-border">\n          <ion-label>RT (*)</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 no-padding>\n        <ion-item class="no-border">\n          <ion-label>RW (*)</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-item>\n        <ion-label>Kelurahan (*)</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Telp (*)</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n      <ion-item class="no-border" margin-bottom>\n        <ion-label>Email (*)</ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-list-header class="text-main">Informasi pendukung</ion-list-header>\n    <ion-row>\n      <ion-item>\n        <ion-label>Bidang gerak</ion-label>\n        <ion-select>\n          <ion-option value="1">Organisasi</ion-option>\n          <ion-option value="2">Pendidikan</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Jumlah pengurus</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>NPWP</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Afiliasi</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Visi</ion-label>\n        <ion-textarea type="text"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Misi</ion-label>\n        <ion-textarea type="text"></ion-textarea>\n      </ion-item>\n      <ion-item class="no-border-child" margin-bottom>\n        <ion-label>Media sosial</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-list-header class="text-main" margin-top>Maps</ion-list-header>\n    <ion-item>\n      <ion-label>Latitude</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item class="no-border">\n      <ion-label>Longitude</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main">\n    <button class="text-white" ion-button block clear>Daftarkan</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/kelembagaan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], FormKelembagaanPage);
    return FormKelembagaanPage;
}());

// FORM Legalitas
var FormLegalitasPage = /** @class */ (function () {
    function FormLegalitasPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.data = [
            { nama_legalitas: 'Akta Notaris' },
            { nama_legalitas: 'SK Kemenhukam' },
        ];
    }
    FormLegalitasPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormLegalitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formLegalitas',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/legalitas.html"*/'<ion-header>\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Form Legalitas</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card margin-top>\n    <ion-list>\n      <ion-row padding>\n        <ion-item text-wrap>\n          <p>Informasi mengenai legalitas yang dimiliki oleh Lembaga terkait.</p>\n          <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n          <ion-icon name="paper" item-end color="main"></ion-icon>\n        </ion-item>\n      </ion-row>\n    </ion-list>\n  </ion-card>\n  <ion-card *ngFor="let d of data" margin-top>\n    <ion-card-header text-uppercase>{{d.nama_legalitas}}</ion-card-header>\n    <ion-card-content no-padding>\n      <ion-list>\n        <ion-item class="border-bottom">\n          <ion-label>Nomor (*)</ion-label>\n          <ion-input type="text" no-border></ion-input>\n        </ion-item>\n        <ion-item class="border-bottom">\n          <ion-label>Tanggal (*)</ion-label>\n          <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n        </ion-item>\n        <ion-item class="border-bottom">\n          <ion-buttons item-start>\n            <button color="bright" ion-button text-capitalize small round>\n              Unggah berkas\n            </button>\n          </ion-buttons>\n          Berkas belum diunggah... \n        </ion-item>\n      </ion-list>\n      <ion-buttons text-center>\n        <button color="main" ion-button full text-capitalize>\n          Simpan\n        </button>\n      </ion-buttons>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/legalitas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], FormLegalitasPage);
    return FormLegalitasPage;
}());

// FORM Sejarah
var FormSejarahPage = /** @class */ (function () {
    function FormSejarahPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    FormSejarahPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormSejarahPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formSejarah',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/sejarah.html"*/'<ion-header>\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Form Sejarah</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row margin-top padding>\n    <ion-item text-wrap>\n      <p>Informasi mengenai sejarah Lembaga terkait.</p>\n      <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n      <ion-icon name="time" item-end color="bright"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sejarah singkat</ion-label>\n      <ion-textarea type="text"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tanggal didirikan</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Kepemelikan</ion-label>\n      <ion-select>\n        <ion-option value="Pribadi">Pribadi</ion-option>\n        <ion-option value="Keluarga">Keluarga</ion-option>\n        <ion-option value="Lembaga">Lembaga</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Status tanah</ion-label>\n      <ion-select>\n        <ion-option value="Sewa">Sewa</ion-option>\n        <ion-option value="Hak milik">Hak milik</ion-option>\n        <ion-option value="Hak guna bangunan">Lembaga</ion-option>\n        <ion-option value="Hak guna pakai">Lembaga</ion-option>\n        <ion-option value="Wakaf">Lembaga</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sertifikasi</ion-label>\n      <ion-select>\n        <ion-option value="Belum">Belum</ion-option>\n        <ion-option value="Sudah">Sudah</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-col col-6 no-padding>\n      <ion-item>\n        <ion-label>Luas Tanah</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6 no-padding>\n      <ion-item>\n        <ion-label>Satuan</ion-label>\n        <ion-select>\n          <ion-option value="Meter persegi">Meter persegi</ion-option>\n          <ion-option value="Hektar">Hektar</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6 no-padding>\n      <ion-item>\n        <ion-label>Luas bangunan</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6 no-padding>\n      <ion-item>\n        <ion-label>Satuan</ion-label>\n        <ion-select>\n          <ion-option value="Meter persegi">Meter persegi</ion-option>\n          <ion-option value="Hektar">Hektar</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-item>\n      <ion-label>Kondisi bangunan</ion-label>\n      <ion-select>\n        <ion-option value="Baik">Baik</ion-option>\n        <ion-option value="Rusak">Rusak</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jumlah bangunan</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sarana / Prasaranan</ion-label>\n      <ion-select>\n        <ion-option value="Ada">Ada</ion-option>\n        <ion-option value="Tidak Ada">Tidak Ada</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bahasa pengantar</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sensus</ion-label>\n      <ion-select>\n        <ion-option value="Belum">Belum</ion-option>\n        <ion-option value="Sudah">Sudah</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bantuan pemerintah</ion-label>\n      <ion-select>\n        <ion-option value="Belum">Belum</ion-option>\n        <ion-option value="Sudah">Sudah</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Kondisi geografis</ion-label>\n      <ion-select>\n        <ion-option value="Pantai">Pantai</ion-option>\n        <ion-option value="Dataran rendah">Dataran rendah</ion-option>\n        <ion-option value="Dataran tinggi">Dataran tinggi</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Potensi wilayah</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jenis wilayah</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item class="no-border" margin-bottom>\n      <ion-label>Catatan</ion-label>\n      <ion-textarea type="text"></ion-textarea>\n    </ion-item>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main">\n    <button class="text-white" ion-button block clear>Simpan</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/sejarah.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], FormSejarahPage);
    return FormSejarahPage;
}());

// FORM Kepengurusan
var FormKepengurusanPage = /** @class */ (function () {
    function FormKepengurusanPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    FormKepengurusanPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormKepengurusanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formKepengurusan',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/kepengurusan.html"*/'<ion-header>\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Form Kepengurusan</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row margin-top padding>\n    <ion-item text-wrap>\n      <p>Informasi mengenai kepengurusan Lembaga terkait.</p>\n      <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n      <ion-icon name="people" item-end color="vibrant"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>Penanggung Jawab</ion-label>\n      <ion-input type="text" no-border></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>No. KTP</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Alamat</ion-label>\n      <ion-textarea type="text"></ion-textarea>\n    </ion-item>\n    <ion-col col-6 no-padding>\n      <ion-item class="no-border">\n        <ion-label>RT</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6 no-padding>\n      <ion-item class="no-border">\n        <ion-label>RW</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-item>\n      <ion-label>Kelurahan</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Telp</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item class="no-border-child">\n      <ion-label>Email</ion-label>\n      <ion-input type="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Warga Negara</ion-label>\n      <ion-select>\n        <ion-option value="1">WNI</ion-option>\n        <ion-option value="2">WNA</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tempat Lahir</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tanggal Lahir</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jenis Kelamin</ion-label>\n      <ion-select>\n        <ion-option value="1">Laki-laki</ion-option>\n        <ion-option value="2">Perempuan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Agama</ion-label>\n      <ion-select>\n        <ion-option value="islam">Islam</ion-option>\n        <ion-option value="kristen">Kristen</ion-option>\n        <ion-option value="hindu">Hindu</ion-option>\n        <ion-option value="budha">Budha</ion-option>\n        <ion-option value="lainnya">Agama lainnya</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jabatan lainnya</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pendidikan</ion-label>\n      <ion-select>\n        <ion-option value="0">SMA / SMK</ion-option>\n        <ion-option value="1">D3</ion-option>\n        <ion-option value="2">S1</ion-option>\n        <ion-option value="3">S2</ion-option>\n        <ion-option value="4">Pendidikan lainnya</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Kompetensi</ion-label>\n      <ion-textarea type="text"></ion-textarea>\n    </ion-item>\n    <ion-item class="no-border" margin-bottom>\n      <ion-label>Catatan</ion-label>\n      <ion-textarea type="text"></ion-textarea>\n    </ion-item>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main" text-center>\n    <button class="text-white" ion-button clear>Simpan</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/kepengurusan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], FormKepengurusanPage);
    return FormKepengurusanPage;
}());

// FORM Usaha
var FormUsahaPage = /** @class */ (function () {
    function FormUsahaPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    FormUsahaPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormUsahaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formUsaha',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/usaha.html"*/'<ion-header>\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Form Usaha</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row margin-top padding>\n    <ion-item text-wrap>\n      <p>Informasi mengenai usaha yang sedang dijalankan oleh Lembaga terkait.</p>\n      <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n      <ion-icon name="pricetag" item-end color="primary"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>Nama usaha</ion-label>\n      <ion-input type="text" no-border></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jenis usaha</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Detail usaha</ion-label>\n      <ion-textarea type="text"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jumlah pekerja</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item margin-bottom>\n      <ion-label>Catatan</ion-label>\n      <ion-textarea type="text"></ion-textarea>\n    </ion-item>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main">\n    <button class="text-white" ion-button block clear>Simpan</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/usaha.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], FormUsahaPage);
    return FormUsahaPage;
}());

// FORM Hirarki
var FormHirarkiPage = /** @class */ (function () {
    function FormHirarkiPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    FormHirarkiPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormHirarkiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formHirarki',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/hirarki.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Form Hirarki</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/hirarki.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], FormHirarkiPage);
    return FormHirarkiPage;
}());

// FORM Koleksi
var FormKoleksiPage = /** @class */ (function () {
    function FormKoleksiPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.data = [
            { noreg: '1', nama_koleksi: 'Koleksi 1', nama_lembaga: 'Lembaga 1', bentuk_lembaga: 'Yayasan' },
            { noreg: '2', nama_koleksi: 'Koleksi 2', nama_lembaga: 'Lembaga 2', bentuk_lembaga: 'Pondok pesantren' },
            { noreg: '3', nama_koleksi: 'Koleksi 3', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
            { noreg: '3', nama_koleksi: 'Koleksi 4', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
        ];
    }
    FormKoleksiPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormKoleksiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formKoleksi',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/koleksi.html"*/'<ion-header>\n  <ion-navbar color=\'dark\' hideBackButton>\n    <ion-title>Form Koleksi</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list padding>\n    <ion-item class="no-border-top" text-wrap>\n      <p>Informasi mengenai koleksi yang dimiliki oleh Lembaga terkait.</p>\n      <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n      <ion-icon name="book" item-end color="secondary"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <p>Total data ({{ data.length }})</p>\n    </ion-item>\n    <button ion-item *ngFor="let d of data">\n      <ion-icon name="book" class="text-secondary" item-start></ion-icon>\n      <h2>{{d.nama_koleksi}}</h2>\n    </button>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="clear">\n    <ion-item class="no-border">\n      <ion-input type="text" placeholder="Tambah koleksi.."></ion-input>\n      <ion-icon item-right name="md-create"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/koleksi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], FormKoleksiPage);
    return FormKoleksiPage;
}());

// FORM Prestasi
var FormPrestasiPage = /** @class */ (function () {
    function FormPrestasiPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.data = [
            { noreg: '1', nama_prestasi: 'Prestasi 1', nama_lembaga: 'Lembaga 1', bentuk_lembaga: 'Yayasan' },
            { noreg: '2', nama_prestasi: 'Prestasi 2', nama_lembaga: 'Lembaga 2', bentuk_lembaga: 'Pondok pesantren' },
            { noreg: '3', nama_prestasi: 'Prestasi 3', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
            { noreg: '3', nama_prestasi: 'Prestasi 4', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
        ];
    }
    FormPrestasiPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormPrestasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formPrestasi',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/prestasi.html"*/'<ion-header>\n  <ion-navbar color=\'dark\' hideBackButton>\n    <ion-title>Form Prestasi</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list padding>\n    <ion-item class="no-border-top" text-wrap>\n      <p>Informasi mengenai prestasi yang dimiliki oleh Lembaga terkait.</p>\n      <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n      <ion-icon name="trophy" item-end color="bright"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <p>Total data ({{ data.length }})</p>\n    </ion-item>\n    <button ion-item *ngFor="let d of data">\n      <ion-icon name="trophy" class="text-bright" item-start></ion-icon>\n      <h2>{{d.nama_prestasi}}</h2>\n    </button>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="clear">\n    <ion-item class="no-border">\n      <ion-input type="text" placeholder="Tambah prestasi.."></ion-input>\n      <ion-icon item-right name="md-create"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/prestasi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], FormPrestasiPage);
    return FormPrestasiPage;
}());

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/search/search.html"*/'<ion-header>\n  <ion-toolbar color=\'main\'> \n    <ion-searchbar placeholder="Pencarian" class="clear"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content></ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_verification_verification__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_prestasi_prestasi__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_koleksi_koleksi__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_news_news__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_inbox_inbox__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_search_search__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_form_form__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_about_about__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["f" /* KelembagaanPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["b" /* KelembagaanFilterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["a" /* KelembagaanDetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["g" /* KelembagaanPrestasiPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["d" /* KelembagaanKoleksiPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["e" /* KelembagaanLegalitasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["h" /* KelembagaanSejarahPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["c" /* KelembagaanKepengurusanPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["i" /* KelembagaanUsahaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_verification_verification__["b" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_verification_verification__["a" /* RevisionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_prestasi_prestasi__["a" /* PrestasiPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_koleksi_koleksi__["a" /* KoleksiPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_news_news__["c" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_news_news__["a" /* NewsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_news_news__["b" /* NewsFormPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_inbox_inbox__["b" /* InboxPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_inbox_inbox__["a" /* InboxDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["b" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["a" /* SettingAccountPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["f" /* FormPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["b" /* FormKelembagaanPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["e" /* FormLegalitasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["h" /* FormSejarahPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["c" /* FormKepengurusanPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["i" /* FormUsahaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["a" /* FormHirarkiPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["g" /* FormPrestasiPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["d" /* FormKoleksiPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_about_about__["a" /* AboutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["f" /* KelembagaanPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["b" /* KelembagaanFilterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["a" /* KelembagaanDetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["g" /* KelembagaanPrestasiPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["d" /* KelembagaanKoleksiPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["e" /* KelembagaanLegalitasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["h" /* KelembagaanSejarahPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["c" /* KelembagaanKepengurusanPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__["i" /* KelembagaanUsahaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_verification_verification__["b" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_verification_verification__["a" /* RevisionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_prestasi_prestasi__["a" /* PrestasiPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_koleksi_koleksi__["a" /* KoleksiPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_news_news__["c" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_news_news__["a" /* NewsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_news_news__["b" /* NewsFormPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_inbox_inbox__["b" /* InboxPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_inbox_inbox__["a" /* InboxDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["b" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["a" /* SettingAccountPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["f" /* FormPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["b" /* FormKelembagaanPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["e" /* FormLegalitasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["h" /* FormSejarahPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["c" /* FormKepengurusanPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["i" /* FormUsahaPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["a" /* FormHirarkiPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["g" /* FormPrestasiPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_form_form__["d" /* FormKoleksiPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    // rootPage = TabsPage;
    // page: Array<{ title: string, component: any }>;
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        // this.nav = nav;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (!localStorage.getItem("token")) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/app/app.html"*/'<ion-nav #contentPage [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NewsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewsFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsPage = /** @class */ (function () {
    function NewsPage(modalCtrl, authService, loadingCtrl, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.page = 1;
        // get initial data
        this.getData();
    }
    NewsPage.prototype.getData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getListPage('berita', this.page).then(function (result) {
            _this.data = result;
            _this.page = _this.page + 1;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    NewsPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        this.authService.getListPage('berita', this.page).then(function (result) {
            var temp;
            temp = result;
            console.log("row : " + temp.length);
            for (var i = 0; i < temp.length; i++) {
                _this.data.push(result[i]);
            }
            infiniteScroll.complete();
            _this.page = _this.page + 1;
        });
    };
    NewsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    NewsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    NewsPage.prototype.openModal = function (newsId) {
        var modal = this.modalCtrl.create(NewsDetailPage, newsId);
        modal.present();
    };
    NewsPage.prototype.openForm = function (newsId) {
        var modal = this.modalCtrl.create(NewsFormPage, newsId);
        modal.present();
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/news/news.html"*/'<ion-header>\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Berita</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openForm()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let d of data" margin-bottom>\n    <img src="http://dplega.yanbangsos.jabarprov.go.id/img/news/{{d.urlGambar}}" />\n    <ion-card-content padding-right>\n      <ion-card-title>{{d.judulBerita}}</ion-card-title>\n      <p margin-bottom><ion-icon name=\'time\'></ion-icon> {{d.createdDate}} oleh <b class="capitalize">{{d.createdBy}}</b></p>\n      <p>{{d.deskripsi}} ...</p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="vibrant" icon-start (click)="openModal(0)">\n          <ion-icon name=\'search\'></ion-icon>\n          Baca berita\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="vibrant" icon-start (click)="openForm()">\n          <ion-icon name=\'md-create\'></ion-icon>\n          Ubah\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="vibrant" icon-start>\n          <ion-icon name=\'trash\'></ion-icon>\n          Hapus\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)="loadData($event)" threshold="100px">\n    <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="Memuat data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/news/news.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], NewsPage);
    return NewsPage;
}());

var NewsDetailPage = /** @class */ (function () {
    function NewsDetailPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NewsDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/news/detail.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Baca berita</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <h1>Nine Inch Nails Live</h1>\n      <p>23:02pm</p>\n    </ion-item>\n    <ion-item><img src="assets/imgs/sample.jpg" /></ion-item>\n    <ion-item text-wrap><p>The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.</p></ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/news/detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], NewsDetailPage);
    return NewsDetailPage;
}());

var NewsFormPage = /** @class */ (function () {
    function NewsFormPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NewsFormPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewsFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/news/form.html"*/'<ion-header class="static">\n  <ion-navbar color=\'dark\' hideBackButton>\n    <ion-title>Form berita</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item><p>Catatan : Setiap poin pada form ini wajib diisi.</p></ion-item>\n    <ion-item>\n      <img src="assets/imgs/sample.jpg">\n      <ion-buttons margin-top>\n        <button class="no-shadow" color="bright" ion-button text-capitalize small round>\n          Unggah gambar\n        </button>\n      </ion-buttons>\n    </ion-item>\n    <ion-item>\n      <ion-label>Judul berita</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item class="no-border">\n      <ion-label>Isi berita</ion-label>\n      <ion-textarea type="text"></ion-textarea>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main" text-center>\n    <button class="text-white" ion-button clear>Simpan</button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/news/form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], NewsFormPage);
    return NewsFormPage;
}());

//# sourceMappingURL=news.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map