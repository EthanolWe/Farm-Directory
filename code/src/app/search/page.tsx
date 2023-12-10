export default function Home({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const searchResult = searchParams['s']

  return (
    <main className="flex items-center justify-center h-screen">
      <p>Showing results for: {searchResult || 'No results found'}</p>
    </main>
  )
}