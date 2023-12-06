// Practical task 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr ;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// Practical task 2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26]
};
let { names: [, name2, , name4], ages: [, age2, , age4] } = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

// Practical task 3
function mul (...args) {
    let arguments = [...args];
    let Numbers = [];
    let product = 1;
    for(argument of arguments){
        if(typeof argument == "number") Numbers.push(argument);
    }
    if(Numbers.length !== 0) {
        Numbers.forEach(number => product *= number);
        return product;
    } else return 0
}
console.log( mul (1, "str", 2, 3, true )); // 6
console.log( mul ( null , "str", false , true )); 

// Practical task 4
let server = {
    data: 0,
       convertToString : function (callback) {
    callback(( () => this .data + "").bind( this ));
    }
    };
    let client = {
    server: server,
    result: "",
    calc: function (data) {
          this .server.data = data;
          this .server.convertToString ( this.notification());
    },
    notification: function () {
          return (callback => this .result = callback()).bind( this );
    }
    };
    client.calc (123);
    console.log( client.result ); // "123"
    console.log( typeof client.result ); // "string"

// Practical task 5
function mapBuilder(keys, values) {
    let map = new Map();
    for (let i = 0; i < keys.length; i++) {
        map.set(keys[i], values[i]);
      };
    return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", " i "];
let map = mapBuilder (keys, values);
console.log( map.size ); // 4
console.log( map.get(2)); // "span"
