import React, { useState, useEffect } from 'react';
import AuthorsList from '../components/AuthorsList/AuthorsList.jsx';
import { makeStyles } from "@mui/styles";
import { getData } from '../utils/api.js'
// import { searchBooks } from '../utils/productsHelper'
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

const Authors = (props) => {

	const classes = useStyles();
	
	const [filterBy, setFilter] = useState("all")
	// const [searchQuery, setSearchQuery] = useState('')
	
	const handleChangeFilter = (event, newFilter) => {
		setFilter(newFilter);
	};
	
	// const classes = useStyles();
	// 
	// const [filterBy, setFilter] = useState("all")
	// const [searchQuery, setSearchQuery] = useState('')
	// const [books, setBooks] = useState([])
	// const [isLoading, setLoading] = useState(false)

	// useEffect(() => {
	// 	if(!isLoading) {
	// 		setLoading(true)
	// 		getData(`${host}/author`).then((json) => {
	// 			console.log(json)
	// 			setBooks(json)
	// 			setLoading(false)
	// 		})
	// 	}
	// }, [])
	
	// const handleChangeFilter = (event, newFilter) => {
	// 	setFilter(newFilter);
	// };

    return (
		<>
			<AuthorsList filterBy={filterBy} />
		</>
    )
}

export default Authors;
