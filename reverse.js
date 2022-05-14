let reverse = 0;
let n =prompt("enter number");
let rem;

while(n!= 0){
	rem = n % 10;
  reverse = reverse * 10 + rem;
  n= Math.floor(n/10);
}

console.log(`${reverse} is reversed number`);