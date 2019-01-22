exports = typeof window === 'undefined' ? global : window;
// The function should console.log each number from the start
// number to the end number, one number per 1/10th of a second. The function should
// return an object with a cancel method, which should cancel the counting.

exports.countAnswers = {
  count: function (start, end) {
    let timeout;
    function countIt(){
      console.log(start++);
      if (start <= end){
        timeout = setTimeout(countIt, 100);
      }
    }
    countIt();

    return {
      cancel: function() {
        timeout && clearTimeout(timeout);
      }
    }
  }
};
