class Teacher{
    constructor(
        public name: string,
        public age: number,
        public gender: string
    ){}

    eat(): void{
        console.log(`${this.age}岁的${this.name}性别是${this.gender}`)
    }
}

// let teacher = new Teacher('gqf', 28, '男');
// teacher.eat();

function fn1(arg: Teacher){
    arg.eat();
}

fn1(new Teacher('gqf', 28, '男'))

function fn2(arg: typeof Teacher){
    new arg('gqf', 28, '男').eat();
}

fn2(Teacher);