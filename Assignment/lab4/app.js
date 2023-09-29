var Express = require('express');
var fs = require('fs')
var path=require('path')
var app = Express();

app.use(Express.urlencoded({
    extended: true
    }));

// const jsonParser = Express.json();

app.use(Express.static(path.join(__dirname,'CSS')));

app.set('port', process.env.PORT || 3000);
var port = app.get('port');
app.listen(port, () => {
    console.log('running on port 3000')
});



app.use('/Users', (req, res, next) => {
    fs.createReadStream('users.html').pipe(res);
});

app.use('/add-Users', (req, res, next) => {
    fs.appendFileSync('usrs.text',JSON.stringify( req.body));
  res.send('User saved');
});


app.use('/products', (req, res, next) => {
    fs.createReadStream('products.html').pipe(res);
});

app.use('/add-products',(req,res,next)=>{

    fs.appendFileSync('products.txt',JSON.stringify( req.body));
    res.send('product saved');
});

app.all('/', (req, res, next) => {
    res.send('you are in home....');
});
app.use('/', (req, res, next) => {
    
    fs.createReadStream('404.html').pipe(res);
    
});

app.use(function (err, req, res, next) {
    res.status(500).send('Something broke!');
    });
    var Express = require('express');
var fs = require('fs')
var path=require('path')
var app = Express();

app.use(Express.urlencoded({
    extended: true
    }));

// const jsonParser = Express.json();

app.use(Express.static(path.join(__dirname,'CSS')));

app.set('port', process.env.PORT || 3000);
var port = app.get('port');
app.listen(port, () => {
    console.log('running on port 3000')
});



app.use('/Users', (req, res, next) => {
    fs.createReadStream('users.html').pipe(res);
});

app.use('/add-Users', (req, res, next) => {
    fs.appendFileSync('usrs.text',JSON.stringify( req.body));
  res.send('User saved');
});


app.use('/products', (req, res, next) => {
    fs.createReadStream('products.html').pipe(res);
});

app.use('/add-products',(req,res,next)=>{

    fs.appendFileSync('products.txt',JSON.stringify( req.body));
    res.send('product saved');
});

app.all('/', (req, res, next) => {
    res.send('you are in home....');
});
app.use('/', (req, res, next) => {
    
    fs.createReadStream('Error.html').pipe(res);
    
});

app.use(function (err, req, res, next) {
    res.status(500).send('Something broke!');
    });
    