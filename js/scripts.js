// Business Logic
function Destinations(city) {
  this.city = city;
}

Destinations.prototype.vacation = function (){
  return this.city;
}


// User Interface Logic
$(document).ready(function(){
  $("#vacation").submit(function(event){
    event.preventDefault();
    debugger;
    var cityInput = $("#cityInput").val();
    var landmarInput = $("#landmarkInput").val();
    var moneyInput = $("#moneyInput").val();
    var returnInput = $("input:radio[name=goBack]:checked").val();

    var newDestination = new Destinations(cityInput);

    $("ul#placeInfo").append("<li><span class='city'>" + newDestination.vacation() + "</span></li>");

    $("#placeInfo li").last().click(function(){
      $("#showPlaceInfo").show();
      $("#showPlaceInfo h2").text(newDestination.city);
      $(".city").text(newDestination.city);
    });

      $("input#cityInput").val("");
  });
});
