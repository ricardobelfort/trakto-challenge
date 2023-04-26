import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
