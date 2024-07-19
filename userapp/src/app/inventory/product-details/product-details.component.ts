import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [DatePipe] 
})
export class ProductDetailsComponent {
  form: FormGroup;
  imageValid: boolean = true;
  selectedFile: File | null = null;
  imageBase64: string | null = null;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private apiService: ApiService,
    private datePipe: DatePipe  
  ) {
    this.form = this.fb.group({
      component: ['', Validators.required],
      observationpoint: ['', Validators.required],
      optype: ['', Validators.required],
      worm: ['', Validators.required],
      cracklength: ['', Validators.required],
      crackmeasurement: ['', Validators.required],
      crackseverity: ['', Validators.required],
      startingdim: ['', Validators.required],
      usedlimit: ['', Validators.required],
      budgetlife: ['', Validators.required],
      lifehours: ['', Validators.required],
      lifetotal: ['', Validators.required],
      inspectionDate: ['', Validators.required],
      imageFile: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.form.patchValue({
        imageFile: file
      });
      this.imageValid = true;
    } else {
      this.imageValid = false;
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      this.toastr.error('Please fill all required fields.');
      return;
    }

    const formData = new FormData();
    Object.keys(this.form.controls).forEach(key => {
      if (key === 'inspectionDate') {
        const formattedDate = this.datePipe.transform(this.form.get(key)?.value, 'yyyy-MM-dd');
        formData.append(key, formattedDate || '');
      } else {
        formData.append(key, this.form.get(key)?.value);
      }
    });

    if (this.selectedFile) {
      formData.append('imageFile', this.selectedFile);
    }

    this.apiService.createProduct(formData).subscribe(
      (response: any) => {
        this.toastr.success('Product created successfully');
        this.router.navigate(['/inventory/detail']);
      },
      error => {
        this.toastr.error('Error creating product');
        console.error('Error creating product', error);
      }
    );
  }

  onCancel(): void {
    this.form.reset();
    this.selectedFile = null;
    this.imageValid = true;
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key)?.setErrors(null);
    });
  }
}























  // onFileChange(event: any): void {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.selectedFile = file;
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.imageBase64 = reader.result as string;
  //     };
  //     reader.readAsDataURL(file);
  //     this.imageValid = true;
  //   } else {
  //     this.imageValid = false;
  //   }
  // }

  // onDateSelected(event: MatDatepickerInputEvent<Date>): void {
  //   if (event.value) {
  //     const selectedDate = event.value.toISOString().split('T')[0];
  //     this.form.patchValue({ inspectionDate: selectedDate });
  //   }
  // }

  // onSubmit(): void {
  //   if (this.form.valid && this.imageBase64) {
  //     const formData = {
  //       ...this.form.value,
  //       image: this.imageBase64,
  //     };
  //     formData.inspectionDate = formData.inspectionDate.toISOString().split('T')[0];

  //     let productDetails: any[] = JSON.parse(localStorage.getItem('productDetails') || '[]');
  //     productDetails.push(formData);
  //     localStorage.setItem('productDetails', JSON.stringify(productDetails));

  //     this.router.navigate(["/inventory/detail"]);
  //     this.toastr.success('Form data saved successfully!');
  //     this.form.reset();
  //     this.selectedFile = null;
  //     this.imageValid = true;
  //     this.imageBase64 = null;
  //     Object.keys(this.form.controls).forEach(key => {
  //       this.form.get(key)?.setErrors(null);
  //     });
  //   } else {
  //     this.toastr.error('Please fill in all required fields and upload an image.');
  //     if (!this.selectedFile) {
  //       this.imageValid = false;
  //     }
  //   }
  // }

  // onCancel(): void {
  //   this.form.reset();
  //   this.selectedFile = null;
  //   this.imageValid = false;
  //   Object.keys(this.form.controls).forEach(key => {
  //     this.form.get(key)?.setErrors(null);
  //   });
  // }

