let p1 = {
    x: 10,
    y: 20,
};
// p1.x = 20; //只读属性会报错
p1.z = 30;
// function fn1(a: number, b: number): number {
//     return a + b;
// }
// function fn2(a: number, b: number): number {
//     return a * b;
// }
let fn1 = function (a, b) {
    return a + b;
};
let fn2 = function (a, b) {
    return a * b;
};
function on(el, eventName, callback) {
    el.addEventListener(eventName, callback);
}
let div = document.getElementById("test");
if (div) {
    on(div, "click", e => {
    });
}
let box = {
    width: 100,
    height: 200,
    scale: 5,
    fn(a) {
        return a;
    }
};
