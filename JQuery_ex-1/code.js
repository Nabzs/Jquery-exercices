



$(document).ready(function(){
    console.log("Jquery est bien chargé par CDN");


$( ".photo" ).click(function() {
    console.log("Tu as cliqué sur ");

    $("#box").fadeIn(500);

$("#box").html("<p>Coucou</p>");

    titre=$(this).children().attr("title");

    console.log(titre);

    prix=Math.floor(100*Math.random()+50);
    console.log(prix);
    $("#box").html( "<p>Coucou</p>" + "<br>" + titre + "<br>" + prix);




})



});



