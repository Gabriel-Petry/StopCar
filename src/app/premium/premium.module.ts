import { IonicModule } from '@ionic/angular'; //
import { NgModule } from '@angular/core'; //
import { CommonModule } from '@angular/common'; //
import { FormsModule } from '@angular/forms'; //
import { PremiumPage } from './premium.page'; //
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PremiumPageRoutingModule } from './premium-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PremiumPageRoutingModule,
  ],
  declarations: [PremiumPage]
})
export class PremiumPageModule {}