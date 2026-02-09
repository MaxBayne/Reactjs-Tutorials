import '@/styles/ProductCardComponent.css'

//Import React Library
import { Link } from 'react-router-dom';

//Import Material UI Icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


//Import Material UI Components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';





export default function ProductCardComponent({productId,productName,productPrice,productDescription}) 
{
   return (
                            <Box sx={{ minWidth: 300 }}>
                                <Card  variant="elevation">

                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {productName}
                                        </Typography>

                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {productPrice}
                                        </Typography>

                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {productDescription}
                                        </Typography>

                                    </CardContent>

                                    <CardActions>
                                        <IconButton color='info' component={Link} to={`/products/${productId}`}>
                                          <VisibilityIcon />
                                        </IconButton>

                                        <IconButton color='warning' component={Link} to={`/products/edit/${productId}`}>
                                          <EditIcon />
                                        </IconButton>

                                        <IconButton color="error" component={Link} to={`/products/remove/${productId}`}>
                                          <DeleteIcon />
                                        </IconButton>
                                        
                                    </CardActions>

                                </Card>
                            </Box>

                        )
    
}