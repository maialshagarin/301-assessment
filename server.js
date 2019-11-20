'use strict' ;


request('dotenv').config();
const express = require('express');
const app = express();
PORT= process.env.PORT || 3000 
const cors =require(cosrs);
app.use(cors());


app.test( function( '/', (req ,res){
   $( res.status (200).send ('Home Page'))
}) ;

app.data ('/data' , (req,res)
    res.status(200).send (data.package-lock.json)
);

app.get(function('*', (req,res){
    res.status(404).send('not found')
}));

app.function
Server.listen (port , console.log($`listening here to the app `$port) );