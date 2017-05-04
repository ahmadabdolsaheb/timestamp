//imports
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var port = process.env.PORT || 3000;
var isTimestamp = require( 'validate.io-timestamp' );
var monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
//create instance of express and instantiate body-parser and cors
var app = module.exports = express();
app.use(bodyParser.json())
app.use(cors());

//Get call to return json
app.get('/:dateVal', function(req,res){
  var dateVal = req.params.dateVal;
  var unix = null;
  var natural = null;


  // if unix
    if(isTimestamp( Number(dateVal))){
      unix = Number(dateVal);
      d = new Date(dateVal);
      if(d.getMonth()){
         natural = monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
      }

  // if a natural date
   }else{
     unix = new Date(dateVal).getTime()/1000;
     d = new Date(dateVal);

     if(d.getMonth()){
        natural = monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
     }

   }


  res.json({unix: unix, natural: natural});
})


app.listen(port, function(){
  console.log("listening for port: " + port);

})
