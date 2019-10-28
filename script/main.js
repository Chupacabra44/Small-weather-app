function kelvinToCel(kelvin) {
return Math.round(kelvin-273.13);
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
    input.css ({
        "border": "1px solid #e2e2e2"
        });

    if(input.val() == ""){
        input.css ({
        "border": "1px solid red"
        });

    } else {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q="+input.val()+"&appid=a666c53dc203ed06d232b4c600cd7cca",
            success: function (result) {
                console.log(kelvinToCel(result.main.temp_min));
                console.log(kelvinToCel(result.main.temp_max));
                console.log(kelvinToCel(result.main.temp));

                $("#temp").html(kelvinToCel(result.main.temp));
                console.log(result);
            },
            error: function (result) {
                console.log(result);
        
            }
        });
    }
}