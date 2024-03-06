import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useReducer, useState } from "react";
import "./table.css";
import styled from "styled-components";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: RecordingTableType[] = [
  {
    contact: "Raam A",
    number: "3093578590",
    campaign: "Long list",
    call: "Incoming",
    Date: "24-11-23",
    duration: "00:05:50",
    outcome: "Follow up",
  },
  {
    contact: "Raam A",
    number: "3093578590",
    campaign: "Long list",
    call: "Incoming",
    Date: "24-11-23",
    duration: "00:05:50",
    outcome: "Follow up",
  },
  {
    contact: "Raam A",
    number: "3093578590",
    campaign: "Long list",
    call: "Incoming",
    Date: "24-11-23",
    duration: "00:05:50",
    outcome: "Follow up",
  },
  {
    contact: "Raam A",
    number: "3093578590",
    campaign: "Long list",
    call: "Incoming",
    Date: "24-11-23",
    duration: "00:05:50",
    outcome: "Follow up",
  },
  {
    contact: "Raam A",
    number: "3093578590",
    campaign: "Long list",
    call: "Incoming",
    Date: "24-11-23",
    duration: "00:05:50",
    outcome: "Follow up",
  },
  {
    contact: "Raam A",
    number: "3093578590",
    campaign: "Long list",
    call: "Incoming",
    Date: "24-11-23",
    duration: "00:05:50",
    outcome: "Follow up",
  },
  {
    contact: "Raam A",
    number: "3093578590",
    campaign: "Long list",
    call: "Incoming",
    Date: "24-11-23",
    duration: "00:05:50",
    outcome: "Follow up",
  },
  {
    contact: "Raam A",
    number: "3093578590",
    campaign: "Long list",
    call: "Incoming",
    Date: "24-11-23",
    duration: "00:05:50",
    outcome: "Follow up",
  },
  {
    contact: "Raam A",
    number: "3093578590",
    campaign: "Long list",
    call: "Incoming",
    Date: "24-11-23",
    duration: "00:05:50",
    outcome: "Follow up",
  },
];

const columnHelper = createColumnHelper<RecordingTableType>();

const columns = [
  columnHelper.accessor("contact", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.number, {
    id: "lastName",
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Number</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("campaign", {
    header: () => "Campaign",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("call", {
    header: () => <span>Call</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("Date", {
    header: "Date",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("duration", {
    header: "Duration",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("outcome", {
    header: "Outcome",
    footer: (info) => info.column.id,
  }),
];
const Th = styled.th<{ $width?: number }>`
  width: ${(props) => (props.$width ? `${props.$width}%` : "fit-content")};
`;
function CustomTable() {
  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
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
    </div>
  );
}

export default CustomTable;
