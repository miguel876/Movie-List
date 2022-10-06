import { FC, useState, useEffect, Dispatch, SetStateAction } from 'react'
import { StyledOutlinedButton } from '../styles/buttons.style'

interface ButtonI {
    children?: any,
    variant: "text" | "outlined" | "contained" | undefined,
    onClick?: (evt?: any) => void,
    deactivate?: boolean,
    deactivateHandler?: Dispatch<SetStateAction<boolean>>
}

export const Button:FC<ButtonI> = ({ children, variant, onClick, deactivate, deactivateHandler, ...rest }) => {
    const [ active, setActive] = useState(false)
    const onClickHandler = (evt: any) => {
        onClick?.(evt)
        setActive(true)
    }

    useEffect(() => {
        if(deactivate) {
            setActive(false)
            // Set deactivate to false so it can be deactivated again
            deactivateHandler?.(false)
        }
    }, [deactivate])

    return (
        <StyledOutlinedButton  
            variant={variant}
            onClick={onClickHandler} 
            active={active ? "true" : "false"}
            {...rest}
        >
            {children}
        </StyledOutlinedButton>
    )
} 