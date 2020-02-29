interface IObj{
    [key: string]: any
}

function merge(target: IObj, ...others: Array<IObj>){
    return Object.assign(target, ...others);
}

let newObj = merge({x: 1}, {y: 2}, {z: 3});
console.log(newObj);