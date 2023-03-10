import { useState } from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      return (
        <div>
          <h3 className='text-center mt-3'>My To-Do List</h3>
          <TodoList items={this.state.items} />
          <form className='text-center mt-5' onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="new-todo">
              Enter a task below: 
            </label>
            </div>
            <div className="mt-3">
            <input
              
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            
            <button>
              Add #{this.state.items.length + 1}
            </button>
            </div>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (

        <div className='text-center mt-3 text-uppercase text-success'>
        <ul className="list-unstyled">
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
        </div>

      );
    }
  }
  
  export default TodoApp;
//   root.render(<TodoApp />);
