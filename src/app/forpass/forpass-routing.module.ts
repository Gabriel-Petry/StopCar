import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForpassPage } from './forpass.page';

const routes: Routes = [
  {
    path: '',
    component: ForpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForpassPageRoutingModule {}
