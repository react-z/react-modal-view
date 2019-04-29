/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Modal from '../Modal'

test('Modal renders correctly and matches snapshot', () => {
  const handleChange = jest.fn()
  const handleClick = jest.fn()
  const component = renderer.create(
    <Modal visible={true}>
      <p>This is a paragraph.</p>
    </Modal>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Modal renders the correct elements and props', () => {
  const handleChange = jest.fn()
  const handleClick = jest.fn()
  const wrapper = shallow(
    <Modal visible={true}>
      <p>This is a paragraph.</p>
    </Modal>
  )
  expect(wrapper.instance().props.visible).toEqual(true)

  expect(wrapper.find('p').length).toEqual(1)

  // wrapper
  //   .find('div')
  //   .props()
  //   .onClick()

  console.log(wrapper.debug())
})
