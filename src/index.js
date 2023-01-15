// @flow

import React from 'react'
import { createRoot } from 'react-dom/client'
import Something from './components/something.js'
import Lorem from './components/lorem.js'
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
      </div>
    )
  }
}

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<Main name="Thom" />)
