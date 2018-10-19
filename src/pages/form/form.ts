import { Component } from '@angular/core';
import { ModalController, AlertController, ViewController  } from 'ionic-angular';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
  formPage: Array<any>;

  constructor(public modalCtrl: ModalController, public alertCtrl: AlertController) {
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

  openModal(index) {

    let modal = this.modalCtrl.create(this.formPage[index]);
    modal.present();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Konfirmasi',
      message: 'Apakah Anda ingin menghentikan sesi Lembaga ini?',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}


// FORM Kelembagaan
@Component({
  selector: 'page-formKelembagaan',
  templateUrl: 'kelembagaan.html'
})
export class FormKelembagaanPage {
  constructor(public viewCtrl: ViewController) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

// FORM Legalitas
@Component({
  selector: 'page-formLegalitas',
  templateUrl: 'legalitas.html'
})
export class FormLegalitasPage {
  data: Array<{ nama_legalitas: string }>;

  constructor(public viewCtrl: ViewController) {
    this.data = [
      { nama_legalitas : 'Akta Notaris' },
      { nama_legalitas : 'SK Kemenhukam' },
    ];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

// FORM Sejarah
@Component({
  selector: 'page-formSejarah',
  templateUrl: 'sejarah.html'
})
export class FormSejarahPage {

  constructor(public viewCtrl: ViewController) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

// FORM Kepengurusan
@Component({
  selector: 'page-formKepengurusan',
  templateUrl: 'kepengurusan.html'
})
export class FormKepengurusanPage {

  constructor(public viewCtrl: ViewController) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

// FORM Usaha
@Component({
  selector: 'page-formUsaha',
  templateUrl: 'usaha.html'
})
export class FormUsahaPage {

  constructor(public viewCtrl: ViewController) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

// FORM Hirarki
@Component({
  selector: 'page-formHirarki',
  templateUrl: 'hirarki.html'
})
export class FormHirarkiPage {

  constructor(public viewCtrl: ViewController) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

// FORM Koleksi
@Component({
  selector: 'page-formKoleksi',
  templateUrl: 'koleksi.html'
})
export class FormKoleksiPage {
  data: Array<{ noreg: string, nama_koleksi: string, nama_lembaga: string, bentuk_lembaga: string }>;

  constructor(public viewCtrl: ViewController) {
    this.data = [
      { noreg: '1', nama_koleksi: 'Koleksi 1', nama_lembaga: 'Lembaga 1', bentuk_lembaga: 'Yayasan' },
      { noreg: '2', nama_koleksi: 'Koleksi 2', nama_lembaga: 'Lembaga 2', bentuk_lembaga: 'Pondok pesantren' },
      { noreg: '3', nama_koleksi: 'Koleksi 3', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
      { noreg: '3', nama_koleksi: 'Koleksi 4', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
    ]
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

// FORM Prestasi
@Component({
  selector: 'page-formPrestasi',
  templateUrl: 'prestasi.html'
})
export class FormPrestasiPage {
  data: Array<{ noreg: string, nama_prestasi: string, nama_lembaga: string, bentuk_lembaga: string }>;

  constructor(public viewCtrl: ViewController) {
    this.data = [
      { noreg: '1', nama_prestasi: 'Prestasi 1', nama_lembaga: 'Lembaga 1', bentuk_lembaga: 'Yayasan' },
      { noreg: '2', nama_prestasi: 'Prestasi 2', nama_lembaga: 'Lembaga 2', bentuk_lembaga: 'Pondok pesantren' },
      { noreg: '3', nama_prestasi: 'Prestasi 3', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
      { noreg: '3', nama_prestasi: 'Prestasi 4', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
    ]
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}