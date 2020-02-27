let obj = {
    x: 1,
    y: "test",
    z: true
};
let newObj = Object.assign(obj, { z: false }, { x: 999 });
