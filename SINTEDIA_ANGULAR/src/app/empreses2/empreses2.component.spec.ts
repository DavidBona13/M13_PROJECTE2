import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empreses2Component } from './empreses2.component';

describe('Empreses2Component', () => {
  let component: Empreses2Component;
  let fixture: ComponentFixture<Empreses2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empreses2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Empreses2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
