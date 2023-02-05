import React, { useEffect, useState } from 'react';
import './AllGun.css';
import Gun from './Gun/Gun';

const AllGun = ({count,price}) => {
    const [guns,setGuns] = useState([])

    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        .then(res=>res.json())
        .then(data=>setGuns(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] mx-auto my-10'>
            {
                guns.map(gun=><Gun gun={gun} count={count} key={gun.id} prices={price}></Gun>)
            }
        </div>
    );
};

export default AllGun;