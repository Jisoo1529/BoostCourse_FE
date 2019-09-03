//자바스크립트는 하나의 객체를 반환함. 
/*객체를 불러오고 있음. 
**lastTime을 변경하더라도 값을 가져올 수 있음. 
*/
var healthObj = {
    name : "달리기",
    lastTime : "PM10:12",
    showHealth : function() {
      console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
    }
  }
  
  healthObj.showHealth();

//todos에 새로운 값을 push하여 이후 todos 리스트에 값을 넣어줌. 
var todo={
    todos : [],
    addTodo : function(newTodo){
        this.todos.push(newTodo);
    },
    showTodo: function(){
        return this.todos;
    }   
}

/* Call method
**이 컨텍스트의 객체가 가리키는 현재 컨텍스트가 참조하고 있는 객체로 바뀌는 것. 
**여기서는 showTodo가 있지만 사실상 todos가 불리는 것. this가 가리키는 것이 바뀔 수 있음. 
*/
var others = {
    todos : "난 절대로 아무것도 하지 않는다"
}

var todo = {
    todos : ["자바스크립트 공부하기"],
    addTodo:function(newTodo){
        this.todos.push(newTodo);
    },
    showTodo : function(){
        return this.todos;
    }
}

todo.showTodo(); // "자바스크립트 공부하기"
todo.showTodo.call(others) // " 난 절대로 아무것도 하지 않는다."