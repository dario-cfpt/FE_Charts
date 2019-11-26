import * as express from "express";
import * as bodyParser from "body-parser";
import * as status from "http-status";

const app = express();
const port = 3000

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    // Allow client to receive the data
    // from : https://enable-cors.org/server_expressjs.html
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
