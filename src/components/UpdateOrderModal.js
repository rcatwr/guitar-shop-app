import Form from "./Form";
import Modal from "./Modal";

const UpdateOrderModal = ({
  orderToUpdate,
  updateOrderModal,
  formSubmitted,
}) => {
  return (
    <Modal>
      <Form
        orderToUpdate={orderToUpdate}
        updateOrderModal={updateOrderModal}
        formSubmitted={formSubmitted}
      />
    </Modal>
  );
};

export default UpdateOrderModal;
