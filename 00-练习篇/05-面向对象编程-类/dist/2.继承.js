class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    desc(age, job = "前端开发工程师") {
        console.log(`${this.name}今年${age}岁, 工作是${job}`);
    }
}
class VIP extends User {
    constructor(id, name, score) {
        super(id, name);
        this.score = score;
    }
    vipTalk(age, job) {
        super.desc(age, job);
        console.log(`${this.name}还是个vip`);
    }
}
let vip1 = new VIP(1, 'gqf', 100);
console.log(vip1);
vip1.vipTalk(28, 'developer');
