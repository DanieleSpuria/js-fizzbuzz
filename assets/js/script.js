const container = document.querySelector('.container');
console.log(container);

for (let i = 1; i <= 100; i++) {
  
  const box = document.createElement("div");
  container.append(box);
  box.classList.add("box");

  if((!(i % 3)) && (!(i % 5))){
    box.append('FizzBuzz');
    console.log('FizzBuzz');
  }
  else if(!(i % 5)){
    box.append('Buzz');
    console.log('Buzz');
  }
  else if(!(i % 3)){
    box.append('Fizz');
    console.log('Fizz');
  }
  else{
    box.append(i);
    console.log(i);
  }
}







