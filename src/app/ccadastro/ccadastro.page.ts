import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ccadastro',
  templateUrl: './ccadastro.page.html',
  styleUrls: ['./ccadastro.page.scss'],
})
export class CcadastroPage implements OnInit {

  regCCForm : FormGroup
  constructor(public navCtrl: NavController, public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService: AuthenticationService, public router : Router) { }

  navigateToMenuPage() {
    this.navCtrl.navigateForward('tabs/tab1');
  }

  navigateToCadPage() {
    this.navCtrl.navigateForward('cadastro');
  }

  navigateToLogPage() {
    this.navCtrl.navigateForward('login');
  }

  navigateToVeiPage() {
    this.navCtrl.navigateForward('tabs/veiculos');
  }

  ngOnInit() {
    this.regCCForm = this.formBuilder.group({
      marca :[''],
      number :['']
    })
  }

  get errorControl(){
    return this.regCCForm?.controls;
  }

  async signUp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.regCCForm?.valid){
      const user = await this.authService.registerUser(this.regCCForm.value.email, this.regCCForm.value.password).catch((error) => {
        console.log(error);
        loading.dismiss()
      })

      if(user){
        loading.dismiss()
        this.router.navigate(['tabs/tab1'])
      } else {
        console.log('Provide correct information')
      }

    }
  }

}
