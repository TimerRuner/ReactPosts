import React from "react";

const Modal = ({ visible, setModal, children }) => {
  const modal = ['modal']

  if(visible){
    modal.push('_active')
  } 

  return(
    <div className={modal.join(' ')} onClick={() => setModal(false)}>
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header" style={{display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
              <h5 className="modal-title">Add post</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModal(false)}></button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal;