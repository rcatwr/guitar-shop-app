import React from 'react';
import Form from './Form'

const Modal = (props) => {
    

    return(
    <div class={`modal is-active`}>
      <div class="modal-background"></div>
      <div class="modal-content">
          {props.children}
      </div>
    </div>

    )
}

export default Modal;