function merge(target, ...others) {
    return Object.assign(target, ...others);
}
let newObj = merge({ x: 1 }, { y: 2 }, { z: 3 });
console.log(newObj);
