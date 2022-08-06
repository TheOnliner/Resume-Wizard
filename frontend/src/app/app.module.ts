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

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard/dashboardhome/dashboard.component';
import { RightsidebarComponent } from './dashboard/dashboardhome/rightsidebar/rightsidebar.component';
import { LeftsidebarComponent } from './dashboard/dashboardhome/leftsidebar/leftsidebar.component';
import { NavbarComponent } from './dashboard/dashboardhome/navbar/navbar.component';
import { MiddilcontentComponent } from './dashboard/dashboardhome/middilcontent/middilcontent.component';
import { AdminComponent } from './admin/admin.component';

import { UsersModule } from './users.module';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { UserprofilesComponent } from './admin/pages/userprofiles/userprofiles.component';
import { AdminhomeComponent } from './admin/pages/adminhome/adminhome.component';

import { EducationComponent } from './dashboard/forms/1.education/education.component';
import { TemplatemodelComponent } from './dashboard/forms/templatemodel/templatemodel.component';
import { Template1Component } from './dashboard/templates/template1/template1.component';
import { ResumecontactComponent } from './dashboard/forms/6.resumecontact/resumecontact.component';
import { Template3Component } from './dashboard/templates/template3/template3.component';
import { CareerObjectiveComponent } from './dashboard/forms/5.career-objective/career-objective.component';
import { SummaryComponent } from './dashboard/forms/4.summary/summary.component';
import { UserNavbarComponent } from './dashboard/dashboardhome/user-navbar/user-navbar.component';


import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import { UsersService } from './admin/services/users.service';
import { UserformsComponent } from './admin/pages/userprofiles/userforms/userforms.component';
import {ToastModule} from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ChartModule} from 'primeng/chart';
import {BadgeModule} from 'primeng/badge';
import {ScrollTopModule} from 'primeng/scrolltop';
import { FooterComponent } from './homepage/footer/footer.component';
import { TestimonialsComponent } from './homepage/testimonials/testimonials.component';
import {CarouselModule} from 'primeng/carousel';
import { ExperienceComponent } from './dashboard/forms/2.experience/experience.component';
import { SkillsComponent } from './dashboard/forms/3.skills/skills.component';


const ADMIN_MODULE = [
  CardModule,
  ToolbarModule,
  TableModule,
  ToastModule,
  ConfirmDialogModule,
  ChartModule,
  BadgeModule,
  ScrollTopModule,
  CarouselModule
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FeaturesComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    LoginComponent,
    RightsidebarComponent,
    LeftsidebarComponent,
    NavbarComponent,
    MiddilcontentComponent,
    AdminComponent,
    SidenavComponent,
    UserprofilesComponent,
    AdminhomeComponent,
    UserformsComponent,
    FooterComponent,
    TestimonialsComponent,
    EducationComponent,
    TemplatemodelComponent,
    Template1Component,
    ResumecontactComponent,
    Template3Component,
    CareerObjectiveComponent,
    SummaryComponent,
    UserNavbarComponent,
    ExperienceComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    UsersModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    FontAwesomeModule,
    ButtonModule,
    ...ADMIN_MODULE
  ],
  providers: [UsersService,MessageService,ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
