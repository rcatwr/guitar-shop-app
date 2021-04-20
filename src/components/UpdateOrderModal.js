import Form from "./Form";
import Modal from "./Modal";
import { useSelector } from "react-redux";

const UpdateOrderModal = ({
  orderToUpdate,
  updateOrderModal,
  formSubmitted,
}) => {
  const updateOrderDisplay = useSelector(
    (state) => state.modals.updateOrder.order
  );

  return (
    <Modal>
      <Form
        orderToUpdate={updateOrderDisplay}
        // updateOrderModal={updateOrderModal}
        //formSubmitted={formSubmitted}
      />
    </Modal>
  );
};

export default UpdateOrderModal;
