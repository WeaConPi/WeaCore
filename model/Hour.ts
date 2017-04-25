import { ISensor } from "./Sensor";
import { IPrediction } from "./Prediction";
import { IForecastWeather } from "./ForecastWeather";
/**
 * Created by Farmas on 25.04.2017.
 */
export interface IHour {
    number: number;
    sensors: Array<ISensor>;
    prediction: IPrediction;
    forecast: IForecastWeather;
    id:string;
    dayId:string;
}
export class Hour implements IHour{
    number: number;
    sensors: Array<ISensor>;
    prediction: IPrediction;
    forecast: IForecastWeather;
    id: string;
    dayId: string;

    constructor({number, sensors, prediction, forecast, id, dayId}){
        this.number=number;
        this.id=id;
        this.dayId=dayId;
        this.sensors= <ISensor[]>sensors;
        this.prediction= <IPrediction>prediction;
        this.forecast= <IForecastWeather>forecast;
    }
}