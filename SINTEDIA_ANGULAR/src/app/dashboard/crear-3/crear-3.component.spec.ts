import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crear3Component } from './crear-3.component';

describe('Crear3Component', () => {
  let component: Crear3Component;
  let fixture: ComponentFixture<Crear3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crear3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Crear3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
