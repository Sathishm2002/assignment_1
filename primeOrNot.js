function prime(x){
  if(x<2){
    return ("not prime")
  }
  for(let i = 2;i<x;i++){
    if(x%i === 0){
      return "not prime"
    }
  }
  return 'prime'
}
let result = prime(81)
console.log(result);

