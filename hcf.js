var num1=30,num2=10;
var res;
for(let i=1;i<=num1 && i<=num2;i++){
    if(num1%i==0 && num2% i==0){
        res=i;
    }
}
console.log(res);