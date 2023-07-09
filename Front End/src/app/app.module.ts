import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastContainerDirective } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/admin/sidebar/sidebar.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatComponent } from './component/admin/pat/pat.component';
import { DoctComponent } from './component/admin/doct/doct.component';
import { FormsModule } from '@angular/forms';
import { DochomeComponent } from './component/doctor/dochome/dochome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { PathomeComponent } from './component/patient/pathome/pathome.component';
import { DocnavComponent } from './docnav/docnav.component';
import { ProfileComponent } from './component/doctor/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    PatComponent,
    DoctComponent,
    DochomeComponent,
    PathomeComponent,
    DocnavComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    ToastContainerDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
