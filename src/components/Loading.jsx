import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Customize your loading indicator here */}
      <div className="loader">Loading...</div>
      <style jsx>{`
        .loader {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: #09f;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
