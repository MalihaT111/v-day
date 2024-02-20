import React, { useState } from "react"; // Import useState from react
import './Home.css';
import aw from './aw.gif'; // Import the GIF file

const Beval = () => {
    const [clicked, setClicked] = useState(false); // State to track click

    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <div className="valentine">
        <img 
            src={aw} 
            alt="GIF" 
            style={{ width: '600px', height: 'auto', cursor: 'pointer' }} 
        /> 
        <div 
            className="question" 
            style={{ color: clicked ? '#e51d1d' : '#ffd4d4' }}
            onClick={handleClick} 
        >
            Will you be my valentine?
        </div>

        <div id='heart' class='button'></div>
    </div>
    );
}
export { Beval };