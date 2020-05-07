import React from 'react'

export default class Ponpon extends React.PureComponent {
  static defaultProps = {
    text: 'hoge',
  };
  
  changeTextToRender = () => {
    // const text = this.props.text.replace(/\n/g, '<br>');

    this.setState({ textToRender: text });
    this.render();
    const node  = ReactDOM.findDOMNode(this);
  }

  componentWillUpdate = () => {
  }
  
  componentDidUpdate = () => {
    this.changeTextToRender();
  }
  
  render() {
    return (
      <>
        <textarea value={text}></textarea>
      </>
    );
  }
}

