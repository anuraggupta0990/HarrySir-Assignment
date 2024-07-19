import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { MatInput } from '@angular/material/input'; 
import { MatDialog } from '@angular/material/dialog';
import { AddcomponentdialogComponent } from '../addcomponentdialog/addcomponentdialog.component';
import { MatSortModule } from '@angular/material/sort';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface ComponentDetails {
  selected: boolean;
  componentType: string;
  componentName: string;
  make: string;
  partNo: string;
  customerPartNo: string;
  budgetLife: number;
  htmlColor: string;
  maxCrackLength: number;
  uom: string;
  crackSeverity: string;
}

@Component({
  selector: 'app-inventorymanagement',
  templateUrl: './inventorymanagement.component.html',
  styleUrls: ['./inventorymanagement.component.css']
})
export class InventorymanagementComponent implements OnInit {
  componentTypes = ['Adapter Protector', 'Adaptor', 'Bucket Back', 'Bucket Bush', 'Bucket Casting', 'Bucket Corner Casting', 'Bucket Stop Plate', 'Bucket Wall', 'Cast Lip', 'Casting'];
  makes = ['MAINTEC', 'GAINTEC'];
  htmlColors = ['Red', 'Green', 'Blue'];
  uoms = ['mm', 'cm', 'm'];
  severities = ['Low', 'Medium', 'High'];
  displayedColumns: string[] = ['select', 'componentType', 'componentName', 'make', 'partNo', 'customerPartNo', 'budgetLife', 'htmlColor', 'maxCrackLength', 'uom', 'crackSeverity','delete'];
  dataSource = new MatTableDataSource<ComponentDetails>([]);
  originalData: any[] = [];
  cart: any[] = [];
  hideSelected: boolean = false;
  hideUnselected: boolean = false;
  newComponent: ComponentDetails = {
    selected: false,
    componentType: '',
    componentName: '',
    make: '',
    partNo: '',
    customerPartNo: '',
    budgetLife: 2000,
    htmlColor: '',
    maxCrackLength: 0,
    uom: '',
    crackSeverity: ''
  };

  newComponentForm: FormGroup;

  @ViewChild('filterInput') filterInput!: MatInput; 

  constructor(private fb: FormBuilder, private toastr: ToastrService, public dialog: MatDialog, private cdr: ChangeDetectorRef) {
    this.newComponentForm = this.fb.group({
      componentType: ['', Validators.required],
      componentName: ['', Validators.required],
      make: ['', Validators.required],
      partNo: ['', Validators.required],
      customerPartNo: ['', Validators.required],
      budgetLife: [[Validators.required, Validators.min(1)]],
      htmlColor: ['', Validators.required],
      maxCrackLength: [0, [Validators.required, Validators.min(0)]],
      uom: ['', Validators.required],
      crackSeverity: ['', Validators.required]
    });

    // this.originalData = [
    //   {
    //     selected: false,
    //     componentType: '',
    //     componentName: '',
    //     make: '',
    //     partNo: '',
    //     customerPartNo: '',
    //     budgetLife: 0,
    //     htmlColor: '',
    //     maxCrackLength: 0,
    //     uom: '',
    //     crackSeverity: ''
    //   }
    // ];
  }

  downloadTableData() {
    const doc = new jsPDF();
    const data = this.originalData.map((item) => {
      return [
        item.componentType,
        item.componentName,
        item.make,
        item.partNo,
        item.customerPartNo,
        item.budgetLife,
        item.htmlColor,
        item.maxCrackLength,
        item.uom,
        item.crackSeverity
      ];
    });

    const headers = [['Component Type', 'Component Name', 'Make', 'Part No.', 'Customer Part No.', 'Budget Life', 'HTML Color', 'Max Crack Length', 'UOM', 'Crack Severity']];

    autoTable(doc, {
      head: headers,
      body: data,
      headStyles: {
        fillColor: [255, 192, 203]
      }
    });

    doc.save('table_data.pdf');
  }

  ngOnInit(): void {
    const savedData = localStorage.getItem('tableData');
    if (savedData) {
      this.dataSource.data = JSON.parse(savedData);
    } else {
      this.dataSource.data = [];
    }
    this.originalData = [...this.dataSource.data];
  }

  openAddComponentTypeDialog(): void {
    const dialogRef = this.dialog.open(AddcomponentdialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.componentTypes.push(result); 
      }
    });
  }

  saveData() {
    localStorage.setItem('tableData', JSON.stringify(this.dataSource.data));
  }

  addComponent() {
    if (this.newComponentForm.valid) {
      const newComponent = this.newComponentForm.value as ComponentDetails;
      this.dataSource.data.push({ ...newComponent });
      this.dataSource.data = [...this.dataSource.data];
      this.saveData();
      this.toastr.success('Details added successfully');
      this.newComponentForm.reset({});
    } else {
      this.newComponentForm.markAllAsTouched();
      const invalidFields = Object.keys(this.newComponentForm.controls).filter(field => this.newComponentForm.get(field)?.invalid);
      this.toastr.error(`Please fill out the following fields: ${invalidFields.join(',')}`);
    }
  }

  deleteRow(element: ComponentDetails) {
    const index = this.dataSource.data.indexOf(element);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<ComponentDetails>(this.dataSource.data); 
      this.saveData(); 
      this.toastr.success('Component deleted successfully'); 
    } else {
      this.toastr.error('Failed to delete component'); 
    }

    this.cdr.detectChanges();
  }

  getColorCode(colorName: string): string {
    switch (colorName) {
      case 'Red':
        return 'RGB(255, 0, 0)';
      case 'Green':
        return 'RGB(0, 128, 0)';
      case 'Blue':
        return 'RGB(0, 0, 255)';
      default:
        return '';
    }
  }

  sortTable(order: 'asc' | 'desc') {
    this.dataSource.data.sort((a, b) => {
      const isAsc = order === 'asc';
      return this.compare(a.componentType, b.componentType, isAsc);
    });
    this.dataSource._updateChangeSubscription();
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  toggleSelected(event: any) {
    if (event.checked) {
      this.originalData = this.dataSource.data.filter((element: any) => !element.selected);
    } else {
      this.originalData = [...this.dataSource.data];
    }
  }

  toggleUnSelected(event: any) {
    if (event.checked) {
      this.originalData = this.dataSource.data.filter((element: any) => element.selected);
    } else {
      this.originalData = [...this.dataSource.data];
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addToCart() {
    this.cart = this.originalData.filter(item => item.selected);
    console.log('Items added to cart:', this.cart);

    
  }

  viewCart() {
    console.log('Viewing cart:', this.cart);
  
  }
}
