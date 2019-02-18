var time=0;
timer = setInterval(function(){
    time+=3;
    console.log(time+'seconds have passed');
    if(time>6){
        clearInterval(timer);
    }
},3000);