import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './dashboard/education/education.component';
import { ResumecontactComponent } from './dashboard/resumecontact/resumecontact.component';
import { Template1Component } from './dashboard/template1/template1.component';
import { TemplatemodelComponent } from './dashboard/templatemodel/templatemodel.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'admin', component: AdminComponent },
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
