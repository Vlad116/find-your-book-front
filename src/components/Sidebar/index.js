import React, { useState }from 'react';
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end"
}));

const Sidebar = ({ drawerWidth, handleDrawerClose, open }) => {
	const theme = useTheme();

  	return (
		<Drawer
			sx={{
			width: drawerWidth,
			flexShrink: 0,
			"& .MuiDrawer-paper": {
				width: drawerWidth,
				boxSizing: "border-box"
			}
			}}
			variant="persistent"
			anchor="left"
			open={open}
		>
			<DrawerHeader>
			<IconButton onClick={handleDrawerClose}>
				{theme.direction === "ltr" ? (
				<ChevronLeftIcon />
				) : (
				<ChevronRightIcon />
				)}
			</IconButton>
			</DrawerHeader>
			<Divider />
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem button key={text}>
					{/* <ListItemIcon>
						{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
					</ListItemIcon> */}
					<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Drawer>
  	);
}

export default React.memo(Sidebar);