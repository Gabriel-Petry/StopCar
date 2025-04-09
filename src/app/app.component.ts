import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    public router: Router,
  ) {
    this.ngOnInit();
  }

  ngOnInit() {
    SplashScreen.hide();
    this.router.navigateByUrl('splash');
  }
}