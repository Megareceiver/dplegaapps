webpackJsonp([0],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inbox_inbox__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_form__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__kelembagaan_kelembagaan__ = __webpack_require__(15);
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
        this.lembaga = __WEBPACK_IMPORTED_MODULE_7__kelembagaan_kelembagaan__["a" /* KelembagaanDetailPage */];
        this.inboxCounter = 0;
        this.userLevel = "";
        this.getCountInbox();
        this.userLevel = localStorage.getItem('userLevel');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/tabs/tabs.html"*/'<ion-tabs color=\'dark\'>\n  <ion-tab  [root]="lembaga" tabIcon="home" *ngIf="userLevel == \'1\'"></ion-tab>\n  <ion-tab [root]="home" tabIcon="home" *ngIf="userLevel != \'1\'"></ion-tab>\n  <ion-tab [root]="inbox" tabIcon="notifications" *ngIf="userLevel != \'\'" tabBadge="{{inboxCounter != \'0\' ? inboxCounter : \'\'}}" tabBadgeStyle="bright"></ion-tab>\n  <ion-tab [root]="search" tabIcon="search" *ngIf="userLevel != \'\'"></ion-tab>\n  <ion-tab [root]="form" tabIcon="add" *ngIf="userLevel != \'1\' && userLevel != \'2\'"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
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
    PrestasiPage.prototype.goSearch = function () {
        this.navCtrl.parent.select(2);
    };
    PrestasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-prestasi',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/prestasi/prestasi.html"*/'<ion-header>\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Prestasi</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list>\n    <ion-item>\n      <p>Total data ({{ summary }})</p>\n    </ion-item>\n    <button ion-item *ngFor="let d of data" padding-right>\n      <ion-icon name="trophy" class="text-bright" item-start></ion-icon>\n      <h3 text-wrap>{{d.deskripsi}}</h3>\n      <p text-nowrap>{{d.namaBentukLembaga}} {{d.nama}}</p>\n    </button>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadData($event)" threshold="100px">\n    <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="Memuat data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/prestasi/prestasi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PrestasiPage);
    return PrestasiPage;
}());

//# sourceMappingURL=prestasi.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KoleksiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
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
    KoleksiPage.prototype.goSearch = function () {
        this.navCtrl.parent.select(2);
    };
    KoleksiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-koleksi',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/koleksi/koleksi.html"*/'<ion-header>\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Koleksi</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <p>Total data ({{ summary }})</p>\n    </ion-item>\n    <button ion-item *ngFor="let d of data" padding-right>\n      <ion-icon name="book" class="text-secondary" item-start></ion-icon>\n      <h3 text-wrap>({{d.jenisKoleksi}}) {{d.judulKoleksi}}</h3>\n      <p text-nowrap>{{d.namaBentukLembaga}} {{d.nama}}</p>\n    </button>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadData($event)" threshold="100px">\n    <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="Memuat data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/koleksi/koleksi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], KoleksiPage);
    return KoleksiPage;
}());

//# sourceMappingURL=koleksi.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InboxPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
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
        this.countData = 0;
        this.getData();
    }
    InboxPage.prototype.openModal = function (inboxId) {
        var modal = this.modalCtrl.create(InboxDetailPage, { inboxId: inboxId });
        modal.present();
    };
    InboxPage.prototype.getData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getListNotifications().then(function (result) {
            _this.data = result;
            _this.countData = Object.keys(_this.data).length;
            if (_this.countData > 0) {
                _this.dataClone = _this.data;
                _this.dataClone[-1] = { tanggal: 'start' };
            }
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
            selector: 'page-inbox',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/inbox/inbox.html"*/'<ion-content>\n  <h3 padding-left class="text-main">KOTAK MASUK</h3>\n  <ion-list>\n    <ion-item-group>\n      <div  *ngFor="let d of data; let idx = index;">\n        <ion-list-header color="light" *ngIf="d.tanggal != dataClone[idx-1].tanggal"> {{d.tanggal | date:\'yyyy MMM dd\'}}</ion-list-header>\n        <ion-item-sliding>\n          <button ion-item (click)="openModal(d.idData)">\n            <ion-icon name="notifications" color="{{d.statusBaca == \'0\' ? \'bright\' : \'light\'}}" item-start></ion-icon>\n            <h2 class="{{d.statusBaca == \'0\' ? \'text-main\' : \'\'}}">{{d.judul}}</h2>\n            <!-- <h3>{{d.waktu}}</h3> -->\n            <p text-nowrap>{{d.deskripsi}}</p>\n            <ion-note item-end>{{d.jam}}</ion-note>\n          </button>\n          <ion-item-options side="right">\n            <button ion-button color="danger">Hapus</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </div>\n    </ion-item-group>\n  </ion-list>\n\n  <div *ngIf="countData == 0 || countData == null" class="empty-frame">\n    <ion-icon color="light" name="notifications" class="icon-big"></ion-icon>\n    <p>Belum ada pesan.</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/inbox/inbox.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], InboxPage);
    return InboxPage;
}());

var InboxDetailPage = /** @class */ (function () {
    function InboxDetailPage(platform, params, viewCtrl, authService, modalCtrl, loadingCtrl, toastCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.idData = "";
        this.filterWilayah = "";
        this.filterKecamatan = "";
        this.filterKelurahan = "";
        this.filterStatus = "";
        this.data = {
            judul: "",
            subjek: "",
            deskripsi: "",
            waktu: "",
            statusBaca: "",
            timestamp: "",
            tanggal: "",
            jam: "",
            createdBy: ""
        };
        this.idData = params.get('inboxId');
        this.loadData();
    }
    InboxDetailPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getNotifications(this.idData).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    InboxDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    InboxDetailPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    InboxDetailPage.prototype.presentToast = function (msg) {
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
    InboxDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detailInbox',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/inbox/detail.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Baca pesan</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item-group margin-top>\n    <ion-item-divider>Judul : {{ data.judul }}</ion-item-divider>\n    <ion-item-divider>Subjek : {{ data.subjek }}</ion-item-divider>\n    <ion-item-divider>Waktu : {{ data.tanggal | date:\'yyyy MMM dd\' }} {{ data.jam }}</ion-item-divider>\n    <ion-item text-wrap>{{ data.deskripsi }}</ion-item>\n  </ion-item-group>\n</ion-content>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/inbox/detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], InboxDetailPage);
    return InboxDetailPage;
}());

//# sourceMappingURL=inbox.js.map

/***/ }),

/***/ 12:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_location_accuracy__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_chooser__ = __webpack_require__(214);
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
    function FormPage(modalCtrl, alertCtrl, events, authService) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.authService = authService;
        this.session_noRegistrasi = null;
        this.session_nama = null;
        this.session_namaBentukLembaga = null;
        this.session_urlGambarLogo = null;
        this.urlServer = "";
        this.userLevel = "";
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
        this.userLevel = localStorage.getItem('userLevel');
        this.urlServer = authService.urlServer;
        this.refreshData();
        events.subscribe('formPage:reload', function () {
            _this.refreshData();
        });
    }
    FormPage.prototype.refreshData = function () {
        if (localStorage.getItem("session-add-noRegistrasi") != "null") {
            this.session_noRegistrasi = localStorage.getItem("session-add-noRegistrasi");
            this.session_nama = localStorage.getItem("session-add-nama");
            this.session_namaBentukLembaga = localStorage.getItem("session-add-namaBentukLembaga");
            this.session_urlGambarLogo = localStorage.getItem("session-add-urlGambarLogo");
        }
    };
    FormPage.prototype.openModal = function (index) {
        var modal;
        if (this.session_noRegistrasi === null) {
            modal = this.modalCtrl.create(this.formPage[index]);
        }
        else {
            modal = this.modalCtrl.create(this.formPage[index], { noRegistrasi: this.session_noRegistrasi, namaLembaga: this.session_namaBentukLembaga + " " + this.session_nama });
        }
        modal.present();
    };
    FormPage.prototype.showConfirm = function () {
        var _this = this;
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
                        localStorage.setItem("session-add-noRegistrasi", null);
                        localStorage.setItem("session-add-nama", null);
                        localStorage.setItem("session-add-namaBentukLembaga", null);
                        localStorage.setItem("session-add-urlGambarLogo", null);
                        _this.session_noRegistrasi = null;
                        _this.session_nama = null;
                        _this.session_namaBentukLembaga = null;
                        _this.session_urlGambarLogo = null;
                    }
                }
            ]
        });
        confirm.present();
    };
    FormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/form.html"*/'<ion-content>\n  <h3 padding-left class="text-main">FORM LEMBAGA</h3>\n  <ion-list>\n    <ion-item color=\'light\' [hidden]="session_noRegistrasi === null">\n      <ion-avatar item-start>\n        <img src="{{urlServer}}/img/logo/{{session_urlGambarLogo}}">\n      </ion-avatar>\n      <h2>{{ session_nama }}</h2>\n      <p>{{ session_namaBentukLembaga }}</p>\n      <ion-buttons item-end>\n        <button ion-button clear (click)="showConfirm()">\n          <ion-icon color="dark" name="md-close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-item>\n    <ion-item [hidden]="session_noRegistrasi != null" text-wrap class="no-border">\n      Data lembaga dibuat melalui menu kelembagaan, legalitas dan kelengkapan lainnya dapat diakses setelah data kelembagaan dibuat.\n    </ion-item>\n    <ion-list-header color="clear">Kelengkapan utama</ion-list-header>\n    <button ion-item (click)="openModal(0)">\n      <ion-icon name="contact" item-start color="primary"></ion-icon>\n      Kelembagaan\n    </button>\n    <button ion-item (click)="openModal(1)" [disabled]="session_noRegistrasi === null">\n      <ion-icon name="paper" item-start color="main"></ion-icon>\n      Legalitas\n    </button>\n  </ion-list>\n  <ion-list>\n    <ion-list-header color="clear">Kelengkapan lainnya</ion-list-header>\n    <button ion-item (click)="openModal(2)" [disabled]="session_noRegistrasi === null">\n      <ion-icon name="time" item-start color="bright"></ion-icon>\n      Sejarah\n    </button>\n    <button ion-item (click)="openModal(3)" [disabled]="session_noRegistrasi === null">\n      <ion-icon name="people" item-start color="vibrant"></ion-icon>\n      Kepengurusan\n    </button>\n    <button ion-item (click)="openModal(4)" [disabled]="session_noRegistrasi === null">\n      <ion-icon name="pricetag" item-start color="primary"></ion-icon>\n      Usaha\n    </button>\n    <!-- <button ion-item (click)="openModal(5)">\n      <ion-icon name="list-box" item-start color="dark"></ion-icon>\n      Hirarki\n    </button> -->\n    <button ion-item (click)="openModal(6)" [disabled]="session_noRegistrasi === null">\n      <ion-icon name="trophy" item-start color="bright"></ion-icon>\n      Prestasi\n    </button>\n    <button ion-item (click)="openModal(7)" [disabled]="session_noRegistrasi === null">\n      <ion-icon name="book" item-start color="secondary"></ion-icon>\n      Koleksi\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
    ], FormPage);
    return FormPage;
}());

// FORM Kelembagaan
var FormKelembagaanPage = /** @class */ (function () {
    function FormKelembagaanPage(params, viewCtrl, authService, loadingCtrl, toastCtrl, geolocation, locationAccuracy, camera, transfer, file, filePath, actionSheetCtrl, platform, navCtrl, events) {
        var _this = this;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.locationAccuracy = locationAccuracy;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.events = events;
        this.urlServer = "";
        this.urlApi = "";
        this.userLevel = "";
        this.data = {
            noRegistrasi: "",
            avatar: null,
            nama: "",
            alamat: "",
            telp: "",
            email: "",
            username: "",
            noRt: "",
            noRw: "",
            kodeKelurahan: "",
            kodeKecamatan: "",
            kodeWilayah: "",
            statusVerifikasi: "",
            kodeBentukLembaga: "",
            namaBentukLembaga: "",
            mediaSosial: "",
            langitude: "",
            latitude: "",
            noNpwp: "",
            jumlahPengurus: "",
            visiLembaga: "",
            misiLembaga: "",
            organisasiAfiliasi: "",
            namaBidangGerak: "",
            alamat_: "",
            kodeBidangGerak: "",
            catatanLain: ""
        };
        this.optionChange = {
            kodeKelurahan: "",
            kodeKecamatan: "",
            kodeWilayah: ""
        };
        this.flag = "init";
        this.lastImage = null;
        this.random_ = Math.floor(Math.random() * 20) + 1;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () { return console.log('Accuration Request successful'); }, function (error) { return console.log('Error requesting location permissions', error); });
            }
        }, function (err) {
            console.log(err);
        });
        this.userLevel = localStorage.getItem('userLevel');
        this.urlServer = authService.urlServer;
        this.noRegistrasi = (params.get('noRegistrasi') != undefined ? params.get('noRegistrasi') : '');
        this.loadInit();
    }
    FormKelembagaanPage.prototype.loadInit = function () {
        var _this = this;
        this.showLoader();
        this.authService.getOptionList('bentuk-lembaga').then(function (result) {
            _this.bentukLembaga = result;
            _this.authService.getOptionList('bidang-gerak').then(function (result) {
                _this.bidangGerak = result;
                _this.authService.getOptionList('wilayah').then(function (result) {
                    _this.wilayah = result;
                    if (_this.noRegistrasi != null && _this.noRegistrasi != '') {
                        _this.authService.getDetailLembaga(_this.noRegistrasi).then(function (result) {
                            _this.temp = result;
                            _this.data = _this.temp;
                            _this.loading.dismiss();
                        }, function (err) {
                            _this.loading.dismiss();
                            _this.presentToast(err);
                            return false;
                        });
                    }
                    else {
                        _this.loading.dismiss();
                    }
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
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    FormKelembagaanPage.prototype.loadKecamatan = function (idWilayah) {
        var _this = this;
        if (idWilayah != "") {
            this.authService.getOptionList('kecamatan', idWilayah).then(function (result) {
                _this.kecamatan = result;
                if (_this.flag != "init")
                    _this.data.kodeKelurahan = "";
            }, function (err) {
                _this.presentToast(err);
                return false;
            });
        }
        else {
            this.kecamatan = [];
            this.kelurahan = [];
            this.data.kodeKecamatan = "";
            this.data.kodeKelurahan = "";
        }
    };
    FormKelembagaanPage.prototype.loadKelurahan = function (idKecamatan) {
        var _this = this;
        if (idKecamatan != "") {
            this.authService.getOptionList('kelurahan', idKecamatan).then(function (result) {
                _this.kelurahan = result;
                _this.flag = "end";
            }, function (err) {
                _this.presentToast(err);
                return false;
            });
        }
        else {
            this.kelurahan = [];
            this.data.kodeKelurahan = "";
        }
    };
    FormKelembagaanPage.prototype.getCurrentLocation = function () {
        var _this = this;
        console.log('trying to get location');
        var options = {
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 0
        };
        this.geolocation.getCurrentPosition(options).then(function (resp) {
            console.log(resp);
            _this.data.latitude = resp.coords.latitude.toString();
            _this.data.langitude = resp.coords.longitude.toString();
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            console.log('trying to get location :: from watchposition');
            console.log(data);
            // this.data.latitude = data.coords.latitude.toString();
            // this.data.langitude = data.coords.longitude.toString();
            // data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
        });
    };
    FormKelembagaanPage.prototype.updateLembaga = function () {
        var _this = this;
        this.data.noRegistrasi = this.noRegistrasi;
        this.showLoader();
        this.authService.updateDataLembaga('', this.data).then(function (result) {
            _this.temp = result;
            if (_this.temp.status == 'success') {
                _this.dismiss();
                _this.presentToast('Data kelembagaan berhasil diperbarui.');
            }
            else {
                _this.presentToast('Data kelembagaan gagal diperbarui, periksa kembali inputan Anda!');
            }
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    FormKelembagaanPage.prototype.insertLembaga = function () {
        var _this = this;
        if (this.data.kodeBentukLembaga == "" ||
            this.data.nama == "" ||
            this.data.alamat_ == "" ||
            this.data.noRt == "" ||
            this.data.noRw == "" ||
            this.data.kodeWilayah == "" ||
            this.data.kodeKecamatan == "" ||
            this.data.kodeKelurahan == "" ||
            this.data.telp == "" ||
            this.data.email == "") {
            this.presentToast("Harap mengisi semua poin yang ditandai (*).");
            return false;
        }
        this.showLoader();
        this.authService.insertNewLembaga(this.data).then(function (result) {
            _this.temp = result;
            if (_this.temp.status == 'success') {
                _this.dismiss();
                _this.presentToast('Data kelembagaan berhasil didaftarkan.');
                if (_this.userLevel == "7" || _this.userLevel == "3") {
                    localStorage.setItem("session-add-noRegistrasi", _this.temp.noRegistrasi);
                    localStorage.setItem("session-add-nama", _this.temp.nama);
                    localStorage.setItem("session-add-namaBentukLembaga", _this.temp.namaBentukLembaga);
                    localStorage.setItem("session-add-urlGambarLogo", _this.temp.urlGambarLogo);
                    _this.events.publish('formPage:reload');
                }
            }
            else {
                _this.presentToast('Data kelembagaan gagal didaftarkan, periksa kembali inputan Anda!');
            }
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    FormKelembagaanPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormKelembagaanPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    FormKelembagaanPage.prototype.presentToast = function (msg) {
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
    // UPLOAD package
    FormKelembagaanPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Pilih gambar',
            buttons: [
                {
                    text: 'Galeri',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Kamera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Batalkan',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    FormKelembagaanPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Terjadi kesalahan : Error saat memilih gambar!.');
        });
    };
    // Create a new name for the image
    FormKelembagaanPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    FormKelembagaanPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            _this.uploadImage();
        }, function (error) {
            _this.presentToast('Terjadi kesalahan : Error saat menyimpan gambar!.');
        });
    };
    // Always get the accurate path to your apps folder
    FormKelembagaanPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    FormKelembagaanPage.prototype.uploadImage = function () {
        var _this = this;
        // Destination URL
        var url = this.urlApi + "/public/upload/lembaga/logo/";
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.lastImage;
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'filename': filename, 'noRegistrasi': this.noRegistrasi }
        };
        console.log(targetPath);
        console.log(options);
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            console.log(data);
            _this.loading.dismissAll();
            _this.presentToast('Logo berhasil diubah.');
            // this.uploadData = data;
            // this.uploadData.response = JSON.parse(this.uploadData.response);
            // this.data.avatar = this.uploadData.response.filename;
            // this.random_ = Math.floor(Math.random() * 20) + 1;
        }, function (err) {
            console.log(err);
            _this.loading.dismissAll();
            _this.presentToast('Terjadi kesalahan! gagal mengubah logo.');
        });
    };
    FormKelembagaanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formKelembagaan',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/kelembagaan.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Form Kelembagaan</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf="noRegistrasi != \'\'">\n    <ion-row class="big-avatar-frame">\n      <div class="big-avatar">\n        <!-- <img src="lastImage" [hidden]="lastImage === null"> -->\n        <img src="{{urlServer}}/img/logo/{{data.avatar}}?random={{random_}}" [hidden]="data.avatar === null && data.avatar != \'\'">\n        <img src="{{urlServer}}/img/logo/avatar-1.jpg" [hidden]="noRegistrasi != \'\' && noRegistrasi != null">\n        <ion-buttons margin-top>\n          <button (click)="presentActionSheet()" class="no-shadow" color="bright" ion-button text-capitalize small round>\n            Unggah logo\n          </button>\n        </ion-buttons>\n      </div>\n      <ion-item color="dark" text-center class="big-avatar-frame" padding></ion-item>\n      <ion-item></ion-item>\n    </ion-row>\n  </ion-list>\n  <ion-list padding>\n    <ion-list-header class="text-main no-border-top">Kelembagaan</ion-list-header>\n    <!-- <ion-note>Catatan : Wajib mengisi semua poin yang ditandai (*).</ion-note> -->\n    <ion-row margin-bottom>\n      <ion-item>\n        <ion-label>Bentuk lembaga (*)</ion-label>\n        <ion-select [(ngModel)]="data.kodeBentukLembaga" disabled="{{ noRegistrasi != \'\' && noRegistrasi != null }}">\n          <ion-option *ngFor="let d of bentukLembaga" value="{{ d.value }}" selected="{{ data.kodeBentukLembaga == d.value ? selected : \'\' }}">{{ d.caption }}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Nama lembaga (*)</ion-label>\n        <ion-input text-right [(ngModel)]="data.nama" type="text" no-border></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Alamat (*)</ion-label>\n        <ion-textarea [(ngModel)]="data.alamat_" type="text"></ion-textarea>\n      </ion-item>\n      <ion-col col-6 no-padding>\n        <ion-item class="no-border-1-layer">\n          <ion-label>RT (*)</ion-label>\n          <ion-input [(ngModel)]="data.noRt" type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 no-padding>\n        <ion-item class="no-border-1-layer">\n          <ion-label>RW (*)</ion-label>\n          <ion-input [(ngModel)]="data.noRw" type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-item>\n        <ion-label>Wilayah (*)</ion-label>\n        <ion-select [(ngModel)]="data.kodeWilayah" (ionChange)="loadKecamatan(data.kodeWilayah)">\n          <ion-option value="" selected="{{data.wilayah == \'\' ? selected : \'\' }}"></ion-option>\n          <ion-option *ngFor="let d of wilayah" value="{{ d.value }}" selected="{{data.kodeWilayah == d.value ? selected : \'\' }}">{{d.caption\n            }}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Kecamatan (*)</ion-label>\n        <ion-select [(ngModel)]="data.kodeKecamatan" (ionChange)="loadKelurahan(data.kodeKecamatan)">\n          <ion-option value="" selected="{{data.kecamatan == \'\' ? selected : \'\' }}"></ion-option>\n          <ion-option *ngFor="let d of kecamatan" value="{{ d.value }}" selected="{{data.kodeKecamatan == d.value ? selected : \'\' }}">{{d.caption\n            }}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Kelurahan (*)</ion-label>\n        <ion-select [(ngModel)]="data.kodeKelurahan">\n          <ion-option value="" selected="{{data.kelurahan == \'\' ? selected : \'\' }}"></ion-option>\n          <ion-option *ngFor="let d of kelurahan" value="{{ d.value }}" selected="{{data.kodeKelurahan == d.value ? selected : \'\' }}">{{d.caption\n            }}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Telp (*)</ion-label>\n        <ion-input text-right [(ngModel)]="data.telp" type="text"></ion-input>\n      </ion-item>\n      <ion-item class="no-border" margin-bottom>\n        <ion-label>Email (*)</ion-label>\n        <ion-input text-right [(ngModel)]="data.email" type="email"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-list-header class="text-main">Informasi pendukung</ion-list-header>\n    <ion-row>\n      <ion-item>\n        <ion-label>Bidang gerak</ion-label>\n        <ion-select [(ngModel)]="data.kodeBidangGerak">\n          <ion-option value="" selected="{{data.kodeBidangGerak == \'\' ? selected : \'\' }}">Semua</ion-option>\n          <ion-option *ngFor="let d of bidangGerak" value="{{ d.value }}" selected="{{data.kodeBidangGerak == d.value ? selected : \'\' }}">{{\n            d.caption }}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Jumlah pengurus</ion-label>\n        <ion-input text-right [(ngModel)]="data.jumlahPengurus" type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>NPWP</ion-label>\n        <ion-input [(ngModel)]="data.noNpwp" type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Afiliasi</ion-label>\n        <ion-input text-right [(ngModel)]="data.organisasiAfiliasi" type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Visi</ion-label>\n        <ion-textarea [(ngModel)]="data.visiLembaga" type="text"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Misi</ion-label>\n        <ion-textarea [(ngModel)]="data.misiLembaga" type="text"></ion-textarea>\n      </ion-item>\n      <ion-item class="no-border-child" margin-bottom>\n        <ion-label>Media sosial</ion-label>\n        <ion-input text-right [(ngModel)]="data.mediaSosial" type="text"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-list-header class="text-main" margin-top>Maps</ion-list-header>\n    <ion-item>\n      <ion-label>Latitude</ion-label>\n      <ion-input text-right [(ngModel)]="data.latitude" type="text"></ion-input>\n    </ion-item>\n    <ion-item class="no-border">\n      <ion-label>Longitude</ion-label>\n      <ion-input text-right [(ngModel)]="data.langitude" type="text"></ion-input>\n    </ion-item>\n    <button (click)="getCurrentLocation()" text-center ion-item icon-start margin-top>\n      <ion-icon name=\'locate\'></ion-icon>\n      Ambil posisi saat ini.\n    </button>\n  </ion-list>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main">\n    <button *ngIf="noRegistrasi == \'\'" (click)="insertLembaga()" class="text-white" ion-button block clear>Daftarkan</button>\n    <button *ngIf="noRegistrasi != \'\'" (click)="updateLembaga()" class="text-white" ion-button block clear>Simpan</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/kelembagaan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], FormKelembagaanPage);
    return FormKelembagaanPage;
}());

// FORM Legalitas
var FormLegalitasPage = /** @class */ (function () {
    function FormLegalitasPage(params, viewCtrl, authService, loadingCtrl, toastCtrl, fileChooser, filePath, transfer, alertCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.transfer = transfer;
        this.alertCtrl = alertCtrl;
        this.urlServer = "";
        this.urlApi = "";
        this.chooserDumb = [];
        this.urlApi = authService.urlApi;
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('noRegistrasi');
        this.namaLembaga = params.get('namaLembaga');
        this.loadInit();
    }
    FormLegalitasPage.prototype.loadInit = function () {
        var _this = this;
        this.authService.getKelengkapanLembaga('legalitas-form', this.noRegistrasi).then(function (result) {
            if (result != false) {
                _this.data = result;
                _this.formData = result;
            }
        }, function (err) {
            _this.presentToast(err);
            return false;
        });
    };
    FormLegalitasPage.prototype.openChooser = function (index) {
        var _this = this;
        this.fileChooser.open().then(function (uri) {
            _this.filePath.resolveNativePath(uri).then(function (filePathResolved) {
                console.log('resolved' + filePathResolved);
                console.log('uri' + uri);
                _this.chooserDumb[index] = {
                    uri: uri,
                    resolved: filePathResolved,
                    filename: filePathResolved.substring(filePathResolved.lastIndexOf('/') + 1)
                };
            }).catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    FormLegalitasPage.prototype.updateLembaga = function (index) {
        var _this = this;
        console.log(this.formData[index]);
        if (this.formData[index].statusVerifikasi == '1') {
            var confirm_1 = this.alertCtrl.create({
                title: 'Konfirmasi',
                message: 'Mengubah legalitas akan mengubah status legalitas menjadi "Belum verifikasi", Apa Anda yakin mengubah legalitas?',
                buttons: [
                    {
                        text: 'Tidak',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Ya',
                        handler: function () {
                            _this.updateLembaga_(index);
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            this.updateLembaga_(index);
        }
    };
    FormLegalitasPage.prototype.updateLembaga_ = function (index) {
        var _this = this;
        this.formData[index].noRegistrasi = this.noRegistrasi;
        this.formData[index].filename = "";
        if (this.chooserDumb[index] == undefined) {
            this.chooserDumb[index] = {
                uri: '',
                resolved: '',
                filename: ''
            };
        }
        if (this.chooserDumb[index].filename != "") {
            console.log('upload file');
            // Destination URL
            var url = this.urlApi + "/public/update/lembaga/legalitas";
            // File for Upload
            var targetPath = this.chooserDumb[index].uri;
            // File name only
            var filename = this.chooserDumb[index].filename;
            this.formData[index].filename = filename;
            var options = {
                fileKey: "file",
                fileName: filename,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: this.formData[index]
            };
            var fileTransfer = this.transfer.create();
            this.loading = this.loadingCtrl.create({
                content: 'Uploading...',
            });
            this.loading.present();
            // Use the FileTransfer to upload the image
            fileTransfer.upload(targetPath, url, options).then(function (data) {
                console.log('--- hasil upload');
                console.log(data);
                _this.loading.dismissAll();
                _this.presentToast('Data legalitas berhasil diperbarui.');
                _this.dismiss();
            }, function (err) {
                console.log(err);
                _this.loading.dismissAll();
                _this.presentToast('Data legalitas gagal diperbarui, periksa kembali inputan Anda!');
            });
        }
        else {
            console.log('gk upload file');
            this.showLoader();
            this.authService.updateDataLembaga('legalitas', this.formData[index]).then(function (result) {
                _this.temp = result;
                console.log(result);
                if (_this.temp.status == 'success') {
                    _this.presentToast('Data legalitas berhasil diperbarui.');
                    _this.dismiss();
                }
                else {
                    _this.presentToast('Data legalitas gagal diperbarui, periksa kembali inputan Anda!');
                }
                _this.loading.dismiss();
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
                return false;
            });
        }
        this.chooserDumb[index] = {
            uri: '',
            resolved: '',
            filename: ''
        };
    };
    FormLegalitasPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormLegalitasPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    FormLegalitasPage.prototype.presentToast = function (msg) {
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
    FormLegalitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formLegalitas',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/legalitas.html"*/'<ion-header>\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Form Legalitas</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card margin-top>\n    <ion-list>\n      <ion-row padding>\n        <ion-item text-wrap>\n          <p>Informasi mengenai legalitas yang dimiliki oleh Lembaga terkait.</p>\n          <p class="text-main"><b>{{namaLembaga}}.</b></p>\n          <ion-icon name="paper" item-end color="main"></ion-icon>\n        </ion-item>\n      </ion-row>\n    </ion-list>\n  </ion-card>\n  <ion-card *ngFor="let d of data;let i=index" margin-top>\n    <ion-card-header>\n      <span text-uppercase>{{d.namaPersyaratan}}</span> &nbsp;\n      <span class="text-{{d.statusVerifikasi == \'1\' ? \'secondary\' : \'danger\'}}">({{d.statusVerifikasi == \'1\' ? \'Sudah Verifikasi\' : \'Belum verifikasi\'}})</span>\n    </ion-card-header>\n    <ion-card-content no-padding>\n      <ion-list>\n        <ion-item class="border-bottom">\n          <ion-label>Nomor (*)</ion-label>\n          <ion-input text-right [(ngModel)]="formData[i].noLegalitas" type="text" no-border></ion-input>\n        </ion-item>\n        <ion-item class="border-bottom">\n          <ion-label>Tanggal (*)</ion-label>\n          <ion-datetime [(ngModel)]="formData[i].tanggalLegalitas" displayFormat="DD/MM/YYYY"></ion-datetime>\n        </ion-item>\n        <ion-item class="border-bottom">\n          <ion-buttons item-start>\n            <button (click)="openChooser(i)" color="bright" ion-button text-capitalize small round>Unggah berkas</button>\n          </ion-buttons>\n          <span *ngIf="d.urlFile == \'\'">Berkas belum diunggah...</span>\n          <span *ngIf="d.urlFile != \'\'">{{d.urlFile}}</span>\n        </ion-item>\n      </ion-list>\n      <ion-buttons text-center>\n        <button color="main" (click)="updateLembaga(i)" ion-button full>Simpan</button>\n      </ion-buttons>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/legalitas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], FormLegalitasPage);
    return FormLegalitasPage;
}());

// FORM Sejarah
var FormSejarahPage = /** @class */ (function () {
    function FormSejarahPage(params, viewCtrl, authService, loadingCtrl, toastCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.urlServer = "";
        this.data = {
            noRegistrasi: "",
            deskripsi: "",
            tanggalDidirikan: "",
            kepemilikan: "",
            statusTanah: "",
            statusSertifikasi: "",
            luasTanah: "",
            satuanLuasTanah: "",
            luasBangunan: "",
            satuanLuasBangunan: "",
            kondisiBangunan: "",
            JumlahBangunan: "",
            statusSarana: "",
            statusStrukturKepengurusan: "",
            urlGambarStrukturKepengurusan: "",
            bahasaPengantar: "",
            statusSensus: "",
            statusBantuanPemerintah: "",
            kondisiGeografis: "",
            potensiWilayah: "",
            jenisWilayah: "",
            catatanLain: "",
        };
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('noRegistrasi');
        this.namaLembaga = params.get('namaLembaga');
        this.loadInit();
    }
    FormSejarahPage.prototype.loadInit = function () {
        var _this = this;
        this.authService.getKelengkapanLembaga('sejarah', this.noRegistrasi).then(function (result) {
            if (result != false) {
                _this.temp = result;
                _this.data = _this.temp;
            }
        }, function (err) {
            _this.presentToast(err);
            return false;
        });
    };
    FormSejarahPage.prototype.updateLembaga = function () {
        var _this = this;
        this.data.noRegistrasi = this.noRegistrasi;
        this.showLoader();
        this.authService.updateDataLembaga('sejarah', this.data).then(function (result) {
            _this.temp = result;
            if (_this.temp.status == 'success') {
                _this.dismiss();
                _this.presentToast('Data sejarah berhasil diperbarui.');
            }
            else {
                _this.presentToast('Data sejarah gagal diperbarui, periksa kembali inputan Anda!');
            }
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    FormSejarahPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormSejarahPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    FormSejarahPage.prototype.presentToast = function (msg) {
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
    FormSejarahPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formSejarah',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/sejarah.html"*/'<ion-header>\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Form Sejarah</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row margin-top padding>\n    <ion-item text-wrap>\n      <p>Informasi mengenai sejarah Lembaga terkait.</p>\n      <p class="text-main"><b>{{namaLembaga}}.</b></p>\n      <ion-icon name="time" item-end color="bright"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sejarah singkat</ion-label>\n      <ion-textarea [(ngModel)]="data.deskripsi" type="text"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tanggal didirikan</ion-label>\n      <ion-datetime [(ngModel)]="data.tanggalDidirikan" displayFormat="DD/MM/YYYY"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Kepemelikan</ion-label>\n      <ion-select [(ngModel)]="data.kepemilikan">\n        <ion-option value="Pribadi" selected="{{data.kepemilikan == \'Pribadi\' ? selected : \'\' }}">Pribadi</ion-option>\n        <ion-option value="Keluarga" selected="{{data.kepemilikan == \'Keluarga\' ? selected : \'\' }}">Keluarga</ion-option>\n        <ion-option value="Lembaga" selected="{{data.kepemilikan == \'Lembaga\' ? selected : \'\' }}">Lembaga</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Status tanah</ion-label>\n      <ion-select [(ngModel)]="data.statusTanah">\n        <ion-option value="Sewa" selected="{{data.statusTanah == \'Sewa\' ? selected : \'\' }}">Sewa</ion-option>\n        <ion-option value="Hak milik" selected="{{data.statusTanah == \'Hak milik\' ? selected : \'\' }}">Hak milik</ion-option>\n        <ion-option value="Hak guna bangunan" selected="{{data.statusTanah == \'Hak guna bangunan\' ? selected : \'\' }}">Hak guna bangunan</ion-option>\n        <ion-option value="Hak guna pakai" selected="{{data.statusTanah == \'Hak guna pakai\' ? selected : \'\' }}">Hak guna pakai</ion-option>\n        <ion-option value="Wakaf" selected="{{data.statusTanah == \'Wakaf\' ? selected : \'\' }}">Wakaf</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sertifikasi</ion-label>\n      <ion-select [(ngModel)]="data.statusSertifikasi">\n        <ion-option value="Belum" selected="{{data.statusSertifikasi == \'Belum\' ? selected : \'\' }}">Belum</ion-option>\n        <ion-option value="Sudah" selected="{{data.statusSertifikasi == \'Sudah\' ? selected : \'\' }}">Sudah</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-col col-6 no-padding>\n      <ion-item>\n        <ion-label>Luas Tanah</ion-label>\n        <ion-input  text-right [(ngModel)]="data.luasTanah" type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6 no-padding>\n      <ion-item>\n        <ion-label>Satuan</ion-label>\n        <ion-select [(ngModel)]="data.satuanLuasTanah">\n          <ion-option value="Meter persegi" selected="{{data.satuanLuasTanah == \'Meter persegi\' ? selected : \'\' }}">Meter persegi</ion-option>\n          <ion-option value="Hektar" selected="{{data.satuanLuasTanah == \'Hektar\' ? selected : \'\' }}">Hektar</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6 no-padding>\n      <ion-item>\n        <ion-label>Luas bangunan</ion-label>\n        <ion-input  text-right [(ngModel)]="data.luasBangunan" type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6 no-padding>\n      <ion-item>\n        <ion-label>Satuan</ion-label>\n        <ion-select [(ngModel)]="data.satuanLuasBangunan">\n          <ion-option value="Meter persegi" selected="{{data.satuanLuasBangunan == \'Meter persegi\' ? selected : \'\' }}">Meter persegi</ion-option>\n          <ion-option value="Hektar" selected="{{data.satuanLuasBangunan == \'Hektar\' ? selected : \'\' }}">Hektar</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-item>\n      <ion-label>Kondisi bangunan</ion-label>\n      <ion-select [(ngModel)]="data.kondisiBangunan">\n        <ion-option value="Baik" selected="{{data.kondisiBangunan == \'Baik\' ? selected : \'\' }}">Baik</ion-option>\n        <ion-option value="Rusak" selected="{{data.kondisiBangunan == \'Rusak\' ? selected : \'\' }}">Rusak</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jumlah bangunan</ion-label>\n      <ion-input text-right [(ngModel)]="data.jumlahBangunan" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sarana / Prasarana</ion-label>\n      <ion-select [(ngModel)]="data.statusSarana">\n        <ion-option value="Ada" selected="{{data.statusSarana == \'Ada\' ? selected : \'\' }}">Ada</ion-option>\n        <ion-option value="Tidak ada" selected="{{data.statusSarana == \'Tidak ada\' ? selected : \'\' }}">Tidak Ada</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bahasa pengantar</ion-label>\n      <ion-input text-right [(ngModel)]="data.bahasaPengantar" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sensus</ion-label>\n      <ion-select [(ngModel)]="data.statusSensus">\n        <ion-option value="Belum" selected="{{data.statusSensus == \'Belum\' ? selected : \'\' }}">Belum</ion-option>\n        <ion-option value="Sudah" selected="{{data.statusSensus == \'ASudahda\' ? selected : \'\' }}">Sudah</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bantuan pemerintah</ion-label>\n      <ion-select [(ngModel)]="data.statusBantuanPemerintah">\n        <ion-option value="Belum" selected="{{data.statusBantuanPemerintah == \'Belum\' ? selected : \'\' }}">Belum</ion-option>\n        <ion-option value="Sudah" selected="{{data.statusBantuanPemerintah == \'Sudah\' ? selected : \'\' }}">Sudah</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Kondisi geografis</ion-label>\n      <ion-select [(ngModel)]="data.kondisiGeografis">\n        <ion-option value="Pantai" selected="{{data.kondisiGeografis == \'Pantai\' ? selected : \'\' }}">Pantai</ion-option>\n        <ion-option value="Daratan rendah" selected="{{data.kondisiGeografis == \'Daratan rendah\' ? selected : \'\' }}">Dataran rendah</ion-option>\n        <ion-option value="Daratan tinggi" selected="{{data.kondisiGeografis == \'Daratan tinggi\' ? selected : \'\' }}">Dataran tinggi</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Potensi wilayah</ion-label>\n      <ion-input text-right [(ngModel)]="data.potensiWilayah" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jenis wilayah</ion-label>\n      <ion-input text-right [(ngModel)]="data.jenisWilayah" type="text"></ion-input>\n    </ion-item>\n    <ion-item class="no-border" margin-bottom>\n      <ion-label>Catatan</ion-label>\n      <ion-textarea [(ngModel)]="data.catatanLain" type="text"></ion-textarea>\n    </ion-item>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main">\n    <button class="text-white" (click)="updateLembaga()" ion-button block clear>Simpan</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/sejarah.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], FormSejarahPage);
    return FormSejarahPage;
}());

// FORM Kepengurusan
var FormKepengurusanPage = /** @class */ (function () {
    function FormKepengurusanPage(params, viewCtrl, authService, loadingCtrl, toastCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.urlServer = "";
        this.data = {
            noRegistrasi: "",
            penanggungJawab: "",
            jabatan: "",
            alamat: "",
            noRt: "",
            noRw: "",
            kodeKelurahan: "",
            kodeKecamatan: "",
            kodeWilayah: "",
            kodeProvinsi: "",
            noTelp: "",
            kewarganegaraan: "",
            tempatLahir: "",
            tanggalLahir: "",
            jenisKelamin: "",
            agama: "",
            jabatanLain: "",
            pendidikan: "",
            kompetensi: "",
            catatan: "",
        };
        this.flag = "init";
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('noRegistrasi');
        this.namaLembaga = params.get('namaLembaga');
        this.loadInit();
    }
    FormKepengurusanPage.prototype.loadInit = function () {
        var _this = this;
        this.showLoader();
        this.authService.getOptionList('wilayah').then(function (result) {
            _this.wilayah = result;
            _this.authService.getKelengkapanLembaga('kepengurusan', _this.noRegistrasi).then(function (result) {
                if (result != false) {
                    _this.temp = result;
                    _this.data = _this.temp;
                }
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
    FormKepengurusanPage.prototype.loadKecamatan = function (idWilayah) {
        var _this = this;
        if (idWilayah != "") {
            this.authService.getOptionList('kecamatan', idWilayah).then(function (result) {
                _this.kecamatan = result;
                if (_this.flag != "init")
                    _this.data.kodeKelurahan = "";
            }, function (err) {
                _this.presentToast(err);
                return false;
            });
        }
        else {
            this.kecamatan = [];
            this.kelurahan = [];
            this.data.kodeKecamatan = "";
            this.data.kodeKelurahan = "";
        }
    };
    FormKepengurusanPage.prototype.loadKelurahan = function (idKecamatan) {
        var _this = this;
        if (idKecamatan != "") {
            this.authService.getOptionList('kelurahan', idKecamatan).then(function (result) {
                _this.kelurahan = result;
                _this.flag = "end";
            }, function (err) {
                _this.presentToast(err);
                return false;
            });
        }
        else {
            this.kelurahan = [];
            this.data.kodeKelurahan = "";
        }
    };
    FormKepengurusanPage.prototype.updateLembaga = function () {
        var _this = this;
        this.data.noRegistrasi = this.noRegistrasi;
        this.showLoader();
        this.authService.updateDataLembaga('kepengurusan', this.data).then(function (result) {
            _this.temp = result;
            if (_this.temp.status == 'success') {
                _this.dismiss();
                _this.presentToast('Data kepengurusan berhasil diperbarui.');
            }
            else {
                _this.presentToast('Data kepengurusan gagal diperbarui, periksa kembali inputan Anda!');
            }
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    FormKepengurusanPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormKepengurusanPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    FormKepengurusanPage.prototype.presentToast = function (msg) {
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
    FormKepengurusanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formKepengurusan',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/kepengurusan.html"*/'<ion-header>\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Form Kepengurusan</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row margin-top padding>\n    <ion-item text-wrap>\n      <p>Informasi mengenai kepengurusan Lembaga terkait.</p>\n      <p class="text-main"><b>Yayasan Lorem ipsum dolor sit.</b></p>\n      <ion-icon name="people" item-end color="vibrant"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>Penanggung Jawab</ion-label>\n      <ion-input text-right [(ngModel)]="data.penanggungJawab" type="text" no-border></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jabatan</ion-label>\n      <ion-input text-right [(ngModel)]="data.jabatan" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Alamat</ion-label>\n      <ion-textarea [(ngModel)]="data.alamat" type="text"></ion-textarea>\n    </ion-item>\n    <ion-col col-6 no-padding>\n      <ion-item class="no-border-1-layer">\n        <ion-label>RT (*)</ion-label>\n        <ion-input [(ngModel)]="data.noRt" type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6 no-padding>\n      <ion-item class="no-border-1-layer">\n        <ion-label>RW (*)</ion-label>\n        <ion-input [(ngModel)]="data.noRw" type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-item>\n      <ion-label>Wilayah</ion-label>\n      <ion-select [(ngModel)]="data.kodeWilayah" (ionChange)="loadKecamatan(data.kodeWilayah)">\n        <ion-option value="" selected="{{data.wilayah == \'\' ? selected : \'\' }}"></ion-option>\n        <ion-option *ngFor="let d of wilayah" value="{{ d.value }}" selected="{{data.kodeWilayah == d.value ? selected : \'\' }}">{{d.caption\n          }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Kecamatan</ion-label>\n      <ion-select [(ngModel)]="data.kodeKecamatan" (ionChange)="loadKelurahan(data.kodeKecamatan)">\n        <ion-option value="" selected="{{data.kecamatan == \'\' ? selected : \'\' }}"></ion-option>\n        <ion-option *ngFor="let d of kecamatan" value="{{ d.value }}" selected="{{data.kodeKecamatan == d.value ? selected : \'\' }}">{{d.caption\n          }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Kelurahan</ion-label>\n      <ion-select [(ngModel)]="data.kodeKelurahan">\n        <ion-option value="" selected="{{data.kelurahan == \'\' ? selected : \'\' }}"></ion-option>\n        <ion-option *ngFor="let d of kelurahan" value="{{ d.value }}" selected="{{data.kodeKelurahan == d.value ? selected : \'\' }}">{{d.caption\n          }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Telp (*)</ion-label>\n      <ion-input text-right [(ngModel)]="data.noTelp" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Warga Negara</ion-label>\n      <ion-select [(ngModel)]="data.kewarganegaraan">\n        <ion-option value="WNI" selected="{{data.kewarganegaraan == \'WNI\' ? selected : \'\' }}">WNI</ion-option>\n        <ion-option value="WNA" selected="{{data.kewarganegaraan == \'WNA\' ? selected : \'\' }}">WNA</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tempat Lahir</ion-label>\n      <ion-input text-right [(ngModel)]="data.tempatLahir" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tanggal Lahir</ion-label>\n      <ion-datetime [(ngModel)]="data.tanggalLahir" displayFormat="DD/MM/YYYY" [(ngModel)]="myDate"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jenis Kelamin</ion-label>\n      <ion-select [(ngModel)]="data.jenisKelamin">\n        <ion-option value="L" selected="{{data.jenisKelamin == \'L\' ? selected : \'\' }}">Laki-laki</ion-option>\n        <ion-option value="P" selected="{{data.jenisKelamin == \'P\' ? selected : \'\' }}">Perempuan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Agama</ion-label>\n      <ion-select [(ngModel)]="data.agama">\n        <ion-option value="Islam" selected="{{data.agama == \'Islam\' ? selected : \'\' }}">Islam</ion-option>\n        <ion-option value="Kristen" selected="{{data.agama == \'Kristen\' ? selected : \'\' }}">Kristen</ion-option>\n        <ion-option value="Hindu" selected="{{data.agama == \'Hindu\' ? selected : \'\' }}">Hindu</ion-option>\n        <ion-option value="Budha" selected="{{data.agama == \'Budha\' ? selected : \'\' }}">Budha</ion-option>\n        <ion-option value="Lainnya" selected="{{data.agama == \'Lainnya\' ? selected : \'\' }}">Agama lainnya</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jabatan lainnya</ion-label>\n      <ion-input text-right [(ngModel)]="data.jabatanLain" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pendidikan</ion-label>\n      <ion-select [(ngModel)]="data.pendidikan">\n        <ion-option value="SMA / SMK" selected="{{data.pendidikan == \'Islam\' ? selected : \'\' }}">SMA / SMK</ion-option>\n        <ion-option value="D3" selected="{{data.pendidikan == \'Islam\' ? selected : \'\' }}">D3</ion-option>\n        <ion-option value="S1" selected="{{data.pendidikan == \'Islam\' ? selected : \'\' }}">S1</ion-option>\n        <ion-option value="s2" selected="{{data.pendidikan == \'Islam\' ? selected : \'\' }}">S2</ion-option>\n        <ion-option value="Lainnya" selected="{{data.pendidikan == \'Islam\' ? selected : \'\' }}">Pendidikan lainnya</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Kompetensi</ion-label>\n      <ion-textarea [(ngModel)]="data.kompetensi" type="text"></ion-textarea>\n    </ion-item>\n    <ion-item class="no-border" margin-bottom>\n      <ion-label>Catatan</ion-label>\n      <ion-textarea [(ngModel)]="data.catatan" type="text"></ion-textarea>\n    </ion-item>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main" text-center>\n    <button class="text-white" (click)="updateLembaga()" ion-button clear>Simpan</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/kepengurusan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], FormKepengurusanPage);
    return FormKepengurusanPage;
}());

// FORM Usaha
var FormUsahaPage = /** @class */ (function () {
    function FormUsahaPage(params, viewCtrl, authService, loadingCtrl, toastCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.urlServer = "";
        this.data = {
            noRegistrasi: "",
            namaUsaha: "",
            jenisUsaha: "",
            detailUsaha: "",
            jumlahPekerja: "",
            catatan: "",
        };
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('noRegistrasi');
        this.namaLembaga = params.get('namaLembaga');
        this.loadInit();
    }
    FormUsahaPage.prototype.loadInit = function () {
        var _this = this;
        this.authService.getKelengkapanLembaga('usaha', this.noRegistrasi).then(function (result) {
            if (result != false) {
                _this.temp = result;
                _this.data = _this.temp;
            }
        }, function (err) {
            _this.presentToast(err);
            return false;
        });
    };
    FormUsahaPage.prototype.updateLembaga = function () {
        var _this = this;
        this.data.noRegistrasi = this.noRegistrasi;
        this.showLoader();
        this.authService.updateDataLembaga('usaha', this.data).then(function (result) {
            _this.temp = result;
            if (_this.temp.status == 'success') {
                _this.dismiss();
                _this.presentToast('Data usaha berhasil diperbarui.');
            }
            else {
                _this.presentToast('Data usaha gagal diperbarui, periksa kembali inputan Anda!');
            }
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    FormUsahaPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormUsahaPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    FormUsahaPage.prototype.presentToast = function (msg) {
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
    FormUsahaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formUsaha',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/usaha.html"*/'<ion-header>\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Form Usaha</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row margin-top padding>\n    <ion-item text-wrap>\n      <p>Informasi mengenai usaha yang sedang dijalankan oleh Lembaga terkait.</p>\n      <p class="text-main"><b>{{namaLembaga}}.</b></p>\n      <ion-icon name="pricetag" item-end color="primary"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>Nama usaha</ion-label>\n      <ion-input text-right [(ngModel)]="data.namaUsaha" type="text" no-border></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jenis usaha</ion-label>\n      <ion-input text-right [(ngModel)]="data.jenisUsaha" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Detail usaha</ion-label>\n      <ion-textarea [(ngModel)]="data.detailUsaha" type="text"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jumlah pekerja</ion-label>\n      <ion-input text-right [(ngModel)]="data.jumlahPekerja" type="text"></ion-input>\n    </ion-item>\n    <ion-item margin-bottom>\n      <ion-label>Catatan</ion-label>\n      <ion-textarea [(ngModel)]="data.catatan" type="text"></ion-textarea>\n    </ion-item>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main">\n    <button class="text-white" (click)="updateLembaga()" ion-button block clear>Simpan</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/usaha.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], FormHirarkiPage);
    return FormHirarkiPage;
}());

// FORM Koleksi
var FormKoleksiPage = /** @class */ (function () {
    function FormKoleksiPage(platform, params, viewCtrl, modalCtrl, authService, loadingCtrl, toastCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.urlServer = "";
        this.countData = 0;
        this.formData = {
            noRegistrasi: "",
            judulKoleksi: "",
            jenisKoleksi: "",
            deskripsi: ""
        };
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('noRegistrasi');
        this.namaLembaga = params.get('namaLembaga');
        this.loadData();
    }
    FormKoleksiPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getKelengkapanLembaga('koleksi', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.countData = Object.keys(_this.data).length;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    FormKoleksiPage.prototype.reloadData = function (refresher) {
        var _this = this;
        this.authService.getKelengkapanLembaga('koleksi', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            refresher.complete();
        }, function (err) {
            refresher.complete();
            _this.presentToast(err);
            return false;
        });
    };
    FormKoleksiPage.prototype.updateLembaga = function () {
        var _this = this;
        this.formData.noRegistrasi = this.noRegistrasi;
        console.log(this.formData);
        this.showLoader();
        this.authService.updateDataLembaga('koleksi', this.formData).then(function (result) {
            _this.temp = result;
            if (_this.temp.status == 'success') {
                _this.presentToast('Data koleksi berhasil diperbarui.');
            }
            else {
                _this.presentToast('Data koleksi gagal diperbarui, perika kembali inputan Anda!');
            }
            _this.formData.judulKoleksi = "";
            _this.formData.jenisKoleksi = "";
            _this.formData.deskripsi = "";
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    FormKoleksiPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormKoleksiPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    FormKoleksiPage.prototype.presentToast = function (msg) {
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
    FormKoleksiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formKoleksi',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/koleksi.html"*/'<ion-header class="static">\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Koleksi</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="reloadData($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list padding>\n    <ion-item class="no-border-top" text-wrap>\n      <p>Informasi mengenai koleksi yang dimiliki oleh Lembaga terkait.</p>\n      <p class="text-main"><b>{{ namaLembaga }}.</b></p>\n      <ion-icon name="book" item-end color="secondary"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <p>Total data ({{ countData }})</p>\n    </ion-item>\n    <button ion-item *ngFor="let d of data">\n      <ion-icon name="book" class="text-secondary" item-start></ion-icon>\n      <p>{{d.jenisKoleksi}}</p>\n      <h2 text-wrap>{{d.judulKoleksi}}</h2>\n    </button>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="clear">\n    <ion-item>\n      <ion-label>Judul Koleksi</ion-label>\n      <ion-input [(ngModel)]="formData.judulKoleksi" type="text"></ion-input>\n      <ion-icon item-right (click)="updateLembaga()" name="md-create"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jenis Koleksi</ion-label>\n      <ion-select [(ngModel)]="formData.jenisKoleksi">\n        <ion-option value="Buku">Buku</ion-option>\n        <ion-option value="Kitab">Kitab</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class="no-border" margin-bottom>\n      <ion-label>Keterangan</ion-label>\n      <ion-textarea [(ngModel)]="formData.deskripsi" type="text"></ion-textarea>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/koleksi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], FormKoleksiPage);
    return FormKoleksiPage;
}());

// FORM Prestasi
var FormPrestasiPage = /** @class */ (function () {
    function FormPrestasiPage(platform, params, viewCtrl, modalCtrl, authService, loadingCtrl, toastCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.urlServer = "";
        this.form = {
            noRegistrasi: "",
            deskripsi: ""
        };
        this.countData = 0;
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('noRegistrasi');
        this.namaLembaga = params.get('namaLembaga');
        this.loadData();
    }
    FormPrestasiPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getKelengkapanLembaga('prestasi', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.countData = Object.keys(_this.data).length;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    FormPrestasiPage.prototype.reloadData = function (refresher) {
        var _this = this;
        this.authService.getKelengkapanLembaga('prestasi', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            refresher.complete();
        }, function (err) {
            refresher.complete();
            _this.presentToast(err);
            return false;
        });
    };
    FormPrestasiPage.prototype.updateLembaga = function () {
        var _this = this;
        this.form.noRegistrasi = this.noRegistrasi;
        this.showLoader();
        this.authService.updateDataLembaga('prestasi', this.form).then(function (result) {
            _this.temp = result;
            if (_this.temp.status == 'success') {
                _this.presentToast('Data prestasi berhasil diperbarui.');
            }
            else {
                _this.presentToast('Data prestasi gagal diperbarui, perika kembali inputan Anda!');
            }
            _this.form.deskripsi = "";
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    FormPrestasiPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FormPrestasiPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    FormPrestasiPage.prototype.presentToast = function (msg) {
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
    FormPrestasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formPrestasi',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/form/prestasi.html"*/'<ion-header class="static">\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Prestasi</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list padding>\n    <ion-refresher (ionRefresh)="reloadData($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-item class="no-border-top" text-wrap>\n      <p>Informasi mengenai prestasi yang dimiliki oleh Lembaga terkait.</p>\n      <p class="text-main"><b>{{ namaLembaga }}.</b></p>\n      <ion-icon name="trophy" item-end color="bright"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <p>Total data ({{ countData }})</p>\n    </ion-item>\n    <button ion-item *ngFor="let d of data; let first = first; let last = last" [class.no-border]="last">\n      <ion-icon name="trophy" class="text-bright" item-start></ion-icon>\n      <h2 text-wrap>{{d.deskripsi}}</h2>\n    </button>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="clear">\n    <ion-item class="no-border">\n      <ion-input [(ngModel)]="form.deskripsi" type="text" placeholder="Tambah prestasi.."></ion-input>\n      <ion-icon item-right name="md-create" (click)="updateLembaga()"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/form/prestasi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], FormPrestasiPage);
    return FormPrestasiPage;
}());

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(291);
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
        this.urlServer = "http://dplega.syncardtech.com";
        this.urlApi = this.urlServer + "/slim-api";
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.urlApi + '/public/auth/', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.relogin = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.urlApi + '/public/fetch/auth/', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        return true;
    };
    AuthService.prototype.changePassword = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.urlApi + '/public/update/password/', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.changeAccount = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.urlApi + '/public/update/account/', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
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
            _this.http.post(_this.urlApi + '/public/list/lembaga/' + page, JSON.stringify(filterData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.getDetailLembaga = function (noRegistrasi) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.urlApi + '/public/detail/lembaga/' + noRegistrasi, {})
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.getKelengkapanLembaga = function (target, noRegistrasi) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.urlApi + '/public/detail/lembaga/' + target + '/' + noRegistrasi, {})
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.getSummaryLembaga = function () {
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
            _this.http.post(_this.urlApi + '/public/summary/lembaga/', JSON.stringify(filterData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    // CRUD LEMBAGA
    AuthService.prototype.insertNewLembaga = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            data['username'] = localStorage.getItem('username');
            _this.http.post(_this.urlApi + '/public/insert/lembaga/', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.insertDataLembaga = function (target, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            data['username'] = localStorage.getItem('username');
            _this.http.post(_this.urlApi + '/public/insert/lembaga/' + target + '/' + data.noRegistrasi, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.updateDataLembaga = function (target, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            data['username'] = localStorage.getItem('username');
            _this.http.post(_this.urlApi + '/public/update/lembaga/' + target, JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.getCountNotifications = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.urlApi + '/public/count/notifications/' + localStorage.getItem('userNotif'), {})
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
            _this.http.get(_this.urlApi + '/public/list/notifications/' + localStorage.getItem('userNotif'), {})
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.getNotifications = function (idData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.urlApi + '/public/detail/notifications/' + idData, {})
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
            _this.http.get(_this.urlApi + '/public/' + target, {})
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
            _this.http.get(_this.urlApi + '/public/summary/' + target + '/', {})
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.getListFilter = function (target, page) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var filterData = {
                'keyword': localStorage.getItem(target + '-filter-keyword'),
                'bentukLembaga': localStorage.getItem(target + '-filter-bentukLembaga'),
                'wilayah': localStorage.getItem(target + '-filter-wilayah'),
                'kecamatan': localStorage.getItem(target + '-filter-kecamatan'),
                'kelurahan': localStorage.getItem(target + '-filter-kelurahan')
            };
            _this.http.post(_this.urlApi + '/public/list/' + target + '/' + page, JSON.stringify(filterData), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.getSummaryFilter = function (target) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var filterData = {
                'keyword': localStorage.getItem(target + '-filter-keyword'),
                'bentukLembaga': localStorage.getItem(target + '-filter-bentukLembaga'),
                'wilayah': localStorage.getItem(target + '-filter-wilayah'),
                'kecamatan': localStorage.getItem(target + '-filter-kecamatan'),
                'kelurahan': localStorage.getItem(target + '-filter-kelurahan')
            };
            _this.http.post(_this.urlApi + '/public/summary/' + target, JSON.stringify(filterData), { headers: headers })
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
            _this.http.get(_this.urlApi + '/public/list/' + target + '/' + page, {})
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
            _this.http.get(_this.urlApi + '/public/option/' + target, {})
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.searchData = function (keyword) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.urlApi + '/public/search/' + keyword, {})
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                _this.presentToast(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.getDataById = function (target, idData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            target = target + '/' + idData;
            _this.http.get(_this.urlApi + '/public/detail/' + target, {})
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 15:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verification_verification__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_form__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setting_setting__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { LaunchNavigator } from '@ionic-native/launch-navigator';









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
        this.urlServer = "";
        this.urlServer = authService.urlServer;
        // get initial data
        this.getData();
        // set our app's pages
        this.pages = [
            { component: KelembagaanFilterPage },
            { component: KelembagaanDetailPage },
        ];
        events.subscribe('kelembagaan:reload', function () {
            _this.page = 1;
            _this.getData();
        });
    }
    KelembagaanPage.prototype.openModal = function (index, reff, reff2) {
        if (reff === void 0) { reff = null; }
        if (reff2 === void 0) { reff2 = null; }
        var modal = this.modalCtrl.create(this.pages[index].component, { reff: reff, reff2: reff2 });
        modal.present();
    };
    KelembagaanPage.prototype.getData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getListLembaga(this.page).then(function (result) {
            _this.data = result;
            _this.page = _this.page + 1;
            _this.authService.getSummaryLembaga().then(function (result) {
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
    KelembagaanPage.prototype.reloadData = function (refresher) {
        var _this = this;
        this.authService.getListLembaga(this.page - 1).then(function (result) {
            _this.data = result;
            _this.authService.getSummaryLembaga().then(function (result) {
                _this.summary = result;
                _this.summary = _this.summary.summary;
                refresher.complete();
            }, function (err) {
                refresher.complete();
                _this.presentToast(err);
                return false;
            });
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
            selector: 'page-kelembagaan',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/kelembagaan.html"*/'<ion-header>\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Kelembagaan</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openModal(0)" >\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="reloadData($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list>\n    <ion-item>\n      <p>Total data ({{ summary }})</p>\n    </ion-item>\n    <ion-item-group>\n      <ion-item-sliding *ngFor="let d of data">\n        <button ion-item (click)="openModal(1, d.noRegistrasi, d.namaBentukLembaga + \' \' + d.nama)" padding-right>\n          <ion-avatar item-start>\n            <img src="{{urlServer}}/img/logo/{{d.urlGambarLogo}}">\n          </ion-avatar>\n          <h3 text-wrap>{{d.nama}}</h3>\n          <p>{{d.namaBentukLembaga}} &nbsp; <span class="text-{{d.statusVerifikasi == \'0\' ? \'danger\' : \'secondary\'}}"><ion-icon name="compass"></ion-icon></span></p>\n        </button>\n        <ion-item-options side="right">\n          <button ion-button color="light" class="text-vibrant">\n            <!-- <ion-icon name="checkmark-circle"></ion-icon> -->\n            Verifikasi\n          </button>\n          <button ion-button color="light" class="text-primary">\n            <!-- <ion-icon name="create"></ion-icon> -->\n            Edit\n          </button>\n          <button ion-button color="light" class="text-danger">\n            <!-- <ion-icon name="trash"></ion-icon> -->\n            Hapus\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadData($event)" threshold="100px">\n    <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="Memuat data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/kelembagaan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
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
        this.filterData = {
            keyword: localStorage.getItem('kelembagaan-filter-keyword'),
            bentukLembaga: localStorage.getItem('kelembagaan-filter-bentukLembaga'),
            wilayah: localStorage.getItem('kelembagaan-filter-wilayah'),
            kecamatan: localStorage.getItem('kelembagaan-filter-kecamatan'),
            kelurahan: localStorage.getItem('kelembagaan-filter-kelurahan'),
            ajuan: localStorage.getItem('kelembagaan-filter-ajuan'),
            valid: localStorage.getItem('kelembagaan-filter-valid')
        };
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
                if (_this.filterData.kecamatan != "") {
                    _this.authService.getOptionList('kecamatan', _this.filterData.wilayah).then(function (result) {
                        _this.kecamatan = result;
                        if (_this.filterData.kelurahan != "") {
                            _this.authService.getOptionList('kelurahan', _this.filterData.kecamatan).then(function (result) {
                                _this.kelurahan = result;
                                _this.loading.dismiss();
                            }, function (err) {
                                _this.loading.dismiss();
                                _this.presentToast(err);
                                return false;
                            });
                        }
                        else {
                            _this.loading.dismiss();
                        }
                    }, function (err) {
                        _this.loading.dismiss();
                        _this.presentToast(err);
                        return false;
                    });
                }
                else {
                    _this.loading.dismiss();
                }
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
        if (idWilayah != "") {
            this.showLoader();
            this.authService.getOptionList('kecamatan', idWilayah).then(function (result) {
                _this.kecamatan = result;
                _this.loading.dismiss();
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
                return false;
            });
        }
        else {
            this.kecamatan = [];
            this.kelurahan = [];
            this.filterData.kecamatan = "";
            this.filterData.kelurahan = "";
        }
    };
    KelembagaanFilterPage.prototype.loadKelurahan = function (idKecamatan) {
        var _this = this;
        if (idKecamatan != "") {
            this.showLoader();
            this.authService.getOptionList('kelurahan', idKecamatan).then(function (result) {
                _this.kelurahan = result;
                _this.loading.dismiss();
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
                return false;
            });
        }
        else {
            this.kelurahan = [];
            this.filterData.kelurahan = "";
        }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/filter.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Filter Lembaga</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear" >Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header class="text-dark">Pencarian</ion-list-header>\n    <ion-item color="clear">\n      <ion-searchbar [(ngModel)]="filterData.keyword" placeholder="Ketik Nama / No Registrasi" showWhen="ios" value=""></ion-searchbar>\n      <ion-searchbar [(ngModel)]="filterData.keyword" placeholder="Ketik Nama / No Registrasi"showWhen="android,windows" no-padding></ion-searchbar>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bentuk Lembaga</ion-label>\n      <ion-select [(ngModel)]="filterData.bentukLembaga">\n        <ion-option value="" selected="{{filterData.bentukLembaga == \'\' ? selected : \'\' }}">Semua</ion-option>\n        <ion-option *ngFor="let d of bentukLembaga" value="{{ d.value }}" selected="{{filterData.bentukLembaga == d.value ? selected : \'\' }}">{{ d.caption }}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header class="text-dark">Lokasi</ion-list-header>\n    <ion-item>\n      <ion-label>Wilayah</ion-label>\n      <ion-select [(ngModel)]="filterData.wilayah" (ionChange)="loadKecamatan(filterData.wilayah)">\n        <ion-option value="" selected="{{filterData.wilayah == \'\' ? selected : \'\' }}">Semua</ion-option>\n        <ion-option *ngFor="let d of wilayah" value="{{ d.value }}" selected="{{filterData.wilayah == d.value ? selected : \'\' }}">{{ d.caption }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Kecamatan</ion-label>\n      <ion-select [(ngModel)]="filterData.kecamatan" (ionChange)="loadKelurahan(filterData.kecamatan)">\n        <ion-option value="" selected="{{filterData.kecamatan == \'\' ? selected : \'\' }}">Semua</ion-option>\n        <ion-option *ngFor="let d of kecamatan" value="{{ d.value }}" selected="{{filterData.kecamatan == d.value ? selected : \'\' }}">{{ d.caption }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Kelurahan</ion-label>\n      <ion-select [(ngModel)]="filterData.kelurahan">\n        <ion-option value="" selected="{{filterData.kelurahan == \'\' ? selected : \'\' }}">Semua</ion-option>\n        <ion-option *ngFor="let d of kelurahan" value="{{ d.value }}" selected="{{filterData.kelurahan == d.value ? selected : \'\' }}">{{ d.caption }}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header class="text-dark">Status</ion-list-header>\n    <ion-item>\n      <ion-label>Belum Verifikasi</ion-label>\n      <ion-checkbox [(ngModel)]="filterData.ajuan" color="main" checked="{{filterData.ajuan != \'false\' ? \'true\' : \'false\' }}" item-end></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sudah Verifikasi</ion-label>\n      <ion-checkbox [(ngModel)]="filterData.valid" color="main" checked="{{filterData.valid != \'false\' ? \'true\' : \'false\' }}" item-end></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main">\n      <button type="button" (click)="filter()" class="text-white" ion-button block clear>Aktifkan</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], KelembagaanFilterPage);
    return KelembagaanFilterPage;
}());

// DETAIL
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
var KelembagaanDetailPage = /** @class */ (function () {
    function KelembagaanDetailPage(platform, params, viewCtrl, modalCtrl, 
        // private launchNavigator: LaunchNavigator, 
        authService, loadingCtrl, toastCtrl, appCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.appCtrl = appCtrl;
        this.userLevel = "";
        this.urlServer = "";
        this.detail = {
            avatar: "",
            noreg: "",
            nama: "",
            kodeBentukLembaga: "",
            namaBentukLembaga: "",
            catatanLain: "",
            telp: "",
            email: "",
            mediaSosial: "",
            langitude: 0,
            latitude: 0,
            alamat: "",
            namaBidangGerak: "",
            jumlahPengurus: "",
            noNpwp: "",
            organisasiAfiliasi: "",
            visiLembaga: "",
            misiLembaga: ""
        };
        this.urlServer = authService.urlServer;
        this.userLevel = localStorage.getItem('userLevel');
        if (this.userLevel != '1') {
            this.noRegistrasi = params.get('reff');
            this.namaLembaga = params.get('reff2');
        }
        else {
            this.noRegistrasi = localStorage.getItem('noRegistrasi');
            this.namaLembaga = localStorage.getItem('namaLembaga');
        }
        // set our app's pages
        this.detailPages = [
            { component: KelembagaanLegalitasPage },
            { component: KelembagaanSejarahPage },
            { component: KelembagaanKepengurusanPage },
            { component: KelembagaanUsahaPage },
            { component: KelembagaanPrestasiPage },
            { component: KelembagaanKoleksiPage },
            { component: __WEBPACK_IMPORTED_MODULE_3__verification_verification__["b" /* VerificationPage */] },
            { component: __WEBPACK_IMPORTED_MODULE_5__setting_setting__["d" /* SettingPage */] },
            { component: __WEBPACK_IMPORTED_MODULE_3__verification_verification__["a" /* RevisionPage */] },
        ];
        // // set our form's pages
        // this.detailPages = [
        //   { component: KelembagaanLegalitasPage },
        //   { component: KelembagaanSejarahPage },
        //   { component: KelembagaanKepengurusanPage },
        //   { component: KelembagaanUsahaPage },
        //   { component: KelembagaanPrestasiPage },
        //   { component: KelembagaanKoleksiPage },
        //   { component: VerificationPage },
        // ];
        this.loadData();
    }
    KelembagaanDetailPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getDetailLembaga(this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.detail = _this.temp;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanDetailPage.prototype.reloadData = function (refresher) {
        var _this = this;
        this.authService.getDetailLembaga(this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.detail = _this.temp;
            refresher.complete();
        }, function (err) {
            refresher.complete();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanDetailPage.prototype.openModal = function (index, reff, reff2, reff3, reff4) {
        if (reff === void 0) { reff = null; }
        if (reff2 === void 0) { reff2 = null; }
        if (reff3 === void 0) { reff3 = null; }
        if (reff4 === void 0) { reff4 = null; }
        var modal = this.modalCtrl.create(this.detailPages[index].component, { reff: reff, reff2: reff2, reff3: reff3, reff4: reff4 });
        modal.present();
    };
    KelembagaanDetailPage.prototype.loadForm = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__form_form__["b" /* FormKelembagaanPage */], { noRegistrasi: this.noRegistrasi });
        modal.present();
    };
    KelembagaanDetailPage.prototype.openMaps = function () {
        var destination = this.detail.latitude + ',' + this.detail.langitude;
        if (this.platform.is('ios')) {
            window.open('maps://?q=' + destination, '_system');
        }
        else {
            var label = encodeURI('');
            window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
        }
        // console.log(":" + this.detail.langitude + " : " + this.detail.latitude);
        // this.launchNavigator.navigate([this.detail.langitude, this.detail.latitude], {
        //   start: this.detail.langitude + ", " + this.detail.latitude
        // }).then(
        //     success => console.log('Launched navigator'),
        //     error => console.log('Error launching navigator', error)
        //   );
    };
    KelembagaanDetailPage.prototype.logout = function () {
        this.showLoader();
        this.authService.logout();
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
        this.loading.dismiss();
    };
    KelembagaanDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanDetailPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    KelembagaanDetailPage.prototype.presentToast = function (msg) {
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
    KelembagaanDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/detail.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'main\'>\n    <ion-title>Profil Lembaga</ion-title>\n    <ion-buttons left *ngIf="userLevel != \'1\'">\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n    <ion-buttons end *ngIf="userLevel != \'2\'">\n      <button ion-button icon-only (click)="loadForm()">\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="reloadData($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- <ion-list no-margin> -->\n    <ion-list>\n      <ion-item color="main" text-center class="no-border">\n        <ion-avatar margin-bottom class="medium">\n          <img class="margin-auto" src="{{urlServer}}/img/logo/{{detail.avatar}}">\n        </ion-avatar>\n        <p>{{ detail.namaBentukLembaga }}</p>\n        <h1 text-wrap>{{ detail.nama }}</h1>\n        <p class="text-{{ detail.statusVerifikasi == 1 ? \'white\' : \'bright\' }}" (click)="openModal(6, noRegistrasi, namaLembaga, detail.namaBentukLembaga, detail.nama)">{{ detail.statusVerifikasi == 1 ? \'Sudah Verifikasi\' : \'Belum Verifikasi\' }}</p>\n      </ion-item>\n    </ion-list>\n    <ion-list padding>\n      <ion-item *ngIf="userLevel != \'1\'">\n        <p><b>Username.</b><br/><br /> {{ detail.username }}</p>\n      </ion-item>\n      <ion-item>\n        <p><b>No Registrasi.</b><br/><br /> {{ detail.noreg }}</p>\n      </ion-item>\n      <ion-item>\n        <p><b>Telp.</b><br/><br/> {{ detail.telp }}</p>\n      </ion-item>\n      <ion-item>\n        <p><b>Email.</b><br/><br/> {{ detail.email }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Alamat.</b><br/><br/> {{ detail.alamat }}</p>\n      </ion-item>\n      <ion-item>\n        <p><b>Bergerak dalam bidang.</b><br/><br/> {{ detail.namaBidangGerak }}</p>\n      </ion-item>\n      <ion-item>\n        <p><b>Jumlah pengurus.</b><br/><br/> {{ detail.jumlahPengurus }} Orang</p>\n      </ion-item>\n      <ion-item>\n        <p><b>NPWP.</b><br/> {{ detail.noNpwp }}</p>\n      </ion-item>\n      <ion-item>\n        <p><b>Afiliasi.</b><br /> {{ detail.organisasiAfiliasi }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Visi.</b><br /> {{ detail.visiLembaga }}</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Misi.</b><br /> {{ detail.misiLembaga }}</p>\n      </ion-item>\n      <ion-item margin-bottom class="no-border">\n        <p><b>Media sosial.</b><br /> {{ detail.mediaSosial }}</p>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf="userLevel != \'2\'">\n      <ion-list-header class="text-main">Informasi lainnya</ion-list-header>\n      <button ion-item (click)="openModal(0, noRegistrasi, namaLembaga)">\n        <ion-icon name="paper" item-start color="main"></ion-icon>\n        Legalitas\n      </button>\n      <button ion-item (click)="openModal(1, noRegistrasi, namaLembaga)">\n        <ion-icon name="time" item-start color="bright"></ion-icon>\n        Sejarah\n      </button>\n      <button ion-item (click)="openModal(2, noRegistrasi, namaLembaga)">\n        <ion-icon name="people" item-start color="vibrant"></ion-icon>\n        Kepengurusan\n      </button>\n      <button ion-item (click)="openModal(3, noRegistrasi, namaLembaga)">\n        <ion-icon name="pricetag" item-start color="primary"></ion-icon>\n        Usaha\n      </button>\n      <button ion-item (click)="openModal(4, noRegistrasi, namaLembaga)">\n        <ion-icon name="trophy" item-start color="bright"></ion-icon>\n        Prestasi\n      </button>\n      <button ion-item (click)="openModal(5, noRegistrasi, namaLembaga)">\n        <ion-icon name="book" item-start color="secondary"></ion-icon>\n        Koleksi\n      </button>\n      <button ion-item (click)="openMaps()">\n        <ion-icon name="globe" item-start color="primary"></ion-icon>\n        Lihat Maps\n      </button>\n    </ion-list>\n    <ion-list *ngIf="userLevel != \'2\'">\n      <ion-list-header class="text-main">Aplikasi</ion-list-header>\n      <button ion-item (click)="openModal(6, noRegistrasi, namaLembaga, detail.namaBentukLembaga, detail.nama)" *ngIf="userLevel ==\'3\' || userLevel == \'7\'">\n        <ion-icon name="md-create" item-start color="secondary"></ion-icon>\n        Verifikasi Lembaga\n      </button>\n      <button ion-item (click)="openModal(8, noRegistrasi, namaLembaga)" *ngIf="userLevel ==\'1\'">\n        <ion-icon name="chatbubbles" item-start color="secondary"></ion-icon>\n        Catatan Revisi\n      </button>\n      <button ion-item (click)="openModal(7)" *ngIf="userLevel ==\'1\'">\n        <ion-icon name="settings" item-start></ion-icon>\n        Pengaturan\n      </button>\n      <button ion-item (click)="logout()" *ngIf="userLevel ==\'1\'">\n        <ion-icon name="log-out" item-start color="danger"></ion-icon>\n        Keluar\n      </button>\n    </ion-list>\n  <!-- </ion-list> -->\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], KelembagaanDetailPage);
    return KelembagaanDetailPage;
}());

// ---------------------------------------------------------------------------
var KelembagaanLegalitasPage = /** @class */ (function () {
    function KelembagaanLegalitasPage(platform, params, viewCtrl, modalCtrl, authService, loadingCtrl, toastCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.urlServer = "";
        this.countData = 0;
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('reff');
        this.namaLembaga = params.get('reff2');
        this.loadData();
    }
    KelembagaanLegalitasPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getKelengkapanLembaga('legalitas', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.countData = Object.keys(_this.data).length;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanLegalitasPage.prototype.reloadData = function (refresher) {
        var _this = this;
        this.authService.getKelengkapanLembaga('legalitas', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            refresher.complete();
        }, function (err) {
            refresher.complete();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanLegalitasPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanLegalitasPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    KelembagaanLegalitasPage.prototype.presentToast = function (msg) {
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
    KelembagaanLegalitasPage.prototype.loadForm = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__form_form__["e" /* FormLegalitasPage */], { noRegistrasi: this.noRegistrasi, namaLembaga: this.namaLembaga });
        modal.present();
    };
    KelembagaanLegalitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/legalitas.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'main\'>\n    <ion-title>Legalitas</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="loadForm()">\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="reloadData($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list>\n    <ion-row padding>\n      <ion-item text-wrap>\n        <p>Informasi mengenai legalitas yang dimiliki oleh Lembaga terkait.</p>\n        <p class="text-main"><b>{{ namaLembaga }}.</b></p>\n        <ion-icon name="paper" item-end color="main"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <p>Total data ({{ countData }})</p>\n      </ion-item>\n      <button *ngFor="let d of data; let first = first; let last = last" [class.no-border]="last" ion-item text-wrap>\n        <ion-icon name="document" item-start color="main"></ion-icon>\n        <p><b>{{d.namaPersyaratan}}.</b> <span class="text-{{d.statusVerifikasi == \'0\' ? \'danger\' : \'secondary\'}}"><ion-icon name="compass"></ion-icon></span></p>\n        <p><span class="text-vibrant">{{d.noLegalitas}}</span> | {{d.tanggalLegalitas}}</p>\n      </button>\n    </ion-row>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/legalitas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], KelembagaanLegalitasPage);
    return KelembagaanLegalitasPage;
}());

// ---------------------------------------------------------------------------
var KelembagaanSejarahPage = /** @class */ (function () {
    function KelembagaanSejarahPage(platform, params, viewCtrl, modalCtrl, authService, loadingCtrl, toastCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.urlServer = "";
        this.data = {
            noRegistrasi: "-",
            deskripsi: "-",
            tanggalDidirikan: "-",
            kepemilikan: "-",
            statusTanah: "-",
            statusSertifikasi: "-",
            luasTanah: "-",
            satuanLuasTanah: "-",
            luasBangunan: "-",
            satuanLuasBangunan: "-",
            kondisiBangunan: "-",
            JumlahBangunan: "-",
            statusSarana: "-",
            statusStrukturKepengurusan: "-",
            urlGambarStrukturKepengurusan: "-",
            bahasaPengantar: "-",
            statusSensus: "-",
            statusBantuanPemerintah: "-",
            kondisiGeografis: "-",
            potensiWilayah: "-",
            jenisWilayah: "-",
            catatanLain: "-"
        };
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('reff');
        this.namaLembaga = params.get('reff2');
        this.loadData();
    }
    KelembagaanSejarahPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getKelengkapanLembaga('sejarah', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanSejarahPage.prototype.reloadData = function (refresher) {
        var _this = this;
        this.authService.getKelengkapanLembaga('sejarah', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            refresher.complete();
        }, function (err) {
            refresher.complete();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanSejarahPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanSejarahPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    KelembagaanSejarahPage.prototype.presentToast = function (msg) {
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
    KelembagaanSejarahPage.prototype.loadForm = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__form_form__["h" /* FormSejarahPage */], { noRegistrasi: this.noRegistrasi, namaLembaga: this.namaLembaga });
        modal.present();
    };
    KelembagaanSejarahPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/sejarah.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'main\'>\n    <ion-title>Sejarah</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="loadForm()">\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="reloadData($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list>\n    <ion-row padding>\n      <ion-item text-wrap>\n        <p>Informasi mengenai sejarah Lembaga terkait.</p>\n        <p class="text-main"><b>{{ namaLembaga }}.</b></p>\n        <ion-icon name="time" item-end color="bright"></ion-icon>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Sejarah singkat.</b> <br/><br/> {{ data.deskripsi }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Tanggal didirikan.</b> <br /><br /> {{ data.tanggalDidirikan }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Kepemilikan.</b> <br /><br /> {{ data.kepemilikan }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Sertifikasi.</b>  <br/><br/> {{ data.statusSertifikasi }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Status Tanah.</b>  <br/><br/> {{ data.statusTanah }}</p>\n      </ion-item>\n      <ion-item>\n        <p><b>Luas Tanah.</b>  <br/><br/> {{ data.luasTanah }} {{ data.satuanLuasTanah }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Luas Bangunan.</b>  <br/><br/> {{ data.luasBangunan }} {{ data.satuanLuasBangunan }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Kondisi Bangunan.</b>  <br/><br/> {{ data.kondisiBangunan }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Jumlah Bangunan.</b>  <br/><br/> {{ data.JumlahBangunan }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Saranan / Prasarana.</b>  <br/><br/> {{ data.statusSarana }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Struktur Organisasi.</b>  <br/><br/> {{ data.statusStrukturKepengurusan }}</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Bahasa Pengantar.</b>  <br/><br/> {{ data.bahasaPengantar }}</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Sensus.</b>  <br/><br/> {{ data.statusSensus }}</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Bantuan Pemerintah.</b>  <br/><br/> {{ data.statusBantuanPemerintah }}</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Kondisi Geografis.</b>  <br/><br/> {{ data.kondisiGeografis }}</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Potensi Wilayah.</b>  <br/><br/> {{ data.potensiWilayah }}</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Jenis Wilayah.</b>  <br/><br/> {{ data.jenisWilayah }}</p>\n      </ion-item>\n      <ion-item margin-bottom class="no-border">\n        <p><b>Catatan.</b>  <br/><br/> {{ data.catatanLain }}</p>\n      </ion-item>\n    </ion-row>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/sejarah.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], KelembagaanSejarahPage);
    return KelembagaanSejarahPage;
}());

// ---------------------------------------------------------------------------
var KelembagaanKepengurusanPage = /** @class */ (function () {
    function KelembagaanKepengurusanPage(platform, params, viewCtrl, modalCtrl, authService, loadingCtrl, toastCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.urlServer = "";
        this.data = {
            noRegistrasi: "-",
            penanggungJawab: "-",
            jabatan: "-",
            alamat: "-",
            alamatLengkap: "-",
            noTelp: "-",
            kewarganegaraan: "-",
            tempatLahir: "-",
            tanggalLahir: "-",
            jenisKelamin: "-",
            agama: "-",
            jabatanLain: "-",
            pendidikan: "-",
            kompetensi: "-",
            catatan: "-"
        };
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('reff');
        this.namaLembaga = params.get('reff2');
        this.loadData();
    }
    KelembagaanKepengurusanPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getKelengkapanLembaga('kepengurusan', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanKepengurusanPage.prototype.reloadData = function (refresher) {
        var _this = this;
        this.authService.getKelengkapanLembaga('kepengurusan', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            refresher.complete();
        }, function (err) {
            refresher.complete();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanKepengurusanPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanKepengurusanPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    KelembagaanKepengurusanPage.prototype.presentToast = function (msg) {
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
    KelembagaanKepengurusanPage.prototype.loadForm = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__form_form__["c" /* FormKepengurusanPage */], { noRegistrasi: this.noRegistrasi, namaLembaga: this.namaLembaga });
        modal.present();
    };
    KelembagaanKepengurusanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/kepengurusan.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'main\'>\n    <ion-title>Kepengurusan</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="loadForm()">\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="reloadData($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list>\n    <ion-row padding>\n      <ion-item text-wrap>\n        <p>Informasi mengenai kepengurusan Lembaga terkait.</p>\n        <p class="text-main"><b>{{ namaLembaga }}.</b></p>\n        <ion-icon name="people" item-end color="vibrant"></ion-icon>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Penanggung jawab.</b> <br/><br/> {{ data.penanggungJawab }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Jabatan.</b> <br/><br/> {{ data.jabatan }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Alamat.</b> <br/><br/> {{ data.alamatLengkap }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Telp.</b> <br/><br/> {{ data.noTelp }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Kewarganegaraan.</b> <br/><br/> {{ data.kewarganegaraan }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Tempat, Tanggal Lahir.</b> <br/><br/> {{ data.tempatLahir }}, {{ data.tanggalLahir }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Jenis Kelamin.</b> <br/><br/> {{ data.jenisKelamin == "L" ? \'Laki-laki\' : \'\' }}{{ data.jenisKelamin == "P" ? \'Perempuan\' : \'\' }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Agama.</b> <br/><br/> {{ data.agama }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Jabatan lain.</b> <br/><br/> {{ data.jabatanLain }}</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Pendidikan.</b> <br/><br/> {{ data.pendidikan }}</p>\n      </ion-item>\n      <ion-item text-wrap >\n        <p><b>Kompetensi.</b> <br/><br/> {{ data.kompetensi }}</p>\n      </ion-item>\n      <ion-item margin-bottom class="no-border">\n        <p><b>Catatan.</b> <br/><br/> {{ data.catatan }}</p>\n      </ion-item>\n    </ion-row>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/kepengurusan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], KelembagaanKepengurusanPage);
    return KelembagaanKepengurusanPage;
}());

// ---------------------------------------------------------------------------
var KelembagaanUsahaPage = /** @class */ (function () {
    function KelembagaanUsahaPage(platform, params, viewCtrl, modalCtrl, authService, loadingCtrl, toastCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.urlServer = "";
        this.data = {
            noRegistrasi: "-",
            namaUsaha: "-",
            jenisUsaha: "-",
            detailUsaha: "-",
            jumlahPekerja: "-",
            catatan: "-"
        };
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('reff');
        this.namaLembaga = params.get('reff2');
        this.loadData();
    }
    KelembagaanUsahaPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getKelengkapanLembaga('usaha', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanUsahaPage.prototype.reloadData = function (refresher) {
        var _this = this;
        this.authService.getKelengkapanLembaga('usaha', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            refresher.complete();
        }, function (err) {
            refresher.complete();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanUsahaPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanUsahaPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    KelembagaanUsahaPage.prototype.presentToast = function (msg) {
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
    KelembagaanUsahaPage.prototype.loadForm = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__form_form__["i" /* FormUsahaPage */], { noRegistrasi: this.noRegistrasi, namaLembaga: this.namaLembaga });
        modal.present();
    };
    KelembagaanUsahaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/usaha.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'main\'>\n    <ion-title>Usaha</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="loadForm()">\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="reloadData($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list>\n    <ion-row padding>\n      <ion-item text-wrap>\n        <p>Informasi mengenai usaha yang sedang dijalankan oleh Lembaga terkait.</p>\n        <p class="text-main"><b>{{ namaLembaga }}.</b></p>\n        <ion-icon name="pricetag" item-end color="primary"></ion-icon>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Nama Usaha.</b> <br/><br/> {{ data.namaUsaha }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Detail Usaha.</b> <br/><br/> {{ data.detailUsaha }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Jenis Usaha.</b> <br/><br/> {{ data.jenisUsaha }}</p>\n      </ion-item>\n      <ion-item text-wrap>\n        <p><b>Jumlah Pekerja.</b> <br/><br/> {{ data.jumlahPekerja }}</p>\n      </ion-item>\n      <ion-item margin-bottom class="no-border">\n        <p><b>Catatan.</b> <br/><br/> {{ data.catatan }}</p>\n      </ion-item>\n    </ion-row>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/usaha.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], KelembagaanUsahaPage);
    return KelembagaanUsahaPage;
}());

// ---------------------------------------------------------------------------
var KelembagaanPrestasiPage = /** @class */ (function () {
    function KelembagaanPrestasiPage(platform, params, viewCtrl, modalCtrl, authService, loadingCtrl, toastCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.urlServer = "";
        this.form = {
            noRegistrasi: "",
            deskripsi: ""
        };
        this.countData = 0;
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('reff');
        this.namaLembaga = params.get('reff2');
        this.loadData();
    }
    KelembagaanPrestasiPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getKelengkapanLembaga('prestasi', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.countData = Object.keys(_this.data).length;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanPrestasiPage.prototype.reloadData = function (refresher) {
        var _this = this;
        this.authService.getKelengkapanLembaga('prestasi', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            refresher.complete();
        }, function (err) {
            refresher.complete();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanPrestasiPage.prototype.updateLembaga = function () {
        var _this = this;
        this.form.noRegistrasi = this.noRegistrasi;
        this.showLoader();
        this.authService.updateDataLembaga('prestasi', this.form).then(function (result) {
            _this.temp = result;
            if (_this.temp.status == 'success') {
                _this.presentToast('Data prestasi berhasil diperbarui.');
            }
            else {
                _this.presentToast('Data prestasi gagal diperbarui, perika kembali inputan Anda!');
            }
            _this.form.deskripsi = "";
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanPrestasiPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanPrestasiPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    KelembagaanPrestasiPage.prototype.presentToast = function (msg) {
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
    KelembagaanPrestasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/prestasi.html"*/'<ion-header class="static">\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Prestasi</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list padding>\n    <ion-refresher (ionRefresh)="reloadData($event)">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-item class="no-border-top" text-wrap>\n      <p>Informasi mengenai prestasi yang dimiliki oleh Lembaga terkait.</p>\n      <p class="text-main"><b>{{ namaLembaga }}.</b></p>\n      <ion-icon name="trophy" item-end color="bright"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <p>Total data ({{ countData }})</p>\n    </ion-item>\n    <button ion-item *ngFor="let d of data; let first = first; let last = last" [class.no-border]="last">\n      <ion-icon name="trophy" class="text-bright" item-start></ion-icon>\n      <h2 text-wrap>{{d.deskripsi}}</h2>\n    </button>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="clear">\n    <ion-item class="no-border">\n      <ion-input [(ngModel)]="form.deskripsi" type="text" placeholder="Tambah prestasi.."></ion-input>\n      <ion-icon item-right name="md-create" (click)="updateLembaga()"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/prestasi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], KelembagaanPrestasiPage);
    return KelembagaanPrestasiPage;
}());

// ---------------------------------------------------------------------------
var KelembagaanKoleksiPage = /** @class */ (function () {
    function KelembagaanKoleksiPage(platform, params, viewCtrl, modalCtrl, authService, loadingCtrl, toastCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.urlServer = "";
        this.countData = 0;
        this.formData = {
            noRegistrasi: "",
            judulKoleksi: "",
            jenisKoleksi: "",
            deskripsi: ""
        };
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('reff');
        this.namaLembaga = params.get('reff2');
        this.loadData();
    }
    KelembagaanKoleksiPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getKelengkapanLembaga('koleksi', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.countData = Object.keys(_this.data).length;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanKoleksiPage.prototype.reloadData = function (refresher) {
        var _this = this;
        this.authService.getKelengkapanLembaga('koleksi', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            refresher.complete();
        }, function (err) {
            refresher.complete();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanKoleksiPage.prototype.updateLembaga = function () {
        var _this = this;
        this.formData.noRegistrasi = this.noRegistrasi;
        console.log(this.formData);
        this.showLoader();
        this.authService.updateDataLembaga('koleksi', this.formData).then(function (result) {
            _this.temp = result;
            if (_this.temp.status == 'success') {
                _this.presentToast('Data koleksi berhasil diperbarui.');
            }
            else {
                _this.presentToast('Data koleksi gagal diperbarui, perika kembali inputan Anda!');
            }
            _this.formData.judulKoleksi = "";
            _this.formData.jenisKoleksi = "";
            _this.formData.deskripsi = "";
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    KelembagaanKoleksiPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    KelembagaanKoleksiPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    KelembagaanKoleksiPage.prototype.presentToast = function (msg) {
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
    KelembagaanKoleksiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/koleksi.html"*/'<ion-header class="static">\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Koleksi</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="reloadData($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list padding>\n    <ion-item class="no-border-top" text-wrap>\n      <p>Informasi mengenai koleksi yang dimiliki oleh Lembaga terkait.</p>\n      <p class="text-main"><b>{{ namaLembaga }}.</b></p>\n      <ion-icon name="book" item-end color="secondary"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <p>Total data ({{ countData }})</p>\n    </ion-item>\n    <button ion-item *ngFor="let d of data">\n      <ion-icon name="book" class="text-secondary" item-start></ion-icon>\n      <p>{{d.jenisKoleksi}}</p>\n      <h2 text-wrap>{{d.judulKoleksi}}</h2>\n    </button>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="clear">\n    <ion-item>\n      <ion-label>Judul Koleksi</ion-label>\n      <ion-input [(ngModel)]="formData.judulKoleksi" type="text"></ion-input>\n      <ion-icon item-right (click)="updateLembaga()" name="md-create"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jenis Koleksi</ion-label>\n      <ion-select [(ngModel)]="formData.jenisKoleksi">\n        <ion-option value="Buku">Buku</ion-option>\n        <ion-option value="Kitab">Kitab</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class="no-border" margin-bottom>\n      <ion-label>Keterangan</ion-label>\n      <ion-textarea [(ngModel)]="formData.deskripsi" type="text"></ion-textarea>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/kelembagaan/koleksi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], KelembagaanKoleksiPage);
    return KelembagaanKoleksiPage;
}());

//# sourceMappingURL=kelembagaan.js.map

/***/ }),

/***/ 166:
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
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kelembagaan_kelembagaan__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prestasi_prestasi__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__koleksi_koleksi__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_news__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__setting_setting__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__form_form__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__ = __webpack_require__(14);
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
    function HomePage(app, authService, loadingCtrl, toastCtrl, appCtrl, navCtrl, modalCtrl) {
        this.app = app;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.userLevel = "";
        this.userLevel = localStorage.getItem('userLevel');
        // set our app's pages
        if (this.userLevel != '2' && this.userLevel != '1') {
            this.pages = [
                { title: 'Rekapitulasi', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */], icon: 'stats', color: 'main' },
                { title: 'Kelembagaan', component: __WEBPACK_IMPORTED_MODULE_3__kelembagaan_kelembagaan__["f" /* KelembagaanPage */], icon: 'people', color: 'vibrant' },
                { title: 'Prestasi', component: __WEBPACK_IMPORTED_MODULE_4__prestasi_prestasi__["a" /* PrestasiPage */], icon: 'trophy', color: 'bright' },
                { title: 'Koleksi', component: __WEBPACK_IMPORTED_MODULE_5__koleksi_koleksi__["a" /* KoleksiPage */], icon: 'book', color: 'secondary' },
                { title: 'Berita', component: __WEBPACK_IMPORTED_MODULE_6__news_news__["c" /* NewsPage */], icon: 'paper', color: 'primary' },
            ];
        }
        else if (this.userLevel == '2') {
            this.pages = [
                { title: 'Lembaga baru', component: __WEBPACK_IMPORTED_MODULE_9__form_form__["b" /* FormKelembagaanPage */], icon: 'add', color: 'main' },
                { title: 'Kelembagaan', component: __WEBPACK_IMPORTED_MODULE_3__kelembagaan_kelembagaan__["f" /* KelembagaanPage */], icon: 'people', color: 'vibrant' },
                { title: 'Prestasi', component: __WEBPACK_IMPORTED_MODULE_4__prestasi_prestasi__["a" /* PrestasiPage */], icon: 'trophy', color: 'bright' },
                { title: 'Koleksi', component: __WEBPACK_IMPORTED_MODULE_5__koleksi_koleksi__["a" /* KoleksiPage */], icon: 'book', color: 'secondary' },
            ];
        }
        this.other = [
            { title: 'Pengaturan', component: __WEBPACK_IMPORTED_MODULE_8__setting_setting__["d" /* SettingPage */], icon: 'settings', color: '' },
            { title: 'Tentang Aplikasi', component: __WEBPACK_IMPORTED_MODULE_7__about_about__["a" /* AboutPage */], icon: 'ios-information-circle-outline', color: 'primary' },
        ];
    }
    HomePage.prototype.logout = function () {
        this.showLoader();
        this.authService.logout();
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
        this.loading.dismiss();
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
        // Let's navigate from TabsPage to Page
        if (pages.icon == "add") {
            var modal = this.modalCtrl.create(pages.component);
            modal.present();
        }
        else {
            this.navCtrl.push(pages.component);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/home/home.html"*/'<ion-content>\n  <ion-img id="logo-apps" width=\'40\' height=\'40\' src="assets/imgs/icon.png" margin float-left></ion-img>\n  <h3 padding-left class="text-main header-logo-text">DPLEGA APPS</h3>\n  <ion-list>\n    <ion-list-header>Menu</ion-list-header>\n    <button ion-item *ngFor="let p of pages" (click)="navigateTo(p)">\n      <ion-icon name="{{p.icon}}" item-start color="{{p.color}}"></ion-icon>\n      {{p.title}}\n    </button>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>Lainnya</ion-list-header>\n    <button ion-item *ngFor="let o of other" (click)="navigateTo(o)">\n      <ion-icon name="{{o.icon}}" item-start color="{{o.color}}"></ion-icon>\n      {{o.title}}\n    </button>\n    <button ion-item (click)="logout()">\n      <ion-icon name="log-out" item-start color="danger"></ion-icon>\n      Keluar\n    </button>\n  </ion-list>\n</ion-content>\n<!-- \n<ion-tabs color=\'dark\'>\n  <ion-tab [root]="home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="inbox" tabIcon="notifications" tabBadge="1" tabBadgeStyle="bright"></ion-tab>\n  <ion-tab [root]="search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="form" tabIcon="add"></ion-tab>\n</ion-tabs> -->\n\n<!-- <ion-footer>\n  <ion-toolbar>\n    <p text-center>Copyright © 2018 Pemerintah Provinsi Jawa Barat.</p>\n  </ion-toolbar>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prestasi_prestasi__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koleksi_koleksi__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__kelembagaan_kelembagaan__ = __webpack_require__(15);
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
            { title: 'Kelembagaan', component: __WEBPACK_IMPORTED_MODULE_5__kelembagaan_kelembagaan__["f" /* KelembagaanPage */], icon: 'people', color: 'vibrant' },
        ];
        this.loadSummary();
    }
    DashboardPage.prototype.navigateTo = function (index, reff) {
        if (reff === void 0) { reff = null; }
        if (index == 2) {
            localStorage.setItem('kelembagaan-filter-ajuan', 'false');
            localStorage.setItem('kelembagaan-filter-valid', 'false');
            if (reff == 'ajuan') {
                localStorage.setItem('kelembagaan-filter-ajuan', '');
            }
            else if (reff == 'valid') {
                localStorage.setItem('kelembagaan-filter-valid', '');
            }
            else {
                localStorage.setItem('kelembagaan-filter-ajuan', '');
                localStorage.setItem('kelembagaan-filter-valid', '');
            }
        }
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 215:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kelembagaan_kelembagaan__ = __webpack_require__(15);
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
    function SearchPage(navCtrl, modalCtrl, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.keyword = "";
        this.urlServer = "";
        this.userLevel = "";
        this.countData = 0;
        this.urlServer = authService.urlServer;
        this.userLevel = localStorage.getItem('userLevel');
    }
    SearchPage.prototype.searchData = function (keyCode) {
        var _this = this;
        if (keyCode == 13) {
            if (this.keyword != "") {
                this.showLoader();
                this.authService.searchData(this.keyword).then(function (result) {
                    _this.data = result;
                    _this.countData = Object.keys(_this.data).length;
                    if (_this.countData > 0) {
                        _this.dataClone = _this.data;
                        _this.dataClone[-1] = { grup: 'start' };
                    }
                    _this.loading.dismiss();
                }, function (err) {
                    _this.loading.dismiss();
                    _this.presentToast(err);
                    return false;
                });
            }
            else {
                this.data = [];
                this.dataClone = [];
                this.countData = 0;
            }
        }
    };
    SearchPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    SearchPage.prototype.presentToast = function (msg) {
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
    SearchPage.prototype.openLembaga = function (reff) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__kelembagaan_kelembagaan__["a" /* KelembagaanDetailPage */], { reff: reff });
        modal.present();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/search/search.html"*/'<ion-header>\n  <ion-toolbar color=\'main\'> \n    <ion-searchbar [(ngModel)]="keyword" (keypress)="searchData($event.keyCode)" placeholder="Pencarian" class="clear"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div *ngFor="let d of data; let idx = index;">\n      <ion-list-header color="light" *ngIf="d.grup != dataClone[idx-1].grup && userLevel != \'1\'"> {{ d.grup }} </ion-list-header>\n      <ion-list-header color="light" *ngIf="d.grup != dataClone[idx-1].grup && userLevel == \'1\' && d.grup !=\'Lembaga\'"> {{ d.grup }} </ion-list-header>\n      \n      <button (click)="openLembaga(d.kolom_1)" *ngIf="d.grup == \'Lembaga\' && userLevel != \'1\'" ion-item padding-right>\n        <ion-avatar item-start>\n          <img src="{{urlServer}}/img/logo/{{d.kolom_4}}">\n        </ion-avatar>\n        <h3 text-wrap>{{d.kolom_2}}</h3>\n        <p>{{d.kolom_3}} &nbsp; <span class="text-{{d.kolom_5 == \'0\' ? \'danger\' : \'secondary\'}}">\n            <ion-icon name="compass"></ion-icon>\n          </span></p>\n      </button>\n\n      <!--  -->\n      <button (click)="openLembaga(d.kolom_1)" *ngIf="d.grup == \'Prestasi\' && userLevel !=\'1\'" ion-item padding-right>\n        <ion-icon name="trophy" class="text-bright" item-start></ion-icon>\n        <h3 text-wrap>{{d.kolom_3}}</h3>\n        <p text-nowrap>{{d.kolom_4}} {{d.kolom_2}}</p>\n      </button>\n\n      <button *ngIf="d.grup == \'Prestasi\' && userLevel == \'1\'" ion-item padding-right>\n        <ion-icon name="trophy" class="text-bright" item-start></ion-icon>\n        <h3 text-wrap>{{d.kolom_3}}</h3>\n        <p text-nowrap>{{d.kolom_4}} {{d.kolom_2}}</p>\n      </button>\n\n      <!--  -->\n      <button (click)="openLembaga(d.kolom_1)" *ngIf="d.grup == \'Koleksi\' && userLevel !=\'1\'" ion-item padding-right>\n        <ion-icon name="book" class="text-secondary" item-start></ion-icon>\n        <h3 text-wrap>({{d.kolom_3}}) {{d.kolom_4}}</h3>\n        <p text-nowrap>{{d.kolom_5}} {{d.kolom_2}}</p>\n      </button>\n\n      <button *ngIf="d.grup == \'Koleksi\' && userLevel == \'1\'" ion-item padding-right>\n        <ion-icon name="book" class="text-secondary" item-start></ion-icon>\n        <h3 text-wrap>({{d.kolom_3}}) {{d.kolom_4}}</h3>\n        <p text-nowrap>{{d.kolom_5}} {{d.kolom_2}}</p>\n      </button>\n    </div>\n  </ion-list>\n\n  <div *ngIf="countData == 0 || countData == null" class="empty-frame">\n    <ion-icon color="light" name="search" class="icon-big"></ion-icon>\n    <p>Belum ada hasil pencarian.</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_launch_navigator__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_kelembagaan_kelembagaan__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_verification_verification__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_prestasi_prestasi__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_koleksi_koleksi__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_news_news__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_inbox_inbox__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_search_search__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_form_form__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_about_about__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_transfer__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_file_path__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_base64__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_geolocation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_location_accuracy__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_chooser__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_opener__ = __webpack_require__(297);
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
                __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["d" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["a" /* SettingAccountPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["b" /* SettingChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["c" /* SettingFormAccountPage */],
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["d" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["a" /* SettingAccountPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["b" /* SettingChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["c" /* SettingFormAccountPage */],
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_file_opener__["a" /* FileOpener */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(112);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SettingPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingAccountPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SettingChangePasswordPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SettingFormAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(60);
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
            { title: 'Informasi Akun', component: SettingAccountPage, icon: 'information-circle', color: 'primary' },
            { title: 'Ganti Password', component: SettingChangePasswordPage, icon: 'lock', color: 'bright' },
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], SettingPage);
    return SettingPage;
}());

var SettingAccountPage = /** @class */ (function () {
    function SettingAccountPage(events, navCtrl, modalCtrl, viewCtrl, authService) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.urlServer = "";
        this.accountData = {
            avatar: localStorage.getItem('urlGambar'),
            noRegistrasi: localStorage.getItem('noRegistrasi'),
            nama: localStorage.getItem('nama'),
            jabatan: localStorage.getItem('jabatan'),
            alamat: localStorage.getItem('alamatLengkap'),
            noTelp: localStorage.getItem('noTelp'),
            email: localStorage.getItem('email'),
            username: localStorage.getItem('username'),
            userLevel: localStorage.getItem('userLevel'),
            statusAkses: ''
        };
        this.random_ = Math.floor(Math.random() * 20) + 1;
        this.urlServer = authService.urlServer;
        if (this.accountData.userLevel == '7') {
            this.accountData.statusAkses = "Super Admin";
        }
        else if (this.accountData.userLevel == '3') {
            this.accountData.statusAkses = "Operator";
        }
        else if (this.accountData.userLevel == '2') {
            this.accountData.statusAkses = "Penyuluh";
        }
        else if (this.accountData.userLevel == '1') {
            this.accountData.statusAkses = "Lembaga";
        }
        events.subscribe('accountPage:reload', function () {
            _this.refreshData();
        });
    }
    SettingAccountPage.prototype.refreshData = function () {
        this.accountData = {
            avatar: localStorage.getItem('urlGambar'),
            noRegistrasi: localStorage.getItem('noRegistrasi'),
            nama: localStorage.getItem('nama'),
            jabatan: localStorage.getItem('jabatan'),
            alamat: localStorage.getItem('alamatLengkap'),
            noTelp: localStorage.getItem('noTelp'),
            email: localStorage.getItem('email'),
            username: localStorage.getItem('username'),
            userLevel: localStorage.getItem('userLevel'),
            statusAkses: this.accountData.statusAkses
        };
    };
    SettingAccountPage.prototype.openForm = function () {
        var modal = this.modalCtrl.create(SettingFormAccountPage);
        modal.present();
    };
    SettingAccountPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SettingAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/setting/account.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Manajemen Akun</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openForm()">\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-row class="big-avatar-frame">\n      <div class="big-avatar" text-center>\n        <img src="{{urlServer}}/img/avatar/{{accountData.avatar}}?random={{random_}}" *ngIf="accountData.userLevel != \'1\'">\n        <img src="{{urlServer}}/img/logo/{{accountData.avatar}}?random={{random_}}" *ngIf="accountData.userLevel == \'1\'">\n        <!-- <ion-buttons margin-top>\n          <button class="no-shadow" color="bright" ion-button text-capitalize small round>\n            Unggah avatar\n          </button>\n        </ion-buttons> -->\n        <h3>{{accountData.nama}}</h3>\n        <p><b>{{accountData.username}}</b> | {{accountData.statusAkses}}</p>\n      </div>\n      <ion-item color="dark" text-center class="big-avatar-frame" padding></ion-item>\n      <ion-item></ion-item>\n    </ion-row>\n  </ion-list>\n  <ion-list padding margin-top>\n    <!-- <ion-list-header class="text-main">Informasi Akun</ion-list-header> -->\n    <ion-item>\n      <p><b>No Registrasi.</b><br /><br /> {{ accountData.noRegistrasi != "" ? accountData.noRegistrasi : \'-\'}}</p>\n    </ion-item>\n    <ion-item>\n      <p><b>Jabatan.</b><br /><br /> {{accountData.jabatan != "" ? accountData.jabatan : \'-\'}}</p>\n    </ion-item>\n    <ion-item>\n      <p><b>Telp.</b><br /><br /> {{accountData.noTelp != "" ? accountData.noTelp : \'-\'}}</p>\n    </ion-item>\n    <ion-item>\n      <p><b>Email.</b><br /><br /> {{accountData.email != "" ? accountData.email : \'-\'}}</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <p><b>Alamat.</b><br /><br /> {{accountData.alamat != "" ? accountData.alamat : \'-\'}}</p>\n    </ion-item>\n  </ion-list>\n  <!-- <ion-list padding no-margin>\n    <ion-list-header class="text-main">Ubah Password</ion-list-header>\n    <ion-item>\n      <ion-label>Password lama (*)</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password baru (*)</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Ulangi Password baru (*)</ion-label>\n      <ion-input type="password" class="no-border"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-buttons padding-horizontal padding-bottom text-center>\n    <button ion-button class="no-shadow" color="main" round>Ubah Password</button>\n  </ion-buttons> -->\n</ion-content>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/setting/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]])
    ], SettingAccountPage);
    return SettingAccountPage;
}());

var SettingChangePasswordPage = /** @class */ (function () {
    function SettingChangePasswordPage(navCtrl, modalCtrl, viewCtrl, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {
            status: 'failed',
            data: '0'
        };
        this.accountData = {
            username: localStorage.getItem('username'),
            oldPassword: '',
            newPassword: '',
            retypePassword: ''
        };
    }
    SettingChangePasswordPage.prototype.changePassword = function () {
        var _this = this;
        this.showLoader();
        this.authService.changePassword(this.accountData).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.loading.dismiss();
            if (_this.data.status == 'success') {
                _this.presentToast('Password berhasil diubah!');
            }
            else {
                _this.presentToast('Password gagal diubah, periksa kembali Password Anda!');
            }
            _this.accountData = {
                username: localStorage.getItem('username'),
                oldPassword: '',
                newPassword: '',
                retypePassword: ''
            };
        }, function (err) {
            _this.accountData = {
                username: localStorage.getItem('username'),
                oldPassword: '',
                newPassword: '',
                retypePassword: ''
            };
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    SettingChangePasswordPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Harap tunggu...'
        });
        this.loading.present();
    };
    SettingChangePasswordPage.prototype.presentToast = function (msg) {
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
    SettingChangePasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SettingChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changePassword',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/setting/changePassword.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Ganti Password</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list padding no-margin>\n    <ion-list-header class="no-border-top" text-wrap>Penuhi semua poin pada form berikut untuk dapat mengubah Password Anda.</ion-list-header>\n    <ion-item>\n      <ion-label>Password lama (*)</ion-label>\n      <ion-input [(ngModel)]="accountData.oldPassword" type="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password baru (*)</ion-label>\n      <ion-input [(ngModel)]="accountData.newPassword" type="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Ulangi Password baru (*)</ion-label>\n      <ion-input [(ngModel)]="accountData.retypePassword" type="password" class="no-border"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main">\n    <button type="button" (click)="changePassword()" class="text-white" ion-button block clear>Ubah Password</button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/setting/changePassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], SettingChangePasswordPage);
    return SettingChangePasswordPage;
}());

var SettingFormAccountPage = /** @class */ (function () {
    function SettingFormAccountPage(events, navCtrl, modalCtrl, viewCtrl, authService, loadingCtrl, toastCtrl, camera, transfer, file, filePath, actionSheetCtrl, platform) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.urlServer = "";
        this.urlApi = "";
        this.data = { status: 'failed', data: '0' };
        this.accountData = {
            avatar: localStorage.getItem('urlGambar'),
            nama: localStorage.getItem('nama'),
            jabatan: localStorage.getItem('jabatan'),
            alamat: localStorage.getItem('alamat'),
            noTelp: localStorage.getItem('noTelp'),
            email: localStorage.getItem('email'),
            username: localStorage.getItem('username'),
            noRt: localStorage.getItem('noRt'),
            noRw: localStorage.getItem('noRw'),
            kodeKelurahan: localStorage.getItem('kodeKelurahan'),
            kodeKecamatan: localStorage.getItem('kodeKecamatan'),
            kodeWilayah: localStorage.getItem('kodeWilayah'),
            userLevel: localStorage.getItem('userLevel')
        };
        this.lastImage = null;
        this.random_ = Math.floor(Math.random() * 20) + 1;
        this.loadInit();
        this.urlServer = authService.urlServer;
        this.urlApi = authService.urlApi;
    }
    SettingFormAccountPage.prototype.loadInit = function () {
        var _this = this;
        this.showLoader();
        this.authService.getOptionList('wilayah').then(function (result) {
            _this.wilayah = result;
            if (_this.accountData.kodeKecamatan != "") {
                _this.authService.getOptionList('kecamatan', _this.accountData.kodeWilayah).then(function (result) {
                    _this.kecamatan = result;
                    if (_this.accountData.kodeKelurahan != "") {
                        _this.authService.getOptionList('kelurahan', _this.accountData.kodeKecamatan).then(function (result) {
                            _this.kelurahan = result;
                            _this.loading.dismiss();
                        }, function (err) {
                            _this.loading.dismiss();
                            _this.presentToast(err);
                            return false;
                        });
                    }
                    else {
                        _this.loading.dismiss();
                    }
                }, function (err) {
                    _this.loading.dismiss();
                    _this.presentToast(err);
                    return false;
                });
            }
            else {
                _this.loading.dismiss();
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    SettingFormAccountPage.prototype.loadKecamatan = function (idWilayah) {
        var _this = this;
        if (idWilayah != "") {
            this.showLoader();
            this.authService.getOptionList('kecamatan', idWilayah).then(function (result) {
                _this.kecamatan = result;
                _this.loading.dismiss();
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
                return false;
            });
        }
        else {
            this.kecamatan = [];
            this.kelurahan = [];
            this.accountData.kodeKecamatan = "";
            this.accountData.kodeKelurahan = "";
        }
    };
    SettingFormAccountPage.prototype.loadKelurahan = function (idKecamatan) {
        var _this = this;
        if (idKecamatan != "") {
            this.showLoader();
            this.authService.getOptionList('kelurahan', idKecamatan).then(function (result) {
                _this.kelurahan = result;
                _this.loading.dismiss();
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
                return false;
            });
        }
        else {
            this.kelurahan = [];
            this.accountData.kodeKelurahan = "";
        }
    };
    SettingFormAccountPage.prototype.changeAccount = function () {
        var _this = this;
        this.showLoader();
        this.authService.changeAccount(this.accountData).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            if (_this.data.status == 'success') {
                localStorage.setItem('nama', _this.accountData.nama);
                localStorage.setItem('jabatan', _this.accountData.jabatan);
                localStorage.setItem('alamat', _this.accountData.alamat);
                localStorage.setItem('noTelp', _this.accountData.noTelp);
                localStorage.setItem('email', _this.accountData.email);
                localStorage.setItem('noRt', _this.accountData.noRt);
                localStorage.setItem('noRw', _this.accountData.noRw);
                localStorage.setItem('kodeKelurahan', _this.accountData.kodeKelurahan);
                localStorage.setItem('kodeKecamatan', _this.accountData.kodeKecamatan);
                localStorage.setItem('kodeWilayah', _this.accountData.kodeWilayah);
                _this.authService.relogin(_this.accountData).then(function (result) {
                    _this.loading.dismiss();
                    _this.presentToast('Informasi Akun berhasil diubah!');
                    _this.reloginData = result;
                    localStorage.setItem('nama', _this.reloginData.nama);
                    localStorage.setItem('jabatan', _this.reloginData.jabatan);
                    localStorage.setItem('alamat', _this.reloginData.alamat);
                    localStorage.setItem('alamatLengkap', _this.reloginData.alamatLengkap);
                    localStorage.setItem('noTelp', _this.reloginData.noTelp);
                    localStorage.setItem('email', _this.reloginData.email);
                    // localStorage.setItem('urlGambar', this.reloginData.urlGambar);
                    localStorage.setItem('noRt', _this.reloginData.noRt);
                    localStorage.setItem('noRw', _this.reloginData.noRw);
                    localStorage.setItem('kodeKelurahan', _this.reloginData.kodeKelurahan);
                    localStorage.setItem('kodeKecamatan', _this.reloginData.kodeKecamatan);
                    localStorage.setItem('kodeWilayah', _this.reloginData.kodeWilayah);
                    _this.accountData = {
                        avatar: localStorage.getItem('urlGambar'),
                        nama: localStorage.getItem('nama'),
                        jabatan: localStorage.getItem('jabatan'),
                        alamat: localStorage.getItem('alamat'),
                        noTelp: localStorage.getItem('noTelp'),
                        email: localStorage.getItem('email'),
                        username: localStorage.getItem('username'),
                        noRt: localStorage.getItem('noRt'),
                        noRw: localStorage.getItem('noRw'),
                        kodeKelurahan: localStorage.getItem('kodeKelurahan'),
                        kodeKecamatan: localStorage.getItem('kodeKecamatan'),
                        kodeWilayah: localStorage.getItem('kodeWilayah'),
                        userLevel: localStorage.getItem('userLevel'),
                    };
                    _this.events.publish('accountPage:reload');
                }, function (err) {
                    _this.loading.dismiss();
                    _this.presentToast(err);
                });
            }
            else {
                _this.presentToast('Informasi Akun gagal diubah, periksa kembali inputan Anda!');
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    SettingFormAccountPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Harap tunggu...'
        });
        this.loading.present();
    };
    SettingFormAccountPage.prototype.presentToast = function (msg) {
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
    SettingFormAccountPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    // UPLOAD package
    SettingFormAccountPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Pilih gambar',
            buttons: [
                {
                    text: 'Galeri',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Kamera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Batalkan',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SettingFormAccountPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Terjadi kesalahan : Error saat memilih gambar!.');
        });
    };
    // Create a new name for the image
    SettingFormAccountPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    SettingFormAccountPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            _this.uploadImage();
        }, function (error) {
            _this.presentToast('Terjadi kesalahan : Error saat menyimpan gambar!.');
        });
    };
    // Always get the accurate path to your apps folder
    SettingFormAccountPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    SettingFormAccountPage.prototype.uploadImage = function () {
        var _this = this;
        // Destination URL
        var url = this.urlApi + "/public/upload/account/avatar/";
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.lastImage;
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename, 'username': localStorage.getItem('username') }
        };
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            _this.presentToast('Avatar berhasil diubah.');
            _this.uploadData = data;
            _this.uploadData.response = JSON.parse(_this.uploadData.response);
            _this.accountData.avatar = _this.uploadData.response.filename;
            _this.random_ = Math.floor(Math.random() * 20) + 1;
            _this.authService.relogin(_this.accountData).then(function (result) {
                _this.reloginData = result;
                localStorage.setItem('urlGambar', _this.reloginData.urlGambar);
                _this.events.publish('accountPage:reload');
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
            });
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Terjadi kesalahan! gagal mengubah Avatar.');
        });
    };
    SettingFormAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-formAccount',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/setting/formAccount.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Form Akun</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-row class="big-avatar-frame">\n      <div class="big-avatar" text-center>\n        <!-- <img src="{{lastImageBase64}}" [hidden]="lastImage === null"> -->\n        <img src="{{urlServer}}/img/avatar/{{accountData.avatar}}?random={{random_}}" *ngIf="accountData.userLevel != \'1\'">\n        <img src="{{urlServer}}/img/logo/{{accountData.avatar}}?random={{random_}}" *ngIf="accountData.userLevel == \'1\'">\n        <ion-buttons margin-top>\n          <button (click)="presentActionSheet()" class="no-shadow" color="bright" ion-button text-capitalize small round>\n            Unggah avatar\n          </button>\n        </ion-buttons>\n      </div>\n      <ion-item color="dark" text-center class="big-avatar-frame" padding></ion-item>\n      <ion-item></ion-item>\n    </ion-row>\n  </ion-list>\n  <ion-list padding>\n    <ion-row>\n      <ion-item>\n        <ion-label>Nama</ion-label>\n        <ion-input [(ngModel)]="accountData.nama" type="text" no-border></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Jabatan</ion-label>\n        <ion-input [(ngModel)]="accountData.jabatan" type="text" no-border></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Alamat</ion-label>\n        <ion-textarea [(ngModel)]="accountData.alamat" type="text"></ion-textarea>\n      </ion-item>\n      <ion-col col-6 no-padding>\n        <ion-item class="no-border-1-layer">\n          <ion-label>RT</ion-label>\n          <ion-input [(ngModel)]="accountData.noRt" type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 no-padding>\n        <ion-item class="no-border-1-layer">\n          <ion-label>RW</ion-label>\n          <ion-input [(ngModel)]="accountData.noRw" type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-item>\n        <ion-label>Wilayah</ion-label>\n        <ion-select [(ngModel)]="accountData.kodeWilayah" (ionChange)="loadKecamatan(accountData.kodeWilayah)">\n          <ion-option value="" selected="{{accountData.wilayah == \'\' ? selected : \'\' }}"></ion-option>\n          <ion-option *ngFor="let d of wilayah" value="{{ d.value }}" selected="{{accountData.kodeWilayah == d.value ? selected : \'\' }}">{{d.caption }}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Kecamatan</ion-label>\n        <ion-select [(ngModel)]="accountData.kodeKecamatan" (ionChange)="loadKelurahan(accountData.kodeKecamatan)">\n          <ion-option value="" selected="{{accountData.kecamatan == \'\' ? selected : \'\' }}"></ion-option>\n          <ion-option *ngFor="let d of kecamatan" value="{{ d.value }}" selected="{{accountData.kodeKecamatan == d.value ? selected : \'\' }}">{{d.caption }}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Kelurahan</ion-label>\n        <ion-select [(ngModel)]="accountData.kodeKelurahan">\n          <ion-option value="" selected="{{accountData.kelurahan == \'\' ? selected : \'\' }}"></ion-option>\n          <ion-option *ngFor="let d of kelurahan" value="{{ d.value }}" selected="{{accountData.kodeKelurahan == d.value ? selected : \'\' }}">{{d.caption }}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Telp</ion-label>\n        <ion-input [(ngModel)]="accountData.noTelp" type="text"></ion-input>\n      </ion-item>\n      <ion-item class="no-border" margin-bottom>\n        <ion-label>Email</ion-label>\n        <ion-input [(ngModel)]="accountData.email" type="email"></ion-input>\n      </ion-item>\n    </ion-row>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main">\n    <button class="text-white" (click)="changeAccount()" ion-button block clear>Ubah data Akun</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/setting/formAccount.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], SettingFormAccountPage);
    return SettingFormAccountPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(112);
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
                localStorage.setItem('namaLembaga', _this.data.namaLembaga);
                localStorage.setItem('jabatan', _this.data.jabatan);
                localStorage.setItem('alamat', _this.data.alamat);
                localStorage.setItem('alamatLengkap', _this.data.alamatLengkap);
                localStorage.setItem('noTelp', _this.data.noTelp);
                localStorage.setItem('email', _this.data.email);
                localStorage.setItem('username', _this.data.username);
                localStorage.setItem('urlGambar', _this.data.urlGambar);
                localStorage.setItem('userLevel', _this.data.userLevel);
                localStorage.setItem('noRt', _this.data.noRt);
                localStorage.setItem('noRw', _this.data.noRw);
                localStorage.setItem('kodeKelurahan', _this.data.kodeKelurahan);
                localStorage.setItem('kodeKecamatan', _this.data.kodeKecamatan);
                localStorage.setItem('kodeWilayah', _this.data.kodeWilayah);
                localStorage.setItem('lingkupArea', _this.data.lingkupArea);
                localStorage.setItem('idBatasArea', _this.data.idBatasArea);
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
            content: 'Memeriksa...'
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/login/login.html"*/'<ion-content padding center text-center>\n  <ion-img id="logo" width=\'72\'height=\'72\' src="assets/imgs/gedung-sate-200x200_.png"></ion-img>\n  <ion-title>DPLEGA APPS</ion-title>\n  <form (submit)="doLogin()" method="POST">\n    <ion-list class="form-style" padding margin-top> \n      <ion-item>\n        <ion-input [(ngModel)]="loginData.username" name="username" type="text" placeholder="Username"></ion-input>\n      </ion-item>\n      <ion-item class="no-border">\n        <ion-input [(ngModel)]="loginData.password" name="password" placeholder="Password" type="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-buttons padding>\n      <button color="dark" ion-button full type="submit">Masuk</button>\n    </ion-buttons>\n  </form>\n  <p text-center>Copyright © 2018 Pemerintah Provinsi Jawa Barat.</p>\n  <p text-center>v.01</p>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VerificationPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevisionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
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
    function VerificationPage(platform, params, viewCtrl, authService, modalCtrl, loadingCtrl, toastCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.urlServer = "";
        this.statusValid = "";
        this.checkData = [];
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('reff');
        this.lembaga = params.get('reff2');
        this.bentukLembaga = params.get('reff3');
        this.namaLembaga = params.get('reff4');
        this.loadData();
    }
    VerificationPage.prototype.openRevision = function (reff, reff2) {
        var modal = this.modalCtrl.create(RevisionPage, { reff: reff, reff2: reff2 });
        modal.present();
    };
    VerificationPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getKelengkapanLembaga('verifikasi', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.statusValid = _this.temp[0].statusValid;
            _this.dataClone = _this.data;
            _this.dataClone[-1] = { idGrup: 'start' };
            _this.loading.dismiss();
            console.log(_this.data);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    VerificationPage.prototype.verifying = function (kodePersyaratan, grup, index) {
        var _this = this;
        // console.log("kodepersyaratan : " + kodePersyaratan);
        // console.log("index : " + index);
        // console.log("grup : " + grup);
        // console.log("value : " + this.data[index].statusVerifikasi);
        var statusVerifikasi = 0;
        if (this.data[index].statusVerifikasi === true) {
            statusVerifikasi = 1;
        }
        var dumb = {
            noRegistrasi: this.noRegistrasi,
            kodePersyaratan: kodePersyaratan,
            grup: grup,
            statusVerifikasi: statusVerifikasi
        };
        console.log("Data post");
        console.log(dumb);
        // return false;
        this.showLoader();
        this.authService.updateDataLembaga('verifikasi', dumb).then(function (result) {
            // this.temp = result;
            console.log("Data result");
            console.log(result);
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    VerificationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    VerificationPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    VerificationPage.prototype.presentToast = function (msg) {
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
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/verification/verification.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'main\'>\n    <ion-title>Verifikasi Lembaga</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item color=\'light\' class="no-border">\n      <h1>{{ namaLembaga }}</h1>\n      <p>{{ bentukLembaga }}</p>\n    </ion-item>\n    <ion-item>\n      <ion-toggle checked="{{ statusValid == \'valid\' ? \'true\' : \'false\' }}"></ion-toggle>\n      <ion-label>\n        Konfimasi keabsahan data\n      </ion-label>\n      <ion-icon color="main" name=\'md-checkmark-circle-outline\' item-start></ion-icon>\n    </ion-item>\n    <button ion-item (click)="openRevision(noRegistrasi, lembaga)" class="no-border">\n      <ion-icon name="chatbubbles" item-start color="secondary"></ion-icon>\n      Catatan revisi\n    </button>\n    <div *ngFor="let d of data; let idx = index;">\n      <ion-list-header color="light" *ngIf="d.idGrup != dataClone[idx-1].idGrup"> {{d.namaGrup}}</ion-list-header>\n      <ion-item-sliding>\n        <ion-item>\n          <ion-label>{{ d.nama }}</ion-label>\n          <ion-checkbox color="main" [(ngModel)]="d.statusVerifikasi" (click)="verifying(d.kode, d.idGrup, idx)"></ion-checkbox>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="main">\n            Lihat Berkas\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/verification/verification.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _g || Object])
    ], VerificationPage);
    return VerificationPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

var RevisionPage = /** @class */ (function () {
    function RevisionPage(platform, params, viewCtrl, authService, modalCtrl, loadingCtrl, toastCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.userLevel = "";
        this.urlServer = "";
        this.countData = 0;
        this.catatanRevisi = "";
        this.userLevel = localStorage.getItem('userLevel');
        this.urlServer = authService.urlServer;
        this.noRegistrasi = params.get('reff');
        this.lembaga = params.get('reff2');
        this.loadData();
    }
    RevisionPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getKelengkapanLembaga('revisi', this.noRegistrasi).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.dataClone = _this.data;
            _this.dataClone[-1] = { tanggal: 'start' };
            _this.countData = Object.keys(_this.data).length;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    RevisionPage.prototype.insertData = function (keyCode) {
        var _this = this;
        if (keyCode == 13) {
            if (this.catatanRevisi != "") {
                var param = {
                    noRegistrasi: this.noRegistrasi,
                    catatan: this.catatanRevisi,
                    username: localStorage.getItem('username')
                };
                this.authService.insertDataLembaga('revisi', param).then(function (result) {
                    _this.temp = result;
                    if (_this.temp.status == "success") {
                        _this.loadData();
                        _this.catatanRevisi = "";
                    }
                    else
                        _this.presentToast('Terjadi kesalahan! revisi gagal ditambahkan.');
                }, function (err) {
                    _this.loading.dismiss();
                    _this.presentToast(err);
                    return false;
                });
            }
        }
    };
    RevisionPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RevisionPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    RevisionPage.prototype.presentToast = function (msg) {
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
    RevisionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/verification/revision.html"*/'<ion-header class="static">\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Revisi</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list padding>\n    <ion-item class="no-border-top" text-wrap>\n      <p>Historial catatan revisi yang dikirimkan ke Lembaga, terkait verifikasi.</p>\n      <p class="text-main"><b>{{ lembaga }}</b></p>\n      <ion-icon name="chatbubbles" item-end color="secondary"></ion-icon>\n    </ion-item>\n    <ion-item class="no-border">\n      <p>Total data ({{ countData }})</p>\n    </ion-item>\n    <div *ngFor="let d of data; let idx = index; let first = first; let last = last">\n      <ion-list-header color="light" *ngIf="d.tanggal != dataClone[idx-1].tanggal"> {{d.tanggal | date:\'yyyy MMM dd\'}}</ion-list-header>\n      <ion-item *ngIf="d.grup == \'verifikasi\'" text-wrap [class.no-border]="last">\n          <ion-icon name="document" class="text-vibrant" item-start></ion-icon>\n          <h3 class="text-main">{{d.namaPersyaratan}}</h3>\n          <p>({{ d.type }})</p>\n          <p>{{d.catatan}}</p>\n          <ion-note item-end>{{d.jam}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="d.grup == \'revisi\'" text-wrap [class.no-border]="last">\n          <ion-icon name="ios-chatbubbles" class="text-secondary" item-start></ion-icon>\n          {{d.catatan}}\n          <ion-note item-end>{{d.jam}}</ion-note>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n\n<ion-footer *ngIf="userLevel != \'1\' && userLevel !=\'2\'">\n  <ion-toolbar color="clear">\n    <ion-item class="no-border">\n      <ion-input [(ngModel)]="catatanRevisi" (keypress)="insertData($event.keyCode)" type="text" placeholder="Ketik catatan revisi.."></ion-input>\n      <ion-icon item-right name="md-create" (click)="insertData(13)"></ion-icon>\n    </ion-item>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/verification/revision.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]) === "function" && _g || Object])
    ], RevisionPage);
    return RevisionPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NewsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NewsFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(60);
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
        this.urlServer = "";
        this.urlServer = authService.urlServer;
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
        var modal = this.modalCtrl.create(NewsDetailPage, { newsId: newsId });
        modal.present();
    };
    NewsPage.prototype.openForm = function (newsId) {
        var modal = this.modalCtrl.create(NewsFormPage, { newsId: newsId });
        modal.present();
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/news/news.html"*/'<ion-header>\n  <ion-navbar color=\'main\' hideBackButton>\n    <ion-title>Berita</ion-title>\n    <ion-buttons left>\n      <button ion-button navPop icon-only>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openForm()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let d of data" margin-bottom>\n    <img src="{{urlServer}}/img/news/{{d.urlGambar}}" />\n    <ion-card-content padding-right>\n      <ion-card-title>{{d.judulBerita}}</ion-card-title>\n      <p margin-bottom><ion-icon name=\'time\'></ion-icon> {{d.createdDate}} oleh <b class="capitalize">{{d.createdBy}}</b></p>\n      <p>{{d.deskripsi}} ...</p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="vibrant" icon-start (click)="openModal(d.idData)">\n          <ion-icon name=\'search\'></ion-icon>\n          Baca berita\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="vibrant" icon-start (click)="openForm(d.idData)">\n          <ion-icon name=\'md-create\'></ion-icon>\n          Ubah\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="vibrant" icon-start>\n          <ion-icon name=\'trash\'></ion-icon>\n          Hapus\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)="loadData($event)" threshold="100px">\n    <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="Memuat data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/news/news.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], NewsPage);
    return NewsPage;
}());

var NewsDetailPage = /** @class */ (function () {
    function NewsDetailPage(viewCtrl, params, modalCtrl, authService, loadingCtrl, toastCtrl) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.urlServer = "";
        this.idData = "";
        this.data = {
            idData: "",
            judulBerita: "",
            deskripsi: "",
            urlGambar: "",
            createdBy: "",
            createdDate: ""
        };
        this.urlServer = authService.urlServer;
        this.idData = params.get('newsId');
        this.loadData();
    }
    NewsDetailPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getDataById('berita', this.idData).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    NewsDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewsDetailPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    NewsDetailPage.prototype.presentToast = function (msg) {
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
    NewsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/news/detail.html"*/'<ion-header class="static">\n  <ion-toolbar color=\'dark\'>\n    <ion-title>Baca berita</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <h1>{{ data.judulBerita }}</h1>\n      <p>{{ data.createdDate }} oleh {{ data.createdBy }}</p>\n    </ion-item>\n    <ion-item><img src="{{urlServer}}/img/news/{{data.urlGambar}}" /></ion-item>\n    <ion-item text-wrap>\n      {{ data.deskripsi }}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/news/detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], NewsDetailPage);
    return NewsDetailPage;
}());

var NewsFormPage = /** @class */ (function () {
    function NewsFormPage(viewCtrl, params, modalCtrl, authService, loadingCtrl, toastCtrl, camera, transfer, file, filePath, actionSheetCtrl, platform) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.urlServer = "";
        this.urlApi = "";
        this.idData = "";
        this.data = {
            idData: "",
            judulBerita: "",
            deskripsi: "",
            urlGambar: "",
            createdBy: "",
            createdDate: ""
        };
        this.lastImage = null;
        this.random_ = Math.floor(Math.random() * 20) + 1;
        this.urlServer = authService.urlServer;
        this.idData = params.get('newsId');
        this.loadData();
    }
    NewsFormPage.prototype.loadData = function () {
        var _this = this;
        this.showLoader();
        this.authService.getDataById('berita', this.idData).then(function (result) {
            _this.temp = result;
            _this.data = _this.temp;
            _this.loading.dismiss();
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
            return false;
        });
    };
    NewsFormPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NewsFormPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Memuat data...'
        });
        this.loading.present();
    };
    NewsFormPage.prototype.presentToast = function (msg) {
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
    // UPLOAD package
    NewsFormPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Pilih gambar',
            buttons: [
                {
                    text: 'Galeri',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Kamera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Batalkan',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    NewsFormPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Terjadi kesalahan : Error saat memilih gambar!.');
        });
    };
    // Create a new name for the image
    NewsFormPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    NewsFormPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            // this.uploadImage();
        }, function (error) {
            _this.presentToast('Terjadi kesalahan : Error saat menyimpan gambar!.');
        });
    };
    // Always get the accurate path to your apps folder
    NewsFormPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    NewsFormPage.prototype.uploadImage = function () {
        var _this = this;
        // Destination URL
        var url = this.urlApi + "/public/upload/berita/gambar/";
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.lastImage;
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename, 'idData': this.idData }
        };
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            _this.presentToast('Logo berhasil diubah.');
            // this.uploadData = data;
            // this.uploadData.response = JSON.parse(this.uploadData.response);
            // this.data.avatar = this.uploadData.response.filename;
            // this.random_ = Math.floor(Math.random() * 20) + 1;
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Terjadi kesalahan! gagal mengubah logo.');
        });
    };
    NewsFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form',template:/*ion-inline-start:"/Users/megan/Ionic App/dplegamobile/src/pages/news/form.html"*/'<ion-header class="static">\n  <ion-navbar color=\'dark\' hideBackButton>\n    <ion-title>Form berita</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()" icon-only showWhen="android,windows">\n        <span ion-text color="clear" showWhen="ios">Cancel</span>\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n      </button>\n      <button ion-button (click)="dismiss()" showWhen="ios">\n        <span ion-text color="clear">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item><p>Catatan : Setiap poin pada form ini wajib diisi.</p></ion-item>\n    <ion-item>\n      <img src="assets/imgs/sample.jpg" *ngIf="idData == \'\'">\n      <img src="{{urlServer}}/img/news/{{data.urlGambar}}" *ngIf="idData != \'\'">\n      <ion-buttons margin-top>\n        <button class="no-shadow" color="bright" (click)="presentActionSheet()" ion-button text-capitalize small round>Unggah gambar</button>\n      </ion-buttons>\n    </ion-item>\n    <ion-item>\n      <ion-label>Judul berita</ion-label>\n      <ion-textarea [(ngModel)]="data.judulBerita" type="text"></ion-textarea>\n    </ion-item>\n    <ion-item class="no-border">\n      <ion-label>Isi berita</ion-label>\n      <ion-textarea [(ngModel)]="data.deskripsi" type="text"></ion-textarea>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="main" text-center>\n    <button class="text-white" ion-button clear>Simpan</button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/megan/Ionic App/dplegamobile/src/pages/news/form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], NewsFormPage);
    return NewsFormPage;
}());

//# sourceMappingURL=news.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map