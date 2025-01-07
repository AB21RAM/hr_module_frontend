import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    localStorage.clear();

    setShouldRedirect(true);
  }, []);

  if (shouldRedirect) {
    return <Navigate to="/" />;
  }

  return null;
};

export default Logout;
