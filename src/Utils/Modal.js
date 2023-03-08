import React from "react";

const Modal = ({ img, title, desc, Chain, page, Created, hide }) => {
  let modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };

  return (
    <div className="modal show fade " style={modalStyle}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Created {title} on {Created}
            </h5>
            <button type="button" className="btn-close" onClick={hide}></button>
          </div>
          <div className="modal-body">
            <img src={img} className="img-fluid" />
            <p>{desc}</p>
          </div>
          <div className="modal-footer">
            <a href={page}>
              {" "}
              <button type="button" className="bth bth" onClick={hide}>
                Purchase here
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
