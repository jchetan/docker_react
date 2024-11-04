import { useState, useEffect } from 'react'

function App() {
  
  useEffect(
    () => {
      const fetchApi = async () => {
        const response = await fetch('/api');
        const json = await response.json();
        if (response.ok) {
          console.log(json);
        }
      }
      fetchApi();
    },
    []
  );

  return (
    <div>
      Hello World
    </div>
  );
}

export default App;
