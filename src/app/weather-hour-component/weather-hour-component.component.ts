import {Component, Input} from '@angular/core';
import {OpenWeatherMapListItemType} from "../types/openWeatherMapListItemType";

@Component({
  selector: 'weather-hour-component',
  templateUrl: './weather-hour-component.component.html',
  styleUrls: ['./weather-hour-component.component.scss']
})

export class WeatherHourComponentComponent {
  @Input() forecast: OpenWeatherMapListItemType | undefined;
  imageSrc = "";

  ngOnInit() {
    if (this.forecast) {
      this.imageSrc = `https://openweathermap.org/img/wn/${this.forecast.weather[0].icon}@2x.png`
    }
  }
}
