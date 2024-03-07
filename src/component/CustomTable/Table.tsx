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

import { defaultData } from "../../data/call";
const Th = styled.th<{ $width?: number }>`
  width: ${(props) => (props.$width ? `${props.$width}%` : "fit-content")};
  min-width: 100px;
`;
const PaginationButton = styled.button<{ $active?: boolean }>`
  padding: 8px;
  background-color: ${(props) => (props.$active ? "#0a2328" : "transparent")};
  border: none;
  width: 40px;
  min-width: fit-content;

  border-radius: 12px;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c9d5d8;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;
const TableContainer = styled.div`
  width: 100%;
  overflow: hidden;
  min-width: 800px;
`;


function CustomTable({columns}:{columns:any}) {
  
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const table = useReactTable({
    data: defaultData,
    columns,
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    rowCount: defaultData?.length,
    state: {
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer className="p-2  ">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <Th
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td className="py-2" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationContainer>
        <PaginationButton
          $active
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <img src="/prev.svg" alt="" />
          Previous
        </PaginationButton>

        {Array.from({ length: table.getPageCount() }, (_, index) => (
          <PaginationButton
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
          $active
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
          <img src="/next.svg" alt="" />
        </PaginationButton>
      </PaginationContainer>
    </TableContainer>
  );
}

export default CustomTable