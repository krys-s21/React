import React, { useState, useEffect } from 'react';

const query = `
query {
  allLifts{
    name
    elevationGain
    status
  }
}
`;

const opts = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query }),
};

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {elevationGain}
        {' '}
        {status}
      </p>
    </div>
  );
}
function GraphQL() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://snowtooth.moonhighway.com', opts)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  if (error) {
    return (
      <pre>
        Error:
        {' '}
        {JSON.stringify(error)}
      </pre>
    );
  }
  if (loading) return <h1>Loading...</h1>;
  if (!data) return null;
  return (
    <div>
      {data.data.allLifts.map((lift) => (
        <Lift
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
}

export default GraphQL;
