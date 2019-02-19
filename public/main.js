



$('#input').keydown(function(e){
 
   let naam = $('#input').val();
    if (e.which === 13) {
        $('#quotelijst').empty();
        $("#container").hide();
        $("#container").slideDown();
      
        $.get('http://localhost:4000/api/quotes/' + naam, function(data){
           
       data.forEach(quotee => {
        //    var l = document.createElement("li");
        //    l.value = quotee.quote;
           $('#quotelijst').append('<li>' + quotee.quote + " </li>" +  "<p>" + "- " + quotee.author + "</p>"   );
      
        });
        console.log(naam);
        // if(naam == "Samson"){
        //     $('body').css('background-image', 'url("../img/bg2.png")');
        //     $('body').css('background-size', 'auto');
        //     $('body').css('background-repeat', 'repeat');
        // } else {
        //     $('body').css('background-image', 'url("../img/bg.jpg")');
        // }
    })
 }
});

