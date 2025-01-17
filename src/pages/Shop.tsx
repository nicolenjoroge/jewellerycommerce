import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.tsx'
import FetchSingleProduct from '../components/FetchSingleProduct.tsx'

export interface Products {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

const Shop: React.FC = () => {
    const [items, setItems] = useState<Products[]>([])
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const [singleItem, setSingleItem] = useState<Products | null>(null)
    // const [ cart, setCart] = useState<{product: Products, quantity: number}[]>([])

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const items = await res.json() as Products[]

                if (!res.ok) {
                    console.log('Failed process')
                }
                setItems(items)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchItems()
    }, []
    )

    // const handleAddToCart = (product: Products, quantity: number) => {
    //     setCart((prevCart) => {
    //         const exisitingProduct = prevCart.find((item) => item.product.id === product.id)

    //         if (exisitingProduct) {
    //             return prevCart.map((item) =>
    //                 item.product.id === product.id ?
    //                     { ...item, quantity: item.quantity + quantity } : item
    //             )
    //         }
    //         return [...prevCart, { product, quantity }]
    //     })
    // }

    if (loading) {
        <div>Loading ...</div>
    }
    if (error) {
        <div>Error: {error}</div>
    }

    
    return (
        <div>
            <Navbar />
            {!singleItem ? (
            <div className='grid-container'>
                {items.map((item) => (

                    <div className="grid-item" key={item.id} onClick={() => setSingleItem(item)}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.category}</p>
                        <h6>{item.title}</h6>
                        <h5>${item.price}</h5>
                    </div>
                ))}
            </div>
            ): (
                <FetchSingleProduct product={singleItem} onClose={() => setSingleItem(null)} />
            )}
        </div>
    )
}

export default Shop