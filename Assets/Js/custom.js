$("li#sse").click(function(){
    $("#episode_1").attr("style","display:flex;");
    $("#episode_2").attr("style","display:none;");
    $("#episode_3").attr("style","display:none;");
})

$("li#aae").click(function(){
    $("#episode_2").attr("style","display:flex;");
    $("#episode_3").attr("style","display:none;");
    $("#episode_1").attr("style","display:none;");
})
$("li#ffe").click(function(){
    $("#episode_3").attr("style","display:flex;");
    $("#episode_1").attr("style","display:none;");
    $("#episode_2").attr("style","display:none;");
})



$("#discoveryCard").click(function(){
    $("#productValues_1").attr("style","display:block")
    $("#productValues_2").attr("style","display:none")
    $("#productValues_3").attr("style","display:none")
})
$("#engagementCard").click(function(){
    $("#productValues_1").attr("style","display:none")
    $("#productValues_2").attr("style","display:block")
    $("#productValues_3").attr("style","display:none")
})
$("#contentCard").click(function(){
    $("#productValues_1").attr("style","display:none")
    $("#productValues_2").attr("style","display:none")
    $("#productValues_3").attr("style","display:block")
})



$("#discoveryCard").click(function(){
    $("#discoveryCard").attr("style","background: #f3fbfe;")
    $("#engagementCard").attr("style","background: #fff;")
    $("#contentCard").attr("style","background: #fff;")
})
$("#engagementCard").click(function(){
    $("#engagementCard").attr("style","background: #f3fbfe;")
    $("#discoveryCard").attr("style","background: #fff;")
    $("#contentCard").attr("style","background: #fff;")
})
$("#contentCard").click(function(){
    $("#contentCard").attr("style","background: #f3fbfe;")
    $("#discoveryCard").attr("style","background: #fff;")
    $("#engagementCard").attr("style","background: #fff;")
})
$("ul.navbar-nav.mb-2.mb-lg-0 > li").click(function(){
    $(".dropdown-menu").addClass("active")
})
    
