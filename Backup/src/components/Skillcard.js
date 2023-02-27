import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

export default function Skillcard({ src, alt }) {
  return (
    <ImageListItem key={alt}>
      <img
        src={`${src}?w=248&fit=crop&auto=format`}
        srcSet={`${src}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={alt}
        loading="lazy"
      />
      <ImageListItemBar
        title={alt}
        subtitle={<span>1 year of experience</span>}
        position="below"
      />
    </ImageListItem>
  );
}

{
  /* <ImageList sx={{ width: 500, height: 450 }}></ImageList> */
}
// </ImageList>

// {/* <Card sx={{ maxWidth: 500, margin: 0+" auto" }}>
//         <CardMedia
//           component="img"
//           /* height="140" */
//           style={{maxHeight: 250+"px"}}
//           image={src}
//           alt={alt}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {alt}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             1 year of experience
//           </Typography>
//         </CardContent>
//     </Card> */}
