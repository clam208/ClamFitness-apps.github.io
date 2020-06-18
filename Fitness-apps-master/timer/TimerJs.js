
var Timer = function(){
    var seconds = 0;
    var min = 0;
    var time;
    var running = false;
    function start(){
       
        seconds++;
        if(seconds>=60){
            seconds=0;
            min++;
        }
        if(seconds<=9){
        document.getElementById("display").innerHTML = min + ":0" + seconds+"";
        }else if(seconds<=9 && min<=9){
        document.getElementById("display").innerHTML = "0;" + min + ":0" + seconds+"";
        }
        else
        document.getElementById("display").innerHTML = min + ":" + seconds+"";
        
    }
    return {
        
        getTime:function(){
            if (running==false){
             time=setInterval(start,1000);
             running = true;
            }
        },
        stopTime:function(){
            clearInterval(time);
            running =false;
        },
        clearTime:function(){
         min=0;
         seconds=0;
         document.getElementById("display").innerHTML = "0:" +  "00";
         running = false;
        }
    };
}();


