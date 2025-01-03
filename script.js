const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const  specialChars = ["%","*","/","-","+","="];
let output = "";

const calculate = (btnValue)=>{
    if(btnValue === "=" && btnValue !== ""){
        //if output has '%',repalce with '/100' before evaluating.
        output = eval(output.replace("%","/100"));
    }else if (btnValue === "AC"){
        output ="";
    } else if (btnValue ==="DEL"){
        //if DEL button is clicked, remove the last character from the output.
        output = output.toString().slice(0,-1);
    }
    else{
        //if output is empty and button is specialChar then return
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    console.log("hello this is script file from js and w e")
    display.value = output;
    
};

//add event listener to buttons  ,call calculator() on click.

buttons.forEach((button)=>{
    //button click listner calls calculator with dataset value as argument.
    button.addEventListner("click",(e)=> calculate(e.target.dataset.value));
});
