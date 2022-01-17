

const validateNumber = (number)=>{

let result=true;

    if(isNaN(number)==false)
    { 
        return results = false;   
    }

    else
    {
        return results = true;
    }
}

const validatenumberDisplay = (validateResult,errorScreen)=>
{


 
        if (validateResult == true)
        {
      
            errorScreen.innerHTML = "<span id=error> *The value entered is not a number!</span>";
        }
        else if (validateResult == false)
        {
           
            errorScreen.innerHTML = "";
        }

}

const SumTwoNumber = (validate1,validate2,number1,number2,screen)=>
{
    if(validate1 === false && validate2 === false)
    {
        let answer = parseInt(number1) + parseInt(number2);

        screen.innerHTML = `<span class=results> ${number1} + ${number2} = ${answer} </span>`;
    }
}


const main = (()=>{

    const number1 = document.querySelector("#number1");
    const number2 = document.querySelector("#number2");
    const num1error = document.querySelector("#errormessage1");
    const num2error = document.querySelector("#errormessage2");
    const submit = document.querySelector("#submit");
    const results = document.querySelector("#results");





    submit.addEventListener("click",()=>
    {
        let validate_number1 = validateNumber(number1.value);
        validatenumberDisplay(validate_number1,num1error);

        let validate_number2 = validateNumber(number2.value);
        validatenumberDisplay(validate_number2,num2error);

        SumTwoNumber(validate_number1,validate_number2,number1.value,number2.value,results);


    });

})();