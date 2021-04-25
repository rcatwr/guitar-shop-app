const EmptyOrderPage = ({ status }) => {
  return (
    <div className="box is-justify-content-center is-flex p-5">
      <p className="is-size-4 fredoka">
        <i className="fas fa-hand-point-right has-text-info"></i> There are no{" "}
        {status} orders found!
      </p>
    </div>
  );
};

export default EmptyOrderPage;
