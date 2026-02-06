import '@/styles/ProductDetailComponent.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext.js'

export default function ProductDetail()
{
    const {id} = useParams();

    const productsData = useContext(ProductsContext);

    
    const product = productsData.find((product) => product.id == id);


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