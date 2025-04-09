import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VeiculosPageRoutingModule } from './veiculos-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { VeiculosPage } from './veiculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    VeiculosPageRoutingModule
  ],
  declarations: [VeiculosPage]
})
export class VeiculosPageModule {}
