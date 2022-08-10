import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './admin/pages/adminhome/adminhome.component';
import { UserformsComponent } from './admin/pages/userprofiles/userforms/userforms.component';
import { UserprofilesComponent } from './admin/pages/userprofiles/userprofiles.component';
import { AuthGuard } from './auth-guard.service';
import { CareerObjectiveComponent } from './dashboard/forms/5.career-objective/career-objective.component';
import { DashboardComponent } from './dashboard/dashboardhome/dashboard.component';
import { EducationComponent } from './dashboard/forms/1.education/education.component';
import { ResumecontactComponent } from './dashboard/forms/6.resumecontact/resumecontact.component';
import { SummaryComponent } from './dashboard/forms/4.summary/summary.component';
import { Template1Component } from './dashboard/templates/template1/template1.component';
import { Template3Component } from './dashboard/templates/template3/template3.component';
import { TemplatemodelComponent } from './dashboard/forms/7.templatemodel/templatemodel.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SkillsComponent } from './dashboard/forms/3.skills/skills.component';
import { ExperienceComponent } from './dashboard/forms/2.experience/experience.component';
import { FormComponent } from './dashboard/forms/form.component';
import { Template2Component } from './dashboard/templates/template2/template2.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent},
      {path:'dashboard/form', component: FormComponent,children:[
        { path: 'education', component: EducationComponent},
        { path: 'experience', component: ExperienceComponent},
        { path: 'skills', component: SkillsComponent},
        { path: 'summary', component: SummaryComponent},
        { path: 'career-objective', component: CareerObjectiveComponent},
        { path: 'contact', component: ResumecontactComponent},
        { path: 'templates', component: TemplatemodelComponent},
      ]},
      // { path: 'dashboard/form-education', component: FormComponent},
      // { path: 'dashboard/form-experience', component: ExperienceComponent},
      // { path: 'dashboard/form-skills', component: SkillsComponent},
      // { path: 'dashboard/form-summary', component: SummaryComponent},
      // { path: 'dashboard/form-career-objective', component: CareerObjectiveComponent},
      // { path: 'dashboard/form-contact', component: ResumecontactComponent},
      // { path: 'dashboard/templates', component: TemplatemodelComponent},
      { path: 'dashboard/templates/simple', component: Template1Component},
      { path: 'dashboard/templates/modern', component: Template2Component},
      { path: 'dashboard/templates/classic', component: Template3Component},  
      { path: 'admin', component: AdminComponent, 
    children:[
      {path: 'home', component: AdminhomeComponent},
      {path: 'userprofiles', component : UserprofilesComponent},
      {path: 'userprofiles/forms', component : UserformsComponent},
      {path: 'userprofiles/forms/:id', component : UserformsComponent}
    ] },
    ]
  }
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
