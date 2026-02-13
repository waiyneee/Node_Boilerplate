import React from "react";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to the home page.</p>

      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Surfer at sunset"
        style={{
          width: "100%",
          maxWidth: "600px",
          marginTop: "20px",
          borderRadius: "12px",
        }}
      />
    </div>
  );
};

export default Home;
