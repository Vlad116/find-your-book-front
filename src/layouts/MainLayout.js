import React, { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { styled, useTheme } from "@mui/material/styles";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar'


const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open, drawerWidth}) => ({
	  flexGrow: 1,
	  padding: theme.spacing(3),
	  paddingTop: '64px',
	  transition: theme.transitions.create("margin", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	  }),
	  marginLeft: `${open ? drawerWidth : 0}px`,
	  ...(open && {
		transition: theme.transitions.create("margin", {
		  easing: theme.transitions.easing.easeOut,
		  duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 200
	  })
	})
  );

export const SearchContext = React.createContext({})

const MainLayout = () => {
	const drawerWidth = 200;
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const handleSetSearch = useCallback((searchQuery) => {
		setSearchQuery(searchQuery);
	}, [setSearchQuery])

	const handleDrawerOpen = () => {
	  setOpen(true);
	};
  
	const handleDrawerClose = () => {
	  setOpen(false);
	};
  	return (
		<SearchContext.Provider value={{ "searchQuery": searchQuery}}>
			<div className="App">
				<Header title="Find Your Book" handleDrawerOpen={handleDrawerOpen} open={open} drawerWidth={drawerWidth} withSearch searchQuery={searchQuery} setSearchQuery={handleSetSearch} />
				<Sidebar theme={theme} drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose} open={open} />
				<Main open={open}>
					<Outlet />
				</Main>
			</div>
		</SearchContext.Provider>
  	);
}

export default MainLayout;