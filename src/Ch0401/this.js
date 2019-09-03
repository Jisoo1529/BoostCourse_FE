/*bind로 this 제어하기
**function뒤에 .bind를 붙여서 사용함.
**function 뒤에 .를 할 수 있다면 함수도 .가 뒤에 붙으면 객체로 변함. 
**bind는 함수를 반환하며 따라서 return이 없더라도 반환값이 존재.
**
**bind를 사용하지 않는다면 setTimeout(() =>{})로 arrow를 사용하여 표현가능함.
** 그 함수가 속해있는 것의 컨텍스트를 유지하면서 동작됨. 
*/
var healthObj = {
    name:"달리기",
    lasttime: "PM 10 : 20",
    showHealth : function(){
        setTimeout(function(){
            /*name,lasttime을 출력하는데, this가 healthObj를 가리키는 함수로 자리함 */
            console.log(this.name+"님, 오늘은 " + this.lasttime +"에 운동을 하셨네요");
        }.bind(this),500); 
    }
}
healthObj.showHealth();

//bind를 통해서 값을 반환하는 함수가 되었음. 
//실행하는 경우 function이 로그에 찍힘. 
var newfunc = function(){console.log("function")}.bind(this);