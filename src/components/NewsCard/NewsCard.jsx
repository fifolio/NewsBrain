import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography, } from '@mui/material';

export default function NewsCard({ article: { description, publishedAt, source, title, url, urlToImage }, index }) {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    image={urlToImage || 'https://logodix.com/logo/570946.png'}>
                    <div>
                        <Typography variant="body2" color="textSecondary" component="h2">
                            {(new Data(publishedAt)).toDataString()}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="h2">
                            {source.name}
                        </Typography>
                    </div>

                    <Typography gutterBottom variant="h5">
                        {title}
                    </Typography>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>

                </CardMedia>
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                <Typography variant="h5" color="textSecondary">
                    {index + 1}
                </Typography>
            </CardActions>

        </Card>
    )
}