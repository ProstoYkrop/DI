var express = require('express');

var app = express();

app.set('port', process.env.PORT || 5000);

app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Meadowlark Travel');
});

app.get('/about', function (req, res) {
    res.type('text/plain');
    res.send(' O Meadowlark Travel');

});


app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - undefend');

});

app.use(function (req,res) {
    res.type('text/plain');
    res.status(500);
    res.send('500 - Error Server');

});

app.listen(app.get('port'), function(){
    console.log(' Express Запущен на http://localhost:'+ app.get('port') + ': Нажмите  нажмите Ctrl+C для завершения.' )
});