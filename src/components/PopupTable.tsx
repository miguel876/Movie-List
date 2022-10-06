import { FC, useCallback, useRef } from 'react'
import { CircularProgress, Stack, Table as TableMUI, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { StlyedTableHeadCell, StyledTableCell, StyledTableRow } from '../styles/table.style';
import { useTable } from 'react-table'

interface TableI {
    data: [] | any[],
    loading: boolean,
    columns: { accessor: string; Header: any; }[],
    infiniteHandler: () => void,
    onRowClick?: (id: string) => void,
    hasMoreItems?: boolean
}

export const PopupTable:FC<TableI> = ({ columns, data, loading, infiniteHandler, hasMoreItems, onRowClick }) => {
  const { headerGroups, rows, prepareRow, getTableProps, getTableBodyProps } = useTable(
    {
      columns,
      data,
    }
  )

  // Infinite Scroll
  const observer = useRef<{
    disconnect(): any;
    observe(node: any): any;
    current?: any
  }>()
  const lastBookElementRef = useCallback((node: any) => {
    if (loading) return
    if (observer.current) observer.current?.disconnect?.()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMoreItems) {
        infiniteHandler()
      }
    })
    if (node) observer.current?.observe?.(node)
  }, [loading, hasMoreItems])

  return (
    <TableMUI {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <StlyedTableHeadCell {...column.getHeaderProps()}>{column.render('Header')}</StlyedTableHeadCell>
            ))}
          </TableRow>
        ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>

        {rows?.map((row, i) => {
          prepareRow(row)
          return (
            <StyledTableRow
              onClick={() => onRowClick?.(row.original.id)}
              key={`${row.id}`}
              ref={data.length === i + 1 ? lastBookElementRef : null}
            >
              {
                row.cells.map(cell => <StyledTableCell {...cell.getCellProps()}>{cell.render('Cell')}</StyledTableCell>)
              }
            </StyledTableRow>
          )
        })}
        {
            hasMoreItems && <TableCell colSpan={4}>
            <Stack direction="row" justifyContent="center"><CircularProgress /></Stack>
          </TableCell>
        }
        </TableBody>
    </TableMUI>
  )
}
