import {Component, Input} from '@angular/core';
import {OpenWeatherMapListItemType} from "../types/openWeatherMapListItemType";

@Component({
  selector: 'weather-day-component',
  templateUrl: './weather-day-component.component.html',
  styleUrls: ['./weather-day-component.component.scss']
})
export class WeatherDayComponentComponent {
  @Input() forecast: OpenWeatherMapListItemType | undefined;
  imageSrc = "";

  ngOnInit() {
    if (this.forecast) {
      this.imageSrc = `https://openweathermap.org/img/wn/${this.forecast.weather[0].icon}@2x.png`
    }
  }
}
