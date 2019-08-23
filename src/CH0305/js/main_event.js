var log = document.querySelector(".log");
var lists = document.querySelectorAll("ul> li");

for(var i =0, len = lists.length; i < lists.length; i++) {
    lists[i].addEventListener("click", function(evt){
        console.log(evt.curentTarget);
    });
}