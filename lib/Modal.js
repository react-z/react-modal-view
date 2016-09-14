'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  _createClass(Modal, null, [{
    key: 'defaultProps',
    get: function get() {
      return {
        type: 'notice',
        message: null
      };
    }
  }]);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this));

    _this.state = { visible: false };
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.handleBeforeComponentUpdate(this.props);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleComponentUpdate(this.props, this.state);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this.handleComponentUpdate(prevProps, prevState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.setBodyOverflowVisible(true);
    }
  }, {
    key: 'handleBeforeComponentUpdate',
    value: function handleBeforeComponentUpdate(props) {
      if (props.hasOwnProperty('visible') && props.visible !== this.state.visible) {
        this.setState({ visible: props.visible });
      }
    }
  }, {
    key: 'handleComponentUpdate',
    value: function handleComponentUpdate(prevProps, prevState) {
      if (prevState.visible !== this.state.visible) {
        if (this.state.visible) {
          this.props.onShow && this.props.onShow();
        } else {
          this.props.onHide && this.props.onHide();
        }
        this.setBodyOverflowVisible(!this.state.visible);
      }
    }
  }, {
    key: 'setBodyOverflowVisible',
    value: function setBodyOverflowVisible(visible) {
      if (!visible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }, {
    key: 'handleCloseBtnClick',
    value: function handleCloseBtnClick(e) {
      e.preventDefault();
      e.stopPropagation();
      this.toggleVisibility();
    }
  }, {
    key: 'handleOverlayClick',
    value: function handleOverlayClick(e) {
      if (e.target === _reactDom2.default.findDOMNode(this.refs.overlay) && this.props.closable) {
        e.preventDefault();
        e.stopPropagation();
        this.toggleVisibility();
      }
    }
  }, {
    key: 'toggleVisibility',
    value: function toggleVisibility() {
      var visible = !this.state.visible;
      this.setState({ visible: visible });
    }
  }, {
    key: 'show',
    value: function show() {
      this.setState({ visible: true });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.setState({ visible: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var visible = this.state.visible;

      var closeBtn = _react2.default.createElement(
        'div',
        { className: 'overlay-top' },
        _react2.default.createElement(
          'div',
          { className: 'overlay-close', title: 'Close',
            onClick: this.handleCloseBtnClick.bind(this) },
          '×'
        )
      );
      if (this.props.closable === false) {
        closeBtn = _react2.default.createElement('div', null);
      }
      var closeClass = 'overlay ' + (visible ? '' : ' hidden');

      return _react2.default.createElement(
        'div',
        { ref: 'overlay', className: closeClass,
          onClick: this.handleOverlayClick.bind(this) },
        closeBtn,
        _react2.default.createElement(
          'div',
          { className: 'overlay-content' },
          this.props.children
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

exports.default = Modal;