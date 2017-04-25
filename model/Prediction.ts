/**
 * Created by Farmas on 25.04.2017.
 */
export interface IPrediction {
    heat: number;
    blinders: boolean;
    windows: number;
    id: string;
}
export class Prediction implements IPrediction {
    heat: number;
    blinders: boolean;
    windows: number;
    id: string;


    constructor(heat?: number, blinders?: boolean, windows?: number, id?: string) {
        this.heat = heat;
        this.blinders = blinders;
        this.windows = windows;
        this.id = id;
    }
}
export const mapResponseToPrediction = (prediction): IPrediction => {

    let heat = -999999;
    let blinders = false;
    let windows = -999999;
    let predictionJSON;

    try {
        predictionJSON = JSON.parse(prediction)
        if (predictionJSON) {
            heat = predictionJSON.heat;
            blinders = predictionJSON.blinders > 0.5;
            windows = predictionJSON.windows;
        }
        return new Prediction(heat, blinders, windows);
    } catch (e) {
        return new Prediction(heat, blinders, windows);

    }
}