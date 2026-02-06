import { createContext } from "react";

//1- Create Context
export const ProductsContext = createContext(
[
    {
        id: 1,
        name: "Product 1",
        price: 100,
        description: "This is product 1"
    },
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
    }
]

);