import {ColumnDef, getCoreRowModel, getSortedRowModel, Table} from "@tanstack/table-core";
import {flexRender, useReactTable} from "@tanstack/react-table";
import React from "react";

import FullHeightPage from "../../componets/FullHeightPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";


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


interface DeviceTableElementProps {
    table: Table<Device>
}
function DeviceTableHeader({table}: DeviceTableElementProps) {

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
                            className="text-left bg-blue-600 text-white h-8"
                        >
                            {header.isPlaceholder ? null : (
                                <div className="p-3">
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

function DeviceTableBody({table}: DeviceTableElementProps) {
    const rows = table.getRowModel().rows;
    return(
        <tbody>
        {rows.map(row => (
            <tr key={row.id} className="hover:bg-gray-100 hover:font-medium transition-all h-8 border-b">
                {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="p-3">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                ))}
            </tr>
        ))}
        </tbody>
    )

}

interface DeviceTableProps {
    readonly devices: Array<Device>
}
function DeviceTable({devices}: DeviceTableProps) {

    const [data] = React.useState(() => devices);

    const columns = React.useMemo<ColumnDef<Device>[]>(()=> deviceColumn,[]);
    const table = useReactTable<Device>({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
        debugTable: true
    });

    return(
        <table className="w-full rounded">
            <DeviceTableHeader table={table}/>
            <DeviceTableBody table={table}/>
        </table>
    )
}

function SearchInput() {
    const [focused, setFocused] = React.useState(false);
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    const focusBorder = focused ? "border-blue-600":"";
    return(
        <div className={`flex flex-row justify-center items-center w-full h-10 border bg-white rounded border-gray-400 ${focusBorder}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="pl-4" color="#9ca3af"/>
            <input type={"text"}
                   onFocus={onFocus}
                   onBlur={onBlur}
                   className="h-8 bg-white p-3 w-full rounded focus:outline-0 placeholder:italic group-focus:bg-blue-600"
                   placeholder="Search for ..."/>
        </div>
    )
}

function DevicePage() {

    return (
        <FullHeightPage className="bg-gray-100">
            <div className="flex flex-col pt-16 pl-8 pr-8">
                <h1 className="justify-start font-bold text-2xl">Mobile Devices</h1>
                <div className="h-8"/>
                <SearchInput />
                <div className="h-4"/>
                <div className="bg-white rounded border flex justify-center w-full h-full">
                    <DeviceTable devices={dummyData} />
                </div>
            </div>
        </FullHeightPage>
    )
}

export default DevicePage;