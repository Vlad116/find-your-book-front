import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import { getData } from '../utils/api.js'
import { host } from '../constants'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import PersonIcon from '@mui/icons-material/Person';

const Author = () => {
	const { authorId } = useParams();
	const [author, setAuthor] = useState({})
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if(isLoading) {
			setLoading(true)
			getData(`${host}/author/${authorId}`).then((json) => {
				setAuthor(json)
				setLoading(false)
			})
		}
	}, [])

	return (
		<>
			{!isLoading && <Card sx={{ maxWidth: 1400 }}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div" sx={{textAlign: "start", display: "flex", flexDirection: "row"}}>
						<PersonIcon/> {author.name}
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
