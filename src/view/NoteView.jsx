import { SaveOutlined } from "@mui/icons-material";
import { Grid, Typography, Button, TextField } from "@mui/material";

import { ImageGallery } from "../journal/components";

const NoteView = () => (
  <Grid
    container
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={{ mb: 1 }}
  >
    <Grid item>
      <Typography fontSize={39} fontWeight="light">
        28 de agosto, 2023
      </Typography>
    </Grid>
    <Grid item>
      <Button color="primary" sx={{ padding: 2 }}>
        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
        Save
      </Button>
    </Grid>
    <Grid container>
      <TextField
        fullWidth
        type="text"
        label="Title"
        variant="filled"
        placeholder="Type the title"
        sx={{ border: "none", mb: 1 }}
      />

      <TextField
        fullWidth
        multiline
        minRows={5}
        type="text"
        variant="filled"
        placeholder="What happened today?"
      />
    </Grid>
    <ImageGallery />
  </Grid>
);

export default NoteView;
