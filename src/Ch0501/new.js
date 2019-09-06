function Health(name, lastTime){
	this.name= name;
    this.lastTime = lastTime;
    this.showHealth = function(){
        return this.name +"님 오늘은 "+this.lastTime+"에 운동하셨네요";
    }
}
var o = new Health("anne","10:10");
var o2 = new Health("bob","14:20");

//o와 o2는 o.object===o2.object하면 false. 서로 동일한 prototype에게 받아온다고 생각하지X

function Health(name, lastTime){
	this.name= name;
    this.lastTime = lastTime;
}
Health.prototype.showHealth = function(){
        return this.name +"님 오늘은 "+this.lastTime+"에 운동하셨네요";
}
const h = new Health("달리기", "10:12");
const h2 = new Health("걷기", "14:20");
console.log(h.showHealth === h2.showHealth); //true, 둘이 동일하게 나옴. 