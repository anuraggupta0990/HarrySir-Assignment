import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventorymanagementComponent } from './inventorymanagement/inventorymanagement.component';
import { AddcomponentdialogComponent } from './addcomponentdialog/addcomponentdialog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DetailinformationComponent } from './detailinformation/detailinformation.component';


export const routes: Routes = [
    {path: 'management',component:InventorymanagementComponent},
    {path: 'addcomponent',component:AddcomponentdialogComponent},
    {path: 'product',component:ProductDetailsComponent},
    {path: 'detail',component:DetailinformationComponent}
    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
