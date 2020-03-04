class Point {
    constructor(
        // 可以访问，但是一旦确认下来不能修改
        readonly x: number,
        // 可以访问，但是不能外部修改
        protected y: number,
        // 外部包括子类不能访问，也不可修改
        private _z: number
    ){

    }

    method1(){
        this.y;
        this._z;
    }

    // setZ(z: number){
    //     if(z > 100){
    //         this.z = z;
    //     }
    // }

    set z(result: number){
        if(result > 100){
            this._z = result;
        }
    }

    get z(): number{
        return this._z;
    }
}

class SubPoint extends Point{
    method2(){
        this.y;
        // this.z;//报错，以为private只有自身可以访问
    }
}

let point = new Point(1, 2, 3);
point.x;
// point.x = 999; //报错因为是readonly不可以修改
// 受保护的和私有的在这里肯定会报错，在外部不能访问，这里就不演示了
// point.setZ(1000);
point.z = 2000;
console.log(point);
console.log(point.z);