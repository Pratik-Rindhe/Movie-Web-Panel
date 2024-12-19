import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Something went wrong!</h2>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Error;
