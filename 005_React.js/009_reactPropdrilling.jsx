/*------------------------------------------------------------------propdrilling----------------------------------------------------------------------------
propdrilling occurs when you need to pass data (props) from a top-level component to a deeply nested child component. This data often needs to be passed through multiple intermediate
components that don't actually use the data themselves but they act as carriers for the data, passing it down from one level to the next.Prop drilling can make your code more challenging to maintain and read.

*/

function App() {
  const data = "Hello from the top-level component!";
  return (
    <div>
      <IntermediateComponentA data={data} />
    </div>
  );
}

function IntermediateComponentA({ data }) {
  return (
    <div>
      <IntermediateComponentB data={data} />
    </div>
  );
}

function IntermediateComponentB({ data }) {
  return (
    <div>
      <IntermediateComponentC data={data} />
    </div>
  );
}

function IntermediateComponentC({ data }) {
  return <TargetComponent data={data} />;
}

function TargetComponent({ data }) {
  return <p>{data}</p>;
}


/*
To mitigate prop drilling, you can consider alternative state management solutions in React:

Context API: React's Context API allows you to create a context that can be accessed by any component in the tree without explicitly passing props through intermediaries.

Redux: Redux is a state management library that allows you to manage application-level state in a predictable and centralized way. It can help eliminate prop drilling.

Custom Hooks: You can create custom hooks to manage and share state or data across components without prop drilling.*/
