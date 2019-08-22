var obj = { name: "codesquad", age: 22, data: [1, 2, 3, 4, 5] };

console.log(obj.name);
console.log(obj.data);

Object.keys(obj).forEach(function(key) {
  console.log("After the Object.keys() -> " + obj[key]);
});

//Add Object : dot notation더 많이 사용
const myFriend = { key: "value", key2: "value" };

myFriend["name"] = "crong";
console.log(myFriend);
myFriend.age = 34;
console.log(myFriend.age);

//Delete Object
delete myFriend.key;
delete myFriend["key2"];
console.log(myFriend);
