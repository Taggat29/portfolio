import { Container } from "@mui/system";
import { Divider, Typography, Grid } from "@mui/material";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <Container
        /* className="footer" */
        maxWidth
        sx={{
          minHeight: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid conainer flex={true} textAlign={"center"}>
          <Grid
            gap={2}
            container
            justifyContent={"Center"}
            direction={"row"}
            marginBottom={2}
          >
            <a href="#">About</a>|<a href="#Skills">Skills</a>|
            <a href="#Certifications">Certificazioni</a>|
            <a
              href="https://drive.google.com/file/d/1Nt0P7fg_ymlhFpJ23H1uOfk9D7G6WveH/view?usp=share_link"
              rel="noreferrer"
              target={"_blank"}
            >
              Resume
            </a>
          </Grid>
          <Divider />
          <Typography margin={2} variant="caption" display="block">
            Copyright © 2023 Tito Maffeo. Tutti i diritti sono riservati.
          </Typography>
        </Grid>
      </Container>
    </>
  );
}
