//imports
var express = require('express');
var port = process.env.PORT || 3000;

//months array
var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

//create instance of express
var app = module.exports = express();

//Get call to return json
app.get('/:dateVal', function(req,res){
  var dateVal = req.params.dateVal;
  var unix = null;
  var natural = null;

// if the pharameter is a number prepare it to be acceptable by the date object
  if(!isNaN(dateVal)){
    dateVal = Number(dateVal) * 1000;
  }

// date object
  var  d = new Date(dateVal);

// check if the date object is defined
  if(d.getMonth()){
    unix = d.getTime()/1000;
    natural = monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

// respond a json
    res.json({unix: unix, natural: natural});
})


app.listen(port, function(){
   console.log("listening for port: " + port);

})
