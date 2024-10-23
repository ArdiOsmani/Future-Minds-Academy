const express = require('express');
const  app = express();
const path = require('path')
const BASE_PATH = path.join(__dirname, "public")

app.use('/public', express.static('public'));
app.use('/static', express.static('public'));
app.use('/public/images', express.static('images'));

app.get('/facebook', (req, res)=>{
    res.sendFile(path.join(BASE_PATH, 'index.html'));
});


app.listen(8585)
