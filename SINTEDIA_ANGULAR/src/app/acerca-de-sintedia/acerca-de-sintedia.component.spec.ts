import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeSintediaComponent } from './acerca-de-sintedia.component';

describe('AcercaDeSintediaComponent', () => {
  let component: AcercaDeSintediaComponent;
  let fixture: ComponentFixture<AcercaDeSintediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcercaDeSintediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcercaDeSintediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
