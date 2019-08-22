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
const result = [];

Object.keys(widget).forEach(function(k) {
  if (typeof widget[k] == "object") {
    return widget.k;
  } else if (typeof widget[k] == "number") {
    result.push(k);
  }
});

console.log(result);
