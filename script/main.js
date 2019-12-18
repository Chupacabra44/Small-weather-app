var data = {};
function kelvinToCel(kelvin) {
    return Math.round(kelvin - 273.13);
}

function degrees(deg) {
    if (deg > 0 && deg < 90) {
        return "NE"
    } else if (deg > 90 && deg < 180) {
        return "SE";
    } else if (deg > 180 && deg < 270) {
        return "SW"
    } else {
        return "NW"
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

function loadData (data) {

    localStorage.setItem("history", JSON.stringify(data));
/*     console.log(kelvinToCel(result.main.temp));
    console.log(kelvinToCel(result.main.temp_min));
    console.log(kelvinToCel(result.main.temp_max)); */

    $("#city").val(data.city);
    $("#temp").html(data.temp);
    $("#temp-min").html(data.min);
    $("#temp-max").html(data.max);
    $("#humidity").html(data.hum);
    $("#weather").html(data.weather);
    $("#wind").html(data.wind);

    $("body").css({
        "background": "url(img/" + data.weather + ".jpg) no-repeat center center fixed",
        "background-size": "cover"

    });
}


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
               
                data.city = input.val();
                data.temp = kelvinToCel(result.main.temp);
                data.min = kelvinToCel(result.main.temp_min);
                data.max = kelvinToCel(result.main.temp_max);
                data.hum = result.main.humidity;
                data.weather = result.weather[0].main;
                data.wind = degrees(result.wind.deg);

                loadData(data);




            },
            error: function (result) {
                console.log(result);

            }
        });
    }
}

function getInfoByCity (city) {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=493539488ed186ea91ec1ff76569acea",
        success: function (result) {
           
            data.city = city;
            data.temp = kelvinToCel(result.main.temp);
            data.min = kelvinToCel(result.main.temp_min);
            data.max = kelvinToCel(result.main.temp_max);
            data.hum = result.main.humidity;
            data.weather = result.weather[0].main;
            data.wind = degrees(result.wind.deg);

            loadData(data);




        },
        error: function (result) {
            console.log(result);

        }
    });
}


$(document).ready(function(){

    if (localStorage.getItem("history") != null) {
        loadData(JSON.parse(localStorage.getItem("history")));
    }

});


