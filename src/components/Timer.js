import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} mins ${secs} secs`;
  };

  return (
    <div className="timer-container" style={{ textAlign: 'center', padding: '20px' }}>
      <h1><strong>Timer</strong></h1>
      <h1>{formatTime()}</h1>
      
      <div>
        <button
          onClick={() => setIsActive(true)}
          style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', marginRight: '10px', fontSize: '16px' }}
        >
          Start
        </button>

        <button
          onClick={() => setIsActive(false)}
          style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', marginRight: '10px', fontSize: '16px' }}
        >
          Stop
        </button>

        <button
          onClick={resetTimer}
          style={{ backgroundColor: 'yellow', padding: '10px 20px', fontSize: '16px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
