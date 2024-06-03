function logPoint(point) {
    console.log("x = " + point.x + ", y = " + point.y);
}
function logName(x) {
    console.log("Hello, " + x.name);
}
var obj = {
    x: 0,
    y: 0,
    name: "Origin",
};
logPoint(obj);
logName(obj);
var Empty = /** @class */ (function () {
    function Empty() {
    }
    return Empty;
}());
function fn(arg) {
    // do something?
    console.log({ arg: arg });
}
// No error, but this isn't an 'Empty' ?
fn({ k: 10 });
