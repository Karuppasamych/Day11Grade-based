let tamil = Number(prompt('Enter the tamil mark'));
let english = Number(prompt('Enter the English mark'));
let maths = Number(prompt('Enter the maths mark'));
let science = Number(prompt('Enter the science mark'));
let social =Number(prompt('Enter the social mark'));
let total = tamil + english + maths + science + social
console.log("Total value = ",total);
let avg = Math.floor(total / 5.0);
console.log('Average value = ',avg);
function gradeBased(){
    if(avg > 70){
        console.log("GRADE A");
    }
    else if(avg <= 70 &&  avg > 55){
        console.log("GRADE B");
    }

    else if(avg <= 55 &&  avg > 35){
        console.log("GRADE C");
    }
}

var GradeSys = gradeBased();