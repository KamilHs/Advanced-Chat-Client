import React from "react";
import { Box, makeStyles, Theme, TextField } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme: Theme) => (
    {
        container: {
            borderTop: "1px solid #d0d0d0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        },
        textField: {
            "& *::before,& *::after": {
                display: "none"
            },
            "& input": {
                width: "100%",
                padding: theme.spacing(1),
                borderRadius: theme.shape.borderRadius,
                color: theme.palette.secondary.main,
                border: "1px solid #c6c6c6",
                "&:focus": {
                    boxShadow: `0 0 8px 1px #c6c6c6`,
                }
            },
            flexGrow: 2,
            marginRight: theme.spacing(1)
        },
        sendIcon: {
            cursor: "pointer"
        }
    }
))

export const ChatInput: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <TextField className={classes.textField} />
            <SendIcon color="primary" className={classes.sendIcon} />
        </Box>
    )
}