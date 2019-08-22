["apple", "tomato"].forEach(function(value) {
  console.log(value);
});

//초기화 되지 않은 값은 안나옴
const arraySparse = [1, 3, , 7];
let numCallbackRuns = 0;

arraySparse.forEach(function(element) {
  console.log(element);
  numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns);

function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
[2, 5, , 9].forEach(logArrayElements);

//for문 foreach변경
const items = ["item1", "item2", "item3"];
const copy = [];

for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}

items.forEach(function(item) {
  copy.push(item);
});

//반복 중 배열 변경시 다른 요소 건너뜀-> three건너뛰는 것 확인가능함.
var words = ["one", "two", "three", "four"];
words.forEach(function(word) {
  console.log(word);
  if (word === "two") {
    words.shift();
  }
});
