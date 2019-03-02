import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import Modal from '../src/Modal'

test('Modal component', (t) => {
  const wrapper = mount(
      <Modal visible={true}>
        <h2>Hello from inside your modal</h2>
        <p>This is a paragraph.</p>
      </Modal>
  )

  t.equal(
    wrapper.props().visible, true, 'visible prop is set to true'
  )

  t.end()
});
