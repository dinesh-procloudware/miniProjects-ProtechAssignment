var start = document.getElementById("startBtn");
var stop = document.getElementById("stopBtn");
var pause = document.getElementById("pauseBtn");
var stopWatch = document.querySelector('.stopWatch');
var minutes=document.getElementById("minutes").value;
console.log("minutes",minutes);
var seconds=document.getElementById("seconds").value;
console.log("seconds",seconds);




var counter;
function getInputTime()
{
    myVar = setInterval(decreamentTime(),1000);
}
function decreamentTime(){
var minutes=document.getElementById("minutes").value;
console.log("minutes",minutes);
var seconds=Number(document.getElementById("seconds").value);
console.log("seconds",seconds);
minutesToSeconds=minutes*60+seconds;
console.log("::MTS",minutesToSeconds);
 
if(minutesToSeconds>=0)
{
    minutesToSeconds--;
   
}



}



//pause.style.display="none";
// var ms = 0;
// s = 0, m = 0;
// var timer = 0;

// function run() {
//     stopWatch.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
//        ms++;
//     if (ms == 100) {
//         ms = 0;
//         s++
//     }
//     if (s == 60) {
//         s = 0;
//         m++
//     }
// }
// function pauseTime() {
//     clearInterval(timer);
//      timer = false;
//      console.log("::TIMERPAUSE",timer);
// }
// function stopTime() {
    
//     clearInterval(timer);
//     console.log("::TIMERSTOP",timer);
// timer = false;
//     ms = 0;
//     s = 0;
//     m = 0;
//     stopWatch.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
// }






































// function pauseShow() {
//     //hide show btn
//     pause.style.display="none";
//     start.style.display="block";
    
// }
// function startShow() {
//     //hide pause btn
  
//    pause.style.display="block";
//    start.style.display="none";
// }
// function stopShow() {
//     //hide pause btn
//     pause.style.display="none";
//     start.style.display="block";
  
// }
// function startTime() {
//     timer = setInterval(run, 10);
//     console.log("::TIMER",timer);
// }