$(function(){
    
    $('#pierwszy').click(function(){
    
        $('p:last').after($('p:first'));
        
    });
    
    $('#drugi').click(function(){
        
       $('p:first').before($('p:last')); 
    });
    
});