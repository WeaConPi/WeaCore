/**
 * Created by Farmas on 24.04.2017.
 */
import * as rp from "request-promise";
import { IForecastWeather } from "../model/ForecastWeather";
import { weaPerHost } from "../network";

export const persistForecastByHourID = async(hourId: string, forecast: IForecastWeather) => {
    const options = {
        method: 'PATCH',
        uri: `${weaPerHost}/api/hours/${hourId}`,
        body: {
            forecast
        },
        json: true
    };

    let insertedForecast;
    try {console.log('Persisting forecast')
        console.log(options)
        insertedForecast = await rp(options)
    }
    catch (e) {
        console.log("Error persisting forecast");
        console.log(e);
    }
    return insertedForecast;
};
