(function (array){

    var palindromes =[];

    array.forEach(function(str){

        var reversedstr = str.split('').reverse().join('');

        if(str == reversedstr) {
            
            palindromes.push(str);

        }
        {
    } 
        
    });
    console.log(palindromes);

})(['racecar','hello','level','world']);