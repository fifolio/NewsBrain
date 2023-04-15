import { Grid, Grow } from '@mui/material';
import styles from './styles'
import NewsCard from "../NewsCard/NewsCard";

export default function NewsCards({ articles }) {

    return (
        <Grow in>
            <Grid
                container
                className={styles.container}
                alignItems="stretch"
                spacing={3}>

                {articles.map((article, index) => (

                    <Grid item sx={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard article={article} index={index} />
                    </Grid>

                ))}

            </Grid>

        </Grow>
    )
}