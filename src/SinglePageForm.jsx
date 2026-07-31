import React from "react";

const SinglePageForm = () => {

  const handleCange=()=>{
    
  }

  return (
    <div
      className="form-container"
      style={{ height: "100vh", width: "100vw", backgroundColor: "gray" }}
    >
      <form>
        <div className="form-field">
          <label>Username:</label>
          <input
            style={{
              background: "transparent",
              border: "2px solid black",
              margin: "20px",
              onChange={handleChnage}
            }}
          />
        </div>
        <div className="form-field">
          <label>Username:</label>
          <input
            style={{
              background: "transparent",
              border: "2px solid black",
              margin: "20px",
            }}
          />
        </div>
        <div className="form-field">
          <label>Username:</label>
          <input
            style={{
              background: "transparent",
              border: "2px solid black",
              margin: "20px",
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SinglePageForm;
