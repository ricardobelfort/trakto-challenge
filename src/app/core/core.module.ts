import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialDidaticoComponent } from './pages/material-didatico/material-didatico.component';
import { PresentationDetailComponent } from './pages/presentation-detail/presentation-detail.component';
import { PresentationListComponent } from './pages/presentation-list/presentation-list.component';

@NgModule({
  declarations: [DashboardComponent, HomeComponent, MaterialDidaticoComponent, PresentationDetailComponent, PresentationListComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
})
export class CoreModule {}
