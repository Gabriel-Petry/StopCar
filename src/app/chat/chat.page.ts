import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(public Ctrl : NavController) { }

  navigateToChatPage(){
    this.Ctrl.navigateForward('tabs/tab3');
  }

  ngOnInit() {
  }

}
