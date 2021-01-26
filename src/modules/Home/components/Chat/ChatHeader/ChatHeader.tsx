import React from "react";
import { makeStyles, Theme, Box, Avatar, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) => (
    {
        container: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
            borderBottom: "1px solid #d0d0d0",
        },
        avatarContainer: {
            position: "relative",
            marginRight: theme.spacing(1)
        },
        onlineMark: {
            position: "absolute",
            width: theme.spacing(1.5),
            height: theme.spacing(1.5),
            borderRadius: "50%",
            backgroundColor: "#13ad58",
            border: "2px solid #fff",
            right: 0,
            bottom: 0
        },
        icon: {
            cursor: "pointer"
        },
        moreIcon: {
            marginLeft: theme.spacing(2)
        }
    }
));

export const ChatHeader: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Box
                display="flex"
                alignItems="center"
            >
                <Box className={classes.avatarContainer}>
                    <Avatar src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="avatar" />
                    <Box className={classes.onlineMark}></Box>
                </Box>
                <Typography variant="body1">Kamil Salimli</Typography>
            </Box>
            <Box>
                <SearchIcon color="disabled" className={classes.icon} />
                <MoreVertIcon color="disabled" className={[classes.icon, classes.moreIcon].join(" ")} />
            </Box>
        </Box>
    )
}