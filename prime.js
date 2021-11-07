  // check no is prime or not  
    var num=7;
    var flag=0;
    //(1,7) 2,3,4,5,6
    for(let i=2;i<num;i++) {
        if(num%i==0){
            flag=1;
            break;
        }

    } 
    console.log(flag==0?"prime":"not prime");                           