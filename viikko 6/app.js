const express = require('express');
const app = express();

//1.
app.get('/', function(request, respose){
    respose.send("Hei");
});
//2.
app.get('/:nimi', function(request, respose){
    respose.send("Hei "+ request.params.nimi);
});
//3.
app.get('/:etunimi/:sukunimi', function(request, respose){
    respose.send("Hei "+ request.params.etunimi +" "+ request.params.sukunimi);
});
//4.
app.post('/', function(request,response){
        response.send("POST toimii");
});
//5.
app.use(function(req,res,next){
    console.log('middleware');
    next();
}
);

app.listen(3000, () => console.log("Portti 3000 kuuntelee"));