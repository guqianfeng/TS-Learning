interface T {
    a: number
    fn(a: number): void;
}

let obj: T = {
    a: 2,
    fn(this: T, a){
        // (<T> this).a;
        console.log(this.a);
    }
}

obj.fn(10)