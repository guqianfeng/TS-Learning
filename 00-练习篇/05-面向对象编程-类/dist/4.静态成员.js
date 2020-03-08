class Student {
    constructor(name, age, canDoAfterSchool) {
        this.name = name;
        this.age = age;
        this.canDoAfterSchool = canDoAfterSchool;
    }
    do() {
        console.log("-----------------------");
        console.log(Student.CAN_DO_AFTER_SCHOOL);
        console.log(this.name);
        console.log(this.canDoAfterSchool);
        console.log("-----------------------");
    }
}
Student.CAN_DO_AFTER_SCHOOL = ['Do Homework', 'Play Computer Game', 'Study All The Time'];
let good_student = new Student('张三', 13, ['Do Homework', 'Play Computer Game', 'Study All The Time']);
good_student.do();
let bad_student = new Student('李四', 12, ['Do Homework', 'Study All The Time']);
bad_student.do();
