import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOtpComponent } from './confirm-otp.component';

describe('ConfirmOtpComponent', () => {
  let component: ConfirmOtpComponent;
  let fixture: ComponentFixture<ConfirmOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmOtpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
