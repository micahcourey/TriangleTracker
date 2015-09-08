var triangleTracker = function(a, b, c) {
    if((a === b) && (a == c ) && (b === c)) {
        return "Equilateral";
    } else if ((a === b) || (a === c )) {
        return "Isosceles";
    } else if ((a === b) || (b === c )) {
        return "Isosceles";
    } else if ((b === c) || (a === c )) {
        return "Isosceles";
    } else if ((a !== b) && (a !== c) && (b !== c)) {
        return "Scalene";
    }
};

$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
    $("span").empty();
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());
    var result = triangleTracker(a, b, c);


    $(".triangle").text("triangle");
    if (result == "Equilateral") {
      $(".equilateral").text("Equilateral");
    } else if (result == "Isosceles") {
        $(".isosceles").text("Isosceles");
    } else if (result == "Scalene") {
        $(".scalene").text("Scalene");
    }

    $("#result").show();
    event.preventDefault();


  });
});
