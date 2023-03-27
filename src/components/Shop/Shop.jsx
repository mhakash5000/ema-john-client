import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const loadData = async()=>{
            const res = await fetch('products.json');
            const data = await res.json();
            setProducts(data);
            console.log(data);
        }
        loadData();
    },[]);
    return (
           <div className='sm:flex-1 md:flex lg:flex'>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-20'>
                    {
                    products.map((product)=> <Product product={product} key={product.key} />)
                    }
                </div>
                <div className="w-96 sm:h-screen md:h-screen lg:h-screen  bg-warning shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-success w-full">Buy Now</button>
                        <button className="btn btn-primary w-full">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

          );
};

export default Shop;