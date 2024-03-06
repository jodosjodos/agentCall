import {
  PaginationState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import "./table.css";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import { defaultData } from "../../data/call";

const Th = styled.th<{ $width?: number }>`
  width: ${(props) => (props.$width ? `${props.$width}%` : "fit-content")};
  min-width: 100px;
`;
const PaginationButton = styled.button`
  padding: 8px;
  background-color: #0a2328;
  border: none;
  min-width: 40px;

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
const ActionContainer = styled.div`
  border-radius: 8px;
  border: 1px;
  display: flex;
  width: fit-content;
  justify-content: center;
  background-color: #0f2e35;
  width: 30px;
  padding: 5px 0;
`;
const ActionImage = styled.img`
  width: 20px;
`;
const TableContainer = styled.div`
  width: 100%;
  overflow: scroll;
`;
const columnHelper = createColumnHelper<RecordingTableType>();

const columns = [
  columnHelper.accessor("contact", {
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor((row) => row.number, {
    id: "lastName",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Number</span>
  }),
  columnHelper.accessor("campaign", {
    header: () => "Campaign",
    cell: (info) => info.renderValue()
  }),
  columnHelper.accessor("call", {
    header: () => <span>Call</span>
  }),
  columnHelper.accessor("Date", {
    header: "Date"
  }),
  columnHelper.accessor("duration", {
    header: "Duration"
  }),
  columnHelper.accessor("outcome", {
    header: "Outcome"
  }),

  columnHelper.display({
    id: "actions",
    header: () => (
      <Row className="gap-1  px-1">
        <ActionContainer>
          <ActionImage src="/resume_outline.svg" alt="" />
        </ActionContainer>
        <ActionContainer>
          <ActionImage src="/date.svg" alt="" />
        </ActionContainer>
        <ActionContainer>
          <ActionImage src="/contactIcon.svg" alt="" />
        </ActionContainer>
      </Row>
    ),
    cell: () => (
      <Row className="gap-1  px-2">
        <ActionContainer>
          <ActionImage src="/resume_outline.svg" alt="" />
        </ActionContainer>
        <ActionContainer>
          <ActionImage src="/date.svg" alt="" />
        </ActionContainer>
        <ActionContainer>
          <ActionImage src="/contactIcon.svg" alt="" />
        </ActionContainer>
      </Row>
    ),
  }),
];

function CustomTable() {
  // const [data, setData] = useState(() => [...defaultData]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const table = useReactTable({
    data:defaultData,
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
    <TableContainer className="p-2">
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
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <img src="/prev.svg" alt="" />
          Previous
        </PaginationButton>
        <PaginationButton onClick={() => table.setPageIndex(1)}>
          <p className="m-0 text-center">1</p>
        </PaginationButton>
        <PaginationButton onClick={() => table.setPageIndex(2)}>
          2
        </PaginationButton>
        <PaginationButton onClick={() => table.setPageIndex(3)}>
          3
        </PaginationButton>
        <PaginationButton>...</PaginationButton>
        <PaginationButton onClick={() => table.setPageIndex(3)}>
          8
        </PaginationButton>
        <PaginationButton onClick={() => table.setPageIndex(3)}>
          9
        </PaginationButton>
        <PaginationButton onClick={() => table.setPageIndex(3)}>
          10
        </PaginationButton>
        <PaginationButton
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

export default CustomTable;
