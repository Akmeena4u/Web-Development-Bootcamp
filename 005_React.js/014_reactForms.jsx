// Just like in HTML, React uses forms to allow users to interact with the web page.

/*---------------------------------------------------------------------Adding Forms in React :- --------------------------------------------------------------
You add a form with React like any other element:  */
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

//This will work as normal, the form will submit and the page will refresh. But this is generally not what we want to happen in React. We want to prevent this default behavior and let React control the form.


/*-------------------------------------------------------------------------------Handling Forms-------------------------------------------------------------------------
Handling forms is about how you handle the data when it changes value or gets submitted.

Multiple Input Fields
You can control the values of more than one input field by adding a name attribute to each element. We will initialize our state with an empty object.
To access the fields in the event handler use the event.target.name and event.target.value syntax.

controlled conponents:
In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input.
In React, mutable state is typically kept in the state property of components, and only updated with setState()

*/

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

/*----------------------------------------------------------------------The textarea Tag---------------------------------------------------------------

In HTML, a <textarea> element defines its text by its children:*/

<textarea>
  Hello there, this is some text in a text area
</textarea>

//In React, a <textarea> uses a value attribute instead. This way, a form using a <textarea> can be written very similarly to a form that uses a single-line input:

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//note:- Notice that this.state.value is initialized in the constructor, so that the text area starts off with some text in it.



/*---------------------------------------------------------------------------------Select tag----------------------------------------------------------------------
In HTML, <select> creates a drop-down list. For example, this HTML creates a drop-down list of flavors: */
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>

//Note that the Coconut option is initially selected, because of the selected attribute. React, instead of using this selected attribute, uses a value attribute on the
 //root select tag. This is more convenient in a controlled component because you only need to update it in one place. For example:

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//Overall, this makes it so that <input type="text">, <textarea>, and <select> all work very similarly - they all accept a value attribute that you can use to implement a controlled component.


