import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.module';

class Modal extends Component {
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeydown);
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeydown);
	}

	handleKeydown = (e) => {
		if(e.code === "Escape") {
			this.props.onClose();
		}
	}

	handleBackdropClick = (e) => {
		if (e.target.value === e.currentTarget.value) {
			this.props.onClose();
		}
	}

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalWindow>{this.props.children}
        </ModalWindow>
      </Overlay>
    );
  }
}

export default Modal;
