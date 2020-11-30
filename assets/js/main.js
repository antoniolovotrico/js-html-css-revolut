//Handler Metod
$(function(){
    //definire variabile pulsante menu
    
    
    //funzione dropdown menu
    $("ul.drop_down li").hover(function(){
        
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');

    }, function(){

        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
        
    });
    
    $("ul.drop_down li ul li:has(ul)").find("a:first");

});