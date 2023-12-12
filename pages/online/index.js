import React, { useEffect, useState } from "react";

const OnlineOfflinePage = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      <h1>{isOnline ? "Online" : "Offline"}</h1>
      {isOnline ? (
        <p>You are currently online and can view content.</p>
      ) : (
        <p>You are currently offline. Please check your internet connection.</p>
      )}
    </div>
  );
};

export default OnlineOfflinePage;
