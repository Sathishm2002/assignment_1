let number=[1,2,3,4,5,6,7,8,9,10]

function naturalNumber(x){
  return x
}


let display = number.map(naturalNumber)


function sum(accumulator,element){
  return accumulator+element
}

let final = display.reduce(sum)



console.log(display);
console.log(final);

