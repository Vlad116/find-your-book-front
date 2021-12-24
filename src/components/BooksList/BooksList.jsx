
import React, { useState, useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import { getData } from '../../utils/api.js'
import { host } from '../../constants'
import BookCard from './BookCard/BookCard'
import { SearchContext } from '../../layouts/MainLayout'
import { jsonserverhost } from '../../constants';
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

	const getBookWithPoster = async (book) => {
		return await getData(`${jsonserverhost}/books/${book.id}`)
						.then((poster) => {
							console.log(poster)
							console.log(book.id)
							// console.log({...book, "poster_url": poster.poster_url })
							return {...book, "poster_url": poster !== undefined ? poster.poster_url : undefined }
						})
	}

	const setBooksWithPoster = (json) => {
		const booksWithPoster = json.map((book) => {
			const BookWithPoster = getBookWithPoster(book)
			return BookWithPoster
		})
		Promise.all(booksWithPoster).then((res) =>{ 
			setBooks(res)
			return res
		})
	}

	useEffect(() => {
		if(!isLoading) {
			(async () => {
				setLoading(true)
				await getData(`${host}/book`).then((json) => {
					setBooksWithPoster(json)
				})
				setLoading(false)
			})()
		}
	}, [])

	useEffect(() => {
		if(!isLoading && searchQuery !== '' && searchQuery !== prevQuery) {
			(async () => {
				setLoading(true)
				await getData(`${host}/book/search?query=${searchQuery}`).then((json) => {
					setPrevQuery(searchQuery)
					setBooksWithPoster(json)
				})
				setLoading(false)
			})()
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
								image={book.poster_url}
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