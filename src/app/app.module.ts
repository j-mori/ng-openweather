import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {WeatherHourComponentComponent} from './weather-hour-component/weather-hour-component.component';
import {WeatherDayComponentComponent} from './weather-day-component/weather-day-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherHourComponentComponent,
    WeatherDayComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
