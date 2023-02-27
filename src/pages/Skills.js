import { Toolbar, Box, Grid } from "@mui/material";
import TCarousel from "../components/TCarousel";
export default function Skills({ dwidth }) {
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
        }}
      >
        <Toolbar />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding={15}
        >
          <TCarousel />
        </Grid>
      </Box>
    </>
  );
}
