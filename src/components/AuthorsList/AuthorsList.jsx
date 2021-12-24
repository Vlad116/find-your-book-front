
import React, { useState, useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import { getData } from '../../utils/api.js'
import { host } from '../../constants'
import AuthorCard from './AuthorCard/AuthorCard'
import { SearchContext } from '../../layouts/MainLayout'
import { jsonserverhost } from '../../constants';
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
	gridContainer: {
	  paddingLeft: "10vw",
	  paddingRight: "10vw"
	}
});

const AuthorsList = ({ filterBy }) => {
	const classes = useStyles();
	const [authors, setAuthors] = useState([])
	const [isLoading, setLoading] = useState(false)
	const [prevQuery, setPrevQuery] = useState('')
	const { searchQuery } = React.useContext(SearchContext)

	const getAuthorWithPoster = async (author) => {
		return await getData(`${jsonserverhost}/authors/${author.id}`)
						.then((poster) => {
							console.log(poster)
							console.log(author.id)
							// console.log({...author, "author_poster_url": poster.poster_url })
							return {...author, "author_poster_url": poster !== undefined ? poster.poster_url : undefined }
						})
	}

	const setAuthorsWithPoster = (json) => {
		const authorsWithPoster = json.map((book) => {
			const AuthorWithPoster = getAuthorWithPoster(book)
			return AuthorWithPoster
		})
		Promise.all(authorsWithPoster).then((res) =>{ 
			setAuthors(res)
			return res
		})
	}

	useEffect(() => {
		if(!isLoading) {
			(async () => {
				setLoading(true)
				await getData(`${host}/author`).then((json) => {
					setAuthorsWithPoster(json)
				})
				setLoading(false)
			})()
		}
	}, [])

	useEffect(() => {
		if(!isLoading && searchQuery !== '' && searchQuery !== prevQuery) {
			(async () => {
				setLoading(true)
				await getData(`${host}/author/search?query=${searchQuery}`).then((json) => {
					setPrevQuery(searchQuery)
					setAuthorsWithPoster(json)
				})
				setLoading(false)
			})()
		}
	}, [searchQuery])

// 	useEffect(() => {
// 		if(!isLoading) {
// 			setLoading(true)
// 			getData(`${host}/author`).then((json) => {
// 				console.log(json)
// 				setAuthors(json)
// 				setLoading(false)
// 			})
// 		}
// 	}, [])
// 
// 	useEffect(() => {
// 		if(!isLoading && searchQuery !== '' && searchQuery !== prevQuery) {
// 			setLoading(true)
// 			getData(`${host}/author/search?query=${searchQuery}`).then((json) => {
// 				console.log(json)
// 				setPrevQuery(searchQuery)
// 				setAuthors(json)
// 				setLoading(false)
// 			})
// 		}
// 	}, [searchQuery])

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
					: authors.map((author, i) => 
						<Grid item xs={12} sm={12} md={12}>
							<AuthorCard key={author.id}
								id={author.id}
								image={author.author_poster_url}
								name={author.name}
								biography={author.biography} 
							/>
						</Grid>
					)
				}
			</Grid>
		</>
    )
}

export default AuthorsList;