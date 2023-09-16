//They allow you to define custom behavior when reading or writing the values of object properties. Getter methods are used to retrieve the value of a property,
//while setter methods are used to set the value of a property.


  let person = {
    firstName : "Ak",
    lastName : "Meena",

    // Getter--A getter method is defined using the get keyword followed by a method name. It is invoked when you access a property.
    get fullName()
    {
        return person.firstName + " " + person.lastName;
    },

    // Setter--A setter method is defined using the set keyword followed by a method name. It is invoked when you assign a value to a property.
    set fullName(value)
    {
        let name = value.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
    }
}

console.log(person.fullName);
person.fullName = "Priti Meena";
console.log(person.fullName);
