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
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function(){
    
    
    if(this.classList.contains('active') === false){
      this.classList.add('active')
      
    }
    else if(this.classList.contains('active') === true){
      this.classList.remove('active')

    }
        
  })
  
});