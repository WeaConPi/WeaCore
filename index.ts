/**
 * Created by Farmas on 20.04.2017.
 */
import * as express from "express";
import { handleNewMeasurementHook, getCalculationPure } from "./service/PredictionHandler";
const app = express();
const PORT = (process.env.PORT || 4000);

app.get('/dummyprocesstest', (request, response) => {
    const hourId = String(request.query.hourId);
    handleNewMeasurementHook(hourId).catch(console.log)
    response.send("forecasted")
});

app.get('/hello', (request, response) => {
    response.send("Hello")
});

app.get('/get-brain-calculation', (request, response) => {
    const day = Number(request.query.day);
    const month = Number(request.query.month);
    const hour = Number(request.query.hour);
    const temp = Number(request.query.temp);
    const houseTemp = Number(request.query.houseTemp);
    console.log('Requesting brain calculation');
    const result = getCalculationPure(month, day, hour, temp, houseTemp);
    response.send(result)
});

app.get('/measurement-hook', (request, response) => {

    const hourId = String(request.query.hourId);
    handleNewMeasurementHook(hourId).catch(console.log);
    response.send("Hello")
});

app.listen(PORT, () => {
    console.log(`Start is up and running on localhost:${PORT}`)
});