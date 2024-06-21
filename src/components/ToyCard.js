import React from 'react'

function ToyCard({ toyInfo: { id, name, image, likes }, handleFetchTrigger }) {
  const handleDeleteClick = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(handleFetchTrigger)
  }

  const handleLikeClick = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then((res) => res.json())
      .then(handleFetchTrigger)
  }

  return (
    <div className='card'>
      <h2>{name}</h2>
      <img src={image} alt={name} className='toy-avatar' />
      <p>{likes} Likes </p>
      <button className='like-btn' onClick={handleLikeClick}>
        Like {'<3'}
      </button>
      <button className='del-btn' onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  )
}

export default ToyCard
