import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CcadastroPage } from './ccadastro.page';

const routes: Routes = [
  {
    path: '',
    component: CcadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CcadastroPageRoutingModule {}
