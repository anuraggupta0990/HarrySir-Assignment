import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventorymanagementComponent } from './inventorymanagement/inventorymanagement.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatGridTileHarness} from '@angular/material/grid-list/testing';
import {MatGridListModule} from '@angular/material/grid-list';
import { AddcomponentdialogComponent } from './addcomponentdialog/addcomponentdialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AppModule } from '../app.module';
// import { HeaderComponent } from '../sharedComponents/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ToastrModule } from 'ngx-toastr';
import { DetailinformationComponent } from './detailinformation/detailinformation.component';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    InventorymanagementComponent,
    AddcomponentdialogComponent,
    ProductDetailsComponent,
    DetailinformationComponent,
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatMenuModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ToastrModule,
    DatePipe
    
  ],
})
export class InventoryModule { }
