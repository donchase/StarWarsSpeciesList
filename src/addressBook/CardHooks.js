import React, { useState, useEffect, setState } from 'react'

const Card = () => {

  const [initials, setInitials] = useState("DC")
  const [name, setName] = useState("Don Chase")
  const [phone, setPhone] = useState("813-770-8232")
  const [email, setEmail] = useState("donchase@gmail.com")
  const [favorite, setFavorite] = useState(true)

  useEffect(() => {
    console.log(`Favorite value has changed to: ${favorite}`)
    //save to localStorage, make API calls, DOM interactions, etc.
  })



  const activeClass = favorite ? 'active' : ''

  return (
    <section className="card-container">
      <header className="card-header">
        <span initials={initials}></span>
        <h2>{name}</h2>
        <div
          className={`favorite ${activeClass}`}
          onClick={() => { setFavorite(!favorite) }}
        >
          ☆
        </div>
      </header>

      <main>
        <ul>
          <li>
            <span>Phone</span>
            {phone ? phone : 'N/A'}
          </li>
          <li>
            <span>Email</span>
            {email ? email : 'N/A'}
          </li>
        </ul>
      </main>
    </section>
  )
}

export default Card