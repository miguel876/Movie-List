import { Container, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { PageTitle } from '../components/PageTitle'
import { PopupTable } from '../components/PopupTable'
import { useGet } from '../hooks/useFetch'
import { MovieDetailPopup } from './components/MovieDetailPopup'
import { MovieFilters } from './components/MovieFilters'

const columns: {accessor: string, Header: any, Cell?: any }[] = [
  {
    accessor: 'rank',
    Header: () => <Typography sx={{ textAlign: 'center' }}>Ranking</Typography>,
    Cell: ({ value }: { value: string }) => <Typography sx={{ textAlign: 'center'}}>{ value }</Typography>,

  },
  {
    accessor: 'title',
    Header: 'Title',
  },
  {
    accessor: 'year',
    Header: 'Year',
  },
  {
    accessor: 'revenue',
    Header: 'Revenue',
  },
]

interface FilterI {
  page: number,
  size: number,
  year?: number | null,
  rank?: number | null
}

export default function MoviesList() {
  const [ filters , setFilters] = useState<FilterI>({ page: 0, size: 30, year: null, rank: null })
  const [ tableData, setTableData] = useState<any[]>([])
  const [{rowId, open}, setRowClicked] = useState({ rowId: '', open: false})
  const { data, loading } = useGet('movies', {...filters}, filters)

  const onRowClick = (rowId: string) => {
    setRowClicked({ rowId, open: true})
  }

  const onRowClose = () => {
    setRowClicked({ rowId: '', open: false})
  }

  useEffect(() => {
    // Clear table when the year or rank filter is set
    if(filters.year || filters.rank) setTableData(data?.content)
    else setTableData((prevData: any[]) => [...prevData || [], ...data?.content || []])
  }, [data])

  return (
    <Container>
      <PageTitle sx={{ pt: 24, pb: 32 }}>Movie Ranking</PageTitle>
      <Stack spacing={16} direction="row" sx={{ pb: 46}} >
        <MovieFilters filtersHandler={setFilters} />
      </Stack>
      <PopupTable 
        columns={columns} 
        data={tableData} 
        loading={loading} 
        onRowClick={onRowClick} 
        infiniteHandler={() => setFilters((f) => ({...f, page: filters.page + 1}))} 
        hasMoreItems={!data?.last}
      />
      {
        open && <MovieDetailPopup id={rowId} onClose={onRowClose} />
      }
    </Container>
  )
}
