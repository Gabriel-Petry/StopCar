import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

export class CadastroPage implements OnInit{
  regForm : FormGroup
  
  constructor(public navCtrl: NavController, public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService: AuthenticationService, public router : Router) { 

  }

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
    this.regForm = this.formBuilder.group({
      fullname :['', [Validators.required]],
      email :['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+.[a-z]{2,}$')]],
      password :['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&].{7,}')]],
      number :['', [Validators.required]]
    })
  }

  get errorControl(){
    return this.regForm?.controls;
  }

  async signUp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.regForm?.valid){
      const user = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password).catch((error) => {
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
