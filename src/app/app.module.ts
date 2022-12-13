import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ProjectDetailComponent } from '../components/projects/project-detail/project-detail.component';
import { ProjectListComponent } from '../components/projects/project-list/project-list.component';
import { ProjectItemComponent } from '../components/projects/project-list/project-item/project-item.component';
import { AddProjectComponent } from '../components/add-project/add-project.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
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
