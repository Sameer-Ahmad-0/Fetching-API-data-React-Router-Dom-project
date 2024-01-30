import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     <nav className="flex items-center justify-between bg-blue-500 p-4">
      <div className="text-black">
        <img src="" alt="" />
        <h1 className="text-xl font-bold">Cocktail Drinks</h1>
      </div>

      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-black">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-black">About</Link>
        </li>
        <li>
          <Link to="/Contact" className="text-black">Contact</Link>
        </li>
      </ul>
    </nav> 
    </>
  )
}

export default Home
