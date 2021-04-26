import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleDeleteOrderModal } from "../redux/modalDisplaySlice";
import { deleteOrder } from "../redux/orderSlice";

const DeleteConfirmModal = () => {
  const order = useSelector((state) => state.modals.deleteOrder.order);
  const dispatch = useDispatch();
  return (
    <Modal>
      <div className="notification">
        <button
          className="delete"
          onClick={() => dispatch(toggleDeleteOrderModal())}
        ></button>
        <p className>Are you sure you want to delete: </p>
        <p className="is-size-4 mb-5">
          <span className="fredoka">{order.itemDescription}</span>
          <span className="tag is-large is-darker is-link is-pulled-right">
            # {order.orderId}
          </span>
        </p>
        <button
          id="deleted"
          onClick={(e) => {
            dispatch(toggleDeleteOrderModal());
            dispatch(deleteOrder(order.orderId));
          }}
          className="button is-danger is-small is-dark"
        >
          Delete
        </button>{" "}
        <button
          className="button is-primary is-small is-light"
          onClick={() => dispatch(toggleDeleteOrderModal())}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmModal;
