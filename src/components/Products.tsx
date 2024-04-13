import React from 'react'
import '../styles/products.css'
import { HiChevronDoubleRight } from "react-icons/hi";
import ProductsCard from './ProductsCard'
const Products = () => {

const products = [
    {
        title: 'Vida',
        description: 'Merhaba nasılsın? ben iyiyim sen nasılsın',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/cardImg%2F1.png?alt=media&token=4599cb54-9f96-4601-96dc-db889ecdbc39'
        },
        {
        title: 'Vida',
        description: 'Merhaba nasılsın? ben iyiyim sen nasılsın',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/cardImg%2F2.png?alt=media&token=8bad649e-a055-429d-a06f-1ec37ad133d8'
        },
        {
        title: 'Vida',
        description: 'Merhaba nasılsın? ben iyiyim sen nasılsın',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/cardImg%2F3.png?alt=media&token=75aea45e-2396-4703-94fe-bb754f357492'
        },
        {
        title: 'Vida',
        description: 'Merhaba nasılsın? ben iyiyim sen nasılsınsdadasdasdsadas sda as dasd as ',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/cardImg%2F4.png?alt=media&token=a3261842-4562-4cc8-93b8-13704dec584b'
        },
        {
        title: 'Vida',
        description: 'Merhaba nasılsın? ben iyiyim sen nasılsın',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/cardImg%2F5.png?alt=media&token=178849b9-10ad-41e2-9d8e-302b8e6b1e34'
        },
        {
        title: 'Vida',
        description: 'Merhaba nasılsın? ben iyiyim sen nasılsın',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/cardImg%2FEkran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202024-04-13%20212243.png?alt=media&token=c614fe6a-b7a9-456e-a406-3494159e5e8e'
    },
    {
        title: 'Vida',
        description: 'Merhaba nasılsın? ben iyiyim sen nasılsın',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/cardImg%2FEkran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202024-04-13%20212225.png?alt=media&token=cd503892-81db-482c-82ac-68eb80efa943'
    },{
        title: 'Vida',
        description: 'Merhaba nasılsın? ben iyiyim sen nasılsın',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/library-c5a97.appspot.com/o/cardImg%2FEkran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202024-04-13%20212205.png?alt=media&token=06769f9a-610d-4170-89e8-6d507a197419'
    }
]


  return (
    <div className='products'>
      <div className='products-icon'> <span><HiChevronDoubleRight style={{width:'50px', height:'50px'}}></HiChevronDoubleRight> <span>Ürünler</span></span></div>
        <div className='products-container'> 
   {products.map((product, index) => (
    <ProductsCard key={index} title={product.title} description={product.description} imageUrl={product.imageUrl}></ProductsCard>
    ))}
            
            
            
            </div>
      
    </div>
  )
}

export default Products
