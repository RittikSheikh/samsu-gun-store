import { logDOM } from '@testing-library/react';
import React from 'react';
import './Modal.css';

const Modal = ({gun,gunDetails}) => {
    console.log(gun)
    return (
        <div>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" onClick={()=>gunDetails(null)} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <img className='w-52' src={gun.img} alt="" />
    <h3 className="text-lg font-bold">{gun.name}</h3>
    <p className="py-4">{gun.price}</p>
  </div>
</div>
        </div>
    );
};

export default Modal;