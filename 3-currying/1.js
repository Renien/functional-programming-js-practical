var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var time = 2;

var increment = add(time);
var addTen = add(time);

increment(2);
// 3

addTen(2);
// 12
