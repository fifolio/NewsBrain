import { Card, Grid, Grow, Typography, CardHeader, CardMedia, CardContent, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import styles from './styles'
import NewsCard from "../NewsCard/NewsCard";
import infoCards from "./infoCards"

export default function NewsCards({ theArticles }) {

    if (!theArticles.length) {
        return (
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                spacing={0.1}
            >
                {infoCards.map((infoCard) => (
                    <Grid item lg={3} md={8} xs={12}>
                        <Card sx={{ minWidth: 270, minHeight: 300, maxHeight: 400, margin: '15px 10px' }}>

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
        )
    }

    // if (!theArticles.length) {
    //     return (
    //         <Grow in>
    //             <Grid
    //                 container
    //                 className={styles.container}
    //                 alignItems="stretch"
    //                 spacing={3}
    //             >
    //                 {infoCards.map((infoCard) => (
    //                     <Grid item xs={12} sm={6} md={4} lg={3} className={styles.infoCard}>
    //                         <div className="styles.card" style={{ backgroundColor: infoCard.color }}>
    //                             <Typography variant="h5">
    //                                 {infoCard.title}
    //                             </Typography>
    //                             {infoCard.info ?
    //                                 <Typography variant="h6">
    //                                     <strong>
    //                                         {infoCard.title.split(' ')[2]}:
    //                                     </strong>
    //                                     <br />
    //                                     {infoCard.info}
    //                                 </Typography> : null}
    //                             <Typography variant="h6">
    //                                 Try saying: <br />
    //                                 <i>
    //                                     {infoCard.text}
    //                                 </i>
    //                             </Typography>
    //                         </div>
    //                     </Grid>
    //                 ))}
    //             </Grid>
    //         </Grow>
    //     )
    // }

    return (
        <Grow in>
            <Grid
                container
                className={styles.container}
                alignItems="stretch"
                spacing={3}
            >

                {theArticles.map((article, index) => (

                    <Grid key={index} item xs={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard article={article} index={index} />
                    </Grid>

                ))}

            </Grid>
        </Grow>
    )
}