var Num = 10;
var Str = "Hello World";
function sum(x, y) {
    return x + y;
}
sum(1, 2);
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
var t = mySearch("hello", "l");
console.log("t::👉", t);
