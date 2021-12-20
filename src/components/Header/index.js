import React from 'react';
import { AppHeader, HeaderTitle } from './Styles'
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from '../SearchBar'

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open"
  })(({ theme, open, drawerWidth }) => ({
	transition: theme.transitions.create(["margin", "width"], {
	  easing: theme.transitions.easing.sharp,
	  duration: theme.transitions.duration.leavingScreen
	}),
	...(open && {
	  width: `calc(100% - ${drawerWidth}px)`,
	  marginLeft: `${drawerWidth}px`,
	  transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.easeOut,
		duration: theme.transitions.duration.enteringScreen
	  })
	})
  }));

const BurgerButton = styled(IconButton, { shouldForwardProp: (prop) => prop !== "open"
  })(({ theme, open }) => ({
		...(!open && {
			display: 'none',
		})
  }))

const Header = ({ title, handleDrawerOpen, open, drawerWidth, withSearch, searchQuery, setSearchQuery }) => {
	return (
		<AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
			<AppHeader>
				{!open && 
					<BurgerButton 	
						color="inherit"
						aria-label="open drawer"
						edge="start"
						sx={{ mr: 2 }}
						onClick={handleDrawerOpen} 
						open={open}
						style={{marginLeft: '0.5rem'}}
					>
						<MenuIcon />
					</BurgerButton>}
				<HeaderTitle>{title}</HeaderTitle>
				{withSearch && <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
			</AppHeader>
		</AppBar>
  	);
}

export default React.memo(Header);