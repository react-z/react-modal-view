## react-modal-view

[![npm version](https://badge.fury.io/js/react-modal-view.svg)](https://badge.fury.io/js/react-modal-view)

![](https://raw.githubusercontent.com/StevenIseki/react-modal-view/master/example/screenshot.png)

a simple react modal component

## Install

``` js
npm install react-modal-view --save
```

## Versions

#### `1.0.0` uses React `^0.15.1`

## Use

``` js
import Modal from 'react-modal-view'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  render () {
    /* switch visible prop to close or hide in your component */
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

ReactDOM.render( <TestComponent />, document.getElementById('root') )
```

## Styles

react-modal-view can be used with your own custom styles. A minimal [modal.css](https://github.com/StevenIseki/react-modal-view/blob/master/example/public/modal.css) style sheet is included as a guide.

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
