import { getForecastForLonLat } from "./WeatherForecast";
import { mapResponseForecastToForecastWeather } from "../model/ForecastWeather";
import { persistForecastByHourID } from "../repository/ForecastRepository";
import { Hour, IHour } from "../model/Hour";
import * as rp from "request-promise";
import { weaNenHost } from "../network";
import { persistPredictionByHourID } from "../repository/PredictionRepository";
import { mapResponseToPrediction } from "../model/Prediction";

/**
 * Created by Farmas on 24.04.2017.
 */

export const handleNewMeasurementHook = async (hourId: string) => {
    const forecast = await getForecastForLonLat();
    const forecastWeather = mapResponseForecastToForecastWeather(forecast);
    let insertedHour = await persistForecastByHourID(hourId, forecastWeather);
    const hour = new Hour(insertedHour)
    getCalculatedPrediction(hour)

}
const getCalculatedPrediction = async (hour: IHour) => {
    const today = new Date();
    const tempSensors = hour.sensors.filter(sensor => sensor.type === 'Temperature');
    //TODO refactor to use getCalculationPure method
    if (tempSensors && tempSensors[0]) {
        const requestURL = `${weaNenHost}/calculate?day=${today.getDay()}&month=${today.getMonth()}&hour=${hour.number}&temp=${hour.forecast.temperature}&houseTemp=${tempSensors[0].value}`
        console.log('Requesting calculate')
        console.log(requestURL)
        const prediction = await rp(requestURL)
        const calcPrediction = mapResponseToPrediction(prediction)
        persistPredictionByHourID(hour.id, calcPrediction)
    }
}

export const getCalculationPure = async (month: number, day: number, hour: number, temperature: number, houseTemp: number) => {
    const requestURL = `${weaNenHost}/calculate?day=${day}&month=${month}&hour=${hour}&temp=${temperature}&houseTemp=${houseTemp}`
    console.log('Requesting calculate')
    console.log(requestURL)
    const prediction = await rp(requestURL)
    return prediction;
}