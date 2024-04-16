import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sintetizadores2Component } from './sintetizadores-2.component';

describe('Sintetizadores2Component', () => {
  let component: Sintetizadores2Component;
  let fixture: ComponentFixture<Sintetizadores2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sintetizadores2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sintetizadores2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
