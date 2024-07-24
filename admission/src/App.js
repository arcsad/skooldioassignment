import React, { useEffect, useState } from 'react';
import Card from './Card';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="p-4">
      {data.length > 0 ? (
        data.map((department) => <Card key={department.id} data={department} />)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
