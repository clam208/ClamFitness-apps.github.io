/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function calculateBMI(){
 // get infor from the textboxes needed for calculations
var feet = Number(document.getElementById("feet").value); 
var weight = Number(document.getElementById("weight").value);
var inches = Number(document.getElementById("inches").value);
var totalInches=feetToInches(feet,inches);
// set up a code block to compute bmi
if(feet>0 && inches>=0 && weight>0){
var bmi=(weight/(totalInches * totalInches )) * 703;
document.getElementById("BMI").innerHTML= "BMI: "+bmi.toFixed(2);
if(bmi<=18.5){
 document.getElementById("status").innerHTML= "BMI: Eat more meat";   
}
if(bmi<=24.9 && bmi>=18.5){
 document.getElementById("status").innerHTML= "BMI: You are healthy ";   
}
if(bmi<=29.9 && bmi>=25){
 document.getElementById("status").innerHTML= "BMI: Lose some weight";   
}
if(bmi>=30){
 document.getElementById("status").innerHTML= "BMI: obese";   
}
}
// error handling checking for empty boxes
else{
    document.getElementById("BMI").innerHTML= "BMI: ";
    alert("fill in the blanks");
    
}
}
// could have easily cramed this into the return bmi function but wanted to keep seperate to reuse
function feetToInches(feet,inches) {
    return  feet * 12 + inches;
}

function 
console.log(parseButton());