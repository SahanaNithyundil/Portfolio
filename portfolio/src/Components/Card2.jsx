import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../retail.jpg'
import img1 from '../currency.jpg'
import img2 from '../filters.png'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
	maxHeight:500

    
  },
  media: {
    width:350,
    height:150
  },
});
export function MCard2() {
	const classes = useStyles();
  
	return (
	  <Card className={classes.root}>
		<CardActionArea>
		  <CardMedia
			className={classes.media}
			image={img}
			title="Contemplative Reptile"
		  />
		  <CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			<h4> Online Retail Shop Management System</h4>
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
			 
			 <h5>It is a DBMS project.It displays the items present in the retail shops
				  and price and quantity of products.
				  Users can choose a product of any quantity and add to card and an invoice will be generated for same. 

			 </h5>
  
	  
			</Typography>
		  </CardContent>
		</CardActionArea>
		
		  
	  </Card>
	);
  }

  export  function MCard1() {
	const classes = useStyles();
  
	return (
	  <Card className={classes.root}>
		<CardActionArea>
		  <CardMedia
			className={classes.media}
			image={img1}
			title="Contemplative Reptile"
		  />
		  <CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			<h4> Currency Converter</h4>
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
			 
			 <h5>It is a Python project.It can convert currency of one country to another based on real-time currencies.
			 </h5>
  
	  
			</Typography>
		  </CardContent>
		</CardActionArea>
		
		  
	  </Card>
	);
  }
  export function MCard3() {
	const classes = useStyles();
  
	return (
	  <Card className={classes.root}>
		<CardActionArea>
		  <CardMedia
			className={classes.media}
			image={img2}
			title="Contemplative Reptile"
		  />
		  <CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			<h4> Filters</h4>
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
			 
			 <h5>It is a python project.
                 <p>Variety of filters like blur,greyscale,cartoon effect can be applied on images selected from local computer.</p>
			 </h5>
  
	  
			</Typography>
		  </CardContent>
		</CardActionArea>
		
		  
	  </Card>
	);
  }