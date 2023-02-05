import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import './Gun.css';

const Gun = ({gun,count}) => {
    const [modal,setModal] = useState({});
    const {name,img,bullet,capacity,action,price,category} = gun;
    return (
        <>
                        <div className="card w-full h-full bg-base-100 shadow-xl">
            <figure><img className='w-96 h-80 rounded' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
                </div>
                <div className='mt-5'>
                <button onClick={()=>count()} className="btn btn-sm mr-5 btn-warning">Add To Cart</button>
                <label onClick={()=>setModal(gun)} htmlFor="my-modal-3" className="btn btn-sm ">Details</label>
                </div>
            </div>
            {
                modal && (
                    <Modal gun={modal} gunDetails={setModal} ></Modal>
                )
            }
            </div>
        </>
    );
};

export default Gun;