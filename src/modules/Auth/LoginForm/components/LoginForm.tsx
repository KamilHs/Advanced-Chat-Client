import React from "react";
import { makeStyles, Theme, Grid, Typography, Box, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    loginContainer: {
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        maxWidth: "1170px",
        padding: "0 15px",
    },
}));


export const LoginForm: React.FC = () => {
    const classes = useStyles();
    console.log(useTheme());

    return (
        <Box className={classes.loginContainer}>
            <Grid
                container
                justify="center"
                spacing={1}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={5}
                >
                    <Typography align="center" variant="h2">Login</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

