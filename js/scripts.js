// Business Logic

function Destinations(_city, _landmark) {
  this.cityInput = _city;
  this.landInput = _landmark;
}

Destinations.prototype.vacation = function (){
  return this.cityInput;
  return this.landInput;
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

    var newDestination = new Destinations(cityInput, landInput);
    console.log(cityInput, landInput);
    console.log(newDestination);

    $("ul#placeInfo").append("<li><span class='city'>" + newDestination.vacation() + "</span></li>");

    $("#placeInfo li").last().click(function(){
      $("#showPlaceInfo").show();
      $("#showPlaceInfo h2").text(newDestination.cityInput);
      $("#showPlaceInfo h2").text(newDestination.landInput);
      $(".city").text(newDestination.cityInput);
      $(".landmarks").text(newDestination.landInput);
    });

      $("input#cityInput").val("");
      $("input#landmarkInput").val("");

  });
});
