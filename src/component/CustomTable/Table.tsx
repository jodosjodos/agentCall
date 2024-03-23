import {
  PaginationState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import "./table.css";
import styled from "styled-components";

const Th = styled.th<{ $width?: number; theme: string }>`
  width: ${(props) => (props.$width ? `${props.$width}%` : "fit-content")};
  min-width: 100px;
  background-color: ${(props) => (props.theme === "light" ? "#C9D5D8" : "")};
  color: ${(props) => (props.theme === "light" ? "#0F2E35" : "")};
`;
const PaginationButton = styled.button<{ $active?: boolean,theme:string }>`
  padding: 8px;
  background-color: ${(props) => (props.$active ? (props.theme == "light"?"#C9D5D8":"#0a2328" ) : "transparent")};
  border: none;
  width: 40px;
  min-width: fit-content;
  color: ${(props) => (props.theme === "light" ? "#0F2E35" : " #c9d5d8")};
  border-radius: 12px;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;
const TableContainer = styled.div<{ $maxwidth?: number }>`
  width: 100%;
  flex-grow: 1;
  heigh: 100%;
  overflow: hidden;
  min-width: ${(props) => (props.$maxwidth ? `${props.$maxwidth}px` : "800px")};
`;

const Td = styled.tr<{ theme: string }>`
  color: ${(props) => (props.theme === "light" ? "#0F2E35" : "")};
`;
function CustomTable({
  headerColor,
  columns,
  backgroundColor,
  radius,
  data,
  maxWidth,
  hidePagination,
  theme,
}: {
  backgroundColor?:any,
  radius?:any,
  headerColor?:any,
  columns: any;
  data: any;
  maxWidth?: number;
  hidePagination?: boolean;
  theme: string;
}) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const table = useReactTable({
    data: data,
    columns,
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    rowCount: data?.length,
    state: {
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
  });
console.log(headerColor);

  //TODO:change icons for dark
  return (
    <TableContainer $maxwidth={maxWidth} className="p-2  ">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <Th
                  theme={theme}
                  $width={100 / headerGroup.headers.length + 1}
                  className={`${index == 0 ? "first-thead" : ""} ${
                    index == headerGroup.headers.length - 1 ? "last-thead" : ""
                  }`}
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <Td key={row.id} theme={theme}>
              {row.getVisibleCells().map((cell) => (
                <td className="py-2" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </Td>
          ))}
        </tbody>
      </table>
      {!hidePagination && (
        <PaginationContainer>
          <PaginationButton theme={theme}
            $active
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <img src="/prev.svg" alt="" />
            Previous
          </PaginationButton>

          {Array.from({ length: table.getPageCount() }, (_, index) => (
            <PaginationButton
            theme={theme}
              key={index}
              $active={
                table.getState().pagination.pageIndex != 0
                  ? table.getState().pagination.pageIndex == index
                  : index == 0
              }
              onClick={() => table.setPageIndex(index)}
            >
              <p className="m-0 text-center">{index + 1}</p>
            </PaginationButton>
          ))}
          <PaginationButton
          theme={theme}
            $active
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
            <img src="/next.svg" alt="" />
          </PaginationButton>
        </PaginationContainer>
      )}
    </TableContainer>
  );
}

export default CustomTable;
