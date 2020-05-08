import React from 'react'
import {Spring} from 'react-spring/renderprops'

class Ponpon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite 聖闘士.'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    const { value } = this.props;

    return (
      <>
        <textarea value={this.state.value} onChange={this.handleChange} />
        <Buwabuwa value={this.state.value}/>
      </>
    );
  }
}

Ponpon.defaultProps = {
  value: 'default'
};

export default Ponpon;

class Buwabuwa extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value } = this.props;

    if (value.match(/hoge/)) {
      return <Spring
               config={{tension: 273, friction: 17, mass: 0.8 }}
               from={{ opacity: 1, transformOrigin: 'center', transform: 'scale(0)' }}
               to=  {{ opacity: 1, transformOrigin: 'center', transform: 'scale(1)' }}>
               {props => <div style={props}>{value}</div>}
             </Spring>
    } else {
      return <Spring
               config={{tension: 273, friction: 17, mass: 0.8 }}
               from={{ opacity: 1, transformOrigin: 'center', transform: 'scale(1)' }}
               to=  {{ opacity: 0, transformOrigin: 'center', transform: 'scale(0)' }}>
               {props => <div style={props}>{value}</div>}
             </Spring>
    }
  }
}
