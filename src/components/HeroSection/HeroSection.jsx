import { Grid, Typography, Button, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './style';

// const background = 'https://cdn.dribbble.com/users/32512/screenshots/4079875/button_element_c4d_by_gleb.gif';

export default function HeroSection() {

    // Scroll down
    const scrollToTarget = () => {
        const target = document.querySelector('.scrollTarget')
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Grid container style={styles.main}>
            <Grid item style={styles.item1} xs={12} md={12} lg={12}>
                <Typography variant="h4" style={styles.item.title}>
                    WELCOME TO NEWSBRAIN
                </Typography>
                <Typography variant="i" style={styles.item.moto}>
                    "the ultimate source for up-to-date news from around the world"
                </Typography>
                <Typography variant="p" style={styles.item.desc}>
                    Our state-of-the-art news platform harnesses the latest in AI technology to bring you the latest news stories from a variety of sources, all at the touch of a button. With Alan.AI as our voice command tool, you can even use your voice to ask for the news and get instant updates on the stories that matter most to you
                </Typography>
                <Grid >
                    <Button
                        Item
                        variant="contained"
                        style={styles.item.btn}
                        onClick={scrollToTarget}
                    >
                        Browse Commands
                    </Button>
                    <Button
                        Item
                        variant="contained"
                        href="https://github.com/fifolio/NewsBrain"
                        target="_blank"
                        startIcon={<GitHubIcon />}
                        style={styles.item.btnGithub}>
                        Github Repository
                    </Button>
                </Grid>
            </Grid>
            {/* <Box item>
                <img src={background} style={styles.background} />
            </Box> */}
        </Grid >
    )
}