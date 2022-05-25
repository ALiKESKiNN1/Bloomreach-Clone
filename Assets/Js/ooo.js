$("li#uni").click(function(){
    $("#part--1").attr("style","display:block;");
    $("#part--2").attr("style","display:none;");
    $("#part--3").attr("style","display:none;");

})

$("li#dat").click(function(){
    $("#part--2").attr("style","display:block;");
    $("#part--1").attr("style","display:none;");
    $("#part--3").attr("style","display:none;");

})
$("li#ınt").click(function(){
    $("#part--3").attr("style","display:block;");
    $("#part--1").attr("style","display:none;");
    $("#part--2").attr("style","display:none;");

})
