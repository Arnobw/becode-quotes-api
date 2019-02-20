$('#foto, #foto2').hide();
$('#input').hide();



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

function quoteZoeken() {

    $('#namen').empty();
    $('#btnAuth, #btnRand, #btnQuo').hide();
    $('#input').show();
    $('#input').keydown(function (e) {
        if (e.which === 13) {
            $('#foto').show();
            $('#foto').css('background-image', "url('../img/huis.jpg')")
            $.get("http://localhost:4000/api/quotes", function (data) {

                $('#quotelijst').empty();
                data.forEach(quotee => {
                    if (quotee.quote.toLowerCase().indexOf($("#input").val().toLowerCase()) != -1) {


                        $('#quotelijst').append('<li>' + quotee.quote + " </li>" + "<p class='lijstnaam' id='" + quotee.author + "'>" + "- " + quotee.author + "</p>");
                    }
                });
            })
        }

    });

    $('#quotelijst').on('click', '.lijstnaam', function () {

        let clicked = (this).id;

        $('#foto').css('background-image', "url('../img/" + clicked + ".jpg')")
        $('#quotelijst').empty();
        $.get("http://localhost:4000/api/quotes/" + clicked, function (data) {


            data.forEach(quotee => {
                $('#quotelijst').append('<li>' + quotee.quote + " </li>" + "<p>" + "- " + quotee.author + "</p>");


            })

        });
    });


};
$("#btnQuo").click(quoteZoeken);

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