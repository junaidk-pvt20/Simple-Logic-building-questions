const arr= [44,35,11,12,39];
console.log(arr.length)
let sort =[];
for (let i=0; i<arr.length-1; i++){
    if(arr[i] < arr[i+1]){
        sort[i] = arr[i]
    } 
}
console.log(sort);