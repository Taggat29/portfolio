import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Container } from "@mui/material";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

export default function Skillcard({ src, alt }) {
  return (
   <Container maxWidth="md">
      <ImageListItem
        style={{
          margin: 0 + " auto",
          height: 300,
          width: 300,
          textAlign: "center",
        }}
        key={alt}
      >
        <img
          src={`${src}?w=248&fit=crop&auto=format`}
          srcSet={`${src}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={alt}
          loading="lazy"
          style={{
            width: 200 + "px",
            height: 200 + "px",
            objectFit: "contain",
            margin: 0 + " auto",
          }}
        />
        <ImageListItemBar
          title={alt}
          subtitle={<span>1 year of experience</span>}
          position="below"
        />
      </ImageListItem>
    </Container>
  );
}
