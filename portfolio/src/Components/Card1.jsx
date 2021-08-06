import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../C.png'
import img1 from '../python.png'
import img2 from '../java.jpg'
import img3 from'../mern.jpg'
import img4 from '../sql.jpg'
import img5 from '../html.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 160,
    maxHeight:150
  },
  media: {
    height:50,
    width:70
  },
});

export  function MediaCard1() {
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
          <h4> C progarmming</h4>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
           <h5> Intermediate</h5>

    
          </Typography>
        </CardContent>
      </CardActionArea>
      
        
    </Card>
  );
}


export  function MediaCard2() {
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
            <h4> Python Programming</h4>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             
             <h5> Intermediate</h5>
  
      
            </Typography>
          </CardContent>
        </CardActionArea>
        
          
      </Card>
    );
  }
  
  export  function MediaCard3() {
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
            <h4>Java Programming</h4>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             
             <h5> Intermediate</h5>
  
      
            </Typography>
          </CardContent>
        </CardActionArea>
        
          
      </Card>
    );
  }
  export function MediaCard4() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img3}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            <h4> Mern stack</h4>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             
             <h5> Beginner</h5>
  
      
            </Typography>
          </CardContent>
        </CardActionArea>
        
          
      </Card>
    );
  }

  export  function MediaCard5() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img5}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            <h4>HTML,CSS &PHP</h4>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             
             <h5> Intermediate</h5>
  
      
            </Typography>
          </CardContent>
        </CardActionArea>
        
          
      </Card>
    );
  }

  export  function MediaCard6() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img4}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            <h4>SQL</h4>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             
             <h5> Intermediate</h5>
  
      
            </Typography>
          </CardContent>
        </CardActionArea>
        
          
      </Card>
    );
  }
  
  
  
  