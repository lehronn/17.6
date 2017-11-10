//import modułów
var express = require('express');
//przypisanie aplikacji do zmiennej która na koniec będzie nasłuchiwać.
var app = express();

//ustalenie domyślnego generatora szablonów.
app.set('view engine', 'pug');  //kreator widoków.
app.set('views','./views');     //widoki będą w katalogu /views

//serwowanie plików statycznych z katalogu assets.
app.use('/static', express.static("assets"));

app.get('/', function(req, res) {
  res.render('index',
    {
      user: { name: "Johnny", age: "20" }
    }
  );
});

app.get('/auth/google', function(req, res) {
  res.render('inside');
});

//nasłuchiwanie na porcie i obsługa błędu 404.
app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('404. Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});