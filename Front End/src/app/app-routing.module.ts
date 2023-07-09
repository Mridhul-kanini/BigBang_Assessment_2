import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { DoctComponent } from './component/admin/doct/doct.component';
import { PatComponent } from './component/admin/pat/pat.component';
import { DochomeComponent } from './component/doctor/dochome/dochome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PathomeComponent } from './component/patient/pathome/pathome.component';
import { ProfileComponent } from './component/doctor/profile/profile.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'doct', component: DoctComponent },
  { path: 'pat', component: PatComponent },

  { path: 'dochome', component: DochomeComponent },
  { path: 'profile', component: ProfileComponent },

  { path: 'pathome', component: PathomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path : '**' , redirectTo : 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
