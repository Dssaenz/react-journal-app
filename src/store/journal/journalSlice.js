import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    addEmptyNote: (state, { payload }) => {
      state.notes.push(payload);
      state.isSaving = false;
      state.messageSaved = "";
    },
    setActiveNote: (state, { payload }) => {
      state.active = payload;
      state.addEmptyNote = "";
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, { payload }) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === payload.id) {
          return payload;
        }
        return note;
      });
      state.messageSaved = `${payload.title} was saved correcly`;
    },
    deleteNoteById: (state, action) => {},
  },
});

export const {
  savingNewNote,
  addEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;
