import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CareerObjectiveComponent } from './dashboard/forms/career-objective/career-objective.component';
import { DashboardComponent } from './dashboard/dashboardhome/dashboard.component';
import { EducationComponent } from './dashboard/forms/education/education.component';
import { ResumecontactComponent } from './dashboard/forms/resumecontact/resumecontact.component';
import { SummaryComponent } from './dashboard/forms/summary/summary.component';
import { Template1Component } from './dashboard/templates/template1/template1.component';
import { Template3Component } from './dashboard/templates/template3/template3.component';
import { TemplatemodelComponent } from './dashboard/forms/templatemodel/templatemodel.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './dashboard/pages/profile/profile.component';
import { SettingsComponent } from './dashboard/pages/settings/settings.component';
import { SkillComponent } from './dashboard/forms/skill/skill.component';
import { ExperienceComponent } from './dashboard/forms/experience/experience.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    children: [
      { path:'dashboard', component: DashboardComponent },
      {path:'dashboard/form-education',component:EducationComponent},
      {path: 'dashboard/form-career-objective',component:CareerObjectiveComponent},
      {path:'dashboard/form-contact',component:ResumecontactComponent},
      {path:'dashboard/form-summary',component:SummaryComponent},
      {path:'dashboard/form-skill',component:SkillComponent},
      {path:'dashboard/form-experience',component:ExperienceComponent},
      {path:'dashboard/templates',component:TemplatemodelComponent},
      {path:'dashboard/templates/1',component:Template1Component},
      {path:'dashboard/templates/3',component:Template3Component},
        {path:'dashboard/pages-profile',component:ProfileComponent},
        {path:'dashboard/pages-settings',component:SettingsComponent},
      { path:'admin', component: AdminComponent },
    ],
  },
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 10],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
