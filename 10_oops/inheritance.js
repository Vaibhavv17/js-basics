class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email =email
        this.password= password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}

const chai =new Teacher("chai","chai@teacher.com", "123")

chai.logMe()

const masalaChai = new User("masalachai")

masalaChai.logMe()

console.log( chai === masalaChai );

console.log( chai instanceof Teacher);
console.log( chai instanceof User); 
//both are true



