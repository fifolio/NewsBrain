import { Card, Grid, Grow, Typography, CardHeader, CardMedia, CardContent } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import styles from './styles'
import NewsCard from "../NewsCard/NewsCard";
import infoCards from "./infoCards"

export default function NewsCards({ theArticles }) {

    // if (!theArticles.length || theArticles.length) {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                mb={1}
            >
                {infoCards.map((infoCard) => (
                    <Grid item lg={3} md={8} xs={12}>
                        <Card sx={{ minWidth: 270, minHeight: 370, maxHeight: 400, margin: '15px 10px' }}>

                            <CardHeader
                                title={infoCard.title}
                                subheader={`Try saying "${infoCard.text}"`}
                                avatar={
                                    <Avatar sx={{ backgroundColor: 'white' }}>
                                        <img src="../../../public/brain.svg" />
                                    </Avatar>
                                }
                            />
                            <CardMedia
                                component="img"
                                height="190"
                                image={infoCard.img}
                                alt={infoCard.title}
                            />
                            <CardContent>
                                {infoCard.info ?
                                    <Typography color="text.secondary" variant="body2">
                                        {infoCard.info}
                                    </Typography>
                                    : null}
                            </CardContent>
                        </Card>
                    </Grid>
                ))
                }
            </Grid >
            <Grow in>
                <Grid
                    container
                    className={styles.container}
                    justifyContent="space-around"
                    alignItems="center"
                    // gap={2}
                    spacing={.2}
                >
                    {theArticles.map((article, index) => (
                        <Grid key={index} item lg={6} md={8} xs={12}>
                            <NewsCard article={article} index={index} />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        </>
    )
}