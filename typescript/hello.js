var message = 'Hello-World';
function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log('Finally:'+i);
}
doSomething();
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let message1 = 'abc';
message1 = 'abc';
let endsWithC = message1.endsWith('c');
let endsWith = message1.endsWith('c');
console.log(endsWithC);
console.log(endsWith);
let log = function (message3) {
    console.log(message3);
};
let doLog = (message4) => console.log(doLog);
let doLog1 = message4 => console.log(doLog1);
let message4 = 'WILL MISS YOU';
(message4);
