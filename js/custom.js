$(document).ready(function(){
  //1. Find the first element that is even and greater then 100 in a given array as parameter.
  //    e.g. [1, 4, 8, 2, 313, 98, 120, 43, 88, 200] -> 120

  function findEvenNumber(array) {
    for(i= 0; i < array.length; i++) {
      if(array[i] % 2 == 0 && array[i] > 100) {
        console.log(array[i]);
      }
    }
  }

  findEvenNumber([1, 4, 8, 2, 313, 98, 120, 43, 88, 200]);

  //2. Find the sum of odd elements from a given array as parameter.
    //e.g. [5, 2, 18, 14, 1, 3] -> 5 + 1 + 3 = 9

    function sumOddElem(array) {
      var result = 0;
      for(i= 0; i < array.length; i++) {
        if(array[i] % 2 != 0) {
          result += array[i];
        }
        console.log(result);
      }
    }
     sumOddElem([5, 2, 18, 14, 1, 3]);

  //3. Find the right grades for a student given an array of points he earned in different exams.
  //The translation into marks will be decided by the following chart:
   //between 3 and 4 points -> A
   //between 2 and 3 points -> B
   //between 1 and 2 points -> C
   //between 0 and 1 point -> D
   //0 points -> F
   //e.g. [1.2, 3.9, 2, 0, 0.8] -> [C, A, F, C, D]

   function findGrades(array) {
     var resultArray = [];
     for(i = 0; i < array.length; i++) {
       if(array[i] >= 3 && array[i] <= 4) {
         array[i] = "A";
         resultArray[i] = array[i];

       }

       else if(array[i] >= 2 && array[i] < 3) {
         array[i] = "B";
         resultArray[i] = array[i];

       }
       else if(array[i] >= 1 && array[i] < 2) {
         array[i] = "C";
         resultArray[i] = array[i];

       }
       else if(array[i] > 0 && array[i] < 1) {
         array[i] = "D";
         resultArray[i] = array[i];

       }
       else if(array[i] == 0) {
         array[i] = "F";
         resultArray[i] = array[i];

       }
     }
     console.log(resultArray);
   }

   findGrades([1.2, 3.9, 2, 0, 0.8]);


   //4. Find the sum of 2 arrays position by position. If one array has more elements then the other, the rest of elements will be summed with 0.
    //e.g. [1, 2, 3] and [4, 5, 6, 7] -> [1+4=5, 2+5=7, 3+6=9, 0+7 = 7], so [5, 7, 9, 7]

    function sumPositionByPosition(firstArray, secondArray) {
      var result= [];
      var sumFirst;
      var sumSecond;
      //var indexZero = 0;

      for(i = 0; i < firstArray.length; i++) {
        sumFirst = firstArray[i];

        for(j = 0; j < secondArray.length; j++) {
        sumSecond  = secondArray[i];
        }

        /*if(firstArray.length < secondArray.length) {
          result = firstArray[indexZero] + secondArray[indexZero];
          indexZero++;
        }*/

        result[i] = sumFirst + sumSecond;
      }

      console.log(result);
    }
    sumPositionByPosition([1, 2, 3], [4, 5, 6, 7]);

    //5. Find all the common elements from 2 given arrays as parameters.
    //e.g. [1, 2, 3, 4] and [5, 8, 1, 7, 11, 9, 2]  -> [1, 2]

    function findCommonElements(firstArray, secondArray) {
      var result= [];
      for(i = 0; i < firstArray.length; i++) {
        for(j = 0; j <secondArray.length; j++){
          if(firstArray[i] == secondArray[j]) {
            result[i] = firstArray[i];
          }
        }
      }

      console.log(result);
    }

    findCommonElements([1, 2, 3, 4], [5, 8, 1, 7, 11, 9, 2]);


    //1. Given an array of Strings, find the longest element.
//e.g. ['aa', 'bbbb', 'cc', 'ddddddd', 'e'] -> 'ddddddd'

  function findLongestElement(array) {
    var elemLength = 0;
    var result;

  for(var i=0; i < array.length; i++){
      if(array[i].length > elemLength){
          elemLength = array[i].length;
          result = array[i];
      }
  }
  console.log(result);
  }

  findLongestElement(['aa', 'bbbb', 'cc', 'ddddddd', 'e']);


  //2. Given an array of numbers, calculate the inverse of it.
  //e.g. [1, 2, 3, 4] -> [4, 3, 2, 1]

  function calculateInverse(array) {
    var result = [];
    var j = 0;
    for (var i=array.length-1; i>=0; i--) {
      result[j] = array[i];
      j++;
    }
    console.log(result);


  }
  calculateInverse([1, 2, 3, 4]);

  //3. Given an array of numbers, return the unique elements in it.
  //e.g. [1, 8, 9, 2, 1, 3, 8] -> [1, 8, 9, 2, 3]

  function returnUniqueElements(array) {
    var result = [];
    var resultIndex = 0;
    var elementExists;
    for(var i = 0; i < array.length; i++) {
      elementExists = false;
      for( var j = 0; j < result.length; j++) {
        if(array[i] == result[j]) {
          elementExists = true;
          break;
        }
      }
      if(elementExists == false) {
        result[resultIndex] = array[i];
        resultIndex++;
      }
    }
    console.log(result);
  }

  returnUniqueElements([1, 8, 9, 2, 1, 3, 8]);

  function replaceElements(array, a, b) {
    var result = [];
    for(var i = 0; i < array.length; i++) {
      if(array[i] == a) {
        result[i] = b;
      }
      else {
        result[i] = array[i];
      }
    }
    console.log(result);
  }

  replaceElements( [1, 2, 7, 2, 6, 9], 2, 10);


  //1. Given an array of mixed elements, return an array containing all strings.

 //e.g. [1, 2, "aaa", true, 7, 12, "bb", 20] -> ["aaa", "bb"]

function returnArrayStrings(array) {
  var result = [];
  var resultIndex = 0;
  for(var i = 0; i < array.length; i++) {
    if(typeof array[i] === 'string') {
      result[resultIndex] = array[i];
      resultIndex++;
    }
  }

  console.log(result);
}

returnArrayStrings([1, 2, "aaa", true, 7, 12, "bb", 20]);


//2. Given an array of mixed elements, return an array containing all numbers that are odd.

//e.g. [1, 2, "aaa", true, 7, 12, "bb", 20] -> [1, 7]

function returnOddNumbers(array) {
  var result = [];
  var resultIndex = 0;
  for(var i = 0; i < array.length; i++) {
    if(typeof array[i] === 'number') {
      result[resultIndex] = array[i];
      resultIndex++;
    }
  }
  console.log(result);
}

returnOddNumbers([1, 2, "aaa", true, 7, 12, "bb", 20]);

});
