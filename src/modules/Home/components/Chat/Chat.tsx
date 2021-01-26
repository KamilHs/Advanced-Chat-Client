import React from "react";
import { makeStyles, Theme, Box } from "@material-ui/core";

import { Messages } from "./Messages/Messages";
import { ChatInput } from "./ChatInput/ChatInput";
import { ChatHeader } from "./ChatHeader/ChatHeader";

const useStyles = makeStyles((theme: Theme) => (
    {
        container: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },
    }
));

export const Chat: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <ChatHeader />
            <Messages/>
            <ChatInput />
        </Box>
    )
}