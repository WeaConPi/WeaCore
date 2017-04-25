/**
 * Created by Farmas on 25.04.2017.
 */
export interface ISensor {
    type:string;
    unit:string;
    value: number;
    sensor_name:string;
    sensor_type:string;
    id:string;
    unit_display:string;
    timestamp:number;
}
export class Sensor implements ISensor{
    type: string;
    unit: string;
    value: number;
    sensor_name: string;
    sensor_type: string;
    id: string;
    unit_display: string;
    timestamp: number;


    constructor(type?: string, unit?: string, value?: number, sensor_name?: string, sensor_type?: string, id?: string, unit_display?: string, timestamp?: number) {
        this.type = type;
        this.unit = unit;
        this.value = value;
        this.sensor_name = sensor_name;
        this.sensor_type = sensor_type;
        this.id = id;
        this.unit_display = unit_display;
        this.timestamp = timestamp;
    }
}