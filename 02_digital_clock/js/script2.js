const clock=document.querySelector('.clock');
function runClock(){
    var time=new Date();
    var hrs=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var txt="AM";
    if(hrs>12){
        hrs=hrs-12;
        txt="PM";
    }else if(hrs==0){
        hrs=12;
        txt="AM";
    }
    hrs=hrs<10?'0'+hrs:hrs;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;


const h=document.querySelectorAll('.h');
const m=document.querySelectorAll('.m');
const s=document.querySelectorAll('.s');

hrs=hrs.toString();
h[0].innerHTML=hrs[0];
h[1].innerHTML=hrs[1];
min=min.toString();
m[0].innerHTML=min[0];
m[1].innerHTML=min[1];
sec=sec.toString();
s[0].innerHTML=sec[0];
s[1].innerHTML=sec[1];


}
runClock();
setInterval(runClock,1000);

