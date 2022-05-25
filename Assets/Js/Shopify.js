
$("#backButton").click(function(){
    $(".firstPage").attr("style","display:flex;");
    $("#chosen1").attr("style","display:flex;");
    $(".secondPage").attr("style","display:none;");
    $("#chosen2").attr("style","display:none;");

})
$("#forwardButton").click(function(){
    $(".secondPage").attr("style","display:flex;");
    $("#chosen2").attr("style","display:flex;");
    $(".firstPage").attr("style","display:none;");
    $("#chosen1").attr("style","display:none;");

})