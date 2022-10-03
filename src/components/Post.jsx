import React from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography}from "@material-ui/core"
const useStyles=makeStyles((theme)=>({
  card:{
    marginBottom:theme.spacing(5),
  },
  media:{
    height:250,
    [theme.breakpoints.down("sm")]:{
      height:150
    }
  }
}))
function Post() {
  const classes=useStyles();
  return (
   <Card className={classes.card}>
     <CardActionArea>
       <CardMedia className={classes.media} image="https://images.pexels.com/photos/11013357/pexels-photo-11013357.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
       title="My Post" />
     </CardActionArea>
     <CardContent>
       <Typography gutterBottom variant="h5">
         My first Post
       </Typography>
       <Typography variant="body2">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima commodi, itaque harum id error nostrum nulla incidunt dicta eaque explicabo. Sapiente quisquam cumque architecto perspiciatis, itaque aperiam ut in corporis?inima commodi, itaque harum id error nostrum nulla incidunt dicta eaque explicabo. Sapiente quisquam cumque architecto perspiciatis, itaque aperiam ut in corporis?
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small" color="primary" variant="contained">Share</Button>
       <Button size="small" color="primary" variant="contained">Learn More</Button>
     </CardActions>
   </Card>
  );
}
export default Post;
