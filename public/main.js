$('#foto').hide();
$('#input').hide();



$('#btnAuth').click(function(){
    $('#input').show();
    $('#btnAuth, #btnRand, #btnQuo').hide();
});


$('#btnRand, #foto').click(function(){
    $('#btnAuth, #btnRand, #btnQuo').hide();
    $.get('http://localhost:4000/api/quotes', function(data){
        const randje = Array.from(data);
        let r = Math.floor(Math.random()*randje.length);
        $('#quotelijst').empty();
        $('#quotelijst').append('<li>' + randje[r].quote + " </li>" +  "<p>" + "- " + randje[r].author + "</p>"   );
        $('#foto').show();
        $('#foto').css('background-image', "url('../img/" + randje[r].author + ".jpg')");
    })
});

$('#input').keydown(function(e){
 
   let naam = $('#input').val();
    if (e.which === 13) {
        $('#quotelijst').empty();
        $("#container").hide();
        $("#container").slideDown();
      
        $.get('http://localhost:4000/api/quotes/' + naam, function(data){
          $('#foto').show();
        $('#foto').css('background-image', "url('../img/" + naam + ".jpg')") 
       data.forEach(quotee => {
        //    var l = document.createElement("li");
        //    l.value = quotee.quote;
           $('#quotelijst').append('<li>' + quotee.quote + " </li>" +  "<p>" + "- " + quotee.author + "</p>"   );
           
        });
        console.log(naam);
      
    })
 }
});

