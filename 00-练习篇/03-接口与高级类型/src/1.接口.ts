interface Point {
    readonly x: number;
    readonly y: number;
    color?: string;
    [props: string]: number | undefined | string;
}

let p1: Point = {
    x: 10,
    y: 20,
}

// p1.x = 20; //只读属性会报错

p1.z = 30;

interface PointTest {
    [props: string]: Object;
    [props: number]: Date;
}

interface IFunc {
    (a: number, b: number): number;
}

// function fn1(a: number, b: number): number {
//     return a + b;
// }
// function fn2(a: number, b: number): number {
//     return a * b;
// }

let fn1: IFunc = function(a: number, b: number): number{
    return a + b;
}

let fn2: IFunc = function(a: number, b: number): number{
    return a * b;
}

interface IEvent {
    (e: Event): void;
    // (e: MouseEvent): void;
}

function on(el: Element, eventName: string, callback: IEvent){
    el.addEventListener(eventName, callback);
}

let div = document.getElementById("test");
if(div){
    on(div, "click", e => {

    })
}

interface Box {
    width: number;
    height: number;
    fn(a: string): string;
}
interface Box {
    scale: number;
    // width: string; //会报错，因为同名的属性，类型要一致
    fn(a: number): number; //重载
}

let box = {
    width: 100,
    height: 200,
    scale: 5,
    fn(a: any): any{
        return a;
    }
}