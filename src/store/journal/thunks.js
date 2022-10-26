import { doc, collection, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    dispatch(savingNewNote());

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
