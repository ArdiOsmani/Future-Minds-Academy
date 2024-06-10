import React, { useState } from 'react';
import './hooks.css'

function CounterH() {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    } 
    const decrement = () => setCount(count - 1);

    return (
        <div className='hooksbody'>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default CounterH;