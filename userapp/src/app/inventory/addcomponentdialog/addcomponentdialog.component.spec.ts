import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomponentdialogComponent } from './addcomponentdialog.component';

describe('AddcomponentdialogComponent', () => {
  let component: AddcomponentdialogComponent;
  let fixture: ComponentFixture<AddcomponentdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcomponentdialogComponent]
    });
    fixture = TestBed.createComponent(AddcomponentdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
