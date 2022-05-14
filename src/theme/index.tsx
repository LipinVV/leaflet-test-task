import {createTheme, PaletteOptions} from "@mui/material";

interface Palette extends PaletteOptions {
    white: string,
    whiteShaded: string,
    blue: string,
    deepBlue: string,
    darkBlue: string,
    black: string,
    dark: string,
    green: string,
    yellow: string,
    red: string,
    orange: string,
    gray: string,
}

const palette: Palette = {
    white: '#ffffff',
    whiteShaded: '#d8ebf2',
    blue: '#4ea6d8',
    deepBlue: '#0555ae',
    darkBlue: '#000d51',
    black: '#152836',
    dark: '#050811',
    green: '#06d6a0',
    yellow: '#FFD700',
    red: '#FF0000',
    orange: '#ee6c4d',
    gray: '#92a9b7',
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        button_confirm: true;
        button_delete: true;
    }
}

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        paper_for_markers: true;
    }
}

const button_confirm: any = {
    props: {
        variant: 'button_confirm'
    },
    style: {
        backgroundColor: palette.blue,
        cursor: 'pointer',
        color: palette.white,
        height: '100%',
        textTransform: 'capitalize',
        lineHeight: '30px',
        fontSize: '15px',
        ":hover": {
            backgroundColor: palette.green,
            fontSize: '20px',
            color: palette.dark
        },
        "&:disabled": {
            backgroundColor: palette.gray,
        }
    }
}

const button_delete = {
    props: {
        variant: 'button_delete'
    },
    style: {
        backgroundColor: palette.yellow,
        cursor: 'pointer',
        color: 'black',
        height: '100%',
        textTransform: 'capitalize',
        fontSize: '15px',
        ":hover": {
            backgroundColor: palette.green,
        }
    }
}

const paper_for_markers: any = {
    props: {
        variant: 'paper_for_markers'
    },
    style: {
        // backgroundColor: palette.blue,
        // cursor: 'pointer',
        // color: palette.white,
        // height: '100%',
        // textTransform: 'capitalize',
        // lineHeight: '30px',
        // fontSize: '15px',
        // ":hover": {
        //     backgroundColor: palette.green,
        //     fontSize: '20px',
        //     color: palette.dark
        // },
        // "&:disabled": {
        //     backgroundColor: palette.gray,
        // }
    }
}

export const theme = createTheme({
    components: {
        MuiButton: {
            variants: [
                button_confirm,
                button_delete
            ]
        },
        MuiPaper: {
            variants: [
                paper_for_markers
            ]
        }
    },
    palette: palette
});