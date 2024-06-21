import React, { useState } from 'react'

function ToyForm({ handleFetchTrigger }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
  })

  const handleOnChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(handleFetchTrigger)
      .then(
        setFormData({
          name: '',
          image: '',
        })
      )
  }

  return (
    <div className='container'>
      <form className='add-toy-form' onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleOnChange}
          placeholder="Enter a toy's name..."
          className='input-text'
        />
        <br />
        <input
          type='text'
          name='image'
          value={formData.image}
          onChange={handleOnChange}
          placeholder="Enter a toy's image URL..."
          className='input-text'
        />
        <br />
        <input type='submit' name='submit' value='Create New Toy' className='submit' />
      </form>
    </div>
  )
}

export default ToyForm
