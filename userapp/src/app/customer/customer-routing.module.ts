import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcustomersComponent } from './showcustomers/showcustomers.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';

export const routes: Routes = [
    {path: 'createcustomer',component:CreatecustomerComponent},
    {path: 'showcustomer',component:ShowcustomersComponent}
    

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
