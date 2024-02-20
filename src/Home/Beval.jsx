import React, { useState } from "react"; // Import useState from react
import './Home.css';
import aw from './aw.gif'; // Import the GIF file
import sailor from './sailor.gif'; // Import the GIF file
const Beval = () => {
    var scale = 1;
    const [clicked, setClicked] = useState(false); // State to track click
    const [answer, setAnswer] = useState(""); // State to track the answer
    const [scaleFactor, setScaleFactor] = useState(1); // Initialize scale factor to 1

    const handleAnswer = (response) => {
        if (response === "No")
        {
            setAnswer("No");
            setScaleFactor(scaleFactor * 1.2); // Increase scale factor
            setClicked(true); // Enlarge the "Yes" button
            window.scrollBy({ 
                top: 25, // Adjust the value as needed
                behavior: 'smooth'
            });
        }
        else if (response === "Yes")
        {
            setAnswer("Yes");
            setScaleFactor(1);
            window.scrollBy({ 
                top: 0, // Adjust the value as needed
                behavior: 'smooth'
            });
            
        }
    }
    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <div className="valentine">
        <div className="stuff" style={{ marginBottom: `${scaleFactor * 10}px` }}>
            <img 
                src={answer === "Yes" ? sailor : aw} 
                alt="GIF" 
                style={{ width: '500px', height: 'auto', cursor: 'pointer', padding: '20px'}} 
            /> 
            <div 
                className="question" 
                style={{ color: clicked ? '#e51d1d' : '#ffd4d4', marginBottom: `${scaleFactor * 10}px` }}
                onClick={handleClick} 
            >
                {answer === "Yes" ? "THANK YOU, I LOVE YOU <3333" : "Will you be my valentine?"}
            </div>
        </div>
        {answer !== "Yes" && (
        <div className="button-container" style ={{
             padding: `${scaleFactor * 10}px` // Adjust the multiplier as needed
            }}>

        <div className="yesc" style={{ transform: answer === "No" ? `scale(${scaleFactor})` : `scale(${scaleFactor})`, 
                                    marginRight: answer === "No" ? `${scaleFactor}` : '20px', 
                                    fontSize: answer === "No" ? `${scaleFactor}` : '20px'
                                    }}>
                <div id='heart' class='yes' onClick={() => handleAnswer("Yes")}>
                    YES
                </div>
            </div>
            <div className="noc" style={{ marginLeft: `${scaleFactor}px`}}>
                <div id='heart' class='no' onClick={() => handleAnswer("No")}>
                    NO
                </div>
            </div>
        </div>
         )}
        </div>
    );
}
export { Beval };