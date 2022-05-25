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
$("li#crm").click(function(){
    $("#part-3").attr("style","display:block;");
    $("#part-1").attr("style","display:none;");
    $("#part-2").attr("style","display:none;");
    $("#part-4").attr("style","display:none;");
})
$("li#dot").click(function(){
    $("#part-4").attr("style","display:block;");
    $("#part-1").attr("style","display:none;");
    $("#part-2").attr("style","display:none;");
    $("#part-3").attr("style","display:none;");
})