import axios from "axios";
import type { Note, NoteTag } from "../types/note";

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchNotesParams {
  search?: string;
  page: number;
  perPage: number;
}
interface CreateNoteParams {
  title: string;
  content: string;
  tag: NoteTag;
}
interface DeleteNoteParams {
  id: string;
}
const VITE_NOTEHUB_TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;
axios.defaults.baseURL = "https://notehub-public.goit.study/api/";
axios.defaults.headers.common["Authorization"] = `Bearer ${VITE_NOTEHUB_TOKEN}`;

export async function fetchNotes({ search, page, perPage }: FetchNotesParams) {
  const response = await axios.get<FetchNotesResponse>("/notes", {
    params: {
      search,
      page,
      perPage,
    },
  });
  return response.data;
}

export function createNote({ title, content, tag }: CreateNoteParams) {
  return axios.post<Note>("/notes", { title, content, tag });
}

export function deleteNote({ id }: DeleteNoteParams) {
  return axios.delete<Note>(`/notes/${id}`);
}
