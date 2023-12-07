import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ArtPreview({ id, title, copy, image, ...props }) {
  return (
    <div id={id}>
      <CardActionArea {...props}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: "100%",
            }}
            image={image}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography>{copy}</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
}
