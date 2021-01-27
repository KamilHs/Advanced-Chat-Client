import React from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";
import format from 'date-fns/format';
import isToday from "date-fns/isToday";

import { DialogItem } from "./DialogItem";
import { IMessage, MessageStatus } from "../Chat/Messages/Messages";

export interface IDialog {
    id: string,
    lastMessage: IMessage,
}

const dialogs: IDialog[] = [
    {
        id: Math.random().toString(),
        lastMessage: {
            id: Math.random().toString(),
            content: "Salam varam",
            status: MessageStatus.seen,
            date: format(new Date(1611676402437 - 10000000), isToday(new Date(1611676402437 - 10000000)) ? "HH:mm" : "dd.MM.yyyy"),
            author: {
                id: Math.random().toString(),

                avatar: null,
                username: "Kamil Salimli",
                isAuthorOnline: false
            }
        }
    },
    {
        id: Math.random().toString(),
        lastMessage: {
            id: Math.random().toString(),
            content: "Salam varaasdddddddddddsdsdsdddasdasdsadsadsadasdsadasdadasdasdadasdm",
            status: MessageStatus.seen,
            date: format(new Date(1611676402437 - 10000000), isToday(new Date(1611676402437 - 10000000)) ? "HH:mm" : "dd.MM.yyyy"),
            author: {
                id: Math.random().toString(),
                avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
                username: "Kamil Salimli",
                isAuthorOnline: true
            }
        }
    },
    {
        id: Math.random().toString(),
        lastMessage: {
            id: Math.random().toString(),
            content: "Salam varaasdddddddddddsdsdsdddasdasdsadsadsadasdsadasdadasdasdadasdm",
            status: MessageStatus.seen,
            date: format(new Date(1611676402437 - 10000000), isToday(new Date(1611676402437 - 10000000)) ? "HH:mm" : "dd.MM.yyyy"),
            author: {
                id: "1",
                avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
                username: "Kamil Salimli",
                isAuthorOnline: true
            }
        }
    },
];

const useStyles = makeStyles((theme: Theme) => (
    {
        container: {
            height: "100%",
            maxHeight: "100%",
            borderRight: "1px solid #d0d0d0",
            overflowY: "auto"
        }
    }
));


export const Dialogs: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}> {
            dialogs.map((dialog) =>
                <DialogItem
                    key={dialog.id}
                    dialog={dialog}
                    ownId={"1"} />
            )
        }
        </Box>
    );
}