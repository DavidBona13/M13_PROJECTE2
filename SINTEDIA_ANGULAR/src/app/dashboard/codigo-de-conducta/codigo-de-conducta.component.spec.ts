import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoDeConductaComponent } from './codigo-de-conducta.component';

describe('CodigoDeConductaComponent', () => {
  let component: CodigoDeConductaComponent;
  let fixture: ComponentFixture<CodigoDeConductaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodigoDeConductaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodigoDeConductaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
