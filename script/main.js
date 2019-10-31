function kelvinToCel(kelvin) {
    return Math.round(kelvin - 273.13);
}

function degrees(deg) {
    if (deg > 0 && deg < 90) {
        console.log("NE");
    } else if (deg > 90 && deg < 180) {
        console.log("SE");
    } else if (deg > 180 && deg < 270) {
        console.log("SW");
    } else {
        console.log("NW");
    }
}

/* 
$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=Sarajevo&appid=a666c53dc203ed06d232b4c600cd7cca",
    success: function (result) {
        console.log(kelvinToCel(result.main.temp_min));
        console.log(kelvinToCel(result.main.temp_max));
        console.log(kelvinToCel(result.main.temp));
        console.log(result);
    },
    error: function (result) {
        console.log(result);

    }
}); */


function getData() {
    var input = $("#city");
    input.css({
        "border": "1px solid #e2e2e2"
    });

    if (input.val() == "") {
        input.css({
            "border": "1px solid red"
        });

    } else {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + input.val() + "&appid=493539488ed186ea91ec1ff76569acea",
            success: function (result) {
                console.log(kelvinToCel(result.main.temp));
                console.log(kelvinToCel(result.main.temp_min));
                console.log(kelvinToCel(result.main.temp_max));


                $("#temp").html(kelvinToCel(result.main.temp));
                console.log(result);
                $("#temp-min").html(kelvinToCel(result.main.temp_min));
                $("#temp-max").html(kelvinToCel(result.main.temp_max));
                $("#humidity").html(result.main.humidity);
                $("#weather").html(weather.main);
                $("#wind").html(degrees(result.wind.deg));




            },
            error: function (result) {
                console.log(result);

            }
        });
    }
}
