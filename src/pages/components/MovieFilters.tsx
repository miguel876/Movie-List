import { IconButton, Menu, Stack } from '@mui/material'
import { Dispatch, FC, SetStateAction, useState, useEffect } from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import { Button } from '../../components/Button';
import { StyledMenuSelectItem, StyledMenuSelectTitle } from '../../styles/text.style';

interface MovieFiltersI {
    filtersHandler: Dispatch<SetStateAction<{ page: number, size: number, year?: number | null, rank?: number | null }>>
}

const defaultParams: { page: number, size: number, year?: number | null, rank?: number | null } = { page: 0, size: 30, year: null, rank: null}

export const MovieFilters:FC<MovieFiltersI> = ({ filtersHandler }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [ year, setYear] = useState(0)
  const [ deactivate, setDeactivate] = useState(false)
  const open = Boolean(anchorEl);

  const onRevenueChange = () => {
      filtersHandler({...defaultParams, rank: 10})
  }

  const onYearChange = (year: number) => {
      setYear(year)
      filtersHandler({ ...defaultParams, rank: 10, year })
      setAnchorEl(null)
  }

  const filterReset = () => {
      filtersHandler({ ...defaultParams, year: null, rank: null})
      setYear(0)
      setDeactivate(true)
  }

  return (
    <Stack direction="row" spacing={16} alignItems="center" >
        <Button variant="outlined" onClick={onRevenueChange} deactivate={deactivate} deactivateHandler={setDeactivate}>Top 10 Revenue</Button>
        <Button variant="outlined" onClick={(evt) => setAnchorEl(evt.currentTarget)} aria-controls={open ? 'demo-positioned-menu' : undefined} deactivate={deactivate}>
            { year > 0 ? `Top 10 Revenue ${year}` : 'Top 10 Revenue per Year'}
        </Button>
        <Menu
            id="demo-positioned-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            sx={{'& .MuiMenu-paper': {
                width: 178
            }}}
        >
            <StyledMenuSelectTitle>
                Select a year
            </StyledMenuSelectTitle>
            {
                [...Array(16)].map((val, i) => <StyledMenuSelectItem onClick={() => onYearChange(2000 + i)}>{2000 + i}</StyledMenuSelectItem>).reverse()
            }
        </Menu>
        <IconButton onClick={filterReset}>
            <ReplayIcon sx={{ color: 'primary.main', '&:hover': { cursor: 'pointer' }}} />
        </IconButton>
    </Stack>
  )
}