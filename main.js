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

class Car{
    constructor(numberOfWheels,engine,color){
        this.numberOfWheels=numberOfWheels;
        this.engine=engine;
        this.color=color;
    }
    getDetails(){
        return `Number Of Wheels:${this.numberOfWheels} Engine${this.engine} Color:${this.color}`;
    }
}

class SmallCar extends Car{
 constructor(numberOfWheels,engine,color){
    super(numberOfWheels, engine, color);
 }
 getDetails(){
    return super.getDetails()
 }   
}

class newCar extends SmallCar{
    constructor(numberOfWheels,engine,color){
        super(numberOfWheels,engine,color)}
        myFunc(){ 
            return this.getDetails()
        }
}
let xs = new newCar(4,45,"black");
console.log(xs);
let li = new SmallCar(3,122,"lil");
console.log(li.getDetails());


 function azeret(num1){
      let sum = 1;
     while(1<=num1){
         sum*=num1;
         num1--;
     }
     return sum;
 }
 console.log(azeret(5));


 