//Handler Metod
$(function(){
    //definire variabile pulsante menu
    
    
    //funzione dropdown menu
    $("ul.drop_down li").hover(function(){
        
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
        
    });

});