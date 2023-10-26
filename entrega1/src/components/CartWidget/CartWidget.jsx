import React from 'react';
import { BiCartDownload } from "react-icons/bi";
import '../CartWidget/cartwidget.css';


const CartWidget = () => {
    return (
        <div className='car'>
            <BiCartDownload/>
            <p>0</p>
            
        </div>
    );
};

export default CartWidget;