/*-------------------------------------------------------------------Context API-------------------------------------------------------------------------
  Context Api is the solution of propdrillig .The Context API in React is a way to share data between components without having to pass props explicitly
  through every level of the component tree.
  we  can create a context at a higher level in the component tree and then access that context in any component that needs the shared data. */

/* ------------------------------------------------------Using the Context API:------------------------------------------------------------------*/

//1.Create a Context: - First, create a context using React.createContext(). we typically do this at the top level of your component hierarchy(App.jsx/topcompo.jsx)
const MyContext = React.createContext();




//2.Provide Data: Wrap the part of your component tree where you want to share data with a MyContext.Provider component. Provide the data you want to share as a value prop.(in App.jsx)
<MyContext.Provider value={/* data to share */}>
  
  {/* Components that can consume the context */}
  
</MyContext.Provider>



  
//3.Consume Data:Any component that needs access to the shared data can consume the context using the MyContext.Consumer component or the useContext hook (target.jsx).
  
<MyContext.Consumer>{
  
  (data) => {
    return(
         /* render with data */
      );
  }
}</MyContext.Consumer>
  
//Using useContext:
const data = useContext(MyContext);


/*NOTE: - in cosumer block we write a function in that function we return what we wants to return 
        2. only one function will be there in consumer block if we wants to use multiple context then we needs to nest them inside each other and similarly in provider block*/ 


/*-------------------------------------------------------------problems with Context API-------------------------------------------------------------------

  1.Complexity and Propagation: As the application grows, managing and propagating context providers can lead to complex nesting and make it harder to understand the data flow.
  2.Nested Contexts: When working with nested contexts, it's possible to consume the wrong context accidentally, leading to unexpected behavior.
  
  */
