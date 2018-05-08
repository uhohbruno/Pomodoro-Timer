 $(document).ready(function() {
   $('#startupAnimation').on("load", function(){
        $(this).animate({transform: 'scale(2)'}, 1500 );
   });



   //pomodoro wok time
   var minutes = 25;
   let pomodoroTimer = null;
   let minutesBreak = 5;
   let resetMinutes = 25,
     resetMinutesBreak = 5;

   //decrement
   $("#minus").click(function() {
     minutes = resetMinutes;
     if (minutes >= 2) {
       minutes--;
       resetMinutes--;
     }
     clearInterval(pomodoroTimer);
     $("#pomodoro").html(minutes);
     $("#start").css({
       "pointer-events": "auto"
     });
     $("#timeFluid").css({
       "width": "0px"
     });
   })

   //increment

   $("#plus").click(function() {
     minutes = resetMinutes;
     if (minutes != 50) {
       minutes++;
       resetMinutes++;
     }
     clearInterval(pomodoroTimer);
     $("#pomodoro").html(minutes);
     $("#start").css({
       "pointer-events": "auto"
     });
     $("#timeFluid").css({
       "width": "0px"
     });
   })

   $("#plusBreak").click(function() {
     minutes = resetMinutesBreak;
     if (minutesBreak != 30) {
       minutesBreak++;
       resetMinutesBreak++;
     }
     clearInterval(breakInterval);
     $("#break").html(minutesBreak);
     $("#start").css({
       "pointer-events": "auto"
     });
     $("#timeFluid").css({
       "width": "0px"
     });
   })


   $("#minusBreak").click(function() {
     minutes = resetMinutesBreak;
     if (minutesBreak >= 2) {
       minutesBreak--;
       resetMinutesBreak--;
     }
     clearInterval(breakInterval);
     $("#break").html(minutesBreak);
     $("#start").css({
       "pointer-events": "auto"
     });
     $("#timeFluid").css({
       "width": "0px"
     });
   })


   let x = function startCountDown() {
     $("#start").css({
       "pointer-events": "none"
     });
     let px = 0;
     minutes = $("#pomodoro").html();
     let starterMinutes = minutes;
     let countDown15 = 60 * minutes;
     let fluid100 = 1000 * 60 * minutes;
     let plusPx = 400 / (minutes * 60);
     resetMinutes = starterMinutes;
     minutes -= 1;
     // Update the count down every 1 second
     pomodoroTimer = setInterval(function() {

       // Get todays date and time


       // Find the timeToFinish between now an the count down date
       countDown15 -= 1;



       var seconds = Math.floor((countDown15 % 60));
       console.log(minutes, seconds);
       if (seconds < 10 || minutes < 10) {
         if (seconds < 10 && minutes < 10) {
           document.getElementById("pomodoro").innerHTML = "0" + minutes + ":0" + seconds + "";
         } else if (seconds < 10) {
           document.getElementById("pomodoro").innerHTML = minutes + ":0" + seconds + "";
         } else if (minutes < 10) {
           document.getElementById("pomodoro").innerHTML = "0" + minutes + ":" + seconds + "";
         }
       } else {
         // Display the result in the element with id="pomodoro"
         document.getElementById("pomodoro").innerHTML = minutes + ":" + seconds + "";
       }
       if (seconds == 0) {
         minutes -= 1;
       }
       // If the count down is finished, write some text 
       px += plusPx;
       $("#timeFluid").css({
         "width": px + "px"
       })
       if (minutes <= 0 && seconds <= 0) {
         clearInterval(pomodoroTimer);
         minutes = starterMinutes;
         px = 0;


         $("#pomodoro").html(minutes);
         $("#timeFluid").css({
           "width": "0px"
         })
         pomoBreak();
       }

     }, 1000);
   }




   let breakInterval = null;
   //break  
   let pomoBreak = function startBreakCountDown() {

     let px = 0;
     minutesBreak = $("#break").html();

     let starterMinutes = minutesBreak;
     let countDown15 = 60 * minutesBreak;
     let fluid100 = 1000 * 60 * minutesBreak;
     let plusPx = 400 / (minutesBreak * 60);
     resetMinutesBreak = starterMinutes;
     minutesBreak -= 1;
     // Update the count down every 1 second
     breakInterval = setInterval(function() {

       // Get todays date and time


       // Find the timeToFinish between now an the count down date
       countDown15 -= 1;



       var secondsBreak = Math.floor((countDown15 % 60));
       console.log(minutes, secondsBreak);
       if (secondsBreak < 10 || minutesBreak < 10) {
         if (secondsBreak < 10 && minutesBreak < 10) {
           document.getElementById("break").innerHTML = "0" + minutesBreak + ":0" + secondsBreak + "";
         } else if (secondsBreak < 10) {
           document.getElementById("break").innerHTML = minutesBreak + ":0" + secondsBreak + "";
         } else if (minutesBreak < 10) {
           document.getElementById("break").innerHTML = "0" + minutesBreak + ":" + secondsBreak + "";
         }
       } else {
         // Display the result in the element with id="pomodoro"
         document.getElementById("break").innerHTML = minutesBreak + ":" + secondsBreak + "";
       }
       if (secondsBreak == 0) {
         minutesBreak -= 1;
       }
       // If the count down is finished, write some text 
       if (minutesBreak <= 0 && secondsBreak <= 0) {
         clearInterval(breakInterval);
         minutesBreak = starterMinutes;
         $("#break").html(minutesBreak);

         x();
       }

       px += plusPx;
       $("#timeFluid").css({
         "width": px + "px"
       })
     }, 1000);
   }





   $("#start").click(x);
   $("#stop").click(() => {
     clearInterval(pomodoroTimer)
     clearInterval(breakInterval)
     $("#break").html(resetMinutesBreak);
     $("#pomodoro").html(resetMinutes);
     $("#start").css({
       "pointer-events": "auto"
     });
     $("#timeFluid").css({
       "width": "0px"
     });
   });
   /* 
    $("#plusBreak").click(function() {
      $("#pomodoro").html(resetMinutes);
      
    })
    $("#plusMinutes").click(function() {
      $("#pomodoro").html(resetMinutes);
      
    })*/
 })