import React, { useEffect } from "react";

function SimpleCursor() {
  useEffect(() => {
    // Show default arrow cursor
    document.body.style.cursor = "default";

    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  return null; // No custom cursor element needed
}

export default SimpleCursor;
