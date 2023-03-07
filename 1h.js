(function (array,k){

for ( var i = 0 ; i < k ; i++){

    array.unshift(array.pop());

}

console.log(array);

})([1,2,3,4,5],2)