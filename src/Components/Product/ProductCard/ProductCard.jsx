import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



export default function ProductCard({item}) {


  return (
    <Card sx={{ maxWidth: 400 }}>
      <Link>
      <CardMedia
        component="img"
        height="300"
        image={item.image}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      </Link>

        <CardContent>
            <Typography>
                ${item.price}
            </Typography>
            <Typography>
                Type:{item.type} 
            </Typography>
        </CardContent>
    </Card>
  );
}
