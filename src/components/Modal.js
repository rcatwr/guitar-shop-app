import React from 'react';
import NewOrder from './NewOrder'

const Modal = () => {
    

    return(
    <div class={`modal is-active`}>
      <div class="modal-background"></div>
      <div class="modal-content">
          <NewOrder />
      </div>
    </div>

    )
}

export default Modal;