function find(x){
  if(x===0){
    return 'Zero'
  }else if(x<0){
     return "negative";
  }else{
    return 'positive'
  }
}
let result = find(0)
console.log(result);
