const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    fetch('https://api.covid19india.org/data.json')
        .then(res => res.json())
        .then(data => {
            res.render('index.hbs', { stateData: data.statewise });
        });
});
app.listen(1997, () => {
    console.log('listening on port 1997');
});