/**
 * Created by Farmas on 24.04.2017.
 */
import * as rp from "request-promise";
import { IPrediction } from "../model/Prediction";
import { weaPerHost } from "../network";
export const persistPredictionByHourID = async(hourId:string, prediction:IPrediction) => {
    const options = {
        method: 'PATCH',
        uri: `${weaPerHost}/api/hours/${hourId}`,
        body: {
            prediction
        },
        json: true
    };
    let insertedHour;
    try {
        console.log('Persisting prediction')
        console.log(options)
        insertedHour = await rp(options)
    }
    catch (e) {
        console.log("Error persisting prediction by hour id");
        console.log(e);
    }
    return insertedHour;
};
