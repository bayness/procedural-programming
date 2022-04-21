function dot_product(v1,v2){

let sum =0;
let array = v1.concat(v2);

for (let i = 0; i < array.length/2; i++){
  sum+= array[i]*array[array.length/2 + i];
}
  if (sum === 0){

    console.log("v1 and v2 are orthogonal vectors");
  }else {
    console.log("v1 and v2 are not orthogonal vectors");

  }





}

dot_product([1,4,3],[-2,2,-2]);