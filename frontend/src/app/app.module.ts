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
import { LoginComponent } from './login/login.component';
import { EducationComponent } from './dashboard/forms/education/education.component';
import { TemplatemodelComponent } from './dashboard/forms/templatemodel/templatemodel.component';
import { Template1Component } from './dashboard/templates/template1/template1.component';
import { ResumecontactComponent } from './dashboard/forms/resumecontact/resumecontact.component';
import { Template3Component } from './dashboard/templates/template3/template3.component';
import { CareerObjectiveComponent } from './dashboard/forms/career-objective/career-objective.component';
import { SummaryComponent } from './dashboard/forms/summary/summary.component';
import { UserNavbarComponent } from './dashboard/dashboardhome/user-navbar/user-navbar.component';
import { SkillComponent } from './dashboard/forms/skill/skill.component';
import { ExperienceComponent } from './dashboard/forms/experience/experience.component';
import { SettingsComponent } from './dashboard/pages/settings/settings.component';
import { ProfileComponent } from './dashboard/pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FeaturesComponent,
    HomeComponent,
    ContactComponent,
    RegistrationComponent,
    DashboardComponent,
    LoginComponent,
    RightsidebarComponent,
    LeftsidebarComponent,
    NavbarComponent,
    MiddilcontentComponent,
    AdminComponent,
    EducationComponent,
    TemplatemodelComponent,
    Template1Component,
    ResumecontactComponent,
    Template3Component,
    CareerObjectiveComponent,
    SummaryComponent,
    UserNavbarComponent,
    SkillComponent,
    ExperienceComponent,
    SettingsComponent,
    ProfileComponent,
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
    FontAwesomeModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
