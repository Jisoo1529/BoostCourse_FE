const widget = {
  debug: "on",
  window: {
    title: "Sample Knfabulator Widget",
    name: "main_window",
    width: 500,
    height: 500
  },
  image: {
    src: "Images/Sun.png",
    name: "sun1",
    hOffset: 250,
    vOffset: 250,
    alignment: "center"
  },
  text: {
    data: "click here",
    size: 36,
    style: "bold",
    name: "text1",
    hOffset: 250,
    vOffset: 100,
    alignment: "center"
  }
};
//벨류 타입 typeOf()활용.
const answer = [];
function solution(d) {
  Object.keys(d).forEach(function(k) {
    if (typeof d[k] == "object") {
      return solution(d[k]);
    } else if (typeof d[k] == "number") {
      answer.push(k);
    }
  });
}

solution(widget);
console.log(answer);
