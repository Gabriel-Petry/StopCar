import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.page.html',
  styleUrls: ['./veiculos.page.scss'],
})
export class VeiculosPage {

  constructor(public navCtrl: NavController) { }

  navigateToPremiumPage() {
    this.navCtrl.navigateForward('tabs/premium');
  }

  navigateToCadCarroPage() {
    this.navCtrl.navigateForward('/ccadastro');
  }

}
