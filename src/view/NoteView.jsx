import { useEffect, useMemo, useRef } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useDispatch, useSelector } from "react-redux";
import { Notes, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Grid, Typography, Button, TextField, IconButton } from "@mui/material";

import useForm from "../hooks/useForm";
import { ImageGallery } from "../journal/components";
import { setActiveNote } from "../store/journal/journalSlice";
import { startSaveNote, startUploadingFile } from "../store/journal/thunks";

const NoteView = () => {
  const fileInputRef = useRef();
  const dispatch = useDispatch();
  const {
    isSaving,
    active: note,
    messageSaved,
  } = useSelector((state) => state.journal);
  const { title, body, date, formState, onInputChange } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const onSaveNote = () => dispatch(startSaveNote());

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingFile(target.files));
  };

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
        <input
          multiple
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={onFileInputChange}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>
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
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};

export default NoteView;
