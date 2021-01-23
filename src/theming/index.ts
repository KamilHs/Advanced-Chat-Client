import { ThemeOptions, createMuiTheme, responsiveFontSizes } from "@material-ui/core";

class Theming {
    private createTheme = (): ThemeOptions => ({
        palette: {
            text: {
                primary: "#006bf1",
                secondary: "#000"
            },
            primary: {
                main: "#006bf1",
                contrastText: "#fff"
            },
            secondary: {
                main: "#000",
                contrastText: "#fff"
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
        const themeOptions = this.createTheme();
        const theme = createMuiTheme(themeOptions);

        return responsiveFontSizes(theme);
    }
}

export const themeService = new Theming();