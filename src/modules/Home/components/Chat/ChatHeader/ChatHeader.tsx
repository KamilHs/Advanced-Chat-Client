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
        author: {
            marginLeft: theme.spacing(1)
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
                <Avatar src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="avatar" />
                <Typography className={classes.author} variant="body1">Kamil Salimli</Typography>
            </Box>
            <Box>
                <SearchIcon color="disabled" className={classes.icon} />
                <MoreVertIcon color="disabled" className={[classes.icon, classes.moreIcon].join(" ")} />
            </Box>
        </Box>
    )
}