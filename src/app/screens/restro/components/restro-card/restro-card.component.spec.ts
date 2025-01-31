import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroCardComponent } from './restro-card.component';

describe('RestroCardComponent', () => {
  let component: RestroCardComponent;
  let fixture: ComponentFixture<RestroCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestroCardComponent]
    });
    fixture = TestBed.createComponent(RestroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
