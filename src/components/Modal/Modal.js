import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.module';

function Modal(options) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

	return ()=> {
		window.removeEventListener('keydown', handleKeydown);
	}
  }, []);

  const handleKeydown = event => {
    console.log('click', event.code);
	console.log('modal', options);
    if (event.code === 'Escape') {
      options.onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      options.onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>{options.children}</ModalWindow>
    </Overlay>
  );
}

export default Modal;
