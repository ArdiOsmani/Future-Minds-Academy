import React, { useState } from 'react';
import './hooks.css'

function ToggleH() {
    const [isVisible, setIsVisible] = useState(true);

    const toggle = () => setIsVisible(!isVisible);

    return (
        <div className='hooksbody'>
            <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'} Text</button>
            {isVisible && <p>This is a toggled text.</p>}
        </div>
    );
}

export default ToggleH;