import React from 'react'

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
            <p>{this.state.value}</p>
      </>
    );
  }
}

Ponpon.defaultProps = {
  value: 'default'
};

export default Ponpon;
