import React from 'react';

const Drink = ({ name, image }) => (
  <>
  <div className='w-[32%]'>
    <img src={image} alt={name} 
    className=' justify-center w-full'
    />
    <h3>{name}</h3>
  </div>
  </>
);

export default Drink;