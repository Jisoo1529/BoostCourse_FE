/*명시적 형변환
**결과값이 [13200.000000000002, 6050.000000000001, 1320]
*/
var data = [{title : "hello",content : "간지철철", price : 12000},
            {title : "crong",content : "괜춘한 상품", price : 5500},
            {title : "codesquad",content : "쩌는상품", price : 1200}
        ];
 var newData = data.map(function(v){
              return v.price*1.1;
           });

/*새로운 배열을 생성하고 그 안에 값을 변경해서 저장
**newData =  [110.00000000000001, 220.00000000000003, 330]
**priceData = [100,200,300]으로 나타남. 원본 배열은 저장되어 있는 상태
*/
var data = [{title : "hello",content : "간지철철", price : 12000},
            {title : "crong",content : "괜춘한 상품", price : 5500},
            {title : "codesquad",content : "쩌는상품", price : 1200}];

var priceData = [100,200,300];

var newData = priceData.map(function(v){
    return v*1.1;
});

//newData만 map을 사용하여 전체 구조를 유지한 채 새로운 배열 생성
var data = [{title : "hello",content : "간지철철", price : 12000},
            {title : "crong",content : "괜춘한 상품", price : 5500},
            {title : "codesquad",content : "쩌는상품", price : 1200}];

var priceData = [100,200,300];

var newData = data.map(function(v){
    var obj = {name : v.title, content: v.content, price: v*10};
    return obj;
});

//map을 이용하여 새로운 배열인 newData에 새로운 값 넣을 수 있음. price의 경우 v.price의 10배를 한 값임.
var data = [{title : "hello",content : "간지철철", price : 12000},
            {title : "crong",content : "괜춘한 상품", price : 5500},
            {title : "codesquad",content : "쩌는상품", price : 1200}];

var newData = data.map(function(v){
    var obj = {name : v.title, content: v.content, price: v.price*10};
    return obj;
});
console.table(data);
console.table(newData);

//return에 조건을 걸어주는 경우 해당하는 값이 나옴. 
var data = [{title : "hello",content : "간지철철", price : 12000},
            {title : "crong",content : "괜춘한 상품", price : 5500},
            {title : "codesquad",content : "쩌는상품", price : 1200}];
var newData = data.filter(function(v){
    return v.price>5000;
});

/*map에 체이닝 걸어서 한번 더 map함수 실행
**결과값 : 0: {title: "hello", content: "간지철철", price: "12000"}
**        1: {title: "crong", content: "괜춘한 상품", price: "5500"}
*/
var data = [{title : "hello",content : "간지철철", price : 12000},
            {title : "crong",content : "괜춘한 상품", price : 5500},
            {title : "codesquad",content : "쩌는상품", price : 1200}];
var newData = data.filter(function(v){
    return v.price>5000;
}).map(function(v){
    var obj ={title: v.title, content: v.content, price:v.price+""};
	return obj;
});