import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitIdea = event => {
    //* prevents the page from refreshing when the form submits
    event.preventDefault(); 

    const newIdea = {
      id: Date.now(),
      ...this.state //? spreading in the title and description
    }

    //* using the addIdea meethoid from App we passed as a prop to Form
    //* passing in the newIdea method from above
    this.props.addIdea(newIdea);

    //* invoke the function that is below
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({  title: '', description: '' });
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={this.state.title}
          onChange ={event => this.handleChange(event)}
        />

          <input 
            type='text'
            placeholder='Description'
            name='description'
            value={this.state.description}
            onChange={event => this.handleChange(event)}
          />

          <button onClick={event => this.submitIdea(event)}>SUBMIT</button>
      </form>
    )
  }
}

export default Form;