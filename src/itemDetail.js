import React, { useState, useEffect } from 'react'
import './App.css';

function ItemDetail({ match }) {
  useEffect(() =>{
      fetchItem()
      console.log(match.params.id.color)
  }, [])

  const [ item, setItem ] = useState({})

  const fetchItem = async () => {
      const fetchItem = await fetch(`https://fortnite-api.com/v1/banners/colors`)
      const item = await fetchItem.json()

      console.log(item)
  }

  return (
    <div>
      <h1>shop</h1>
    </div>
  );
}

export default ItemDetail;
