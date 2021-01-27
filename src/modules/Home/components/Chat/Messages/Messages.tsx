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
    id: string,
    avatar: string | null,
    username: string,
    isAuthorOnline: boolean

}

export interface IMessage {
    id: string,
    author: IAuthor,
    date: string,
    content: string | File,
    status: MessageStatus
}

const messages: IMessage[] = [
    {
        id: Math.random().toString(),
        author: {
            id: Math.random().toString(),
            username: "Kamil Salimli",
            isAuthorOnline: false,
            avatar: "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
        },
        date: format(new Date(1611676402437 - 10000000), "HH:mm"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum ",
        status: MessageStatus.seen
    },
    {
        id: Math.random().toString(),
        author: {
            id: "1",
            username: "Kamil Salimli",
            isAuthorOnline: true,
            avatar: "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
        },
        date: format(new Date(1611676402437 - 10000000), "HH:mm"),
        content: "Thanks, I'm fine, and you?",
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
                    <Message key={Math.random() * (index + 1) + message.date + message.author.username} message={message} ownId={"1"} />
                ))
            }
        </Box>
    )
}