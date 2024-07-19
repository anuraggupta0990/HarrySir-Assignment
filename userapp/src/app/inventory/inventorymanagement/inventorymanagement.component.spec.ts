import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorymanagementComponent } from './inventorymanagement.component';

describe('InventorymanagementComponent', () => {
  let component: InventorymanagementComponent;
  let fixture: ComponentFixture<InventorymanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventorymanagementComponent]
    });
    fixture = TestBed.createComponent(InventorymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
