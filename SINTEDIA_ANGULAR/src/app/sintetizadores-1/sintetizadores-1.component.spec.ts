import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sintetizadores1Component } from './sintetizadores-1.component';

describe('Sintetizadores1Component', () => {
  let component: Sintetizadores1Component;
  let fixture: ComponentFixture<Sintetizadores1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sintetizadores1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sintetizadores1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
