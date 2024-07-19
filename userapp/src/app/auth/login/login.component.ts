import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  showForgotPasswordLink = false;
  hide=true;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService,private apiService:ApiService) {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('^[^0-9][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
      ]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
 

  onSubmit() {
    if (this.loginForm.valid) {
      const emailValue = this.email?.value;
      const passwordValue = this.password?.value;

      if (emailValue && passwordValue) {
        const loginData = {
          email: emailValue,
          password: passwordValue,
        };

        this.apiService.login(loginData).subscribe({
          next: (response) => {
            console.log(response)
            if (response.success === true) {
              this.toastr.success('Login successful!', 'Success');
              this.router.navigate(['dashboard']);
            } else {
              this.toastr.error(
                'Invalid email or password. Please try again.',
                'Error'
              );
            }
          },
          error: (error) => {
            this.toastr.error(
              'An error occurred during login. Please try again later.',
              'Error'
            );
            console.error('Login error', error);
          },
        });
      } else {
        this.loginForm.markAllAsTouched();
      }
    }
  }










  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     const storedData = localStorage.getItem('registrationData');
  //     if (storedData) {
  //       const registrationData = JSON.parse(storedData) as any[];
  //       const user = registrationData.find((user: any) => user.email === this.email?.value && user.password === this.password?.value);
  //       if (user) {
  //         this.toastr.success('Login successful', 'Success', {
  //           timeOut: 3000,
  //           progressBar: true
  //         });
  //         this.router.navigate(['dashboard']);
  //        }
  //        else {
  //         this.toastr.error('No registered user found', 'Error', {
  //           timeOut: 3000,
  //           progressBar: true
  //         });
  //         this.showForgotPasswordLink = true;
  //       }
  //     } 
  //     // else {
  //     //   this.toastr.error('No registered user found', 'Error', {
  //     //     timeOut: 3000,
  //     //     progressBar: true
  //     //   });
  //     //   this.showForgotPasswordLink = true;
  //     // }
  //   }
  // }
  toggle() {
    this.hide = !this.hide;
  }

  navigateToForgotPassword() {
    this.router.navigate(['forgotpassword']);
  }

  navigateToRegister() {
    this.router.navigate(['registration']);
  }
}














































































// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   // Email = 'anurag@gmail.com';
//   // Password = 'Password@123';
//   showForgotPasswordLink = false;

//   constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
//     this.loginForm = this.fb.group({
//       email: ['', [
//         Validators.required,
//         Validators.pattern('^[^0-9][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
//       ]],
//       password: ['', [
//         Validators.required,
//         Validators.minLength(8),
//         Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
//       ]]
//     });
//   }

//   get email() {
//     return this.loginForm.get('email');
//   }

//   get password() {
//     return this.loginForm.get('password');
//   }

//   onSubmit() {

//     if (this.loginForm.valid) {
//       const storedData = localStorage.getItem('registrationData');
//       if (storedData) {
//         const registrationData = JSON.parse(storedData);
//         if (this.email?.value === registrationData.email && this.password?.value === registrationData.password) {
//           this.toastr.success('Login successful', 'Success', {
//             timeOut: 3000,
//             progressBar: true
//           });
//           this.router.navigate(['dashboard']);
//         } else {
//           this.toastr.error('Invalid email or password', 'Error', {
//             timeOut: 3000,
//             progressBar: true
//           });
//           this.showForgotPasswordLink = true;
//         }
//       } else {
//         this.toastr.error('No registered user found', 'Error', {
//           timeOut: 3000,
//           progressBar: true
//         });
//         this.showForgotPasswordLink = true;
//       }
//     }



    // if (this.loginForm.valid) {
    //   if (this.email?.value === this.Email && this.password?.value === this.Password) {
    //     this.toastr.success('Login successful', 'Success', {
    //       timeOut: 3000,
    //       progressBar: true
    //     });
    //     this.router.navigate(['dashboard']);
    //   } else {
    //     this.toastr.error('Invalid email or password', 'Error', {
    //       timeOut: 3000,
    //       progressBar: true
    //     });
    //     this.showForgotPasswordLink = true;
    //   }
    // }
//   }

//   navigateToForgotPassword() {
//     this.router.navigate(['forgotpassword']);
//   }

//   navigateToRegister() {
//     this.router.navigate(['registration']);
//   }

 
// }
