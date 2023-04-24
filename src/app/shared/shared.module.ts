import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarLightComponent } from './navbar-light/navbar-light.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent, NavbarLightComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, NavbarLightComponent],
})
export class SharedModule {}
