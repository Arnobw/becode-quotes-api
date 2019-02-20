$('#foto, #foto2').hide();
$('#input').hide();

//vult de datalist aan met elke author in de database en skipped elke dubbele entry;
$.get('http://localhost:4000/api/quotes', function (data) {
    let namen = Array.from(data);
    for (i = 0; i < namen.length; i++) {
        
        if (i > 0) {
            if (namen[i].author !== namen[(i-1)].author) {

                $('#namen').append("<option value='" + namen[i].author + "'>" + "</option>")
            }

        }
    }
});


$('#btnAuth').click(function () {
    $('#input').show();
    $('#btnAuth, #btnRand, #btnQuo').hide();
});


function randomQuote() {
    $('#btnAuth, #btnRand, #btnQuo').hide();
    $.get('http://localhost:4000/api/quotes', function (data) {
        let randje = Array.from(data);
        let r = Math.floor(Math.random() * randje.length);
        $('#quotelijst').empty();
        $('#quotelijst').append('<li>' + randje[r].quote + " </li>" + "<p>" + "- " + randje[r].author + "</p>");
        $('#foto2').show();
        $('#foto2').css('background-image', "url('../img/" + randje[r].author + ".gif')");
    })
};

$('#btnRand, #foto2').click(randomQuote);


// episch de backend werkt gewoon echt
function quoteZoeken() {
  
$('#btnAuth, #btnRand, #btnQuo').hide();
$('#input').show();

$('#input').keydown(function (e) {
        if (e.which === 13) {
            
            let naam = $('#input').val();
            $('#quotelijst').empty();
            $('#foto').show();
            $('#foto').css('background-image', "url('../img/huis.jpg')");
            $.get('http://localhost:4000/api/quotes/quote/' + naam, function (data) {
                console.log(data);
            data.forEach(quotee => {
            $('#quotelijst').append('<li>' + quotee.quote + " </li>" + "<p class='lijstnaam' id='" + quotee.author + "'>" + "- " + quotee.author + "</p>");
            });
            })
        }
    })
};
$("#btnQuo").click(quoteZoeken);


//FRONT END SEARCH XD
// function quoteZoeken() {

//     $('#namen').empty();
//     $('#btnAuth, #btnRand, #btnQuo').hide();
//     $('#input').show();
//     $('#input').keydown(function (e) {
//         if (e.which === 13) {
//             $('#foto').show();
//             $('#foto').css('background-image', "url('../img/huis.jpg')")
//             $.get("http://localhost:4000/api/quotes", function (data) {

//                 $('#quotelijst').empty();
//                 data.forEach(quotee => {
//                     if (quotee.quote.toLowerCase().indexOf($("#input").val().toLowerCase()) != -1) {


//                         $('#quotelijst').append('<li>' + quotee.quote + " </li>" + "<p class='lijstnaam' id='" + quotee.author + "'>" + "- " + quotee.author + "</p>");
//                     }
//                 });
//             })
//         }

//     });

//     $('#quotelijst').on('click', '.lijstnaam', function () {

//         let clicked = (this).id;

//         $('#foto').css('background-image', "url('../img/" + clicked + ".jpg')")
//         $('#quotelijst').empty();
//         $.get("http://localhost:4000/api/quotes/" + clicked, function (data) {


//             data.forEach(quotee => {
//                 $('#quotelijst').append('<li>' + quotee.quote + " </li>" + "<p>" + "- " + quotee.author + "</p>");


//             })

//         });
//     });


//};


function naamZoeken() {
    $('#input').keydown(function (e) {

        let naam = $('#input').val();
        if (e.which === 13) {
            $('#quotelijst').empty();
            $("#container").hide();
            $("#container").slideDown();

            $.get('http://localhost:4000/api/quotes/' + naam, function (data) {

                if (data.length == 0) {
                    $('#quotelijst').append("<li>" + "Ja lap zeg, die woont toch niet in het dorp?" + "</li>")
                    $('#foto').show();
                    $('#foto').css('background-image', "url('../img/ramp.gif')");
                } else {
                    $('#foto').show();
                    $('#foto').css('background-image', "url('../img/" + data[0].author + ".gif')");

                    //sorteer tijd

                    data.forEach(quotee => {
                        //    var l = document.createElement("li");
                        //    l.value = quotee.quote;
                        $('#quotelijst').append('<li>' + quotee.quote + " </li>" + "<p>" + "- " + quotee.author + "</p>");

                    });

                }
            })
        }
    })
};
$('#btnAuth').click(naamZoeken);