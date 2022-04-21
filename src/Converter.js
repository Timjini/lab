import React, {useState,useEffect} from 'react';



export default function Converter (){

    const [km, setKm] = useState(0);

    function handleChange(e){
        setKm(e.target.value);
    }

    function converter(km){
        return (km/1.609).toFixed(2);
    }

    return(

        <div className="hero-image">
            <div className="hero-text">
                <h1> {km} km is {converter(km)} miles</h1>
                <input className='converter-input' type="text" value={km} onChange={handleChange} />
            </div>
        </div>
    )

}