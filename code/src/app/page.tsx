/*import LandingSearchForm from './components/landingSearchForm'

export default function Home() {
  return (
    <>
      <main className="flex items-center h-screen">
        <div className="mx-auto">
          <LandingSearchForm />
        </div>
      </main>
    </>
  )
}*/

// Import necessary modules
import React, { useEffect, useState } from 'react';
import { getAllFarmsData } from '../../pages/api/dbUtils'; // Adjust the path as needed

// Define the Home component
export default function Home() {
  const [farms, setFarms] = useState([]);

  // Fetch data from the database when the component mounts
  useEffect(() => {
    // Call the function to get farm data and update the state
    getAllFarmsData().then(data => setFarms(data));
  }, []);

  return (
    <>
      <main className="flex items-center h-screen">
        <div className="mx-auto">
          <div>
            {farms.length > 0 ? (
              farms.map(farm => (
                <div key={farm.FarmName}>
                  <p>Farm Name: {farm.FarmName}</p>
                </div>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
