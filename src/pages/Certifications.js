import { Box, Grid, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import udemy from '../assets/Modern React With Redux Udemy.jpg'
import attestato from '../assets/Attestato.jpg'
import "./pages.css";
export default function Certifications({ dwidth }) {
  return (
    <>
      <Box
        className="center"
        id="Certifications"
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${dwidth}px)` },
        }}
      >
        <Grid
        className="certs"
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          margin={0 + " auto"}
          /* padding={15} */
        >
          {itemData.map((item, index) => {
            return (
              <Card
                sx={{
                  maxWidth: 345,
                  height: 600,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  margin: 10,
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  style={{objectFit: "contain", padding: 10}}
                  image={item.img}
                  alt={item.title}
                />
                <Divider />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.subtitle}
                  </Typography>
                  <Typography marginTop={1} variant="body2" color="text.secondary">
                    Clicca <a href={item.link} rel="noreferrer" target="_blank">Qui</a> per guardare
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

const itemData = [
  {
    img: attestato,
    title: "Diploma di qualifica regionale da Web Developer",
    subtitle: "Ottenuto ad Ottobre 2022 presso CEFI Informatica srl e riconosciuto dalla Regione Lazio",
    link: "https://drive.google.com/file/d/1U9ieTUrigzpjusFxyDaIXHgEms2Gq5P1/view?usp=share_link",
  },
  {
    img: udemy,
    title: 'Udemy "React with modern Redux"',
    subtitle: "Attestato ottenuto su piattaforma Udemy a Gennaio 2023",
    link: "https://drive.google.com/file/d/1nF7VuQpH8IIS_5gLXUwoLD5i2MonLAhl/view?usp=share_link",
  },
];
