interface o1 {
    x: number,
    y: string
}

interface o2 {
    z: boolean
}

let obj: o1 & o2 = {
    x: 1,
    y: "test",
    z: true
}

let newObj: o1 & o2 = Object.assign(obj, {z: false}, {x: 999})