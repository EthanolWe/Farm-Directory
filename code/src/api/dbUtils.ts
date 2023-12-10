'use server'
//use server not needed just a double make sure this runs on server and not client

import { sql } from '@vercel/postgres'

export async function getAllFarmsData(searchResult: string) {
  try {
    const { rows } = await sql`
      SELECT FarmName, Farm_Street_Address, Farm_State, Private_Contact_Info, Public_Contact_Info
      FROM Farms Where Farm_State =${searchResult};
    `
    return rows
  } catch (error) {
    console.error('Error fetching farms data:', error)
    throw error
  }
}
