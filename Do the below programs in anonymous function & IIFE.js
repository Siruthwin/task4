// a)Print odd numbers in an array:

// anonymous  :  
// function arry(){
//                   for(var i = 0 ; i< arry.length ; i++){
//                         if(arry[i]%2!=0){
//                            console.log(arry[i])
//                         } 
//                    }
//                 }

//  IIFE :       

// (function(arry){
//              for(var i = 0 ; i< arry.length ; i++){
//                         if(arry[i]%2!=0){
//                            console.log(arry[i])
//                         } 
//                    }
//              })([1,2,3,4])

// b)Convert all the strings to title caps in a string array

//  anonymous :   

//  function string () {
//     string = string.toLowerCase().split(' ');
//                     for (var i = 0; i < string.length; i++) {
//                         string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1); 
//                     } 
//                     return string.join(' ');
//                   }

// IIFE : 

// (function (str) {
//                     str = str.toLowerCase().split(' ');
//                     for (var i = 0; i < str.length; i++) {
//                       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//                     } 
//                     return str.join(' ');
//                   })("KING IS MY NAME");


// c)Sum of all numbers in an array 

// anonymous  :  

// function arry(){
//                   var sum = 0;
//                   for(var i = 0 ; i< arry.length ; i++){
//                      sum = sum + arry[i];
//                    }
//                    return sum;
//                 }

// IIFE :       

// (function(arry){
//              var sum = 0;
//                   for(var i = 0 ; i< arry.length ; i++){
//                      sum = sum + arry[i];
//                    }
//                    return sum;
//              })([1,2,3,4])


// d)Return all the prime numbers in an array


// Anonymous :

// function(numArry) {
//     numArray = numArry.filter((number) => {
//         for (var i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i === 0) return false;
//         }
//         return true;
//     });
//     console.log(numArry);
// }

// IIFE:

    // (
    //     function (numArry) {
    //         numArry = numArry.filter((number) => {
    //             for (var i = 2; i <= Math.sqrt(number); i++) {
    //                 if (number % i === 0) return false;
    //             }
    //             return true;
    //         });
    //         console.log(numArry);
    //     })([1, 2, 3, 4])


    // e) Rotate an array by k times:

    // Anonymous function : 
    
    // function(array , k){
    //     k = k % a.length;
    //       if(k < 0){
    //         k += a.length;
    //       }

    //       reverse(a, 0, a.length - k - 1);
    //       reverse(a, a.length - k, a.length - 1);
    //       reverse(a, 0, a.length - 1);
    //     }

    // IIFE :  

    //  (function(array , k){
    //     k = k % a.length;
    //       if(k < 0){
    //         k += a.length;
    //       }

    //       reverse(a, 0, a.length - k - 1);
    //       reverse(a, a.length - k, a.length - 1);
    //       reverse(a, 0, a.length - 1);
    //     })([1,2,3,4] , 2)

