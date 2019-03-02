"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: content-box;\n  position: absolute;\n  top: 15px;\n  right: 0px;\n  cursor: pointer;\n  z-index: 100;\n  padding: 0;\n  font-size: 30px;\n  line-height: 1em;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: #fff;\n  box-shadow: 0.1rem 0.1rem 3rem rgba(0, 0, 0, 0.25);\n  margin-bottom: 4%;\n  margin: 0 auto;\n  padding: 22px 30px;\n  position: relative;\n  top: 5rem;\n  max-width: 90%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 5% auto;\n  position: relative;\n  top: 5rem;\n  max-width: 90%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  opacity: ", ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: auto;\n  z-index: 100;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  _createClass(Modal, null, [{
    key: "defaultProps",
    get: function get() {
      return {
        type: 'notice',
        message: null
      };
    }
  }]);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this));
    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.handleBeforeComponentUpdate(this.props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleComponentUpdate(this.props, this.state);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.handleComponentUpdate(prevProps, prevState);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setBodyOverflowVisible(true);
    }
  }, {
    key: "handleBeforeComponentUpdate",
    value: function handleBeforeComponentUpdate(props) {
      if (props.hasOwnProperty('visible') && props.visible !== this.state.visible) {
        this.setState({
          visible: props.visible
        });
      }
    }
  }, {
    key: "handleComponentUpdate",
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
    key: "setBodyOverflowVisible",
    value: function setBodyOverflowVisible(visible) {
      if (!visible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }, {
    key: "handleCloseBtnClick",
    value: function handleCloseBtnClick(e) {
      e.preventDefault();
      e.stopPropagation();
      this.toggleVisibility();
    }
  }, {
    key: "handleOverlayClick",
    value: function handleOverlayClick(e) {
      if (e.target === _reactDom.default.findDOMNode(this.refs.overlay) && this.props.closable) {
        e.preventDefault();
        e.stopPropagation();
        this.toggleVisibility();
      }
    }
  }, {
    key: "toggleVisibility",
    value: function toggleVisibility() {
      var visible = !this.state.visible;
      this.setState({
        visible: visible
      });
    }
  }, {
    key: "show",
    value: function show() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      this.setState({
        visible: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var visible = this.state.visible;

      var closeBtn = _react.default.createElement(ModalTop, null, _react.default.createElement(ModalClose, {
        onClick: this.handleCloseBtnClick.bind(this)
      }, "\xD7"));

      if (this.props.closable === false) {
        closeBtn = _react.default.createElement("div", null);
      }

      var closeClass = "overlay ".concat(visible ? '' : ' hidden');
      return _react.default.createElement(ModalWrapper, {
        ref: "overlay",
        visible: visible,
        onClick: this.handleOverlayClick.bind(this)
      }, closeBtn, _react.default.createElement(ModalContent, null, this.props.children));
    }
  }]);

  return Modal;
}(_react.default.Component);

exports.default = Modal;

var ModalWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.visible ? 1 : 0;
});

var ModalTop = _styledComponents.default.div(_templateObject2());

var ModalContent = _styledComponents.default.div(_templateObject3());

var ModalClose = _styledComponents.default.div(_templateObject4());