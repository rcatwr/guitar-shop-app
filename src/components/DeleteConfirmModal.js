import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { toggleDeleteOrderModal } from "../redux/modalDisplaySlice";
import { deleteOrder } from "../redux/orderSlice";

const DeleteConfirmModal = ({
  orderConfirmDelete,
  orderStatusUpdate,
  setConfirmDeleteModalShow,
}) => {
  const dispatch = useDispatch();
  return (
    <Modal>
      {/* put the notification into its own component -- and get it out of the main app */}
      <div className="notification">
        <button
          className="delete"
          onClick={() => dispatch(toggleDeleteOrderModal())}
        ></button>
        <p className>Are you sure you want to delete: </p>
        <p className="is-size-4 mb-5">
          <span className="fredoka">{orderConfirmDelete.itemDescription}</span>
          <span className="tag is-large is-darker is-link is-pulled-right">
            # {orderConfirmDelete.orderId}
          </span>
        </p>
        <button
          id="deleted"
          onClick={(e) => {
            dispatch(toggleDeleteOrderModal());
            dispatch(deleteOrder(orderConfirmDelete.orderId));
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
