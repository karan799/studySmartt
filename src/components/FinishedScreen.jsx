import React from 'react';

export default function FinishedScreen({category ,ans,categor, points, maxPossiblePoints, dispatch, setHeaderHidden }) {
  const percentage = (points / maxPossiblePoints) * 100;
  console.log("fin");

  const handleGoToChatbot = () => {
    // Dispatch an action to change the status to 'search'
    dispatch({ type: 'search' });
    // Call setHeaderHidden to hide the header
    setHeaderHidden(false);

  };

  return (
    <>
    <p className='result'>
      <button onClick={handleGoToChatbot}>Go to chatbot</button>
      
    </p>
    <p>your category is {category}{categor}{ans}</p>
    </>
  );
}
