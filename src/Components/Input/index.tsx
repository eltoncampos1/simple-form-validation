import {  Input as MuiInput, InputLabel,FormLabel, FormGroup } from "@mui/material"

import { InputProps } from "./types"


export const Input = ({ name ,labelText,isError, errorText, ...rest }:InputProps) => {
  return (
    <FormGroup sx={{  width: '100%', marginBottom: '2rem'}}>  
        <InputLabel sx={{ marginBottom: '1rem', fontWeight: 'bold'}} aria-label={labelText}>{labelText}</InputLabel>
        <MuiInput  name={name} aria-label={labelText} {...rest} />
        {isError && <FormLabel sx={{ color: '#FF3333'}}>{errorText}</FormLabel>}
    </FormGroup>
  )
}