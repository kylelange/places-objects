// Business Logic

function Destinations(_city, _landmark, _money,_visit) {
  this.cityInput = _city;
  this.landInput = _landmark;
  this.moneyInput = _money;
  this.returnInput = _visit;
}

Destinations.prototype.vacation = function (){
  return this.cityInput;
  // return this.landInput;
  // return this.moneyInput;
  // return this.returnInput;
}


// User Interface Logic
$(document).ready(function(){
  $("form#vacation").submit(function(event){
    event.preventDefault();
    debugger;
    var cityInput = $("#cityInput").val();
    var landInput = $("#landInput").val();
    var moneyInput = $("#moneyInput").val();
    var returnInput = $("input:radio[name=goBack]:checked").val();

    var newDestination = new Destinations(cityInput, landInput, moneyInput, returnInput);
    console.log(cityInput, landInput, moneyInput, returnInput);
    console.log(newDestination);

    $("ul#placeInfo").append("<li><span class='cityName'>" + newDestination.vacation() + "</span></li>");

    $("#placeInfo li").last().click(function(){
      $("#showPlaceInfo").show();
      $("#showPlaceInfo h2").text(newDestination.cityInput);
      $(".city").text(newDestination.cityInput);
      $(".landmarks").text(newDestination.landInput);
      $(".money").text(newDestination.moneyInput);
      $(".returnVisit").text(newDestination.returnInput);
    });

      $("input#cityInput").val("");
      $("input#landmarkInput").val("");
      $("input#moneyInput").val("");
      $("input#returnInput").val("");

  });
});
