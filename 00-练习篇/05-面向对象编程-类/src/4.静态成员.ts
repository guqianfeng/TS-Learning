type ICanDoAfterSchool = 'Do Homework' | 'Play Computer Game' | 'Study All The Time'

class Student{

    static readonly CAN_DO_AFTER_SCHOOL: Array<ICanDoAfterSchool> = ['Do Homework' , 'Play Computer Game' , 'Study All The Time']

    constructor(
        public name: string,
        public age: number,
        public canDoAfterSchool: Array<ICanDoAfterSchool>
    ){
        
    }

    do(){
        console.log("-----------------------")
        console.log(Student.CAN_DO_AFTER_SCHOOL);
        console.log(this.name)
        console.log(this.canDoAfterSchool);
        console.log("-----------------------")
    }

}

let good_student = new Student('张三', 13, ['Do Homework' , 'Play Computer Game' , 'Study All The Time']);
good_student.do();

let bad_student = new Student('李四', 12, ['Do Homework', 'Study All The Time']);
bad_student.do();