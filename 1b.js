(function(arr) {

    arr.forEach(function(str, index) {

      arr[index] = str.toLowerCase().replace(/\b\w/g, function(ltr) {

        return ltr.toUpperCase();

      });

    });

    console.log(arr);

  })(["hello world", "goodbye", "nice to meet you"]);