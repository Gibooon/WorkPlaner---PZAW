import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NavbarComponent } from '../components/navbar/navbar.component';
import { AddProjectComponent } from '../components/add-project/add-project.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NavbarComponent, AddProjectComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
