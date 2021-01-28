import React from "react";
import { Box, makeStyles, TextField, Theme, Typography } from "@material-ui/core";
import format from 'date-fns/format';
import isToday from "date-fns/isToday";
import SearchIcon from '@material-ui/icons/Search';
import SpeakerNotesOffOutlinedIcon from '@material-ui/icons/SpeakerNotesOffOutlined';

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
                username: "Henry Jaguar",
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
        },
        textFieldContainer: {
            padding: theme.spacing(1),
            position: "relative"
        },
        textField: {
            width: "100%",
            "& *::before,& *::after": {
                display: "none"
            },
            "& input": {
                width: "100%",
                fontSize: "0.9rem",
                padding: theme.spacing(1),
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(4),
                borderRadius: theme.shape.borderRadius * 2,
                color: theme.palette.secondary.main,
                border: "1px solid #c6c6c6",
                "&:focus": {
                    boxShadow: `0 0 8px 1px #c6c6c6`,
                }
            },
        },
        searchIcon: {
            position: "absolute",
            top: "50%",
            right: "0",
            marginRight: theme.spacing(2),
            transform: "translateY(-50%)",
        },
        noDialogNotification: {
            marginTop: theme.spacing(2),
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        noDialogNotificationIcon: {
            fontSize: theme.spacing(10)
        },
        noDialogNotificationText: {
            marginTop: theme.spacing(1),
            color: "#b9b9b9"
        }
    }
));


export const Dialogs: React.FC = () => {
    const classes = useStyles();
    const [searchValue, setSearchValue] = React.useState<string>("");
    const [filtered, setFiltered] = React.useState<IDialog[]>(dialogs);

    React.useEffect(() => {
        setFiltered(
            dialogs.filter((dialog) => (
                dialog.lastMessage.author.username
                    .toLowerCase()
                    .indexOf(searchValue.toLowerCase()) !== -1)
            )
        );
    }, [searchValue])

    return (
        <Box className={classes.container}>
            <Box className={classes.textFieldContainer}>
                <TextField
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    className={classes.textField}
                    placeholder="Search chats"
                />
                <SearchIcon color="disabled" fontSize="small" className={classes.searchIcon} />
            </Box>
            {
                filtered.length !== 0
                    ? filtered.map((dialog) =>
                        <DialogItem
                            key={dialog.id}
                            dialog={dialog}
                            ownId={"1"} />
                    )
                    : <Box className={classes.noDialogNotification}>
                        <SpeakerNotesOffOutlinedIcon color="disabled" className={classes.noDialogNotificationIcon} />
                        <Typography variant="body1" className={classes.noDialogNotificationText}>No Dialog Found</Typography>
                    </Box>
            }
        </Box>
    );
}