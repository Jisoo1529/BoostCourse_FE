var target = document.querySelector(".box");
/*
target.addEventListener("mouseover",function(){
    target.style.transform = "translate("+parseInt(window.innerWidth)+"px,"+parseInt(window.innerHeight)+"px)";
})*/

target.addEventListener("mouseover",function(){
    var left = parseInt(target.style.left);
    var top = parseInt(target.style.top);
    target.style.left = 80+"vw";
    target.style.top = 80 +"vh"
})