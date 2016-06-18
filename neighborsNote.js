$(document).ready(function() {

  // var state = "";
  // var city = "";
  // var zipCode = ""; 

  var apiKey = "6fn8bgxntzgu4z8t4yxab3d5";
  var queryURL = "https://crossorigin.me/http://api.trulia.com/webservices.php?library=LocationInfo&function=getCitiesInState&state=CA&apikey=" + apiKey;
   console.log(queryURL);

  $.ajax({
      url: queryURL,
      dataType: 'xml',
      method:'GET'
  })

  .done(function(response){
    console.log('response', response);
    var json = $.xml2json(response);
    //
     console.log(json);
  })

  




});


































