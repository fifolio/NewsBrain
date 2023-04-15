import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography, } from '@mui/material';

export default function NewsCard({ article, index }) {

    const { description, publishedAt, source, title, url, urlToImage } = article;

    const classes = {
        media: {
            height: 250,
        },
        border: {
            border: 'solid',
        },
        fullHeightCard: {
            height: '100%',
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderBottom: '10px solid white',
        },
        activeCard: {
            borderBottom: '10px solid #22289a',
        },
        grid: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '20px',
        },
        title: {
            padding: '0 16px',
        },
        cardActions: {
            padding: '0 16px 8px 16px',
            display: 'flex',
            justifyContent: 'space-between',
        },
    }

    return (
        <Card>
            <CardActionArea>
                <CardMedia sx={classes.media} image={urlToImage || 'https://logodix.com/logo/570946.png'} title={title}>
                </CardMedia>
                <CardMedia>
                    <div sx={classes.details}>
                        <Typography variant="body2" color="textSecondary" component="h2">
                            {(new Date(publishedAt)).toDateString()}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="h2">
                            {source.name}
                        </Typography>
                    </div>
                    <Typography sx={classes.title} gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardMedia>
            </CardActionArea>
            <CardActions sx={classes.cardActions}>
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