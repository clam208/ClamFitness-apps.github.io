var macros = function(){
    //private vars
    var feet =0;
    var inches =0;
    var age =0;
    var weight=0;
   
     // functions
     // passes parameters into function vars
     function init(feetVal,inchesVal,ageVal,weightVal){
        feet= feetVal;
        inches= inchesVal;
        age=ageVal;
        weight=weightVal;
    }
    heightToCm = ()  => { return Math.round(feet*30.48+inches*2.54)}
    weightToKg=() =>{return Math.round(weight/ 2.205)}
     TDE=()=>{
         var a=age * 5;
         var w=weightToKg()*10; 
         var h=Math.round(heightToCm()*6.25)
         var TDEE=w+h-a+5;
            return Math.round(TDEE*1.2)
        }
   
    return{
    setMacros:function(){
    var feet = Number(document.getElementById("feet").value);
    var inches = Number(document.getElementById("inches").value);
    var age = Number(document.getElementById("age").value);
    var weight = Number(document.getElementById("weight").value);
    return init(feet,inches,age,weight);
    },
    getMacros: function(){
        if (document.getElementById("feet").value=="" || document.getElementById("inches").value==""|| document.getElementById("weight").value=="" ){
            alert("please fill in the text boxes");
            document.getElementById("test").innerHTML = "error";
        }
        
        else{
        document.getElementById("test").innerHTML = TDE();
        }
    }
    };
}();




