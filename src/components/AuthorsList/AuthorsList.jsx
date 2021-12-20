
import React, { useState, useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import { getData } from '../../utils/api.js'
import { host } from '../../constants'
import AuthorCard from './AuthorCard/AuthorCard'
import { SearchContext } from '../../layouts/MainLayout'
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

	useEffect(() => {
		if(!isLoading) {
			setLoading(true)
			getData(`${host}/author`).then((json) => {
				console.log(json)
				setAuthors(json)
				setLoading(false)
			})
		}
	}, [])

	useEffect(() => {
		if(!isLoading && searchQuery !== '' && searchQuery !== prevQuery) {
			setLoading(true)
			getData(`${host}/author/search?query=${searchQuery}`).then((json) => {
				console.log(json)
				setPrevQuery(searchQuery)
				setAuthors(json)
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
					: authors.map((author, i) => 
						<Grid item xs={12} sm={12} md={12}>
							<AuthorCard key={author.id}
								id={author.id}
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