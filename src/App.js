import React, { useState, useRef } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [hex, setHex] = useState("");
  const [colors, setColors] = useState(new Values("#32fb55").all(10)); //100%/10
  const [err, setError] = useState(false);

  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus(setHex("#"));
  }

  function handleChange(event) {
    setHex(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      let colorValues = new Values(hex).all(10);
      setError(false);
      setColors(colorValues);
      console.log(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  }

  const cards = colors.map((x, index) => (
    <SingleColor key={index} {...x} index={index} />
  ));

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className={err ? "error" : null} //cannot use && for classname
            type={"text"}
            onChange={handleChange}
            onFocus={handleFocus}
            value={hex}
            placeholder={"e.g #32fb55"}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <main className="colors">{cards}</main>
    </>
  );
}

export default App;
