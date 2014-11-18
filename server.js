var http = require("http");

// Utility function that downloads a URL and invokes
// callback with the data.
function download(url, callback) {
  http.get(url, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      callback(data);
    });
  }).on("error", function() {
    callback(null);
  });
}


var cheerio = require("cheerio");
var fs = require('fs');



var text = fs.readFileSync('data','utf8');
var bufferString = text.toString(); 
var myarray = bufferString.split('\n'); 
console.log(myarray[6]);


var url = "http://www.ogretmenburada.com/ogretmen/" + myarray[6];
console.log(url);


for(var i = 0; i < 54;i++){
       
var url = "http://www.ogretmenburada.com/ogretmen/" + myarray[i]; 



download(url, function(data) {
  if (data) {
    //console.log(data);

    var $ = cheerio.load(data);
    
    $("div.telefon h2").each(function() {
         console.log($(this).text());
      });

  //  console.log("done");
  }
  else console.log("error");  
});

}