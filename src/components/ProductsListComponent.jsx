import '@/styles/ProductsListComponent.css'
import ProductCardComponent from './ProductCardComponent.jsx'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext.js';


export default function ProductsListComponent()
{
    //get products data from global context called (ProductsContext)
    const productsData = useContext(ProductsContext);


    //convert products to li items
    let productsList=productsData.map((product) => 
        {
            return(
                <Link key={product.id} to={`/product/${product.id}`} >
                    <ProductCardComponent productId={product.id} productName={product.name} productPrice={product.price} productDescription={product.description}/>
                </Link>
            )
        });

    return (
        <div>
            <h4>Products List</h4>
            <ul className='Products_List'>
                { productsList }
            </ul>
        </div>
    );
}