import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcustomersComponent } from './showcustomers.component';

describe('ShowcustomersComponent', () => {
  let component: ShowcustomersComponent;
  let fixture: ComponentFixture<ShowcustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcustomersComponent]
    });
    fixture = TestBed.createComponent(ShowcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
