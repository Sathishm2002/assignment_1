function add(x,y){
  return x+y
}
// let result = add(2,2)
// console.log(result);



// function sub(x,y){
//   return x-y
// }
// let res = sub(12,2)
// console.log(res);




// function mul(x,y){
//   return x*y
// }
// let multi = mul(4,2)
// console.log(multi);


// function div(x,y){
//   return x/y
// }
// let division = div(10,2)
// console.log(division);


function cal(callback,x,y){
  return callback(x,y)
}
console.log(cal(add,2,3));



