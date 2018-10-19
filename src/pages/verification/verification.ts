import { Component } from '@angular/core';
import { ModalController, AlertController, Platform, NavParams, ViewController  } from 'ionic-angular';

@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html'
})
export class VerificationPage {
  constructor(public modalCtrl: ModalController, public alertCtrl: AlertController, public viewCtrl: ViewController) {
   
  }

  openRevision() {

    let modal = this.modalCtrl.create(RevisionPage);
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

@Component({
  templateUrl: 'revision.html'
})
export class RevisionPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
