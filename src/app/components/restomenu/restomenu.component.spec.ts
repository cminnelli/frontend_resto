import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestomenuComponent } from './restomenu.component';

describe('RestomenuComponent', () => {
  let component: RestomenuComponent;
  let fixture: ComponentFixture<RestomenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestomenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestomenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
