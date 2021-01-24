import React from "react";
import { Grid, makeStyles, Theme, Box } from "@material-ui/core";

import { Dialogs } from "./Dialogs/Dialogs";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        [theme.breakpoints.up('xs')]: {
            maxWidth: "540px",
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: "720px",
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: "960px",
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: "1170px",
        },
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        maxHeight: "100vh",
        padding: "30px 15px",
    },
    h100: {
        maxHeight: "100%"
    }
}));


export const Inbox: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Grid
                container
                justify="center"
                spacing={0}
            >
                <Grid
                    item
                    xs={12}
                    md={4}
                    lg={3}
                    className={classes.h100}
                >
                    <Dialogs />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={8}
                    lg={9}
                >
                </Grid>
            </Grid>
        </Box>
    );
}