import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function Movie({original_title,overview,vote_average,poster_path,release_date}) {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        div:{
            margin:"20px",
        },
        details: {
          display: 'flex',
          flexDirection: 'column',
        },
        content: {
          flexWrap:"wrap",
          width:"50vw",
          display:"flex",
          justifyContent:"start",
          alignItems:"start",
          flexDirection:"column",
          textAlign:"left",
        },
        cover: {
          width: 151,
          height:"13rem"
        },
        wordings:{
            marginTop:"10px",
        }
      }));
    const classes = useStyles();
    return (
        <div className={classes.div}>
            <Card className={classes.root}>
      <div className={classes.details}>
      </div>
      <CardMedia
        className={classes.cover}
        image={`http://image.tmdb.org/t/p/w500/${poster_path}`}
        title={original_title}
      />
      <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.wordings}>{original_title}</Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.wordings}>{release_date}</Typography>
          <Typography variant="subtitle1" color="textSecondary">{vote_average}</Typography>
          <Typography variant="subtitle2" color="textSecondary" className={classes.wordings}>{overview}</Typography>
        </CardContent>
    </Card>
        </div>
    )
}