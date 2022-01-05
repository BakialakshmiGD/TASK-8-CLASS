
class Person {
    constructor(name,email,phone){
this.name = name;
this.email = email;
this.phone = phone;

    }
    Person_name() {
        return `Name = ${this.name}`;
    }
    Person_email() {        
        
    return `Email = ${this.email}`;
    }
    Person_phone() {        
        return `Phone Number = ${this.phone}`;
    }
    }


const person_details = new Person("raji","raji@gmail.com","9234567890");
console.log(person_details.Person_name());
console.log(person_details.Person_email());
console.log(person_details.Person_phone());

