/**
 * Created by Farmas on 25.04.2017.
 */
export interface IPrediction {
    heat: number;
    blinders: number;
    windows: number;
    id: string;
}
export class Prediction implements IPrediction {
    heat: number;
    blinders: number;
    windows: number;
    id: string;


    constructor(heat?: number, blinders?: number, windows?: number, id?: string) {
        this.heat = heat;
        this.blinders = blinders;
        this.windows = windows;
        this.id = id;
    }
}
export const mapResponseToPrediction = (prediction): IPrediction => {

    let heat = -999999;
    let blinders = -999999;
    let windows = -999999;
    let predictionJSON;

    try {
        predictionJSON = JSON.parse(prediction)
        if (predictionJSON) {
            heat = predictionJSON.heat;
            blinders = predictionJSON.blinders;
            windows = predictionJSON.windows;
        }
        return new Prediction(heat, blinders, windows);
    } catch (e) {
        return new Prediction(heat, blinders, windows);

    }
}