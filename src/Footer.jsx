import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <>
      <footer className="mt-12 bg-gray-800 text-white p-8 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Cocktail Drinks</h2>
            <p>Welcome to Capreg Soft House for amazing cocktail recipes and more!</p>
          </div>

          <div className="flex items-center space-x-4">
            {/* Example Social Icons */}
            <SocialIcon url="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" />
            <SocialIcon url="https://twitter.com/" target="_blank" rel="noopener noreferrer" />
            <SocialIcon url="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
