import {InputProps as MuiInputProps} from '@mui/material'
import { FormikErrors } from 'formik';

export interface InputProps extends MuiInputProps {
    name: string;
    labelText: string;
    errorText?: string | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined;
    isError: boolean;
}