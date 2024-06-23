import React, { useState } from "react";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
      </button>
      {isVisible && <p>This is the text that gets toggled.</p>}
    </div>
  );
}

export default ToggleText;
