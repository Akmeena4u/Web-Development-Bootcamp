//In React with TypeScript, we can use type annotations and interfaces to define and enforce the types of props that your components accept.




//------------------------------------------------------Example -1-Typing props -------------------------------------------------------------------------------

//greet.tsx
//here we will use type for applications and interface for library
type GreetProps = {
  name: string
 
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
        <h2>
          Hey {props.name}! You have 10 unread messages
        </h2>
    </div>
  )
}




//App.tsx
import { Greet } from './components/props/Greet'

function App() {
  return (
    <div className='App'>
      <Greet name='Amit'  />
    </div>
  )
}

export default App



//-------------------------------------------------------------Example-2-Multiple props--------------------------------------------------------------------------

// Greet.tsx
type GreetProps = {
  name: string;
  messageCount: number; // Change this to non-optional
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount } = props; // No need for default value here
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Hey {props.name}! You have {messageCount} unread messages
        </h2>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  );
};

// App.tsx
import { Greet } from './components/props/Greet';

function App() {
  return (
    <div className='App'>
      <Greet name='Amit' messageCount={0} isLoggedIn={false} /> {/* Provide messageCount prop */}
    </div>
  );
}

export default App;



//----------------------------------------------------------Example-3-props as object & Array-----------------------------------------------------------------

//person.tsx
import { PersonProps } from './Person.types'

export const Person = (props: PersonProps) => {
  return (
    <h2>
      {props.name.first} {props.name.last}
    </h2>
  )
}


import { Greet } from './components/props/Greet'
import { Person } from './components/props/Person'
import { PersonList } from './components/props/PersonList'
import { Status } from './components/props/Status'
import { Heading } from './components/props/Heading'
import { Oscar } from './components/props/Oscar'
import { Button } from './components/props/Button'
import { Input } from './components/props/Input'
import { Container } from './components/props/Container'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext'
import { User } from './components/context/User'
import { DomRef } from './components/refs/DomRef'
import { MutableRef } from './components/refs/MutableRef'
import './App.css'
import { Counter } from './components/class/Counter'
import { List } from './components/generics/List'
import { Toast } from './components/templateliterals/Toast'
import { CustomButton } from './components/html/Button'
import { RandomNumber } from './components/restriction/RandomNumber'
import { Text } from './components/polymorphic/Text'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className='App'>
      <Greet name='Vishwas' isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
  
    </div>
  )
}

export default App


