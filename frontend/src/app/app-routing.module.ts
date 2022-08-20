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
import { AdminAuthGuard } from './admin-auth-guard.service';
import { ViewresumeComponent } from './viewresume/viewresume.component';
import { UsermainComponent } from './dashboard/usermain.component';
import { SettingsComponent } from './dashboard/pages/settings/settings.component';
import { ProfilepageComponent } from './dashboard/pages/profilepage/profilepage.component';
import { MytemplatesComponent } from './dashboard/pages/mytemplates/mytemplates.component';
import { AdmintemplatesComponent } from './admin/pages/admintemplates/admintemplates.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'resumewiz/view/resume', component: ViewresumeComponent },
  {
    path: '',
    canActivate:[AuthGuard],
    children: [
      {path:'dashboard', component:UsermainComponent, children:[
        { path:'home', component: DashboardComponent},
        {path:'profile',component:ProfilepageComponent},
        {path:'settings',component:SettingsComponent},
        {path:'templatecollections',component:MytemplatesComponent},
      ]},
      {path:'dashboard/form', component: FormComponent,children:[
        { path: 'education', component: EducationComponent},
        { path: 'experience', component: ExperienceComponent},
        { path: 'skills', component: SkillsComponent},
        { path: 'summary', component: SummaryComponent},
        { path: 'career-objective', component: CareerObjectiveComponent},
        { path: 'contact', component: ResumecontactComponent},
        { path: 'templates', component: TemplatemodelComponent},
        { path: 'download/simple', component: Template1Component},
        { path: 'download/modern', component: Template2Component},
        { path: 'download/functional', component: Template3Component},  
      ]},
      { path: 'dashboard/templates/simple', component: Template1Component},
      { path: 'dashboard/templates/modern', component: Template2Component},
      { path: 'dashboard/templates/classic', component: Template3Component},  
    ]
  },{
    path: '',
    canActivate:[AdminAuthGuard],
    children: [
       { path: 'admin', component: AdminComponent, 
    children:[
      {path: 'home', component: AdminhomeComponent},
      {path: 'resume-templates', component: AdmintemplatesComponent},
      {path: 'userprofiles', component : UserprofilesComponent},
      {path: 'userprofiles/forms', component : UserformsComponent},
      {path: 'userprofiles/forms/:id', component : UserformsComponent},
    ] },
    ]
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
