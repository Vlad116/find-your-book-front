import React, { useState }from 'react';
import { Outlet } from 'react-router-dom';
import { styled, useTheme } from "@mui/material/styles";
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import './App.css';

const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
	  flexGrow: 1,
	  padding: theme.spacing(3),
	  transition: theme.transitions.create("margin", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	  }),
	  marginLeft: `-${drawerWidth}px`,
	  ...(open && {
		transition: theme.transitions.create("margin", {
		  easing: theme.transitions.easing.easeOut,
		  duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	  })
	})
  );

const App = () => {
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
	  setOpen(true);
	};
  
	const handleDrawerClose = () => {
	  setOpen(false);
	};
  	return (
		<div className="App">
			<Header title="Find Your Book" handleDrawerOpen={handleDrawerOpen} open={open} drawerWidth={drawerWidth} withSearch />
			<Sidebar theme={theme} drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose} open={open} />
			<Main open={open}>
				<Outlet />
			</Main>
		</div>
  	);
}

export default App;