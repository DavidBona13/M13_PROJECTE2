import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sintetizadores3Component } from './sintetizadores-3.component';

describe('Sintetizadores3Component', () => {
  let component: Sintetizadores3Component;
  let fixture: ComponentFixture<Sintetizadores3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sintetizadores3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sintetizadores3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
