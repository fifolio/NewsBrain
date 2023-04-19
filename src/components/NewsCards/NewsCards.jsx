import {
    Card,
    Grid,
    Grow,
    Typography,
    CardHeader,
    CardMedia,
    CardContent
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import styles from './styles'
import NewsCard from "../NewsCard/NewsCard";
import infoCards from "./infoCards";
import CardAvatarImg from '../../assets/mic.gif';

export default function NewsCards({ theArticles, activeArticle }) {

    return (
        <div>
            <Grow in className="scrollToArticles">
                <Grid
                    container
                    className={styles.container}
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={.2}
                >
                    {theArticles.map((article, index) => (
                        <Grid key={index} item lg={6} md={8} xs={12}>
                            <NewsCard article={article} activeArticle={activeArticle} index={index} />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                mb={1}
            >
                {infoCards.map((infoCard) => (
                    <Grid className="scrollTarget" item lg={3} md={8} xs={12}>
                        <Card sx={{ minWidth: 270, minHeight: 370, maxHeight: 400, margin: '15px 10px' }}>
                            <strong>
                                <CardHeader
                                    title={infoCard.title}
                                    subheader={`Try saying "${infoCard.text}"`}
                                    avatar={
                                        <Avatar sx={{ backgroundColor: 'white' }}>
                                            <img src={CardAvatarImg} style={{
                                                width: '80px',
                                            }} />
                                        </Avatar>
                                    }
                                />
                            </strong>
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
        </div>
    )
}