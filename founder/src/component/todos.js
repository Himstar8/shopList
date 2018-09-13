import React, { Component } from 'react';
import axios from 'axios';
class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      input: '',
      todos: ['poubelle', 'coucou'],
      completed: false
    };
  }

  handle = e => {
    this.setState({
      input: e.target.value
    });
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.input],
      input: ''
    });
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/users')
      .then(result => {
        console.log('res', result);
      })
      .catch(err => {
        console.log('get errors', err);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Add a todo</h1>
        <br />
        <input
          type="text"
          placeholder="add a todo here..."
          onChange={this.handle}
          value={this.state.input}
        />
        <button className="btn teal waves-effect" onClick={this.addTodo}>
          Add todo
        </button>
        <br />
        <ul>
          {this.state.todos.map(todo => {
            return (
              <React.Fragment key={todo}>
                <i className="material-icons tiny prefix">menu</i>
                <li
                  onClick={() => {
                    this.setState({
                      completed: !this.state.completed
                    });
                  }}
                  style={{
                    textDecoration: this.state.completed
                      ? 'line-through'
                      : 'none'
                  }}
                >
                  {todo}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AddTodo;
