import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent {

  createuserForm: FormGroup ;
  hide = true; 

  constructor(private fb: FormBuilder, private toastr: ToastrService,private router: Router) {
    this.createuserForm = this.fb.group({
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
      phoneno: ['', [
        Validators.required,
        Validators.pattern('[0-9]{10}')
      ]],
      designation: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.createuserForm.valid) {
      const createUser = {
        firstname: this.createuserForm.value.firstname,
        lastname: this.createuserForm.value.lastname,
        email: this.createuserForm.value.email,
        password: this.createuserForm.value.password,
        phoneno: this.createuserForm.value.phoneno,
        designation: this.createuserForm.value.designation,
        message: this.createuserForm.value.message
      };

      let prev = JSON.parse(localStorage.getItem('createduserData') || '[]');
      if (!Array.isArray(prev)) {
        prev = [];
      }
      prev.push(createUser);

      localStorage.setItem('createduserData', JSON.stringify(prev));

      console.log(localStorage.getItem('createduserData'));

      this.toastr.success('Registration successful', 'Success', {
        timeOut: 3000,
        progressBar: true
      });

      this.createuserForm.reset();
    } else {
      this.toastr.error('Please fill out the form correctly', 'Error', {
        timeOut: 3000,
        progressBar: true
      });
    }
  }
  navigateToDashBoard(){
    this.router.navigate(['dashboard']);
  }
}
