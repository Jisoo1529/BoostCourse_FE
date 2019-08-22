//example1 요소의 항목찾기
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);

//example2 요소가 배열에 있는지 확인하고 배열 업데이트
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log("새로운 veggies 컬렉션 : " + veggies);
  } else if (veggies.indexOf(veggie) > -1) {
    console.log(veggie + " 은 이미 veggies 컬렉션에 존재합니다.");
  }
}

var veggies = ["potato", "tomato", "chillies", "green-pepper", "spniach"];

updateVegetablesCollection(veggies, "spinach");
//updateVegetablesCollection(veggies, 'spinach'); 두번째 로그도 동일하게 찍힘. spinach넣어도 동일.
