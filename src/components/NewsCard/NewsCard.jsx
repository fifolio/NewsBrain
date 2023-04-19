import { useState, useEffect, createRef } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography, } from '@mui/material';
import classes from './styles';
import activeCard from './activeCard';


export default function NewsCard({ article, index, activeArticle }) {

    const {
        description,
        publishedAt,
        source,
        title,
        url,
        urlToImage
    } = article;


    // Create Element References state
    const [elRefs, setElRefs] = useState([]);

    const scrollToRef = ref => window.scroll(0, ref.current.offsetTop - 100);

    useEffect(() => {
        // the refs argument is the current value of the elRefs state variable.
        setElRefs((refs) =>
            //  using the Array method to create a new array with 20 elements
            Array(20)
                // The fill() method is used to fill all of the elements with undefined, since we don't need any specific values for this array.
                .fill()
                // The map method is used to iterate over each element in the array and create a new array of React refs.
                .map(
                    //  The _ parameter in the arrow function is a placeholder variable for the current element in the array that we don't need to use, and the index parameter is the index of the current element.
                    (_, index) =>
                        // Inside the arrow function, we're checking if a ref already exists at the current index in the refs array (which is passed as an argument to setElRefs). If a ref exists, we use it. If not, we create a new ref using the createRef function.
                        refs[index] || createRef())
            // Finally, we pass this new array of refs to the setElRefs function, which updates the elRefs state variable with the new array.
        );
    }, [])

    useEffect(() => {
        if (index === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
    }, [index, activeArticle, elRefs])

    return (
        <Card
            ref={elRefs[index]}
            style={activeArticle === index ? activeCard.card : classes.card}>
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