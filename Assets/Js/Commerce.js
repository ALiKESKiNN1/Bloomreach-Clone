$("li#eng").click(function(){
    $("#part").attr("style","display:block;");
    $("#part2").attr("style","display:none;");
    $("#part3").attr("style","display:none;");
})

$("li#dis").click(function(){
    $("#part2").attr("style","display:block;");
    $("#part").attr("style","display:none;");
    $("#part3").attr("style","display:none;");
})
$("li#con").click(function(){
    $("#part3").attr("style","display:block;");
    $("#part").attr("style","display:none;");
    $("#part2").attr("style","display:none;");
})


// part2
$("li#mar").click(function(){
    $("#part-1").attr("style","display:block;");
    $("#part-2").attr("style","display:none;");
    $("#part-3").attr("style","display:none;");
    $("#part-4").attr("style","display:none;");
})

$("li#e-c").click(function(){
    $("#part-2").attr("style","display:block;");
    $("#part-1").attr("style","display:none;");
    $("#part-3").attr("style","display:none;");
    $("#part-4").attr("style","display:none;");
})
$("li#mer").click(function(){
    $("#part-3").attr("style","display:block;");
    $("#part-1").attr("style","display:none;");
    $("#part-2").attr("style","display:none;");
    $("#part-4").attr("style","display:none;");
})
$("li#crm").click(function(){
    $("#part-4").attr("style","display:block;");
    $("#part-1").attr("style","display:none;");
    $("#part-2").attr("style","display:none;");
    $("#part-3").attr("style","display:none;");
})