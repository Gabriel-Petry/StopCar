import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forpass',
  templateUrl: './forpass.page.html',
  styleUrls: ['./forpass.page.scss'],
})
export class ForpassPage implements OnInit {

  email:any
  constructor(public route : Router, public authService : AuthenticationService, public Ctrl : NavController) { }

  ngOnInit() {
  }

  async resetPassword(){
    this.authService.resetPassword(this.email).then(() => {
      console.log('reset link sent')
      this.route.navigate(['/login'])
    }
    ).catch((error) => {
      console.log(error);
    })
  }

  navigateToLogPage(){
    this.Ctrl.navigateForward('login');
  }

}
