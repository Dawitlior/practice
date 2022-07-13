class Student{
    constructor(name,age,grade,id){
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.id = id;
    }
    theDetails(){
        return `Full name:${this.name}Age:${this.age}Grade:${this.grade}Id:${this.id}`
    }
    getSomeDetails(){
        return this.theDetails()
    }
}
const someAverageStudent = new Student("lior",27,7,77777);
console.log(someAverageStudent)

class SchoolStudent extends Student{
    constructor(name,age,grade,id,phone){
        super(name,age,grade,id)
        this.phone = phone;
    }
}
let show1 = new SchoolStudent("lil",34,5,122312);
console.log(show1.getSomeDetails());

class MainCar{
    constructor(numberOfWheels,engine,color){
        this.numberOfWheels = numberOfWheels;
        this.engine = engine;
        this.color = color;
    }
    returnTheDetails(){
        return `Number of wheels:${this.numberOfWheels}Max engine:${this.engine}Color:${this.color}`
    }
}
let myNewCar = new MainCar(4,1600,"white");
console.log(myNewCar.returnTheDetails());

class Tracks extends MainCar{
    constructor(numberOfWheels,engine,color,year){
        super(numberOfWheels,engine,color);
        this.year = year;
    }
}


