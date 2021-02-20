import React from 'react';
import Form from './Form'

const Modal = () => {
    

    return(
    <div class={`modal is-active`}>
      <div class="modal-background"></div>
      <div class="modal-content">
          <Form />
      </div>
    </div>

    )
}

export default Modal;