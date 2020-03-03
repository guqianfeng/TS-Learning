class User{
    constructor(public id: number, public name: string){

    }
    desc(age: number, job: string = "前端开发工程师"): void{
        console.log(`${this.name}今年${age}岁, 工作是${job}`)
    }
}


class VIP extends User{
    constructor(
        id: number,
        name: string,
        public score: number
    ){
        super(id, name);
    }

    vipTalk(age: number, job: string){
        super.desc(age, job);
        console.log(`${this.name}还是个vip`)
    }   
}

let vip1 = new VIP(1, 'gqf', 100);
console.log(vip1)
vip1.vipTalk(28, 'developer')