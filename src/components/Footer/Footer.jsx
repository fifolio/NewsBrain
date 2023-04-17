import { Typography } from "@mui/material"

const styles = {
    footer: {
        width: '100%',
        height: '50px',
        textAlign: 'center',
        fontFamily: 'monospace',
        fontWeight: 700,
        // letterSpacing: '.3rem',
        color: '#6d6d6d',
        marginTop: '100px',
        fontSize: 'small',
    }
}

export default function Footer() {
    return (
        <Typography style={styles.footer}>
            Coded with ❤️ by
            <a href="https://github.com/fifolio" style={{ textDecoration: 'none' }}> fifolio</a>
        </Typography>
    )
}