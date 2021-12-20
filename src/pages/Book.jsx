import React, { useState, useEffect } from 'react';
import { 
	Link as RouterLink,
} from 'react-router-dom';
import { Link, useParams } from "react-router-dom"
// import { makeStyles } from "@mui/styles";
import { getData } from '../utils/api.js'
// import { searchBooks } from '../utils/productsHelper'
import MaterialLink from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BookIcon from '@mui/icons-material/Book';
import "../App.css";
import { borderRadius, width } from '@mui/system';
import { isNull } from 'lodash';
import { host } from '../constants'

const Book = () => {
	const { bookId } = useParams();
	const [book, setBook] = useState({})
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if(isLoading) {
			setLoading(true)
			console.log(bookId)
			getData(`${host}/book/${bookId}`).then((json) => {
				console.log(json)
				setBook(json)
				setLoading(false)
			})
		}
	}, [])
    
	return (<>
		{/* <h1>{book.name}</h1> */}
		{!isLoading && <Card sx={{ maxWidth: 1400 }}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div" sx={{textAlign: "start", display: "flex", flexDirection: "row"}}>
					<Typography 
								sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "1vw"}}>
								<BookIcon />{`${book.name} ${book.year ? `(${book.year})` : ''}`}
					</Typography>
					{book.authors.map((author, i) => <MaterialLink 
								component={RouterLink}
								underline="none"
								color="inherit" 
								sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", paddingLeft: "0.5vw"}}
								to={`/authors/${author.id}`}>
								{`${i === 0 ? '— ' : ''} ${author.name}${(i + 1) === book.authors.length ? '.':', '}`}
							</MaterialLink>
					)}
				</Typography>
				{book.genres.length === 0 ? null
					: <Box sx={{
								display: "flex",
								flexDirection: "row",
								flexGrow: 1,
								flexWrap: "wrap",
								width: 'fit-content',
								marginBlock: "0.4vw"
							}}>
						{
							book.genres.map((genre, i) => <Box
								sx={{
									flexGrow: 1,
									color: '#FFFFFF',
									backgroundColor: '#03aaf9',
									width: 'fit-content',
									borderRadius: '4px',
									paddingInline: '3px',
									paddingBottom: '2px',
									marginLeft: '1vw',
									marginBlock: '2px',
								}}
							>
								{genre}
							</Box>)
						}
					</Box>
				}
				<Typography variant="body2" color="text.secondary" sx={{ textAlign: ""}}>
					{book.description}
				</Typography>
				{isNull(book.tags) ? null 
				: <Box sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					flexGrow: 1,
					width: 'fit-content',
					marginBlock: "2vw"
				}}>
					{
						book.tags.map((tag, i) => <Box
							sx={{
								flexGrow: 1,
								color: '#FFFFFF',
								backgroundColor: '#80cc00',
								width: 'fit-content',
								borderRadius: '4px',
								paddingInline: '3px',
								paddingBottom: '2px',
								marginLeft: '1vw',
								marginBlock: '2px'
							}}
						>
							{tag}
						</Box>)
					}
				</Box>}
			</CardContent>
			<CardActions>
				<Button size="big"></Button>
			</CardActions>
		</Card>}
		</>
    )
}

export default Book;
