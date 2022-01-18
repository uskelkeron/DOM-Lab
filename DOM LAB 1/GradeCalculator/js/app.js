
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
    
    const CalculateGrade = (validate_name,validate_student_number,validate_grade,grade,screen)=>
    {
       
       
    
            
            switch(validate_name === true && validate_student_number === false && validate_grade===false)
            {
                
                case grade >= 90:
                    screen.innerHTML = `<span class=results> ${grade} Grade A </span>`;
                    break;

                case grade >= 80 && grade <= 89.99:
                    screen.innerHTML = `<span class=results> ${grade} Grade B </span>`;
                    break;
                
                case grade >= 70 && grade <= 79.99:
                    screen.innerHTML = `<span class=results> ${grade} Grade C </span>`;
                    break;
                
                case grade >= 60 && grade <= 69.99:
                    screen.innerHTML = `<span class=results> ${grade} Grade D </span>`;
                    break;

                case grade < 60:
                    screen.innerHTML = `<span class=results> ${grade} Grade F </span>`;
                    break;

            }
        
    }
    
    
    const main = (()=>{
    
        const student_name = document.querySelector("#student_name");
        const student_number = document.querySelector("#student_number");
        const grade = document.querySelector("#grade");
        const num1error = document.querySelector("#errormessage1");
        const num2error = document.querySelector("#errormessage2");
        const num3error = document.querySelector("#errormessage3");
        const submit = document.querySelector("#submit");
        const results = document.querySelector("#results");
    
    
    
    
    
        submit.addEventListener("click",()=>
        {
            
            let validate_name = validateName(student_name.value);
            validateNameDisplay(validate_name,num1error);

            let validate_studentID = validateNumber(student_number.value);
            validatenumberDisplay(validate_studentID,num3error);
    
            let validate_grade = validateNumber(grade.value);
            validatenumberDisplay(validate_grade,num2error);
    
            CalculateGrade(validate_name,validate_studentID,validate_grade,grade.value,results);
    
    
        });
    
    })();