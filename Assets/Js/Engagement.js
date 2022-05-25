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
// ksdkjas

$("li#dep").click(function(){
    $("#part---1").attr("style","display:block;");
    $("#part---2").attr("style","display:none;");
    $("#part---3").attr("style","display:none;");
    $("#part---4").attr("style","display:none;");
})

$("li#bep").click(function(){
    $("#part---2").attr("style","display:block;");
    $("#part---1").attr("style","display:none;");
    $("#part---3").attr("style","display:none;");
    $("#part---4").attr("style","display:none;");
})
$("li#web").click(function(){
    $("#part---3").attr("style","display:block;");
    $("#part---1").attr("style","display:none;");
    $("#part---2").attr("style","display:none;");
    $("#part---4").attr("style","display:none;");
})
$("li#cam").click(function(){
    $("#part---4").attr("style","display:block;");
    $("#part---1").attr("style","display:none;");
    $("#part---2").attr("style","display:none;");
    $("#part---3").attr("style","display:none;");
})
// bdshabdas

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



let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function(){
    // buttons.forEach(btn => btn.classList.remove('active')); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    if(this.classList.contains('active') === false){
      this.classList.add('active')
      
    }
    else if(this.classList.contains('active') === true){
      this.classList.remove('active')

    }
        
  })
  
});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}