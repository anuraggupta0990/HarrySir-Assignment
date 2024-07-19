import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowUserComponent } from './showuser/showuser.component';

export const routes: Routes = [
    {path: 'login',component:LoginComponent},
    {path: 'registration',component:RegistrationComponent},
    {path: 'forgotpassword',component:ForgotpasswordComponent},
    {path: 'resetpassword',component:ResetpasswordComponent},
    {path: 'dashboard',component:DashboardComponent},
    {path: 'showuser',component:ShowUserComponent},
    // {path: 'header',component:HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
