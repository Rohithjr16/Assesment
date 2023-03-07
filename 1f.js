(function(arr1,arr2){

 var merged=arr1.concat(arr2);

 merged.sort(function(a,b){

    return a-b;

 });
 
 var midindex = merged.length/2;

 var median = (merged[midindex-1]+ merged[midindex])/2;
 
 console.log(median);

})([1,3,5,7],[2,4,6,8]);