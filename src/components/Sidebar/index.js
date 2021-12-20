import React, { useState }from 'react';
import { 
	Link as RouterLink,
} from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
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
				{["Login", "Register", "Books", "Authors"].map((text, index) => (
					<ListItem button key={text} >
						<MaterialLink 
							component={RouterLink}
							underline="none"
							color="inherit" 
							sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "0.8vw", paddingTop: "0.8vw" }}
							to={`/${text.toLowerCase()}`}>
							{text}
						</MaterialLink>
					</ListItem>
				))}
			</List>
		</Drawer>
  	);
}

export default React.memo(Sidebar);