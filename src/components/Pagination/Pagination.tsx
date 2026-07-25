import css from "./Pagination.module.css";
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";
import type { ComponentType } from "react";

type ModuleWithDefault<T> = { default: T };

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  function handlePageClick(event: { selected: number }) {
    onPageChange(event.selected + 1);
  }
  return (
    <ReactPaginate
      className={css.pagination}
      pageCount={totalPages}
      onPageChange={handlePageClick}
      forcePage={currentPage - 1}
    />
  );
}
