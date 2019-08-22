//example1 작은값 걸러내기
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);

//example2 배열내용검색
var fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItems(query) {
  return fruits.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

console.log(filterItems("ap"));
console.log(filterItems("an"));
