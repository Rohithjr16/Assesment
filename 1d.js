(function (array) {

    var primes = [];

    array.forEach(function(num) {

        var isPrime = true

        if (num < 2) {

        }
        else  { 
            for (var i=2 ; i< num ; i++){

            if (num % i==0){

                isPrime = false;

                break;
            }
            }
        }
        if (isPrime){
            
            primes.push(num);

        }

    });
         
console.log(primes);
})([1,2,3,4,5,6,7,8,9]);
