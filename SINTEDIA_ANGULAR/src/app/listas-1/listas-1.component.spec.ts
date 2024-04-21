import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listas1Component } from './listas-1.component';

describe('Listas1Component', () => {
  let component: Listas1Component;
  let fixture: ComponentFixture<Listas1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listas1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Listas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
