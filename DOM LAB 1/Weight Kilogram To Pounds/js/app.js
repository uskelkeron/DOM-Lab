


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

const validateName = (name)=>{

    return /^[A-Za-z\s]*$/.test(name);
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

    const validateNameDisplay = (validateResult,errorScreen)=>
    {
    
    
     
            if (validateResult == false)
            {
          
                errorScreen.innerHTML = "<span id=error> *The value entered is not a valid name!</span>";
            }
            else if (validateResult == true)
            {
               
                errorScreen.innerHTML = "";
            }
    
    }
    
    const WeightConverter = (validate_name,validate_weight,weight,screen)=>
    {
        const ONE_POUND = 2.2;

        if(validate_name === true && validate_weight === false)
        {
            let answer = parseInt(weight) * ONE_POUND;
    
            screen.innerHTML = `<span class=results> ${weight} Kilogram converted to pounds: ${answer} </span>`;
        }
    }
    
    
    const main = (()=>{
    
        const name = document.querySelector("#name");
        const weight = document.querySelector("#Weight");
        const num1error = document.querySelector("#errormessage1");
        const num2error = document.querySelector("#errormessage2");
        const submit = document.querySelector("#submit");
        const results = document.querySelector("#results");
    
    
    
    
    
        submit.addEventListener("click",()=>
        {
            
            let validate_name = validateName(name.value);
            validateNameDisplay(validate_name,num1error);
    
            let validate_weight = validateNumber(weight.value);
            validatenumberDisplay(validate_weight,num2error);
    
            WeightConverter(validate_name,validate_weight,weight.value,results);
    
    
        });
    
    })();