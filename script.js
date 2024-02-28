const hourHand = document.querySelector('.hourHand');
const minHand = document.querySelector('.minsHand');
const secHand = document.querySelector('.secHand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree = ((seconds/60)*360) + 90;
    secHand.style.transform = `rotate(${secondDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes/60)*360) + ((seconds/60)*6) + 90;
    minHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours/12)*360) + ((minutes/60)*30) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);
setDate();