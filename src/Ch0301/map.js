//example
var newArr = ["apple", "tomato"].map(function(value, index) {
  return index + "번째 과일은 " + value + "입니다";
});
console.log(newArr);

//example1 map활용하여 객체 재구성
var kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];

var reformattedArray = kvArray.map(function(obj) {
  var rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

console.log(kvArray);
console.log(reformattedArray);

//example2 인자받는 함수 통해 숫자배열 재구성
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
console.log(numbers);
console.log(doubles);
