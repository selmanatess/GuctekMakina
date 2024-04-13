import React from 'react'
import '../styles/ProductsCard.css'
type ProductsCardProps = {
    title: string;
    description: string;
    imageUrl: string;
}


const ProductsCard: React.FC<ProductsCardProps>= ({title,description,imageUrl}) => {
  return (
    <div className="card">
<div className="card-image" style={{backgroundImage:`url(${imageUrl})`
}}></div>
  <div className="card-description">
    <p className="text-title">{title}</p>
    <p className="text-body">{description}</p>
  </div>
</div>
  )
}

export default ProductsCard
