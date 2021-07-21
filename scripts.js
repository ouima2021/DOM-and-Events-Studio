// Write your JavaScript code here.
// Remember to pay attention to page loading!
function toSpaceWeGo() {
       const takeOff = document.getElementById("takeoff");
       const status = document.getElementById("flightStatus");
       const land = document.getElementById("landing"); 
       const abortMission = document.getElementById("missionAbort");
      // const rocketImage = document.getElementById("rocket");
       const upButton = document.getElementById("itsUp");
       const downButton = document.getElementById("itsDown"); 
       const rightButton = document.getElementById("goRight"); 
       const leftButton = document.getElementById("goLeft"); 
       let imageObject = document.getElementById("rocket");
          imageObject.style.position = 'relative';
          imageObject.style.left = '0px';
          imageObject.style.bottom = '0px';

     
      takeOff.addEventListener("click", function() {
           let response = window.confirm("Confirm that the shuttle is ready for takeoff");
           if (response) {
                status.innerHTML = "Shuttle in flight"; 
                document.getElementById("shuttleBackground").style.backgroundColor = "blue";
                document.getElementById("spaceShuttleHeight").innerHTML = 10000;  
           }
      });
    
      land.addEventListener("click", function() {
            window.alert("The shuttle is landing. Landing gear engaged.");
            status.innerHTML = "The shuttle has landed.";
            document.getElementById("shuttleBackground").style.backgroundColor = ""; 
            document.getElementById("spaceShuttleHeight").innerHTML = 0; 
            imageObject.style.position = 'relative'; 
      });
  
     abortMission.addEventListener("click", function() {
       let response2 = window.confirm("Confirm that you want to abort the mission");
         if (response2) {
             status.innerHTML = "Mission Aborted"; 
             document.getElementById("shuttleBackground").style.backgroundColor = ""; 
             document.getElementById("spaceShuttleHeight").innerHTML = 0; 
         }
     });

 
       upButton.addEventListener("click", function(){
               let fromBottomToTop = parseInt(imageObject.style.bottom) + 10 + 'px';
               imageObject.style.bottom = fromBottomToTop; 
               document.getElementById("spaceShuttleHeight").innerHTML = parseInt(document.getElementById("spaceShuttleHeight").innerHTML) + 10000;
               
       });
   
       downButton.addEventListener("click", function(){
               let fromTopToBottom = parseInt(imageObject.style.bottom) - 10 + 'px'; 
               imageObject.style.bottom = fromTopToBottom; 
               document.getElementById("spaceShuttleHeight").innerHTML = parseInt(document.getElementById("spaceShuttleHeight").innerHTML) - 10000;
       });

        rightButton.addEventListener("click", function(){
                let goToRight = parseInt(imageObject.style.left) + 10 + 'px'; 
                imageObject.style.left = goToRight; 

        });

        leftButton.addEventListener("click", function(){
                let goToLeft = parseInt(imageObject.style.left) - 10 + 'px'; 
                imageObject.style.left = goToLeft; 
        });

}






window.addEventListener("load", toSpaceWeGo); 