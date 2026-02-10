import * as React from 'react';

import { ProductsContext } from "./ProductsContext";
import { v4 as uuidv4 } from 'uuid';

const productsKeyInsideLocalStorage="productsList";

const initialProducts = [
  {
    id: uuidv4(),
    name: "Product 1",
    price: 100,
    description: "This is product 1",
  },
  {
    id: uuidv4(),
    name: "Product 2",
    price: 150,
    description: "This is product 2",
  },
  {
    id: uuidv4(),
    name: "Product 3",
    price: 120.5,
    description: "This is product 3",
  },
];

//2- Create Context Provider like Component to wrap consumed Components
export default function ProductsProvider({ children }) 
{
  // ✅ Lazy initialization from localStorage
  const [products, setProducts] = React.useState(() => 
  {
    const stored = localStorage.getItem(productsKeyInsideLocalStorage);
    return stored ? JSON.parse(stored) : initialProducts;
  });


  // ✅ Persist to localStorage whenever products change
  React.useEffect(() => 
  {
    localStorage.setItem(productsKeyInsideLocalStorage,JSON.stringify(products));
  }, [products]);

  function addProduct(newProduct) 
  {
    setProducts(prev => [...prev, newProduct]);
  }

  function editProduct(modifiedProduct) 
  {
    setProducts(prev =>
      prev.map(product =>
        product.id === modifiedProduct.id
          ? { ...product, ...modifiedProduct }
          : product
      )
    );
  }

  function removeProduct(removedProduct)
  {
    setProducts(prev =>
      prev.filter(product => product.id !== removedProduct.id)
    );
  }


  return (
    <ProductsContext.Provider value={{products, addProduct ,editProduct,removeProduct}}>
      {children}
    </ProductsContext.Provider>
  );
}
