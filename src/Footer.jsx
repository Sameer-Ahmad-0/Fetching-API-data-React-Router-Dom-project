import React from 'react'

function Footer() {
  return (
    <>

<footer className=" mt-12 bg-gray-800 text-white p-8 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Cocktail Drinks</h2>
          <p>WellCome to Capreg Soft House for amazing cocktail recipes and more! </p>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/path/to/facebook-icon.png" 
              alt="Facebook"
              className=""
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/path/to/twitter-icon.png" 
              alt="Twitter"
              className=""
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/path/to/instagram-icon.png" 
              alt="Instagram"
              className=""
            />
          </a>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer
