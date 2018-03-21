import React from 'react';
import ReactDOM from 'react-dom';
import Something from './components/something.js';
import './main.scss';
import './sub.sass';

class Main extends React.Component {
  render() {
    return (
      <div>
        Hello, {this.props.name}!
        <Something />
      </div>
    );
  }
}

ReactDOM.render(
  <Main name='Thom' />,
  document.getElementById('root')
);

