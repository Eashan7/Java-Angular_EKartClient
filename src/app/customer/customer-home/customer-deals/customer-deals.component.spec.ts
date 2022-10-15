import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDealsComponent } from './customer-deals.component';

describe('CustomerDealsComponent', () => {
  let component: CustomerDealsComponent;
  let fixture: ComponentFixture<CustomerDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
