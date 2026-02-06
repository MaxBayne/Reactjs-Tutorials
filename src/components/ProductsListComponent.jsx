import '@/styles/ProductsListComponent.css'
import ProductCardComponent from './ProductCardComponent.jsx'


export default function ProductsListComponent()
{
    //store products data
    let productsData = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            description: "This is product 1"
        }
        ,
        {
            id: 2,
            name: "Product 2",
            price: 150,
            description: "This is product 2"
        },
        {
            id: 3,
            name: "Product 3",
            price: 120.5,
            description: "This is product 3"
        },




    ];

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
            <ul className='Products_List'>
                { productsList }
            </ul>
        </div>
    );
}