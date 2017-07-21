$(document).ready(function () {

    var skill = document.getElementById("skill");
    if(document.scrollTop=111100){
        setTimeout(moveHTML, 1000);
        setTimeout(moveCSS, 1000);
        setTimeout(moveJS, 1000);
         setTimeout(moveEx, 1000);
         setTimeout(moveIn, 1000);
         setTimeout(moveDe, 1000);  
    }
    
    $(".go").on("click", function(){
       
        setTimeout(moveHTML, 1000);
        setTimeout(moveCSS, 1000);
        setTimeout(moveJS, 1000);
         setTimeout(moveEx, 1000);
         setTimeout(moveIn, 1000);
         setTimeout(moveDe, 1000); 
        
        
    });
    
    

       
        
   
   
      function moveHTML(){
          var elem = document.getElementById("myBarHTML");
          var width = 10;
          var id = setInterval( frame, 10);
          function frame(){
              if (width>=60){
                  clearInterval(id);
                  
              }
              else{
                  width++;
                  elem.style.width = width + "%";
                  document.getElementById("labelHTML").innerHTML = width*1 + "%";
              }
          }
         
      }
    
          function moveCSS(){
          var elem = document.getElementById("myBarCSS");
          var width = 10;
          var id = setInterval( frame, 10);
          function frame(){
              if (width>=75){
                  clearInterval(id);
                  
              }
              else{
                  width++;
                  elem.style.width = width + "%";
                  document.getElementById("labelCSS").innerHTML = width*1 + "%";
              }
          }
         
      }
    
            function moveJS(){
          var elem = document.getElementById("myBarJS");
          var width = 10;
          var id = setInterval( frame, 10);
          function frame(){
              if (width>=65){
                  clearInterval(id);
                  
              }
              else{
                  width++;
                  elem.style.width = width + "%";
                  document.getElementById("labelJS").innerHTML = width*1 + "%";
              }
          }
         
      }
      
      
                function moveEx(){
          var elem = document.getElementById("myBarEx");
          var width = 10;
          var id = setInterval( frame, 10);
          function frame(){
              if (width>=70){
                  clearInterval(id);
                  
              }
              else{
                  width++;
                  elem.style.width = width + "%";
                  document.getElementById("labelEx").innerHTML = width*1 + "%";
              }
          }
         
      }
    
    
    
                function moveIn(){
          var elem = document.getElementById("myBarIn");
          var width = 10;
          var id = setInterval( frame, 10);
          function frame(){
              if (width>=55){
                  clearInterval(id);
                  
              }
              else{
                  width++;
                  elem.style.width = width + "%";
                  document.getElementById("labelIn").innerHTML = width*1 + "%";
              }
          }
         
      }
    
    
    
                function moveDe(){
          var elem = document.getElementById("myBarDe");
          var width = 10;
          var id = setInterval( frame, 10);
          function frame(){
              if (width>=80){
                  clearInterval(id);
                  
              }
              else{
                  width++;
                  elem.style.width = width + "%";
                  document.getElementById("labelDe").innerHTML = width*1 + "%";
              }
          }
         
      }
    
    
    
});


