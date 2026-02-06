import '@/styles/ProductCardComponent.css'

export default function ProductCardComponent({productId,productName,productPrice,productDescription}) 
{
   return (
                            <li key={productId} className="Products_List_Item" >
                                <h5 className='ProductName'>{productName}</h5>
                                <p className='ProductPrice'>{productPrice}</p>
                                <p className='ProductDescription'>{productDescription}</p>
                            </li>
                        )
    
}