/*#1-Whta is JSX- -------------------------------------------------------------------------------------------------------------
                JSX stands for JavaScript XML. JSX allows HTML to co-exist with Javascript in React. because at the end  JSX converts HTML tags into react elements. 
                
#2- Why JSX is created? - -------------------------------------------------------------------------------------------------------
           to ensures that all files like js, html aren’t scattered at different locations.

#3- JSX Rules:- --------------------------------------------------------------------------------------------------------------------

            1. components name must start with a Uppercase letter means they should be capitalized 
            2. JSX allows you to return only one element from a given component. This is known as a parent element. 
            3.  If you want to return multiple HTML elements, simply wrap all of them in a single <div></div>, <React.fragments><React.fragments/>, <></> or any semnatic tag.
                And we  need to encapsulate everything inside ( );
            4. In JSX, every tag, including self closing tags, must be closed.for example <img/>, <hr/>, and so on).
            5. React DOM uses the camelCase naming convention for HTML attribute names   
            6. "class" and "for" are reserved keywords in JavaScript, so use "className" and "forHTML" instead, respectively.  
            7.React supports if statements, but not inside JSX.instead we can use ternary operator

#4-How to use CSS in JSX:- ----------------------------------------------------------------------------------------------------------

As we know in  JSX we use HTML (JSX) and JavaScript in the same file. so here To add style to our components, we can either use inline CSS or external CSS.
inline css :- Basically, Here we use { } to add styles, use key-value pairs, and always write the value in " ". and     outer { } is the convention) */
              
          //example 1- App.jsx    
              function App  () {
                         return (
                                   <>
                                     <h1 style={ { color: "Red" } }>Hello World!</h1>
                                     <p style={ { fontSize: "20px" } }>Tanishka here!</p>
                                  </>
                               );
                             }
              
         //example 2-App.jsx
              const myStyle = {
                      color: 'blue',
                      fontSize: '16px',
                    };

            function MyComponent() {
                      return (
                               <div style={myStyle}>
                                    This text has inline styles.
                               </div>
                               );
                            }


//External Css:- We simply create a .css file and import it in our .jsx file and then assign CSS classes from that file to your JSX elements using the className attribute.      

           import './styles.css';

           function MyComponent() {
                    return (
                          <div className="my-custom-class">
                                This element uses styles from an external CSS file.
                          </div>
                         );
                      }

/*#5-How to use JS in JSX :----------------------------------------------------------------------------------------------------
     We might need to use plain JavaScript to add logic to program rendering components. And to add plain JavaScript code in JSX, we need to write it inside curly brackets.
    However, whatever we write inside curly brackets must be an expression. Statements are not allowed.  , we have to declare our expressions outside the returnblock*/
      
     //    const name = "Tanishka";

      function App () {
              return (
                 const name = "Tanishka";
                  <>
                      <h1>My name is {name}</h1>
                  </>
                  );
             }

/*#6- use of JSX - ---------------------------------------------------------------------------------------------------------
   JSX is often used to define components in React. Components are reusable building blocks for your application's UI. */
        function App() {
            return <h1>Hello World!</h1>;
           }


//#7- React Elements: In React, JSX is used to create React elements. React elements are lightweight representations of the actual DOM elements.-----------


//#8-Rendering JSX: You can render JSX using React's ReactDOM.render() method. It takes the JSX element and renders it into the actual HTML DOM.
            import React from 'react';
            import ReactDOM from 'react-dom/client';
            import App from './App';

            const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(
                  <React.StrictMode>
                              <App />
                 </React.StrictMode>
               );

//#9-Babel: Babel is a JavaScript compiler that translates JSX into regular JavaScript, which browsers can understand.  
