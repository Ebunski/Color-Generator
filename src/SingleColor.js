import React, { useState, useEffect } from "react";
import { HiClipboardCopy } from "react-icons/hi";
import rgbToHex from "./utils";

const SingleColor = (props) => {
  const [alert, setAlert] = useState(false);
  const rgb = props.rgb;
  const hex = rgbToHex(...rgb);

  const style = {
    backgroundColor: hex,
  };

  function handleCopy() {
    navigator.clipboard.writeText(hex);
    console.log(navigator);
    setAlert(true);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color  ${props.index > 10 ? "color-light" : null} `}
      style={style}
    >
      <p className="percent-value">{`${props.weight}%`}</p>
      <p className="color-value">{hex}</p>

      {alert && <span>Copied!</span>}
      <button onClick={handleCopy} className="copy">
        <HiClipboardCopy />
      </button>
    </article>
  );
};

export default SingleColor;
