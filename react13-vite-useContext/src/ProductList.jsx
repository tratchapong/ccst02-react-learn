import React from 'react'

export default function ProductList({products}) {
  return (
    <div>
      <ul>
        { products.map( el => (
          <li key={el.id}>{JSON.stringify(el.title)}</li>
        ))}
      </ul>
    </div>
  )
}
