import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  const fetchData = async (endpoint) => {
    try {
      const res = await fetch(`http://localhost:5000/api/${endpoint}`);
      const result = await res.json();
      setData(JSON.stringify(result, null, 2));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>WORK WITH OS</h1>

      <button onClick={() => fetchData("userinfo")}>
        USER INFO
      </button>

      <button onClick={() => fetchData("totalmem")}>
        TOTAL MEMORY
      </button>

      <button onClick={() => fetchData("freemem")}>
        FREE MEMORY
      </button>

      <button onClick={() => fetchData("arch")}>
        CPU ARCHITECTURE
      </button>

      <pre>{data}</pre>
    </>
  );
}

export default App;
