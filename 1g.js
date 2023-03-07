(function(arr){

    var unique = arr.filter(function(item,index,array){

        return array.indexOf(item)==index;



    });
    console.log(unique);

})([1,2,2,3,4,4,5])