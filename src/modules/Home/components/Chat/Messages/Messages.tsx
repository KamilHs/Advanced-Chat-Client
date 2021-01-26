import React from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import { format } from 'date-fns'

import { Message } from "./MessageItem";

export enum MessageStatus {
    sent = "Sent",
    received = "Received",
    seen = "Seen",
}

export interface IAuthor {
    avatar: string | null,
    username: string
}

export interface IMessage {
    author: IAuthor,
    date: string,
    content: string | File,
    isOwn: boolean,
    status: MessageStatus
}

const messages: IMessage[] = [
    {
        author: {
            username: "Kamil Salimli",
            avatar: "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
        },
        date: format(new Date(1611676402437 - 10000000), "HH:mm"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum ",
        isOwn: false,
        status: MessageStatus.seen
    },
    {
        author: {
            username: "Kamil Salimli",
            avatar: "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
        },
        date: format(new Date(1611676402437 - 10000000), "HH:mm"),
        content: "Thanks, I'm fine, and you?",
        isOwn: true,
        status: MessageStatus.seen
    }
];

const useStyles = makeStyles((theme: Theme) => (
    {
        container: {
            padding: theme.spacing(2),
            flexGrow: 2
        }
    }
));

export const Messages: React.FC = () => {

    const classes = useStyles();
    return (
        <Box className={classes.container}>
            {
                messages.map((message, index) => (
                    <Message key={Math.random() * (index + 1) + message.date + message.author.username} message={message} />
                ))
            }
        </Box>
    )
}