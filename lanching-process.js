let counter = 60;
while(counter>0){
    if(
    counter === 50
    ||
    counter === 31
    ||
    counter === 16
    ||
    counter === 10
    ||
    counter === 6
    ||
    counter === 0
    ){
       if(counter === 50){
           console.log('Orbiter transfers from ground to internal power');
       } else if(counter === 31){
           console.log('Ground launch sequencer is go for auto sequence start');
       } else if(counter === 16){
           console.log('Activate launch pad sound suppression system');
       } else if(counter === 10){
           console.log('Activate main engine hydrogen burnoff system');
       } else if(counter === 6){
           console.log('Main engine start');
       } else if(counter === 0){
           console.log('Solid rocket booster ignition and liftoff!');
       }
    }else{
        console.log(counter);
    }
    counter--;
} 