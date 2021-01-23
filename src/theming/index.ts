import { ThemeOptions, createMuiTheme } from "@material-ui/core";

class Theming {
    private createTheme = (): ThemeOptions => ({
        palette: {
            text: {
                primary: "#000",
                secondary: "#fff"
            },
            primary: {
                main: "#000",
                contrastText: "#fff"
            },
            secondary: {
                main: "#fff",
                contrastText: "#000"
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
    public getTheme = () => {
        const theme = this.createTheme();

        return createMuiTheme(theme);
    }
}

export const themeService = new Theming();