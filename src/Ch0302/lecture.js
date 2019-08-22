var myFriend = {
  key: "value",
  addition: [{ name: "codesquad" }, { age: 2 }]
};

console.log(myFriend.key);
//console.log(myFriend[key]) 에러발생-key라는 변수를 찾게됨. 여기서는 오브젝트 안의 키값임.
console.log(myFriend["key"]);
console.log(myFriend["addition"]);

//for-in을 이용한 객체 찾기 -> object가 있는 것을 탐색하기 위한 목적
for (key in myFriend) {
  console.log(myFriend[key]);
}

/**
 * object.keys()
 */
console.log(Object.keys(myFriend)); //키값 출력시 키값이 배열로 나옴

Object.keys(myFriend).forEach(function(v) {
  console.log(myFriend[v]);
});
