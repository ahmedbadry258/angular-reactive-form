import { HomeComponent } from './home/home.component';
import { UserSettingFormComponent } from './user-setting-form/user-setting-form.component';
import { EditRegionComponent } from './edit-region/edit-region.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './regions/region/region.component';
import { AddRegionComponent } from './regions/add-region/add-region.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {  path:"home" ,component:HomeComponent},
  {  path:"regions" ,component:RegionComponent,children:[{path:"create-region",component:AddRegionComponent}]},
  {path:"regions/:id" , component:EditRegionComponent},
  // {path:"regions/create-reg" , component:AddRegionComponent},
{path:"user" , component:UserSettingFormComponent},
{path:"employee" , component:EmployeeComponent},{path:"" , component:EmployeeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
