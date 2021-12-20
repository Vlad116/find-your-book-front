import React, { useState, useEffect } from 'react';
import BooksList from '../components/BooksList/BooksList'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { getData } from '../utils/api.js'
import { searchBooks } from '../utils/productsHelper'
import { host } from '../constants'

// function ScrollTop(props) {
// 	const { children, window } = props;
// 	// Note that you normally won't need to set the window ref as useScrollTrigger
// 	// will default to window.
// 	// This is only being set here because the demo is in an iframe.
// 	const trigger = useScrollTrigger({
// 	  target: window ? window() : undefined,
// 	  disableHysteresis: true,
// 	  threshold: 100,
// 	});
//   
// 	const handleClick = (event) => {
// 	  const anchor = (event.target.ownerDocument || document).querySelector(
// 		'#back-to-top-anchor',
// 	  );
//   
// 	  if (anchor) {
// 		anchor.scrollIntoView({
// 		  behavior: 'smooth',
// 		  block: 'center',
// 		});
// 	  }
// 	};
//   
// 	return (
// 	  <Zoom in={trigger}>
// 		<Box
// 		  onClick={handleClick}
// 		  role="presentation"
// 		  sx={{ position: 'fixed', bottom: 16, right: 16 }}
// 		>
// 		  {children}
// 		</Box>
// 	  </Zoom>
// 	);
// }
//   
// ScrollTop.propTypes = {
// 	children: PropTypes.element.isRequired,
// 	/**
// 	 * Injected by the documentation to work in an iframe.
// 	 * You won't need it on your project.
// 	 */
// 	window: PropTypes.func,
// };

const useStyles = makeStyles({
	gridContainer: {
	  paddingLeft: "10vw",
	  paddingRight: "10vw"
	}
  });

const Books = (props) => {
	const classes = useStyles();
	
	const [filterBy, setFilter] = useState("all")
	// const [searchQuery, setSearchQuery] = useState('')
	
	const handleChangeFilter = (event, newFilter) => {
		setFilter(newFilter);
	};

    return (
		<>
			<BooksList filterBy={filterBy}/>
		</>
    )
}

export default Books;
