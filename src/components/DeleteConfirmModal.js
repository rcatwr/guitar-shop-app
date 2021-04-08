import Modal from "./Modal";

const DeleteConfirmModal = ({
  orderConfirmDelete,
  orderStatusUpdate,
  setConfirmDeleteModalShow,
}) => {
  return (
    <Modal>
      {/* put the notification into its own component -- and get it out of the main app */}
      <div className="notification">
        <button
          className="delete"
          onClick={() => setConfirmDeleteModalShow(false)}
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
          onClick={(e) =>
            orderStatusUpdate(orderConfirmDelete.orderId, e.target.id)
          }
          className="button is-danger is-small is-dark"
        >
          Delete
        </button>{" "}
        <button
          className="button is-primary is-small is-light"
          onClick={() => setConfirmDeleteModalShow(false)}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmModal;
