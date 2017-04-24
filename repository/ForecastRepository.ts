/**
 * Created by Farmas on 24.04.2017.
 */
import * as rp from "request-promise";
import { IForecastWeather } from "../model/ForecastWeather";
const host = process.env.weaper;
export const persistForecastByHourID = async(hourId: string, forecast: IForecastWeather) => {
    const options = {
        method: 'PATCH',
        uri: `${host}/api/hours/${hourId}`,
        body: {
            forecast
        },
        json: true
    };

    let insertedForecast;
    try {
        insertedForecast = await rp(options)
    }
    catch (e) {
        console.log("Error fetching weather");
        console.log(e);
    }
    return insertedForecast.forecast;
};
