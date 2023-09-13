//In JavaScript, object cloning refers to creating a new object that is a copy of an existing object. There are several ways to clone objects in JavaScript

//#1- Using iteration method-- deep cloning 

const rectangle = {
    length: 2,
    breadth: 4,

    draw : function(){
        console.log("Drawing rectangle");
    },

    area : function()
    {
        console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
    }
}

console.log("Rectangle");
console.log(rectangle);

const duplicate = {};
for(let key in rectangle)
{
    duplicate[key] = rectangle[key];
}

console.log("Duplicates");
console.log(duplicate);




//-----------------------------------------------------------------------------------------------------------------------

//#2--Object.assign() method can also be used to create a shallow copy of an object.

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

console.log("Duplicates");
const duplicate = Object.assign({}, rectangle);
console.log(duplicate);



//------------------------------------------------------------------------------------------------------------------


//#3--This method creates a new object with a shallow copy of the properties and values from the source object.
//If the object contains nested objects or arrays, those nested objects are not deeply cloned.

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
  
  console.log("Duplicates");
  const duplicate = {...rectangle};
  console.log(duplicate);
