import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("http://localhost:80/index.php", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        // throw new Error("Request failed");
      }

      const data = await response.text();
      setResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div className="App">
        <form
            action="http://localhost:80/index.php"
            method="post"
            onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name: </label>
          <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        <h1>{result}</h1>
      </div>
  );
}

export default App;