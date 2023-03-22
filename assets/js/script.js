const container = document.querySelector('.container');
console.log(container);

for (let i = 1; i <= 100; i++) {
  
  if(!(i % 3)){
    console.log('Fizz');
  }
  if(!(i % 5)){
    console.log('Buzz');
  }
  if((i % 3 === 0) && (i % 5 === 0)){
    console.log('FizzBuzz');
  }
  
  console.log(i);
  
}





