import { styled } from "@mui/system";
import { Container, Grid, Typography,Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Avatar from "../../../../assets/images/eu.jpg";
const Hero = () => {
    const StyledHero = styled("div")(() => ({
        backgroundColor:"#E44F9C",
        height:"100vh"
    }))
    const StyledImg = styled("img")(() => ({
        width:"100%",
        borderRadius:"50%"
    }))

    return (
        <>
       <StyledHero>
        <Container maxwidth="lg">
        <Grid container spacing={2}>
  <Grid item xs={12} md={4}>
        <StyledImg src={Avatar} />
  </Grid>
  <Grid item xs={12} md={8}>
    <Typography color="primary" variant="h1" textAlign="center">Jhanett Vivian</Typography>
    <Typography color="primary" variant="h2" textAlign="center">I'm a Engineer</Typography>
    <Grid container>
    <Grid item xs={12} md={6} display="flex" justifyContent="center">
    <Button> <DownloadIcon/>Download CV</Button>   
    </Grid>
    <Grid item xs={12} md={6} display="flex" justifyContent="center">
    <Button> <MailOutlineIcon/>Contact me</Button>
    </Grid>
    </Grid>
  </Grid>
</Grid>
        </Container>
        </StyledHero>
        </>
    )
}
export default Hero