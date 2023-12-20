import { Variant } from "../container/SnackbarContainer"; 

export interface AppendSnackbar {
    variant: Variant;
    options: AppendSnackbarOptions;
}

export interface AppendSnackbarOptions {
    autoHideDuration?: number;
    message: string;
}