import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Button, Container, Typography } from "@mui/material";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ArtDetails({ selectedItems, setSelectedItems }) {
  return (
    <>
      <Button
        sx={{}}
        variant="contained"
        onClick={() => {
          setSelectedItems(undefined);
        }}
      >
        Home
      </Button>
      <Box
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {selectedItems.details.heading}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            {selectedItems.details.copy}
          </Typography>
          {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
        </Container>
      </Box>
      <ImageList
        sx={{ width: "auto", height: "auto" }}
        variant="quilted"
        cols={4}
        rowHeight={215}
      >
        {selectedItems.details.images.map((item) => (
          <ImageListItem
            onClick={() => {
              window.open(item.img, "_blank");
            }}
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Button
        sx={{}}
        variant="contained"
        onClick={() => {
          setSelectedItems(undefined);
        }}
      >
        Home
      </Button>
    </>
  );
}
