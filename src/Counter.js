import React,{useState, useEffect} from 'react'; 
import './App.css';



export default function Counter() {

    const [counter, setCounter] = useState(0)

    function increment(){
        setCounter (counter +1)
    }

    function decrement(){
        setCounter (counter -1)
    }

    return (
        <div className='counter'>
            <h1 className='counter-txt'>{counter}</h1>
            <button className='counter-btn' onClick={increment}>😘</button>
            <button className='counter-btn-' onClick={decrement}>😔</button>
        </div>
    )


}

