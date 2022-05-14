const num= prompt('Énter the number');
if(num!=0){
    if(num%3==0&&num%5==0){
        console.log('FIZZBUZZ');
    }
    else if(num%3==0){
        console.log('BUZZ');
    }
    else if(num%5==0){
        console.log('FIZZ');
    }
    else{
        console.log(`${num} can't divisible by 3 and 5`);
    }
}