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
