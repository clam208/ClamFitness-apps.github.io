/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var WeightFunctions= function(){
    var feet = 0
    var weight = 0
    var inches =0

function init (feetVal,weightVal,inchesVal){
feet = feetVal
weight = weightVal
inches = inchesVal
}
function calculateBMI(){
        var totalInches = feetToInches(feet,inches)
        var bmi=(weight/(totalInches * totalInches )) * 703;
        return bmi.toFixed(1);
}
function feetToInches(feet,inches) {
    return  feet * 12 + inches;
}
return{
    setWeight:function(){
         // get info from the textboxes needed for calculations
var feet = Number(document.getElementById("feet").value); 
var weight = Number(document.getElementById("weight").value);
var inches = Number(document.getElementById("inches").value);
return init(feet,weight,inches)
    },
    getWeight:function(){
        
    if(document.getElementById("weight").value=="" || document.getElementById("feet").value=="" || document.getElementById("inches").value==""){
        alert("fill in blanks")
    }
    else{
    var bmi =calculateBMI();
        document.getElementById("BMI").innerHTML="BMI: "+bmi
        if(bmi<=18.5){
            document.getElementById("status").innerHTML= "Status: Eat more";   
           }
           if(bmi<=24.9 && bmi>=18.5){
            document.getElementById("status").innerHTML= "Status: You are healthy ";   
           }
           if(bmi<=29.9 && bmi>=25){
            document.getElementById("status").innerHTML= "Status: Lose some weight";   
           }
           if(bmi>=30){
            document.getElementById("status").innerHTML= "Status: obese";   
           }
        }
    }
};
}();
