import React from "react";
import "./Loader.css";
function Loading() {
  return (
    <>
      <div className="loader d-flex justify-content-center">
        <div className="spinner-border spinner-color"  role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </>
  );
}

export default Loading;
