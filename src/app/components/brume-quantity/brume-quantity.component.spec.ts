import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrumeQuantityComponent } from './brume-quantity.component';

describe('BrumeQuantityComponent', () => {
  let component: BrumeQuantityComponent;
  let fixture: ComponentFixture<BrumeQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrumeQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrumeQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
