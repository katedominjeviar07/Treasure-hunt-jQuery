$("#1pic").click(function(){
    $("p").text("Hover here to find the map for the hunt!!");
});
$("#map").hover(function(){
    $("body").css('background-image','url("https://i.pinimg.com/originals/1e/70/00/1e70004a12b8c1e6aa1987e0d7f8a04b.jpg")');
    $("button").show();
});
$("#button").mouseenter(function(){
    $("#riddle").text("What was the name of captain jack sparrow? ");
    
});
$("#riddle").mouseleave(function(){
    $("#riddle").show();
    $("#riddle").show();
    
});