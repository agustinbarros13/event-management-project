import React, { useState, useEffect } from 'react';
import Loading from '@/components/Loading.jsx';

export default function Favorites() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>My Favorite Events</h1>
          <p>Coming soon...</p>
        </>
      )}
    </main>
  );
}
