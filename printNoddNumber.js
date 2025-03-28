let number = [1,2,3,4,5,6,7,8,9,10]
const oddNumber=[]
function odd(x){
  if(x%2!== 0){
    return oddNumber.push(x);   
  }
}


function sumAll(accumulator,element){
  return accumulator+element
}



let odds = number.map(odd)


let total = oddNumber.reduce(sumAll)


console.log(oddNumber);
console.log(total);


