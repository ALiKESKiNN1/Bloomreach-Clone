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