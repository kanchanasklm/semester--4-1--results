let buttonEl=document.getElementById("button");
let finalResultEl=document.getElementById("result");

let ML_El=document.getElementById("ML");
let HumanComputerInteractionEl=document.getElementById("HCI");
let UnixEl=document.getElementById("Unix");
let Project1El=document.getElementById("project1");



let creddits=16; 
let result=0;
// let count=0;
function credits(subGrade, creditts) {

    // count++;
    if (subGrade === "Ex") {
        // result += (10 * creditts);
        return (10 * creditts)
        

    } else if (subGrade === "A") {
        // result += (9 * creditts);
        return (9 * creditts)
    } else if (subGrade === "B") {
        // result += (8 * creditts);
        return (8 * creditts);
        
    } else if (subGrade === "C") {
        // result += (7 * creditts);
        return (7 * creditts)
    } else if (subGrade === "D") {
        // result += (6 * creditts);
        return (6 * creditts)
    }
    else if (subGrade === "E") {
        // result += (6 * creditts);
        return (5 * creditts)
    }
    else if (subGrade === "F") {
        // result += (6 * creditts);
        return 0
    }
    
//    finalResultEl.textContent=result/creddits;
}



buttonEl.onclick=function()
{
    let ML_ElGrade = ML_El.value;
    let HumanComputerInteractionElGrade = HumanComputerInteractionEl.value;
    let UnixElGrade= UnixEl.value;
    let Project1ElGrade= Project1El.value; 
    

    

   
    result+=credits(ML_ElGrade,4);
    result+=credits(HumanComputerInteractionElGrade,3);
    result+=credits(UnixElGrade,3);
    result+=credits(Project1ElGrade,6);
    

    
    // alert(result/creddits);
    // if(result===0){
    //     finalResultEl.textContent="you failed"
    // }
    finalResultEl.textContent=(result/creddits).toFixed(2);
    result=0;
};
