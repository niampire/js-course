

  var newData = [22,2, 12, 6, 32];

  var oldData = [12, 5, 7, 17, 22, 32];


  //testArray = newData.slice();
  //console.dir(testArray);

  //newData.splice(1,1);

  //  console.dir(testArray);
  //  console.dir(newData);



    function filterNew(array1, array2) {

        // for(key in array1)
        //   var  elemIndex = array2.indexOf(array1[key]);
        //
        //
        //     if(elemIndex != '-1'){
        //     array1.splice(key, 1);
            // }

    //   var key = 0;
    //   while (key <= array1.length){
    //     if (array2.indexOf(array1[key]) != -1) {
    //       array1.splice(key, 1);
    //       continue;
    //    }
    //    key++;
    //  }
    //  console.log(array1);

     for (i = 0; i < array1.length; i++) {
       for (var k = 0; k < array2.length; k++) {
         if(array1[1] === array2[k]){
           array1.splice(i, 1);
           i--;
         }
       }
     }
  console.log(array1);
        // for(key in array1) {
        //   if(array1[key] == "0") {
        //     array1.splice(key, 1);
        //   }
        // }



