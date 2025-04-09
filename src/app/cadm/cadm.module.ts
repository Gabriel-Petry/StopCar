import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadmPageRoutingModule } from './cadm-routing.module';

import { CadmPage } from './cadm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadmPageRoutingModule
  ],
  declarations: [CadmPage]
})
export class CadmPageModule {}
