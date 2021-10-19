
/*let u=[1,2,3,4,5];
for(i = 0;i<u.length;i++ ){
    if(u[i]%2 != 0){
        u[i]=u[i]*2;
    }
    
}
console.log(u)
*/
/*
let u=[1,2,3,4,5];
for(i = 0;i<u.length;i++ ){
    if(u[i]%2 != 1){
        u[i]=u[i]*2;
    }
    
}
console.log(u)
*/
/*
Color = ["blue","red","white","yellow"];

console.log(Color[0]);
*/
/*
y=[2,3,4];
y.unshift(0)
y.push(5);
y.push(6);
y.push(7)
console.log(y)
*/

x=[1,3,7,13,21,5];
key=8;
for(i=1;i<x.length;i++){

    for(j=i;j<x.length;j++){
        if(x[i]+x[j] == key){
            console.log("("+x[i]+" "+x[j]+")");
        }        
    }
}
