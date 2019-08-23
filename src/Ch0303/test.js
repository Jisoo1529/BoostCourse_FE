var target1= document.querySelector(".outside1");
var target2= document.querySelector(".outside2");
var btn = document.querySelector("button");

btn.addEventListener("click",function(){
    var pre =  parseInt(target1.style.left); 
    target1.style.left = pre + 200+"px";

    var pre2 =  parseInt(target2.style.left); 
    target2.style.left = pre + 200+"px";
    //base.style.left = "500px";
});
