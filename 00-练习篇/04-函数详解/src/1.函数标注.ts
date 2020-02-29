function fn1(a: string): string{
    return a + "!!";
}

let fn2: (a: string) => string = function (a) {
    return a + "!!";
}

type callback = (a: string) => string;

let fn3: callback = function(a){
    return a + "!!";
}

interface ICallback{
    (a: string): string
}

let fn4: ICallback = function(a){
    return '';
}