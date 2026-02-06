import { ProductsContext } from "./ProductsContext";

//2- Create Context Provider like Component to wrap consumed Components
export default function ProductsProvider({ children }) 
{

  return (
    <ProductsContext.Provider value={{}}>
      {children}
    </ProductsContext.Provider>
  );
}
