import { Box, Grid, Divider, useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import udemy from '../assets/udemy-logo.png'
import attestato from '../assets/regionelazio-logo.png'
import "./pages.css";
export default function Certifications({ dwidth }) {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <>
      <Box
        className={matches ? "center" : null}
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
          /* padding={matches ? 0 : 2} */
        >
          {itemData.map((item, index) => {
            return (
              <Card
                sx={{
                  maxWidth: 375,
                  height: 500,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  margin: 10,
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  style={{objectFit: "contain", padding: 5}}
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
  },
  {
    img: udemy,
    title: 'Udemy "React with modern Redux"',
    subtitle: "Attestato ottenuto su piattaforma Udemy a Gennaio 2023",
  },
];
