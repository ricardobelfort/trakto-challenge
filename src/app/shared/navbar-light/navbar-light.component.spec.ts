import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLightComponent } from './navbar-light.component';

describe('NavbarLightComponent', () => {
  let component: NavbarLightComponent;
  let fixture: ComponentFixture<NavbarLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
