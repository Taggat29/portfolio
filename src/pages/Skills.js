import { Box, Grid, useMediaQuery } from "@mui/material";
import TCarousel from "../components/TCarousel";
export default function Skills({ dwidth }) {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return (
    <>
      <Box
        className="center"
        id="Skills"
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${dwidth}px)` },
          height: 100+"vh"
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding={matches ? 15 : 2}
          
        >
          <TCarousel />
        </Grid>
      </Box>
    </>
  );
}
