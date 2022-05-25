
var header = document.getElementById("pills-tab");
var btns = header.getElementsByClassName("nav-link");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}
$("#pills-tab-1").click(function(){
    $("#pills-1").attr("style","display:flex;");
    $("#pills-2").attr("style","display:none;");
    $("#pills-3").attr("style","display:none;");
    $("#pills-4").attr("style","display:none;");

})
$("#pills-tab-2").click(function(){
    $("#pills-2").attr("style","display:flex;");
    $("#pills-1").attr("style","display:none;");
    $("#pills-3").attr("style","display:none;");
    $("#pills-4").attr("style","display:none;");

})
$("#pills-tab-3").click(function(){
    $("#pills-3").attr("style","display:flex;");
    $("#pills-1").attr("style","display:none;");
    $("#pills-2").attr("style","display:none;");
    $("#pills-4").attr("style","display:none;");

})
$("#pills-tab-4").click(function(){
    $("#pills-4").attr("style","display:flex;");
    $("#pills-1").attr("style","display:none;");
    $("#pills-2").attr("style","display:none;");
    $("#pills-3").attr("style","display:none;");

})