//Import Styles
import '@/styles/ProductDetailComponent.css'

//Import React Library
import * as React from 'react';
import { useParams } from 'react-router-dom'

//Import Contexts (Shared Data)
import { ProductsContext } from '../contexts/ProductsContext.js';


export default function ProductDetail()
{
    const {id} = useParams();

    //get products data from global context called (ProductsContext)
    const { products } = React.useContext(ProductsContext);

    
    const product = products.find((product) => product.id == id);


    if(product!=null)
    {
        return(
        <>
            <h1>Product Detail</h1>
            <hr/>
            <b>Product Id : </b> {product.id}
            <br/>
            <b>Product Name : </b> {product.name}
            <br/>
            <b>Product Price : </b> {product.price}
            <br/>
            <b>Product Description : </b> {product.description}
        </>
        );
        

    }
    else
    {
        return(
            <h3>Product Not Found</h3>
        );

    }
        


    
}