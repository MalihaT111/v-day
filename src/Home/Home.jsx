import React, { useState } from "react"; // Import useState from react
import './Home.css';
import letter from './letter.gif'; // Import the GIF file
import { Beval } from './Beval'; // Assuming 'Valentine' is a React component

const Home = () => {
    const [Show, Set] = useState(false);

    const handleClick = () => {
        Set(true);
    };

    return(
        <div className="home">
            {Show ? (
                <Beval /> 
            ) : (
                <img 
                    src={letter} 
                    alt="GIF" 
                    onClick={handleClick} 
                    style={{ width: '600px', height: 'auto' }} 
                />
            )}
        </div>
    );
}

export { Home };
