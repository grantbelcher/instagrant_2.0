import React, { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

export default function useWindowDimensions() {
  const [deviceType, setDeviceType] = useState(
    getWindowDimensions() > 720 ? "desktop" : "mobile"
  );
  useEffect(() => {
    function handleResize() {
      const screenWidth = getWindowDimensions();
      console.log("fuck!!!!");
      if (screenWidth > 720 && deviceType === "mobile") {
        setDeviceType("desktop");
      }
      if (screenWidth < 720 && deviceType === "desktop") {
        setDeviceType("mobile");
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [deviceType]);

  return deviceType;
}
