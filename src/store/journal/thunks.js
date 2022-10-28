import { doc, collection, setDoc } from "firebase/firestore/lite";

import {
  addEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
} from "./journalSlice";

import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newNote.id;

    dispatch(addEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const { notes } = await loadNotes(uid);

    dispatch(setNotes(notes));
  };
};
