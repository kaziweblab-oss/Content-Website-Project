import React from "react";

function Star() {
  return (
    <>
      <svg
        width="20"
        height="20"
        style={{ backgroundColor: "transparent" }}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="myGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#FC00FF", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#00DBDE", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#myGradient)"
          d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
        />
      </svg>
    </>
  );
}

export default Star;
