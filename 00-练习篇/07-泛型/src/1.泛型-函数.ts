function getValue<T>(obj: T, k: keyof T){
    return obj[k];
}

let obj1 = {
    x: 1,
    y: 2
}

let obj2 =  {
    a: 3,
    b: 4
}

getValue(obj1, 'x');
getValue(obj2, 'a');