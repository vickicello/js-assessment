exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    let index = arr.indexOf(item)
    return index;
  },

  sum: function(arr) {
    var sum = arr.reduce(add, 0)
      function add(a, b){
        return a + b;
      }
    return sum;
  },

  remove: function(arr, item) {
    let result = arr.filter(word => word !== item);
    return result;
  },

  removeWithoutCopy: function(arr, item) {
    let i;
    let len;

    for (i = 0, len = arr.length; i < len; i++){
      if (arr[i] === item){
      arr.splice(i, 1);
      i--;
      len--;
      }
    }
    return arr;
    
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    let arr = arr1.concat(arr2);
    return arr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;

    for (let i = 0, len = arr.length; i < len; i++){
      if (arr[i] === item){
      count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    let item = {};
    let duplicates = [];

    for (let i = 0, len = arr.length; i < len; i++){
      item[arr[i]] = item[arr[i]] ? item[arr[i]] + 1 : 1;
    }

    for (let element in item){
      if (item.hasOwnProperty(element) && item[element] > 1){
        duplicates.push(element);
      }
    }
    return duplicates.map(Number);
  },

  square: function(arr) {
    let integers = [];

    for (i = 0, len = arr.length; i < len; i++){
      integers.push(arr[i] * arr[i]);

    }
    return integers;
  },

  findAllOccurrences: function(arr, target) {
    let targetItems = [];

    for (i = 0, len = arr.length; i < len; i++){
      if (arr[i] === target){
        targetItems.push(i);
      }
    }
     return targetItems; 

  }
  
};
