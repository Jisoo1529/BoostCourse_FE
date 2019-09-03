var data = [{title : "hello",content : "perfect", price : 12000},
            {title : "crong",content : "nice", price : 5500},
            {title : "codesquad",content : "Great", price : 1200}
        ];


for(var i=0; i<data.length; i++){
    console.log(data[i].title, data[i].price);
}

data.forEach(function(v){
    console.log(v.title,v.price);
});