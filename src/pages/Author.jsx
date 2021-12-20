import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import { getData } from '../utils/api.js'
import { host } from '../constants'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import BookIcon from '@mui/icons-material/Book';

const Author = () => {
	const { authorId } = useParams();
	const [author, setAuthor] = useState({})
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if(isLoading) {
			setLoading(true)
			getData(`${host}/author/${authorId}`).then((json) => {
				console.log(json)
				setAuthor(json)
				setLoading(false)
			})
		}
	}, [])

    return (
<>
		{/* <h1>{book.name}</h1> */}
		{!isLoading && <Card sx={{ maxWidth: 1400 }}>
		<CardContent>
			<Typography gutterBottom variant="h5" component="div" sx={{textAlign: "start", display: "flex", flexDirection: "row"}}>
				<PersonIcon/> {author.name}
				{/* {<MaterialLink 
							component={RouterLink}
							underline="none"
							color="inherit" 
							sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "1vw"}}
							to={`/books/${id}`}>
							<BookIcon />{name} {year ? `(${year})` : ''}
				</MaterialLink>
				} */}
				{/* {authors.map((author, i) => <MaterialLink 
							component={RouterLink}
							underline="none"
							color="inherit" 
							sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", paddingLeft: "0.5vw"}}
							to={`/authors/${author.id}`}>
							{`${i === 0 ? '— ' : ''} ${author.name}${(i + 1) === authors.length ? '.':', '}`}
						</MaterialLink>
				)} */}
			</Typography>
			<Typography variant="body2" color="text.secondary" sx={{ textAlign: ""}}>
				{author.biography}
        	</Typography>
		</CardContent>
  	</Card>}
		</>
    )
}

export default Author;
