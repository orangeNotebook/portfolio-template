import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import content from "../content.json";
import ArtPreview from "./ArtPreview";

const cards = content;

export default function Album() {
  return (
    <div>
      <main>
        {/* Hero unit */}
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
              Angel King
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Hi Loftia Team! I'm Angel, 22yo. I'm studying Computer Science
              with Maths at university as well as doing fashion courses, and
              I've been doing work in blender for roughly 3 years. I've been
              honing my 3D modeling through self-study and contests, and I'm
              keen to bring my unique angle to your team!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <ArtPreview
                  id={card.id}
                  title={card.title}
                  copy={card.copy}
                  image={card.image}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
