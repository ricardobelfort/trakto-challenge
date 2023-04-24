import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDidaticoComponent } from './material-didatico.component';

describe('MaterialDidaticoComponent', () => {
  let component: MaterialDidaticoComponent;
  let fixture: ComponentFixture<MaterialDidaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDidaticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialDidaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
