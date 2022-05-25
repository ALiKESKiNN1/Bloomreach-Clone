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