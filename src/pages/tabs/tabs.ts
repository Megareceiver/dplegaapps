import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

import { HomePage } from '../home/home';
import { InboxPage } from '../inbox/inbox';
import { SearchPage } from '../search/search';
import { FormPage } from '../form/form';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  home   = HomePage;
  inbox  = InboxPage;
  search = SearchPage;
  form   = FormPage;
  inboxCounter : any = 0;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public authService: AuthService) {
    this.getCountInbox();
  }

  getCountInbox(){
    this.authService.getCountNotifications().then((result) => {
      this.inboxCounter = result;
    }, (err) => {
      console.log(err);
    });
  }
}
