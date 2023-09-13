//for---in loop

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (const key in person) {
    console.log(key + ": " + person[key]);
}


//--------------------------------------------------------------------------------------------------------------------

//For....of
const colors = ["red", "green", "blue"];

for (const color of colors) {
    console.log(color);
}

//You can also use Object.entries() to loop through the key-value pairs of an object:

const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (const [key, value] of Object.entries(person)) {
    console.log(key + ": " + value);
}



//---------------------------------------------------------------------------------------------------------------------------------


//in keyword in js
const rectangle = {
  length: 2,
  breadth: 4,

  draw: function () {
    console.log("Drawing rectangle");
  },

  area: function () {
    console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
  },
};

if ("length" in rectangle) {
  console.log("Length Property Exists in Rectangle");
} else {
  console.log("Absent");
}

