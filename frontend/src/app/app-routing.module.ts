import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './admin/pages/adminhome/adminhome.component';
import { UserformsComponent } from './admin/pages/userprofiles/userforms/userforms.component';
import { UserprofilesComponent } from './admin/pages/userprofiles/userprofiles.component';
import { AuthGuard } from './auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './dashboard/education/education.component';
import { ResumecontactComponent } from './dashboard/resumecontact/resumecontact.component';
import { Template1Component } from './dashboard/template1/template1.component';
import { TemplatemodelComponent } from './dashboard/templatemodel/templatemodel.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: '',
    canActivate:[],//AuthGuard
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'admin', component: AdminComponent,
    children:[
      {path: 'home', component: AdminhomeComponent},
      {path: 'userprofiles', component : UserprofilesComponent},
      {path: 'userprofiles/forms', component : UserformsComponent},
      {path: 'userprofiles/forms/:id', component : UserformsComponent}
    ] },
    ],
  },
  { path: 'education', component: EducationComponent},
  { path: 'resumecontact', component: ResumecontactComponent},
  { path: 'template1', component: Template1Component},
  { path: 'templatemodel', component: TemplatemodelComponent}
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
