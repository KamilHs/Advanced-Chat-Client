import React from "react";
import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';

import { IMessage, MessageStatus } from "../../../../../redux/types";
import { Message } from "./MessageItem";

const messages: IMessage[] = [
    {
        id: Math.random().toString(),
        author: {
            id: Math.random().toString(),
            username: "Kamil Salimli",
            isAuthorOnline: false,
            avatar: null
        },
        date: new Date(1611676402437 - 10000000),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum ",
        status: MessageStatus.seen
    },
    {
        id: Math.random().toString(),
        author: {
            id: "1",
            username: "Kamil Salimli",
            isAuthorOnline: true,
            avatar: null
        },
        date: new Date(1611676402437 - 10000000),
        content: "Thanks, I'm fine, and you?",
        status: MessageStatus.seen
    }
];

const useStyles = makeStyles((theme: Theme) => (
    {
        container: {
            position: "relative",
            padding: theme.spacing(2),
            flexGrow: 2
        },
        noChatNotification: {
            textAlign: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
        },
        noChatNotificationIcon: {
            fontSize: theme.spacing(10)
        },
        noChatNotificationText: {
            color: "#b9b9b9"
        }
    }
));

export const Messages: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            {
                messages.length > 0
                    ? messages.map((message) => (
                        <Message key={message.id} message={message} ownId={"1"} />
                    ))
                    :
                    <Box className={classes.noChatNotification}>
                        <ChatBubbleOutlineOutlinedIcon color="disabled" className={classes.noChatNotificationIcon} />
                        <Typography className={classes.noChatNotificationText} variant="body1">Choose a chat</Typography>
                    </Box>
            }
        </Box>
    )
}