/*---------------------------------------------------------------------------------props:--------------------------------------------------------------------------

       we know we make components as a resuable entity or a specific block of code , we make it once and use multiple times by just changing small things as needed
        these changes is made with help of props , what ever property we wants to change to custmozie in our child components they sent as parameters to child componets from parent componet.
        we  can pass custom data, such as text, numbers, objects, or even functions, through props.And these are read only for child components ,it can not modify them
        
          Props, short for "properties," are a fundamental concept in React that allows you to pass data from a parent component to a child component via HTML Attributes . 
        They are a way to make your components dynamic and reusable  . In functional components, props are accessed as arguments to the component function. In class components, props are accessed using this.props*/

      // Analogy:- lets we make a function name
               //sum.js
               function sum(){
                  return a+a;
                };

                sum(5) //main.js

               //here i am calling sum function in main.js file with passing a parameter 5 that will go as argumnet in actual function sum so here in jsx terminology main.jsx in parent componet as sum.jsx is child compo
               // similarlyy in index.jsx we call a component and if we want any changes in existing components then we pass thode changes as a parameter in {} here and exiting compo takes them as argumnets  that used inside as object with dot notation
             
              //person.jsx
              function Person(props) {
                     return <h2>I'm { props.name }!</h2>;
                        }

              //app.jsx
              function Greeting() {
                const name = "Jesse"
                    return (
                          <>
                            <h1>Hello!</h1>
                             <Person name={name} />
                         </>
                          );
                       }
              //index.jsx
              const root = ReactDOM.createRoot(document.getElementById('root'));
              root.render(<Greeting />);


//-------------------------------------------------------------------------------------Prop-type:-------------------------------------------------------------
//propTypes is an object were you declare the types of the data under props.while props is an object passed to the component instance . always before using proptypes we need to import them
         //app.jsx
          import react from 'react'
          export default function Navbar() {
               return (
                   <div>
                     //Code of your Navbar
                 </div>)
                 }


        //index.jsx
         import PropTypes from 'prop-types'


         navbar.propTypes = {
                  title: propTypes.string.isrequired, 
                  aboutText: PropTypes.string
           }; 

    /* Explanation--It means that my prop-type of title is a string which means on passing any other value, like Number, it will show an error in the console. Hence we can only pass a string
       in props.title and props.aboutText. We can use ‘isrequired’ keyword, which makes sure that we won’t leave that prop blank. If you do so, it will show an error in the console.
       Similarly, you can use an object, Number, etc. prop-type as well.*/


/*-------------------------------------------------------------------------Default Prop-Type-----------------------------------------------------------
 If a parent component doesn't provide a specific prop value when rendering a child component, React will use the default value specified in defaultProps
 If a parent component does provide a specific value for a prop, that value will override the default prop value*/

      //index.jsx
      navbar.defaultProps = {
         title: 'Set title here',
         aboutText: 'About text here'
     };
