import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadm',
  templateUrl: './cadm.page.html',
  styleUrls: ['./cadm.page.scss'],
})
export class CadmPage implements OnInit {

  constructor(public navCtrl : NavController) { }

  navigateToMenuPage() {
    this.navCtrl.navigateForward('tabs/tab1');
  }

  navigateToCadPage() {
    this.navCtrl.navigateForward('cadastro');
  }

  navigateToLogPage() {
    this.navCtrl.navigateForward('login');
  }

  navigateToCadMecPage() {
    this.navCtrl.navigateForward('cadm');
  }

  ngOnInit() {
  }

}
