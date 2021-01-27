import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from "../styles/Movie";

export default function Movie({original_title,overview,vote_average,poster_path,release_date}) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    return (
        <div className={classes.div}>
            <Card className={classes.root}>
      <div className={classes.details}>
      </div>
      <CardMedia
        className={classes.cover}
        image={poster_path ? `http://image.tmdb.org/t/p/w500/${poster_path}`:"https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg"}
        title={original_title}
      />
      <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.title}>{original_title}</Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.date}>{release_date}</Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.average}>{vote_average}</Typography>
          <Typography variant="subtitle2" color="textSecondary" className={classes.overview}>{overview}</Typography>
        </CardContent>
    </Card>
        </div>
    )
}