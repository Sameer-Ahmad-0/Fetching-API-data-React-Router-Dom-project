import React, { useEffect, useState } from "react";
import Drink from "./Drink";
import './Search.css'

function FetchData (){
const [drinks, setDrinks] =useState([])
const [record, setRecord] =useState([])// filtered drinks

useEffect(()=>{
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(Response=>Response.json())
.then(data=>setDrinks(data.drinks)
)
.catch(err=>console.log(err))
},[])
console.log(drinks)
const Filter=(event)=>{
    setRecord(drinks.filter(f=>f.strDrink.toLowerCase().includes(event.target.value)))
}

    return(
       <>
       <div className="mt-5 flex justify-center align-center bg-slate-800">
 <div className='search'>
      <input type='text'  className="form-conrol" onChange={Filter} placeholder="search here"/>
      <i className="search icon"></i>
    </div>
    </div>

        <div className="flex justify-around gap-3 mt-16 flex-wrap">
           
           {record?.map((drink)=>(
            <Drink image={drink.strDrinkThumb} key={drink.idDrink} name={drink.strDrink}  />
        
           ))} 
        
        </div>
        </>
    )
}
export default FetchData