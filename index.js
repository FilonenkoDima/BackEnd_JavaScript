const express = require('express');
http = require('http');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
const hostname = 'dimahost';
const port = 5432;

const app = express();
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.end(`Win! Server work!`);

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server work at http://${hostname}:${port}/`);
});