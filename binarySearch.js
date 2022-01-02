function binary_search(Array, target) {
var start = 0,
      mid = 0,
      end = 7;
  
    while (start<= end) {

      //mid Array
      mid = parseInt((start+end) / 2);
  
      if (target == Array[mid]) {
        return mid;
      } else if (target < Array[mid]) 
      {
                     //if targetElement is less than the  array of mid then the search is left side of the array.

        end = mid - 1;
      }
       else 
       {
                   //if targetElement  is greter than  the array of mid then the search in right side of the array is:-
        start = mid + 1;
      }
    }
    return -999;
  }
  function search() {
    var Array = [1, 3, 5, 7, 9, 11, 13,15];
    var target = 11;
    var index = binary_search(Array, target);
    if (index >= 0) 
    {
      console.log(index);
    } else {
      console.log("-1");
    }
  }
  search();