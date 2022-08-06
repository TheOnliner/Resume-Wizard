import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './admin/pages/adminhome/adminhome.component';
import { UserformsComponent } from './admin/pages/userprofiles/userforms/userforms.component';
import { UserprofilesComponent } from './admin/pages/userprofiles/userprofiles.component';
import { AuthGuard } from './auth-guard.service';
import { CareerObjectiveComponent } from './dashboard/career-objective/career-objective.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './dashboard/education/education.component';
import { ResumecontactComponent } from './dashboard/resumecontact/resumecontact.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { Template1Component } from './dashboard/template1/template1.component';
import { Template3Component } from './dashboard/template3/template3.component';
import { TemplatemodelComponent } from './dashboard/templatemodel/templatemodel.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: '',
    canActivate:[],//AuthGuard
    children: [
      { path: 'dashboard', component: DashboardComponent,
      children:[
        { path: 'education', component: EducationComponent},
        { path: 'career-objective', component: CareerObjectiveComponent},
        { path: 'contact', component: ResumecontactComponent},
        { path: 'summary', component: SummaryComponent},
        { path: 'templates', component: TemplatemodelComponent,children:[
          { path: '1', component: Template1Component},
          { path: '3', component: Template3Component},
        ]}
      ] },
      { path: 'admin', component: AdminComponent, 
    children:[
      {path: 'home', component: AdminhomeComponent},
      {path: 'userprofiles', component : UserprofilesComponent},
      {path: 'userprofiles/forms', component : UserformsComponent},
      {path: 'userprofiles/forms/:id', component : UserformsComponent}
    ] },
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
