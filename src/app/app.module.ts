import { RegionComponent } from './regions/region/region.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSettingFormComponent } from './user-setting-form/user-setting-form.component';
import { AddRegionComponent } from './regions/add-region/add-region.component';
import { EditRegionComponent } from './edit-region/edit-region.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,UserSettingFormComponent,RegionComponent, AddRegionComponent, EditRegionComponent, NavbarComponent, HomeComponent, EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
