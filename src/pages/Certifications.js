import { Toolbar, Box, Grid } from "@mui/material";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import planet from "../assets/Planet In Space.jpg";
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
        <Toolbar />
        <Grid
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
                  height: 500,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  margin: 2,
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.subtitle}
                  </Typography>
                  <Typography marginTop={1} variant="body2" color="text.secondary">
                    Clicca <a href={item.link}>Qui</a> per guardare
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

{
  /* <ImageList sx={{ width: 1000, height: 450 }} cols={3} rowHeight={300}>
            {itemData.map((item) => (
              <ImageListItem key={item.img} sx={{margin: 2}}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  position="below"
                  sx={{textAlign: "center"}}
                />
              </ImageListItem>
            ))}
          </ImageList> */
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Diploma di qualifica regionale da Web Developer",
    subtitle: "Ottenuto ad Ottobre 2022 presso CEFI Informatica srl e riconosciuto dalla Regione Lazio",
    link: "https://google.com",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: 'Attestato Udemy "React with modern Redux"',
    subtitle: "Attestato ottenuto presso",
    link: "https://google.com",
  },
];
