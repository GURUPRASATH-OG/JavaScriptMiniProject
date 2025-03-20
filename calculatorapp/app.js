const clearBtn = document.querySelector('.clear-btn');
const backBtn = document.querySelector('.backspace-btn');
const equalToBtn = document.querySelector('.equal-to');
const allBtn = document.querySelectorAll('.btn');
const inputBtnValue = document.querySelector('.number-box');
console.log(clearBtn,backBtn,equalToBtn,allBtn,inputBtnValue)

allBtn.forEach(btnClickFunction);
equalToBtn.addEventListener('click',equalToBtnFunction);
backBtn.addEventListener('click',backBtnFunction);
clearBtn.addEventListener('click',clearBtnFunction);
function clearBtnFunction()
{
    // clearing the value
    inputBtnValue.value="";
}
function equalToBtnFunction()
{
    //the calculation process takes place here
    const evalutedValue = eval(inputBtnValue.value);
    inputBtnValue.value=evalutedValue;
    buttonFunctionDisabled(false);
}
function backBtnFunction()
{
    //backspace logic it get the input value and remove it one by one when backaspace is clicked
    //using the slice method.
    inputBtnValue.value=inputBtnValue.value.slice(0,-1);
    buttonFunctionDisabled(false);
}
function buttonFunctionDisabled(data)
{
    //buttons are disabled or enabled accroding the data;
    for(let buttons of allBtn)
    {
    buttonFunctionDisabled.disabled=data;
    }
}
function btnClickFunction(button)
{
    button.addEventListener('click',(e)=>{
        const btnClick = e.target.dataset.set;
        console.log(btnClick);
        if(btnClick)
        {
            inputBtnValue.value+=btnClick;
        }
        if(inputBtnValue.value.Length ===inputBtnValue.maxLength)
        {
            //the input button will be disabled if it exceeds the maximun length.
            buttonFunctionDisabled(true)
        }
    })
}
