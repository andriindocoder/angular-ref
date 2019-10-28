import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryService } from './country.service';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
