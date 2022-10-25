    $('#one').on('click',function(){
        var current=$('#img1');
        var prev=$('#img4');
        prev.removeClass('active');
        current.addClass('active');

       
})
$('#two').on('click',function(){
    
    var current=$('#img2');
    var prev=$('#img1');
    prev.removeClass('active');
    current.addClass('active');
    
   
})
$('#three').on('click',function(){
    var current=$('#img3');
    var prev=$('#img2');
    prev.removeClass('active');
    current.addClass('active');
   
})
$('#four').on('click',function(){
    var current=$('#img4');
    var prev=$('img3')
    prev.removeClass('active');
    current.addClass('active');
   
})
