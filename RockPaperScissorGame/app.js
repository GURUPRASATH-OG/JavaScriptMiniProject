const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.user_result img');
const cpuResult = document.querySelector('.cpu_result img');
const Result = document.querySelector('.result');
const optionImages = document.querySelectorAll('.option_image');
console.log(gameContainer,userResult,cpuResult,Result,optionImages);
const scoreBoard = document.querySelector('.score-board');
const scoreDisplay = document.querySelector('.score-display')
let userScore=0; 
let cpuScore=0;
optionImages.forEach((image,index)=>
{
    image.addEventListener('click',(e)=>
    {
        image.classList.add('active');
        //loop through images
        optionImages.forEach((image2,index2)=>
        {
            //console.log(index,index2);
            //if the current index doesn't math the clicked index
            //Remove the active class from the other option images.
            index!==index2 && image2.classList.remove('active')
        });
        gameContainer.classList.add('start');


            //set a timeout to delay the result calculation.
            let time = setTimeout(() => 
            {
                gameContainer.classList.remove('start');
                 //get the source of the clicked option image.
            let imageSrc = e.target.querySelector('img').src;
            //set the user image to clicked option image
            userResult.src=imageSrc
            //console.log(imageSrc);
            //generate a random number between 0 and 2.
            let randomNumber = Math.floor(Math.random()*3);
            //console.log(randomNumber);
            //create a array of cpu image options.
            let cpuImage = ['img/rock.png','img/paper.png','img/scissor.png'];
            //set cpu image to random option from the array.
            cpuResult.src=cpuImage[randomNumber];
            //Assign a letter value to the cpu option for (R for rock, P for paper, S for scissors).
            let cpuValue = ['R','P','S'][randomNumber];
            //Assign a letter value to the clicked option (based on index)
            let userValue = ['R','P','S'][index];
            //let create object with all possible outcomes
            let outcomes ={
                RR:'Draw',
                RP:'Cpu',
                RS:'User',
                PP:"Draw",
                PR:"User",
                PS:"Cpu",
                SS:"Draw",
                SR:"Cpu",
                SP:"User",
            };
            //lok up the outcome value based on user and cpu options.
            let outComeValue = outcomes[userValue+cpuValue];
    //console.log(outComeValue);
            //diplay the result.
            Result.textContent=userValue === cpuValue ? "Match Draw!" :`${outComeValue} Won!`
            
            if(outComeValue === "User")
            {
                 userScore+=1 
            }
            else if(outComeValue ==="Draw")
            {
                console.log("Draw")
            }
            else
            {
                 cpuScore+=1;
            }
            console.log(cpuScore,userScore);
            scoreDisplay.textContent=`Cpu:${cpuScore},user:${userScore}`
            }, 2500);
           
        })
})
