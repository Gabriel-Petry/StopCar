import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CcadastroPageRoutingModule } from './ccadastro-routing.module';

import { CcadastroPage } from './ccadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CcadastroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CcadastroPage]
})
export class CcadastroPageModule {}
