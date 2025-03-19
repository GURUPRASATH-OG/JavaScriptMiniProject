let countdown;
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const timerDisplay = document.getElementById('timer');
const minutesInput =document.querySelector('.minutes')
const secondsInput = document.querySelector('.seconds')
console.log(startBtn,stopBtn,timerDisplay);
const startCounter = ()=>
{
    /*
    we are creating three variables min,sec which is getting value from the input filed if null or it will be 0 as default value.
    totaltime is equals total minutes*60 + seconds=> converted into seconds.
    */
    let min =minutesInput.value||0;
    let sec = secondsInput.value||0;
    let totalTime = min *60+parseInt(sec);//converting minutes to seconds.
    clearInterval(countdown);
    //creating a interval callback function
    countdown = setInterval(()=>{
        //converting totalTime back to minutes and second for displaying it on timer div 
        let minutes = Math.floor(totalTime/60);
        let seconds = totalTime%60;
        console.log(minutes,seconds)
        //inserting the minutes and second in the timer div padstart(frequency,value) ->padStart(2,'0') means 0 will added to string if one is null it start like 01:10
        timerDisplay.textContent=`${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
        //condition this interval break if totaltime becomes 0;
        if(totalTime<=0)
        {
            clearInterval(countdown)
            alert("Time's Up!")
            timerDisplay.textContent=`Time Up MF!`
        }
        totalTime--;
    },1000)//for each second this interval will trigger.
    console.log(min,sec)
}
const stopCounter = ()=>
{
    clearInterval(countdown) //when click stop button it clear the interval which has been set before.
}
//add eventListner to start and stop button.
startBtn.addEventListener('click',startCounter)
stopBtn.addEventListener('click',stopCounter)