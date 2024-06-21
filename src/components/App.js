import React, { useState } from 'react'

import Header from './Header'
import ToyForm from './ToyForm'
import ToyContainer from './ToyContainer'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const handleClick = () => setShowForm((showForm) => !showForm)
  const handleFetchTrigger = () => setFetchTrigger(!fetchTrigger)

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleFetchTrigger={handleFetchTrigger} /> : null}
      <div className='buttonContainer'>
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer fetchTrigger={fetchTrigger} />
    </>
  )
}

export default App
