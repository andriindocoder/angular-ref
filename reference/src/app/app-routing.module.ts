import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { StationListComponent } from './station-list/station-list.component';
import { CreateStationComponent } from './create-station/create-station.component';
import { UpdateStationComponent } from './update-station/update-station.component';
import { StationDetailsComponent } from './station-details/station-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'stations', component: StationListComponent },
  { path: 'add-station', component: CreateStationComponent },
  { path: 'update-station/:id', component: UpdateStationComponent },
  { path: 'details-station/:id', component: StationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
