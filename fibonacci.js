function fib(n){
  fq=[0,1]
  if(n<=1){
    console.log(fq[0]);
    
  }else if(n == 2){
    console.log(...fq);
    
  }else
  if(n>2){
    for(let i=1;i<=(n-2);i++){
      fq.push(fq[fq.length-1]+fq[fq.length-2])
    }
     console.log(fq);
     
  }
}
 fib(0)
 fib(1)
 fib(2)
 fib(3)
 fib(4)
 fib(5)