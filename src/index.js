// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import Something from './components/something.js'
import Lorem from './components/lorem.js'
import Ponpon from './components/ponpon.js'
import './main.scss'
import './sub.sass'

type Props = {
  name: string,
}

class Main extends React.Component<Props> {
  render() {
    this.props.doesNotExist

    return (
      <div>
        Hello, {this.props.name}!
        <Something />
        <Lorem />
        <Ponpon />
      </div>
    )
  }
}

ReactDOM.render(<Main name="Thom" />, document.getElementById('root'))
