import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { StationListComponent } from './station-list/station-list.component';
import { CreateStationComponent } from './create-station/create-station.component';
import { UpdateStationComponent } from './update-station/update-station.component';
import { StationDetailsComponent } from './station-details/station-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    StationListComponent,
    CreateStationComponent,
    UpdateStationComponent,
    StationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
