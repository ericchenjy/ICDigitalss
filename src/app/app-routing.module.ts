import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AccountComponent } from './account/account.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';
import { SignUpBusinessOwnerComponent } from './sign-up-business-owner/sign-up-business-owner.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'account', component: AccountComponent},
  {path: 'logIn', component: LogInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'signUpUser', component: SignUpUserComponent},
  {path: 'signUpBusinessOwner', component: SignUpBusinessOwnerComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
