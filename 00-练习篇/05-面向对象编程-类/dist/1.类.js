class User {
    // id: number;
    // name: string;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // this.id = id;
        // this.name = name;
    }
    desc(age, job = "前端开发工程师") {
        console.log(`${this.name}今年${age}岁, 工作是${job}`);
    }
}
let user1 = new User(1, 'gqf');
user1.desc(28);
