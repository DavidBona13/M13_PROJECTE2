import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crear2Component } from './crear-2.component';

describe('Crear2Component', () => {
  let component: Crear2Component;
  let fixture: ComponentFixture<Crear2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crear2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Crear2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
