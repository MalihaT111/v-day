import React, { useState } from 'react';
import './Coupon.css';
import womp from './womp.gif';
import dabloons from './dabloons.gif';
import date from './date.gif';
import hugs from './hugs.gif';

const Coupon = () => {
  const [prize, setPrize] = useState(null);
  const [claimed, setClaimed] = useState(false);
  const [showGif, setShowGif] = useState(false);

  // Mapping each prize option to its corresponding GIF
  const prizeGifs = {
    'i take u out :3 (u choose place)': date,
    'womp womp': womp,
    'unlimited hugs n kisses': hugs,
    'four dabloons': dabloons
  };

  const spinWheel = () => {
    const options = Object.keys(prizeGifs); // Get all option keys from the prizeGifs object
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedPrize = options[randomIndex];
    setPrize(selectedPrize);
  };

  const claimPrize = () => {
    setClaimed(true);

      setShowGif(true);
    
  };

  return (
    <div className="d">
      <div className="directions">Click to spin the wheel to see what prize you won &lt;3</div>
      <div className="spin-the-wheel">
        <label>
          <input type="radio" onClick={spinWheel} disabled={prize !== null || claimed} />
          <div className="clicker"></div>
          <div className="wheel">
            {Object.keys(prizeGifs).map((option, index) => (
              <div key={index} className={`option o${index + 1}`}>{option}</div>
            ))}
          </div>
          {!showGif && prize && !claimed && (
            <button className="message" onClick={claimPrize}>
              {prize}
            </button>
          )}
          {showGif && (
            <img className="img" src={prizeGifs[prize]} alt={`${prize} GIF`} />
          )}
        </label>
      </div>
    </div>
  );
};

export { Coupon };
