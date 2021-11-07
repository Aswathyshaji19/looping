var low=8,upper=30;
var num=2;
var i=1;
while(i<upper){
    let result=i**num;
    if(result>=low && result<=upper){
        console.log(i);
    }
    i++;
}
