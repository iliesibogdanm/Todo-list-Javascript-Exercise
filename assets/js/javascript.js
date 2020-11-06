$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click",".delete",function(e){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which===13){
      var inputValue =  $(this).val();
      $(this).val("");
      $("ul").append("<li><span class='delete'><i class='fas fa-trash'></i></span> " + inputValue + "</li>")
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})