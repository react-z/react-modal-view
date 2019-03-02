import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Modal extends React.Component {

  static get defaultProps () {
    return {
      type: 'notice',
      message: null
    }
  }

  constructor(props) {
    super()
    this.state = { visible: false }
  }

  componentWillMount() {
    this.handleBeforeComponentUpdate(this.props)
  }

  componentDidMount() {
    this.handleComponentUpdate(this.props, this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleComponentUpdate(prevProps, prevState)
  }

  componentWillUnmount() {
    this.setBodyOverflowVisible(true)
  }

  handleBeforeComponentUpdate(props) {
    if (props.hasOwnProperty('visible') && props.visible !== this.state.visible) {
      this.setState({ visible: props.visible });
    }
  }

  handleComponentUpdate(prevProps, prevState) {
    if (prevState.visible !== this.state.visible) {
      if (this.state.visible) {
        this.props.onShow &&
          this.props.onShow()
      } else {
        this.props.onHide &&
          this.props.onHide()
      }
      this.setBodyOverflowVisible(!this.state.visible);
    }
  }

  setBodyOverflowVisible(visible) {
    if (!visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  handleCloseBtnClick(e) {
    e.preventDefault()
    e.stopPropagation()
    this.toggleVisibility()
  }

  handleOverlayClick(e) {
    if (e.target === ReactDOM.findDOMNode(this.refs.overlay) && this.props.closable) {
      e.preventDefault()
      e.stopPropagation()
      this.toggleVisibility()
    }
  }

  toggleVisibility() {
    var visible = !this.state.visible
    this.setState({ visible: visible })
  }

  show() {
    this.setState({ visible: true })
  }

  hide() {
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state
    let closeBtn = (
      <ModalTop>
        <ModalClose onClick={this.handleCloseBtnClick.bind(this)}>
          &times;
        </ModalClose>
      </ModalTop>
    )
    if (this.props.closable === false) {
      closeBtn = (<div></div>)
    }
    let closeClass = `overlay ${visible ? '' : ' hidden'}`

    return (
      <ModalWrapper ref='overlay' visible={visible} onClick={this.handleOverlayClick.bind(this)}>
        {closeBtn}
        <ModalContent>
          {this.props.children}
        </ModalContent>
      </ModalWrapper>
    )
  }
}

const ModalWrapper = styled.div`
  opacity: ${props => props.visible ? 1 : 0};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  z-index: 100;
`

const ModalTop = styled.div`
  margin: 5% auto;
  position: relative;
  top: 5rem;
  max-width: 90%;
`
const ModalContent = styled.div`
  background-color: #fff;
  box-shadow: 0.1rem 0.1rem 3rem rgba(0, 0, 0, 0.25);
  margin-bottom: 4%;
  margin: 0 auto;
  padding: 22px 30px;
  position: relative;
  top: 5rem;
  max-width: 90%;
`

const ModalClose = styled.div`
  box-sizing: content-box;
  position: absolute;
  top: 15px;
  right: 0px;
  cursor: pointer;
  z-index: 100;
  padding: 0;
  font-size: 30px;
  line-height: 1em;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
`
