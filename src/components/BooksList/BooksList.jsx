
import React, { useState, useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import { getData } from '../../utils/api.js'
import { searchBooks } from '../../utils/productsHelper'
import { host } from '../../constants'
import BookCard from './BookCard/BookCard'
import { SearchContext } from '../../layouts/MainLayout'
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

const useStyles = makeStyles({
	gridContainer: {
	  paddingLeft: "10vw",
	  paddingRight: "10vw"
	}
});

const BooksList = ({ filterBy }) => {
	const classes = useStyles();
	const [books, setBooks] = useState([])
	const [isLoading, setLoading] = useState(false)
	const [prevQuery, setPrevQuery] = useState('')
	const { searchQuery } = React.useContext(SearchContext)
	console.log(searchQuery)

	useEffect(() => {
		if(!isLoading) {
			setLoading(true)
			getData(`${host}/book`).then((json) => {
				console.log(json)
				setBooks(json)
				setLoading(false)
			})
		}
	}, [])

	useEffect(() => {
		if(!isLoading && searchQuery !== '' && searchQuery !== prevQuery) {
			setLoading(true)
			getData(`${host}/book/search?query=${searchQuery}`).then((json) => {
				console.log(`${host}/book/search?query=${'Гарри'}`)
				console.log(json)
				setPrevQuery(searchQuery)
				setBooks(json)
				setLoading(false)
			})
		}
	}, [searchQuery])

    return (
		<>
			<Grid
				container
				spacing={8}
				className={classes.gridContainer}
				justify="center"
				alignItems="center"
			>
				{ isLoading
					? <Grid item 
							xs={12}
							sm={12} 
							md={12} 
							sx={{marginTop: 10}}
						>
							{'Загрузка...'}
						</Grid>
					: books.map((book, i) => 
						<Grid item xs={12} sm={12} md={12}>
							<BookCard key={book.id}
								id={book.id}
								name={book.name}
								description={book.description} 
								year={book.year}
								tags={book.tags}
								genres={book.genres}
								authors={book.authors} />
						</Grid>
					)
				}
			</Grid>
		</>
    )
}

export default BooksList;