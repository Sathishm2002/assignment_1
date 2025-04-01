function greater(x,y){
  if(x>y){
    return x
  }else{
    return y
  }
}
let result = greater(9,11)
console.log(result);


function less(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}
let lessThan = less(9, 11);
console.log(lessThan);


function lessThanEqual(n){
  for(let i=0;i<=n;i++){
    console.log(i); 
  }
} 
lessThanEqual(7)


function greaterThanEqual(n) {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
}
greaterThanEqual(7);

