/**
 * Created by Farmas on 20.04.2017.
 */
import * as express from "express";
import { handleNewMeasurementHook } from "./service/PredictionHandler";
const app = express();
const PORT = (process.env.PORT || 4000);

app.get('/dummyprocesstest', (request, response) => {
    const hourId = String(request.param('hourId'));
    handleNewMeasurementHook(hourId)
    response.send("forecasted")
});

app.get('/hello', (request, response) => {
    response.send("Hello")
});
app.get('/measurement-hook', (request, response) => {

    const hourId = String(request.param('hourId'));
    handleNewMeasurementHook(hourId)
    response.send("Hello")
});

app.listen(PORT, () => {
    console.log(`Start is up and running on localhost:${PORT}`)
});