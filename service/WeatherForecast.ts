/**
 * Created by Farmas on 23.04.2017.
 */
import * as rp from "request-promise";

export const getForecastForLonLat = async() => {
    const requestAddress = `http://api.openweathermap.org/data/2.5/weather?lat=${process.env.houseLat}&lon=${process.env.houseLon}&apiKey=${process.env.apiKey}&units=metric`
    console.log("Requesting")
    console.log(requestAddress)

    let weather;
    try {
        weather = await rp(requestAddress)
    }
    catch (e) {
        console.log("Error fetching weather");
        console.log(e);
    }
    return weather;
};
