import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForpassPageRoutingModule } from './forpass-routing.module';

import { ForpassPage } from './forpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForpassPageRoutingModule
  ],
  declarations: [ForpassPage]
})
export class ForpassPageModule {}
