import React from 'react'
import { useParams } from 'react-router-dom'

const ProductId = () => {
        const [id] =(useParams)

        console.log(id)
  return (
    <div>ProductId</div>
  )
}

export default ProductId