var express = require('express'),
    app = express(),
    port = process.env.PORT || 3210;
// bodyParser = require('body-parser'),
// request = require('request'),
// googleSearchAPI = '';

const http = require('https');

const body = `{
  "imprints": "Avon",
  "startOnSaleDate": "2015-01-01",
  "authors": "Can",
  "endOnSaleDate": "2016-03-08"
}`;

const init = {
    host: 'mocksvc.mulesoft.com',
    path: '/mocks/a8116537-e615-4886-ade1-46fd641f97d8/exp/openbook/v4/products/_search',
    port: 443,
    method: 'POST',
    headers: {
        Authorization: 'bearer TYdXbMlfMdqwBkZLCKZOTCmRsFYLR5JqT0y76CYBkHG4wDmrKwvr4nYodmY_dKUxDGKNyDJ5ceq2yNWZk4u3Pg',
        'Content-Type': 'application/json',
    },
};

app.get('/', function (req, res) {


    const callback = function (response) {
        let str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('error', function (err) {
            console.error(err);
            res.json({responseError: err});
        });

        response.on('end', function () {
            // str has response body
            console.log(response.headers);
            console.log(response.statusCode);
            res.json(JSON.parse(str));
        });
    };

    const request = http.request(init, callback);

    request.on('error', function (err) {

        console.error(err);
        res.json({requestError: err});
    });

    request.write(body);
    request.end();

});


app.listen(port);
