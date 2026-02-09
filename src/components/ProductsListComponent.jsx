import '@/styles/ProductsListComponent.css'
import ProductCardComponent from './ProductCardComponent.jsx'
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext.js';
import Stack from '@mui/material/Stack';

export default function ProductsListComponent()
{
    //get products data from global context called (ProductsContext)
    const productsData = useContext(ProductsContext);


    //convert products to li items
    let productsList=productsData.map((product) => 
        {
            return(
                    <ProductCardComponent key={product.id} productId={product.id} productName={product.name} productPrice={product.price} productDescription={product.description}/>
            )
        });

    return (
        <div>
            <h4>Products List</h4>
            <Stack direction={{ xs: 'column', sm: 'row' , md:'row' }} spacing={{ xs: 1, sm: 2, md: 4}}>
                { productsList }
            </Stack>
        </div>
    );
}