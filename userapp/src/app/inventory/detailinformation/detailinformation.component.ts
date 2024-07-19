import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

export interface ProductDto {
  Id?: number;
  Component: string;
  ObservationPoint: string;
  OPType: string;
  Worm: number;
  CrackLength: string;
  CrackMeasurement: number;
  CrackSeverity: string;
  StartingDim: number;
  UsedLimit: number;
  BudgetLife: number;
  LifeHours: number;
  LifeTotalProjected: number;
  InspectionDate: Date;
  ImageData: string;
  ImageName?: string;
  ImageType?: string;
}

@Component({
  selector: 'app-detailinformation',
  templateUrl: './detailinformation.component.html',
  styleUrls: ['./detailinformation.component.css']
})
export class DetailinformationComponent implements OnInit {

  productDetails: ProductDto[] = [];
  displayedColumns: string[] = ['image',
     'component', 'observationpoint', 'optype', 'worm', 
    'cracklength', 'crackmeas', 'crackseverity', 'startingdim', 
    'usedlimit', 'budgetlife', 'lifehours', 'lifetotal', 
    'inspectionDate',
  ];

  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    this.apiService.getAllProducts().subscribe(
      (products) => {
        this.productDetails = products;
      },
      (error) => {
        console.error('Error fetching product details', error);
      }
    );
  }

  deleteDetail(detail: ProductDto) {
    // this.productDetails = this.productDetails.filter(d => d !== detail);
    // Optionally, you can call a delete API endpoint if you have one
  }
}



// ngOnInit() {
//   this.productDetails = JSON.parse(localStorage.getItem('productDetails') || '[]');
// }