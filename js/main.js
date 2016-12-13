$(function(){
    
    $('#pierwszy').click(function(){ // nadanie właściwości pierwszemu przyciskowi
    
        $('p:last').after($('p:first')); // przesuwamy pierwszy element p na ostatnie miejsce
        
    });
    
    $('#drugi').click(function(){
        
       $('p:first').before($('p:last'));  // przesuwamy ostatni element na pierwsze miejsce
    });
    
});