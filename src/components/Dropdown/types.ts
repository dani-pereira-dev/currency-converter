import { SelectChangeEvent } from "@mui/material"

export interface Options {
    label: string,
    value: string
}

export interface DropdownProps {
    label: string
    onChange: (event: SelectChangeEvent<string>) => void
    options: Options[]
    disabled?: boolean
    value: string
}