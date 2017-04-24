/**
 * Created by Farmas on 24.04.2017.
 */
import * as rp from "request-promise";
const host = process.env.weacore;
export const persistPredictionByHourID = async(hourId:string) => {
    // const options = {
    //     method: 'PATCH',
    //     uri: `${host}/api/hours/${hourId}`,
    //     body: {
    //         some: 'payload'
    //     },
    //     json: true // Automatically stringifies the body to JSON
    // };
    // const requestAddress = `http://api.openweathermap.org/data/2.5/weather?lat=${process.env.houseLat}&lon=${process.env.houseLon}&apiKey=${process.env.apiKey}&units=metric`
    // console.log("Requesting")
    // console.log(requestAddress)
    //
    // let weather;
    // try {
    //     weather = await rp(requestAddress)
    // }
    // catch (e) {
    //     console.log("Error fetching weather");
    //     console.log(e);
    // }
    // return weather;
};
