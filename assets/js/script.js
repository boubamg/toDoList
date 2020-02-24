// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed") 
});

// Click on X to delete Todo
$("ul").on("click", "span", function(e){
    // remove span parent and not just span
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

// When you write something into input and press enter : Add ToDo
var text = $("ul").html();
$("input[type='text']").keypress(function(e){
    if (e.which === 13){
        $("ul").append("<li><span>X</span> " + $(this).val() + "</li>");
        $(this).val("");
    }
});