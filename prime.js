// function 1 to check if the number is prime or not
function isPrime(num){

    if(num === 2){
        return 2 + ' is a prime number';
    }else if(num < 2){
        return `${num} is not a Prime number`;
    }else{
        for(let counter = 2; counter < num;counter++){
            if(num % counter === 0){
                return `${num} is not a Prime number`;
            }
        }
        return `${num} is a Prime number`; 
    }
   
}
console.log(isPrime(2));

// function 2 to print all prime numbers between min & max
function Prime(min,max){
    let primeNums = '';
    
    
    for(let num = min; num <= max; num++){
        let isPrime = true;

        if(num < 2){
            continue;
        }else if(num === 2){
            primeNums +=`${num} : is a prime number \n`;
        }
        else{
            for(let counter = 2; counter < num ; counter++){
                if(num % counter === 0){
                    isPrime = false;
                    break;
                    // primeNums +=`${num} : is a prime number \n`;
                }else{
                    isPrime = true;
                }
            }
            if(isPrime){ primeNums +=`${num} : is a prime number \n`;}
        }

    }
    return primeNums;
}

console.log(Prime(1,3));
