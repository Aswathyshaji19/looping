var lower=10,upper=50;
var flag=0;

for(let i=lower; i<=upper; i++){
    for(let j=2;j<i;j++){
        flag=0;
        if(i%j==0){
            flag=1;
            break;
        }
        
    }
        if(flag==0){
            console.log(i);

    }
}