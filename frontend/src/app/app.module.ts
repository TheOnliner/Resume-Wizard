import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './homepage/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturesComponent } from './homepage/features/features.component';
import { HomeComponent } from './homepage/home/home.component';

import { ContactComponent } from './homepage/contact/contact.component';
import { RegistrationComponent } from './homepage/registration/registration.component';
import { LoginComponent } from './login/login.component';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { DashboardComponent } from './dashboard/dashboard.component';
import { RightsidebarComponent } from './dashboard/rightsidebar/rightsidebar.component';
import { LeftsidebarComponent } from './dashboard/leftsidebar/leftsidebar.component';
=======
import { SidebarComponent } from './userDashboard/sidebar/sidebar/sidebar.component';
import { UserNavbarComponent } from './userDashboard/userNavbar/user-navbar/user-navbar.component';
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FeaturesComponent,
    HomeComponent,
  
    ContactComponent,
    RegistrationComponent,
    LoginComponent,
<<<<<<< HEAD
    DashboardComponent,
    RightsidebarComponent,
    LeftsidebarComponent,
=======
    SidebarComponent,
    UserNavbarComponent,
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
