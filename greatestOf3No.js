function largeNumber(x,y,z){
  if(x>y && x>z){
    return x
  }else if(y>x && y>z){
    return y
  }else{
    return z
  }
}

let largest  = largeNumber(10,21,3)
console.log(largest);
