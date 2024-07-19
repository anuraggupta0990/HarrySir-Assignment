import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailinformationComponent } from './detailinformation.component';

describe('DetailinformationComponent', () => {
  let component: DetailinformationComponent;
  let fixture: ComponentFixture<DetailinformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailinformationComponent]
    });
    fixture = TestBed.createComponent(DetailinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
