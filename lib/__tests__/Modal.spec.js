"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Modal = _interopRequireDefault(require("../Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('Modal renders correctly and matches snapshot', function () {
  var handleChange = jest.fn();
  var handleClick = jest.fn();

  var component = _reactTestRenderer.default.create(_react.default.createElement(_Modal.default, {
    visible: true
  }, _react.default.createElement("p", null, "This is a paragraph.")));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Modal renders the correct elements and props', function () {
  var handleChange = jest.fn();
  var handleClick = jest.fn();
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Modal.default, {
    visible: true
  }, _react.default.createElement("p", null, "This is a paragraph.")));
  expect(wrapper.instance().props.visible).toEqual(true);
  expect(wrapper.find('p').length).toEqual(1); // wrapper
  //   .find('div')
  //   .props()
  //   .onClick()

  console.log(wrapper.debug());
});