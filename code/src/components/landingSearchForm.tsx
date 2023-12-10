'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import React from 'react'

export default function LandingSearchForm() {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push(`/search?s=${searchInput}`)
  }

  return (
    <form onSubmit={handleSearchSubmit} className="w-72">
      <input
        className="border border-gray-300 p-2 rounded-md w-full"
        type="text"
        placeholder="Search By Address or Location"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[rgb(107,168,79)] text-white px-4 py-2 rounded-md ml-2"
      >
        Search
      </button>
    </form>
  )
}
