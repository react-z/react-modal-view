import Modal from '../lib/Modal' // 'react-modal-view'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {
  render () {
    return (
      <div>
        <Modal visible={true}>
          <h2>Hello from inside your modal</h2>
          <p>This is a paragraph.</p>
        </Modal>
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
