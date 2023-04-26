import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { DesignResolver } from './guards/design.resolver';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialDidaticoComponent } from './pages/material-didatico/material-didatico.component';
import { PresentationDetailComponent } from './pages/presentation-detail/presentation-detail.component';
import { PresentationListComponent } from './pages/presentation-list/presentation-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'presentation', component: MaterialDidaticoComponent },
      { path: 'all-presentations', component: PresentationListComponent },
      {
        path: 'presentation/:id',
        component: PresentationDetailComponent,
        resolve: { design: DesignResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
