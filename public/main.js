



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
           $('#quotelijst').append('<li>' + quotee.quote + " </li>");
       });
        console.log(naam);
    })
 }
});