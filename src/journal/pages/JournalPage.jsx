import { useDispatch, useSelector } from "react-redux";

import { ButtonJournal } from "../components";
import JournalLayout from "../layout/JournalLayout";

import { NoteView, NothingSelectedView } from "../../view";
import { startNewNote } from "../../store/journal/thunks";

function JournalPage() {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);

  const onClick = () => dispatch(startNewNote());

  return (
    <JournalLayout>
      {!!active ? <NoteView /> : <NothingSelectedView />}
      <ButtonJournal disabled={isSaving} onClick={onClick} />
    </JournalLayout>
  );
}

export default JournalPage;
