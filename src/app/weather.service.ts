import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import OpenWeatherMap from "openweathermap-ts";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private openWeather: OpenWeatherMap;
  readonly OPEN_WEATHER_API_KEY = '482944e26d320a80bd5e4f23b3de7d1f'

  constructor() {
    this.openWeather = new OpenWeatherMap({
      apiKey: this.OPEN_WEATHER_API_KEY,
      units: "metric"
    });
  }

  getHourlyForecast(city: string): Observable<any> {
    return from(this.openWeather.getThreeHourForecastByCityName({
      'cityName': city,
    }))
  }

}
