interface T {
    a: number;
    fn: (x: number) => void;
}

let testObj: T = {
    a: 10,
    fn(this: Window, x){
        return () => {
            this; //该this指向普通函数this标注的东西，比如在这里指向的是window
        }
    }
}