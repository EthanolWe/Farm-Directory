import { getAllFarmsData } from '@/api/dbUtils'

//Nextjs uses server components so we don't need use effect
//we can use async await react components
export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const searchResult = searchParams['s'] as string

  //Now we can just await the call, this is helpful later cause while we await this
  //the component won't load and we can add a loading component so the user doesn't just
  //see a blank screen
  const farms = await getAllFarmsData(searchResult)
  //log farms to see the output stucture

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <p className="mt-4">
        Showing results for: {searchResult || 'No results found'}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {farms.map((farm, index) => (
          <div key={index} className="bg-gray-200 p-4 mb-4 rounded-md">
            <p className="text-lg font-semibold">Farm Name: {farm.farmname}</p>
            <p className="text-gray-700">Address: {farm.farm_street_address}</p>
            <p className="text-gray-700">State: {farm.farm_state}</p>
            <p className="text-blue-500">
              Contact Info: {farm.public_contact_info}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
