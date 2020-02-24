// Check off specific todos by clicking
$("li").click(function(){
    $(this).toggleClass("completed") 
});

// Click on X to delete Todo
$("span").click(function(e){
    // remove span parent and not just span
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});