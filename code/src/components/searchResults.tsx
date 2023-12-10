// components/searchResults.tsx
export default function SearchResults({ results }) {
    return (
      <div>
        {results.map((farm, index) => (
          <div key={index}>
            <h2>{farm.FarmName}</h2>
            {/* Render other details */}
          </div>
        ))}
      </div>
    );
  }
  