import { TableCell, TableRow, alpha } from "@mui/material";
import { styled } from "@mui/system";

export const StlyedTableHeadCell = styled(TableCell)(({ theme }) => ({
    color: theme.palette.table.main,
    borderColor: theme.palette.table.main,
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    paddingBottom: 4.5,
    paddingTop: 0,
    lineHeight: 1,
    "& .MuiTypography-root" : {
        fontSize: 10,
        fontWeight: 600
    }
}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    transition: 'all 0.3s',
    "&:hover": { 
        cursor: 'pointer',
        backgroundColor: alpha(theme.palette.table.light, 0.1)
    }
}))

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    color: theme.palette.table.dark,
    borderColor: theme.palette.table.light,
    fontSize: 16,
}))

