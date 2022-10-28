import { useEffect, useMemo } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { SaveOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Button, TextField } from "@mui/material";

import useForm from "../hooks/useForm";
import { ImageGallery } from "../journal/components";
import { startSaveNote } from "../store/journal/thunks";
import { setActiveNote } from "../store/journal/journalSlice";

const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const { title, body, date, formState, onInputChange } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const onSaveNote = () => dispatch(startSaveNote());

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Updated note", messageSaved, "success");
    }
  }, [messageSaved]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          color="primary"
          sx={{ padding: 2 }}
          disabled={isSaving}
          onClick={onSaveNote}
        >
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
          name="title"
          value={title}
          sx={{ border: "none", mb: 1 }}
          onChange={onInputChange}
        />

        <TextField
          fullWidth
          multiline
          minRows={5}
          type="text"
          name="body"
          value={body}
          variant="filled"
          placeholder="What happened today?"
          onChange={onInputChange}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};

export default NoteView;
