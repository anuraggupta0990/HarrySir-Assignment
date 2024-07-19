import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });
  }

  ngOnInit(): void {
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  get phoneNumber() {
    return this.forgotPasswordForm.get('phoneNumber');
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      console.log('Form Submitted!', this.forgotPasswordForm.value);
      this.navigateToResetPassword();
    }
  }

  navigateToResetPassword() {
    this.router.navigate(['resetpassword']);
  }

  navigateToLogin() {
    this.router.navigate(['']);
  }
}
