import {ColumnDef, getCoreRowModel, getSortedRowModel, Table} from "@tanstack/table-core";
import {flexRender, useReactTable} from "@tanstack/react-table";
import React from "react";

type Device = {
    id:string,
    model: string,
    manuFracture: string,
    serialNumber: string,
}

const dummyData: Array<Device> = [
    {
        id: "1",
        model: "Model 1",
        manuFracture: "Samsung",
        serialNumber: "123",
    },
    {
        id: "2",
        model: "Model 2",
        manuFracture: "Samsung",
        serialNumber: "223",
    },
    {
        id: "3",
        model: "Model 3",
        manuFracture: "Samsung",
        serialNumber: "323",
    }
];

const deviceColumn: ColumnDef<Device>[] = [
    {
        accessorKey: "id",
        header: "Id",

    },
    {
        accessorKey:"model",
        header: "Model",
    },
    {
        accessorKey:"manuFracture",
        header: "Manufracture"
    },
    {
        accessorKey:"serialNumber",
        header: "Serial No."
    }
]


interface DeviceTableProps {
    table: Table<Device>
}
function DeviceTableHeader({table}: DeviceTableProps) {

    return (
        <thead>
        {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                    return(
                        <th
                            key={header.id}
                            colSpan={header.colSpan}
                            style={{width: header.getSize()}}
                        >
                            {header.isPlaceholder ? null : (
                                <div>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </div>
                            )

                            }
                        </th>
                    );
                })}
            </tr>
        ))}
        </thead>
    );
}

function DeviceTableBody({table}: DeviceTableProps) {
    const rows = table.getRowModel().rows;
    return(
        <tbody>
        {rows.map(row => (
            <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                ))}
            </tr>
        ))}
        </tbody>
    )

}

function DevicePage() {

    const [data] = React.useState(() => dummyData);

    const columns = React.useMemo<ColumnDef<Device>[]>(()=> deviceColumn,[]);
    const table = useReactTable<Device>({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
        debugTable: true
    });

    return (
        <div className="p-2">
            <div className="h-2" />
            <div>
                <table>
                    <DeviceTableHeader table={table}/>
                    <DeviceTableBody table={table}/>
                </table>
            </div>
        </div>
    )
}

export default DevicePage;