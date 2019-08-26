var ul = document.querySelector("ul");
var log = document.querySelector(".log");

ul.addEventListener("click",function(evt){
    //target이 img면 src를 추출하여 출력
    var target = evt.target;
    if(evt.target.tagName ==="IMG"){
        log.innerHTML = "IMG URL= "+target.src;
    } else if (target.tagName ==="LI"){
        log.innerHTML = "IMG URL ="+target.firstElementChild.src;
    }
})

/*for문 실행
var lists = document.querySelectorAll("ul > li");

for(var i =0, len = lists.length; i < lists.length; i++) {
    lists[i].addEventListener("click", function(evt){
        log.innerHTML = "IMG URL IS" +evt.currentTarget.firstElementChild.src; //currentTarget = li
    });
}*/

/*img tag event bubbling
var img = document.querySelector("img");

img.addEventListener("click",function(){
    console.log("Img is clicked");
})  */