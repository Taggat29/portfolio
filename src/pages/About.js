import { useState } from "react";
import { Box, Toolbar, Typography, Grid } from "@mui/material";
import planet from "../assets/Planet In Space.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function About({ dwidth }) {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      <Box
        id="About"
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${dwidth}px)` },
        }}
      >
        <Toolbar />
        {loaded ? (
          <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
            Loading...
          </div>
        ) : null}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding={15}
        >
          <Grid xs={12} sm={6} padding={2}>
            <img
              data-aos="flip-right"
              data-aos-duration="1500"
              data-aos-offset="200"
              src={planet}
              style={{ width: 100 + "%", height: 100 + "%" }}
              alt="planet"
              onLoad={() => setLoaded(false)}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            padding={2}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="100"
          >
            <div className="flex flex-col w-full mt-8">
              <Typography variant="subtitle1" gutterBottom>
                Hi I'm
              </Typography>
              <Typography variant="h4" gutterBottom>
                Tito Maffeo
              </Typography>
              <Typography variant="h5" gutterBottom>
                Web Developer
              </Typography>
              <Typography variant="body1" gutterBottom>
                Junior web developer entusiasta e motivato. Interessato ad
                esplorare framworks e librerie JavaScript, full stack
                developing, creazione UI/UX e linguaggi di programmazione e
                scripting. Sto correntemente cercando lavoro per fare più
                esperienza nel mio campo, Attualmente in studio di Python per
                espandere le mie conoscenze e capacità.
              </Typography>
            </div>
            <Grid gap={2} marginTop={2} container direction={"row"}>
              <a
                href="https://github.com/Taggat29"
                rel="noreferrer"
                target="_blank"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/tito-maffeo-1583b323b/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
