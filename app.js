
window.onload = function () {
  
    var seconds = 0; 
    var tens = 0; 
    var Tens = document.getElementById("tens")
    var Seconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      Tens.innerHTML = tens;
        Seconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        Tens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        Tens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        Seconds.innerHTML = "0" + seconds;
        tens = 0;
        Tens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        Seconds.innerHTML = seconds;
      }
    
    }
    
  
  }