import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'splash', loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)},
  { path: 'cadastro', loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)},
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'ccadastro', loadChildren: () => import('./ccadastro/ccadastro.module').then( m => m.CcadastroPageModule)},
  { path: 'chat', loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)},
  { path: 'forpass', loadChildren: () => import('./forpass/forpass.module').then( m => m.ForpassPageModule)},
  { path: 'cadm', loadChildren: () => import('./cadm/cadm.module').then( m => m.CadmPageModule)},
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
