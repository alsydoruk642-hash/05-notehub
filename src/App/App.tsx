import css from "./App.module.css";
import { NoteList } from "../NoteList/NoteList";
import { fetchNotes } from "../services/noteService";
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const { data } = useQuery({
    queryKey: ["notes"],
    queryFn: () => fetchNotes({ page: 1 }),
  });
  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* Компонент SearchBox */}
        {/* Пагінація */}
        {/* Кнопка створення нотатки */}
      </header>
      {<NoteList notes={data?.notes ?? []} />}
    </div>
  );
}
