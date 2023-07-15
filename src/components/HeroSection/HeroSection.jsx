import { Grid, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './style';
import './background.css';

export default function HeroSection() {

    // Scroll down
    const scrollToTarget = () => {
        const target = document.querySelector('.scrollTarget');
        if (target) {
            target.scrollIntoView({ behavior: 'instant', block: 'center' });
        }
    };


    return (
        <Grid container style={styles.main}>

            <Grid item style={styles.item1} xs={12} md={12} lg={7} my={6}>
                <Typography variant="h4" style={styles.item.title}>
                    News Brain
                </Typography>
                <Typography variant="i" style={styles.item.moto}>
                    "the ultimate source for <br />up-to-date news from around the world"
                </Typography>
                <Typography variant="p" style={styles.item.desc}>
                    Our state-of-the-art news platform harnesses the latest in AI technology to bring you the latest news stories from a variety of sources, all at the touch of a button. With Alan.AI as our voice command tool, you can even use your voice to ask for the news and get instant updates on the stories that matter most to you
                </Typography>
                <Grid >
                    <Button
                        item
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
                    <Button
                        Item
                        variant="contained"
                        href="https://www.linkedin.com/pulse/newsbrain-app-firas-dabbabi/"
                        target="_blank"
                        style={styles.item.btnWatch}>
                        Watch Tutorial 
                    </Button>
                </Grid>
            </Grid>
            <div lg={5} className="bg-div">
                <div className="background"></div>
            </div>
        </Grid >
    )
}