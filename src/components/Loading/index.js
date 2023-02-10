import React, { useState, useEffect } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <p>Content Loaded</p>
        </div>
      )}
    </div>
  );
};

export default Loading;