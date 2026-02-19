import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("Click a button to view OS info");

  const fetchData = async (endpoint) => {
    try {
      const res = await fetch(`http://localhost:5000/api/${endpoint}`);
      const result = await res.json();

      // ✅ show clean values (not full object)
      if (endpoint === "userinfo") {
        setData(`User: ${result.username}`);
      } else if (endpoint === "totalmem") {
        setData(`Total Memory: ${(result.totalMemory / 1e9).toFixed(2)} GB`);
      } else if (endpoint === "freemem") {
        setData(`Free Memory: ${(result.freeMemory / 1e9).toFixed(2)} GB`);
      } else if (endpoint === "arch") {
        setData(`CPU Architecture: ${result.architecture}`);
      }
    } catch (err) {
      console.error(err);
      setData("❌ Error fetching data");
    }
  };

  return (
    <div className="container">
      <h1 className="title">WORK WITH OS</h1>

      <div className="button-grid">
        <button onClick={() => fetchData("userinfo")}>USER INFO</button>
        <button onClick={() => fetchData("totalmem")}>TOTAL MEMORY</button>
        <button onClick={() => fetchData("freemem")}>FREE MEMORY</button>
        <button onClick={() => fetchData("arch")}>CPU ARCHITECTURE</button>
      </div>

      <div className="card">
        <p>{data}</p>
      </div>
    </div>
  );
}

export default App;
