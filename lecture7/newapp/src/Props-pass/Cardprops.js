import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const CardProps = (props) => {
  return <>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      img={props.img}
    />
    {props.age}
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {props.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.ds}
      </Typography>
    </CardContent>
    <CardActions>
    </CardActions>
  </Card>

  
</>        


}


export default CardProps