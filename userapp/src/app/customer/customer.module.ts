import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ToastrModule } from 'ngx-toastr';
import { ShowcustomersComponent } from './showcustomers/showcustomers.component';



@NgModule({
  declarations: [
    CreatecustomerComponent,
    ShowcustomersComponent
    
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot()
  ]
})
export class CustomerModule { }
