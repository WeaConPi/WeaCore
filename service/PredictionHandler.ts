import { getForecastForLonLat } from "./WeatherForecast";
import { mapResponseForecastToForecastWeather, ForecastWeather } from "../model/ForecastWeather";
import { persistForecastByHourID } from "../repository/ForecastRepository";
/**
 * Created by Farmas on 24.04.2017.
 */

export const handleNewMeasurementHook = async(hourId: string) => {
    const forecast = await getForecastForLonLat();
    const forecastWeather = mapResponseForecastToForecastWeather(forecast);
    let insertedForecast = await persistForecastByHourID(hourId, forecastWeather);
    //TODO Create full sensor model and map to it, then use it for prediction
    // insertedForecast = new ForecastWeather(insertedForecast.temperature, insertedForecast.pressure, insertedForecast.humidity);
    console.log("here goes weather")
    console.log(insertedForecast)

}
// const getCalculatedPrediction= async(temperature:string,)