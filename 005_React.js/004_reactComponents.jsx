/*What is a Component?
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML

#Components can be created by defining JavaScript functions( Function Based Components) or classes that extend React.Component(Class Based Components)*/

//class based components :- these components are created inside App.jsx /App.js
class Cat extends React.Component {
  render() {
    return <h1>Meow</h1>;
  }
}

export default Cat;


//function based components:-
function Cat() {
  return (
    <h1>Meow</h1>
  );
}

export default Cat;

# syntax for using/Rendering a Component in index.jsx/main.jsx
 <ComponentName />

/* Note:-To have less mess inside the main file(with all the components in the same file) and to reuse components on different pages, we have to make them separately.
       So that we can just import them in any file and use them!  
       File name must start with uppercase letter.

Nest components --: In React, we can nest components inside one another. This helps in creating more complex User Interfaces. It also helps in getting rid of redundant code. 
                            The components that are nested inside parent components are called child components.
                            in below example  we have created two components, Book and BookList. Book returns a div that has Book name and author name while BookList returns a div that contains two books.*/

function BookList  () {
  return (
    <div>
      <Book />
      <Book />
    </div>
  );
};

function Book  (){
  return (
    <div>
      <h1>Book name : Cracking The Coding Interview</h1>
      <h2>Author : Gayle Laakmann McDowell</h2>
    </div>
  );
};
