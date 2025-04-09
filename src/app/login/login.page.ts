import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit{
  logForm : FormGroup
  
  constructor(public navCtrl: NavController, public formBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService: AuthenticationService, public router : Router) { 

  }

  navigateToMenuPage() {
    this.navCtrl.navigateForward('tabs/tab1');
  }

  navigateToCadPage() {
    this.navCtrl.navigateForward('cadastro');
  }

  navigateToFPPage() {
    this.navCtrl.navigateForward('forpass');
  }

  ngOnInit() {
    this.logForm = this.formBuilder.group({
      email :['', [Validators.required, Validators.email, Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+.[a-z]{2,}$")]],
      password :['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&].{7,}')]],
    })
  }

  async log(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.logForm?.valid){
      const user = await this.authService.loginUser(this.logForm.value.email, this.logForm.value.password).catch((error) => {
        console.log(error);
        loading.dismiss();
      })

      if(user){
        loading.dismiss();
        this.router.navigate(['tabs/tab1'])
      } else {
        console.log('Provide correct information');
      }
    }
  }

  get errorControl(){
    return this.logForm.controls;
  }

}