function buttonload(){
    const beating='@keyframes beating{0%{transform: scale(1);}20%{transform: scale(1.05);}40%{transform: scale(1);}60%{transform: scale(1.05);}80%{transform: scale(1);}100%{transform: scale(1);}}';
    let clickme=document.getElementById("hihi");
    clickme.innerHTML="mwah 👉👈";
    clickme.style.animation= 'beating 1s ease-in-out infinite';
}