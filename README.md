## react-modal-view

[![npm version](https://badge.fury.io/js/react-modal-view.svg)](https://badge.fury.io/js/react-modal-view)

![](https://raw.githubusercontent.com/StevenIseki/react-modal-view/master/example/screenshot.gif)

A simple react modal component

## Install

``` js
yarn add react-modal-view
```

## Use

``` js
import Modal from 'react-modal-view'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

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
```

## Styles

Uses styled-components 💅 for the base styling.

## Development
    yarn
    yarn dev

## Test
    yarn test

## Build
    yarn
    yarn build

## Publish
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
