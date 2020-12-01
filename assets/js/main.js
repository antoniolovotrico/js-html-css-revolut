//Handler Metod
$(function(){
    //definire variabile pulsante menu
    var puls = $("li.drop_down");
    
    //funzione dropdown menu
    puls.hover(function(){
        
        $(this).children("ul.list_menu").removeClass("dhide");

    }, function(){

        $(this).children("ul.list_menu").addClass("dhide");
        
    });
    
   

});
