import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registerForm: FormGroup;
  hide = true; 

  constructor(private fb: FormBuilder, private toastr: ToastrService,private router: Router,private apiService:ApiService) {
    this.registerForm = this.fb.group({
      firstname: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]],
      lastname: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
      ]],
      phoneNo: ['', [
        Validators.required,
        Validators.pattern('[0-9]{10}')
      ]],
      role: ['', Validators.required],
      address: ['']
    });
  }

  onSubmit() {
    console.log("clicked")
    if (this.registerForm.valid) {
      const newUser = {
        firstname: this.registerForm.value.firstname,
        lastname: this.registerForm.value.lastname,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        phoneNo: this.registerForm.value.phoneNo,
        role: this.registerForm.value.role,
        address: this.registerForm.value.address
      };

      this.apiService.register(newUser).subscribe(data =>{
      
        if(data.success == true){
          this.toastr.success('Registration successful', 'Success', {
            timeOut: 3000,
            progressBar: true
          });
        }
      })
      this.registerForm.reset();
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.get(key)?.setErrors(null);
      });
    } else {
      this.toastr.error('Please fill out the form correctly', 'Error', {
        timeOut: 3000,
        progressBar: true
      });
    }
  }
 
 
 
 
 
 
 
 
 
 
  // onSubmit() {
  //   if (this.registerForm.valid) {
  //     const newUser = {
  //       firstname: this.registerForm.value.firstname,
  //       lastname: this.registerForm.value.lastname,
  //       email: this.registerForm.value.email,
  //       password: this.registerForm.value.password,
  //       phoneno: this.registerForm.value.phoneno,
  //       designation: this.registerForm.value.designation,
  //       message: this.registerForm.value.message
  //     };

  //     let prev = JSON.parse(localStorage.getItem('registrationData') || '[]');
  //     if (!Array.isArray(prev)) {
  //       prev = [];
  //     }
  //     prev.push(newUser);

  //     localStorage.setItem('registrationData', JSON.stringify(prev));

  //     console.log(localStorage.getItem('registrationData'));

  //     this.toastr.success('Registration successful', 'Success', {
  //       timeOut: 3000,
  //       progressBar: true
  //     });

  //     this.registerForm.reset();
  //   } else {
  //     this.toastr.error('Please fill out the form correctly', 'Error', {
  //       timeOut: 3000,
  //       progressBar: true
  //     });
  //   }
  // }
  navigateToLogin(){
    this.router.navigate(['/login']);
  }
}














// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent {
//   registerForm: FormGroup;
//   hide = true; 

//   constructor(private fb: FormBuilder, private toastr: ToastrService) {
//     this.registerForm = this.fb.group({
//       firstname: ['', [
//         Validators.required,
//         Validators.pattern('[a-zA-Z ]*')
//       ]],
//       lastname: ['', [
//         Validators.required,
//         Validators.pattern('[a-zA-Z ]*')
//       ]],
//       email: ['', [
//         Validators.required,
//         Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
//       ]],
//       password: ['', [
//         Validators.required,
//         Validators.minLength(8),
//         Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
//       ]],
//       phoneno: ['', [
//         Validators.required,
//         Validators.pattern('[0-9]{10}')
//       ]],
//       designation: ['', Validators.required],
//       message: ['']
//     });
//   }

//   onSubmit() {
//     console.log('submit clicked')
//     if (this.registerForm.valid) {
//       const formData = this.registerForm.value;
//       localStorage.setItem('registrationData', JSON.stringify(formData));

//       this.toastr.success('Registration successful', 'Success', {
//         timeOut: 3000,
//         progressBar: true
//       });

//       this.registerForm.reset();
//     } else {
//       this.toastr.error('Please fill out the form correctly', 'Error', {
//         timeOut: 3000,
//         progressBar: true
//       });
//     }
//   }
// }
