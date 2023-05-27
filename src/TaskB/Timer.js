

import React, { useState, useEffect } from 'react';

function Time() {
  const [count, setCountTime] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
        if(count > 0)
        {
            setCountTime(count-1);
        }
      
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  <button>Countdown</button>

  return (
    <div>
      <h1>Timer</h1>
      <h2>{count}</h2>
      <p></p>
    </div>
  );
}

export default Time;