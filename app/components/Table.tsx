'use client'

import React, { useMemo } from 'react';
import { MaterialReactTable, MRT_Row, type MRT_ColumnDef } from 'material-react-table';
import { ExportToCsv } from 'export-to-csv';
import PrintIcon from '@mui/icons-material/Print';

import { Delete, Edit } from '@mui/icons-material';
import { Box,IconButton, Tooltip} from '@mui/material';

//example data type
type Person = {
    id: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
    {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        id: '2',
        firstName: 'Jane',
        lastName: 'Doe',
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        id: '3',
        firstName: 'Joe',
        lastName: 'Doe',
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        id: '4',
        firstName: 'Kevin',
        lastName: 'Vandy',
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
    },
    {
        id: '5',
        firstName: 'Joshua',
        lastName: 'Rolluffs',
        address: '32188 Larkin Turnpike',
        city: 'Omaha',
        state: 'Nebraska',
    },
];

const Table = () => {
  //should be memoized or stable
const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
        {
            accessorKey: 'id', //access nested data with dot notation
            header: 'ID',
            size: 150,
        },
        {
            accessorKey: 'firstName', //access nested data with dot notation
            header: 'First Name',
            size: 150,
        },
        {
            accessorKey: 'lastName',
            header: 'Last Name',
            size: 150,
        },
        {
            accessorKey: 'address', //normal accessorKey
            header: 'Address',
            size: 200,
        },
        {
            accessorKey: 'city',
            header: 'City',
            size: 150,
        },
        {
            accessorKey: 'state',
            header: 'State',
            size: 150,
        },
        ],
        [],
);

const csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    useBom: true,
    // useKeysAsHeaders: true,
    headers: columns.map((c) => c.header),
};

const csvExporter = new ExportToCsv(csvOptions);

const handleExportData = () => {
    csvExporter.generateCsv(data);
};

const handleExportRows = (rows: MRT_Row<Person>[]) => {
    csvExporter.generateCsv(rows.map((row) => row.original));
};

return (
    <div className=''>

        <MaterialReactTable 
            columns={columns} 
            data={data} 
            enableRowSelection
            enablePinning
            positionToolbarAlertBanner="bottom"
            muiTableBodyRowProps={({ row }) => ({
                onClick: (event) => {
                    console.info(row.original);
                },
                sx: {
                  cursor: 'pointer', //you might want to change the cursor too when adding an onClick
                },
            })}
            renderTopToolbarCustomActions={({ table }) =>(
                <div className='flex gap-3'>
                    <div onClick={() => handleExportRows(table.getRowModel().rows)} className="flex items-center justify-center gap-2 p-2 text-white bg-[#fdbe00] rounded-md cursor-pointer">
                        <p className='text-sm'>Export Page</p>
                        <i className='fas fa-download'></i>
                    </div>
                    <div onClick={handleExportData} className="flex items-center justify-center gap-2 p-2 text-white bg-blue-500 rounded-md cursor-pointer">
                        <p className='text-sm'>Export All</p>
                        <i className='fas fa-download'></i>
                    </div>
                </div>
            )}
            displayColumnDefOptions={{
                'mrt-row-actions': {
                    muiTableHeadCellProps: {
                        align: 'center',
                    },
                    size: 120,
                },
            }}
            // enableColumnOrdering
            enableRowActions
            positionActionsColumn="last"
            renderRowActions={({ row, table }) => (
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Tooltip arrow placement="left" title="Edit">
                    <IconButton onClick={() => {}}>
                        <Edit />
                    </IconButton>
                    </Tooltip>
                    <Tooltip arrow placement="right" title="Delete">
                    <IconButton color="error" onClick={() => {}}>
                        <Delete />
                    </IconButton>
                    </Tooltip>
                </Box>
        )}
            />
    </div>
)
};

export default Table;
