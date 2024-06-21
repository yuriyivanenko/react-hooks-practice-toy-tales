import React, { useEffect, useState } from 'react'
import ToyCard from './ToyCard'

function ToyContainer({ fetchTrigger, handleFetchTrigger }) {
  const [toysList, setToysList] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then((res) => res.json())
      .then((data) => setToysList(data))
  }, [fetchTrigger])

  if (!toysList) return <h1>Loading...</h1>

  return (
    <div id='toy-collection'>
      {toysList.map((toy) => {
        return <ToyCard handleFetchTrigger={handleFetchTrigger} key={`toy-${toy.id}`} toyInfo={toy} />
      })}
    </div>
  )
}

export default ToyContainer
