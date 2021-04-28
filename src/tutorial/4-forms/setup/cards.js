import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function MediaCard ({url, model, specification, setCart, setItem, ShowRoom, id, item, price}){
  const classes = useStyles();
  return (<div key={id}>
    <Card className={classes.root} style={{backgroundColor:'brown'}} >
     <CardActionArea>
        <Link to ={`/preview/${model}`}>
        <CardMedia 
          className={classes.media}
          image={url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {model}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <h6>`${price}`</h6>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <h6>{specification}</h6>
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
       
        <Button  size="small" color="primary" onClick={()=>{
          setItem([...item,...ShowRoom.filter(item=>item.model===model)])
          setCart(cart=>{return cart+1})
          }}>
        
         <h7>add to cart</h7> 
         
        </Button>
        <Link to={`/preview/${model}`}><Button style={{marginLeft:'7rem'}} size="small" color="primary">
         <h7>Preview</h7> 
        </Button></Link>
      </CardActions>
    </Card>
    </div>
  );
}
export default MediaCard