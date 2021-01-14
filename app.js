const express = require('express')
const app = express()
const port = 4000


// 7- app level middleware ==> global middlewares
app.use(logger);

// 8- use express.static to staticly serve all files
app.use(express.static(__dirname + '/Public'));


function logger(req, res, next) {
    //console.table({ method: req.method, path: req.url });
    //block the request
    if (today.getHours() > 8 && today.getHours() > 22) {
        res.send(`Oups, the request is blocked ! ${dateTime}`);
    } else {
        next();
    }
}


var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
console.log(today.getHours());
console.log(dateTime);

// serve the css
app.get("/style.css", (req, res) => {
    res.sendFile('C:/Users/MeD/chekpointExpress/public/style.css');
});



app.get('/', (req, res) => {
    res.sendFile('C:/Users/MeD/chekpointExpress/public/home.html')
})

app.get('/contact', (req, res) => {
    res.sendFile('C:/Users/MeD/chekpointExpress/public/contact.html')
})

app.get('/services', (req, res) => {
    res.sendFile('C:/Users/MeD/chekpointExpress/public/services.html')
})

app.listen(port, () => {
    console.log(`exomple,${port}`);
})