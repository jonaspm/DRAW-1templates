var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let name = {}
    , numero1 = 4
    , numero2 = 8
    , paises = ['México', 'China', 'Canada', 'Irlanda'];
    
    name.first_name = 'Jonás';
    name.last_name = 'Perusquía';
    res.render('index', {name, numero1, numero2, paises});
});

var port = 3000;
app.listen(port);
console.log('App listening in port:', port);