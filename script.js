setInterval(setClock, 1000);//this will run the setClock function every 1000miliseconds which is equal to 1second.

const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function setClock(){
    const currentDate = new Date();//created an object of Date class

    
    const secondsRatio = currentDate.getSeconds()/60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60;//added secondsRatio for gradual increase of the minute hand.
    const hoursRatio = (minutesRatio + currentDate.getHours())/12 ;
    //added minutesRatio for gradual increase of hour hand


    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty("--rotation", rotationRatio*360);
}

setClock();