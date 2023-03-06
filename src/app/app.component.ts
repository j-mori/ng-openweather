import {Component} from '@angular/core';
import {WeatherService} from './weather.service';
import {OpenWeatherMapListItemType} from "./types/openWeatherMapListItemType";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly FORECAST_DAYS_TRESHOLD = 5;
  readonly FORECAST_HOURS_TRESHOLD = 5;
  readonly DEFAULT_CITY = 'Rio de janeiro';
  readonly MAX_TAB_CITIES_COUNT = 3;


  citySearch: string = "";
  citiesTabs: string[] = [this.DEFAULT_CITY];
  selectedCityTab: number = 0

  hourlyForecast?: OpenWeatherMapListItemType[];
  dailyForecast?: OpenWeatherMapListItemType[];
  lastUpdate: Date | undefined;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.selectCityTab(0)
  }

  selectCityTab(tabIndex: number) {
    this.selectedCityTab = tabIndex
    this.getCityForecast(this.citiesTabs[tabIndex]);
  }

  searchCity(city: string) {
    if (this.citiesTabs.length >= this.MAX_TAB_CITIES_COUNT) {
      this.citiesTabs[this.selectedCityTab] = city
      this.selectCityTab(this.selectedCityTab);
    } else {
      this.citiesTabs.push(city)
      this.selectCityTab(this.citiesTabs.length - 1);
    }

  }

  getCityForecast(city: string) {
    this.weatherService.getHourlyForecast(city).subscribe((data: any) => {
      if (data.list) {
        this.hourlyForecast = data.list.slice(0, this.FORECAST_HOURS_TRESHOLD)
        this.dailyForecast = data.list.filter((forecast: any) => forecast.dt_txt.includes('15:00:00')).slice(0, this.FORECAST_DAYS_TRESHOLD);
      } else {
        this.hourlyForecast = undefined
        this.dailyForecast = undefined
      }
      this.updateLastUpdate()
    });
  }


  updateLastUpdate() {
    this.lastUpdate = new Date();
  }
}
