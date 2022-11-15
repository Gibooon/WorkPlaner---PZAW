import { NgModule } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { AddProjectComponent } from './add-project/add-project.component';

const appRoute: Route = [
  { path: 'addProject', component: AddProjectComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoute)],
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectItemComponent,
    AddProjectComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
