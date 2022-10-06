import { DialogContent, Grid } from '@mui/material';
import { FC } from 'react'
import { useGet } from '../../hooks/useFetch'
import { StyledPopupSubTitle, StyledPopupText, StyledPopupTitle } from '../../styles/text.style';
import { Popup } from '../../components/Popup';
import { StyledDialogDivider } from '../../styles/global.style';

interface MovieDetailI {
    id: string,
    onClose: () => void
}

export interface MovieDetailObjectI {
    year: number,
    genre: string,
    description: string,
    director: string,
    actors: string,
    runtime: number,
    rating: number,
    votes: number,
    revenue: number,
    metascore: number
}

const popupData = [
    { key: "year", label: "Year"}, 
    { key: "genre", label: "Genre"}, 
    { key: "description", label: "Description"}, 
    { key: "director", label: "Director", sx: { spacing: 4, color: 'blue' }}, 
    { key: "actors", label: "Actors", sx: { spacing: 8, color: 'blue' }}, 
    { key: "runtime", label: "Runtime", endProps: ' mins'}, 
    { key: "rating", label: "Rating"}, 
    { key: "votes", label: "Votes"}, 
    { key: "revenue", label: "Revenue", beginProps: '$'}, 
    { key: "metascore", label: "Metascore"}, 
]

export const MovieDetailPopup:FC<MovieDetailI> = ({ id, onClose }) => {
    const { data } = useGet(`movies/${id}`)
    
  return (
    <Popup 
        onClose={onClose}
        title={
            <>
                <StyledPopupTitle sx={{ fontWeight: 100 }}>{ data?.title }</StyledPopupTitle>
                <StyledDialogDivider />
            </>
        }
    >      
        <DialogContent dividers>
            <Grid container>
            {
                popupData.map(({ key, label, sx, beginProps, endProps}) => {
                    return (
                        <Grid item xs={sx?.spacing || 12} sx={{ mb: 17 }}>
                            <StyledPopupSubTitle>
                            { label }
                            </StyledPopupSubTitle>
                            <StyledPopupText color={sx?.color}>
                            { beginProps }
                            { data[key as keyof MovieDetailObjectI] }
                            { endProps }
                            </StyledPopupText>
                        </Grid>
                    )
                })
            }
            </Grid>
        </DialogContent>
      </Popup>
  )
}