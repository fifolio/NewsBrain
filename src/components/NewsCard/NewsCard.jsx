import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography, } from '@mui/material';

import classes from './styles';

export default function NewsCard({ article, index }) {

    const { description, publishedAt, source, title, url, urlToImage } = article;

    return (
        <Card style={classes.card}>
            <CardActionArea href={url} target="_blank">
                <CardMedia style={classes.media} image={urlToImage || 'https://logodix.com/logo/570946.png'} title={title}>
                </CardMedia>
                <CardMedia>
                    <div style={classes.details}>
                        <Typography variant="body2" color="textSecondary" component="h2">
                            {(new Date(publishedAt)).toDateString()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="h2">
                            {source.name}
                        </Typography>
                    </div>
                    <Typography style={classes.title} gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardMedia>
            </CardActionArea>
            <CardActions style={classes.cardActions}>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                <Typography variant="h5" color="textSecondary">
                    {index + 1}
                </Typography>
            </CardActions>
        </Card >
    )
}