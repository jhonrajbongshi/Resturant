import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Product.css'
import Rating from '@material-ui/lab/Rating';
const useStyles = makeStyles({
  root: {
    maxWidth: 260,
  },
  media: {
    height: 100,
  },
});

export default function Product(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../assets/'+props.image+'.jpg')}
          title="Deleicious Food"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
          {props.title}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
          {props.subtitle}
      </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {props.type ==='header_product'
        ? 
        <Button className="button">
          Reorder
        </Button>
        : 
        <Button className="button1">
        <Rating name="size-medium" defaultValue={2} />
        </Button>
      
      }
      </CardActions>
      
    </Card>
  );
}
