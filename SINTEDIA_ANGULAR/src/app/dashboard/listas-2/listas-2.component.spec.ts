import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listas2Component } from './listas-2.component';

describe('Listas2Component', () => {
  let component: Listas2Component;
  let fixture: ComponentFixture<Listas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listas2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Listas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
