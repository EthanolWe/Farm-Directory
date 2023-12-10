import { sql } from '@vercel/postgres';

export async function getAllFarmsData() {
  try {
    const { rows } = await sql`
      SELECT FarmName, Farm_Street_Address, Farm_State, Private_Contact_Info, Public_Contact_Info
      FROM Farms;
    `;
    console.log('Farms Data:', rows); // Print the fetched data to the console
    return rows;
  } catch (error) {
    console.error('Error fetching farms data:', error);
    throw error;
  }
};
