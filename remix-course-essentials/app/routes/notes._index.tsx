import NewNote, { links as newNoteLinks } from "../components/NewNote";

export default function Index() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export function links() {
  return [...newNoteLinks()];//surfacing  styles 
}
// https://remix.run/docs/en/main/styling/css#surfacing-styles