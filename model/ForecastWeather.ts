/**
 * Created by Farmas on 24.04.2017.
 */
export interface IForecastWeather {
    temperature: number;
    pressure: number;
    humidity: number;
    id: string;
}
export class ForecastWeather implements IForecastWeather {
    temperature: number;
    pressure: number;
    humidity: number;
    id: string;

    constructor(temperature: number, pressure: number, humidity: number, id?: string) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        this.id = id;
    }
}

export const mapResponseForecastToForecastWeather = (forecast): IForecastWeather => {

    let fTemp = -999999;
    let fPress = -999999;
    let fHumid = -999999;
    let forecastJSON;

    try {
        forecastJSON = JSON.parse(forecast)
        if (forecastJSON.main) {
            fTemp = forecastJSON.main.temp;
            fPress = forecastJSON.main.pressure;
            fHumid = forecastJSON.main.humidity;
        }
        return new ForecastWeather(fTemp, fPress, fHumid);
    } catch (e) {
        return new ForecastWeather(fTemp, fPress, fHumid);
    }
}