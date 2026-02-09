//Import Styles
import '@/styles/ProductsListComponent.css'

//Import React Library
import { useContext } from 'react';

//Import Contexts (Shared Data)
import { ProductsContext } from '../contexts/ProductsContext.js';

//Import Material UI Icons
import AddIcon from '@mui/icons-material/Add';

//Import Material UI Components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';

//Import Custom Components
import ProductCardComponent from './ProductCardComponent.jsx'



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
        <Box sx={{ flexGrow: 1,height:'87vh' ,position:'relative'}}>
            <Typography variant="h5" component="div">Products List</Typography>
            <br/>
            <Stack direction={{ xs: 'column', sm: 'row' , md:'row' }} spacing={{ xs: 1, sm: 2, md: 4}}>
                { productsList }
            </Stack>

            <Fab color="primary" size="medium" aria-label="add" sx={{ position: 'absolute', bottom: 16, right: 16,  }}>
                <AddIcon />
            </Fab>

        </Box>
    );
}