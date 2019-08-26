function init(){
    var target1= document.querySelector(".outside1");
    var btn = document.querySelector("button");
    
    btn.addEventListener("click",function(){
        var pre =  parseInt(target1.style.left); 
        target1.style.left = pre + 200+"px";
    });
}

/*
window.addEventListener("load",function(){
    console.log("window Loaded");
});
*/

document.addEventListener("DOMContentLoaded",function(){
    console.log("DOM Loaded");
});

