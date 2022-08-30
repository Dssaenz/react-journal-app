import { ButtonJournal } from "../components";
import JournalLayout from "../layout/JournalLayout";

import { NoteView, NothingSelectedView } from "../../view";

function JournalPage() {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />
      <ButtonJournal />
    </JournalLayout>
  );
}

export default JournalPage;
