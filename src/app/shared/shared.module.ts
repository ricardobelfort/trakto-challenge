import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarLightComponent } from './navbar-light/navbar-light.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [NavbarComponent, NavbarLightComponent, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, NavbarLightComponent, PageNotFoundComponent],
})
export class SharedModule {}
