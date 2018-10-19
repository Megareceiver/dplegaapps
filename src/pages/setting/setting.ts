import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  other: Array<{ title: string, component: any, icon: string, color: string }>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    // set our app's pages

    this.other = [
      { title: 'Manjemen Akun', component: SettingAccountPage, icon: 'lock', color: 'bright' },
    ];
  }

  openModal(index) {
    let modal = this.modalCtrl.create(this.other[index].component);
    modal.present();
  }

}

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class SettingAccountPage {

  other: Array<{ title: string, component: any, icon: string, color: string }>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    // set our app's pages
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
