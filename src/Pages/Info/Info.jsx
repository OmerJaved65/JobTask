import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Info.css';



const Info = () => {
    const [Date, setDate] = useState("");
    const [OrderType, setOrderType] = useState("");
    const [Country, setCountry] = useState("");
    const dispatch = useDispatch();
    const InfoTime = useSelector((state) => state.InfoTime);
    const { Info } = InfoTime;
    
    const HandleClick=()=>{
      


    }
    

    return (
        <div className="Main-div">
            <label>Order Delivery System By Time</label>
            <input
                type="date"
                value={Date}
                onChange={e => { setDate(e.target.value) }}
                className="input-fields"
            />
           <p>Country </p>
            <select
            //  className="select-fields"
            value={Country}
            onChange={option=>setCountry(option.target.value)}
            >
                <option value="pakistan">pakistan</option>
                <option value="UAE">UAE</option>
               
            </select>
            <p>Order Type </p>
            <select  
            // className="select-fields"
            value={OrderType}
            onChange={option=>setOrderType(option.target.value)}
            >
                <option value="Urgent">Urgent</option>
                <option value="Normal">Normal</option>
               
            </select>
            <br/>
            <br/>
            <button
            onClick={HandleClick}
            >
                Submit
            </button>

        </div>
    )
}
export default Info;