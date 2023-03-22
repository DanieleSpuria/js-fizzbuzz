const body = document.querySelector("body");

// Container
const container = document.createElement("div");
container.classList.add("container");
body.append(container);
console.log(body, container);

for (let i = 1; i <= 100; i++) {
  
  // Card e Box
  const card = document.createElement("div");
  const box = document.createElement("div");

  container.append(card);
  card.append(box);

  card.classList.add("card");
  box.classList.add("box");

  // Condizioni per i vari multipli
  if((!(i % 3)) && (!(i % 5))){
    box.append('FizzBuzz');
    box.classList.add("fizzbuzz");
    console.log('FizzBuzz');
  }
  else if(!(i % 5)){
    box.append('Buzz');
    box.classList.add("buzz");
    console.log('Buzz');
  }
  else if(!(i % 3)){
    box.append('Fizz');
    box.classList.add("fizz");
    console.log('Fizz');
  }
  else{
    box.append(i);
    console.log(i);
  }
}







