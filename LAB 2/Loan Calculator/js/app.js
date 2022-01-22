
const validateNumber = (num)=>
{
    if(isNaN(num)!== true && num !== "")
    {   
    
        return false;
    }
    else
    {
        return true;
    }
}

const validateDisplay = (result,error)=>
{
    if(result === true)
    {
        error.innerHTML="Enter numeric value";
    }
    else
    {
        error.innerHTML=" ";
    }

}

const rateValidation = (val_num,rate)=>
{
    let FIXED_INTEREST_RATE= 5;

    if(val_num===false && rate === FIXED_INTEREST_RATE)
    {
        return true;
    }

    else
    {
        return false;
    }
}

const rateDisplayMessage = (result,screen)=>
{
    if(result === false)
    {
        screen.innerHTML = "Interest rate is fixed at 5%";
    }
    else
    {
        screen.innerHTML = " ";
    }

}

const calculateLoanTerm = (loanTerm)=>
{
    let MONTHS_IN_YEAR = 12;
    return (loanTerm * MONTHS_IN_YEAR);
}

const calculateMonthlyInterestRate = (rate)=>
{
    let MONTHS_IN_YEAR = 12;
    let PERCENT = 100;
    return  (rate/PERCENT/MONTHS_IN_YEAR);
}


const main = (()=>{

    const loanAmount = document.querySelector("#loanAmount");
    const interestrate = document.querySelector("#interestrate");
    const loanterm = document.querySelector("#loanterm");
    const calculateButton = document.querySelector("#Calculate");

    const loanAmountError =   loanAmount.nextElementSibling;
    const interestrateError = interestrate.nextElementSibling;
    const loantermError =     loanterm.nextElementSibling;

    const closeModal = document.querySelector("#closeModal");
    const modal = document.querySelector(".modal");
    

    calculateButton.addEventListener("click",()=>
    {
      //Validation test to ensure no empty strings and only numbers are entered
        const loanamount_validate = validateNumber(loanAmount.value); 
       validateDisplay(loanamount_validate,loanAmountError);

       const interestrate_validate = validateNumber(interestrate.value);
       validateDisplay(interestrate_validate, interestrateError);
    

       const loanTerm_validate = validateNumber(loanterm.value);
       validateDisplay(loanTerm_validate,loantermError); 

       // Completed num and String validation


    

        if(interestrate_validate === false)
        {
            const rateValueCheck = rateValidation(interestrate_validate,parseInt(interestrate.value) );
            rateDisplayMessage(rateValueCheck,interestrateError);

            if(rateValueCheck === true)
            {
                const loan_term_by_months = calculateLoanTerm (parseInt(loanterm.value));
                let monthly_interest_rate = calculateMonthlyInterestRate(parseInt(interestrate.value));

                //Business Rules, add 1 to monthly interest rate
                monthly_interest_rate += 1;

                // Nagative loan terms
                let negativeLoanTerm = loan_term_by_months * (-1);

                //Raise interest rate to power of loan_termpayment
                let raiseInterestRate = Math.pow(monthly_interest_rate, negativeLoanTerm);

                //Subtract raiseInterestrate from 1

                let revised_interest_rate = (1 - raiseInterestRate);

                let monthly_interest_per_principal = (parseInt(loanAmount.value)*(monthly_interest_rate - 1));

                let monthly_installment = monthly_interest_per_principal / revised_interest_rate;
                
                modal.classList.remove("hide"); 
                
                modal.children[0].children[1].innerHTML = `<ul>  <li>Loan Amount: ${loanAmount.value} </li> <li>Annual Interest Rate:: ${interestrate.value}% </li> </li> <li>Loan term by months: ${loan_term_by_months} </li> <li>Monthly Payment: ${monthly_installment.toFixed(2)} </li>  </ul>`;
                alert(`monthly installment is ${monthly_installment.toFixed(2)}`);

                //alert(`Loan term by months ${loan_term_by_months} and monthly interest rate is ${monthly_interest_rate} raise interest ${raiseInterestRate} `);
                //alert(`revised interest rate ${revised_interest_rate}`);

                //alert(`monthly interest per loan amount ${monthly_interest_per_principal}`);
            }
           
        }



    });

    closeModal.addEventListener("click", ()=>{
        modal.classList.add("hide");
        loanAmount.value = " ";
        loanAmount.focus();

        interestrate.value = " ";

        loanterm.value = " ";


    })

})();