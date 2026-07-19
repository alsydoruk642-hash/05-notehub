import css from "./App.module.css";
import { NoteList } from "../NoteList/NoteList";
import { fetchNotes } from "../services/noteService";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useState } from "react";
import { Pagination } from "../Pagination/Pagination";

export default function App() {
  const [page, setPage] = useState(1);

  const perPage = 12;

  const { data } = useQuery({
    queryKey: ["notes", page],
    queryFn: () => fetchNotes({ page, perPage }),
    placeholderData: keepPreviousData,
  });
  const notes = data?.notes ?? [];
  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* Компонент SearchBox */}
        {
          <Pagination
            totalPages={data?.totalPages ?? 0}
            currentPage={page}
            onPageChange={setPage}
          />
        }
        {/* Кнопка створення нотатки */}
      </header>
      {notes.length > 0 && <NoteList notes={notes} />}
    </div>
  );
}
