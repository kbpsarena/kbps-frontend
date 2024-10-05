// import React from 'react';
// import './Loading.css'; // Import the CSS file

// const LoadingScreen = () => {
//   return (
//     <div className="loading-container">
//       <h1 className="loading-text">Your App Name</h1>
//     </div>
//   );
// };

// export default LoadingScreen;

import React from 'react';
import './Loading.css'; // Import the CSS file

const FlyingLettersScreen = () => {
  const appName = "Loading...";

  return (
    <div className="flying-container">
      {appName.split("").map((letter, index) => (
        <span key={index} className="flying-letter" style={{ animationDelay: `${index * 0.1}s` }}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default FlyingLettersScreen;
