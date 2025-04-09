import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadmPage } from './cadm.page';

const routes: Routes = [
  {
    path: '',
    component: CadmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadmPageRoutingModule {}
