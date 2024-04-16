import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crear1Component } from './crear-1.component';

describe('Crear1Component', () => {
  let component: Crear1Component;
  let fixture: ComponentFixture<Crear1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crear1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Crear1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
