import React, { useState } from "react";

const Work = () => {
  const [input, setInput] = useState("");
  const [fileData, setFileData] = useState("");

  // ✍️ WRITE handler
  const handleWrite = async () => {
    try {
      const res = await fetch("http://localhost:5000/write", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input }),
      });

      const data = await res.json();
      alert("✅ File written successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Error writing file");
    }
  };

  // 📖 READ handler
  const handleRead = async () => {
    try {
      const res = await fetch("http://localhost:5000/read");
      const data = await res.json();
      setFileData(data.data);
    } catch (err) {
      console.error(err);
      alert("❌ Error reading file");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>💼 Work Page</h1>

      <input
        type="text"
        placeholder="Enter text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={handleWrite} style={{ marginRight: "10px" }}>
        Write
      </button>

      <button onClick={handleRead}>Read</button>

      <div style={{ marginTop: "20px" }}>
        <h3>📂 File Content:</h3>
        <p>{fileData}</p>
      </div>
    </div>
  );
};

export default Work;
