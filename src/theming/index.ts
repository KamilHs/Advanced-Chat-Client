import { ThemeOptions, createMuiTheme } from "@material-ui/core";

class Theming {
    public getTheme = (): ThemeOptions => ({
        palette: {
            text: {
                primary: "black",
                secondary: "white"
            },
            primary: {
                main: "black",
                contrastText: "white"
            },
            secondary: {
                main: "white",
                contrastText: "black"
            }
        },
        shape: {
            borderRadius: 8
        },
        typography: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 16
        }
    })
}

export const themeService = new Theming();